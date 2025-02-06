# `obfuscationRule` Submodule <a name="`obfuscationRule` Submodule" id="@cdktf/provider-newrelic.obfuscationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObfuscationRule <a name="ObfuscationRule" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/obfuscation_rule newrelic_obfuscation_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.Initializer"></a>

```typescript
import { obfuscationRule } from '@cdktf/provider-newrelic'

new obfuscationRule.ObfuscationRule(scope: Construct, id: string, config: ObfuscationRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleConfig">ObfuscationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleConfig">ObfuscationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAction` <a name="putAction" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.putAction"></a>

```typescript
public putAction(value: IResolvable | ObfuscationRuleAction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.putAction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleAction">ObfuscationRuleAction</a>[]

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ObfuscationRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.isConstruct"></a>

```typescript
import { obfuscationRule } from '@cdktf/provider-newrelic'

obfuscationRule.ObfuscationRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.isTerraformElement"></a>

```typescript
import { obfuscationRule } from '@cdktf/provider-newrelic'

obfuscationRule.ObfuscationRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.isTerraformResource"></a>

```typescript
import { obfuscationRule } from '@cdktf/provider-newrelic'

obfuscationRule.ObfuscationRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.generateConfigForImport"></a>

```typescript
import { obfuscationRule } from '@cdktf/provider-newrelic'

obfuscationRule.ObfuscationRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ObfuscationRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ObfuscationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ObfuscationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/obfuscation_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ObfuscationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.action">action</a></code> | <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionList">ObfuscationRuleActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.actionInput">actionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleAction">ObfuscationRuleAction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.action"></a>

```typescript
public readonly action: ObfuscationRuleActionList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionList">ObfuscationRuleActionList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.actionInput"></a>

```typescript
public readonly actionInput: IResolvable | ObfuscationRuleAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleAction">ObfuscationRuleAction</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObfuscationRuleAction <a name="ObfuscationRuleAction" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleAction.Initializer"></a>

```typescript
import { obfuscationRule } from '@cdktf/provider-newrelic'

const obfuscationRuleAction: obfuscationRule.ObfuscationRuleAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleAction.property.attribute">attribute</a></code> | <code>string[]</code> | Attribute names for action. An empty list applies the action to all the attributes. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleAction.property.expressionId">expressionId</a></code> | <code>string</code> | Expression Id for action. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleAction.property.method">method</a></code> | <code>string</code> | Obfuscation method to use. |

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleAction.property.attribute"></a>

```typescript
public readonly attribute: string[];
```

- *Type:* string[]

Attribute names for action. An empty list applies the action to all the attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/obfuscation_rule#attribute ObfuscationRule#attribute}

---

##### `expressionId`<sup>Required</sup> <a name="expressionId" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleAction.property.expressionId"></a>

```typescript
public readonly expressionId: string;
```

- *Type:* string

Expression Id for action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/obfuscation_rule#expression_id ObfuscationRule#expression_id}

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleAction.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Obfuscation method to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/obfuscation_rule#method ObfuscationRule#method}

---

### ObfuscationRuleConfig <a name="ObfuscationRuleConfig" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.Initializer"></a>

```typescript
import { obfuscationRule } from '@cdktf/provider-newrelic'

const obfuscationRuleConfig: obfuscationRule.ObfuscationRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.action">action</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleAction">ObfuscationRuleAction</a>[]</code> | action block. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the rule should be applied or not to incoming data. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.filter">filter</a></code> | <code>string</code> | NRQL for determining whether a given log record should have obfuscation actions applied. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.name">name</a></code> | <code>string</code> | Name of rule. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.accountId">accountId</a></code> | <code>number</code> | The account id associated with the obfuscation rule. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.description">description</a></code> | <code>string</code> | Description of rule. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/obfuscation_rule#id ObfuscationRule#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.action"></a>

```typescript
public readonly action: IResolvable | ObfuscationRuleAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleAction">ObfuscationRuleAction</a>[]

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/obfuscation_rule#action ObfuscationRule#action}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the rule should be applied or not to incoming data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/obfuscation_rule#enabled ObfuscationRule#enabled}

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

NRQL for determining whether a given log record should have obfuscation actions applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/obfuscation_rule#filter ObfuscationRule#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/obfuscation_rule#name ObfuscationRule#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The account id associated with the obfuscation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/obfuscation_rule#account_id ObfuscationRule#account_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/obfuscation_rule#description ObfuscationRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/obfuscation_rule#id ObfuscationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### ObfuscationRuleActionList <a name="ObfuscationRuleActionList" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.Initializer"></a>

```typescript
import { obfuscationRule } from '@cdktf/provider-newrelic'

new obfuscationRule.ObfuscationRuleActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.get"></a>

```typescript
public get(index: number): ObfuscationRuleActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleAction">ObfuscationRuleAction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObfuscationRuleAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleAction">ObfuscationRuleAction</a>[]

---


### ObfuscationRuleActionOutputReference <a name="ObfuscationRuleActionOutputReference" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.Initializer"></a>

```typescript
import { obfuscationRule } from '@cdktf/provider-newrelic'

new obfuscationRule.ObfuscationRuleActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.property.attributeInput">attributeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.property.expressionIdInput">expressionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.property.attribute">attribute</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.property.expressionId">expressionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleAction">ObfuscationRuleAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.property.attributeInput"></a>

```typescript
public readonly attributeInput: string[];
```

- *Type:* string[]

---

##### `expressionIdInput`<sup>Optional</sup> <a name="expressionIdInput" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.property.expressionIdInput"></a>

```typescript
public readonly expressionIdInput: string;
```

- *Type:* string

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string[];
```

- *Type:* string[]

---

##### `expressionId`<sup>Required</sup> <a name="expressionId" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.property.expressionId"></a>

```typescript
public readonly expressionId: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObfuscationRuleAction;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.obfuscationRule.ObfuscationRuleAction">ObfuscationRuleAction</a>

---



