# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-newrelic.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NewrelicProvider <a name="NewrelicProvider" id="@cdktf/provider-newrelic.provider.NewrelicProvider"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs newrelic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-newrelic'

new provider.NewrelicProvider(scope: Construct, id: string, config: NewrelicProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig">NewrelicProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig">NewrelicProviderConfig</a>

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

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.provider.NewrelicProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.provider.NewrelicProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.provider.NewrelicProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.provider.NewrelicProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.provider.NewrelicProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.provider.NewrelicProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.provider.NewrelicProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.provider.NewrelicProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAdminApiKey` <a name="resetAdminApiKey" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetAdminApiKey"></a>

```typescript
public resetAdminApiKey(): void
```

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetApiUrl` <a name="resetApiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetApiUrl"></a>

```typescript
public resetApiUrl(): void
```

##### `resetCacertFile` <a name="resetCacertFile" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetCacertFile"></a>

```typescript
public resetCacertFile(): void
```

##### `resetInfrastructureApiUrl` <a name="resetInfrastructureApiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetInfrastructureApiUrl"></a>

```typescript
public resetInfrastructureApiUrl(): void
```

##### `resetInsecureSkipVerify` <a name="resetInsecureSkipVerify" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetInsecureSkipVerify"></a>

```typescript
public resetInsecureSkipVerify(): void
```

##### `resetInsightsInsertKey` <a name="resetInsightsInsertKey" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetInsightsInsertKey"></a>

```typescript
public resetInsightsInsertKey(): void
```

##### `resetInsightsInsertUrl` <a name="resetInsightsInsertUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetInsightsInsertUrl"></a>

```typescript
public resetInsightsInsertUrl(): void
```

##### `resetInsightsQueryUrl` <a name="resetInsightsQueryUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetInsightsQueryUrl"></a>

```typescript
public resetInsightsQueryUrl(): void
```

##### `resetNerdgraphApiUrl` <a name="resetNerdgraphApiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetNerdgraphApiUrl"></a>

```typescript
public resetNerdgraphApiUrl(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSyntheticsApiUrl` <a name="resetSyntheticsApiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetSyntheticsApiUrl"></a>

```typescript
public resetSyntheticsApiUrl(): void
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

```typescript
import { provider } from '@cdktf/provider-newrelic'

provider.NewrelicProvider.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.provider.NewrelicProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/provider-newrelic'

provider.NewrelicProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.provider.NewrelicProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-newrelic.provider.NewrelicProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/provider-newrelic'

provider.NewrelicProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.provider.NewrelicProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.provider.NewrelicProvider.generateConfigForImport"></a>

```typescript
import { provider } from '@cdktf/provider-newrelic'

provider.NewrelicProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NewrelicProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.provider.NewrelicProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.provider.NewrelicProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NewrelicProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.provider.NewrelicProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NewrelicProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.provider.NewrelicProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NewrelicProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.adminApiKeyInput">adminApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.apiKeyInput">apiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.apiUrlInput">apiUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.cacertFileInput">cacertFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.infrastructureApiUrlInput">infrastructureApiUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.insecureSkipVerifyInput">insecureSkipVerifyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsInsertKeyInput">insightsInsertKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsInsertUrlInput">insightsInsertUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsQueryUrlInput">insightsQueryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.nerdgraphApiUrlInput">nerdgraphApiUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.syntheticsApiUrlInput">syntheticsApiUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.adminApiKey">adminApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.apiUrl">apiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.cacertFile">cacertFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.infrastructureApiUrl">infrastructureApiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.insecureSkipVerify">insecureSkipVerify</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsInsertKey">insightsInsertKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsInsertUrl">insightsInsertUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsQueryUrl">insightsQueryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.nerdgraphApiUrl">nerdgraphApiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.syntheticsApiUrl">syntheticsApiUrl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `adminApiKeyInput`<sup>Optional</sup> <a name="adminApiKeyInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.adminApiKeyInput"></a>

```typescript
public readonly adminApiKeyInput: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.apiKeyInput"></a>

```typescript
public readonly apiKeyInput: string;
```

- *Type:* string

---

##### `apiUrlInput`<sup>Optional</sup> <a name="apiUrlInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.apiUrlInput"></a>

```typescript
public readonly apiUrlInput: string;
```

- *Type:* string

---

##### `cacertFileInput`<sup>Optional</sup> <a name="cacertFileInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.cacertFileInput"></a>

```typescript
public readonly cacertFileInput: string;
```

- *Type:* string

---

##### `infrastructureApiUrlInput`<sup>Optional</sup> <a name="infrastructureApiUrlInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.infrastructureApiUrlInput"></a>

```typescript
public readonly infrastructureApiUrlInput: string;
```

- *Type:* string

---

##### `insecureSkipVerifyInput`<sup>Optional</sup> <a name="insecureSkipVerifyInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.insecureSkipVerifyInput"></a>

```typescript
public readonly insecureSkipVerifyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `insightsInsertKeyInput`<sup>Optional</sup> <a name="insightsInsertKeyInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsInsertKeyInput"></a>

```typescript
public readonly insightsInsertKeyInput: string;
```

- *Type:* string

---

##### `insightsInsertUrlInput`<sup>Optional</sup> <a name="insightsInsertUrlInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsInsertUrlInput"></a>

```typescript
public readonly insightsInsertUrlInput: string;
```

- *Type:* string

---

##### `insightsQueryUrlInput`<sup>Optional</sup> <a name="insightsQueryUrlInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsQueryUrlInput"></a>

```typescript
public readonly insightsQueryUrlInput: string;
```

- *Type:* string

---

##### `nerdgraphApiUrlInput`<sup>Optional</sup> <a name="nerdgraphApiUrlInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.nerdgraphApiUrlInput"></a>

```typescript
public readonly nerdgraphApiUrlInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `syntheticsApiUrlInput`<sup>Optional</sup> <a name="syntheticsApiUrlInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.syntheticsApiUrlInput"></a>

```typescript
public readonly syntheticsApiUrlInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `adminApiKey`<sup>Optional</sup> <a name="adminApiKey" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.adminApiKey"></a>

```typescript
public readonly adminApiKey: string;
```

- *Type:* string

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `apiUrl`<sup>Optional</sup> <a name="apiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.apiUrl"></a>

```typescript
public readonly apiUrl: string;
```

- *Type:* string

---

##### `cacertFile`<sup>Optional</sup> <a name="cacertFile" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.cacertFile"></a>

```typescript
public readonly cacertFile: string;
```

- *Type:* string

---

##### `infrastructureApiUrl`<sup>Optional</sup> <a name="infrastructureApiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.infrastructureApiUrl"></a>

```typescript
public readonly infrastructureApiUrl: string;
```

- *Type:* string

---

##### `insecureSkipVerify`<sup>Optional</sup> <a name="insecureSkipVerify" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.insecureSkipVerify"></a>

```typescript
public readonly insecureSkipVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `insightsInsertKey`<sup>Optional</sup> <a name="insightsInsertKey" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsInsertKey"></a>

```typescript
public readonly insightsInsertKey: string;
```

- *Type:* string

---

##### `insightsInsertUrl`<sup>Optional</sup> <a name="insightsInsertUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsInsertUrl"></a>

```typescript
public readonly insightsInsertUrl: string;
```

- *Type:* string

---

##### `insightsQueryUrl`<sup>Optional</sup> <a name="insightsQueryUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsQueryUrl"></a>

```typescript
public readonly insightsQueryUrl: string;
```

- *Type:* string

---

##### `nerdgraphApiUrl`<sup>Optional</sup> <a name="nerdgraphApiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.nerdgraphApiUrl"></a>

```typescript
public readonly nerdgraphApiUrl: string;
```

- *Type:* string

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `syntheticsApiUrl`<sup>Optional</sup> <a name="syntheticsApiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.syntheticsApiUrl"></a>

```typescript
public readonly syntheticsApiUrl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NewrelicProviderConfig <a name="NewrelicProviderConfig" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-newrelic'

const newrelicProviderConfig: provider.NewrelicProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.accountId">accountId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs#account_id NewrelicProvider#account_id}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.apiKey">apiKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs#api_key NewrelicProvider#api_key}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.adminApiKey">adminApiKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs#admin_api_key NewrelicProvider#admin_api_key}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.apiUrl">apiUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs#api_url NewrelicProvider#api_url}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.cacertFile">cacertFile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs#cacert_file NewrelicProvider#cacert_file}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.infrastructureApiUrl">infrastructureApiUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs#infrastructure_api_url NewrelicProvider#infrastructure_api_url}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.insecureSkipVerify">insecureSkipVerify</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs#insecure_skip_verify NewrelicProvider#insecure_skip_verify}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.insightsInsertKey">insightsInsertKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs#insights_insert_key NewrelicProvider#insights_insert_key}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.insightsInsertUrl">insightsInsertUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs#insights_insert_url NewrelicProvider#insights_insert_url}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.insightsQueryUrl">insightsQueryUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs#insights_query_url NewrelicProvider#insights_query_url}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.nerdgraphApiUrl">nerdgraphApiUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs#nerdgraph_api_url NewrelicProvider#nerdgraph_api_url}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.region">region</a></code> | <code>string</code> | The data center for which your New Relic account is configured. Only one region per provider block is permitted. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.syntheticsApiUrl">syntheticsApiUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs#synthetics_api_url NewrelicProvider#synthetics_api_url}. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs#account_id NewrelicProvider#account_id}.

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs#api_key NewrelicProvider#api_key}.

---

##### `adminApiKey`<sup>Optional</sup> <a name="adminApiKey" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.adminApiKey"></a>

```typescript
public readonly adminApiKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs#admin_api_key NewrelicProvider#admin_api_key}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs#alias NewrelicProvider#alias}

---

##### `apiUrl`<sup>Optional</sup> <a name="apiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.apiUrl"></a>

```typescript
public readonly apiUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs#api_url NewrelicProvider#api_url}.

---

##### `cacertFile`<sup>Optional</sup> <a name="cacertFile" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.cacertFile"></a>

```typescript
public readonly cacertFile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs#cacert_file NewrelicProvider#cacert_file}.

---

##### `infrastructureApiUrl`<sup>Optional</sup> <a name="infrastructureApiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.infrastructureApiUrl"></a>

```typescript
public readonly infrastructureApiUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs#infrastructure_api_url NewrelicProvider#infrastructure_api_url}.

---

##### `insecureSkipVerify`<sup>Optional</sup> <a name="insecureSkipVerify" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.insecureSkipVerify"></a>

```typescript
public readonly insecureSkipVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs#insecure_skip_verify NewrelicProvider#insecure_skip_verify}.

---

##### `insightsInsertKey`<sup>Optional</sup> <a name="insightsInsertKey" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.insightsInsertKey"></a>

```typescript
public readonly insightsInsertKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs#insights_insert_key NewrelicProvider#insights_insert_key}.

---

##### `insightsInsertUrl`<sup>Optional</sup> <a name="insightsInsertUrl" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.insightsInsertUrl"></a>

```typescript
public readonly insightsInsertUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs#insights_insert_url NewrelicProvider#insights_insert_url}.

---

##### `insightsQueryUrl`<sup>Optional</sup> <a name="insightsQueryUrl" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.insightsQueryUrl"></a>

```typescript
public readonly insightsQueryUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs#insights_query_url NewrelicProvider#insights_query_url}.

---

##### `nerdgraphApiUrl`<sup>Optional</sup> <a name="nerdgraphApiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.nerdgraphApiUrl"></a>

```typescript
public readonly nerdgraphApiUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs#nerdgraph_api_url NewrelicProvider#nerdgraph_api_url}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The data center for which your New Relic account is configured. Only one region per provider block is permitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs#region NewrelicProvider#region}

---

##### `syntheticsApiUrl`<sup>Optional</sup> <a name="syntheticsApiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.syntheticsApiUrl"></a>

```typescript
public readonly syntheticsApiUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs#synthetics_api_url NewrelicProvider#synthetics_api_url}.

---



