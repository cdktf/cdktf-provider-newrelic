# `newrelic_cloud_aws_integrations`

Refer to the Terraform Registory for docs: [`newrelic_cloud_aws_integrations`](https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations).

# `cloudAwsIntegrations` Submodule <a name="`cloudAwsIntegrations` Submodule" id="@cdktf/provider-newrelic.cloudAwsIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudAwsIntegrations <a name="CloudAwsIntegrations" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations newrelic_cloud_aws_integrations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrations(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  linked_account_id: typing.Union[int, float],
  account_id: typing.Union[int, float] = None,
  alb: CloudAwsIntegrationsAlb = None,
  api_gateway: CloudAwsIntegrationsApiGateway = None,
  auto_scaling: CloudAwsIntegrationsAutoScaling = None,
  aws_app_sync: CloudAwsIntegrationsAwsAppSync = None,
  aws_athena: CloudAwsIntegrationsAwsAthena = None,
  aws_cognito: CloudAwsIntegrationsAwsCognito = None,
  aws_connect: CloudAwsIntegrationsAwsConnect = None,
  aws_direct_connect: CloudAwsIntegrationsAwsDirectConnect = None,
  aws_fsx: CloudAwsIntegrationsAwsFsx = None,
  billing: CloudAwsIntegrationsBilling = None,
  cloudtrail: CloudAwsIntegrationsCloudtrail = None,
  doc_db: CloudAwsIntegrationsDocDb = None,
  ebs: CloudAwsIntegrationsEbs = None,
  elasticache: CloudAwsIntegrationsElasticache = None,
  health: CloudAwsIntegrationsHealth = None,
  id: str = None,
  s3: CloudAwsIntegrationsS3 = None,
  sqs: CloudAwsIntegrationsSqs = None,
  trusted_advisor: CloudAwsIntegrationsTrustedAdvisor = None,
  vpc: CloudAwsIntegrationsVpc = None,
  x_ray: CloudAwsIntegrationsXRay = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.linkedAccountId">linked_account_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the linked AWS account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.alb">alb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb">CloudAwsIntegrationsAlb</a></code> | alb block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.apiGateway">api_gateway</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway">CloudAwsIntegrationsApiGateway</a></code> | api_gateway block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.autoScaling">auto_scaling</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling">CloudAwsIntegrationsAutoScaling</a></code> | auto_scaling block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.awsAppSync">aws_app_sync</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync">CloudAwsIntegrationsAwsAppSync</a></code> | aws_app_sync block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.awsAthena">aws_athena</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena">CloudAwsIntegrationsAwsAthena</a></code> | aws_athena block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.awsCognito">aws_cognito</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito">CloudAwsIntegrationsAwsCognito</a></code> | aws_cognito block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.awsConnect">aws_connect</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect">CloudAwsIntegrationsAwsConnect</a></code> | aws_connect block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.awsDirectConnect">aws_direct_connect</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect">CloudAwsIntegrationsAwsDirectConnect</a></code> | aws_direct_connect block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.awsFsx">aws_fsx</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx">CloudAwsIntegrationsAwsFsx</a></code> | aws_fsx block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.billing">billing</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling">CloudAwsIntegrationsBilling</a></code> | billing block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.cloudtrail">cloudtrail</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail">CloudAwsIntegrationsCloudtrail</a></code> | cloudtrail block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.docDb">doc_db</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb">CloudAwsIntegrationsDocDb</a></code> | doc_db block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs">CloudAwsIntegrationsEbs</a></code> | ebs block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.elasticache">elasticache</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache">CloudAwsIntegrationsElasticache</a></code> | elasticache block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.health">health</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth">CloudAwsIntegrationsHealth</a></code> | health block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#id CloudAwsIntegrations#id}. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.s3">s3</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3">CloudAwsIntegrationsS3</a></code> | s3 block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.sqs">sqs</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs">CloudAwsIntegrationsSqs</a></code> | sqs block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.trustedAdvisor">trusted_advisor</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor">CloudAwsIntegrationsTrustedAdvisor</a></code> | trusted_advisor block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.vpc">vpc</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc">CloudAwsIntegrationsVpc</a></code> | vpc block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.xRay">x_ray</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay">CloudAwsIntegrationsXRay</a></code> | x_ray block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `linked_account_id`<sup>Required</sup> <a name="linked_account_id" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.linkedAccountId"></a>

- *Type:* typing.Union[int, float]

The ID of the linked AWS account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#linked_account_id CloudAwsIntegrations#linked_account_id}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

The ID of the account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#account_id CloudAwsIntegrations#account_id}

---

##### `alb`<sup>Optional</sup> <a name="alb" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.alb"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb">CloudAwsIntegrationsAlb</a>

alb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#alb CloudAwsIntegrations#alb}

---

##### `api_gateway`<sup>Optional</sup> <a name="api_gateway" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.apiGateway"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway">CloudAwsIntegrationsApiGateway</a>

api_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#api_gateway CloudAwsIntegrations#api_gateway}

---

##### `auto_scaling`<sup>Optional</sup> <a name="auto_scaling" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.autoScaling"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling">CloudAwsIntegrationsAutoScaling</a>

auto_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#auto_scaling CloudAwsIntegrations#auto_scaling}

---

##### `aws_app_sync`<sup>Optional</sup> <a name="aws_app_sync" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.awsAppSync"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync">CloudAwsIntegrationsAwsAppSync</a>

aws_app_sync block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_app_sync CloudAwsIntegrations#aws_app_sync}

---

##### `aws_athena`<sup>Optional</sup> <a name="aws_athena" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.awsAthena"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena">CloudAwsIntegrationsAwsAthena</a>

aws_athena block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_athena CloudAwsIntegrations#aws_athena}

---

##### `aws_cognito`<sup>Optional</sup> <a name="aws_cognito" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.awsCognito"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito">CloudAwsIntegrationsAwsCognito</a>

aws_cognito block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_cognito CloudAwsIntegrations#aws_cognito}

---

##### `aws_connect`<sup>Optional</sup> <a name="aws_connect" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.awsConnect"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect">CloudAwsIntegrationsAwsConnect</a>

aws_connect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_connect CloudAwsIntegrations#aws_connect}

---

##### `aws_direct_connect`<sup>Optional</sup> <a name="aws_direct_connect" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.awsDirectConnect"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect">CloudAwsIntegrationsAwsDirectConnect</a>

aws_direct_connect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_direct_connect CloudAwsIntegrations#aws_direct_connect}

---

##### `aws_fsx`<sup>Optional</sup> <a name="aws_fsx" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.awsFsx"></a>

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

##### `doc_db`<sup>Optional</sup> <a name="doc_db" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.docDb"></a>

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

- *Type:* str

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

##### `trusted_advisor`<sup>Optional</sup> <a name="trusted_advisor" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.trustedAdvisor"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor">CloudAwsIntegrationsTrustedAdvisor</a>

trusted_advisor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#trusted_advisor CloudAwsIntegrations#trusted_advisor}

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.vpc"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc">CloudAwsIntegrationsVpc</a>

vpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#vpc CloudAwsIntegrations#vpc}

---

##### `x_ray`<sup>Optional</sup> <a name="x_ray" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.xRay"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay">CloudAwsIntegrationsXRay</a>

x_ray block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#x_ray CloudAwsIntegrations#x_ray}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAlb">put_alb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putApiGateway">put_api_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAutoScaling">put_auto_scaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsAppSync">put_aws_app_sync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsAthena">put_aws_athena</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsCognito">put_aws_cognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsConnect">put_aws_connect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsDirectConnect">put_aws_direct_connect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsFsx">put_aws_fsx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putBilling">put_billing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putCloudtrail">put_cloudtrail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putDocDb">put_doc_db</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putEbs">put_ebs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putElasticache">put_elasticache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putHealth">put_health</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putS3">put_s3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putSqs">put_sqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putTrustedAdvisor">put_trusted_advisor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putVpc">put_vpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putXRay">put_x_ray</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAlb">reset_alb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetApiGateway">reset_api_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAutoScaling">reset_auto_scaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAwsAppSync">reset_aws_app_sync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAwsAthena">reset_aws_athena</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAwsCognito">reset_aws_cognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAwsConnect">reset_aws_connect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAwsDirectConnect">reset_aws_direct_connect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAwsFsx">reset_aws_fsx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetBilling">reset_billing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetCloudtrail">reset_cloudtrail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetDocDb">reset_doc_db</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetEbs">reset_ebs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetElasticache">reset_elasticache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetHealth">reset_health</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetS3">reset_s3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetSqs">reset_sqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetTrustedAdvisor">reset_trusted_advisor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetVpc">reset_vpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetXRay">reset_x_ray</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_alb` <a name="put_alb" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAlb"></a>

```python
def put_alb(
  aws_regions: typing.List[str] = None,
  fetch_extended_inventory: typing.Union[bool, IResolvable] = None,
  fetch_tags: typing.Union[bool, IResolvable] = None,
  load_balancer_prefixes: typing.List[str] = None,
  metrics_polling_interval: typing.Union[int, float] = None,
  tag_key: str = None,
  tag_value: str = None
) -> None
```

###### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAlb.parameter.awsRegions"></a>

- *Type:* typing.List[str]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

###### `fetch_extended_inventory`<sup>Optional</sup> <a name="fetch_extended_inventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAlb.parameter.fetchExtendedInventory"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_extended_inventory CloudAwsIntegrations#fetch_extended_inventory}

---

###### `fetch_tags`<sup>Optional</sup> <a name="fetch_tags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAlb.parameter.fetchTags"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specify if tags should be collected.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_tags CloudAwsIntegrations#fetch_tags}

---

###### `load_balancer_prefixes`<sup>Optional</sup> <a name="load_balancer_prefixes" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAlb.parameter.loadBalancerPrefixes"></a>

- *Type:* typing.List[str]

Specify each name or prefix for the LBs that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#load_balancer_prefixes CloudAwsIntegrations#load_balancer_prefixes}

---

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAlb.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

###### `tag_key`<sup>Optional</sup> <a name="tag_key" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAlb.parameter.tagKey"></a>

- *Type:* str

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}

---

###### `tag_value`<sup>Optional</sup> <a name="tag_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAlb.parameter.tagValue"></a>

