# `insightsEvent` Submodule <a name="`insightsEvent` Submodule" id="@cdktf/provider-newrelic.insightsEvent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InsightsEvent <a name="InsightsEvent" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs/resources/insights_event newrelic_insights_event}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.Initializer"></a>

```typescript
import { insightsEvent } from '@cdktf/provider-newrelic'

new insightsEvent.InsightsEvent(scope: Construct, id: string, config: InsightsEventConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventConfig">InsightsEventConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventConfig">InsightsEventConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.putEvent">putEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEvent` <a name="putEvent" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.putEvent"></a>

```typescript
public putEvent(value: IResolvable | InsightsEventEvent[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.putEvent.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEvent">InsightsEventEvent</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a InsightsEvent resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.isConstruct"></a>

```typescript
import { insightsEvent } from '@cdktf/provider-newrelic'

insightsEvent.InsightsEvent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.isTerraformElement"></a>

```typescript
import { insightsEvent } from '@cdktf/provider-newrelic'

insightsEvent.InsightsEvent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.isTerraformResource"></a>

```typescript
import { insightsEvent } from '@cdktf/provider-newrelic'

insightsEvent.InsightsEvent.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.generateConfigForImport"></a>

```typescript
import { insightsEvent } from '@cdktf/provider-newrelic'

insightsEvent.InsightsEvent.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a InsightsEvent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the InsightsEvent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing InsightsEvent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs/resources/insights_event#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the InsightsEvent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.event">event</a></code> | <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventList">InsightsEventEventList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.eventInput">eventInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEvent">InsightsEventEvent</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.event"></a>

```typescript
public readonly event: InsightsEventEventList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventList">InsightsEventEventList</a>

---

##### `eventInput`<sup>Optional</sup> <a name="eventInput" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.eventInput"></a>

```typescript
public readonly eventInput: IResolvable | InsightsEventEvent[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEvent">InsightsEventEvent</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.insightsEvent.InsightsEvent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### InsightsEventConfig <a name="InsightsEventConfig" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventConfig.Initializer"></a>

```typescript
import { insightsEvent } from '@cdktf/provider-newrelic'

const insightsEventConfig: insightsEvent.InsightsEventConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventConfig.property.event">event</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEvent">InsightsEventEvent</a>[]</code> | event block. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs/resources/insights_event#id InsightsEvent#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventConfig.property.event"></a>

```typescript
public readonly event: IResolvable | InsightsEventEvent[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEvent">InsightsEventEvent</a>[]

event block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs/resources/insights_event#event InsightsEvent#event}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs/resources/insights_event#id InsightsEvent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### InsightsEventEvent <a name="InsightsEventEvent" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEvent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEvent.Initializer"></a>

```typescript
import { insightsEvent } from '@cdktf/provider-newrelic'

const insightsEventEvent: insightsEvent.InsightsEventEvent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEvent.property.attribute">attribute</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttribute">InsightsEventEventAttribute</a>[]</code> | attribute block. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEvent.property.type">type</a></code> | <code>string</code> | The event's name. Can be a combination of alphanumeric characters, underscores, and colons. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEvent.property.timestamp">timestamp</a></code> | <code>number</code> | Must be a Unix epoch timestamp. You can define timestamps either in seconds or in milliseconds. |

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEvent.property.attribute"></a>

```typescript
public readonly attribute: IResolvable | InsightsEventEventAttribute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttribute">InsightsEventEventAttribute</a>[]

attribute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs/resources/insights_event#attribute InsightsEvent#attribute}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEvent.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The event's name. Can be a combination of alphanumeric characters, underscores, and colons.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs/resources/insights_event#type InsightsEvent#type}

---

##### `timestamp`<sup>Optional</sup> <a name="timestamp" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEvent.property.timestamp"></a>

```typescript
public readonly timestamp: number;
```

- *Type:* number

Must be a Unix epoch timestamp. You can define timestamps either in seconds or in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs/resources/insights_event#timestamp InsightsEvent#timestamp}

---

### InsightsEventEventAttribute <a name="InsightsEventEventAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttribute.Initializer"></a>

```typescript
import { insightsEvent } from '@cdktf/provider-newrelic'

