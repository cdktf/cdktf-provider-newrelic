# `oneDashboardRaw` Submodule <a name="`oneDashboardRaw` Submodule" id="@cdktf/provider-newrelic.oneDashboardRaw"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OneDashboardRaw <a name="OneDashboardRaw" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.64.0/docs/resources/one_dashboard_raw newrelic_one_dashboard_raw}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer"></a>

```typescript
import { oneDashboardRaw } from '@cdktf/provider-newrelic'

new oneDashboardRaw.OneDashboardRaw(scope: Construct, id: string, config: OneDashboardRawConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig">OneDashboardRawConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig">OneDashboardRawConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.putPage">putPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetPermissions">resetPermissions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPage` <a name="putPage" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.putPage"></a>

```typescript
public putPage(value: IResolvable | OneDashboardRawPage[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.putPage.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage">OneDashboardRawPage</a>[]

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetPermissions"></a>

```typescript
public resetPermissions(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OneDashboardRaw resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.isConstruct"></a>

```typescript
import { oneDashboardRaw } from '@cdktf/provider-newrelic'

oneDashboardRaw.OneDashboardRaw.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.isTerraformElement"></a>

```typescript
import { oneDashboardRaw } from '@cdktf/provider-newrelic'

oneDashboardRaw.OneDashboardRaw.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.isTerraformResource"></a>

```typescript
import { oneDashboardRaw } from '@cdktf/provider-newrelic'

oneDashboardRaw.OneDashboardRaw.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.generateConfigForImport"></a>

```typescript
import { oneDashboardRaw } from '@cdktf/provider-newrelic'

oneDashboardRaw.OneDashboardRaw.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OneDashboardRaw resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OneDashboardRaw to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OneDashboardRaw that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.64.0/docs/resources/one_dashboard_raw#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OneDashboardRaw to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.guid">guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.page">page</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList">OneDashboardRawPageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.permalink">permalink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.pageInput">pageInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage">OneDashboardRawPage</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.permissionsInput">permissionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.permissions">permissions</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.page"></a>

```typescript
public readonly page: OneDashboardRawPageList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList">OneDashboardRawPageList</a>

---

##### `permalink`<sup>Required</sup> <a name="permalink" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.permalink"></a>

```typescript
public readonly permalink: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pageInput`<sup>Optional</sup> <a name="pageInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.pageInput"></a>

```typescript
public readonly pageInput: IResolvable | OneDashboardRawPage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage">OneDashboardRawPage</a>[]

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OneDashboardRawConfig <a name="OneDashboardRawConfig" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.Initializer"></a>

```typescript
import { oneDashboardRaw } from '@cdktf/provider-newrelic'

const oneDashboardRawConfig: oneDashboardRaw.OneDashboardRawConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.name">name</a></code> | <code>string</code> | The dashboard's name. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.page">page</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage">OneDashboardRawPage</a>[]</code> | page block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.accountId">accountId</a></code> | <code>number</code> | The New Relic account ID where you want to create the dashboard. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.description">description</a></code> | <code>string</code> | The dashboard's description. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.64.0/docs/resources/one_dashboard_raw#id OneDashboardRaw#id}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.permissions">permissions</a></code> | <code>string</code> | Determines who can see or edit the dashboard. Valid values are private, public_read_only, public_read_write. Defaults to public_read_only. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The dashboard's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.64.0/docs/resources/one_dashboard_raw#name OneDashboardRaw#name}

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.page"></a>

```typescript
public readonly page: IResolvable | OneDashboardRawPage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage">OneDashboardRawPage</a>[]

page block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.64.0/docs/resources/one_dashboard_raw#page OneDashboardRaw#page}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The New Relic account ID where you want to create the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.64.0/docs/resources/one_dashboard_raw#account_id OneDashboardRaw#account_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The dashboard's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.64.0/docs/resources/one_dashboard_raw#description OneDashboardRaw#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.64.0/docs/resources/one_dashboard_raw#id OneDashboardRaw#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string

Determines who can see or edit the dashboard. Valid values are private, public_read_only, public_read_write. Defaults to public_read_only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.64.0/docs/resources/one_dashboard_raw#permissions OneDashboardRaw#permissions}

---

### OneDashboardRawPage <a name="OneDashboardRawPage" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage.Initializer"></a>

```typescript
import { oneDashboardRaw } from '@cdktf/provider-newrelic'

const oneDashboardRawPage: oneDashboardRaw.OneDashboardRawPage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage.property.name">name</a></code> | <code>string</code> | The dashboard page's name. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage.property.description">description</a></code> | <code>string</code> | The dashboard page's description. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage.property.widget">widget</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget">OneDashboardRawPageWidget</a>[]</code> | widget block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The dashboard page's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.64.0/docs/resources/one_dashboard_raw#name OneDashboardRaw#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The dashboard page's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.64.0/docs/resources/one_dashboard_raw#description OneDashboardRaw#description}

---

##### `widget`<sup>Optional</sup> <a name="widget" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage.property.widget"></a>

```typescript
public readonly widget: IResolvable | OneDashboardRawPageWidget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget">OneDashboardRawPageWidget</a>[]

widget block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.64.0/docs/resources/one_dashboard_raw#widget OneDashboardRaw#widget}

---

### OneDashboardRawPageWidget <a name="OneDashboardRawPageWidget" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.Initializer"></a>

```typescript
import { oneDashboardRaw } from '@cdktf/provider-newrelic'

const oneDashboardRawPageWidget: oneDashboardRaw.OneDashboardRawPageWidget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.column">column</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.64.0/docs/resources/one_dashboard_raw#column OneDashboardRaw#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.configuration">configuration</a></code> | <code>string</code> | The configuration of the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.row">row</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.64.0/docs/resources/one_dashboard_raw#row OneDashboardRaw#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.title">title</a></code> | <code>string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.visualizationId">visualizationId</a></code> | <code>string</code> | The visualization ID of the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.height">height</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.64.0/docs/resources/one_dashboard_raw#height OneDashboardRaw#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.linkedEntityGuids">linkedEntityGuids</a></code> | <code>string[]</code> | (Optional) Related entity GUIDs. Currently only supports Dashboard entity GUIDs. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.width">width</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.64.0/docs/resources/one_dashboard_raw#width OneDashboardRaw#width}. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.64.0/docs/resources/one_dashboard_raw#column OneDashboardRaw#column}.

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.configuration"></a>

```typescript
public readonly configuration: string;
```

- *Type:* string

The configuration of the widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.64.0/docs/resources/one_dashboard_raw#configuration OneDashboardRaw#configuration}

---

##### `row`<sup>Required</sup> <a name="row" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.64.0/docs/resources/one_dashboard_raw#row OneDashboardRaw#row}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

A title for the widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.64.0/docs/resources/one_dashboard_raw#title OneDashboardRaw#title}

---

##### `visualizationId`<sup>Required</sup> <a name="visualizationId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.visualizationId"></a>

```typescript
public readonly visualizationId: string;
```

- *Type:* string

The visualization ID of the widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.64.0/docs/resources/one_dashboard_raw#visualization_id OneDashboardRaw#visualization_id}

---

##### `height`<sup>Optional</sup> <a name="height" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.64.0/docs/resources/one_dashboard_raw#height OneDashboardRaw#height}.

---

##### `linkedEntityGuids`<sup>Optional</sup> <a name="linkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.linkedEntityGuids"></a>

```typescript
public readonly linkedEntityGuids: string[];
```

- *Type:* string[]

(Optional) Related entity GUIDs. Currently only supports Dashboard entity GUIDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.64.0/docs/resources/one_dashboard_raw#linked_entity_guids OneDashboardRaw#linked_entity_guids}

---

##### `width`<sup>Optional</sup> <a name="width" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.64.0/docs/resources/one_dashboard_raw#width OneDashboardRaw#width}.

---

## Classes <a name="Classes" id="Classes"></a>

### OneDashboardRawPageList <a name="OneDashboardRawPageList" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.Initializer"></a>

```typescript
import { oneDashboardRaw } from '@cdktf/provider-newrelic'

new oneDashboardRaw.OneDashboardRawPageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.get"></a>

```typescript
public get(index: number): OneDashboardRawPageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage">OneDashboardRawPage</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OneDashboardRawPage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage">OneDashboardRawPage</a>[]

---


### OneDashboardRawPageOutputReference <a name="OneDashboardRawPageOutputReference" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.Initializer"></a>

```typescript
import { oneDashboardRaw } from '@cdktf/provider-newrelic'

new oneDashboardRaw.OneDashboardRawPageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.putWidget">putWidget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.resetWidget">resetWidget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWidget` <a name="putWidget" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.putWidget"></a>

```typescript
public putWidget(value: IResolvable | OneDashboardRawPageWidget[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.putWidget.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget">OneDashboardRawPageWidget</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetWidget` <a name="resetWidget" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.resetWidget"></a>

```typescript
public resetWidget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.guid">guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.widget">widget</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList">OneDashboardRawPageWidgetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.widgetInput">widgetInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget">OneDashboardRawPageWidget</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage">OneDashboardRawPage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

---

##### `widget`<sup>Required</sup> <a name="widget" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.widget"></a>

```typescript
public readonly widget: OneDashboardRawPageWidgetList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList">OneDashboardRawPageWidgetList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `widgetInput`<sup>Optional</sup> <a name="widgetInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.widgetInput"></a>

```typescript
public readonly widgetInput: IResolvable | OneDashboardRawPageWidget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget">OneDashboardRawPageWidget</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OneDashboardRawPage;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage">OneDashboardRawPage</a>

---


### OneDashboardRawPageWidgetList <a name="OneDashboardRawPageWidgetList" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.Initializer"></a>

```typescript
import { oneDashboardRaw } from '@cdktf/provider-newrelic'

new oneDashboardRaw.OneDashboardRawPageWidgetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.get"></a>

```typescript
public get(index: number): OneDashboardRawPageWidgetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget">OneDashboardRawPageWidget</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OneDashboardRawPageWidget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget">OneDashboardRawPageWidget</a>[]

---


### OneDashboardRawPageWidgetOutputReference <a name="OneDashboardRawPageWidgetOutputReference" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.Initializer"></a>

```typescript
import { oneDashboardRaw } from '@cdktf/provider-newrelic'

new oneDashboardRaw.OneDashboardRawPageWidgetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.resetHeight">resetHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.resetLinkedEntityGuids">resetLinkedEntityGuids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.resetWidth">resetWidth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeight` <a name="resetHeight" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.resetHeight"></a>

```typescript
public resetHeight(): void
```

##### `resetLinkedEntityGuids` <a name="resetLinkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.resetLinkedEntityGuids"></a>

```typescript
public resetLinkedEntityGuids(): void
```

##### `resetWidth` <a name="resetWidth" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.resetWidth"></a>

```typescript
public resetWidth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.columnInput">columnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.configurationInput">configurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.heightInput">heightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.linkedEntityGuidsInput">linkedEntityGuidsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.rowInput">rowInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.visualizationIdInput">visualizationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.widthInput">widthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.column">column</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.configuration">configuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.height">height</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.linkedEntityGuids">linkedEntityGuids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.row">row</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.visualizationId">visualizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.width">width</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget">OneDashboardRawPageWidget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.columnInput"></a>

```typescript
public readonly columnInput: number;
```

- *Type:* number

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.configurationInput"></a>

```typescript
public readonly configurationInput: string;
```

- *Type:* string

---

##### `heightInput`<sup>Optional</sup> <a name="heightInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.heightInput"></a>

```typescript
public readonly heightInput: number;
```

- *Type:* number

---

##### `linkedEntityGuidsInput`<sup>Optional</sup> <a name="linkedEntityGuidsInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.linkedEntityGuidsInput"></a>

```typescript
public readonly linkedEntityGuidsInput: string[];
```

- *Type:* string[]

---

##### `rowInput`<sup>Optional</sup> <a name="rowInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.rowInput"></a>

```typescript
public readonly rowInput: number;
```

- *Type:* number

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `visualizationIdInput`<sup>Optional</sup> <a name="visualizationIdInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.visualizationIdInput"></a>

```typescript
public readonly visualizationIdInput: string;
```

- *Type:* string

---

##### `widthInput`<sup>Optional</sup> <a name="widthInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.widthInput"></a>

```typescript
public readonly widthInput: number;
```

- *Type:* number

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* number

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.configuration"></a>

```typescript
public readonly configuration: string;
```

- *Type:* string

---

##### `height`<sup>Required</sup> <a name="height" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

---

##### `linkedEntityGuids`<sup>Required</sup> <a name="linkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.linkedEntityGuids"></a>

```typescript
public readonly linkedEntityGuids: string[];
```

- *Type:* string[]

---

##### `row`<sup>Required</sup> <a name="row" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* number

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `visualizationId`<sup>Required</sup> <a name="visualizationId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.visualizationId"></a>

```typescript
public readonly visualizationId: string;
```

- *Type:* string

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OneDashboardRawPageWidget;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget">OneDashboardRawPageWidget</a>

---



