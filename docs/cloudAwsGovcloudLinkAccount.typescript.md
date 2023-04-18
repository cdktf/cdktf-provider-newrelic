# `newrelic_cloud_aws_govcloud_link_account`

Refer to the Terraform Registory for docs: [`newrelic_cloud_aws_govcloud_link_account`](https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_govcloud_link_account).

# `cloudAwsGovcloudLinkAccount` Submodule <a name="`cloudAwsGovcloudLinkAccount` Submodule" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudAwsGovcloudLinkAccount <a name="CloudAwsGovcloudLinkAccount" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_govcloud_link_account newrelic_cloud_aws_govcloud_link_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.Initializer"></a>

```typescript
import { cloudAwsGovcloudLinkAccount } from '@cdktf/provider-newrelic'

new cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount(scope: Construct, id: string, config: CloudAwsGovcloudLinkAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig">CloudAwsGovcloudLinkAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig">CloudAwsGovcloudLinkAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.resetMetricCollectionMode">resetMetricCollectionMode</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetricCollectionMode` <a name="resetMetricCollectionMode" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.resetMetricCollectionMode"></a>

```typescript
public resetMetricCollectionMode(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.isConstruct"></a>

```typescript
import { cloudAwsGovcloudLinkAccount } from '@cdktf/provider-newrelic'

cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.isTerraformElement"></a>

```typescript
import { cloudAwsGovcloudLinkAccount } from '@cdktf/provider-newrelic'

cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.isTerraformResource"></a>

```typescript
import { cloudAwsGovcloudLinkAccount } from '@cdktf/provider-newrelic'

cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.accessKeyIdInput">accessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.metricCollectionModeInput">metricCollectionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.secretAccessKeyInput">secretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.metricCollectionMode">metricCollectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.secretAccessKey">secretAccessKey</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessKeyIdInput`<sup>Optional</sup> <a name="accessKeyIdInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.accessKeyIdInput"></a>

```typescript
public readonly accessKeyIdInput: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.awsAccountIdInput"></a>

```typescript
public readonly awsAccountIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metricCollectionModeInput`<sup>Optional</sup> <a name="metricCollectionModeInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.metricCollectionModeInput"></a>

```typescript
public readonly metricCollectionModeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `secretAccessKeyInput`<sup>Optional</sup> <a name="secretAccessKeyInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.secretAccessKeyInput"></a>

```typescript
public readonly secretAccessKeyInput: string;
```

- *Type:* string

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metricCollectionMode`<sup>Required</sup> <a name="metricCollectionMode" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.metricCollectionMode"></a>

```typescript
public readonly metricCollectionMode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.secretAccessKey"></a>

```typescript
public readonly secretAccessKey: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudAwsGovcloudLinkAccountConfig <a name="CloudAwsGovcloudLinkAccountConfig" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.Initializer"></a>

```typescript
import { cloudAwsGovcloudLinkAccount } from '@cdktf/provider-newrelic'

const cloudAwsGovcloudLinkAccountConfig: cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | access-key-id of awsGovcloud account. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | awsGovcloud account id. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.name">name</a></code> | <code>string</code> | name of the account. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.secretAccessKey">secretAccessKey</a></code> | <code>string</code> | secret access key of the awsGovcloud account. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.accountId">accountId</a></code> | <code>number</code> | The ID of the account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_govcloud_link_account#id CloudAwsGovcloudLinkAccount#id}. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.metricCollectionMode">metricCollectionMode</a></code> | <code>string</code> | push or pull. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

access-key-id of awsGovcloud account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_govcloud_link_account#access_key_id CloudAwsGovcloudLinkAccount#access_key_id}

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

awsGovcloud account id.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_govcloud_link_account#aws_account_id CloudAwsGovcloudLinkAccount#aws_account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

name of the account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_govcloud_link_account#name CloudAwsGovcloudLinkAccount#name}

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.secretAccessKey"></a>

```typescript
public readonly secretAccessKey: string;
```

- *Type:* string

secret access key of the awsGovcloud account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_govcloud_link_account#secret_access_key CloudAwsGovcloudLinkAccount#secret_access_key}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The ID of the account in New Relic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_govcloud_link_account#account_id CloudAwsGovcloudLinkAccount#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_govcloud_link_account#id CloudAwsGovcloudLinkAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metricCollectionMode`<sup>Optional</sup> <a name="metricCollectionMode" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.metricCollectionMode"></a>

```typescript
public readonly metricCollectionMode: string;
```

- *Type:* string

push or pull.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_govcloud_link_account#metric_collection_mode CloudAwsGovcloudLinkAccount#metric_collection_mode}

---