- *Type:* str

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}

---

##### `put_api_gateway` <a name="put_api_gateway" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putApiGateway"></a>

```python
def put_api_gateway(
  aws_regions: typing.List[str] = None,
  metrics_polling_interval: typing.Union[int, float] = None,
  stage_prefixes: typing.List[str] = None,
  tag_key: str = None,
  tag_value: str = None
) -> None
```

###### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putApiGateway.parameter.awsRegions"></a>

- *Type:* typing.List[str]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putApiGateway.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

###### `stage_prefixes`<sup>Optional</sup> <a name="stage_prefixes" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putApiGateway.parameter.stagePrefixes"></a>

- *Type:* typing.List[str]

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#stage_prefixes CloudAwsIntegrations#stage_prefixes}

---

###### `tag_key`<sup>Optional</sup> <a name="tag_key" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putApiGateway.parameter.tagKey"></a>

- *Type:* str

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}

---

###### `tag_value`<sup>Optional</sup> <a name="tag_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putApiGateway.parameter.tagValue"></a>

- *Type:* str

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}

---

##### `put_auto_scaling` <a name="put_auto_scaling" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAutoScaling"></a>

```python
def put_auto_scaling(
  aws_regions: typing.List[str] = None,
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAutoScaling.parameter.awsRegions"></a>

- *Type:* typing.List[str]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAutoScaling.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

##### `put_aws_app_sync` <a name="put_aws_app_sync" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsAppSync"></a>

```python
def put_aws_app_sync(
  aws_regions: typing.List[str] = None,
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsAppSync.parameter.awsRegions"></a>

- *Type:* typing.List[str]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsAppSync.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

##### `put_aws_athena` <a name="put_aws_athena" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsAthena"></a>

```python
def put_aws_athena(
  aws_regions: typing.List[str] = None,
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsAthena.parameter.awsRegions"></a>

- *Type:* typing.List[str]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsAthena.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

##### `put_aws_cognito` <a name="put_aws_cognito" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsCognito"></a>

```python
def put_aws_cognito(
  aws_regions: typing.List[str] = None,
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsCognito.parameter.awsRegions"></a>

- *Type:* typing.List[str]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsCognito.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

##### `put_aws_connect` <a name="put_aws_connect" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsConnect"></a>

```python
def put_aws_connect(
  aws_regions: typing.List[str] = None,
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsConnect.parameter.awsRegions"></a>

- *Type:* typing.List[str]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsConnect.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

##### `put_aws_direct_connect` <a name="put_aws_direct_connect" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsDirectConnect"></a>

```python
def put_aws_direct_connect(
  aws_regions: typing.List[str] = None,
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsDirectConnect.parameter.awsRegions"></a>

- *Type:* typing.List[str]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsDirectConnect.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

##### `put_aws_fsx` <a name="put_aws_fsx" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsFsx"></a>

```python
def put_aws_fsx(
  aws_regions: typing.List[str] = None,
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsFsx.parameter.awsRegions"></a>

- *Type:* typing.List[str]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsFsx.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

##### `put_billing` <a name="put_billing" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putBilling"></a>

```python
def put_billing(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putBilling.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

##### `put_cloudtrail` <a name="put_cloudtrail" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putCloudtrail"></a>

```python
def put_cloudtrail(
  aws_regions: typing.List[str] = None,
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putCloudtrail.parameter.awsRegions"></a>

- *Type:* typing.List[str]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putCloudtrail.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

##### `put_doc_db` <a name="put_doc_db" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putDocDb"></a>

```python
def put_doc_db(
  aws_regions: typing.List[str] = None,
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putDocDb.parameter.awsRegions"></a>

- *Type:* typing.List[str]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putDocDb.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

##### `put_ebs` <a name="put_ebs" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putEbs"></a>

```python
def put_ebs(
  aws_regions: typing.List[str] = None,
  fetch_extended_inventory: typing.Union[bool, IResolvable] = None,
  metrics_polling_interval: typing.Union[int, float] = None,
  tag_key: str = None,
  tag_value: str = None
) -> None
```

###### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putEbs.parameter.awsRegions"></a>

- *Type:* typing.List[str]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

###### `fetch_extended_inventory`<sup>Optional</sup> <a name="fetch_extended_inventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putEbs.parameter.fetchExtendedInventory"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_extended_inventory CloudAwsIntegrations#fetch_extended_inventory}

---

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putEbs.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

###### `tag_key`<sup>Optional</sup> <a name="tag_key" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putEbs.parameter.tagKey"></a>

- *Type:* str

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}

---

###### `tag_value`<sup>Optional</sup> <a name="tag_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putEbs.parameter.tagValue"></a>

- *Type:* str

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}

---

##### `put_elasticache` <a name="put_elasticache" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putElasticache"></a>

```python
def put_elasticache(
  aws_regions: typing.List[str] = None,
  fetch_tags: typing.Union[bool, IResolvable] = None,
  metrics_polling_interval: typing.Union[int, float] = None,
  tag_key: str = None,
  tag_value: str = None
) -> None
```

###### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putElasticache.parameter.awsRegions"></a>

- *Type:* typing.List[str]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

###### `fetch_tags`<sup>Optional</sup> <a name="fetch_tags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putElasticache.parameter.fetchTags"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specify if tags should be collected.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_tags CloudAwsIntegrations#fetch_tags}

---

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putElasticache.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

###### `tag_key`<sup>Optional</sup> <a name="tag_key" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putElasticache.parameter.tagKey"></a>

- *Type:* str

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}

---

###### `tag_value`<sup>Optional</sup> <a name="tag_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putElasticache.parameter.tagValue"></a>

- *Type:* str

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}

---

##### `put_health` <a name="put_health" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putHealth"></a>

```python
def put_health(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putHealth.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

##### `put_s3` <a name="put_s3" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putS3"></a>

```python
def put_s3(
  fetch_extended_inventory: typing.Union[bool, IResolvable] = None,
  fetch_tags: typing.Union[bool, IResolvable] = None,
  metrics_polling_interval: typing.Union[int, float] = None,
  tag_key: str = None,
  tag_value: str = None
) -> None
```

###### `fetch_extended_inventory`<sup>Optional</sup> <a name="fetch_extended_inventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putS3.parameter.fetchExtendedInventory"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_extended_inventory CloudAwsIntegrations#fetch_extended_inventory}

---

###### `fetch_tags`<sup>Optional</sup> <a name="fetch_tags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putS3.parameter.fetchTags"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specify if tags should be collected.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_tags CloudAwsIntegrations#fetch_tags}

---

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putS3.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

###### `tag_key`<sup>Optional</sup> <a name="tag_key" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putS3.parameter.tagKey"></a>

- *Type:* str

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}

---

###### `tag_value`<sup>Optional</sup> <a name="tag_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putS3.parameter.tagValue"></a>

- *Type:* str

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}

---

##### `put_sqs` <a name="put_sqs" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putSqs"></a>

```python
def put_sqs(
  aws_regions: typing.List[str] = None,
  fetch_extended_inventory: typing.Union[bool, IResolvable] = None,
  fetch_tags: typing.Union[bool, IResolvable] = None,
  metrics_polling_interval: typing.Union[int, float] = None,
  queue_prefixes: typing.List[str] = None,
  tag_key: str = None,
  tag_value: str = None
) -> None
```

###### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putSqs.parameter.awsRegions"></a>

- *Type:* typing.List[str]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

###### `fetch_extended_inventory`<sup>Optional</sup> <a name="fetch_extended_inventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putSqs.parameter.fetchExtendedInventory"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_extended_inventory CloudAwsIntegrations#fetch_extended_inventory}

---

###### `fetch_tags`<sup>Optional</sup> <a name="fetch_tags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putSqs.parameter.fetchTags"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specify if tags should be collected.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_tags CloudAwsIntegrations#fetch_tags}

---

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putSqs.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

###### `queue_prefixes`<sup>Optional</sup> <a name="queue_prefixes" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putSqs.parameter.queuePrefixes"></a>

- *Type:* typing.List[str]

Specify each name or prefix for the Queues that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#queue_prefixes CloudAwsIntegrations#queue_prefixes}

---

###### `tag_key`<sup>Optional</sup> <a name="tag_key" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putSqs.parameter.tagKey"></a>

- *Type:* str

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}

---

###### `tag_value`<sup>Optional</sup> <a name="tag_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putSqs.parameter.tagValue"></a>

- *Type:* str

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}

---

##### `put_trusted_advisor` <a name="put_trusted_advisor" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putTrustedAdvisor"></a>

```python
def put_trusted_advisor(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putTrustedAdvisor.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

##### `put_vpc` <a name="put_vpc" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putVpc"></a>

```python
def put_vpc(
  aws_regions: typing.List[str] = None,
  fetch_nat_gateway: typing.Union[bool, IResolvable] = None,
  fetch_vpn: typing.Union[bool, IResolvable] = None,
  metrics_polling_interval: typing.Union[int, float] = None,
  tag_key: str = None,
  tag_value: str = None
) -> None
```

###### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putVpc.parameter.awsRegions"></a>

- *Type:* typing.List[str]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

###### `fetch_nat_gateway`<sup>Optional</sup> <a name="fetch_nat_gateway" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putVpc.parameter.fetchNatGateway"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specify if NAT gateway should be monitored.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_nat_gateway CloudAwsIntegrations#fetch_nat_gateway}

---

###### `fetch_vpn`<sup>Optional</sup> <a name="fetch_vpn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putVpc.parameter.fetchVpn"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specify if VPN should be monitored.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_vpn CloudAwsIntegrations#fetch_vpn}

---

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putVpc.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

###### `tag_key`<sup>Optional</sup> <a name="tag_key" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putVpc.parameter.tagKey"></a>

- *Type:* str

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}

---

###### `tag_value`<sup>Optional</sup> <a name="tag_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putVpc.parameter.tagValue"></a>

- *Type:* str

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}

---

##### `put_x_ray` <a name="put_x_ray" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putXRay"></a>

```python
def put_x_ray(
  aws_regions: typing.List[str] = None,
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putXRay.parameter.awsRegions"></a>

- *Type:* typing.List[str]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putXRay.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_alb` <a name="reset_alb" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAlb"></a>

```python
def reset_alb() -> None
```

