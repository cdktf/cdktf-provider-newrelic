# `cloudAwsGovcloudIntegrations` Submodule <a name="`cloudAwsGovcloudIntegrations` Submodule" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudAwsGovcloudIntegrations <a name="CloudAwsGovcloudIntegrations" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations newrelic_cloud_aws_govcloud_integrations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrations;

CloudAwsGovcloudIntegrations.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .linkedAccountId(java.lang.Number)
//  .accountId(java.lang.Number)
//  .alb(CloudAwsGovcloudIntegrationsAlb)
//  .apiGateway(CloudAwsGovcloudIntegrationsApiGateway)
//  .autoScaling(CloudAwsGovcloudIntegrationsAutoScaling)
//  .awsDirectConnect(CloudAwsGovcloudIntegrationsAwsDirectConnect)
//  .awsStates(CloudAwsGovcloudIntegrationsAwsStates)
//  .cloudtrail(CloudAwsGovcloudIntegrationsCloudtrail)
//  .dynamoDb(CloudAwsGovcloudIntegrationsDynamoDb)
//  .ebs(CloudAwsGovcloudIntegrationsEbs)
//  .ec2(CloudAwsGovcloudIntegrationsEc2)
//  .elasticSearch(CloudAwsGovcloudIntegrationsElasticSearch)
//  .elb(CloudAwsGovcloudIntegrationsElb)
//  .emr(CloudAwsGovcloudIntegrationsEmr)
//  .iam(CloudAwsGovcloudIntegrationsIam)
//  .id(java.lang.String)
//  .lambda(CloudAwsGovcloudIntegrationsLambda)
//  .rds(CloudAwsGovcloudIntegrationsRds)
//  .redShift(CloudAwsGovcloudIntegrationsRedShift)
//  .route53(CloudAwsGovcloudIntegrationsRoute53)
//  .s3(CloudAwsGovcloudIntegrationsS3)
//  .sns(CloudAwsGovcloudIntegrationsSns)
//  .sqs(CloudAwsGovcloudIntegrationsSqs)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.linkedAccountId">linkedAccountId</a></code> | <code>java.lang.Number</code> | The ID of the linked AwsGovCloud account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.Number</code> | The ID of the account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.alb">alb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb">CloudAwsGovcloudIntegrationsAlb</a></code> | alb block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.apiGateway">apiGateway</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway">CloudAwsGovcloudIntegrationsApiGateway</a></code> | api_gateway block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.autoScaling">autoScaling</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScaling">CloudAwsGovcloudIntegrationsAutoScaling</a></code> | auto_scaling block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.awsDirectConnect">awsDirectConnect</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnect">CloudAwsGovcloudIntegrationsAwsDirectConnect</a></code> | aws_direct_connect block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.awsStates">awsStates</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStates">CloudAwsGovcloudIntegrationsAwsStates</a></code> | aws_states block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.cloudtrail">cloudtrail</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrail">CloudAwsGovcloudIntegrationsCloudtrail</a></code> | cloudtrail block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.dynamoDb">dynamoDb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb">CloudAwsGovcloudIntegrationsDynamoDb</a></code> | dynamo_db block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs">CloudAwsGovcloudIntegrationsEbs</a></code> | ebs block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.ec2">ec2</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2">CloudAwsGovcloudIntegrationsEc2</a></code> | ec2 block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.elasticSearch">elasticSearch</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch">CloudAwsGovcloudIntegrationsElasticSearch</a></code> | elastic_search block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.elb">elb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb">CloudAwsGovcloudIntegrationsElb</a></code> | elb block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.emr">emr</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr">CloudAwsGovcloudIntegrationsEmr</a></code> | emr block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.iam">iam</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIam">CloudAwsGovcloudIntegrationsIam</a></code> | iam block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#id CloudAwsGovcloudIntegrations#id}. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.lambda">lambda</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda">CloudAwsGovcloudIntegrationsLambda</a></code> | lambda block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.rds">rds</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds">CloudAwsGovcloudIntegrationsRds</a></code> | rds block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.redShift">redShift</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift">CloudAwsGovcloudIntegrationsRedShift</a></code> | red_shift block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.route53">route53</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53">CloudAwsGovcloudIntegrationsRoute53</a></code> | route53 block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.s3">s3</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3">CloudAwsGovcloudIntegrationsS3</a></code> | s3 block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.sns">sns</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSns">CloudAwsGovcloudIntegrationsSns</a></code> | sns block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.sqs">sqs</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs">CloudAwsGovcloudIntegrationsSqs</a></code> | sqs block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `linkedAccountId`<sup>Required</sup> <a name="linkedAccountId" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.linkedAccountId"></a>

- *Type:* java.lang.Number

The ID of the linked AwsGovCloud account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#linked_account_id CloudAwsGovcloudIntegrations#linked_account_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.accountId"></a>

- *Type:* java.lang.Number

The ID of the account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#account_id CloudAwsGovcloudIntegrations#account_id}

---

##### `alb`<sup>Optional</sup> <a name="alb" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.alb"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb">CloudAwsGovcloudIntegrationsAlb</a>

alb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#alb CloudAwsGovcloudIntegrations#alb}

---

##### `apiGateway`<sup>Optional</sup> <a name="apiGateway" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.apiGateway"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway">CloudAwsGovcloudIntegrationsApiGateway</a>

api_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#api_gateway CloudAwsGovcloudIntegrations#api_gateway}

---

##### `autoScaling`<sup>Optional</sup> <a name="autoScaling" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.autoScaling"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScaling">CloudAwsGovcloudIntegrationsAutoScaling</a>

auto_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#auto_scaling CloudAwsGovcloudIntegrations#auto_scaling}

---

##### `awsDirectConnect`<sup>Optional</sup> <a name="awsDirectConnect" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.awsDirectConnect"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnect">CloudAwsGovcloudIntegrationsAwsDirectConnect</a>

aws_direct_connect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#aws_direct_connect CloudAwsGovcloudIntegrations#aws_direct_connect}

---

##### `awsStates`<sup>Optional</sup> <a name="awsStates" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.awsStates"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStates">CloudAwsGovcloudIntegrationsAwsStates</a>

aws_states block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#aws_states CloudAwsGovcloudIntegrations#aws_states}

---

##### `cloudtrail`<sup>Optional</sup> <a name="cloudtrail" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.cloudtrail"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrail">CloudAwsGovcloudIntegrationsCloudtrail</a>

cloudtrail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#cloudtrail CloudAwsGovcloudIntegrations#cloudtrail}

---

##### `dynamoDb`<sup>Optional</sup> <a name="dynamoDb" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.dynamoDb"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb">CloudAwsGovcloudIntegrationsDynamoDb</a>

dynamo_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#dynamo_db CloudAwsGovcloudIntegrations#dynamo_db}

---

##### `ebs`<sup>Optional</sup> <a name="ebs" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.ebs"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs">CloudAwsGovcloudIntegrationsEbs</a>

ebs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#ebs CloudAwsGovcloudIntegrations#ebs}

---

##### `ec2`<sup>Optional</sup> <a name="ec2" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.ec2"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2">CloudAwsGovcloudIntegrationsEc2</a>

ec2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#ec2 CloudAwsGovcloudIntegrations#ec2}

---

##### `elasticSearch`<sup>Optional</sup> <a name="elasticSearch" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.elasticSearch"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch">CloudAwsGovcloudIntegrationsElasticSearch</a>

elastic_search block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#elastic_search CloudAwsGovcloudIntegrations#elastic_search}

---

##### `elb`<sup>Optional</sup> <a name="elb" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.elb"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb">CloudAwsGovcloudIntegrationsElb</a>

elb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#elb CloudAwsGovcloudIntegrations#elb}

---

##### `emr`<sup>Optional</sup> <a name="emr" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.emr"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr">CloudAwsGovcloudIntegrationsEmr</a>

emr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#emr CloudAwsGovcloudIntegrations#emr}

---

##### `iam`<sup>Optional</sup> <a name="iam" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.iam"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIam">CloudAwsGovcloudIntegrationsIam</a>

iam block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#iam CloudAwsGovcloudIntegrations#iam}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#id CloudAwsGovcloudIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lambda`<sup>Optional</sup> <a name="lambda" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.lambda"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda">CloudAwsGovcloudIntegrationsLambda</a>

lambda block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#lambda CloudAwsGovcloudIntegrations#lambda}

---

##### `rds`<sup>Optional</sup> <a name="rds" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.rds"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds">CloudAwsGovcloudIntegrationsRds</a>

rds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#rds CloudAwsGovcloudIntegrations#rds}

---

##### `redShift`<sup>Optional</sup> <a name="redShift" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.redShift"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift">CloudAwsGovcloudIntegrationsRedShift</a>

red_shift block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#red_shift CloudAwsGovcloudIntegrations#red_shift}

---

##### `route53`<sup>Optional</sup> <a name="route53" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.route53"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53">CloudAwsGovcloudIntegrationsRoute53</a>

route53 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#route53 CloudAwsGovcloudIntegrations#route53}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.s3"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3">CloudAwsGovcloudIntegrationsS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#s3 CloudAwsGovcloudIntegrations#s3}

---

##### `sns`<sup>Optional</sup> <a name="sns" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.sns"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSns">CloudAwsGovcloudIntegrationsSns</a>

sns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#sns CloudAwsGovcloudIntegrations#sns}

---

##### `sqs`<sup>Optional</sup> <a name="sqs" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.sqs"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs">CloudAwsGovcloudIntegrationsSqs</a>

sqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#sqs CloudAwsGovcloudIntegrations#sqs}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putAlb">putAlb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putApiGateway">putApiGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putAutoScaling">putAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putAwsDirectConnect">putAwsDirectConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putAwsStates">putAwsStates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putCloudtrail">putCloudtrail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putDynamoDb">putDynamoDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putEbs">putEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putEc2">putEc2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putElasticSearch">putElasticSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putElb">putElb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putEmr">putEmr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putIam">putIam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putLambda">putLambda</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putRds">putRds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putRedShift">putRedShift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putRoute53">putRoute53</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putSns">putSns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putSqs">putSqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetAlb">resetAlb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetApiGateway">resetApiGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetAutoScaling">resetAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetAwsDirectConnect">resetAwsDirectConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetAwsStates">resetAwsStates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetCloudtrail">resetCloudtrail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetDynamoDb">resetDynamoDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetEbs">resetEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetEc2">resetEc2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetElasticSearch">resetElasticSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetElb">resetElb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetEmr">resetEmr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetIam">resetIam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetLambda">resetLambda</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetRds">resetRds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetRedShift">resetRedShift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetRoute53">resetRoute53</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetS3">resetS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetSns">resetSns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetSqs">resetSqs</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAlb` <a name="putAlb" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putAlb"></a>

