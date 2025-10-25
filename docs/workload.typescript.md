# `workload` Submodule <a name="`workload` Submodule" id="@cdktf/provider-newrelic.workload"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Workload <a name="Workload" id="@cdktf/provider-newrelic.workload.Workload"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload newrelic_workload}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.Workload.Initializer"></a>

```typescript
import { workload } from '@cdktf/provider-newrelic'

new workload.Workload(scope: Construct, id: string, config: WorkloadConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig">WorkloadConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadConfig">WorkloadConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.putEntitySearchQuery">putEntitySearchQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.putStatusConfigAutomatic">putStatusConfigAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.putStatusConfigStatic">putStatusConfigStatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.resetEntityGuids">resetEntityGuids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.resetEntitySearchQuery">resetEntitySearchQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.resetScopeAccountIds">resetScopeAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.resetStatusConfigAutomatic">resetStatusConfigAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.resetStatusConfigStatic">resetStatusConfigStatic</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.workload.Workload.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.workload.Workload.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.workload.Workload.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workload.Workload.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.workload.Workload.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.workload.Workload.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.workload.Workload.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.workload.Workload.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.workload.Workload.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.workload.Workload.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.workload.Workload.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.workload.Workload.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.workload.Workload.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.Workload.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.workload.Workload.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.Workload.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.workload.Workload.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.Workload.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.workload.Workload.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.Workload.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.workload.Workload.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.Workload.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.workload.Workload.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.Workload.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.workload.Workload.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.Workload.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.workload.Workload.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.Workload.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.workload.Workload.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.Workload.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.workload.Workload.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.workload.Workload.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.workload.Workload.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.workload.Workload.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.workload.Workload.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.Workload.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.workload.Workload.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.workload.Workload.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.workload.Workload.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.workload.Workload.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.workload.Workload.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.workload.Workload.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.workload.Workload.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEntitySearchQuery` <a name="putEntitySearchQuery" id="@cdktf/provider-newrelic.workload.Workload.putEntitySearchQuery"></a>

```typescript
public putEntitySearchQuery(value: IResolvable | WorkloadEntitySearchQuery[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workload.Workload.putEntitySearchQuery.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery">WorkloadEntitySearchQuery</a>[]

---

##### `putStatusConfigAutomatic` <a name="putStatusConfigAutomatic" id="@cdktf/provider-newrelic.workload.Workload.putStatusConfigAutomatic"></a>

```typescript
public putStatusConfigAutomatic(value: WorkloadStatusConfigAutomatic): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workload.Workload.putStatusConfigAutomatic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic">WorkloadStatusConfigAutomatic</a>

---

##### `putStatusConfigStatic` <a name="putStatusConfigStatic" id="@cdktf/provider-newrelic.workload.Workload.putStatusConfigStatic"></a>

```typescript
public putStatusConfigStatic(value: WorkloadStatusConfigStatic): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workload.Workload.putStatusConfigStatic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic">WorkloadStatusConfigStatic</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.workload.Workload.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-newrelic.workload.Workload.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEntityGuids` <a name="resetEntityGuids" id="@cdktf/provider-newrelic.workload.Workload.resetEntityGuids"></a>

```typescript
public resetEntityGuids(): void
```

##### `resetEntitySearchQuery` <a name="resetEntitySearchQuery" id="@cdktf/provider-newrelic.workload.Workload.resetEntitySearchQuery"></a>