##### `reset_api_gateway` <a name="reset_api_gateway" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetApiGateway"></a>

```python
def reset_api_gateway() -> None
```

##### `reset_auto_scaling` <a name="reset_auto_scaling" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAutoScaling"></a>

```python
def reset_auto_scaling() -> None
```

##### `reset_aws_app_sync` <a name="reset_aws_app_sync" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAwsAppSync"></a>

```python
def reset_aws_app_sync() -> None
```

##### `reset_aws_athena` <a name="reset_aws_athena" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAwsAthena"></a>

```python
def reset_aws_athena() -> None
```

##### `reset_aws_cognito` <a name="reset_aws_cognito" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAwsCognito"></a>

```python
def reset_aws_cognito() -> None
```

##### `reset_aws_connect` <a name="reset_aws_connect" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAwsConnect"></a>

```python
def reset_aws_connect() -> None
```

##### `reset_aws_direct_connect` <a name="reset_aws_direct_connect" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAwsDirectConnect"></a>

```python
def reset_aws_direct_connect() -> None
```

##### `reset_aws_fsx` <a name="reset_aws_fsx" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAwsFsx"></a>

```python
def reset_aws_fsx() -> None
```

##### `reset_billing` <a name="reset_billing" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetBilling"></a>

```python
def reset_billing() -> None
```

##### `reset_cloudtrail` <a name="reset_cloudtrail" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetCloudtrail"></a>

```python
def reset_cloudtrail() -> None
```

##### `reset_doc_db` <a name="reset_doc_db" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetDocDb"></a>

```python
def reset_doc_db() -> None
```

##### `reset_ebs` <a name="reset_ebs" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetEbs"></a>

```python
def reset_ebs() -> None
```

##### `reset_elasticache` <a name="reset_elasticache" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetElasticache"></a>

```python
def reset_elasticache() -> None
```

##### `reset_health` <a name="reset_health" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetHealth"></a>

```python
def reset_health() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_s3` <a name="reset_s3" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetS3"></a>

```python
def reset_s3() -> None
```

##### `reset_sqs` <a name="reset_sqs" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetSqs"></a>

```python
def reset_sqs() -> None
```

##### `reset_trusted_advisor` <a name="reset_trusted_advisor" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetTrustedAdvisor"></a>

```python
def reset_trusted_advisor() -> None
```

##### `reset_vpc` <a name="reset_vpc" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetVpc"></a>

```python
def reset_vpc() -> None
```

##### `reset_x_ray` <a name="reset_x_ray" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetXRay"></a>

```python
def reset_x_ray() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.isConstruct"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrations.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.alb">alb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference">CloudAwsIntegrationsAlbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.apiGateway">api_gateway</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference">CloudAwsIntegrationsApiGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.autoScaling">auto_scaling</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference">CloudAwsIntegrationsAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsAppSync">aws_app_sync</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference">CloudAwsIntegrationsAwsAppSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsAthena">aws_athena</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference">CloudAwsIntegrationsAwsAthenaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsCognito">aws_cognito</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference">CloudAwsIntegrationsAwsCognitoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsConnect">aws_connect</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference">CloudAwsIntegrationsAwsConnectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsDirectConnect">aws_direct_connect</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference">CloudAwsIntegrationsAwsDirectConnectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsFsx">aws_fsx</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference">CloudAwsIntegrationsAwsFsxOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.billing">billing</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference">CloudAwsIntegrationsBillingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.cloudtrail">cloudtrail</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference">CloudAwsIntegrationsCloudtrailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.docDb">doc_db</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference">CloudAwsIntegrationsDocDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference">CloudAwsIntegrationsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.elasticache">elasticache</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference">CloudAwsIntegrationsElasticacheOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.health">health</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference">CloudAwsIntegrationsHealthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference">CloudAwsIntegrationsS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.sqs">sqs</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference">CloudAwsIntegrationsSqsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.trustedAdvisor">trusted_advisor</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference">CloudAwsIntegrationsTrustedAdvisorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.vpc">vpc</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference">CloudAwsIntegrationsVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.xRay">x_ray</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference">CloudAwsIntegrationsXRayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.albInput">alb_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb">CloudAwsIntegrationsAlb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.apiGatewayInput">api_gateway_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway">CloudAwsIntegrationsApiGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.autoScalingInput">auto_scaling_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling">CloudAwsIntegrationsAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsAppSyncInput">aws_app_sync_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync">CloudAwsIntegrationsAwsAppSync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsAthenaInput">aws_athena_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena">CloudAwsIntegrationsAwsAthena</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsCognitoInput">aws_cognito_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito">CloudAwsIntegrationsAwsCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsConnectInput">aws_connect_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect">CloudAwsIntegrationsAwsConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsDirectConnectInput">aws_direct_connect_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect">CloudAwsIntegrationsAwsDirectConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsFsxInput">aws_fsx_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx">CloudAwsIntegrationsAwsFsx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.billingInput">billing_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling">CloudAwsIntegrationsBilling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.cloudtrailInput">cloudtrail_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail">CloudAwsIntegrationsCloudtrail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.docDbInput">doc_db_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb">CloudAwsIntegrationsDocDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.ebsInput">ebs_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs">CloudAwsIntegrationsEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.elasticacheInput">elasticache_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache">CloudAwsIntegrationsElasticache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.healthInput">health_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth">CloudAwsIntegrationsHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.linkedAccountIdInput">linked_account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.s3Input">s3_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3">CloudAwsIntegrationsS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.sqsInput">sqs_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs">CloudAwsIntegrationsSqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.trustedAdvisorInput">trusted_advisor_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor">CloudAwsIntegrationsTrustedAdvisor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.vpcInput">vpc_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc">CloudAwsIntegrationsVpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.xRayInput">x_ray_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay">CloudAwsIntegrationsXRay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.linkedAccountId">linked_account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alb`<sup>Required</sup> <a name="alb" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.alb"></a>

```python
alb: CloudAwsIntegrationsAlbOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference">CloudAwsIntegrationsAlbOutputReference</a>

---

##### `api_gateway`<sup>Required</sup> <a name="api_gateway" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.apiGateway"></a>

```python
api_gateway: CloudAwsIntegrationsApiGatewayOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference">CloudAwsIntegrationsApiGatewayOutputReference</a>

---

##### `auto_scaling`<sup>Required</sup> <a name="auto_scaling" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.autoScaling"></a>

```python
auto_scaling: CloudAwsIntegrationsAutoScalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference">CloudAwsIntegrationsAutoScalingOutputReference</a>

---

##### `aws_app_sync`<sup>Required</sup> <a name="aws_app_sync" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsAppSync"></a>

```python
aws_app_sync: CloudAwsIntegrationsAwsAppSyncOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference">CloudAwsIntegrationsAwsAppSyncOutputReference</a>

---

##### `aws_athena`<sup>Required</sup> <a name="aws_athena" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsAthena"></a>

```python
aws_athena: CloudAwsIntegrationsAwsAthenaOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference">CloudAwsIntegrationsAwsAthenaOutputReference</a>

---

##### `aws_cognito`<sup>Required</sup> <a name="aws_cognito" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsCognito"></a>

```python
aws_cognito: CloudAwsIntegrationsAwsCognitoOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference">CloudAwsIntegrationsAwsCognitoOutputReference</a>

---

##### `aws_connect`<sup>Required</sup> <a name="aws_connect" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsConnect"></a>

```python
aws_connect: CloudAwsIntegrationsAwsConnectOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference">CloudAwsIntegrationsAwsConnectOutputReference</a>

---

##### `aws_direct_connect`<sup>Required</sup> <a name="aws_direct_connect" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsDirectConnect"></a>

```python
aws_direct_connect: CloudAwsIntegrationsAwsDirectConnectOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference">CloudAwsIntegrationsAwsDirectConnectOutputReference</a>

---

##### `aws_fsx`<sup>Required</sup> <a name="aws_fsx" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsFsx"></a>

```python
aws_fsx: CloudAwsIntegrationsAwsFsxOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference">CloudAwsIntegrationsAwsFsxOutputReference</a>

---

##### `billing`<sup>Required</sup> <a name="billing" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.billing"></a>

```python
billing: CloudAwsIntegrationsBillingOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference">CloudAwsIntegrationsBillingOutputReference</a>

---

##### `cloudtrail`<sup>Required</sup> <a name="cloudtrail" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.cloudtrail"></a>

```python
cloudtrail: CloudAwsIntegrationsCloudtrailOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference">CloudAwsIntegrationsCloudtrailOutputReference</a>

---

##### `doc_db`<sup>Required</sup> <a name="doc_db" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.docDb"></a>

```python
doc_db: CloudAwsIntegrationsDocDbOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference">CloudAwsIntegrationsDocDbOutputReference</a>

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.ebs"></a>

```python
ebs: CloudAwsIntegrationsEbsOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference">CloudAwsIntegrationsEbsOutputReference</a>

---

##### `elasticache`<sup>Required</sup> <a name="elasticache" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.elasticache"></a>

```python
elasticache: CloudAwsIntegrationsElasticacheOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference">CloudAwsIntegrationsElasticacheOutputReference</a>

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.health"></a>

```python
health: CloudAwsIntegrationsHealthOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference">CloudAwsIntegrationsHealthOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.s3"></a>

```python
s3: CloudAwsIntegrationsS3OutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference">CloudAwsIntegrationsS3OutputReference</a>

---

##### `sqs`<sup>Required</sup> <a name="sqs" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.sqs"></a>

```python
sqs: CloudAwsIntegrationsSqsOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference">CloudAwsIntegrationsSqsOutputReference</a>

---

##### `trusted_advisor`<sup>Required</sup> <a name="trusted_advisor" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.trustedAdvisor"></a>

```python
trusted_advisor: CloudAwsIntegrationsTrustedAdvisorOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference">CloudAwsIntegrationsTrustedAdvisorOutputReference</a>

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.vpc"></a>

```python
vpc: CloudAwsIntegrationsVpcOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference">CloudAwsIntegrationsVpcOutputReference</a>

---

##### `x_ray`<sup>Required</sup> <a name="x_ray" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.xRay"></a>

```python
x_ray: CloudAwsIntegrationsXRayOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference">CloudAwsIntegrationsXRayOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `alb_input`<sup>Optional</sup> <a name="alb_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.albInput"></a>