```java
public void putAlb(CloudAwsGovcloudIntegrationsAlb value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putAlb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb">CloudAwsGovcloudIntegrationsAlb</a>

---

##### `putApiGateway` <a name="putApiGateway" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putApiGateway"></a>

```java
public void putApiGateway(CloudAwsGovcloudIntegrationsApiGateway value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putApiGateway.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway">CloudAwsGovcloudIntegrationsApiGateway</a>

---

##### `putAutoScaling` <a name="putAutoScaling" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putAutoScaling"></a>

```java
public void putAutoScaling(CloudAwsGovcloudIntegrationsAutoScaling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScaling">CloudAwsGovcloudIntegrationsAutoScaling</a>

---

##### `putAwsDirectConnect` <a name="putAwsDirectConnect" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putAwsDirectConnect"></a>

```java
public void putAwsDirectConnect(CloudAwsGovcloudIntegrationsAwsDirectConnect value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putAwsDirectConnect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnect">CloudAwsGovcloudIntegrationsAwsDirectConnect</a>

---

##### `putAwsStates` <a name="putAwsStates" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putAwsStates"></a>

```java
public void putAwsStates(CloudAwsGovcloudIntegrationsAwsStates value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putAwsStates.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStates">CloudAwsGovcloudIntegrationsAwsStates</a>

---

##### `putCloudtrail` <a name="putCloudtrail" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putCloudtrail"></a>

```java
public void putCloudtrail(CloudAwsGovcloudIntegrationsCloudtrail value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putCloudtrail.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrail">CloudAwsGovcloudIntegrationsCloudtrail</a>

---

##### `putDynamoDb` <a name="putDynamoDb" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putDynamoDb"></a>

```java
public void putDynamoDb(CloudAwsGovcloudIntegrationsDynamoDb value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putDynamoDb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb">CloudAwsGovcloudIntegrationsDynamoDb</a>

---

##### `putEbs` <a name="putEbs" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putEbs"></a>

```java
public void putEbs(CloudAwsGovcloudIntegrationsEbs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putEbs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs">CloudAwsGovcloudIntegrationsEbs</a>

---

##### `putEc2` <a name="putEc2" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putEc2"></a>

```java
public void putEc2(CloudAwsGovcloudIntegrationsEc2 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putEc2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2">CloudAwsGovcloudIntegrationsEc2</a>

---

##### `putElasticSearch` <a name="putElasticSearch" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putElasticSearch"></a>

```java
public void putElasticSearch(CloudAwsGovcloudIntegrationsElasticSearch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putElasticSearch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch">CloudAwsGovcloudIntegrationsElasticSearch</a>

---

##### `putElb` <a name="putElb" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putElb"></a>

```java
public void putElb(CloudAwsGovcloudIntegrationsElb value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putElb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb">CloudAwsGovcloudIntegrationsElb</a>

---

##### `putEmr` <a name="putEmr" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putEmr"></a>

```java
public void putEmr(CloudAwsGovcloudIntegrationsEmr value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putEmr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr">CloudAwsGovcloudIntegrationsEmr</a>

---

##### `putIam` <a name="putIam" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putIam"></a>

```java
public void putIam(CloudAwsGovcloudIntegrationsIam value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putIam.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIam">CloudAwsGovcloudIntegrationsIam</a>

---

##### `putLambda` <a name="putLambda" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putLambda"></a>

```java
public void putLambda(CloudAwsGovcloudIntegrationsLambda value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putLambda.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda">CloudAwsGovcloudIntegrationsLambda</a>

---

##### `putRds` <a name="putRds" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putRds"></a>

```java
public void putRds(CloudAwsGovcloudIntegrationsRds value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putRds.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds">CloudAwsGovcloudIntegrationsRds</a>

---

##### `putRedShift` <a name="putRedShift" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putRedShift"></a>

```java
public void putRedShift(CloudAwsGovcloudIntegrationsRedShift value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putRedShift.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift">CloudAwsGovcloudIntegrationsRedShift</a>

---

##### `putRoute53` <a name="putRoute53" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putRoute53"></a>

```java
public void putRoute53(CloudAwsGovcloudIntegrationsRoute53 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putRoute53.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53">CloudAwsGovcloudIntegrationsRoute53</a>

---

##### `putS3` <a name="putS3" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putS3"></a>

```java
public void putS3(CloudAwsGovcloudIntegrationsS3 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3">CloudAwsGovcloudIntegrationsS3</a>

---

##### `putSns` <a name="putSns" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putSns"></a>

```java
public void putSns(CloudAwsGovcloudIntegrationsSns value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putSns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSns">CloudAwsGovcloudIntegrationsSns</a>

---

##### `putSqs` <a name="putSqs" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putSqs"></a>

```java
public void putSqs(CloudAwsGovcloudIntegrationsSqs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putSqs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs">CloudAwsGovcloudIntegrationsSqs</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetAlb` <a name="resetAlb" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetAlb"></a>

```java
public void resetAlb()
```

##### `resetApiGateway` <a name="resetApiGateway" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetApiGateway"></a>

```java
public void resetApiGateway()
```

##### `resetAutoScaling` <a name="resetAutoScaling" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetAutoScaling"></a>

```java
public void resetAutoScaling()
```

##### `resetAwsDirectConnect` <a name="resetAwsDirectConnect" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetAwsDirectConnect"></a>

```java
public void resetAwsDirectConnect()
```

##### `resetAwsStates` <a name="resetAwsStates" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetAwsStates"></a>

```java
public void resetAwsStates()
```

##### `resetCloudtrail` <a name="resetCloudtrail" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetCloudtrail"></a>

```java
public void resetCloudtrail()
```

##### `resetDynamoDb` <a name="resetDynamoDb" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetDynamoDb"></a>

```java
public void resetDynamoDb()
```

##### `resetEbs` <a name="resetEbs" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetEbs"></a>

```java
public void resetEbs()
```

##### `resetEc2` <a name="resetEc2" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetEc2"></a>

```java
public void resetEc2()
```

##### `resetElasticSearch` <a name="resetElasticSearch" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetElasticSearch"></a>

```java
public void resetElasticSearch()
```

##### `resetElb` <a name="resetElb" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetElb"></a>

```java
public void resetElb()
```

##### `resetEmr` <a name="resetEmr" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetEmr"></a>

```java
public void resetEmr()
```

##### `resetIam` <a name="resetIam" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetIam"></a>

```java
public void resetIam()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetId"></a>

```java
public void resetId()
```

##### `resetLambda` <a name="resetLambda" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetLambda"></a>

```java
public void resetLambda()
```

##### `resetRds` <a name="resetRds" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetRds"></a>

```java
public void resetRds()
```

##### `resetRedShift` <a name="resetRedShift" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetRedShift"></a>

```java
public void resetRedShift()
```

##### `resetRoute53` <a name="resetRoute53" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetRoute53"></a>

```java
public void resetRoute53()
```

##### `resetS3` <a name="resetS3" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetS3"></a>

```java
public void resetS3()
```

##### `resetSns` <a name="resetSns" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetSns"></a>

```java
public void resetSns()
```

##### `resetSqs` <a name="resetSqs" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetSqs"></a>

```java
public void resetSqs()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudAwsGovcloudIntegrations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrations;

CloudAwsGovcloudIntegrations.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrations;

CloudAwsGovcloudIntegrations.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrations;

CloudAwsGovcloudIntegrations.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrations;

CloudAwsGovcloudIntegrations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudAwsGovcloudIntegrations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CloudAwsGovcloudIntegrations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudAwsGovcloudIntegrations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudAwsGovcloudIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CloudAwsGovcloudIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.alb">alb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference">CloudAwsGovcloudIntegrationsAlbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.apiGateway">apiGateway</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference">CloudAwsGovcloudIntegrationsApiGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.autoScaling">autoScaling</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference">CloudAwsGovcloudIntegrationsAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.awsDirectConnect">awsDirectConnect</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference">CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.awsStates">awsStates</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference">CloudAwsGovcloudIntegrationsAwsStatesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.cloudtrail">cloudtrail</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference">CloudAwsGovcloudIntegrationsCloudtrailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.dynamoDb">dynamoDb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference">CloudAwsGovcloudIntegrationsDynamoDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference">CloudAwsGovcloudIntegrationsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.ec2">ec2</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference">CloudAwsGovcloudIntegrationsEc2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.elasticSearch">elasticSearch</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference">CloudAwsGovcloudIntegrationsElasticSearchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.elb">elb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference">CloudAwsGovcloudIntegrationsElbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.emr">emr</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference">CloudAwsGovcloudIntegrationsEmrOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.iam">iam</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference">CloudAwsGovcloudIntegrationsIamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.lambda">lambda</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference">CloudAwsGovcloudIntegrationsLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.rds">rds</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference">CloudAwsGovcloudIntegrationsRdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.redShift">redShift</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference">CloudAwsGovcloudIntegrationsRedShiftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.route53">route53</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference">CloudAwsGovcloudIntegrationsRoute53OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference">CloudAwsGovcloudIntegrationsS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.sns">sns</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference">CloudAwsGovcloudIntegrationsSnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.sqs">sqs</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference">CloudAwsGovcloudIntegrationsSqsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.albInput">albInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb">CloudAwsGovcloudIntegrationsAlb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.apiGatewayInput">apiGatewayInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway">CloudAwsGovcloudIntegrationsApiGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.autoScalingInput">autoScalingInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScaling">CloudAwsGovcloudIntegrationsAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.awsDirectConnectInput">awsDirectConnectInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnect">CloudAwsGovcloudIntegrationsAwsDirectConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.awsStatesInput">awsStatesInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStates">CloudAwsGovcloudIntegrationsAwsStates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.cloudtrailInput">cloudtrailInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrail">CloudAwsGovcloudIntegrationsCloudtrail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.dynamoDbInput">dynamoDbInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb">CloudAwsGovcloudIntegrationsDynamoDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.ebsInput">ebsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs">CloudAwsGovcloudIntegrationsEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.ec2Input">ec2Input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2">CloudAwsGovcloudIntegrationsEc2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.elasticSearchInput">elasticSearchInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch">CloudAwsGovcloudIntegrationsElasticSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.elbInput">elbInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb">CloudAwsGovcloudIntegrationsElb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.emrInput">emrInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr">CloudAwsGovcloudIntegrationsEmr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.iamInput">iamInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIam">CloudAwsGovcloudIntegrationsIam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.lambdaInput">lambdaInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda">CloudAwsGovcloudIntegrationsLambda</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.linkedAccountIdInput">linkedAccountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.rdsInput">rdsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds">CloudAwsGovcloudIntegrationsRds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.redShiftInput">redShiftInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift">CloudAwsGovcloudIntegrationsRedShift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.route53Input">route53Input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53">CloudAwsGovcloudIntegrationsRoute53</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.s3Input">s3Input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3">CloudAwsGovcloudIntegrationsS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.snsInput">snsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSns">CloudAwsGovcloudIntegrationsSns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.sqsInput">sqsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs">CloudAwsGovcloudIntegrationsSqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.linkedAccountId">linkedAccountId</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alb`<sup>Required</sup> <a name="alb" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.alb"></a>

```java
public CloudAwsGovcloudIntegrationsAlbOutputReference getAlb();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference">CloudAwsGovcloudIntegrationsAlbOutputReference</a>

---

##### `apiGateway`<sup>Required</sup> <a name="apiGateway" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.apiGateway"></a>

```java
public CloudAwsGovcloudIntegrationsApiGatewayOutputReference getApiGateway();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference">CloudAwsGovcloudIntegrationsApiGatewayOutputReference</a>

---

##### `autoScaling`<sup>Required</sup> <a name="autoScaling" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.autoScaling"></a>

```java
public CloudAwsGovcloudIntegrationsAutoScalingOutputReference getAutoScaling();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference">CloudAwsGovcloudIntegrationsAutoScalingOutputReference</a>

---

##### `awsDirectConnect`<sup>Required</sup> <a name="awsDirectConnect" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.awsDirectConnect"></a>

```java
public CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference getAwsDirectConnect();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference">CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference</a>

---

##### `awsStates`<sup>Required</sup> <a name="awsStates" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.awsStates"></a>

```java
public CloudAwsGovcloudIntegrationsAwsStatesOutputReference getAwsStates();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference">CloudAwsGovcloudIntegrationsAwsStatesOutputReference</a>

---

##### `cloudtrail`<sup>Required</sup> <a name="cloudtrail" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.cloudtrail"></a>

```java
public CloudAwsGovcloudIntegrationsCloudtrailOutputReference getCloudtrail();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference">CloudAwsGovcloudIntegrationsCloudtrailOutputReference</a>

---

##### `dynamoDb`<sup>Required</sup> <a name="dynamoDb" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.dynamoDb"></a>

```java
public CloudAwsGovcloudIntegrationsDynamoDbOutputReference getDynamoDb();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference">CloudAwsGovcloudIntegrationsDynamoDbOutputReference</a>

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.ebs"></a>

```java
public CloudAwsGovcloudIntegrationsEbsOutputReference getEbs();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference">CloudAwsGovcloudIntegrationsEbsOutputReference</a>

---

##### `ec2`<sup>Required</sup> <a name="ec2" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.ec2"></a>

```java
public CloudAwsGovcloudIntegrationsEc2OutputReference getEc2();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference">CloudAwsGovcloudIntegrationsEc2OutputReference</a>

---

##### `elasticSearch`<sup>Required</sup> <a name="elasticSearch" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.elasticSearch"></a>

```java
public CloudAwsGovcloudIntegrationsElasticSearchOutputReference getElasticSearch();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference">CloudAwsGovcloudIntegrationsElasticSearchOutputReference</a>

---

##### `elb`<sup>Required</sup> <a name="elb" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.elb"></a>

```java
public CloudAwsGovcloudIntegrationsElbOutputReference getElb();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference">CloudAwsGovcloudIntegrationsElbOutputReference</a>

---

##### `emr`<sup>Required</sup> <a name="emr" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.emr"></a>

```java
public CloudAwsGovcloudIntegrationsEmrOutputReference getEmr();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference">CloudAwsGovcloudIntegrationsEmrOutputReference</a>

---

##### `iam`<sup>Required</sup> <a name="iam" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.iam"></a>

```java
public CloudAwsGovcloudIntegrationsIamOutputReference getIam();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference">CloudAwsGovcloudIntegrationsIamOutputReference</a>

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.lambda"></a>

```java
public CloudAwsGovcloudIntegrationsLambdaOutputReference getLambda();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference">CloudAwsGovcloudIntegrationsLambdaOutputReference</a>

---

##### `rds`<sup>Required</sup> <a name="rds" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.rds"></a>

```java
public CloudAwsGovcloudIntegrationsRdsOutputReference getRds();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference">CloudAwsGovcloudIntegrationsRdsOutputReference</a>

---

##### `redShift`<sup>Required</sup> <a name="redShift" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.redShift"></a>

```java
public CloudAwsGovcloudIntegrationsRedShiftOutputReference getRedShift();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference">CloudAwsGovcloudIntegrationsRedShiftOutputReference</a>

---

##### `route53`<sup>Required</sup> <a name="route53" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.route53"></a>

```java
public CloudAwsGovcloudIntegrationsRoute53OutputReference getRoute53();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference">CloudAwsGovcloudIntegrationsRoute53OutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.s3"></a>

```java
public CloudAwsGovcloudIntegrationsS3OutputReference getS3();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference">CloudAwsGovcloudIntegrationsS3OutputReference</a>

---

##### `sns`<sup>Required</sup> <a name="sns" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.sns"></a>

```java
public CloudAwsGovcloudIntegrationsSnsOutputReference getSns();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference">CloudAwsGovcloudIntegrationsSnsOutputReference</a>

---

##### `sqs`<sup>Required</sup> <a name="sqs" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.sqs"></a>

```java
public CloudAwsGovcloudIntegrationsSqsOutputReference getSqs();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference">CloudAwsGovcloudIntegrationsSqsOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.accountIdInput"></a>

```java
public java.lang.Number getAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `albInput`<sup>Optional</sup> <a name="albInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.albInput"></a>

```java
public CloudAwsGovcloudIntegrationsAlb getAlbInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb">CloudAwsGovcloudIntegrationsAlb</a>

---

##### `apiGatewayInput`<sup>Optional</sup> <a name="apiGatewayInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.apiGatewayInput"></a>

```java
public CloudAwsGovcloudIntegrationsApiGateway getApiGatewayInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway">CloudAwsGovcloudIntegrationsApiGateway</a>

---

##### `autoScalingInput`<sup>Optional</sup> <a name="autoScalingInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.autoScalingInput"></a>

```java
public CloudAwsGovcloudIntegrationsAutoScaling getAutoScalingInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScaling">CloudAwsGovcloudIntegrationsAutoScaling</a>

---

##### `awsDirectConnectInput`<sup>Optional</sup> <a name="awsDirectConnectInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.awsDirectConnectInput"></a>

```java
public CloudAwsGovcloudIntegrationsAwsDirectConnect getAwsDirectConnectInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnect">CloudAwsGovcloudIntegrationsAwsDirectConnect</a>

---

##### `awsStatesInput`<sup>Optional</sup> <a name="awsStatesInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.awsStatesInput"></a>

```java
public CloudAwsGovcloudIntegrationsAwsStates getAwsStatesInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStates">CloudAwsGovcloudIntegrationsAwsStates</a>

---

##### `cloudtrailInput`<sup>Optional</sup> <a name="cloudtrailInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.cloudtrailInput"></a>

```java
public CloudAwsGovcloudIntegrationsCloudtrail getCloudtrailInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrail">CloudAwsGovcloudIntegrationsCloudtrail</a>

---

##### `dynamoDbInput`<sup>Optional</sup> <a name="dynamoDbInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.dynamoDbInput"></a>

```java
public CloudAwsGovcloudIntegrationsDynamoDb getDynamoDbInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb">CloudAwsGovcloudIntegrationsDynamoDb</a>

---

##### `ebsInput`<sup>Optional</sup> <a name="ebsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.ebsInput"></a>

```java
public CloudAwsGovcloudIntegrationsEbs getEbsInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs">CloudAwsGovcloudIntegrationsEbs</a>

---

##### `ec2Input`<sup>Optional</sup> <a name="ec2Input" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.ec2Input"></a>

```java
public CloudAwsGovcloudIntegrationsEc2 getEc2Input();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2">CloudAwsGovcloudIntegrationsEc2</a>

---

##### `elasticSearchInput`<sup>Optional</sup> <a name="elasticSearchInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.elasticSearchInput"></a>

```java
public CloudAwsGovcloudIntegrationsElasticSearch getElasticSearchInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch">CloudAwsGovcloudIntegrationsElasticSearch</a>

---

##### `elbInput`<sup>Optional</sup> <a name="elbInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.elbInput"></a>

```java
public CloudAwsGovcloudIntegrationsElb getElbInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb">CloudAwsGovcloudIntegrationsElb</a>

---

##### `emrInput`<sup>Optional</sup> <a name="emrInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.emrInput"></a>

```java
public CloudAwsGovcloudIntegrationsEmr getEmrInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr">CloudAwsGovcloudIntegrationsEmr</a>

---

##### `iamInput`<sup>Optional</sup> <a name="iamInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.iamInput"></a>

```java
public CloudAwsGovcloudIntegrationsIam getIamInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIam">CloudAwsGovcloudIntegrationsIam</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `lambdaInput`<sup>Optional</sup> <a name="lambdaInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.lambdaInput"></a>

```java
public CloudAwsGovcloudIntegrationsLambda getLambdaInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda">CloudAwsGovcloudIntegrationsLambda</a>

---

##### `linkedAccountIdInput`<sup>Optional</sup> <a name="linkedAccountIdInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.linkedAccountIdInput"></a>

```java
public java.lang.Number getLinkedAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `rdsInput`<sup>Optional</sup> <a name="rdsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.rdsInput"></a>

```java
public CloudAwsGovcloudIntegrationsRds getRdsInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds">CloudAwsGovcloudIntegrationsRds</a>

---

##### `redShiftInput`<sup>Optional</sup> <a name="redShiftInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.redShiftInput"></a>

```java
public CloudAwsGovcloudIntegrationsRedShift getRedShiftInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift">CloudAwsGovcloudIntegrationsRedShift</a>

---

##### `route53Input`<sup>Optional</sup> <a name="route53Input" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.route53Input"></a>

```java
public CloudAwsGovcloudIntegrationsRoute53 getRoute53Input();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53">CloudAwsGovcloudIntegrationsRoute53</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.s3Input"></a>

```java
public CloudAwsGovcloudIntegrationsS3 getS3Input();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3">CloudAwsGovcloudIntegrationsS3</a>

---

##### `snsInput`<sup>Optional</sup> <a name="snsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.snsInput"></a>

```java
public CloudAwsGovcloudIntegrationsSns getSnsInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSns">CloudAwsGovcloudIntegrationsSns</a>

---

##### `sqsInput`<sup>Optional</sup> <a name="sqsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.sqsInput"></a>

```java
public CloudAwsGovcloudIntegrationsSqs getSqsInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs">CloudAwsGovcloudIntegrationsSqs</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `linkedAccountId`<sup>Required</sup> <a name="linkedAccountId" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.linkedAccountId"></a>

```java
public java.lang.Number getLinkedAccountId();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudAwsGovcloudIntegrationsAlb <a name="CloudAwsGovcloudIntegrationsAlb" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsAlb;

CloudAwsGovcloudIntegrationsAlb.builder()
//  .awsRegions(java.util.List<java.lang.String>)
//  .fetchExtendedInventory(java.lang.Boolean|IResolvable)
//  .fetchTags(java.lang.Boolean|IResolvable)
//  .loadBalancerPrefixes(java.util.List<java.lang.String>)
//  .metricsPollingInterval(java.lang.Number)
//  .tagKey(java.lang.String)
//  .tagValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Determine if extra inventory data be collected or not. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb.property.fetchTags">fetchTags</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specify if tags should be collected. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb.property.loadBalancerPrefixes">loadBalancerPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Specify each name or prefix for the LBs that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}

---

##### `fetchExtendedInventory`<sup>Optional</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb.property.fetchExtendedInventory"></a>

```java
public java.lang.Boolean|IResolvable getFetchExtendedInventory();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#fetch_extended_inventory CloudAwsGovcloudIntegrations#fetch_extended_inventory}

---

##### `fetchTags`<sup>Optional</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb.property.fetchTags"></a>

```java
public java.lang.Boolean|IResolvable getFetchTags();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specify if tags should be collected.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#fetch_tags CloudAwsGovcloudIntegrations#fetch_tags}

---

##### `loadBalancerPrefixes`<sup>Optional</sup> <a name="loadBalancerPrefixes" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb.property.loadBalancerPrefixes"></a>

```java
public java.util.List<java.lang.String> getLoadBalancerPrefixes();
```

- *Type:* java.util.List<java.lang.String>

Specify each name or prefix for the LBs that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#load_balancer_prefixes CloudAwsGovcloudIntegrations#load_balancer_prefixes}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}

---

### CloudAwsGovcloudIntegrationsApiGateway <a name="CloudAwsGovcloudIntegrationsApiGateway" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsApiGateway;

CloudAwsGovcloudIntegrationsApiGateway.builder()
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
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway.property.stagePrefixes">stagePrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Determine if extra inventory data be collected or not. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

##### `stagePrefixes`<sup>Optional</sup> <a name="stagePrefixes" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway.property.stagePrefixes"></a>

```java
public java.util.List<java.lang.String> getStagePrefixes();
```

- *Type:* java.util.List<java.lang.String>

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#stage_prefixes CloudAwsGovcloudIntegrations#stage_prefixes}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}

---

### CloudAwsGovcloudIntegrationsAutoScaling <a name="CloudAwsGovcloudIntegrationsAutoScaling" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScaling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsAutoScaling;

CloudAwsGovcloudIntegrationsAutoScaling.builder()
//  .awsRegions(java.util.List<java.lang.String>)
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScaling.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScaling.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScaling.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScaling.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

### CloudAwsGovcloudIntegrationsAwsDirectConnect <a name="CloudAwsGovcloudIntegrationsAwsDirectConnect" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnect.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsAwsDirectConnect;

CloudAwsGovcloudIntegrationsAwsDirectConnect.builder()
//  .awsRegions(java.util.List<java.lang.String>)
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnect.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnect.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnect.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnect.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

### CloudAwsGovcloudIntegrationsAwsStates <a name="CloudAwsGovcloudIntegrationsAwsStates" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStates.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsAwsStates;

CloudAwsGovcloudIntegrationsAwsStates.builder()
//  .awsRegions(java.util.List<java.lang.String>)
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStates.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStates.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStates.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStates.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

### CloudAwsGovcloudIntegrationsCloudtrail <a name="CloudAwsGovcloudIntegrationsCloudtrail" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrail.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsCloudtrail;

CloudAwsGovcloudIntegrationsCloudtrail.builder()
//  .awsRegions(java.util.List<java.lang.String>)
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrail.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrail.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrail.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrail.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

### CloudAwsGovcloudIntegrationsConfig <a name="CloudAwsGovcloudIntegrationsConfig" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsConfig;

CloudAwsGovcloudIntegrationsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .linkedAccountId(java.lang.Number)
//  .accountId(java.lang.Number)
//  .alb(CloudAwsGovcloudIntegrationsAlb)
//  .apiGateway(CloudAwsGovcloudIntegrationsApiGateway)
//  .autoScaling(CloudAwsGovcloudIntegrationsAutoScaling)
//  .awsDirectConnect(CloudAwsGovcloudIntegrationsAwsDirectConnect)
//  .awsStates(CloudAwsGovcloudIntegrationsAwsStates)
//  .cloudtrail(CloudAwsGovcloudIntegrationsCloudtrail)
//  .dynamoDb(CloudAwsGovcloudIntegrationsDynamoDb)
//  .ebs(CloudAwsGovcloudIntegrationsEbs)
//  .ec2(CloudAwsGovcloudIntegrationsEc2)
//  .elasticSearch(CloudAwsGovcloudIntegrationsElasticSearch)
//  .elb(CloudAwsGovcloudIntegrationsElb)
//  .emr(CloudAwsGovcloudIntegrationsEmr)
//  .iam(CloudAwsGovcloudIntegrationsIam)
//  .id(java.lang.String)
//  .lambda(CloudAwsGovcloudIntegrationsLambda)
//  .rds(CloudAwsGovcloudIntegrationsRds)
//  .redShift(CloudAwsGovcloudIntegrationsRedShift)
//  .route53(CloudAwsGovcloudIntegrationsRoute53)
//  .s3(CloudAwsGovcloudIntegrationsS3)
//  .sns(CloudAwsGovcloudIntegrationsSns)
//  .sqs(CloudAwsGovcloudIntegrationsSqs)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.linkedAccountId">linkedAccountId</a></code> | <code>java.lang.Number</code> | The ID of the linked AwsGovCloud account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | The ID of the account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.alb">alb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb">CloudAwsGovcloudIntegrationsAlb</a></code> | alb block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.apiGateway">apiGateway</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway">CloudAwsGovcloudIntegrationsApiGateway</a></code> | api_gateway block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.autoScaling">autoScaling</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScaling">CloudAwsGovcloudIntegrationsAutoScaling</a></code> | auto_scaling block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.awsDirectConnect">awsDirectConnect</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnect">CloudAwsGovcloudIntegrationsAwsDirectConnect</a></code> | aws_direct_connect block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.awsStates">awsStates</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStates">CloudAwsGovcloudIntegrationsAwsStates</a></code> | aws_states block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.cloudtrail">cloudtrail</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrail">CloudAwsGovcloudIntegrationsCloudtrail</a></code> | cloudtrail block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.dynamoDb">dynamoDb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb">CloudAwsGovcloudIntegrationsDynamoDb</a></code> | dynamo_db block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs">CloudAwsGovcloudIntegrationsEbs</a></code> | ebs block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.ec2">ec2</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2">CloudAwsGovcloudIntegrationsEc2</a></code> | ec2 block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.elasticSearch">elasticSearch</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch">CloudAwsGovcloudIntegrationsElasticSearch</a></code> | elastic_search block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.elb">elb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb">CloudAwsGovcloudIntegrationsElb</a></code> | elb block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.emr">emr</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr">CloudAwsGovcloudIntegrationsEmr</a></code> | emr block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.iam">iam</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIam">CloudAwsGovcloudIntegrationsIam</a></code> | iam block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#id CloudAwsGovcloudIntegrations#id}. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.lambda">lambda</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda">CloudAwsGovcloudIntegrationsLambda</a></code> | lambda block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.rds">rds</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds">CloudAwsGovcloudIntegrationsRds</a></code> | rds block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.redShift">redShift</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift">CloudAwsGovcloudIntegrationsRedShift</a></code> | red_shift block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.route53">route53</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53">CloudAwsGovcloudIntegrationsRoute53</a></code> | route53 block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3">CloudAwsGovcloudIntegrationsS3</a></code> | s3 block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.sns">sns</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSns">CloudAwsGovcloudIntegrationsSns</a></code> | sns block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.sqs">sqs</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs">CloudAwsGovcloudIntegrationsSqs</a></code> | sqs block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `linkedAccountId`<sup>Required</sup> <a name="linkedAccountId" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.linkedAccountId"></a>

```java
public java.lang.Number getLinkedAccountId();
```

- *Type:* java.lang.Number

The ID of the linked AwsGovCloud account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#linked_account_id CloudAwsGovcloudIntegrations#linked_account_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

The ID of the account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#account_id CloudAwsGovcloudIntegrations#account_id}

---

##### `alb`<sup>Optional</sup> <a name="alb" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.alb"></a>

```java
public CloudAwsGovcloudIntegrationsAlb getAlb();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb">CloudAwsGovcloudIntegrationsAlb</a>

alb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#alb CloudAwsGovcloudIntegrations#alb}

---

##### `apiGateway`<sup>Optional</sup> <a name="apiGateway" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.apiGateway"></a>

```java
public CloudAwsGovcloudIntegrationsApiGateway getApiGateway();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway">CloudAwsGovcloudIntegrationsApiGateway</a>

api_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#api_gateway CloudAwsGovcloudIntegrations#api_gateway}

---

##### `autoScaling`<sup>Optional</sup> <a name="autoScaling" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.autoScaling"></a>

```java
public CloudAwsGovcloudIntegrationsAutoScaling getAutoScaling();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScaling">CloudAwsGovcloudIntegrationsAutoScaling</a>

auto_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#auto_scaling CloudAwsGovcloudIntegrations#auto_scaling}

---

##### `awsDirectConnect`<sup>Optional</sup> <a name="awsDirectConnect" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.awsDirectConnect"></a>

```java
public CloudAwsGovcloudIntegrationsAwsDirectConnect getAwsDirectConnect();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnect">CloudAwsGovcloudIntegrationsAwsDirectConnect</a>

aws_direct_connect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#aws_direct_connect CloudAwsGovcloudIntegrations#aws_direct_connect}

---

##### `awsStates`<sup>Optional</sup> <a name="awsStates" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.awsStates"></a>

```java
public CloudAwsGovcloudIntegrationsAwsStates getAwsStates();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStates">CloudAwsGovcloudIntegrationsAwsStates</a>

aws_states block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#aws_states CloudAwsGovcloudIntegrations#aws_states}

---

##### `cloudtrail`<sup>Optional</sup> <a name="cloudtrail" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.cloudtrail"></a>

```java
public CloudAwsGovcloudIntegrationsCloudtrail getCloudtrail();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrail">CloudAwsGovcloudIntegrationsCloudtrail</a>

cloudtrail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#cloudtrail CloudAwsGovcloudIntegrations#cloudtrail}

---

##### `dynamoDb`<sup>Optional</sup> <a name="dynamoDb" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.dynamoDb"></a>

```java
public CloudAwsGovcloudIntegrationsDynamoDb getDynamoDb();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb">CloudAwsGovcloudIntegrationsDynamoDb</a>

dynamo_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#dynamo_db CloudAwsGovcloudIntegrations#dynamo_db}

---

##### `ebs`<sup>Optional</sup> <a name="ebs" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.ebs"></a>

```java
public CloudAwsGovcloudIntegrationsEbs getEbs();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs">CloudAwsGovcloudIntegrationsEbs</a>

ebs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#ebs CloudAwsGovcloudIntegrations#ebs}

---

##### `ec2`<sup>Optional</sup> <a name="ec2" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.ec2"></a>

```java
public CloudAwsGovcloudIntegrationsEc2 getEc2();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2">CloudAwsGovcloudIntegrationsEc2</a>

ec2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#ec2 CloudAwsGovcloudIntegrations#ec2}

---

##### `elasticSearch`<sup>Optional</sup> <a name="elasticSearch" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.elasticSearch"></a>

```java
public CloudAwsGovcloudIntegrationsElasticSearch getElasticSearch();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch">CloudAwsGovcloudIntegrationsElasticSearch</a>

elastic_search block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#elastic_search CloudAwsGovcloudIntegrations#elastic_search}

---

##### `elb`<sup>Optional</sup> <a name="elb" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.elb"></a>

```java
public CloudAwsGovcloudIntegrationsElb getElb();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb">CloudAwsGovcloudIntegrationsElb</a>

elb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#elb CloudAwsGovcloudIntegrations#elb}

---

##### `emr`<sup>Optional</sup> <a name="emr" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.emr"></a>

```java
public CloudAwsGovcloudIntegrationsEmr getEmr();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr">CloudAwsGovcloudIntegrationsEmr</a>

emr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#emr CloudAwsGovcloudIntegrations#emr}

---

##### `iam`<sup>Optional</sup> <a name="iam" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.iam"></a>

```java
public CloudAwsGovcloudIntegrationsIam getIam();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIam">CloudAwsGovcloudIntegrationsIam</a>

iam block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#iam CloudAwsGovcloudIntegrations#iam}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#id CloudAwsGovcloudIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lambda`<sup>Optional</sup> <a name="lambda" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.lambda"></a>

```java
public CloudAwsGovcloudIntegrationsLambda getLambda();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda">CloudAwsGovcloudIntegrationsLambda</a>

lambda block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#lambda CloudAwsGovcloudIntegrations#lambda}

---

##### `rds`<sup>Optional</sup> <a name="rds" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.rds"></a>

```java
public CloudAwsGovcloudIntegrationsRds getRds();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds">CloudAwsGovcloudIntegrationsRds</a>

rds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#rds CloudAwsGovcloudIntegrations#rds}

---

##### `redShift`<sup>Optional</sup> <a name="redShift" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.redShift"></a>

```java
public CloudAwsGovcloudIntegrationsRedShift getRedShift();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift">CloudAwsGovcloudIntegrationsRedShift</a>

red_shift block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#red_shift CloudAwsGovcloudIntegrations#red_shift}

---

##### `route53`<sup>Optional</sup> <a name="route53" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.route53"></a>

```java
public CloudAwsGovcloudIntegrationsRoute53 getRoute53();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53">CloudAwsGovcloudIntegrationsRoute53</a>

route53 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#route53 CloudAwsGovcloudIntegrations#route53}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.s3"></a>

```java
public CloudAwsGovcloudIntegrationsS3 getS3();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3">CloudAwsGovcloudIntegrationsS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#s3 CloudAwsGovcloudIntegrations#s3}

---

##### `sns`<sup>Optional</sup> <a name="sns" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.sns"></a>

```java
public CloudAwsGovcloudIntegrationsSns getSns();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSns">CloudAwsGovcloudIntegrationsSns</a>

sns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#sns CloudAwsGovcloudIntegrations#sns}

---

##### `sqs`<sup>Optional</sup> <a name="sqs" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.sqs"></a>

```java
public CloudAwsGovcloudIntegrationsSqs getSqs();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs">CloudAwsGovcloudIntegrationsSqs</a>

sqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#sqs CloudAwsGovcloudIntegrations#sqs}

---

### CloudAwsGovcloudIntegrationsDynamoDb <a name="CloudAwsGovcloudIntegrationsDynamoDb" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsDynamoDb;

CloudAwsGovcloudIntegrationsDynamoDb.builder()
//  .awsRegions(java.util.List<java.lang.String>)
//  .fetchExtendedInventory(java.lang.Boolean|IResolvable)
//  .fetchTags(java.lang.Boolean|IResolvable)
//  .metricsPollingInterval(java.lang.Number)
//  .tagKey(java.lang.String)
//  .tagValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Determine if extra inventory data be collected or not. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb.property.fetchTags">fetchTags</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specify if tags should be collected. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}

---

##### `fetchExtendedInventory`<sup>Optional</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb.property.fetchExtendedInventory"></a>

```java
public java.lang.Boolean|IResolvable getFetchExtendedInventory();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#fetch_extended_inventory CloudAwsGovcloudIntegrations#fetch_extended_inventory}

---

##### `fetchTags`<sup>Optional</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb.property.fetchTags"></a>

```java
public java.lang.Boolean|IResolvable getFetchTags();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specify if tags should be collected.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#fetch_tags CloudAwsGovcloudIntegrations#fetch_tags}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}

---

### CloudAwsGovcloudIntegrationsEbs <a name="CloudAwsGovcloudIntegrationsEbs" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsEbs;

CloudAwsGovcloudIntegrationsEbs.builder()
//  .awsRegions(java.util.List<java.lang.String>)
//  .fetchExtendedInventory(java.lang.Boolean|IResolvable)
//  .metricsPollingInterval(java.lang.Number)
//  .tagKey(java.lang.String)
//  .tagValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Determine if extra inventory data be collected or not. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}

---

##### `fetchExtendedInventory`<sup>Optional</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs.property.fetchExtendedInventory"></a>

```java
public java.lang.Boolean|IResolvable getFetchExtendedInventory();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#fetch_extended_inventory CloudAwsGovcloudIntegrations#fetch_extended_inventory}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}

---

### CloudAwsGovcloudIntegrationsEc2 <a name="CloudAwsGovcloudIntegrationsEc2" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsEc2;

CloudAwsGovcloudIntegrationsEc2.builder()
//  .awsRegions(java.util.List<java.lang.String>)
//  .fetchIpAddresses(java.lang.Boolean|IResolvable)
//  .metricsPollingInterval(java.lang.Number)
//  .tagKey(java.lang.String)
//  .tagValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2.property.fetchIpAddresses">fetchIpAddresses</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specify if IP addresses of ec2 instance should be collected. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}

---

##### `fetchIpAddresses`<sup>Optional</sup> <a name="fetchIpAddresses" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2.property.fetchIpAddresses"></a>

```java
public java.lang.Boolean|IResolvable getFetchIpAddresses();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specify if IP addresses of ec2 instance should be collected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#fetch_ip_addresses CloudAwsGovcloudIntegrations#fetch_ip_addresses}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}

---

### CloudAwsGovcloudIntegrationsElasticSearch <a name="CloudAwsGovcloudIntegrationsElasticSearch" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsElasticSearch;

CloudAwsGovcloudIntegrationsElasticSearch.builder()
//  .awsRegions(java.util.List<java.lang.String>)
//  .fetchNodes(java.lang.Boolean|IResolvable)
//  .metricsPollingInterval(java.lang.Number)
//  .tagKey(java.lang.String)
//  .tagValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch.property.fetchNodes">fetchNodes</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specify if IP addresses of ec2 instance should be collected. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}

---

##### `fetchNodes`<sup>Optional</sup> <a name="fetchNodes" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch.property.fetchNodes"></a>

```java
public java.lang.Boolean|IResolvable getFetchNodes();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specify if IP addresses of ec2 instance should be collected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#fetch_nodes CloudAwsGovcloudIntegrations#fetch_nodes}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}

---

### CloudAwsGovcloudIntegrationsElb <a name="CloudAwsGovcloudIntegrationsElb" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsElb;

CloudAwsGovcloudIntegrationsElb.builder()
//  .awsRegions(java.util.List<java.lang.String>)
//  .fetchExtendedInventory(java.lang.Boolean|IResolvable)
//  .fetchTags(java.lang.Boolean|IResolvable)
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Determine if extra inventory data be collected or not. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb.property.fetchTags">fetchTags</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specify if tags should be collected. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}

---

##### `fetchExtendedInventory`<sup>Optional</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb.property.fetchExtendedInventory"></a>

```java
public java.lang.Boolean|IResolvable getFetchExtendedInventory();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#fetch_extended_inventory CloudAwsGovcloudIntegrations#fetch_extended_inventory}

---

##### `fetchTags`<sup>Optional</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb.property.fetchTags"></a>

```java
public java.lang.Boolean|IResolvable getFetchTags();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specify if tags should be collected.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#fetch_tags CloudAwsGovcloudIntegrations#fetch_tags}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

### CloudAwsGovcloudIntegrationsEmr <a name="CloudAwsGovcloudIntegrationsEmr" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsEmr;

CloudAwsGovcloudIntegrationsEmr.builder()
//  .awsRegions(java.lang.String)
//  .fetchTags(java.lang.Boolean|IResolvable)
//  .metricsPollingInterval(java.lang.Number)
//  .tagKey(java.lang.String)
//  .tagValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr.property.awsRegions">awsRegions</a></code> | <code>java.lang.String</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr.property.fetchTags">fetchTags</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specify if tags should be collected. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr.property.awsRegions"></a>

```java
public java.lang.String getAwsRegions();
```

- *Type:* java.lang.String

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}

---

##### `fetchTags`<sup>Optional</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr.property.fetchTags"></a>

```java
public java.lang.Boolean|IResolvable getFetchTags();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specify if tags should be collected.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#fetch_tags CloudAwsGovcloudIntegrations#fetch_tags}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}

---

### CloudAwsGovcloudIntegrationsIam <a name="CloudAwsGovcloudIntegrationsIam" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIam.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsIam;

CloudAwsGovcloudIntegrationsIam.builder()
//  .metricsPollingInterval(java.lang.Number)
//  .tagKey(java.lang.String)
//  .tagValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIam.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIam.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIam.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIam.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIam.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIam.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}

---

### CloudAwsGovcloudIntegrationsLambda <a name="CloudAwsGovcloudIntegrationsLambda" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsLambda;

CloudAwsGovcloudIntegrationsLambda.builder()
//  .awsRegions(java.util.List<java.lang.String>)
//  .fetchTags(java.lang.Boolean|IResolvable)
//  .metricsPollingInterval(java.lang.Number)
//  .tagKey(java.lang.String)
//  .tagValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda.property.fetchTags">fetchTags</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specify if tags should be collected. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}

---

##### `fetchTags`<sup>Optional</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda.property.fetchTags"></a>

```java
public java.lang.Boolean|IResolvable getFetchTags();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specify if tags should be collected.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#fetch_tags CloudAwsGovcloudIntegrations#fetch_tags}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}

---

### CloudAwsGovcloudIntegrationsRds <a name="CloudAwsGovcloudIntegrationsRds" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsRds;

CloudAwsGovcloudIntegrationsRds.builder()
//  .awsRegions(java.util.List<java.lang.String>)
//  .fetchTags(java.lang.Boolean|IResolvable)
//  .metricsPollingInterval(java.lang.Number)
//  .tagKey(java.lang.String)
//  .tagValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds.property.fetchTags">fetchTags</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specify if tags should be collected. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}

---

##### `fetchTags`<sup>Optional</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds.property.fetchTags"></a>

```java
public java.lang.Boolean|IResolvable getFetchTags();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specify if tags should be collected.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#fetch_tags CloudAwsGovcloudIntegrations#fetch_tags}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}

---

### CloudAwsGovcloudIntegrationsRedShift <a name="CloudAwsGovcloudIntegrationsRedShift" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsRedShift;

CloudAwsGovcloudIntegrationsRedShift.builder()
//  .awsRegions(java.util.List<java.lang.String>)
//  .metricsPollingInterval(java.lang.Number)
//  .tagKey(java.lang.String)
//  .tagValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}

---

### CloudAwsGovcloudIntegrationsRoute53 <a name="CloudAwsGovcloudIntegrationsRoute53" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsRoute53;

CloudAwsGovcloudIntegrationsRoute53.builder()
//  .fetchExtendedInventory(java.lang.Boolean|IResolvable)
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Determine if extra inventory data be collected or not. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |

---

##### `fetchExtendedInventory`<sup>Optional</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53.property.fetchExtendedInventory"></a>

```java
public java.lang.Boolean|IResolvable getFetchExtendedInventory();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#fetch_extended_inventory CloudAwsGovcloudIntegrations#fetch_extended_inventory}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

### CloudAwsGovcloudIntegrationsS3 <a name="CloudAwsGovcloudIntegrationsS3" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsS3;

CloudAwsGovcloudIntegrationsS3.builder()
//  .fetchExtendedInventory(java.lang.Boolean|IResolvable)
//  .fetchTags(java.lang.Boolean|IResolvable)
//  .metricsPollingInterval(java.lang.Number)
//  .tagKey(java.lang.String)
//  .tagValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Determine if extra inventory data be collected or not. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3.property.fetchTags">fetchTags</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specify if tags should be collected. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `fetchExtendedInventory`<sup>Optional</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3.property.fetchExtendedInventory"></a>

```java
public java.lang.Boolean|IResolvable getFetchExtendedInventory();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#fetch_extended_inventory CloudAwsGovcloudIntegrations#fetch_extended_inventory}

---

##### `fetchTags`<sup>Optional</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3.property.fetchTags"></a>

```java
public java.lang.Boolean|IResolvable getFetchTags();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specify if tags should be collected.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#fetch_tags CloudAwsGovcloudIntegrations#fetch_tags}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}

---

### CloudAwsGovcloudIntegrationsSns <a name="CloudAwsGovcloudIntegrationsSns" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsSns;

CloudAwsGovcloudIntegrationsSns.builder()
//  .awsRegions(java.util.List<java.lang.String>)
//  .fetchExtendedInventory(java.lang.Boolean|IResolvable)
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSns.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSns.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Determine if extra inventory data be collected or not. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSns.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSns.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}

---

##### `fetchExtendedInventory`<sup>Optional</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSns.property.fetchExtendedInventory"></a>

```java
public java.lang.Boolean|IResolvable getFetchExtendedInventory();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#fetch_extended_inventory CloudAwsGovcloudIntegrations#fetch_extended_inventory}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSns.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

### CloudAwsGovcloudIntegrationsSqs <a name="CloudAwsGovcloudIntegrationsSqs" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsSqs;

CloudAwsGovcloudIntegrationsSqs.builder()
//  .awsRegions(java.util.List<java.lang.String>)
//  .fetchExtendedInventory(java.lang.Boolean|IResolvable)
//  .fetchTags(java.lang.Boolean|IResolvable)
//  .metricsPollingInterval(java.lang.Number)
//  .queuePrefixes(java.util.List<java.lang.String>)
//  .tagKey(java.lang.String)
//  .tagValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Determine if extra inventory data be collected or not. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs.property.fetchTags">fetchTags</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specify if tags should be collected. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs.property.queuePrefixes">queuePrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Specify each name or prefix for the Queues that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}

---

##### `fetchExtendedInventory`<sup>Optional</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs.property.fetchExtendedInventory"></a>

```java
public java.lang.Boolean|IResolvable getFetchExtendedInventory();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#fetch_extended_inventory CloudAwsGovcloudIntegrations#fetch_extended_inventory}

---

##### `fetchTags`<sup>Optional</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs.property.fetchTags"></a>

```java
public java.lang.Boolean|IResolvable getFetchTags();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specify if tags should be collected.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#fetch_tags CloudAwsGovcloudIntegrations#fetch_tags}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

##### `queuePrefixes`<sup>Optional</sup> <a name="queuePrefixes" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs.property.queuePrefixes"></a>

```java
public java.util.List<java.lang.String> getQueuePrefixes();
```

- *Type:* java.util.List<java.lang.String>

Specify each name or prefix for the Queues that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#queue_prefixes CloudAwsGovcloudIntegrations#queue_prefixes}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudAwsGovcloudIntegrationsAlbOutputReference <a name="CloudAwsGovcloudIntegrationsAlbOutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsAlbOutputReference;

new CloudAwsGovcloudIntegrationsAlbOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.resetFetchExtendedInventory">resetFetchExtendedInventory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.resetFetchTags">resetFetchTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.resetLoadBalancerPrefixes">resetLoadBalancerPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetFetchExtendedInventory` <a name="resetFetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.resetFetchExtendedInventory"></a>

```java
public void resetFetchExtendedInventory()
```

##### `resetFetchTags` <a name="resetFetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.resetFetchTags"></a>

```java
public void resetFetchTags()
```

##### `resetLoadBalancerPrefixes` <a name="resetLoadBalancerPrefixes" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.resetLoadBalancerPrefixes"></a>

```java
public void resetLoadBalancerPrefixes()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.resetTagKey"></a>

```java
public void resetTagKey()
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.resetTagValue"></a>

```java
public void resetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.fetchExtendedInventoryInput">fetchExtendedInventoryInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.fetchTagsInput">fetchTagsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.loadBalancerPrefixesInput">loadBalancerPrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.fetchTags">fetchTags</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.loadBalancerPrefixes">loadBalancerPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb">CloudAwsGovcloudIntegrationsAlb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.awsRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAwsRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fetchExtendedInventoryInput`<sup>Optional</sup> <a name="fetchExtendedInventoryInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.fetchExtendedInventoryInput"></a>

```java
public java.lang.Boolean|IResolvable getFetchExtendedInventoryInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `fetchTagsInput`<sup>Optional</sup> <a name="fetchTagsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.fetchTagsInput"></a>

```java
public java.lang.Boolean|IResolvable getFetchTagsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `loadBalancerPrefixesInput`<sup>Optional</sup> <a name="loadBalancerPrefixesInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.loadBalancerPrefixesInput"></a>

```java
public java.util.List<java.lang.String> getLoadBalancerPrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.tagValueInput"></a>

```java
public java.lang.String getTagValueInput();
```

- *Type:* java.lang.String

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fetchExtendedInventory`<sup>Required</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.fetchExtendedInventory"></a>

```java
public java.lang.Boolean|IResolvable getFetchExtendedInventory();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `fetchTags`<sup>Required</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.fetchTags"></a>

```java
public java.lang.Boolean|IResolvable getFetchTags();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `loadBalancerPrefixes`<sup>Required</sup> <a name="loadBalancerPrefixes" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.loadBalancerPrefixes"></a>

```java
public java.util.List<java.lang.String> getLoadBalancerPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.internalValue"></a>

```java
public CloudAwsGovcloudIntegrationsAlb getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb">CloudAwsGovcloudIntegrationsAlb</a>

---


### CloudAwsGovcloudIntegrationsApiGatewayOutputReference <a name="CloudAwsGovcloudIntegrationsApiGatewayOutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference;

new CloudAwsGovcloudIntegrationsApiGatewayOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.resetStagePrefixes">resetStagePrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```

##### `resetStagePrefixes` <a name="resetStagePrefixes" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.resetStagePrefixes"></a>

```java
public void resetStagePrefixes()
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.resetTagKey"></a>

```java
public void resetTagKey()
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.resetTagValue"></a>

```java
public void resetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.stagePrefixesInput">stagePrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.stagePrefixes">stagePrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway">CloudAwsGovcloudIntegrationsApiGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.awsRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAwsRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `stagePrefixesInput`<sup>Optional</sup> <a name="stagePrefixesInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.stagePrefixesInput"></a>

```java
public java.util.List<java.lang.String> getStagePrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.tagValueInput"></a>

```java
public java.lang.String getTagValueInput();
```

- *Type:* java.lang.String

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `stagePrefixes`<sup>Required</sup> <a name="stagePrefixes" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.stagePrefixes"></a>

```java
public java.util.List<java.lang.String> getStagePrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.internalValue"></a>

```java
public CloudAwsGovcloudIntegrationsApiGateway getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway">CloudAwsGovcloudIntegrationsApiGateway</a>

---


### CloudAwsGovcloudIntegrationsAutoScalingOutputReference <a name="CloudAwsGovcloudIntegrationsAutoScalingOutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference;

new CloudAwsGovcloudIntegrationsAutoScalingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScaling">CloudAwsGovcloudIntegrationsAutoScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.property.awsRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAwsRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.property.internalValue"></a>

```java
public CloudAwsGovcloudIntegrationsAutoScaling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScaling">CloudAwsGovcloudIntegrationsAutoScaling</a>

---


### CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference <a name="CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference;

new CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnect">CloudAwsGovcloudIntegrationsAwsDirectConnect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.property.awsRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAwsRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.property.internalValue"></a>

```java
public CloudAwsGovcloudIntegrationsAwsDirectConnect getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnect">CloudAwsGovcloudIntegrationsAwsDirectConnect</a>

---


### CloudAwsGovcloudIntegrationsAwsStatesOutputReference <a name="CloudAwsGovcloudIntegrationsAwsStatesOutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference;

new CloudAwsGovcloudIntegrationsAwsStatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStates">CloudAwsGovcloudIntegrationsAwsStates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.property.awsRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAwsRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.property.internalValue"></a>

```java
public CloudAwsGovcloudIntegrationsAwsStates getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStates">CloudAwsGovcloudIntegrationsAwsStates</a>

---


### CloudAwsGovcloudIntegrationsCloudtrailOutputReference <a name="CloudAwsGovcloudIntegrationsCloudtrailOutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference;

new CloudAwsGovcloudIntegrationsCloudtrailOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrail">CloudAwsGovcloudIntegrationsCloudtrail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.property.awsRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAwsRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.property.internalValue"></a>

```java
public CloudAwsGovcloudIntegrationsCloudtrail getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrail">CloudAwsGovcloudIntegrationsCloudtrail</a>

---


### CloudAwsGovcloudIntegrationsDynamoDbOutputReference <a name="CloudAwsGovcloudIntegrationsDynamoDbOutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference;

new CloudAwsGovcloudIntegrationsDynamoDbOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.resetFetchExtendedInventory">resetFetchExtendedInventory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.resetFetchTags">resetFetchTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetFetchExtendedInventory` <a name="resetFetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.resetFetchExtendedInventory"></a>

```java
public void resetFetchExtendedInventory()
```

##### `resetFetchTags` <a name="resetFetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.resetFetchTags"></a>

```java
public void resetFetchTags()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.resetTagKey"></a>

```java
public void resetTagKey()
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.resetTagValue"></a>

```java
public void resetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.fetchExtendedInventoryInput">fetchExtendedInventoryInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.fetchTagsInput">fetchTagsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.fetchTags">fetchTags</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb">CloudAwsGovcloudIntegrationsDynamoDb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.awsRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAwsRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fetchExtendedInventoryInput`<sup>Optional</sup> <a name="fetchExtendedInventoryInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.fetchExtendedInventoryInput"></a>

```java
public java.lang.Boolean|IResolvable getFetchExtendedInventoryInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `fetchTagsInput`<sup>Optional</sup> <a name="fetchTagsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.fetchTagsInput"></a>

```java
public java.lang.Boolean|IResolvable getFetchTagsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.tagValueInput"></a>

```java
public java.lang.String getTagValueInput();
```

- *Type:* java.lang.String

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fetchExtendedInventory`<sup>Required</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.fetchExtendedInventory"></a>

```java
public java.lang.Boolean|IResolvable getFetchExtendedInventory();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `fetchTags`<sup>Required</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.fetchTags"></a>

```java
public java.lang.Boolean|IResolvable getFetchTags();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.internalValue"></a>

```java
public CloudAwsGovcloudIntegrationsDynamoDb getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb">CloudAwsGovcloudIntegrationsDynamoDb</a>

---


### CloudAwsGovcloudIntegrationsEbsOutputReference <a name="CloudAwsGovcloudIntegrationsEbsOutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsEbsOutputReference;

new CloudAwsGovcloudIntegrationsEbsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.resetFetchExtendedInventory">resetFetchExtendedInventory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetFetchExtendedInventory` <a name="resetFetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.resetFetchExtendedInventory"></a>

```java
public void resetFetchExtendedInventory()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.resetTagKey"></a>

```java
public void resetTagKey()
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.resetTagValue"></a>

```java
public void resetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.fetchExtendedInventoryInput">fetchExtendedInventoryInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs">CloudAwsGovcloudIntegrationsEbs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.awsRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAwsRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fetchExtendedInventoryInput`<sup>Optional</sup> <a name="fetchExtendedInventoryInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.fetchExtendedInventoryInput"></a>

```java
public java.lang.Boolean|IResolvable getFetchExtendedInventoryInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.tagValueInput"></a>

```java
public java.lang.String getTagValueInput();
```

- *Type:* java.lang.String

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fetchExtendedInventory`<sup>Required</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.fetchExtendedInventory"></a>

```java
public java.lang.Boolean|IResolvable getFetchExtendedInventory();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.internalValue"></a>

```java
public CloudAwsGovcloudIntegrationsEbs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs">CloudAwsGovcloudIntegrationsEbs</a>

---


### CloudAwsGovcloudIntegrationsEc2OutputReference <a name="CloudAwsGovcloudIntegrationsEc2OutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsEc2OutputReference;

new CloudAwsGovcloudIntegrationsEc2OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.resetFetchIpAddresses">resetFetchIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetFetchIpAddresses` <a name="resetFetchIpAddresses" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.resetFetchIpAddresses"></a>

```java
public void resetFetchIpAddresses()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.resetTagKey"></a>

```java
public void resetTagKey()
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.resetTagValue"></a>

```java
public void resetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.fetchIpAddressesInput">fetchIpAddressesInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.tagValueInput">tagValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.fetchIpAddresses">fetchIpAddresses</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2">CloudAwsGovcloudIntegrationsEc2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.awsRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAwsRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fetchIpAddressesInput`<sup>Optional</sup> <a name="fetchIpAddressesInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.fetchIpAddressesInput"></a>

```java
public java.lang.Boolean|IResolvable getFetchIpAddressesInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.tagValueInput"></a>

```java
public java.lang.String getTagValueInput();
```

- *Type:* java.lang.String

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fetchIpAddresses`<sup>Required</sup> <a name="fetchIpAddresses" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.fetchIpAddresses"></a>

```java
public java.lang.Boolean|IResolvable getFetchIpAddresses();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.internalValue"></a>

```java
public CloudAwsGovcloudIntegrationsEc2 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2">CloudAwsGovcloudIntegrationsEc2</a>

---


### CloudAwsGovcloudIntegrationsElasticSearchOutputReference <a name="CloudAwsGovcloudIntegrationsElasticSearchOutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference;

new CloudAwsGovcloudIntegrationsElasticSearchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.resetFetchNodes">resetFetchNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetFetchNodes` <a name="resetFetchNodes" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.resetFetchNodes"></a>

```java
public void resetFetchNodes()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.resetTagKey"></a>

```java
public void resetTagKey()
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.resetTagValue"></a>

```java
public void resetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.fetchNodesInput">fetchNodesInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.fetchNodes">fetchNodes</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch">CloudAwsGovcloudIntegrationsElasticSearch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.awsRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAwsRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fetchNodesInput`<sup>Optional</sup> <a name="fetchNodesInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.fetchNodesInput"></a>

```java
public java.lang.Boolean|IResolvable getFetchNodesInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.tagValueInput"></a>

```java
public java.lang.String getTagValueInput();
```

- *Type:* java.lang.String

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fetchNodes`<sup>Required</sup> <a name="fetchNodes" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.fetchNodes"></a>

```java
public java.lang.Boolean|IResolvable getFetchNodes();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.internalValue"></a>

```java
public CloudAwsGovcloudIntegrationsElasticSearch getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch">CloudAwsGovcloudIntegrationsElasticSearch</a>

---


### CloudAwsGovcloudIntegrationsElbOutputReference <a name="CloudAwsGovcloudIntegrationsElbOutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsElbOutputReference;

new CloudAwsGovcloudIntegrationsElbOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.resetFetchExtendedInventory">resetFetchExtendedInventory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.resetFetchTags">resetFetchTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetFetchExtendedInventory` <a name="resetFetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.resetFetchExtendedInventory"></a>

```java
public void resetFetchExtendedInventory()
```

##### `resetFetchTags` <a name="resetFetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.resetFetchTags"></a>

```java
public void resetFetchTags()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.fetchExtendedInventoryInput">fetchExtendedInventoryInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.fetchTagsInput">fetchTagsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.fetchTags">fetchTags</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb">CloudAwsGovcloudIntegrationsElb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.awsRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAwsRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fetchExtendedInventoryInput`<sup>Optional</sup> <a name="fetchExtendedInventoryInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.fetchExtendedInventoryInput"></a>

```java
public java.lang.Boolean|IResolvable getFetchExtendedInventoryInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `fetchTagsInput`<sup>Optional</sup> <a name="fetchTagsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.fetchTagsInput"></a>

```java
public java.lang.Boolean|IResolvable getFetchTagsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fetchExtendedInventory`<sup>Required</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.fetchExtendedInventory"></a>

```java
public java.lang.Boolean|IResolvable getFetchExtendedInventory();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `fetchTags`<sup>Required</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.fetchTags"></a>

```java
public java.lang.Boolean|IResolvable getFetchTags();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.internalValue"></a>

```java
public CloudAwsGovcloudIntegrationsElb getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb">CloudAwsGovcloudIntegrationsElb</a>

---


### CloudAwsGovcloudIntegrationsEmrOutputReference <a name="CloudAwsGovcloudIntegrationsEmrOutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsEmrOutputReference;

new CloudAwsGovcloudIntegrationsEmrOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.resetFetchTags">resetFetchTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetFetchTags` <a name="resetFetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.resetFetchTags"></a>

```java
public void resetFetchTags()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.resetTagKey"></a>

```java
public void resetTagKey()
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.resetTagValue"></a>

```java
public void resetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.fetchTagsInput">fetchTagsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.awsRegions">awsRegions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.fetchTags">fetchTags</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr">CloudAwsGovcloudIntegrationsEmr</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.awsRegionsInput"></a>

```java
public java.lang.String getAwsRegionsInput();
```

- *Type:* java.lang.String

---

##### `fetchTagsInput`<sup>Optional</sup> <a name="fetchTagsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.fetchTagsInput"></a>

```java
public java.lang.Boolean|IResolvable getFetchTagsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.tagValueInput"></a>

```java
public java.lang.String getTagValueInput();
```

- *Type:* java.lang.String

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.awsRegions"></a>

```java
public java.lang.String getAwsRegions();
```

- *Type:* java.lang.String

---

##### `fetchTags`<sup>Required</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.fetchTags"></a>

```java
public java.lang.Boolean|IResolvable getFetchTags();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.internalValue"></a>

```java
public CloudAwsGovcloudIntegrationsEmr getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr">CloudAwsGovcloudIntegrationsEmr</a>

---


### CloudAwsGovcloudIntegrationsIamOutputReference <a name="CloudAwsGovcloudIntegrationsIamOutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsIamOutputReference;

new CloudAwsGovcloudIntegrationsIamOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.resetTagKey"></a>

```java
public void resetTagKey()
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.resetTagValue"></a>

```java
public void resetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIam">CloudAwsGovcloudIntegrationsIam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.property.tagValueInput"></a>

```java
public java.lang.String getTagValueInput();
```

- *Type:* java.lang.String

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.property.internalValue"></a>

```java
public CloudAwsGovcloudIntegrationsIam getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIam">CloudAwsGovcloudIntegrationsIam</a>

---


### CloudAwsGovcloudIntegrationsLambdaOutputReference <a name="CloudAwsGovcloudIntegrationsLambdaOutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsLambdaOutputReference;

new CloudAwsGovcloudIntegrationsLambdaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.resetFetchTags">resetFetchTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetFetchTags` <a name="resetFetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.resetFetchTags"></a>

```java
public void resetFetchTags()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.resetTagKey"></a>

```java
public void resetTagKey()
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.resetTagValue"></a>

```java
public void resetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.fetchTagsInput">fetchTagsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.fetchTags">fetchTags</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda">CloudAwsGovcloudIntegrationsLambda</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.awsRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAwsRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fetchTagsInput`<sup>Optional</sup> <a name="fetchTagsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.fetchTagsInput"></a>

```java
public java.lang.Boolean|IResolvable getFetchTagsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.tagValueInput"></a>

```java
public java.lang.String getTagValueInput();
```

- *Type:* java.lang.String

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fetchTags`<sup>Required</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.fetchTags"></a>

```java
public java.lang.Boolean|IResolvable getFetchTags();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.internalValue"></a>

```java
public CloudAwsGovcloudIntegrationsLambda getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda">CloudAwsGovcloudIntegrationsLambda</a>

---


### CloudAwsGovcloudIntegrationsRdsOutputReference <a name="CloudAwsGovcloudIntegrationsRdsOutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsRdsOutputReference;

new CloudAwsGovcloudIntegrationsRdsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.resetFetchTags">resetFetchTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetFetchTags` <a name="resetFetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.resetFetchTags"></a>

```java
public void resetFetchTags()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.resetTagKey"></a>

```java
public void resetTagKey()
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.resetTagValue"></a>

```java
public void resetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.fetchTagsInput">fetchTagsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.fetchTags">fetchTags</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds">CloudAwsGovcloudIntegrationsRds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.awsRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAwsRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fetchTagsInput`<sup>Optional</sup> <a name="fetchTagsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.fetchTagsInput"></a>

```java
public java.lang.Boolean|IResolvable getFetchTagsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.tagValueInput"></a>

```java
public java.lang.String getTagValueInput();
```

- *Type:* java.lang.String

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fetchTags`<sup>Required</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.fetchTags"></a>

```java
public java.lang.Boolean|IResolvable getFetchTags();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.internalValue"></a>

```java
public CloudAwsGovcloudIntegrationsRds getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds">CloudAwsGovcloudIntegrationsRds</a>

---


### CloudAwsGovcloudIntegrationsRedShiftOutputReference <a name="CloudAwsGovcloudIntegrationsRedShiftOutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference;

new CloudAwsGovcloudIntegrationsRedShiftOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.resetTagKey"></a>

```java
public void resetTagKey()
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.resetTagValue"></a>

```java
public void resetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift">CloudAwsGovcloudIntegrationsRedShift</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.awsRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAwsRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.tagValueInput"></a>

```java
public java.lang.String getTagValueInput();
```

- *Type:* java.lang.String

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.internalValue"></a>

```java
public CloudAwsGovcloudIntegrationsRedShift getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift">CloudAwsGovcloudIntegrationsRedShift</a>

---


### CloudAwsGovcloudIntegrationsRoute53OutputReference <a name="CloudAwsGovcloudIntegrationsRoute53OutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsRoute53OutputReference;

new CloudAwsGovcloudIntegrationsRoute53OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.resetFetchExtendedInventory">resetFetchExtendedInventory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFetchExtendedInventory` <a name="resetFetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.resetFetchExtendedInventory"></a>

```java
public void resetFetchExtendedInventory()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.property.fetchExtendedInventoryInput">fetchExtendedInventoryInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53">CloudAwsGovcloudIntegrationsRoute53</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fetchExtendedInventoryInput`<sup>Optional</sup> <a name="fetchExtendedInventoryInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.property.fetchExtendedInventoryInput"></a>

```java
public java.lang.Boolean|IResolvable getFetchExtendedInventoryInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `fetchExtendedInventory`<sup>Required</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.property.fetchExtendedInventory"></a>

```java
public java.lang.Boolean|IResolvable getFetchExtendedInventory();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.property.internalValue"></a>

```java
public CloudAwsGovcloudIntegrationsRoute53 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53">CloudAwsGovcloudIntegrationsRoute53</a>

---


### CloudAwsGovcloudIntegrationsS3OutputReference <a name="CloudAwsGovcloudIntegrationsS3OutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsS3OutputReference;

new CloudAwsGovcloudIntegrationsS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.resetFetchExtendedInventory">resetFetchExtendedInventory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.resetFetchTags">resetFetchTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFetchExtendedInventory` <a name="resetFetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.resetFetchExtendedInventory"></a>

```java
public void resetFetchExtendedInventory()
```

##### `resetFetchTags` <a name="resetFetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.resetFetchTags"></a>

```java
public void resetFetchTags()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.resetTagKey"></a>

```java
public void resetTagKey()
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.resetTagValue"></a>

```java
public void resetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.fetchExtendedInventoryInput">fetchExtendedInventoryInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.fetchTagsInput">fetchTagsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.tagValueInput">tagValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.fetchTags">fetchTags</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3">CloudAwsGovcloudIntegrationsS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fetchExtendedInventoryInput`<sup>Optional</sup> <a name="fetchExtendedInventoryInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.fetchExtendedInventoryInput"></a>

```java
public java.lang.Boolean|IResolvable getFetchExtendedInventoryInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `fetchTagsInput`<sup>Optional</sup> <a name="fetchTagsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.fetchTagsInput"></a>

```java
public java.lang.Boolean|IResolvable getFetchTagsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.tagValueInput"></a>

```java
public java.lang.String getTagValueInput();
```

- *Type:* java.lang.String

---

##### `fetchExtendedInventory`<sup>Required</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.fetchExtendedInventory"></a>

```java
public java.lang.Boolean|IResolvable getFetchExtendedInventory();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `fetchTags`<sup>Required</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.fetchTags"></a>

```java
public java.lang.Boolean|IResolvable getFetchTags();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.internalValue"></a>

```java
public CloudAwsGovcloudIntegrationsS3 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3">CloudAwsGovcloudIntegrationsS3</a>

---


### CloudAwsGovcloudIntegrationsSnsOutputReference <a name="CloudAwsGovcloudIntegrationsSnsOutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsSnsOutputReference;

new CloudAwsGovcloudIntegrationsSnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.resetFetchExtendedInventory">resetFetchExtendedInventory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetFetchExtendedInventory` <a name="resetFetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.resetFetchExtendedInventory"></a>

```java
public void resetFetchExtendedInventory()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.property.fetchExtendedInventoryInput">fetchExtendedInventoryInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSns">CloudAwsGovcloudIntegrationsSns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.property.awsRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAwsRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fetchExtendedInventoryInput`<sup>Optional</sup> <a name="fetchExtendedInventoryInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.property.fetchExtendedInventoryInput"></a>

```java
public java.lang.Boolean|IResolvable getFetchExtendedInventoryInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fetchExtendedInventory`<sup>Required</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.property.fetchExtendedInventory"></a>

```java
public java.lang.Boolean|IResolvable getFetchExtendedInventory();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.property.internalValue"></a>

```java
public CloudAwsGovcloudIntegrationsSns getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSns">CloudAwsGovcloudIntegrationsSns</a>

---


### CloudAwsGovcloudIntegrationsSqsOutputReference <a name="CloudAwsGovcloudIntegrationsSqsOutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_govcloud_integrations.CloudAwsGovcloudIntegrationsSqsOutputReference;

new CloudAwsGovcloudIntegrationsSqsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.resetFetchExtendedInventory">resetFetchExtendedInventory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.resetFetchTags">resetFetchTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.resetQueuePrefixes">resetQueuePrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetFetchExtendedInventory` <a name="resetFetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.resetFetchExtendedInventory"></a>

```java
public void resetFetchExtendedInventory()
```

##### `resetFetchTags` <a name="resetFetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.resetFetchTags"></a>

```java
public void resetFetchTags()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```

##### `resetQueuePrefixes` <a name="resetQueuePrefixes" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.resetQueuePrefixes"></a>

```java
public void resetQueuePrefixes()
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.resetTagKey"></a>

```java
public void resetTagKey()
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.resetTagValue"></a>

```java
public void resetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.fetchExtendedInventoryInput">fetchExtendedInventoryInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.fetchTagsInput">fetchTagsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.queuePrefixesInput">queuePrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.fetchTags">fetchTags</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.queuePrefixes">queuePrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs">CloudAwsGovcloudIntegrationsSqs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.awsRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAwsRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fetchExtendedInventoryInput`<sup>Optional</sup> <a name="fetchExtendedInventoryInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.fetchExtendedInventoryInput"></a>

```java
public java.lang.Boolean|IResolvable getFetchExtendedInventoryInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `fetchTagsInput`<sup>Optional</sup> <a name="fetchTagsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.fetchTagsInput"></a>

```java
public java.lang.Boolean|IResolvable getFetchTagsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `queuePrefixesInput`<sup>Optional</sup> <a name="queuePrefixesInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.queuePrefixesInput"></a>

```java
public java.util.List<java.lang.String> getQueuePrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.tagValueInput"></a>

```java
public java.lang.String getTagValueInput();
```

- *Type:* java.lang.String

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fetchExtendedInventory`<sup>Required</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.fetchExtendedInventory"></a>

```java
public java.lang.Boolean|IResolvable getFetchExtendedInventory();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `fetchTags`<sup>Required</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.fetchTags"></a>

```java
public java.lang.Boolean|IResolvable getFetchTags();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `queuePrefixes`<sup>Required</sup> <a name="queuePrefixes" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.queuePrefixes"></a>

```java
public java.util.List<java.lang.String> getQueuePrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.internalValue"></a>

```java
public CloudAwsGovcloudIntegrationsSqs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs">CloudAwsGovcloudIntegrationsSqs</a>

---



