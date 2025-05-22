# `dataNewrelicKeyTransaction` Submodule <a name="`dataNewrelicKeyTransaction` Submodule" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicKeyTransaction <a name="DataNewrelicKeyTransaction" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/data-sources/key_transaction newrelic_key_transaction}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.Initializer"></a>

```typescript
import { dataNewrelicKeyTransaction } from '@cdktf/provider-newrelic'

new dataNewrelicKeyTransaction.DataNewrelicKeyTransaction(scope: Construct, id: string, config: DataNewrelicKeyTransactionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig">DataNewrelicKeyTransactionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig">DataNewrelicKeyTransactionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.resetGuid">resetGuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetGuid` <a name="resetGuid" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.resetGuid"></a>

```typescript
public resetGuid(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataNewrelicKeyTransaction resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.isConstruct"></a>

```typescript
import { dataNewrelicKeyTransaction } from '@cdktf/provider-newrelic'

dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.isTerraformElement"></a>

```typescript
import { dataNewrelicKeyTransaction } from '@cdktf/provider-newrelic'

dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.isTerraformDataSource"></a>

```typescript
import { dataNewrelicKeyTransaction } from '@cdktf/provider-newrelic'

dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.generateConfigForImport"></a>

```typescript
import { dataNewrelicKeyTransaction } from '@cdktf/provider-newrelic'

dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataNewrelicKeyTransaction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataNewrelicKeyTransaction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataNewrelicKeyTransaction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/data-sources/key_transaction#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataNewrelicKeyTransaction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.guidInput">guidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.guid">guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `guidInput`<sup>Optional</sup> <a name="guidInput" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.guidInput"></a>

```typescript
public readonly guidInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicKeyTransactionConfig <a name="DataNewrelicKeyTransactionConfig" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.Initializer"></a>

```typescript
import { dataNewrelicKeyTransaction } from '@cdktf/provider-newrelic'

const dataNewrelicKeyTransactionConfig: dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.name">name</a></code> | <code>string</code> | The name of the key transaction in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.accountId">accountId</a></code> | <code>number</code> | The ID of the New Relic account the key transaction would need to belong to. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.guid">guid</a></code> | <code>string</code> | GUID of the key transaction in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/data-sources/key_transaction#id DataNewrelicKeyTransaction#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the key transaction in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/data-sources/key_transaction#name DataNewrelicKeyTransaction#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The ID of the New Relic account the key transaction would need to belong to.

Uses the account_id in the provider{} block by default, if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/data-sources/key_transaction#account_id DataNewrelicKeyTransaction#account_id}

---

##### `guid`<sup>Optional</sup> <a name="guid" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

GUID of the key transaction in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/data-sources/key_transaction#guid DataNewrelicKeyTransaction#guid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/data-sources/key_transaction#id DataNewrelicKeyTransaction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



