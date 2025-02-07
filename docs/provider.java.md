# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-newrelic.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NewrelicProvider <a name="NewrelicProvider" id="@cdktf/provider-newrelic.provider.NewrelicProvider"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs newrelic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.provider.NewrelicProvider;

NewrelicProvider.Builder.create(Construct scope, java.lang.String id)
    .accountId(java.lang.Number)
    .apiKey(java.lang.String)
//  .adminApiKey(java.lang.String)
//  .alias(java.lang.String)
//  .apiUrl(java.lang.String)
//  .cacertFile(java.lang.String)
//  .infrastructureApiUrl(java.lang.String)
//  .insecureSkipVerify(java.lang.Boolean)
//  .insecureSkipVerify(IResolvable)
//  .insightsInsertKey(java.lang.String)
//  .insightsInsertUrl(java.lang.String)
//  .insightsQueryUrl(java.lang.String)
//  .nerdgraphApiUrl(java.lang.String)
//  .region(java.lang.String)
//  .syntheticsApiUrl(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#account_id NewrelicProvider#account_id}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.apiKey">apiKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#api_key NewrelicProvider#api_key}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.adminApiKey">adminApiKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#admin_api_key NewrelicProvider#admin_api_key}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.apiUrl">apiUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#api_url NewrelicProvider#api_url}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.cacertFile">cacertFile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#cacert_file NewrelicProvider#cacert_file}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.infrastructureApiUrl">infrastructureApiUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#infrastructure_api_url NewrelicProvider#infrastructure_api_url}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.insecureSkipVerify">insecureSkipVerify</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#insecure_skip_verify NewrelicProvider#insecure_skip_verify}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.insightsInsertKey">insightsInsertKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#insights_insert_key NewrelicProvider#insights_insert_key}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.insightsInsertUrl">insightsInsertUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#insights_insert_url NewrelicProvider#insights_insert_url}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.insightsQueryUrl">insightsQueryUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#insights_query_url NewrelicProvider#insights_query_url}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.nerdgraphApiUrl">nerdgraphApiUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#nerdgraph_api_url NewrelicProvider#nerdgraph_api_url}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The data center for which your New Relic account is configured. Only one region per provider block is permitted. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.syntheticsApiUrl">syntheticsApiUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#synthetics_api_url NewrelicProvider#synthetics_api_url}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.accountId"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#account_id NewrelicProvider#account_id}.

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.apiKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#api_key NewrelicProvider#api_key}.

---

##### `adminApiKey`<sup>Optional</sup> <a name="adminApiKey" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.adminApiKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#admin_api_key NewrelicProvider#admin_api_key}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#alias NewrelicProvider#alias}

---

##### `apiUrl`<sup>Optional</sup> <a name="apiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.apiUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#api_url NewrelicProvider#api_url}.

---

##### `cacertFile`<sup>Optional</sup> <a name="cacertFile" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.cacertFile"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#cacert_file NewrelicProvider#cacert_file}.

---

##### `infrastructureApiUrl`<sup>Optional</sup> <a name="infrastructureApiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.infrastructureApiUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#infrastructure_api_url NewrelicProvider#infrastructure_api_url}.

---

##### `insecureSkipVerify`<sup>Optional</sup> <a name="insecureSkipVerify" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.insecureSkipVerify"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#insecure_skip_verify NewrelicProvider#insecure_skip_verify}.

---

##### `insightsInsertKey`<sup>Optional</sup> <a name="insightsInsertKey" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.insightsInsertKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#insights_insert_key NewrelicProvider#insights_insert_key}.

---

##### `insightsInsertUrl`<sup>Optional</sup> <a name="insightsInsertUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.insightsInsertUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#insights_insert_url NewrelicProvider#insights_insert_url}.

---

##### `insightsQueryUrl`<sup>Optional</sup> <a name="insightsQueryUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.insightsQueryUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#insights_query_url NewrelicProvider#insights_query_url}.

---

##### `nerdgraphApiUrl`<sup>Optional</sup> <a name="nerdgraphApiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.nerdgraphApiUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#nerdgraph_api_url NewrelicProvider#nerdgraph_api_url}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The data center for which your New Relic account is configured. Only one region per provider block is permitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#region NewrelicProvider#region}

---

