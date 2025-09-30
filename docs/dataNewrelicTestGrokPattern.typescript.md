# `dataNewrelicTestGrokPattern` Submodule <a name="`dataNewrelicTestGrokPattern` Submodule" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicTestGrokPattern <a name="DataNewrelicTestGrokPattern" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.5/docs/data-sources/test_grok_pattern newrelic_test_grok_pattern}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer"></a>

```typescript
import { dataNewrelicTestGrokPattern } from '@cdktf/provider-newrelic'

new dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern(scope: Construct, id: string, config: DataNewrelicTestGrokPatternConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig">DataNewrelicTestGrokPatternConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig">DataNewrelicTestGrokPatternConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataNewrelicTestGrokPattern resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isConstruct"></a>

```typescript
import { dataNewrelicTestGrokPattern } from '@cdktf/provider-newrelic'

dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isTerraformElement"></a>

```typescript
import { dataNewrelicTestGrokPattern } from '@cdktf/provider-newrelic'

dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isTerraformDataSource"></a>

```typescript
import { dataNewrelicTestGrokPattern } from '@cdktf/provider-newrelic'

dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.generateConfigForImport"></a>

```typescript
import { dataNewrelicTestGrokPattern } from '@cdktf/provider-newrelic'

dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataNewrelicTestGrokPattern resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataNewrelicTestGrokPattern to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataNewrelicTestGrokPattern that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.5/docs/data-sources/test_grok_pattern#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataNewrelicTestGrokPattern to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.testGrok">testGrok</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList">DataNewrelicTestGrokPatternTestGrokList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.grokInput">grokInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.logLinesInput">logLinesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.grok">grok</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.logLines">logLines</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `testGrok`<sup>Required</sup> <a name="testGrok" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.testGrok"></a>

```typescript
public readonly testGrok: DataNewrelicTestGrokPatternTestGrokList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList">DataNewrelicTestGrokPatternTestGrokList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `grokInput`<sup>Optional</sup> <a name="grokInput" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.grokInput"></a>

```typescript
public readonly grokInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logLinesInput`<sup>Optional</sup> <a name="logLinesInput" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.logLinesInput"></a>

```typescript
public readonly logLinesInput: string[];
```

- *Type:* string[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `grok`<sup>Required</sup> <a name="grok" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.grok"></a>

```typescript
public readonly grok: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logLines`<sup>Required</sup> <a name="logLines" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.logLines"></a>

```typescript
public readonly logLines: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicTestGrokPatternConfig <a name="DataNewrelicTestGrokPatternConfig" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.Initializer"></a>

```typescript
import { dataNewrelicTestGrokPattern } from '@cdktf/provider-newrelic'

const dataNewrelicTestGrokPatternConfig: dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.grok">grok</a></code> | <code>string</code> | The Grok pattern to test. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.logLines">logLines</a></code> | <code>string[]</code> | The log lines to test the Grok pattern against. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.accountId">accountId</a></code> | <code>number</code> | The account id associated with the test grok. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.5/docs/data-sources/test_grok_pattern#id DataNewrelicTestGrokPattern#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `grok`<sup>Required</sup> <a name="grok" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.grok"></a>

```typescript
public readonly grok: string;
```

- *Type:* string

The Grok pattern to test.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.5/docs/data-sources/test_grok_pattern#grok DataNewrelicTestGrokPattern#grok}

---

##### `logLines`<sup>Required</sup> <a name="logLines" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.logLines"></a>

```typescript
public readonly logLines: string[];
```

- *Type:* string[]

The log lines to test the Grok pattern against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.5/docs/data-sources/test_grok_pattern#log_lines DataNewrelicTestGrokPattern#log_lines}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The account id associated with the test grok.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.5/docs/data-sources/test_grok_pattern#account_id DataNewrelicTestGrokPattern#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.5/docs/data-sources/test_grok_pattern#id DataNewrelicTestGrokPattern#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataNewrelicTestGrokPatternTestGrok <a name="DataNewrelicTestGrokPatternTestGrok" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrok"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrok.Initializer"></a>

```typescript
import { dataNewrelicTestGrokPattern } from '@cdktf/provider-newrelic'

const dataNewrelicTestGrokPatternTestGrok: dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrok = { ... }
```


### DataNewrelicTestGrokPatternTestGrokAttributes <a name="DataNewrelicTestGrokPatternTestGrokAttributes" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributes.Initializer"></a>

```typescript
import { dataNewrelicTestGrokPattern } from '@cdktf/provider-newrelic'

const dataNewrelicTestGrokPatternTestGrokAttributes: dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributes = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataNewrelicTestGrokPatternTestGrokAttributesList <a name="DataNewrelicTestGrokPatternTestGrokAttributesList" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.Initializer"></a>

```typescript
import { dataNewrelicTestGrokPattern } from '@cdktf/provider-newrelic'

new dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.get"></a>

```typescript
public get(index: number): DataNewrelicTestGrokPatternTestGrokAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataNewrelicTestGrokPatternTestGrokAttributesOutputReference <a name="DataNewrelicTestGrokPatternTestGrokAttributesOutputReference" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.Initializer"></a>

```typescript
import { dataNewrelicTestGrokPattern } from '@cdktf/provider-newrelic'

new dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributes">DataNewrelicTestGrokPatternTestGrokAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataNewrelicTestGrokPatternTestGrokAttributes;
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributes">DataNewrelicTestGrokPatternTestGrokAttributes</a>

---


### DataNewrelicTestGrokPatternTestGrokList <a name="DataNewrelicTestGrokPatternTestGrokList" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.Initializer"></a>

```typescript
import { dataNewrelicTestGrokPattern } from '@cdktf/provider-newrelic'

new dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.get"></a>

```typescript
public get(index: number): DataNewrelicTestGrokPatternTestGrokOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataNewrelicTestGrokPatternTestGrokOutputReference <a name="DataNewrelicTestGrokPatternTestGrokOutputReference" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.Initializer"></a>

```typescript
import { dataNewrelicTestGrokPattern } from '@cdktf/provider-newrelic'

new dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList">DataNewrelicTestGrokPatternTestGrokAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.logLine">logLine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.matched">matched</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrok">DataNewrelicTestGrokPatternTestGrok</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.attributes"></a>

```typescript
public readonly attributes: DataNewrelicTestGrokPatternTestGrokAttributesList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList">DataNewrelicTestGrokPatternTestGrokAttributesList</a>

---

##### `logLine`<sup>Required</sup> <a name="logLine" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.logLine"></a>

```typescript
public readonly logLine: string;
```

- *Type:* string

---

##### `matched`<sup>Required</sup> <a name="matched" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.matched"></a>

```typescript
public readonly matched: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataNewrelicTestGrokPatternTestGrok;
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrok">DataNewrelicTestGrokPatternTestGrok</a>

---