const insightsEventEventAttribute: insightsEvent.InsightsEventEventAttribute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttribute.property.key">key</a></code> | <code>string</code> | The name of the attribute. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttribute.property.value">value</a></code> | <code>string</code> | The value of the attribute. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttribute.property.type">type</a></code> | <code>string</code> | Specify the type for the attribute value. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttribute.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The name of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs/resources/insights_event#key InsightsEvent#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttribute.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs/resources/insights_event#value InsightsEvent#value}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttribute.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Specify the type for the attribute value.

This is useful when passing integer or float values to Insights. Allowed values are string, int, or float. Defaults to string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs/resources/insights_event#type InsightsEvent#type}

---

## Classes <a name="Classes" id="Classes"></a>

### InsightsEventEventAttributeList <a name="InsightsEventEventAttributeList" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeList.Initializer"></a>

```typescript
import { insightsEvent } from '@cdktf/provider-newrelic'

new insightsEvent.InsightsEventEventAttributeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeList.get"></a>

```typescript
public get(index: number): InsightsEventEventAttributeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttribute">InsightsEventEventAttribute</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InsightsEventEventAttribute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttribute">InsightsEventEventAttribute</a>[]

---


### InsightsEventEventAttributeOutputReference <a name="InsightsEventEventAttributeOutputReference" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.Initializer"></a>

```typescript
import { insightsEvent } from '@cdktf/provider-newrelic'

new insightsEvent.InsightsEventEventAttributeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttribute">InsightsEventEventAttribute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InsightsEventEventAttribute;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttribute">InsightsEventEventAttribute</a>

---


### InsightsEventEventList <a name="InsightsEventEventList" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventList.Initializer"></a>

```typescript
import { insightsEvent } from '@cdktf/provider-newrelic'

new insightsEvent.InsightsEventEventList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventList.get"></a>

```typescript
public get(index: number): InsightsEventEventOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEvent">InsightsEventEvent</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InsightsEventEvent[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEvent">InsightsEventEvent</a>[]

---


### InsightsEventEventOutputReference <a name="InsightsEventEventOutputReference" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.Initializer"></a>

```typescript
import { insightsEvent } from '@cdktf/provider-newrelic'

new insightsEvent.InsightsEventEventOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.putAttribute">putAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.resetTimestamp">resetTimestamp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttribute` <a name="putAttribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.putAttribute"></a>

```typescript
public putAttribute(value: IResolvable | InsightsEventEventAttribute[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.putAttribute.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttribute">InsightsEventEventAttribute</a>[]

---

##### `resetTimestamp` <a name="resetTimestamp" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.resetTimestamp"></a>

```typescript
public resetTimestamp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.property.attribute">attribute</a></code> | <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeList">InsightsEventEventAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.property.attributeInput">attributeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttribute">InsightsEventEventAttribute</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.property.timestampInput">timestampInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.property.timestamp">timestamp</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEvent">InsightsEventEvent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.property.attribute"></a>

```typescript
public readonly attribute: InsightsEventEventAttributeList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttributeList">InsightsEventEventAttributeList</a>

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.property.attributeInput"></a>

```typescript
public readonly attributeInput: IResolvable | InsightsEventEventAttribute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEventAttribute">InsightsEventEventAttribute</a>[]

---

##### `timestampInput`<sup>Optional</sup> <a name="timestampInput" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.property.timestampInput"></a>

```typescript
public readonly timestampInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.property.timestamp"></a>

```typescript
public readonly timestamp: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.insightsEvent.InsightsEventEventOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InsightsEventEvent;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.insightsEvent.InsightsEventEvent">InsightsEventEvent</a>

---



