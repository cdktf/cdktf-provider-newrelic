# `monitorDowntime` Submodule <a name="`monitorDowntime` Submodule" id="@cdktf/provider-newrelic.monitorDowntime"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorDowntime <a name="MonitorDowntime" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/monitor_downtime newrelic_monitor_downtime}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer"></a>

```typescript
import { monitorDowntime } from '@cdktf/provider-newrelic'

new monitorDowntime.MonitorDowntime(scope: Construct, id: string, config: MonitorDowntimeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig">MonitorDowntimeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig">MonitorDowntimeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.putEndRepeat">putEndRepeat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.putFrequency">putFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetEndRepeat">resetEndRepeat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetMaintenanceDays">resetMaintenanceDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetMonitorGuids">resetMonitorGuids</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndRepeat` <a name="putEndRepeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.putEndRepeat"></a>

```typescript
public putEndRepeat(value: MonitorDowntimeEndRepeat): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.putEndRepeat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a>

---

##### `putFrequency` <a name="putFrequency" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.putFrequency"></a>

```typescript
public putFrequency(value: MonitorDowntimeFrequency): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.putFrequency.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetEndRepeat` <a name="resetEndRepeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetEndRepeat"></a>

```typescript
public resetEndRepeat(): void
```

##### `resetFrequency` <a name="resetFrequency" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetFrequency"></a>

```typescript
public resetFrequency(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaintenanceDays` <a name="resetMaintenanceDays" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetMaintenanceDays"></a>

```typescript
public resetMaintenanceDays(): void
```

##### `resetMonitorGuids` <a name="resetMonitorGuids" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetMonitorGuids"></a>

```typescript
public resetMonitorGuids(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MonitorDowntime resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isConstruct"></a>

```typescript
import { monitorDowntime } from '@cdktf/provider-newrelic'

monitorDowntime.MonitorDowntime.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isTerraformElement"></a>

```typescript
import { monitorDowntime } from '@cdktf/provider-newrelic'

monitorDowntime.MonitorDowntime.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isTerraformResource"></a>

```typescript
import { monitorDowntime } from '@cdktf/provider-newrelic'

monitorDowntime.MonitorDowntime.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.generateConfigForImport"></a>

```typescript
import { monitorDowntime } from '@cdktf/provider-newrelic'

monitorDowntime.MonitorDowntime.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MonitorDowntime resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MonitorDowntime to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MonitorDowntime that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/monitor_downtime#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MonitorDowntime to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endRepeat">endRepeat</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference">MonitorDowntimeEndRepeatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.frequency">frequency</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference">MonitorDowntimeFrequencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endRepeatInput">endRepeatInput</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.frequencyInput">frequencyInput</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.maintenanceDaysInput">maintenanceDaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.monitorGuidsInput">monitorGuidsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.maintenanceDays">maintenanceDays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.monitorGuids">monitorGuids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `endRepeat`<sup>Required</sup> <a name="endRepeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endRepeat"></a>

```typescript
public readonly endRepeat: MonitorDowntimeEndRepeatOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference">MonitorDowntimeEndRepeatOutputReference</a>

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.frequency"></a>

```typescript
public readonly frequency: MonitorDowntimeFrequencyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference">MonitorDowntimeFrequencyOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `endRepeatInput`<sup>Optional</sup> <a name="endRepeatInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endRepeatInput"></a>

```typescript
public readonly endRepeatInput: MonitorDowntimeEndRepeat;
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a>

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.frequencyInput"></a>

```typescript
public readonly frequencyInput: MonitorDowntimeFrequency;
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maintenanceDaysInput`<sup>Optional</sup> <a name="maintenanceDaysInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.maintenanceDaysInput"></a>

```typescript
public readonly maintenanceDaysInput: string[];
```

- *Type:* string[]

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `monitorGuidsInput`<sup>Optional</sup> <a name="monitorGuidsInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.monitorGuidsInput"></a>

```typescript
public readonly monitorGuidsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maintenanceDays`<sup>Required</sup> <a name="maintenanceDays" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.maintenanceDays"></a>

```typescript
public readonly maintenanceDays: string[];
```

- *Type:* string[]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `monitorGuids`<sup>Required</sup> <a name="monitorGuids" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.monitorGuids"></a>

```typescript
public readonly monitorGuids: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorDowntimeConfig <a name="MonitorDowntimeConfig" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.Initializer"></a>

```typescript
import { monitorDowntime } from '@cdktf/provider-newrelic'

const monitorDowntimeConfig: monitorDowntime.MonitorDowntimeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.endTime">endTime</a></code> | <code>string</code> | A datetime stamp signifying the end of the Monitor Downtime. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.mode">mode</a></code> | <code>string</code> | An identifier of the type of Monitor Downtime to be created. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.name">name</a></code> | <code>string</code> | A name to identify the Monitor Downtime to be created. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.startTime">startTime</a></code> | <code>string</code> | A datetime stamp signifying the start of the Monitor Downtime. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.timeZone">timeZone</a></code> | <code>string</code> | The timezone that applies to the Monitor Downtime schedule. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.accountId">accountId</a></code> | <code>number</code> | The ID of the New Relic account in which the Monitor Downtime shall be created. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.endRepeat">endRepeat</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a></code> | end_repeat block. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.frequency">frequency</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a></code> | frequency block. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/monitor_downtime#id MonitorDowntime#id}. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.maintenanceDays">maintenanceDays</a></code> | <code>string[]</code> | A list of maintenance days to be included with the created weekly Monitor Downtime. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.monitorGuids">monitorGuids</a></code> | <code>string[]</code> | A list of GUIDs of monitors, to which the created Monitor Downtime shall be applied. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

A datetime stamp signifying the end of the Monitor Downtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/monitor_downtime#end_time MonitorDowntime#end_time}

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

An identifier of the type of Monitor Downtime to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/monitor_downtime#mode MonitorDowntime#mode}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name to identify the Monitor Downtime to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/monitor_downtime#name MonitorDowntime#name}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

A datetime stamp signifying the start of the Monitor Downtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/monitor_downtime#start_time MonitorDowntime#start_time}

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

The timezone that applies to the Monitor Downtime schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/monitor_downtime#time_zone MonitorDowntime#time_zone}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The ID of the New Relic account in which the Monitor Downtime shall be created.

Defaults to the `account_id` in the provider{} configuration if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/monitor_downtime#account_id MonitorDowntime#account_id}

---

##### `endRepeat`<sup>Optional</sup> <a name="endRepeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.endRepeat"></a>

```typescript
public readonly endRepeat: MonitorDowntimeEndRepeat;
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a>

end_repeat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/monitor_downtime#end_repeat MonitorDowntime#end_repeat}

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.frequency"></a>

```typescript
public readonly frequency: MonitorDowntimeFrequency;
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a>

frequency block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/monitor_downtime#frequency MonitorDowntime#frequency}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/monitor_downtime#id MonitorDowntime#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenanceDays`<sup>Optional</sup> <a name="maintenanceDays" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.maintenanceDays"></a>

```typescript
public readonly maintenanceDays: string[];
```

- *Type:* string[]

A list of maintenance days to be included with the created weekly Monitor Downtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/monitor_downtime#maintenance_days MonitorDowntime#maintenance_days}

---

##### `monitorGuids`<sup>Optional</sup> <a name="monitorGuids" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.monitorGuids"></a>

```typescript
public readonly monitorGuids: string[];
```

- *Type:* string[]

A list of GUIDs of monitors, to which the created Monitor Downtime shall be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/monitor_downtime#monitor_guids MonitorDowntime#monitor_guids}

---

### MonitorDowntimeEndRepeat <a name="MonitorDowntimeEndRepeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat.Initializer"></a>

```typescript
import { monitorDowntime } from '@cdktf/provider-newrelic'

const monitorDowntimeEndRepeat: monitorDowntime.MonitorDowntimeEndRepeat = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat.property.onDate">onDate</a></code> | <code>string</code> | A date, on which the Monitor Downtime's repeat cycle is expected to end. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat.property.onRepeat">onRepeat</a></code> | <code>number</code> | Number of repetitions after which the Monitor Downtime's repeat cycle is expected to end. |

---

##### `onDate`<sup>Optional</sup> <a name="onDate" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat.property.onDate"></a>

```typescript
public readonly onDate: string;
```

- *Type:* string

A date, on which the Monitor Downtime's repeat cycle is expected to end.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/monitor_downtime#on_date MonitorDowntime#on_date}

---

##### `onRepeat`<sup>Optional</sup> <a name="onRepeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat.property.onRepeat"></a>

```typescript
public readonly onRepeat: number;
```

- *Type:* number

Number of repetitions after which the Monitor Downtime's repeat cycle is expected to end.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/monitor_downtime#on_repeat MonitorDowntime#on_repeat}

---

### MonitorDowntimeFrequency <a name="MonitorDowntimeFrequency" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency.Initializer"></a>

```typescript
import { monitorDowntime } from '@cdktf/provider-newrelic'

const monitorDowntimeFrequency: monitorDowntime.MonitorDowntimeFrequency = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency.property.daysOfMonth">daysOfMonth</a></code> | <code>number[]</code> | A numerical list of days of a month on which the Monitor Downtime is scheduled to run. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency.property.daysOfWeek">daysOfWeek</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek">MonitorDowntimeFrequencyDaysOfWeek</a></code> | days_of_week block. |

---

##### `daysOfMonth`<sup>Optional</sup> <a name="daysOfMonth" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency.property.daysOfMonth"></a>

```typescript
public readonly daysOfMonth: number[];
```

- *Type:* number[]

A numerical list of days of a month on which the Monitor Downtime is scheduled to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/monitor_downtime#days_of_month MonitorDowntime#days_of_month}

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: MonitorDowntimeFrequencyDaysOfWeek;
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek">MonitorDowntimeFrequencyDaysOfWeek</a>

days_of_week block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/monitor_downtime#days_of_week MonitorDowntime#days_of_week}

---

### MonitorDowntimeFrequencyDaysOfWeek <a name="MonitorDowntimeFrequencyDaysOfWeek" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek.Initializer"></a>

```typescript
import { monitorDowntime } from '@cdktf/provider-newrelic'

const monitorDowntimeFrequencyDaysOfWeek: monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek.property.ordinalDayOfMonth">ordinalDayOfMonth</a></code> | <code>string</code> | An occurrence of the day selected within the month. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek.property.weekDay">weekDay</a></code> | <code>string</code> | The day of the week on which the Monitor Downtime would run. |

---

##### `ordinalDayOfMonth`<sup>Required</sup> <a name="ordinalDayOfMonth" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek.property.ordinalDayOfMonth"></a>

```typescript
public readonly ordinalDayOfMonth: string;
```

- *Type:* string

An occurrence of the day selected within the month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/monitor_downtime#ordinal_day_of_month MonitorDowntime#ordinal_day_of_month}

---

##### `weekDay`<sup>Required</sup> <a name="weekDay" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek.property.weekDay"></a>

```typescript
public readonly weekDay: string;
```

- *Type:* string

The day of the week on which the Monitor Downtime would run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/monitor_downtime#week_day MonitorDowntime#week_day}

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorDowntimeEndRepeatOutputReference <a name="MonitorDowntimeEndRepeatOutputReference" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.Initializer"></a>

```typescript
import { monitorDowntime } from '@cdktf/provider-newrelic'

new monitorDowntime.MonitorDowntimeEndRepeatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.resetOnDate">resetOnDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.resetOnRepeat">resetOnRepeat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOnDate` <a name="resetOnDate" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.resetOnDate"></a>

```typescript
public resetOnDate(): void
```

##### `resetOnRepeat` <a name="resetOnRepeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.resetOnRepeat"></a>

```typescript
public resetOnRepeat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onDateInput">onDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onRepeatInput">onRepeatInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onDate">onDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onRepeat">onRepeat</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `onDateInput`<sup>Optional</sup> <a name="onDateInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onDateInput"></a>

```typescript
public readonly onDateInput: string;
```

- *Type:* string

---

##### `onRepeatInput`<sup>Optional</sup> <a name="onRepeatInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onRepeatInput"></a>

```typescript
public readonly onRepeatInput: number;
```

- *Type:* number

---

##### `onDate`<sup>Required</sup> <a name="onDate" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onDate"></a>

```typescript
public readonly onDate: string;
```

- *Type:* string

---

##### `onRepeat`<sup>Required</sup> <a name="onRepeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onRepeat"></a>

```typescript
public readonly onRepeat: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorDowntimeEndRepeat;
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a>

---


### MonitorDowntimeFrequencyDaysOfWeekOutputReference <a name="MonitorDowntimeFrequencyDaysOfWeekOutputReference" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.Initializer"></a>

```typescript
import { monitorDowntime } from '@cdktf/provider-newrelic'

new monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.ordinalDayOfMonthInput">ordinalDayOfMonthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.weekDayInput">weekDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.ordinalDayOfMonth">ordinalDayOfMonth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.weekDay">weekDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek">MonitorDowntimeFrequencyDaysOfWeek</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ordinalDayOfMonthInput`<sup>Optional</sup> <a name="ordinalDayOfMonthInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.ordinalDayOfMonthInput"></a>

```typescript
public readonly ordinalDayOfMonthInput: string;
```

- *Type:* string

---

##### `weekDayInput`<sup>Optional</sup> <a name="weekDayInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.weekDayInput"></a>

```typescript
public readonly weekDayInput: string;
```

- *Type:* string

---

##### `ordinalDayOfMonth`<sup>Required</sup> <a name="ordinalDayOfMonth" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.ordinalDayOfMonth"></a>

```typescript
public readonly ordinalDayOfMonth: string;
```

- *Type:* string

---

##### `weekDay`<sup>Required</sup> <a name="weekDay" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.weekDay"></a>

```typescript
public readonly weekDay: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorDowntimeFrequencyDaysOfWeek;
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek">MonitorDowntimeFrequencyDaysOfWeek</a>

---


### MonitorDowntimeFrequencyOutputReference <a name="MonitorDowntimeFrequencyOutputReference" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.Initializer"></a>

```typescript
import { monitorDowntime } from '@cdktf/provider-newrelic'

new monitorDowntime.MonitorDowntimeFrequencyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.putDaysOfWeek">putDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.resetDaysOfMonth">resetDaysOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDaysOfWeek` <a name="putDaysOfWeek" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.putDaysOfWeek"></a>

```typescript
public putDaysOfWeek(value: MonitorDowntimeFrequencyDaysOfWeek): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.putDaysOfWeek.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek">MonitorDowntimeFrequencyDaysOfWeek</a>

---

##### `resetDaysOfMonth` <a name="resetDaysOfMonth" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.resetDaysOfMonth"></a>

```typescript
public resetDaysOfMonth(): void
```

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.resetDaysOfWeek"></a>

```typescript
public resetDaysOfWeek(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference">MonitorDowntimeFrequencyDaysOfWeekOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfMonthInput">daysOfMonthInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek">MonitorDowntimeFrequencyDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfMonth">daysOfMonth</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: MonitorDowntimeFrequencyDaysOfWeekOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference">MonitorDowntimeFrequencyDaysOfWeekOutputReference</a>

---

##### `daysOfMonthInput`<sup>Optional</sup> <a name="daysOfMonthInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfMonthInput"></a>

```typescript
public readonly daysOfMonthInput: number[];
```

- *Type:* number[]

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfWeekInput"></a>

```typescript
public readonly daysOfWeekInput: MonitorDowntimeFrequencyDaysOfWeek;
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek">MonitorDowntimeFrequencyDaysOfWeek</a>

---

##### `daysOfMonth`<sup>Required</sup> <a name="daysOfMonth" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfMonth"></a>

```typescript
public readonly daysOfMonth: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorDowntimeFrequency;
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a>

---