```python
alb_input: CloudAwsIntegrationsAlb
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb">CloudAwsIntegrationsAlb</a>

---

##### `api_gateway_input`<sup>Optional</sup> <a name="api_gateway_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.apiGatewayInput"></a>

```python
api_gateway_input: CloudAwsIntegrationsApiGateway
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway">CloudAwsIntegrationsApiGateway</a>

---

##### `auto_scaling_input`<sup>Optional</sup> <a name="auto_scaling_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.autoScalingInput"></a>

```python
auto_scaling_input: CloudAwsIntegrationsAutoScaling
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling">CloudAwsIntegrationsAutoScaling</a>

---

##### `aws_app_sync_input`<sup>Optional</sup> <a name="aws_app_sync_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsAppSyncInput"></a>

```python
aws_app_sync_input: CloudAwsIntegrationsAwsAppSync
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync">CloudAwsIntegrationsAwsAppSync</a>

---

##### `aws_athena_input`<sup>Optional</sup> <a name="aws_athena_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsAthenaInput"></a>

```python
aws_athena_input: CloudAwsIntegrationsAwsAthena
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena">CloudAwsIntegrationsAwsAthena</a>

---

##### `aws_cognito_input`<sup>Optional</sup> <a name="aws_cognito_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsCognitoInput"></a>

```python
aws_cognito_input: CloudAwsIntegrationsAwsCognito
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito">CloudAwsIntegrationsAwsCognito</a>

---

##### `aws_connect_input`<sup>Optional</sup> <a name="aws_connect_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsConnectInput"></a>

```python
aws_connect_input: CloudAwsIntegrationsAwsConnect
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect">CloudAwsIntegrationsAwsConnect</a>

---

##### `aws_direct_connect_input`<sup>Optional</sup> <a name="aws_direct_connect_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsDirectConnectInput"></a>

```python
aws_direct_connect_input: CloudAwsIntegrationsAwsDirectConnect
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect">CloudAwsIntegrationsAwsDirectConnect</a>

---

##### `aws_fsx_input`<sup>Optional</sup> <a name="aws_fsx_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsFsxInput"></a>

```python
aws_fsx_input: CloudAwsIntegrationsAwsFsx
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx">CloudAwsIntegrationsAwsFsx</a>

---

##### `billing_input`<sup>Optional</sup> <a name="billing_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.billingInput"></a>

```python
billing_input: CloudAwsIntegrationsBilling
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling">CloudAwsIntegrationsBilling</a>

---

##### `cloudtrail_input`<sup>Optional</sup> <a name="cloudtrail_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.cloudtrailInput"></a>

```python
cloudtrail_input: CloudAwsIntegrationsCloudtrail
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail">CloudAwsIntegrationsCloudtrail</a>

---

##### `doc_db_input`<sup>Optional</sup> <a name="doc_db_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.docDbInput"></a>

```python
doc_db_input: CloudAwsIntegrationsDocDb
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb">CloudAwsIntegrationsDocDb</a>

---

##### `ebs_input`<sup>Optional</sup> <a name="ebs_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.ebsInput"></a>

```python
ebs_input: CloudAwsIntegrationsEbs
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs">CloudAwsIntegrationsEbs</a>

---

##### `elasticache_input`<sup>Optional</sup> <a name="elasticache_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.elasticacheInput"></a>

```python
elasticache_input: CloudAwsIntegrationsElasticache
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache">CloudAwsIntegrationsElasticache</a>

---

##### `health_input`<sup>Optional</sup> <a name="health_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.healthInput"></a>

```python
health_input: CloudAwsIntegrationsHealth
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth">CloudAwsIntegrationsHealth</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `linked_account_id_input`<sup>Optional</sup> <a name="linked_account_id_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.linkedAccountIdInput"></a>

```python
linked_account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.s3Input"></a>

```python
s3_input: CloudAwsIntegrationsS3
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3">CloudAwsIntegrationsS3</a>

---

##### `sqs_input`<sup>Optional</sup> <a name="sqs_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.sqsInput"></a>

```python
sqs_input: CloudAwsIntegrationsSqs
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs">CloudAwsIntegrationsSqs</a>

---

##### `trusted_advisor_input`<sup>Optional</sup> <a name="trusted_advisor_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.trustedAdvisorInput"></a>

```python
trusted_advisor_input: CloudAwsIntegrationsTrustedAdvisor
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor">CloudAwsIntegrationsTrustedAdvisor</a>

---

##### `vpc_input`<sup>Optional</sup> <a name="vpc_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.vpcInput"></a>

```python
vpc_input: CloudAwsIntegrationsVpc
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc">CloudAwsIntegrationsVpc</a>

---

##### `x_ray_input`<sup>Optional</sup> <a name="x_ray_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.xRayInput"></a>