##### `syntheticsApiUrl`<sup>Optional</sup> <a name="syntheticsApiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.syntheticsApiUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#synthetics_api_url NewrelicProvider#synthetics_api_url}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetAdminApiKey">resetAdminApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetApiUrl">resetApiUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetCacertFile">resetCacertFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetInfrastructureApiUrl">resetInfrastructureApiUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetInsecureSkipVerify">resetInsecureSkipVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetInsightsInsertKey">resetInsightsInsertKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetInsightsInsertUrl">resetInsightsInsertUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetInsightsQueryUrl">resetInsightsQueryUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetNerdgraphApiUrl">resetNerdgraphApiUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetSyntheticsApiUrl">resetSyntheticsApiUrl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.provider.NewrelicProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.provider.NewrelicProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.provider.NewrelicProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.provider.NewrelicProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.provider.NewrelicProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.provider.NewrelicProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.provider.NewrelicProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.provider.NewrelicProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.provider.NewrelicProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAdminApiKey` <a name="resetAdminApiKey" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetAdminApiKey"></a>

```java
public void resetAdminApiKey()
```

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetApiUrl` <a name="resetApiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetApiUrl"></a>

```java
public void resetApiUrl()
```

##### `resetCacertFile` <a name="resetCacertFile" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetCacertFile"></a>

```java
public void resetCacertFile()
```

##### `resetInfrastructureApiUrl` <a name="resetInfrastructureApiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetInfrastructureApiUrl"></a>

```java
public void resetInfrastructureApiUrl()
```

##### `resetInsecureSkipVerify` <a name="resetInsecureSkipVerify" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetInsecureSkipVerify"></a>

```java
public void resetInsecureSkipVerify()
```

##### `resetInsightsInsertKey` <a name="resetInsightsInsertKey" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetInsightsInsertKey"></a>

```java
public void resetInsightsInsertKey()
```

##### `resetInsightsInsertUrl` <a name="resetInsightsInsertUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetInsightsInsertUrl"></a>

```java
public void resetInsightsInsertUrl()
```

##### `resetInsightsQueryUrl` <a name="resetInsightsQueryUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetInsightsQueryUrl"></a>

```java
public void resetInsightsQueryUrl()
```

##### `resetNerdgraphApiUrl` <a name="resetNerdgraphApiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetNerdgraphApiUrl"></a>

```java
public void resetNerdgraphApiUrl()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSyntheticsApiUrl` <a name="resetSyntheticsApiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetSyntheticsApiUrl"></a>

```java
public void resetSyntheticsApiUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NewrelicProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.provider.NewrelicProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.provider.NewrelicProvider;

NewrelicProvider.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.provider.NewrelicProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.provider.NewrelicProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.provider.NewrelicProvider;

NewrelicProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.provider.NewrelicProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-newrelic.provider.NewrelicProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.provider.NewrelicProvider;

NewrelicProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.provider.NewrelicProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.provider.NewrelicProvider.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.provider.NewrelicProvider;

NewrelicProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NewrelicProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NewrelicProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.provider.NewrelicProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.provider.NewrelicProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NewrelicProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.provider.NewrelicProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NewrelicProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.provider.NewrelicProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NewrelicProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.adminApiKeyInput">adminApiKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.apiKeyInput">apiKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.apiUrlInput">apiUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.cacertFileInput">cacertFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.infrastructureApiUrlInput">infrastructureApiUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.insecureSkipVerifyInput">insecureSkipVerifyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsInsertKeyInput">insightsInsertKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsInsertUrlInput">insightsInsertUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsQueryUrlInput">insightsQueryUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.nerdgraphApiUrlInput">nerdgraphApiUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.syntheticsApiUrlInput">syntheticsApiUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.adminApiKey">adminApiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.apiUrl">apiUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.cacertFile">cacertFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.infrastructureApiUrl">infrastructureApiUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.insecureSkipVerify">insecureSkipVerify</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsInsertKey">insightsInsertKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsInsertUrl">insightsInsertUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsQueryUrl">insightsQueryUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.nerdgraphApiUrl">nerdgraphApiUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.syntheticsApiUrl">syntheticsApiUrl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.accountIdInput"></a>

```java
public java.lang.Number getAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `adminApiKeyInput`<sup>Optional</sup> <a name="adminApiKeyInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.adminApiKeyInput"></a>

```java
public java.lang.String getAdminApiKeyInput();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.apiKeyInput"></a>

```java
public java.lang.String getApiKeyInput();
```

- *Type:* java.lang.String

---

##### `apiUrlInput`<sup>Optional</sup> <a name="apiUrlInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.apiUrlInput"></a>

