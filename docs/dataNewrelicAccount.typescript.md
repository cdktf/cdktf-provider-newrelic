# `dataNewrelicAccount` Submodule <a name="`dataNewrelicAccount` Submodule" id="@cdktf/provider-newrelic.dataNewrelicAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicAccount <a name="DataNewrelicAccount" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.2/docs/data-sources/account newrelic_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.Initializer"></a>

```typescript
import { dataNewrelicAccount } from '@cdktf/provider-newrelic'

new dataNewrelicAccount.DataNewrelicAccount(scope: Construct, id: string, config?: DataNewrelicAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccountConfig">DataNewrelicAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccountConfig">DataNewrelicAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.resetScope">resetScope</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.resetName"></a>

```typescript
public resetName(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.resetScope"></a>

```typescript
public resetScope(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataNewrelicAccount resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.isConstruct"></a>

```typescript
import { dataNewrelicAccount } from '@cdktf/provider-newrelic'

dataNewrelicAccount.DataNewrelicAccount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.isTerraformElement"></a>

```typescript
import { dataNewrelicAccount } from '@cdktf/provider-newrelic'

dataNewrelicAccount.DataNewrelicAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.isTerraformDataSource"></a>

```typescript
import { dataNewrelicAccount } from '@cdktf/provider-newrelic'

dataNewrelicAccount.DataNewrelicAccount.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.generateConfigForImport"></a>

```typescript
import { dataNewrelicAccount } from '@cdktf/provider-newrelic'

dataNewrelicAccount.DataNewrelicAccount.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataNewrelicAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataNewrelicAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataNewrelicAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.2/docs/data-sources/account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataNewrelicAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.scope">scope</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicAccountConfig <a name="DataNewrelicAccountConfig" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccountConfig.Initializer"></a>

```typescript
import { dataNewrelicAccount } from '@cdktf/provider-newrelic'

const dataNewrelicAccountConfig: dataNewrelicAccount.DataNewrelicAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccountConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccountConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccountConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccountConfig.property.accountId">accountId</a></code> | <code>number</code> | The ID of the account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.2/docs/data-sources/account#id DataNewrelicAccount#id}. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccountConfig.property.name">name</a></code> | <code>string</code> | The name of the account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccountConfig.property.scope">scope</a></code> | <code>string</code> | The scope of the account in New Relic.  Valid values are "global" and "in_region".  Defaults to "in_region". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccountConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The ID of the account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.2/docs/data-sources/account#account_id DataNewrelicAccount#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.2/docs/data-sources/account#id DataNewrelicAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccountConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.2/docs/data-sources/account#name DataNewrelicAccount#name}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-newrelic.dataNewrelicAccount.DataNewrelicAccountConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

The scope of the account in New Relic.  Valid values are "global" and "in_region".  Defaults to "in_region".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.2/docs/data-sources/account#scope DataNewrelicAccount#scope}

---