```python
x_ray_input: CloudAwsIntegrationsXRay
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay">CloudAwsIntegrationsXRay</a>

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `linked_account_id`<sup>Required</sup> <a name="linked_account_id" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.linkedAccountId"></a>

```python
linked_account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudAwsIntegrationsAlb <a name="CloudAwsIntegrationsAlb" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsAlb(
  aws_regions: typing.List[str] = None,
  fetch_extended_inventory: typing.Union[bool, IResolvable] = None,
  fetch_tags: typing.Union[bool, IResolvable] = None,
  load_balancer_prefixes: typing.List[str] = None,
  metrics_polling_interval: typing.Union[int, float] = None,
  tag_key: str = None,
  tag_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.fetchExtendedInventory">fetch_extended_inventory</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determine if extra inventory data be collected or not. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.fetchTags">fetch_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specify if tags should be collected. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.loadBalancerPrefixes">load_balancer_prefixes</a></code> | <code>typing.List[str]</code> | Specify each name or prefix for the LBs that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.tagKey">tag_key</a></code> | <code>str</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.tagValue">tag_value</a></code> | <code>str</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `fetch_extended_inventory`<sup>Optional</sup> <a name="fetch_extended_inventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.fetchExtendedInventory"></a>

```python
fetch_extended_inventory: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_extended_inventory CloudAwsIntegrations#fetch_extended_inventory}

---

##### `fetch_tags`<sup>Optional</sup> <a name="fetch_tags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.fetchTags"></a>

```python
fetch_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specify if tags should be collected.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_tags CloudAwsIntegrations#fetch_tags}

---

##### `load_balancer_prefixes`<sup>Optional</sup> <a name="load_balancer_prefixes" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.loadBalancerPrefixes"></a>

```python
load_balancer_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Specify each name or prefix for the LBs that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#load_balancer_prefixes CloudAwsIntegrations#load_balancer_prefixes}

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

##### `tag_key`<sup>Optional</sup> <a name="tag_key" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}

---

##### `tag_value`<sup>Optional</sup> <a name="tag_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}

---

### CloudAwsIntegrationsApiGateway <a name="CloudAwsIntegrationsApiGateway" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsApiGateway(
  aws_regions: typing.List[str] = None,
  metrics_polling_interval: typing.Union[int, float] = None,
  stage_prefixes: typing.List[str] = None,
  tag_key: str = None,
  tag_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway.property.stagePrefixes">stage_prefixes</a></code> | <code>typing.List[str]</code> | Determine if extra inventory data be collected or not. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway.property.tagKey">tag_key</a></code> | <code>str</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway.property.tagValue">tag_value</a></code> | <code>str</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

##### `stage_prefixes`<sup>Optional</sup> <a name="stage_prefixes" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway.property.stagePrefixes"></a>

```python
stage_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#stage_prefixes CloudAwsIntegrations#stage_prefixes}

---

##### `tag_key`<sup>Optional</sup> <a name="tag_key" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}

---

##### `tag_value`<sup>Optional</sup> <a name="tag_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}

---

### CloudAwsIntegrationsAutoScaling <a name="CloudAwsIntegrationsAutoScaling" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling(
  aws_regions: typing.List[str] = None,
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsAwsAppSync <a name="CloudAwsIntegrationsAwsAppSync" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync(
  aws_regions: typing.List[str] = None,
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsAwsAthena <a name="CloudAwsIntegrationsAwsAthena" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena(
  aws_regions: typing.List[str] = None,
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsAwsCognito <a name="CloudAwsIntegrationsAwsCognito" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito(
  aws_regions: typing.List[str] = None,
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsAwsConnect <a name="CloudAwsIntegrationsAwsConnect" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect(
  aws_regions: typing.List[str] = None,
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsAwsDirectConnect <a name="CloudAwsIntegrationsAwsDirectConnect" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect(
  aws_regions: typing.List[str] = None,
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsAwsFsx <a name="CloudAwsIntegrationsAwsFsx" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx(
  aws_regions: typing.List[str] = None,
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsBilling <a name="CloudAwsIntegrationsBilling" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsBilling(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsCloudtrail <a name="CloudAwsIntegrationsCloudtrail" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail(
  aws_regions: typing.List[str] = None,
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsConfig <a name="CloudAwsIntegrationsConfig" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  linked_account_id: typing.Union[int, float],
  account_id: typing.Union[int, float] = None,
  alb: CloudAwsIntegrationsAlb = None,
  api_gateway: CloudAwsIntegrationsApiGateway = None,
  auto_scaling: CloudAwsIntegrationsAutoScaling = None,
  aws_app_sync: CloudAwsIntegrationsAwsAppSync = None,
  aws_athena: CloudAwsIntegrationsAwsAthena = None,
  aws_cognito: CloudAwsIntegrationsAwsCognito = None,
  aws_connect: CloudAwsIntegrationsAwsConnect = None,
  aws_direct_connect: CloudAwsIntegrationsAwsDirectConnect = None,
  aws_fsx: CloudAwsIntegrationsAwsFsx = None,
  billing: CloudAwsIntegrationsBilling = None,
  cloudtrail: CloudAwsIntegrationsCloudtrail = None,
  doc_db: CloudAwsIntegrationsDocDb = None,
  ebs: CloudAwsIntegrationsEbs = None,
  elasticache: CloudAwsIntegrationsElasticache = None,
  health: CloudAwsIntegrationsHealth = None,
  id: str = None,
  s3: CloudAwsIntegrationsS3 = None,
  sqs: CloudAwsIntegrationsSqs = None,
  trusted_advisor: CloudAwsIntegrationsTrustedAdvisor = None,
  vpc: CloudAwsIntegrationsVpc = None,
  x_ray: CloudAwsIntegrationsXRay = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.linkedAccountId">linked_account_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the linked AWS account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.alb">alb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb">CloudAwsIntegrationsAlb</a></code> | alb block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.apiGateway">api_gateway</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway">CloudAwsIntegrationsApiGateway</a></code> | api_gateway block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.autoScaling">auto_scaling</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling">CloudAwsIntegrationsAutoScaling</a></code> | auto_scaling block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.awsAppSync">aws_app_sync</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync">CloudAwsIntegrationsAwsAppSync</a></code> | aws_app_sync block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.awsAthena">aws_athena</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena">CloudAwsIntegrationsAwsAthena</a></code> | aws_athena block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.awsCognito">aws_cognito</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito">CloudAwsIntegrationsAwsCognito</a></code> | aws_cognito block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.awsConnect">aws_connect</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect">CloudAwsIntegrationsAwsConnect</a></code> | aws_connect block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.awsDirectConnect">aws_direct_connect</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect">CloudAwsIntegrationsAwsDirectConnect</a></code> | aws_direct_connect block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.awsFsx">aws_fsx</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx">CloudAwsIntegrationsAwsFsx</a></code> | aws_fsx block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.billing">billing</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling">CloudAwsIntegrationsBilling</a></code> | billing block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.cloudtrail">cloudtrail</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail">CloudAwsIntegrationsCloudtrail</a></code> | cloudtrail block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.docDb">doc_db</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb">CloudAwsIntegrationsDocDb</a></code> | doc_db block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs">CloudAwsIntegrationsEbs</a></code> | ebs block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.elasticache">elasticache</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache">CloudAwsIntegrationsElasticache</a></code> | elasticache block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.health">health</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth">CloudAwsIntegrationsHealth</a></code> | health block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#id CloudAwsIntegrations#id}. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3">CloudAwsIntegrationsS3</a></code> | s3 block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.sqs">sqs</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs">CloudAwsIntegrationsSqs</a></code> | sqs block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.trustedAdvisor">trusted_advisor</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor">CloudAwsIntegrationsTrustedAdvisor</a></code> | trusted_advisor block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.vpc">vpc</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc">CloudAwsIntegrationsVpc</a></code> | vpc block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.xRay">x_ray</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay">CloudAwsIntegrationsXRay</a></code> | x_ray block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `linked_account_id`<sup>Required</sup> <a name="linked_account_id" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.linkedAccountId"></a>

```python
linked_account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the linked AWS account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#linked_account_id CloudAwsIntegrations#linked_account_id}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#account_id CloudAwsIntegrations#account_id}

---

##### `alb`<sup>Optional</sup> <a name="alb" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.alb"></a>

```python
alb: CloudAwsIntegrationsAlb
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb">CloudAwsIntegrationsAlb</a>

alb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#alb CloudAwsIntegrations#alb}

---

##### `api_gateway`<sup>Optional</sup> <a name="api_gateway" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.apiGateway"></a>

```python
api_gateway: CloudAwsIntegrationsApiGateway
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway">CloudAwsIntegrationsApiGateway</a>

api_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#api_gateway CloudAwsIntegrations#api_gateway}

---

##### `auto_scaling`<sup>Optional</sup> <a name="auto_scaling" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.autoScaling"></a>

```python
auto_scaling: CloudAwsIntegrationsAutoScaling
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling">CloudAwsIntegrationsAutoScaling</a>

auto_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#auto_scaling CloudAwsIntegrations#auto_scaling}

---

##### `aws_app_sync`<sup>Optional</sup> <a name="aws_app_sync" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.awsAppSync"></a>

```python
aws_app_sync: CloudAwsIntegrationsAwsAppSync
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync">CloudAwsIntegrationsAwsAppSync</a>

aws_app_sync block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_app_sync CloudAwsIntegrations#aws_app_sync}

---

##### `aws_athena`<sup>Optional</sup> <a name="aws_athena" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.awsAthena"></a>

```python
aws_athena: CloudAwsIntegrationsAwsAthena
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena">CloudAwsIntegrationsAwsAthena</a>

aws_athena block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_athena CloudAwsIntegrations#aws_athena}

---

##### `aws_cognito`<sup>Optional</sup> <a name="aws_cognito" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.awsCognito"></a>

```python
aws_cognito: CloudAwsIntegrationsAwsCognito
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito">CloudAwsIntegrationsAwsCognito</a>

aws_cognito block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_cognito CloudAwsIntegrations#aws_cognito}

---

##### `aws_connect`<sup>Optional</sup> <a name="aws_connect" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.awsConnect"></a>

```python
aws_connect: CloudAwsIntegrationsAwsConnect
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect">CloudAwsIntegrationsAwsConnect</a>

aws_connect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_connect CloudAwsIntegrations#aws_connect}

---

##### `aws_direct_connect`<sup>Optional</sup> <a name="aws_direct_connect" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.awsDirectConnect"></a>

```python
aws_direct_connect: CloudAwsIntegrationsAwsDirectConnect
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect">CloudAwsIntegrationsAwsDirectConnect</a>

aws_direct_connect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_direct_connect CloudAwsIntegrations#aws_direct_connect}

---

##### `aws_fsx`<sup>Optional</sup> <a name="aws_fsx" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.awsFsx"></a>

```python
aws_fsx: CloudAwsIntegrationsAwsFsx
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx">CloudAwsIntegrationsAwsFsx</a>

aws_fsx block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_fsx CloudAwsIntegrations#aws_fsx}

---

##### `billing`<sup>Optional</sup> <a name="billing" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.billing"></a>

```python
billing: CloudAwsIntegrationsBilling
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling">CloudAwsIntegrationsBilling</a>

billing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#billing CloudAwsIntegrations#billing}

---

##### `cloudtrail`<sup>Optional</sup> <a name="cloudtrail" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.cloudtrail"></a>

```python
cloudtrail: CloudAwsIntegrationsCloudtrail
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail">CloudAwsIntegrationsCloudtrail</a>

cloudtrail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#cloudtrail CloudAwsIntegrations#cloudtrail}

---

##### `doc_db`<sup>Optional</sup> <a name="doc_db" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.docDb"></a>

```python
doc_db: CloudAwsIntegrationsDocDb
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb">CloudAwsIntegrationsDocDb</a>

doc_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#doc_db CloudAwsIntegrations#doc_db}

---

##### `ebs`<sup>Optional</sup> <a name="ebs" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.ebs"></a>

```python
ebs: CloudAwsIntegrationsEbs
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs">CloudAwsIntegrationsEbs</a>

ebs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#ebs CloudAwsIntegrations#ebs}

---

##### `elasticache`<sup>Optional</sup> <a name="elasticache" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.elasticache"></a>

```python
elasticache: CloudAwsIntegrationsElasticache
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache">CloudAwsIntegrationsElasticache</a>

elasticache block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#elasticache CloudAwsIntegrations#elasticache}

---

##### `health`<sup>Optional</sup> <a name="health" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.health"></a>

```python
health: CloudAwsIntegrationsHealth
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth">CloudAwsIntegrationsHealth</a>

health block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#health CloudAwsIntegrations#health}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#id CloudAwsIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.s3"></a>

```python
s3: CloudAwsIntegrationsS3
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3">CloudAwsIntegrationsS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#s3 CloudAwsIntegrations#s3}

---

##### `sqs`<sup>Optional</sup> <a name="sqs" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.sqs"></a>

```python
sqs: CloudAwsIntegrationsSqs
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs">CloudAwsIntegrationsSqs</a>

sqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#sqs CloudAwsIntegrations#sqs}

---

##### `trusted_advisor`<sup>Optional</sup> <a name="trusted_advisor" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.trustedAdvisor"></a>

```python
trusted_advisor: CloudAwsIntegrationsTrustedAdvisor
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor">CloudAwsIntegrationsTrustedAdvisor</a>

trusted_advisor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#trusted_advisor CloudAwsIntegrations#trusted_advisor}

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.vpc"></a>

```python
vpc: CloudAwsIntegrationsVpc
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc">CloudAwsIntegrationsVpc</a>

vpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#vpc CloudAwsIntegrations#vpc}

---

##### `x_ray`<sup>Optional</sup> <a name="x_ray" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.xRay"></a>

```python
x_ray: CloudAwsIntegrationsXRay
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay">CloudAwsIntegrationsXRay</a>

x_ray block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#x_ray CloudAwsIntegrations#x_ray}

---

### CloudAwsIntegrationsDocDb <a name="CloudAwsIntegrationsDocDb" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsDocDb(
  aws_regions: typing.List[str] = None,
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsEbs <a name="CloudAwsIntegrationsEbs" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsEbs(
  aws_regions: typing.List[str] = None,
  fetch_extended_inventory: typing.Union[bool, IResolvable] = None,
  metrics_polling_interval: typing.Union[int, float] = None,
  tag_key: str = None,
  tag_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs.property.fetchExtendedInventory">fetch_extended_inventory</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determine if extra inventory data be collected or not. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs.property.tagKey">tag_key</a></code> | <code>str</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs.property.tagValue">tag_value</a></code> | <code>str</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `fetch_extended_inventory`<sup>Optional</sup> <a name="fetch_extended_inventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs.property.fetchExtendedInventory"></a>

```python
fetch_extended_inventory: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_extended_inventory CloudAwsIntegrations#fetch_extended_inventory}

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

##### `tag_key`<sup>Optional</sup> <a name="tag_key" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}

---

##### `tag_value`<sup>Optional</sup> <a name="tag_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}

---

### CloudAwsIntegrationsElasticache <a name="CloudAwsIntegrationsElasticache" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsElasticache(
  aws_regions: typing.List[str] = None,
  fetch_tags: typing.Union[bool, IResolvable] = None,
  metrics_polling_interval: typing.Union[int, float] = None,
  tag_key: str = None,
  tag_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache.property.fetchTags">fetch_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specify if tags should be collected. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache.property.tagKey">tag_key</a></code> | <code>str</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache.property.tagValue">tag_value</a></code> | <code>str</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `fetch_tags`<sup>Optional</sup> <a name="fetch_tags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache.property.fetchTags"></a>

```python
fetch_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specify if tags should be collected.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_tags CloudAwsIntegrations#fetch_tags}

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

##### `tag_key`<sup>Optional</sup> <a name="tag_key" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}

---

##### `tag_value`<sup>Optional</sup> <a name="tag_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}

---

### CloudAwsIntegrationsHealth <a name="CloudAwsIntegrationsHealth" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsHealth(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsS3 <a name="CloudAwsIntegrationsS3" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsS3(
  fetch_extended_inventory: typing.Union[bool, IResolvable] = None,
  fetch_tags: typing.Union[bool, IResolvable] = None,
  metrics_polling_interval: typing.Union[int, float] = None,
  tag_key: str = None,
  tag_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3.property.fetchExtendedInventory">fetch_extended_inventory</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determine if extra inventory data be collected or not. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3.property.fetchTags">fetch_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specify if tags should be collected. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3.property.tagKey">tag_key</a></code> | <code>str</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3.property.tagValue">tag_value</a></code> | <code>str</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `fetch_extended_inventory`<sup>Optional</sup> <a name="fetch_extended_inventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3.property.fetchExtendedInventory"></a>

```python
fetch_extended_inventory: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_extended_inventory CloudAwsIntegrations#fetch_extended_inventory}

---

##### `fetch_tags`<sup>Optional</sup> <a name="fetch_tags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3.property.fetchTags"></a>

```python
fetch_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specify if tags should be collected.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_tags CloudAwsIntegrations#fetch_tags}

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

##### `tag_key`<sup>Optional</sup> <a name="tag_key" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}

---

##### `tag_value`<sup>Optional</sup> <a name="tag_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}

---

### CloudAwsIntegrationsSqs <a name="CloudAwsIntegrationsSqs" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsSqs(
  aws_regions: typing.List[str] = None,
  fetch_extended_inventory: typing.Union[bool, IResolvable] = None,
  fetch_tags: typing.Union[bool, IResolvable] = None,
  metrics_polling_interval: typing.Union[int, float] = None,
  queue_prefixes: typing.List[str] = None,
  tag_key: str = None,
  tag_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.fetchExtendedInventory">fetch_extended_inventory</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determine if extra inventory data be collected or not. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.fetchTags">fetch_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specify if tags should be collected. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.queuePrefixes">queue_prefixes</a></code> | <code>typing.List[str]</code> | Specify each name or prefix for the Queues that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.tagKey">tag_key</a></code> | <code>str</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.tagValue">tag_value</a></code> | <code>str</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `fetch_extended_inventory`<sup>Optional</sup> <a name="fetch_extended_inventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.fetchExtendedInventory"></a>

```python
fetch_extended_inventory: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_extended_inventory CloudAwsIntegrations#fetch_extended_inventory}

---

##### `fetch_tags`<sup>Optional</sup> <a name="fetch_tags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.fetchTags"></a>

```python
fetch_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specify if tags should be collected.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_tags CloudAwsIntegrations#fetch_tags}

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

##### `queue_prefixes`<sup>Optional</sup> <a name="queue_prefixes" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.queuePrefixes"></a>

```python
queue_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Specify each name or prefix for the Queues that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#queue_prefixes CloudAwsIntegrations#queue_prefixes}

---

##### `tag_key`<sup>Optional</sup> <a name="tag_key" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}

---

##### `tag_value`<sup>Optional</sup> <a name="tag_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}

---

### CloudAwsIntegrationsTrustedAdvisor <a name="CloudAwsIntegrationsTrustedAdvisor" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsVpc <a name="CloudAwsIntegrationsVpc" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsVpc(
  aws_regions: typing.List[str] = None,
  fetch_nat_gateway: typing.Union[bool, IResolvable] = None,
  fetch_vpn: typing.Union[bool, IResolvable] = None,
  metrics_polling_interval: typing.Union[int, float] = None,
  tag_key: str = None,
  tag_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.fetchNatGateway">fetch_nat_gateway</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specify if NAT gateway should be monitored. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.fetchVpn">fetch_vpn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specify if VPN should be monitored. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.tagKey">tag_key</a></code> | <code>str</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.tagValue">tag_value</a></code> | <code>str</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `fetch_nat_gateway`<sup>Optional</sup> <a name="fetch_nat_gateway" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.fetchNatGateway"></a>

```python
fetch_nat_gateway: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specify if NAT gateway should be monitored.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_nat_gateway CloudAwsIntegrations#fetch_nat_gateway}

---

##### `fetch_vpn`<sup>Optional</sup> <a name="fetch_vpn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.fetchVpn"></a>

```python
fetch_vpn: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specify if VPN should be monitored.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_vpn CloudAwsIntegrations#fetch_vpn}

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

##### `tag_key`<sup>Optional</sup> <a name="tag_key" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}

---

##### `tag_value`<sup>Optional</sup> <a name="tag_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}

---

### CloudAwsIntegrationsXRay <a name="CloudAwsIntegrationsXRay" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsXRay(
  aws_regions: typing.List[str] = None,
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudAwsIntegrationsAlbOutputReference <a name="CloudAwsIntegrationsAlbOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetAwsRegions">reset_aws_regions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetFetchExtendedInventory">reset_fetch_extended_inventory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetFetchTags">reset_fetch_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetLoadBalancerPrefixes">reset_load_balancer_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetTagKey">reset_tag_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetTagValue">reset_tag_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aws_regions` <a name="reset_aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetAwsRegions"></a>

```python
def reset_aws_regions() -> None
```

##### `reset_fetch_extended_inventory` <a name="reset_fetch_extended_inventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetFetchExtendedInventory"></a>

```python
def reset_fetch_extended_inventory() -> None
```

##### `reset_fetch_tags` <a name="reset_fetch_tags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetFetchTags"></a>

```python
def reset_fetch_tags() -> None
```

##### `reset_load_balancer_prefixes` <a name="reset_load_balancer_prefixes" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetLoadBalancerPrefixes"></a>

```python
def reset_load_balancer_prefixes() -> None
```

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_tag_key` <a name="reset_tag_key" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetTagKey"></a>

```python
def reset_tag_key() -> None
```

##### `reset_tag_value` <a name="reset_tag_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetTagValue"></a>

```python
def reset_tag_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.awsRegionsInput">aws_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.fetchExtendedInventoryInput">fetch_extended_inventory_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.fetchTagsInput">fetch_tags_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.loadBalancerPrefixesInput">load_balancer_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.tagKeyInput">tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.tagValueInput">tag_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.fetchExtendedInventory">fetch_extended_inventory</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.fetchTags">fetch_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.loadBalancerPrefixes">load_balancer_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.tagValue">tag_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb">CloudAwsIntegrationsAlb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_regions_input`<sup>Optional</sup> <a name="aws_regions_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.awsRegionsInput"></a>

```python
aws_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fetch_extended_inventory_input`<sup>Optional</sup> <a name="fetch_extended_inventory_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.fetchExtendedInventoryInput"></a>

```python
fetch_extended_inventory_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fetch_tags_input`<sup>Optional</sup> <a name="fetch_tags_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.fetchTagsInput"></a>

```python
fetch_tags_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `load_balancer_prefixes_input`<sup>Optional</sup> <a name="load_balancer_prefixes_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.loadBalancerPrefixesInput"></a>

```python
load_balancer_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tag_key_input`<sup>Optional</sup> <a name="tag_key_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.tagKeyInput"></a>

```python
tag_key_input: str
```

- *Type:* str

---

##### `tag_value_input`<sup>Optional</sup> <a name="tag_value_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.tagValueInput"></a>

```python
tag_value_input: str
```

- *Type:* str

---

##### `aws_regions`<sup>Required</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fetch_extended_inventory`<sup>Required</sup> <a name="fetch_extended_inventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.fetchExtendedInventory"></a>

```python
fetch_extended_inventory: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fetch_tags`<sup>Required</sup> <a name="fetch_tags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.fetchTags"></a>

```python
fetch_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `load_balancer_prefixes`<sup>Required</sup> <a name="load_balancer_prefixes" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.loadBalancerPrefixes"></a>

```python
load_balancer_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `tag_value`<sup>Required</sup> <a name="tag_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.internalValue"></a>

```python
internal_value: CloudAwsIntegrationsAlb
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb">CloudAwsIntegrationsAlb</a>

---


### CloudAwsIntegrationsApiGatewayOutputReference <a name="CloudAwsIntegrationsApiGatewayOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resetAwsRegions">reset_aws_regions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resetStagePrefixes">reset_stage_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resetTagKey">reset_tag_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resetTagValue">reset_tag_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aws_regions` <a name="reset_aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resetAwsRegions"></a>

```python
def reset_aws_regions() -> None
```

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_stage_prefixes` <a name="reset_stage_prefixes" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resetStagePrefixes"></a>

```python
def reset_stage_prefixes() -> None
```

##### `reset_tag_key` <a name="reset_tag_key" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resetTagKey"></a>

```python
def reset_tag_key() -> None
```

##### `reset_tag_value` <a name="reset_tag_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resetTagValue"></a>

```python
def reset_tag_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.awsRegionsInput">aws_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.stagePrefixesInput">stage_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.tagKeyInput">tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.tagValueInput">tag_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.stagePrefixes">stage_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.tagValue">tag_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway">CloudAwsIntegrationsApiGateway</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_regions_input`<sup>Optional</sup> <a name="aws_regions_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.awsRegionsInput"></a>

```python
aws_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stage_prefixes_input`<sup>Optional</sup> <a name="stage_prefixes_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.stagePrefixesInput"></a>

```python
stage_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tag_key_input`<sup>Optional</sup> <a name="tag_key_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.tagKeyInput"></a>

```python
tag_key_input: str
```

- *Type:* str

---

##### `tag_value_input`<sup>Optional</sup> <a name="tag_value_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.tagValueInput"></a>

```python
tag_value_input: str
```

- *Type:* str

---

##### `aws_regions`<sup>Required</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stage_prefixes`<sup>Required</sup> <a name="stage_prefixes" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.stagePrefixes"></a>

```python
stage_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `tag_value`<sup>Required</sup> <a name="tag_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.internalValue"></a>

```python
internal_value: CloudAwsIntegrationsApiGateway
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway">CloudAwsIntegrationsApiGateway</a>

---


### CloudAwsIntegrationsAutoScalingOutputReference <a name="CloudAwsIntegrationsAutoScalingOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.resetAwsRegions">reset_aws_regions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aws_regions` <a name="reset_aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.resetAwsRegions"></a>

```python
def reset_aws_regions() -> None
```

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.awsRegionsInput">aws_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling">CloudAwsIntegrationsAutoScaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_regions_input`<sup>Optional</sup> <a name="aws_regions_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.awsRegionsInput"></a>

```python
aws_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `aws_regions`<sup>Required</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.internalValue"></a>

```python
internal_value: CloudAwsIntegrationsAutoScaling
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling">CloudAwsIntegrationsAutoScaling</a>

---


### CloudAwsIntegrationsAwsAppSyncOutputReference <a name="CloudAwsIntegrationsAwsAppSyncOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.resetAwsRegions">reset_aws_regions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aws_regions` <a name="reset_aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.resetAwsRegions"></a>

```python
def reset_aws_regions() -> None
```

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.awsRegionsInput">aws_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync">CloudAwsIntegrationsAwsAppSync</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_regions_input`<sup>Optional</sup> <a name="aws_regions_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.awsRegionsInput"></a>

```python
aws_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `aws_regions`<sup>Required</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.internalValue"></a>

```python
internal_value: CloudAwsIntegrationsAwsAppSync
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync">CloudAwsIntegrationsAwsAppSync</a>

---


### CloudAwsIntegrationsAwsAthenaOutputReference <a name="CloudAwsIntegrationsAwsAthenaOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.resetAwsRegions">reset_aws_regions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aws_regions` <a name="reset_aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.resetAwsRegions"></a>

```python
def reset_aws_regions() -> None
```

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.awsRegionsInput">aws_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena">CloudAwsIntegrationsAwsAthena</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_regions_input`<sup>Optional</sup> <a name="aws_regions_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.awsRegionsInput"></a>

```python
aws_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `aws_regions`<sup>Required</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.internalValue"></a>

```python
internal_value: CloudAwsIntegrationsAwsAthena
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena">CloudAwsIntegrationsAwsAthena</a>

---


### CloudAwsIntegrationsAwsCognitoOutputReference <a name="CloudAwsIntegrationsAwsCognitoOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.resetAwsRegions">reset_aws_regions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aws_regions` <a name="reset_aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.resetAwsRegions"></a>

```python
def reset_aws_regions() -> None
```

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.awsRegionsInput">aws_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito">CloudAwsIntegrationsAwsCognito</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_regions_input`<sup>Optional</sup> <a name="aws_regions_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.awsRegionsInput"></a>

```python
aws_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `aws_regions`<sup>Required</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.internalValue"></a>

```python
internal_value: CloudAwsIntegrationsAwsCognito
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito">CloudAwsIntegrationsAwsCognito</a>

---


### CloudAwsIntegrationsAwsConnectOutputReference <a name="CloudAwsIntegrationsAwsConnectOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.resetAwsRegions">reset_aws_regions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aws_regions` <a name="reset_aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.resetAwsRegions"></a>

```python
def reset_aws_regions() -> None
```

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.awsRegionsInput">aws_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect">CloudAwsIntegrationsAwsConnect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_regions_input`<sup>Optional</sup> <a name="aws_regions_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.awsRegionsInput"></a>

```python
aws_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `aws_regions`<sup>Required</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.internalValue"></a>

```python
internal_value: CloudAwsIntegrationsAwsConnect
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect">CloudAwsIntegrationsAwsConnect</a>

---


### CloudAwsIntegrationsAwsDirectConnectOutputReference <a name="CloudAwsIntegrationsAwsDirectConnectOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.resetAwsRegions">reset_aws_regions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aws_regions` <a name="reset_aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.resetAwsRegions"></a>

```python
def reset_aws_regions() -> None
```

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.awsRegionsInput">aws_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect">CloudAwsIntegrationsAwsDirectConnect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_regions_input`<sup>Optional</sup> <a name="aws_regions_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.awsRegionsInput"></a>

```python
aws_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `aws_regions`<sup>Required</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.internalValue"></a>

```python
internal_value: CloudAwsIntegrationsAwsDirectConnect
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect">CloudAwsIntegrationsAwsDirectConnect</a>

---


### CloudAwsIntegrationsAwsFsxOutputReference <a name="CloudAwsIntegrationsAwsFsxOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.resetAwsRegions">reset_aws_regions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aws_regions` <a name="reset_aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.resetAwsRegions"></a>

```python
def reset_aws_regions() -> None
```

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.awsRegionsInput">aws_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx">CloudAwsIntegrationsAwsFsx</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_regions_input`<sup>Optional</sup> <a name="aws_regions_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.awsRegionsInput"></a>

```python
aws_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `aws_regions`<sup>Required</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.internalValue"></a>

```python
internal_value: CloudAwsIntegrationsAwsFsx
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx">CloudAwsIntegrationsAwsFsx</a>

---


### CloudAwsIntegrationsBillingOutputReference <a name="CloudAwsIntegrationsBillingOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling">CloudAwsIntegrationsBilling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.property.internalValue"></a>

```python
internal_value: CloudAwsIntegrationsBilling
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling">CloudAwsIntegrationsBilling</a>

---


### CloudAwsIntegrationsCloudtrailOutputReference <a name="CloudAwsIntegrationsCloudtrailOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.resetAwsRegions">reset_aws_regions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aws_regions` <a name="reset_aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.resetAwsRegions"></a>

```python
def reset_aws_regions() -> None
```

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.awsRegionsInput">aws_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail">CloudAwsIntegrationsCloudtrail</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_regions_input`<sup>Optional</sup> <a name="aws_regions_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.awsRegionsInput"></a>

```python
aws_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `aws_regions`<sup>Required</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.internalValue"></a>

```python
internal_value: CloudAwsIntegrationsCloudtrail
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail">CloudAwsIntegrationsCloudtrail</a>

---


### CloudAwsIntegrationsDocDbOutputReference <a name="CloudAwsIntegrationsDocDbOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.resetAwsRegions">reset_aws_regions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aws_regions` <a name="reset_aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.resetAwsRegions"></a>

```python
def reset_aws_regions() -> None
```

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.awsRegionsInput">aws_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb">CloudAwsIntegrationsDocDb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_regions_input`<sup>Optional</sup> <a name="aws_regions_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.awsRegionsInput"></a>

```python
aws_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `aws_regions`<sup>Required</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.internalValue"></a>

```python
internal_value: CloudAwsIntegrationsDocDb
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb">CloudAwsIntegrationsDocDb</a>

---


### CloudAwsIntegrationsEbsOutputReference <a name="CloudAwsIntegrationsEbsOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resetAwsRegions">reset_aws_regions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resetFetchExtendedInventory">reset_fetch_extended_inventory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resetTagKey">reset_tag_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resetTagValue">reset_tag_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aws_regions` <a name="reset_aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resetAwsRegions"></a>

```python
def reset_aws_regions() -> None
```

##### `reset_fetch_extended_inventory` <a name="reset_fetch_extended_inventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resetFetchExtendedInventory"></a>

```python
def reset_fetch_extended_inventory() -> None
```

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_tag_key` <a name="reset_tag_key" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resetTagKey"></a>

```python
def reset_tag_key() -> None
```

##### `reset_tag_value` <a name="reset_tag_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resetTagValue"></a>

```python
def reset_tag_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.awsRegionsInput">aws_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.fetchExtendedInventoryInput">fetch_extended_inventory_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.tagKeyInput">tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.tagValueInput">tag_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.fetchExtendedInventory">fetch_extended_inventory</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.tagValue">tag_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs">CloudAwsIntegrationsEbs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_regions_input`<sup>Optional</sup> <a name="aws_regions_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.awsRegionsInput"></a>

```python
aws_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fetch_extended_inventory_input`<sup>Optional</sup> <a name="fetch_extended_inventory_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.fetchExtendedInventoryInput"></a>

```python
fetch_extended_inventory_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tag_key_input`<sup>Optional</sup> <a name="tag_key_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.tagKeyInput"></a>

```python
tag_key_input: str
```

- *Type:* str

---

##### `tag_value_input`<sup>Optional</sup> <a name="tag_value_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.tagValueInput"></a>

```python
tag_value_input: str
```

- *Type:* str

---

##### `aws_regions`<sup>Required</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fetch_extended_inventory`<sup>Required</sup> <a name="fetch_extended_inventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.fetchExtendedInventory"></a>

```python
fetch_extended_inventory: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `tag_value`<sup>Required</sup> <a name="tag_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.internalValue"></a>

```python
internal_value: CloudAwsIntegrationsEbs
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs">CloudAwsIntegrationsEbs</a>

---


### CloudAwsIntegrationsElasticacheOutputReference <a name="CloudAwsIntegrationsElasticacheOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resetAwsRegions">reset_aws_regions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resetFetchTags">reset_fetch_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resetTagKey">reset_tag_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resetTagValue">reset_tag_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aws_regions` <a name="reset_aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resetAwsRegions"></a>

```python
def reset_aws_regions() -> None
```

##### `reset_fetch_tags` <a name="reset_fetch_tags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resetFetchTags"></a>

```python
def reset_fetch_tags() -> None
```

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_tag_key` <a name="reset_tag_key" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resetTagKey"></a>

```python
def reset_tag_key() -> None
```

##### `reset_tag_value` <a name="reset_tag_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resetTagValue"></a>

```python
def reset_tag_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.awsRegionsInput">aws_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.fetchTagsInput">fetch_tags_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.tagKeyInput">tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.tagValueInput">tag_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.fetchTags">fetch_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.tagValue">tag_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache">CloudAwsIntegrationsElasticache</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_regions_input`<sup>Optional</sup> <a name="aws_regions_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.awsRegionsInput"></a>

```python
aws_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fetch_tags_input`<sup>Optional</sup> <a name="fetch_tags_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.fetchTagsInput"></a>

```python
fetch_tags_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tag_key_input`<sup>Optional</sup> <a name="tag_key_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.tagKeyInput"></a>

```python
tag_key_input: str
```

- *Type:* str

---

##### `tag_value_input`<sup>Optional</sup> <a name="tag_value_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.tagValueInput"></a>

```python
tag_value_input: str
```

- *Type:* str

---

##### `aws_regions`<sup>Required</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fetch_tags`<sup>Required</sup> <a name="fetch_tags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.fetchTags"></a>

```python
fetch_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `tag_value`<sup>Required</sup> <a name="tag_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.internalValue"></a>

```python
internal_value: CloudAwsIntegrationsElasticache
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache">CloudAwsIntegrationsElasticache</a>

---


### CloudAwsIntegrationsHealthOutputReference <a name="CloudAwsIntegrationsHealthOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth">CloudAwsIntegrationsHealth</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.property.internalValue"></a>

```python
internal_value: CloudAwsIntegrationsHealth
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth">CloudAwsIntegrationsHealth</a>

---


### CloudAwsIntegrationsS3OutputReference <a name="CloudAwsIntegrationsS3OutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resetFetchExtendedInventory">reset_fetch_extended_inventory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resetFetchTags">reset_fetch_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resetTagKey">reset_tag_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resetTagValue">reset_tag_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fetch_extended_inventory` <a name="reset_fetch_extended_inventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resetFetchExtendedInventory"></a>

```python
def reset_fetch_extended_inventory() -> None
```

##### `reset_fetch_tags` <a name="reset_fetch_tags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resetFetchTags"></a>

```python
def reset_fetch_tags() -> None
```

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_tag_key` <a name="reset_tag_key" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resetTagKey"></a>

```python
def reset_tag_key() -> None
```

##### `reset_tag_value` <a name="reset_tag_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resetTagValue"></a>

```python
def reset_tag_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.fetchExtendedInventoryInput">fetch_extended_inventory_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.fetchTagsInput">fetch_tags_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.tagKeyInput">tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.tagValueInput">tag_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.fetchExtendedInventory">fetch_extended_inventory</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.fetchTags">fetch_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.tagValue">tag_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3">CloudAwsIntegrationsS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fetch_extended_inventory_input`<sup>Optional</sup> <a name="fetch_extended_inventory_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.fetchExtendedInventoryInput"></a>

```python
fetch_extended_inventory_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fetch_tags_input`<sup>Optional</sup> <a name="fetch_tags_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.fetchTagsInput"></a>

```python
fetch_tags_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tag_key_input`<sup>Optional</sup> <a name="tag_key_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.tagKeyInput"></a>

```python
tag_key_input: str
```

- *Type:* str

---

##### `tag_value_input`<sup>Optional</sup> <a name="tag_value_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.tagValueInput"></a>

```python
tag_value_input: str
```

- *Type:* str

---

##### `fetch_extended_inventory`<sup>Required</sup> <a name="fetch_extended_inventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.fetchExtendedInventory"></a>

```python
fetch_extended_inventory: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fetch_tags`<sup>Required</sup> <a name="fetch_tags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.fetchTags"></a>

```python
fetch_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `tag_value`<sup>Required</sup> <a name="tag_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.internalValue"></a>

```python
internal_value: CloudAwsIntegrationsS3
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3">CloudAwsIntegrationsS3</a>

---


### CloudAwsIntegrationsSqsOutputReference <a name="CloudAwsIntegrationsSqsOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetAwsRegions">reset_aws_regions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetFetchExtendedInventory">reset_fetch_extended_inventory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetFetchTags">reset_fetch_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetQueuePrefixes">reset_queue_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetTagKey">reset_tag_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetTagValue">reset_tag_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aws_regions` <a name="reset_aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetAwsRegions"></a>

```python
def reset_aws_regions() -> None
```

##### `reset_fetch_extended_inventory` <a name="reset_fetch_extended_inventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetFetchExtendedInventory"></a>

```python
def reset_fetch_extended_inventory() -> None
```

##### `reset_fetch_tags` <a name="reset_fetch_tags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetFetchTags"></a>

```python
def reset_fetch_tags() -> None
```

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_queue_prefixes` <a name="reset_queue_prefixes" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetQueuePrefixes"></a>

```python
def reset_queue_prefixes() -> None
```

##### `reset_tag_key` <a name="reset_tag_key" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetTagKey"></a>

```python
def reset_tag_key() -> None
```

##### `reset_tag_value` <a name="reset_tag_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetTagValue"></a>

```python
def reset_tag_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.awsRegionsInput">aws_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.fetchExtendedInventoryInput">fetch_extended_inventory_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.fetchTagsInput">fetch_tags_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.queuePrefixesInput">queue_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.tagKeyInput">tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.tagValueInput">tag_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.fetchExtendedInventory">fetch_extended_inventory</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.fetchTags">fetch_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.queuePrefixes">queue_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.tagValue">tag_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs">CloudAwsIntegrationsSqs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_regions_input`<sup>Optional</sup> <a name="aws_regions_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.awsRegionsInput"></a>

```python
aws_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fetch_extended_inventory_input`<sup>Optional</sup> <a name="fetch_extended_inventory_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.fetchExtendedInventoryInput"></a>

```python
fetch_extended_inventory_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fetch_tags_input`<sup>Optional</sup> <a name="fetch_tags_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.fetchTagsInput"></a>

```python
fetch_tags_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `queue_prefixes_input`<sup>Optional</sup> <a name="queue_prefixes_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.queuePrefixesInput"></a>

```python
queue_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tag_key_input`<sup>Optional</sup> <a name="tag_key_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.tagKeyInput"></a>

```python
tag_key_input: str
```

- *Type:* str

---

##### `tag_value_input`<sup>Optional</sup> <a name="tag_value_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.tagValueInput"></a>

```python
tag_value_input: str
```

- *Type:* str

---

##### `aws_regions`<sup>Required</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fetch_extended_inventory`<sup>Required</sup> <a name="fetch_extended_inventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.fetchExtendedInventory"></a>

```python
fetch_extended_inventory: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fetch_tags`<sup>Required</sup> <a name="fetch_tags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.fetchTags"></a>

```python
fetch_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `queue_prefixes`<sup>Required</sup> <a name="queue_prefixes" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.queuePrefixes"></a>

```python
queue_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `tag_value`<sup>Required</sup> <a name="tag_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.internalValue"></a>

```python
internal_value: CloudAwsIntegrationsSqs
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs">CloudAwsIntegrationsSqs</a>

---


### CloudAwsIntegrationsTrustedAdvisorOutputReference <a name="CloudAwsIntegrationsTrustedAdvisorOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor">CloudAwsIntegrationsTrustedAdvisor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.property.internalValue"></a>

```python
internal_value: CloudAwsIntegrationsTrustedAdvisor
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor">CloudAwsIntegrationsTrustedAdvisor</a>

---


### CloudAwsIntegrationsVpcOutputReference <a name="CloudAwsIntegrationsVpcOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resetAwsRegions">reset_aws_regions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resetFetchNatGateway">reset_fetch_nat_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resetFetchVpn">reset_fetch_vpn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resetTagKey">reset_tag_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resetTagValue">reset_tag_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aws_regions` <a name="reset_aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resetAwsRegions"></a>

```python
def reset_aws_regions() -> None
```

##### `reset_fetch_nat_gateway` <a name="reset_fetch_nat_gateway" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resetFetchNatGateway"></a>

```python
def reset_fetch_nat_gateway() -> None
```

##### `reset_fetch_vpn` <a name="reset_fetch_vpn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resetFetchVpn"></a>

```python
def reset_fetch_vpn() -> None
```

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_tag_key` <a name="reset_tag_key" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resetTagKey"></a>

```python
def reset_tag_key() -> None
```

##### `reset_tag_value` <a name="reset_tag_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resetTagValue"></a>

```python
def reset_tag_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.awsRegionsInput">aws_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.fetchNatGatewayInput">fetch_nat_gateway_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.fetchVpnInput">fetch_vpn_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.tagKeyInput">tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.tagValueInput">tag_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.fetchNatGateway">fetch_nat_gateway</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.fetchVpn">fetch_vpn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.tagValue">tag_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc">CloudAwsIntegrationsVpc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_regions_input`<sup>Optional</sup> <a name="aws_regions_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.awsRegionsInput"></a>

```python
aws_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fetch_nat_gateway_input`<sup>Optional</sup> <a name="fetch_nat_gateway_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.fetchNatGatewayInput"></a>

```python
fetch_nat_gateway_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fetch_vpn_input`<sup>Optional</sup> <a name="fetch_vpn_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.fetchVpnInput"></a>

```python
fetch_vpn_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tag_key_input`<sup>Optional</sup> <a name="tag_key_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.tagKeyInput"></a>

```python
tag_key_input: str
```

- *Type:* str

---

##### `tag_value_input`<sup>Optional</sup> <a name="tag_value_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.tagValueInput"></a>

```python
tag_value_input: str
```

- *Type:* str

---

##### `aws_regions`<sup>Required</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fetch_nat_gateway`<sup>Required</sup> <a name="fetch_nat_gateway" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.fetchNatGateway"></a>

```python
fetch_nat_gateway: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fetch_vpn`<sup>Required</sup> <a name="fetch_vpn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.fetchVpn"></a>

```python
fetch_vpn: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `tag_value`<sup>Required</sup> <a name="tag_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.internalValue"></a>

```python
internal_value: CloudAwsIntegrationsVpc
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc">CloudAwsIntegrationsVpc</a>

---


### CloudAwsIntegrationsXRayOutputReference <a name="CloudAwsIntegrationsXRayOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_integrations

cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.resetAwsRegions">reset_aws_regions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aws_regions` <a name="reset_aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.resetAwsRegions"></a>

```python
def reset_aws_regions() -> None
```

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.awsRegionsInput">aws_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay">CloudAwsIntegrationsXRay</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_regions_input`<sup>Optional</sup> <a name="aws_regions_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.awsRegionsInput"></a>

```python
aws_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `aws_regions`<sup>Required</sup> <a name="aws_regions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.internalValue"></a>

```python
internal_value: CloudAwsIntegrationsXRay
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay">CloudAwsIntegrationsXRay</a>

---