```java
public java.lang.String getApiUrlInput();
```

- *Type:* java.lang.String

---

##### `cacertFileInput`<sup>Optional</sup> <a name="cacertFileInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.cacertFileInput"></a>

```java
public java.lang.String getCacertFileInput();
```

- *Type:* java.lang.String

---

##### `infrastructureApiUrlInput`<sup>Optional</sup> <a name="infrastructureApiUrlInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.infrastructureApiUrlInput"></a>

```java
public java.lang.String getInfrastructureApiUrlInput();
```

- *Type:* java.lang.String

---

##### `insecureSkipVerifyInput`<sup>Optional</sup> <a name="insecureSkipVerifyInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.insecureSkipVerifyInput"></a>

```java
public java.lang.Object getInsecureSkipVerifyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `insightsInsertKeyInput`<sup>Optional</sup> <a name="insightsInsertKeyInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsInsertKeyInput"></a>

```java
public java.lang.String getInsightsInsertKeyInput();
```

- *Type:* java.lang.String

---

##### `insightsInsertUrlInput`<sup>Optional</sup> <a name="insightsInsertUrlInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsInsertUrlInput"></a>

```java
public java.lang.String getInsightsInsertUrlInput();
```

- *Type:* java.lang.String

---

##### `insightsQueryUrlInput`<sup>Optional</sup> <a name="insightsQueryUrlInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsQueryUrlInput"></a>

```java
public java.lang.String getInsightsQueryUrlInput();
```

- *Type:* java.lang.String

---

##### `nerdgraphApiUrlInput`<sup>Optional</sup> <a name="nerdgraphApiUrlInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.nerdgraphApiUrlInput"></a>

```java
public java.lang.String getNerdgraphApiUrlInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `syntheticsApiUrlInput`<sup>Optional</sup> <a name="syntheticsApiUrlInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.syntheticsApiUrlInput"></a>

```java
public java.lang.String getSyntheticsApiUrlInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

---

##### `adminApiKey`<sup>Optional</sup> <a name="adminApiKey" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.adminApiKey"></a>

```java
public java.lang.String getAdminApiKey();
```

- *Type:* java.lang.String

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

---

##### `apiUrl`<sup>Optional</sup> <a name="apiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.apiUrl"></a>

```java
public java.lang.String getApiUrl();
```

- *Type:* java.lang.String

---

##### `cacertFile`<sup>Optional</sup> <a name="cacertFile" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.cacertFile"></a>

```java
public java.lang.String getCacertFile();
```

- *Type:* java.lang.String

---

##### `infrastructureApiUrl`<sup>Optional</sup> <a name="infrastructureApiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.infrastructureApiUrl"></a>

```java
public java.lang.String getInfrastructureApiUrl();
```

- *Type:* java.lang.String

---

##### `insecureSkipVerify`<sup>Optional</sup> <a name="insecureSkipVerify" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.insecureSkipVerify"></a>

```java
public java.lang.Object getInsecureSkipVerify();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `insightsInsertKey`<sup>Optional</sup> <a name="insightsInsertKey" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsInsertKey"></a>

```java
public java.lang.String getInsightsInsertKey();
```

- *Type:* java.lang.String

---

##### `insightsInsertUrl`<sup>Optional</sup> <a name="insightsInsertUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsInsertUrl"></a>

```java
public java.lang.String getInsightsInsertUrl();
```

- *Type:* java.lang.String

---

##### `insightsQueryUrl`<sup>Optional</sup> <a name="insightsQueryUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsQueryUrl"></a>

```java
public java.lang.String getInsightsQueryUrl();
```

- *Type:* java.lang.String

---

##### `nerdgraphApiUrl`<sup>Optional</sup> <a name="nerdgraphApiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.nerdgraphApiUrl"></a>

```java
public java.lang.String getNerdgraphApiUrl();
```

- *Type:* java.lang.String

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `syntheticsApiUrl`<sup>Optional</sup> <a name="syntheticsApiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.syntheticsApiUrl"></a>

