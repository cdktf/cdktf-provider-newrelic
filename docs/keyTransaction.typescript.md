# `keyTransaction` Submodule <a name="`keyTransaction` Submodule" id="@cdktf/provider-newrelic.keyTransaction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyTransaction <a name="KeyTransaction" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/key_transaction newrelic_key_transaction}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer"></a>

```typescript
import { keyTransaction } from '@cdktf/provider-newrelic'

new keyTransaction.KeyTransaction(scope: Construct, id: string, config: KeyTransactionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig">KeyTransactionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig">KeyTransactionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KeyTransaction resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.isConstruct"></a>

```typescript
import { keyTransaction } from '@cdktf/provider-newrelic'

keyTransaction.KeyTransaction.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.isTerraformElement"></a>

```typescript
import { keyTransaction } from '@cdktf/provider-newrelic'

keyTransaction.KeyTransaction.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.isTerraformResource"></a>

```typescript
import { keyTransaction } from '@cdktf/provider-newrelic'

keyTransaction.KeyTransaction.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.generateConfigForImport"></a>

```typescript
import { keyTransaction } from '@cdktf/provider-newrelic'

keyTransaction.KeyTransaction.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a KeyTransaction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KeyTransaction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KeyTransaction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/key_transaction#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KeyTransaction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.apdexIndexInput">apdexIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.applicationGuidInput">applicationGuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.browserApdexTargetInput">browserApdexTargetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.apdexIndex">apdexIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.applicationGuid">applicationGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.browserApdexTarget">browserApdexTarget</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `apdexIndexInput`<sup>Optional</sup> <a name="apdexIndexInput" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.apdexIndexInput"></a>

```typescript
public readonly apdexIndexInput: number;
```

- *Type:* number

---

##### `applicationGuidInput`<sup>Optional</sup> <a name="applicationGuidInput" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.applicationGuidInput"></a>

```typescript
public readonly applicationGuidInput: string;
```

- *Type:* string

---

##### `browserApdexTargetInput`<sup>Optional</sup> <a name="browserApdexTargetInput" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.browserApdexTargetInput"></a>

```typescript
public readonly browserApdexTargetInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `apdexIndex`<sup>Required</sup> <a name="apdexIndex" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.apdexIndex"></a>

```typescript
public readonly apdexIndex: number;
```

- *Type:* number

---

##### `applicationGuid`<sup>Required</sup> <a name="applicationGuid" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.applicationGuid"></a>

```typescript
public readonly applicationGuid: string;
```

- *Type:* string

---

##### `browserApdexTarget`<sup>Required</sup> <a name="browserApdexTarget" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.browserApdexTarget"></a>

```typescript
public readonly browserApdexTarget: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KeyTransactionConfig <a name="KeyTransactionConfig" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.Initializer"></a>

```typescript
import { keyTransaction } from '@cdktf/provider-newrelic'

const keyTransactionConfig: keyTransaction.KeyTransactionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.apdexIndex">apdexIndex</a></code> | <code>number</code> | The acceptable amount of the time spent in the backend before customers get frustrated (Apdex target). |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.applicationGuid">applicationGuid</a></code> | <code>string</code> | The GUID of the application. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.browserApdexTarget">browserApdexTarget</a></code> | <code>number</code> | The acceptable amount of time for rendering a page in a browser before customers get frustrated (browser Apdex target). |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.metricName">metricName</a></code> | <code>string</code> | The name of the metric underlying this key transaction. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.name">name</a></code> | <code>string</code> | The name of the key transaction. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/key_transaction#id KeyTransaction#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apdexIndex`<sup>Required</sup> <a name="apdexIndex" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.apdexIndex"></a>

```typescript
public readonly apdexIndex: number;
```

- *Type:* number

The acceptable amount of the time spent in the backend before customers get frustrated (Apdex target).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/key_transaction#apdex_index KeyTransaction#apdex_index}

---

##### `applicationGuid`<sup>Required</sup> <a name="applicationGuid" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.applicationGuid"></a>

```typescript
public readonly applicationGuid: string;
```

- *Type:* string

The GUID of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/key_transaction#application_guid KeyTransaction#application_guid}

---

##### `browserApdexTarget`<sup>Required</sup> <a name="browserApdexTarget" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.browserApdexTarget"></a>

```typescript
public readonly browserApdexTarget: number;
```

- *Type:* number

The acceptable amount of time for rendering a page in a browser before customers get frustrated (browser Apdex target).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/key_transaction#browser_apdex_target KeyTransaction#browser_apdex_target}

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

The name of the metric underlying this key transaction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/key_transaction#metric_name KeyTransaction#metric_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the key transaction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/key_transaction#name KeyTransaction#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/key_transaction#id KeyTransaction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