```typescript
public resetEntitySearchQuery(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.workload.Workload.resetId"></a>

```typescript
public resetId(): void
```

##### `resetScopeAccountIds` <a name="resetScopeAccountIds" id="@cdktf/provider-newrelic.workload.Workload.resetScopeAccountIds"></a>

```typescript
public resetScopeAccountIds(): void
```

##### `resetStatusConfigAutomatic` <a name="resetStatusConfigAutomatic" id="@cdktf/provider-newrelic.workload.Workload.resetStatusConfigAutomatic"></a>

```typescript
public resetStatusConfigAutomatic(): void
```

##### `resetStatusConfigStatic` <a name="resetStatusConfigStatic" id="@cdktf/provider-newrelic.workload.Workload.resetStatusConfigStatic"></a>

```typescript
public resetStatusConfigStatic(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Workload resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.workload.Workload.isConstruct"></a>

```typescript
import { workload } from '@cdktf/provider-newrelic'

workload.Workload.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.workload.Workload.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.workload.Workload.isTerraformElement"></a>

```typescript
import { workload } from '@cdktf/provider-newrelic'

workload.Workload.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.workload.Workload.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.workload.Workload.isTerraformResource"></a>

```typescript
import { workload } from '@cdktf/provider-newrelic'

workload.Workload.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.workload.Workload.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.workload.Workload.generateConfigForImport"></a>

```typescript
import { workload } from '@cdktf/provider-newrelic'

workload.Workload.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Workload resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.workload.Workload.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.workload.Workload.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Workload to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.workload.Workload.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Workload that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.workload.Workload.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Workload to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.compositeEntitySearchQuery">compositeEntitySearchQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.entitySearchQuery">entitySearchQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList">WorkloadEntitySearchQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.guid">guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.permalink">permalink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.statusConfigAutomatic">statusConfigAutomatic</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference">WorkloadStatusConfigAutomaticOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.statusConfigStatic">statusConfigStatic</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference">WorkloadStatusConfigStaticOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.workloadId">workloadId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.entityGuidsInput">entityGuidsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.entitySearchQueryInput">entitySearchQueryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery">WorkloadEntitySearchQuery</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.scopeAccountIdsInput">scopeAccountIdsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.statusConfigAutomaticInput">statusConfigAutomaticInput</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic">WorkloadStatusConfigAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.statusConfigStaticInput">statusConfigStaticInput</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic">WorkloadStatusConfigStatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.entityGuids">entityGuids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.scopeAccountIds">scopeAccountIds</a></code> | <code>number[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.workload.Workload.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.workload.Workload.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workload.Workload.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.workload.Workload.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.workload.Workload.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.workload.Workload.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.workload.Workload.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.workload.Workload.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.workload.Workload.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.workload.Workload.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.workload.Workload.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.workload.Workload.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.workload.Workload.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.workload.Workload.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compositeEntitySearchQuery`<sup>Required</sup> <a name="compositeEntitySearchQuery" id="@cdktf/provider-newrelic.workload.Workload.property.compositeEntitySearchQuery"></a>

```typescript
public readonly compositeEntitySearchQuery: string;
```

- *Type:* string

---

##### `entitySearchQuery`<sup>Required</sup> <a name="entitySearchQuery" id="@cdktf/provider-newrelic.workload.Workload.property.entitySearchQuery"></a>

```typescript
public readonly entitySearchQuery: WorkloadEntitySearchQueryList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList">WorkloadEntitySearchQueryList</a>

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.workload.Workload.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

---

##### `permalink`<sup>Required</sup> <a name="permalink" id="@cdktf/provider-newrelic.workload.Workload.property.permalink"></a>

```typescript
public readonly permalink: string;
```

- *Type:* string

---

##### `statusConfigAutomatic`<sup>Required</sup> <a name="statusConfigAutomatic" id="@cdktf/provider-newrelic.workload.Workload.property.statusConfigAutomatic"></a>

```typescript
public readonly statusConfigAutomatic: WorkloadStatusConfigAutomaticOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference">WorkloadStatusConfigAutomaticOutputReference</a>

---

##### `statusConfigStatic`<sup>Required</sup> <a name="statusConfigStatic" id="@cdktf/provider-newrelic.workload.Workload.property.statusConfigStatic"></a>

```typescript
public readonly statusConfigStatic: WorkloadStatusConfigStaticOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference">WorkloadStatusConfigStaticOutputReference</a>

---

##### `workloadId`<sup>Required</sup> <a name="workloadId" id="@cdktf/provider-newrelic.workload.Workload.property.workloadId"></a>

```typescript
public readonly workloadId: number;
```

- *Type:* number

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.workload.Workload.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-newrelic.workload.Workload.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `entityGuidsInput`<sup>Optional</sup> <a name="entityGuidsInput" id="@cdktf/provider-newrelic.workload.Workload.property.entityGuidsInput"></a>

```typescript
public readonly entityGuidsInput: string[];
```

- *Type:* string[]

---

##### `entitySearchQueryInput`<sup>Optional</sup> <a name="entitySearchQueryInput" id="@cdktf/provider-newrelic.workload.Workload.property.entitySearchQueryInput"></a>

```typescript
public readonly entitySearchQueryInput: IResolvable | WorkloadEntitySearchQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery">WorkloadEntitySearchQuery</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.workload.Workload.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.workload.Workload.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scopeAccountIdsInput`<sup>Optional</sup> <a name="scopeAccountIdsInput" id="@cdktf/provider-newrelic.workload.Workload.property.scopeAccountIdsInput"></a>

```typescript
public readonly scopeAccountIdsInput: number[];
```

- *Type:* number[]

---

##### `statusConfigAutomaticInput`<sup>Optional</sup> <a name="statusConfigAutomaticInput" id="@cdktf/provider-newrelic.workload.Workload.property.statusConfigAutomaticInput"></a>

```typescript
public readonly statusConfigAutomaticInput: WorkloadStatusConfigAutomatic;
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic">WorkloadStatusConfigAutomatic</a>

---

##### `statusConfigStaticInput`<sup>Optional</sup> <a name="statusConfigStaticInput" id="@cdktf/provider-newrelic.workload.Workload.property.statusConfigStaticInput"></a>

```typescript
public readonly statusConfigStaticInput: WorkloadStatusConfigStatic;
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic">WorkloadStatusConfigStatic</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.workload.Workload.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-newrelic.workload.Workload.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `entityGuids`<sup>Required</sup> <a name="entityGuids" id="@cdktf/provider-newrelic.workload.Workload.property.entityGuids"></a>

```typescript
public readonly entityGuids: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.workload.Workload.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.workload.Workload.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scopeAccountIds`<sup>Required</sup> <a name="scopeAccountIds" id="@cdktf/provider-newrelic.workload.Workload.property.scopeAccountIds"></a>

```typescript
public readonly scopeAccountIds: number[];
```

- *Type:* number[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.workload.Workload.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkloadConfig <a name="WorkloadConfig" id="@cdktf/provider-newrelic.workload.WorkloadConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workload.WorkloadConfig.Initializer"></a>

```typescript
import { workload } from '@cdktf/provider-newrelic'

const workloadConfig: workload.WorkloadConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.name">name</a></code> | <code>string</code> | The workload's name. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.accountId">accountId</a></code> | <code>number</code> | The New Relic account ID where you want to create the workload. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.description">description</a></code> | <code>string</code> | Relevant information about the workload. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.entityGuids">entityGuids</a></code> | <code>string[]</code> | A list of entity GUIDs manually assigned to this workload. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.entitySearchQuery">entitySearchQuery</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery">WorkloadEntitySearchQuery</a>[]</code> | entity_search_query block. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#id Workload#id}. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.scopeAccountIds">scopeAccountIds</a></code> | <code>number[]</code> | A list of account IDs that will be used to get entities from. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.statusConfigAutomatic">statusConfigAutomatic</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic">WorkloadStatusConfigAutomatic</a></code> | status_config_automatic block. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.statusConfigStatic">statusConfigStatic</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic">WorkloadStatusConfigStatic</a></code> | status_config_static block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The workload's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#name Workload#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The New Relic account ID where you want to create the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#account_id Workload#account_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Relevant information about the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#description Workload#description}

---

##### `entityGuids`<sup>Optional</sup> <a name="entityGuids" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.entityGuids"></a>

```typescript
public readonly entityGuids: string[];
```

- *Type:* string[]

A list of entity GUIDs manually assigned to this workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#entity_guids Workload#entity_guids}

---

##### `entitySearchQuery`<sup>Optional</sup> <a name="entitySearchQuery" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.entitySearchQuery"></a>

```typescript
public readonly entitySearchQuery: IResolvable | WorkloadEntitySearchQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery">WorkloadEntitySearchQuery</a>[]

entity_search_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#entity_search_query Workload#entity_search_query}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#id Workload#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scopeAccountIds`<sup>Optional</sup> <a name="scopeAccountIds" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.scopeAccountIds"></a>

```typescript
public readonly scopeAccountIds: number[];
```

- *Type:* number[]

A list of account IDs that will be used to get entities from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#scope_account_ids Workload#scope_account_ids}

---

##### `statusConfigAutomatic`<sup>Optional</sup> <a name="statusConfigAutomatic" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.statusConfigAutomatic"></a>

```typescript
public readonly statusConfigAutomatic: WorkloadStatusConfigAutomatic;
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic">WorkloadStatusConfigAutomatic</a>

status_config_automatic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#status_config_automatic Workload#status_config_automatic}

---

##### `statusConfigStatic`<sup>Optional</sup> <a name="statusConfigStatic" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.statusConfigStatic"></a>

```typescript
public readonly statusConfigStatic: WorkloadStatusConfigStatic;
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic">WorkloadStatusConfigStatic</a>

status_config_static block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#status_config_static Workload#status_config_static}

---

### WorkloadEntitySearchQuery <a name="WorkloadEntitySearchQuery" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery.Initializer"></a>

```typescript
import { workload } from '@cdktf/provider-newrelic'

const workloadEntitySearchQuery: workload.WorkloadEntitySearchQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery.property.query">query</a></code> | <code>string</code> | A valid entity search query; empty, and null values are considered invalid. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

A valid entity search query; empty, and null values are considered invalid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#query Workload#query}

---

### WorkloadStatusConfigAutomatic <a name="WorkloadStatusConfigAutomatic" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic.Initializer"></a>

```typescript
import { workload } from '@cdktf/provider-newrelic'

const workloadStatusConfigAutomatic: workload.WorkloadStatusConfigAutomatic = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the automatic status configuration is enabled or not. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic.property.remainingEntitiesRule">remainingEntitiesRule</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule">WorkloadStatusConfigAutomaticRemainingEntitiesRule</a></code> | remaining_entities_rule block. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic.property.rule">rule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule">WorkloadStatusConfigAutomaticRule</a>[]</code> | rule block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the automatic status configuration is enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#enabled Workload#enabled}

---

##### `remainingEntitiesRule`<sup>Optional</sup> <a name="remainingEntitiesRule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic.property.remainingEntitiesRule"></a>

```typescript
public readonly remainingEntitiesRule: WorkloadStatusConfigAutomaticRemainingEntitiesRule;
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule">WorkloadStatusConfigAutomaticRemainingEntitiesRule</a>

remaining_entities_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#remaining_entities_rule Workload#remaining_entities_rule}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic.property.rule"></a>

```typescript
public readonly rule: IResolvable | WorkloadStatusConfigAutomaticRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule">WorkloadStatusConfigAutomaticRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#rule Workload#rule}

---

### WorkloadStatusConfigAutomaticRemainingEntitiesRule <a name="WorkloadStatusConfigAutomaticRemainingEntitiesRule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule.Initializer"></a>

```typescript
import { workload } from '@cdktf/provider-newrelic'

const workloadStatusConfigAutomaticRemainingEntitiesRule: workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule.property.remainingEntitiesRuleRollup">remainingEntitiesRuleRollup</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup">WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup</a></code> | remaining_entities_rule_rollup block. |

---

##### `remainingEntitiesRuleRollup`<sup>Required</sup> <a name="remainingEntitiesRuleRollup" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule.property.remainingEntitiesRuleRollup"></a>

```typescript
public readonly remainingEntitiesRuleRollup: WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup;
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup">WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup</a>

remaining_entities_rule_rollup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#remaining_entities_rule_rollup Workload#remaining_entities_rule_rollup}

---

### WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup <a name="WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.Initializer"></a>

```typescript
import { workload } from '@cdktf/provider-newrelic'

const workloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup: workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.property.groupBy">groupBy</a></code> | <code>string</code> | The grouping to be applied to the remaining entities. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.property.strategy">strategy</a></code> | <code>string</code> | The rollup strategy that is applied to a group of entities. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.property.thresholdType">thresholdType</a></code> | <code>string</code> | Type of threshold defined for the rule. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.property.thresholdValue">thresholdValue</a></code> | <code>number</code> | Threshold value defined for the rule. |

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.property.groupBy"></a>

```typescript
public readonly groupBy: string;
```

- *Type:* string

The grouping to be applied to the remaining entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#group_by Workload#group_by}

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

The rollup strategy that is applied to a group of entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#strategy Workload#strategy}

---

##### `thresholdType`<sup>Optional</sup> <a name="thresholdType" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.property.thresholdType"></a>

```typescript
public readonly thresholdType: string;
```

- *Type:* string

Type of threshold defined for the rule.

This is an optional field that only applies when strategy is WORST_STATUS_WINS. Use a threshold to roll up the worst status only after a certain amount of entities are not operational.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#threshold_type Workload#threshold_type}

---

##### `thresholdValue`<sup>Optional</sup> <a name="thresholdValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.property.thresholdValue"></a>

```typescript
public readonly thresholdValue: number;
```

- *Type:* number

Threshold value defined for the rule.

This optional field is used in combination with thresholdType. If the threshold type is null, the threshold value will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#threshold_value Workload#threshold_value}

---

### WorkloadStatusConfigAutomaticRule <a name="WorkloadStatusConfigAutomaticRule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule.Initializer"></a>

```typescript
import { workload } from '@cdktf/provider-newrelic'

const workloadStatusConfigAutomaticRule: workload.WorkloadStatusConfigAutomaticRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule.property.rollup">rollup</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup">WorkloadStatusConfigAutomaticRuleRollup</a></code> | rollup block. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule.property.entityGuids">entityGuids</a></code> | <code>string[]</code> | A list of entity GUIDs composing the rule. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule.property.nrqlQuery">nrqlQuery</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery">WorkloadStatusConfigAutomaticRuleNrqlQuery</a>[]</code> | nrql_query block. |

---

##### `rollup`<sup>Required</sup> <a name="rollup" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule.property.rollup"></a>

```typescript
public readonly rollup: WorkloadStatusConfigAutomaticRuleRollup;
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup">WorkloadStatusConfigAutomaticRuleRollup</a>

rollup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#rollup Workload#rollup}

---

##### `entityGuids`<sup>Optional</sup> <a name="entityGuids" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule.property.entityGuids"></a>

```typescript
public readonly entityGuids: string[];
```

- *Type:* string[]

A list of entity GUIDs composing the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#entity_guids Workload#entity_guids}

---

##### `nrqlQuery`<sup>Optional</sup> <a name="nrqlQuery" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: IResolvable | WorkloadStatusConfigAutomaticRuleNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery">WorkloadStatusConfigAutomaticRuleNrqlQuery</a>[]

nrql_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#nrql_query Workload#nrql_query}

---

### WorkloadStatusConfigAutomaticRuleNrqlQuery <a name="WorkloadStatusConfigAutomaticRuleNrqlQuery" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery.Initializer"></a>

```typescript
import { workload } from '@cdktf/provider-newrelic'

const workloadStatusConfigAutomaticRuleNrqlQuery: workload.WorkloadStatusConfigAutomaticRuleNrqlQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery.property.query">query</a></code> | <code>string</code> | The entity search query that is used to perform the search of a group of entities. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The entity search query that is used to perform the search of a group of entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#query Workload#query}

---

### WorkloadStatusConfigAutomaticRuleRollup <a name="WorkloadStatusConfigAutomaticRuleRollup" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup.Initializer"></a>

```typescript
import { workload } from '@cdktf/provider-newrelic'

const workloadStatusConfigAutomaticRuleRollup: workload.WorkloadStatusConfigAutomaticRuleRollup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup.property.strategy">strategy</a></code> | <code>string</code> | The rollup strategy that is applied to a group of entities. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup.property.thresholdType">thresholdType</a></code> | <code>string</code> | Type of threshold defined for the rule. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup.property.thresholdValue">thresholdValue</a></code> | <code>number</code> | Threshold value defined for the rule. |

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

The rollup strategy that is applied to a group of entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#strategy Workload#strategy}

---

##### `thresholdType`<sup>Optional</sup> <a name="thresholdType" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup.property.thresholdType"></a>

```typescript
public readonly thresholdType: string;
```

- *Type:* string

Type of threshold defined for the rule.

This is an optional field that only applies when strategy is WORST_STATUS_WINS. Use a threshold to roll up the worst status only after a certain amount of entities are not operational.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#threshold_type Workload#threshold_type}

---

##### `thresholdValue`<sup>Optional</sup> <a name="thresholdValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup.property.thresholdValue"></a>

```typescript
public readonly thresholdValue: number;
```

- *Type:* number

Threshold value defined for the rule.

This optional field is used in combination with thresholdType. If the threshold type is null, the threshold value will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#threshold_value Workload#threshold_value}

---

### WorkloadStatusConfigStatic <a name="WorkloadStatusConfigStatic" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic.Initializer"></a>

```typescript
import { workload } from '@cdktf/provider-newrelic'

const workloadStatusConfigStatic: workload.WorkloadStatusConfigStatic = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the static status configuration is enabled or not. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic.property.status">status</a></code> | <code>string</code> | The status of the workload. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic.property.description">description</a></code> | <code>string</code> | A description that provides additional details about the status of the workload. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic.property.summary">summary</a></code> | <code>string</code> | A short description of the status of the workload. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the static status configuration is enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#enabled Workload#enabled}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status of the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#status Workload#status}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description that provides additional details about the status of the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#description Workload#description}

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

A short description of the status of the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#summary Workload#summary}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkloadEntitySearchQueryList <a name="WorkloadEntitySearchQueryList" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.Initializer"></a>

```typescript
import { workload } from '@cdktf/provider-newrelic'

new workload.WorkloadEntitySearchQueryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.get"></a>

```typescript
public get(index: number): WorkloadEntitySearchQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery">WorkloadEntitySearchQuery</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkloadEntitySearchQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery">WorkloadEntitySearchQuery</a>[]

---


### WorkloadEntitySearchQueryOutputReference <a name="WorkloadEntitySearchQueryOutputReference" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.Initializer"></a>

```typescript
import { workload } from '@cdktf/provider-newrelic'

new workload.WorkloadEntitySearchQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery">WorkloadEntitySearchQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkloadEntitySearchQuery;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery">WorkloadEntitySearchQuery</a>

---


### WorkloadStatusConfigAutomaticOutputReference <a name="WorkloadStatusConfigAutomaticOutputReference" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.Initializer"></a>

```typescript
import { workload } from '@cdktf/provider-newrelic'

new workload.WorkloadStatusConfigAutomaticOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.putRemainingEntitiesRule">putRemainingEntitiesRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.resetRemainingEntitiesRule">resetRemainingEntitiesRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.resetRule">resetRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRemainingEntitiesRule` <a name="putRemainingEntitiesRule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.putRemainingEntitiesRule"></a>

```typescript
public putRemainingEntitiesRule(value: WorkloadStatusConfigAutomaticRemainingEntitiesRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.putRemainingEntitiesRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule">WorkloadStatusConfigAutomaticRemainingEntitiesRule</a>

---

##### `putRule` <a name="putRule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.putRule"></a>

```typescript
public putRule(value: IResolvable | WorkloadStatusConfigAutomaticRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule">WorkloadStatusConfigAutomaticRule</a>[]

---

##### `resetRemainingEntitiesRule` <a name="resetRemainingEntitiesRule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.resetRemainingEntitiesRule"></a>

```typescript
public resetRemainingEntitiesRule(): void
```

##### `resetRule` <a name="resetRule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.resetRule"></a>

```typescript
public resetRule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.remainingEntitiesRule">remainingEntitiesRule</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference">WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList">WorkloadStatusConfigAutomaticRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.remainingEntitiesRuleInput">remainingEntitiesRuleInput</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule">WorkloadStatusConfigAutomaticRemainingEntitiesRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.ruleInput">ruleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule">WorkloadStatusConfigAutomaticRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic">WorkloadStatusConfigAutomatic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `remainingEntitiesRule`<sup>Required</sup> <a name="remainingEntitiesRule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.remainingEntitiesRule"></a>

```typescript
public readonly remainingEntitiesRule: WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference">WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.rule"></a>

```typescript
public readonly rule: WorkloadStatusConfigAutomaticRuleList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList">WorkloadStatusConfigAutomaticRuleList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `remainingEntitiesRuleInput`<sup>Optional</sup> <a name="remainingEntitiesRuleInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.remainingEntitiesRuleInput"></a>

```typescript
public readonly remainingEntitiesRuleInput: WorkloadStatusConfigAutomaticRemainingEntitiesRule;
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule">WorkloadStatusConfigAutomaticRemainingEntitiesRule</a>

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | WorkloadStatusConfigAutomaticRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule">WorkloadStatusConfigAutomaticRule</a>[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkloadStatusConfigAutomatic;
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic">WorkloadStatusConfigAutomatic</a>

---


### WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference <a name="WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.Initializer"></a>

```typescript
import { workload } from '@cdktf/provider-newrelic'

new workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.putRemainingEntitiesRuleRollup">putRemainingEntitiesRuleRollup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRemainingEntitiesRuleRollup` <a name="putRemainingEntitiesRuleRollup" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.putRemainingEntitiesRuleRollup"></a>

```typescript
public putRemainingEntitiesRuleRollup(value: WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.putRemainingEntitiesRuleRollup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup">WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.remainingEntitiesRuleRollup">remainingEntitiesRuleRollup</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference">WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.remainingEntitiesRuleRollupInput">remainingEntitiesRuleRollupInput</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup">WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule">WorkloadStatusConfigAutomaticRemainingEntitiesRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `remainingEntitiesRuleRollup`<sup>Required</sup> <a name="remainingEntitiesRuleRollup" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.remainingEntitiesRuleRollup"></a>

```typescript
public readonly remainingEntitiesRuleRollup: WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference">WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference</a>

---

##### `remainingEntitiesRuleRollupInput`<sup>Optional</sup> <a name="remainingEntitiesRuleRollupInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.remainingEntitiesRuleRollupInput"></a>

```typescript
public readonly remainingEntitiesRuleRollupInput: WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup;
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup">WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkloadStatusConfigAutomaticRemainingEntitiesRule;
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule">WorkloadStatusConfigAutomaticRemainingEntitiesRule</a>

---


### WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference <a name="WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.Initializer"></a>

```typescript
import { workload } from '@cdktf/provider-newrelic'

new workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.resetThresholdType">resetThresholdType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.resetThresholdValue">resetThresholdValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetThresholdType` <a name="resetThresholdType" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.resetThresholdType"></a>

```typescript
public resetThresholdType(): void
```

##### `resetThresholdValue` <a name="resetThresholdValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.resetThresholdValue"></a>

```typescript
public resetThresholdValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.groupByInput">groupByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.strategyInput">strategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.thresholdTypeInput">thresholdTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.thresholdValueInput">thresholdValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.groupBy">groupBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.strategy">strategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.thresholdType">thresholdType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.thresholdValue">thresholdValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup">WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.groupByInput"></a>

```typescript
public readonly groupByInput: string;
```

- *Type:* string

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.strategyInput"></a>

```typescript
public readonly strategyInput: string;
```

- *Type:* string

---

##### `thresholdTypeInput`<sup>Optional</sup> <a name="thresholdTypeInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.thresholdTypeInput"></a>

```typescript
public readonly thresholdTypeInput: string;
```

- *Type:* string

---

##### `thresholdValueInput`<sup>Optional</sup> <a name="thresholdValueInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.thresholdValueInput"></a>

```typescript
public readonly thresholdValueInput: number;
```

- *Type:* number

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.groupBy"></a>

```typescript
public readonly groupBy: string;
```

- *Type:* string

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

---

##### `thresholdType`<sup>Required</sup> <a name="thresholdType" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.thresholdType"></a>

```typescript
public readonly thresholdType: string;
```

- *Type:* string

---

##### `thresholdValue`<sup>Required</sup> <a name="thresholdValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.thresholdValue"></a>

```typescript
public readonly thresholdValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup;
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup">WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup</a>

---


### WorkloadStatusConfigAutomaticRuleList <a name="WorkloadStatusConfigAutomaticRuleList" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.Initializer"></a>

```typescript
import { workload } from '@cdktf/provider-newrelic'

new workload.WorkloadStatusConfigAutomaticRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.get"></a>

```typescript
public get(index: number): WorkloadStatusConfigAutomaticRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule">WorkloadStatusConfigAutomaticRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkloadStatusConfigAutomaticRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule">WorkloadStatusConfigAutomaticRule</a>[]

---


### WorkloadStatusConfigAutomaticRuleNrqlQueryList <a name="WorkloadStatusConfigAutomaticRuleNrqlQueryList" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.Initializer"></a>

```typescript
import { workload } from '@cdktf/provider-newrelic'

new workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.get"></a>

```typescript
public get(index: number): WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery">WorkloadStatusConfigAutomaticRuleNrqlQuery</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkloadStatusConfigAutomaticRuleNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery">WorkloadStatusConfigAutomaticRuleNrqlQuery</a>[]

---


### WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference <a name="WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.Initializer"></a>

```typescript
import { workload } from '@cdktf/provider-newrelic'

new workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery">WorkloadStatusConfigAutomaticRuleNrqlQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkloadStatusConfigAutomaticRuleNrqlQuery;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery">WorkloadStatusConfigAutomaticRuleNrqlQuery</a>

---


### WorkloadStatusConfigAutomaticRuleOutputReference <a name="WorkloadStatusConfigAutomaticRuleOutputReference" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.Initializer"></a>

```typescript
import { workload } from '@cdktf/provider-newrelic'

new workload.WorkloadStatusConfigAutomaticRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.putNrqlQuery">putNrqlQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.putRollup">putRollup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.resetEntityGuids">resetEntityGuids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.resetNrqlQuery">resetNrqlQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNrqlQuery` <a name="putNrqlQuery" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.putNrqlQuery"></a>

```typescript
public putNrqlQuery(value: IResolvable | WorkloadStatusConfigAutomaticRuleNrqlQuery[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery">WorkloadStatusConfigAutomaticRuleNrqlQuery</a>[]

---

##### `putRollup` <a name="putRollup" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.putRollup"></a>

```typescript
public putRollup(value: WorkloadStatusConfigAutomaticRuleRollup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.putRollup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup">WorkloadStatusConfigAutomaticRuleRollup</a>

---

##### `resetEntityGuids` <a name="resetEntityGuids" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.resetEntityGuids"></a>

```typescript
public resetEntityGuids(): void
```

##### `resetNrqlQuery` <a name="resetNrqlQuery" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.resetNrqlQuery"></a>

```typescript
public resetNrqlQuery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.nrqlQuery">nrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList">WorkloadStatusConfigAutomaticRuleNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.rollup">rollup</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference">WorkloadStatusConfigAutomaticRuleRollupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.entityGuidsInput">entityGuidsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.nrqlQueryInput">nrqlQueryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery">WorkloadStatusConfigAutomaticRuleNrqlQuery</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.rollupInput">rollupInput</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup">WorkloadStatusConfigAutomaticRuleRollup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.entityGuids">entityGuids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule">WorkloadStatusConfigAutomaticRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nrqlQuery`<sup>Required</sup> <a name="nrqlQuery" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: WorkloadStatusConfigAutomaticRuleNrqlQueryList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList">WorkloadStatusConfigAutomaticRuleNrqlQueryList</a>

---

##### `rollup`<sup>Required</sup> <a name="rollup" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.rollup"></a>

```typescript
public readonly rollup: WorkloadStatusConfigAutomaticRuleRollupOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference">WorkloadStatusConfigAutomaticRuleRollupOutputReference</a>

---

##### `entityGuidsInput`<sup>Optional</sup> <a name="entityGuidsInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.entityGuidsInput"></a>

```typescript
public readonly entityGuidsInput: string[];
```

- *Type:* string[]

---

##### `nrqlQueryInput`<sup>Optional</sup> <a name="nrqlQueryInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.nrqlQueryInput"></a>

```typescript
public readonly nrqlQueryInput: IResolvable | WorkloadStatusConfigAutomaticRuleNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery">WorkloadStatusConfigAutomaticRuleNrqlQuery</a>[]

---

##### `rollupInput`<sup>Optional</sup> <a name="rollupInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.rollupInput"></a>

```typescript
public readonly rollupInput: WorkloadStatusConfigAutomaticRuleRollup;
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup">WorkloadStatusConfigAutomaticRuleRollup</a>

---

##### `entityGuids`<sup>Required</sup> <a name="entityGuids" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.entityGuids"></a>

```typescript
public readonly entityGuids: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkloadStatusConfigAutomaticRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule">WorkloadStatusConfigAutomaticRule</a>

---


### WorkloadStatusConfigAutomaticRuleRollupOutputReference <a name="WorkloadStatusConfigAutomaticRuleRollupOutputReference" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.Initializer"></a>

```typescript
import { workload } from '@cdktf/provider-newrelic'

new workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.resetThresholdType">resetThresholdType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.resetThresholdValue">resetThresholdValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetThresholdType` <a name="resetThresholdType" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.resetThresholdType"></a>

```typescript
public resetThresholdType(): void
```

##### `resetThresholdValue` <a name="resetThresholdValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.resetThresholdValue"></a>

```typescript
public resetThresholdValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.strategyInput">strategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.thresholdTypeInput">thresholdTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.thresholdValueInput">thresholdValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.strategy">strategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.thresholdType">thresholdType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.thresholdValue">thresholdValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup">WorkloadStatusConfigAutomaticRuleRollup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.strategyInput"></a>

```typescript
public readonly strategyInput: string;
```

- *Type:* string

---

##### `thresholdTypeInput`<sup>Optional</sup> <a name="thresholdTypeInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.thresholdTypeInput"></a>

```typescript
public readonly thresholdTypeInput: string;
```

- *Type:* string

---

##### `thresholdValueInput`<sup>Optional</sup> <a name="thresholdValueInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.thresholdValueInput"></a>

```typescript
public readonly thresholdValueInput: number;
```

- *Type:* number

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

---

##### `thresholdType`<sup>Required</sup> <a name="thresholdType" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.thresholdType"></a>

```typescript
public readonly thresholdType: string;
```

- *Type:* string

---

##### `thresholdValue`<sup>Required</sup> <a name="thresholdValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.thresholdValue"></a>

```typescript
public readonly thresholdValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkloadStatusConfigAutomaticRuleRollup;
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup">WorkloadStatusConfigAutomaticRuleRollup</a>

---


### WorkloadStatusConfigStaticOutputReference <a name="WorkloadStatusConfigStaticOutputReference" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.Initializer"></a>

```typescript
import { workload } from '@cdktf/provider-newrelic'

new workload.WorkloadStatusConfigStaticOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.resetSummary">resetSummary</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetSummary` <a name="resetSummary" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.resetSummary"></a>

```typescript
public resetSummary(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.summaryInput">summaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.summary">summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic">WorkloadStatusConfigStatic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `summaryInput`<sup>Optional</sup> <a name="summaryInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.summaryInput"></a>

```typescript
public readonly summaryInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkloadStatusConfigStatic;
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic">WorkloadStatusConfigStatic</a>

---