```java
public java.lang.String getSyntheticsApiUrl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NewrelicProviderConfig <a name="NewrelicProviderConfig" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.provider.NewrelicProviderConfig;

NewrelicProviderConfig.builder()
    .accountId(java.lang.Number)
    .apiKey(java.lang.String)
//  .adminApiKey(java.lang.String)
//  .alias(java.lang.String)
//  .apiUrl(java.lang.String)
//  .cacertFile(java.lang.String)
//  .infrastructureApiUrl(java.lang.String)
//  .insecureSkipVerify(java.lang.Boolean)
//  .insecureSkipVerify(IResolvable)
//  .insightsInsertKey(java.lang.String)
//  .insightsInsertUrl(java.lang.String)
//  .insightsQueryUrl(java.lang.String)
//  .nerdgraphApiUrl(java.lang.String)
//  .region(java.lang.String)
//  .syntheticsApiUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#account_id NewrelicProvider#account_id}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#api_key NewrelicProvider#api_key}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.adminApiKey">adminApiKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#admin_api_key NewrelicProvider#admin_api_key}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.apiUrl">apiUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#api_url NewrelicProvider#api_url}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.cacertFile">cacertFile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#cacert_file NewrelicProvider#cacert_file}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.infrastructureApiUrl">infrastructureApiUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#infrastructure_api_url NewrelicProvider#infrastructure_api_url}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.insecureSkipVerify">insecureSkipVerify</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#insecure_skip_verify NewrelicProvider#insecure_skip_verify}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.insightsInsertKey">insightsInsertKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#insights_insert_key NewrelicProvider#insights_insert_key}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.insightsInsertUrl">insightsInsertUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#insights_insert_url NewrelicProvider#insights_insert_url}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.insightsQueryUrl">insightsQueryUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#insights_query_url NewrelicProvider#insights_query_url}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.nerdgraphApiUrl">nerdgraphApiUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#nerdgraph_api_url NewrelicProvider#nerdgraph_api_url}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.region">region</a></code> | <code>java.lang.String</code> | The data center for which your New Relic account is configured. Only one region per provider block is permitted. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.syntheticsApiUrl">syntheticsApiUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#synthetics_api_url NewrelicProvider#synthetics_api_url}. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#account_id NewrelicProvider#account_id}.

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#api_key NewrelicProvider#api_key}.

---

##### `adminApiKey`<sup>Optional</sup> <a name="adminApiKey" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.adminApiKey"></a>

```java
public java.lang.String getAdminApiKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#admin_api_key NewrelicProvider#admin_api_key}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#alias NewrelicProvider#alias}

---

##### `apiUrl`<sup>Optional</sup> <a name="apiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.apiUrl"></a>

```java
public java.lang.String getApiUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#api_url NewrelicProvider#api_url}.

---

##### `cacertFile`<sup>Optional</sup> <a name="cacertFile" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.cacertFile"></a>

```java
public java.lang.String getCacertFile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#cacert_file NewrelicProvider#cacert_file}.

---

##### `infrastructureApiUrl`<sup>Optional</sup> <a name="infrastructureApiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.infrastructureApiUrl"></a>

```java
public java.lang.String getInfrastructureApiUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#infrastructure_api_url NewrelicProvider#infrastructure_api_url}.

---

##### `insecureSkipVerify`<sup>Optional</sup> <a name="insecureSkipVerify" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.insecureSkipVerify"></a>

```java
public java.lang.Object getInsecureSkipVerify();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#insecure_skip_verify NewrelicProvider#insecure_skip_verify}.

---

##### `insightsInsertKey`<sup>Optional</sup> <a name="insightsInsertKey" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.insightsInsertKey"></a>

```java
public java.lang.String getInsightsInsertKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#insights_insert_key NewrelicProvider#insights_insert_key}.

---

##### `insightsInsertUrl`<sup>Optional</sup> <a name="insightsInsertUrl" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.insightsInsertUrl"></a>

```java
public java.lang.String getInsightsInsertUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#insights_insert_url NewrelicProvider#insights_insert_url}.

---

##### `insightsQueryUrl`<sup>Optional</sup> <a name="insightsQueryUrl" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.insightsQueryUrl"></a>

```java
public java.lang.String getInsightsQueryUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#insights_query_url NewrelicProvider#insights_query_url}.

---

##### `nerdgraphApiUrl`<sup>Optional</sup> <a name="nerdgraphApiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.nerdgraphApiUrl"></a>

```java
public java.lang.String getNerdgraphApiUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#nerdgraph_api_url NewrelicProvider#nerdgraph_api_url}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The data center for which your New Relic account is configured. Only one region per provider block is permitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#region NewrelicProvider#region}

---

##### `syntheticsApiUrl`<sup>Optional</sup> <a name="syntheticsApiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.syntheticsApiUrl"></a>

```java
public java.lang.String getSyntheticsApiUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs#synthetics_api_url NewrelicProvider#synthetics_api_url}.

---



