# `serviceLevel` Submodule <a name="`serviceLevel` Submodule" id="@cdktf/provider-newrelic.serviceLevel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceLevel <a name="ServiceLevel" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level newrelic_service_level}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer"></a>

```typescript
import { serviceLevel } from '@cdktf/provider-newrelic'

new serviceLevel.ServiceLevel(scope: Construct, id: string, config: ServiceLevelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig">ServiceLevelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig">ServiceLevelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.putEvents">putEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.putObjective">putObjective</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEvents` <a name="putEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.putEvents"></a>

```typescript
public putEvents(value: ServiceLevelEvents): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.putEvents.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a>

---

##### `putObjective` <a name="putObjective" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.putObjective"></a>

```typescript
public putObjective(value: ServiceLevelObjective): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.putObjective.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceLevel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isConstruct"></a>

```typescript
import { serviceLevel } from '@cdktf/provider-newrelic'

serviceLevel.ServiceLevel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isTerraformElement"></a>

```typescript
import { serviceLevel } from '@cdktf/provider-newrelic'

serviceLevel.ServiceLevel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isTerraformResource"></a>

```typescript
import { serviceLevel } from '@cdktf/provider-newrelic'

serviceLevel.ServiceLevel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.generateConfigForImport"></a>

```typescript
import { serviceLevel } from '@cdktf/provider-newrelic'

serviceLevel.ServiceLevel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ServiceLevel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServiceLevel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServiceLevel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServiceLevel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.events">events</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference">ServiceLevelEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.objective">objective</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference">ServiceLevelObjectiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.sliGuid">sliGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.sliId">sliId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.eventsInput">eventsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.guidInput">guidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.objectiveInput">objectiveInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.guid">guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.events"></a>

```typescript
public readonly events: ServiceLevelEventsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference">ServiceLevelEventsOutputReference</a>

---

##### `objective`<sup>Required</sup> <a name="objective" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.objective"></a>

```typescript
public readonly objective: ServiceLevelObjectiveOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference">ServiceLevelObjectiveOutputReference</a>

---

##### `sliGuid`<sup>Required</sup> <a name="sliGuid" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.sliGuid"></a>

```typescript
public readonly sliGuid: string;
```

- *Type:* string

---

##### `sliId`<sup>Required</sup> <a name="sliId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.sliId"></a>

```typescript
public readonly sliId: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.eventsInput"></a>

```typescript
public readonly eventsInput: ServiceLevelEvents;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a>

---

##### `guidInput`<sup>Optional</sup> <a name="guidInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.guidInput"></a>

```typescript
public readonly guidInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `objectiveInput`<sup>Optional</sup> <a name="objectiveInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.objectiveInput"></a>

```typescript
public readonly objectiveInput: ServiceLevelObjective;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceLevelConfig <a name="ServiceLevelConfig" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.Initializer"></a>

```typescript
import { serviceLevel } from '@cdktf/provider-newrelic'

const serviceLevelConfig: serviceLevel.ServiceLevelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.events">events</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a></code> | events block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.guid">guid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#guid ServiceLevel#guid}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#name ServiceLevel#name}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.objective">objective</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a></code> | objective block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#description ServiceLevel#description}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#id ServiceLevel#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.events"></a>

```typescript
public readonly events: ServiceLevelEvents;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a>

events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#events ServiceLevel#events}

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#guid ServiceLevel#guid}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#name ServiceLevel#name}.

---

##### `objective`<sup>Required</sup> <a name="objective" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.objective"></a>

```typescript
public readonly objective: ServiceLevelObjective;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a>

objective block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#objective ServiceLevel#objective}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#description ServiceLevel#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#id ServiceLevel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ServiceLevelEvents <a name="ServiceLevelEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.Initializer"></a>

```typescript
import { serviceLevel } from '@cdktf/provider-newrelic'

const serviceLevelEvents: serviceLevel.ServiceLevelEvents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.accountId">accountId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#account_id ServiceLevel#account_id}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.validEvents">validEvents</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents">ServiceLevelEventsValidEvents</a></code> | valid_events block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.badEvents">badEvents</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents">ServiceLevelEventsBadEvents</a></code> | bad_events block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.goodEvents">goodEvents</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents">ServiceLevelEventsGoodEvents</a></code> | good_events block. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#account_id ServiceLevel#account_id}.

---

##### `validEvents`<sup>Required</sup> <a name="validEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.validEvents"></a>

```typescript
public readonly validEvents: ServiceLevelEventsValidEvents;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents">ServiceLevelEventsValidEvents</a>

valid_events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#valid_events ServiceLevel#valid_events}

---

##### `badEvents`<sup>Optional</sup> <a name="badEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.badEvents"></a>

```typescript
public readonly badEvents: ServiceLevelEventsBadEvents;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents">ServiceLevelEventsBadEvents</a>

bad_events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#bad_events ServiceLevel#bad_events}

---

##### `goodEvents`<sup>Optional</sup> <a name="goodEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.goodEvents"></a>

```typescript
public readonly goodEvents: ServiceLevelEventsGoodEvents;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents">ServiceLevelEventsGoodEvents</a>

good_events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#good_events ServiceLevel#good_events}

---

### ServiceLevelEventsBadEvents <a name="ServiceLevelEventsBadEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents.Initializer"></a>

```typescript
import { serviceLevel } from '@cdktf/provider-newrelic'

const serviceLevelEventsBadEvents: serviceLevel.ServiceLevelEventsBadEvents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents.property.from">from</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#from ServiceLevel#from}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents.property.select">select</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect">ServiceLevelEventsBadEventsSelect</a></code> | select block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents.property.where">where</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#where ServiceLevel#where}. |

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#from ServiceLevel#from}.

---

##### `select`<sup>Optional</sup> <a name="select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents.property.select"></a>

```typescript
public readonly select: ServiceLevelEventsBadEventsSelect;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect">ServiceLevelEventsBadEventsSelect</a>

select block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#select ServiceLevel#select}

---

##### `where`<sup>Optional</sup> <a name="where" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents.property.where"></a>

```typescript
public readonly where: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#where ServiceLevel#where}.

---

### ServiceLevelEventsBadEventsSelect <a name="ServiceLevelEventsBadEventsSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect.Initializer"></a>

```typescript
import { serviceLevel } from '@cdktf/provider-newrelic'

const serviceLevelEventsBadEventsSelect: serviceLevel.ServiceLevelEventsBadEventsSelect = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect.property.function">function</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#function ServiceLevel#function}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect.property.attribute">attribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#attribute ServiceLevel#attribute}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect.property.threshold">threshold</a></code> | <code>number</code> | The event threshold to use in the SELECT clause. |

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect.property.function"></a>

```typescript
public readonly function: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#function ServiceLevel#function}.

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#attribute ServiceLevel#attribute}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

The event threshold to use in the SELECT clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#threshold ServiceLevel#threshold}

---

### ServiceLevelEventsGoodEvents <a name="ServiceLevelEventsGoodEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents.Initializer"></a>

```typescript
import { serviceLevel } from '@cdktf/provider-newrelic'

const serviceLevelEventsGoodEvents: serviceLevel.ServiceLevelEventsGoodEvents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents.property.from">from</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#from ServiceLevel#from}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents.property.select">select</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect">ServiceLevelEventsGoodEventsSelect</a></code> | select block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents.property.where">where</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#where ServiceLevel#where}. |

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#from ServiceLevel#from}.

---

##### `select`<sup>Optional</sup> <a name="select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents.property.select"></a>

```typescript
public readonly select: ServiceLevelEventsGoodEventsSelect;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect">ServiceLevelEventsGoodEventsSelect</a>

select block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#select ServiceLevel#select}

---

##### `where`<sup>Optional</sup> <a name="where" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents.property.where"></a>

```typescript
public readonly where: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#where ServiceLevel#where}.

---

### ServiceLevelEventsGoodEventsSelect <a name="ServiceLevelEventsGoodEventsSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect.Initializer"></a>

```typescript
import { serviceLevel } from '@cdktf/provider-newrelic'

const serviceLevelEventsGoodEventsSelect: serviceLevel.ServiceLevelEventsGoodEventsSelect = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect.property.function">function</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#function ServiceLevel#function}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect.property.attribute">attribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#attribute ServiceLevel#attribute}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect.property.threshold">threshold</a></code> | <code>number</code> | The event threshold to use in the SELECT clause. |

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect.property.function"></a>

```typescript
public readonly function: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#function ServiceLevel#function}.

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#attribute ServiceLevel#attribute}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

The event threshold to use in the SELECT clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#threshold ServiceLevel#threshold}

---

### ServiceLevelEventsValidEvents <a name="ServiceLevelEventsValidEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents.Initializer"></a>

```typescript
import { serviceLevel } from '@cdktf/provider-newrelic'

const serviceLevelEventsValidEvents: serviceLevel.ServiceLevelEventsValidEvents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents.property.from">from</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#from ServiceLevel#from}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents.property.select">select</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect">ServiceLevelEventsValidEventsSelect</a></code> | select block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents.property.where">where</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#where ServiceLevel#where}. |

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#from ServiceLevel#from}.

---

##### `select`<sup>Optional</sup> <a name="select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents.property.select"></a>

```typescript
public readonly select: ServiceLevelEventsValidEventsSelect;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect">ServiceLevelEventsValidEventsSelect</a>

select block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#select ServiceLevel#select}

---

##### `where`<sup>Optional</sup> <a name="where" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents.property.where"></a>

```typescript
public readonly where: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#where ServiceLevel#where}.

---

### ServiceLevelEventsValidEventsSelect <a name="ServiceLevelEventsValidEventsSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect.Initializer"></a>

```typescript
import { serviceLevel } from '@cdktf/provider-newrelic'

const serviceLevelEventsValidEventsSelect: serviceLevel.ServiceLevelEventsValidEventsSelect = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect.property.function">function</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#function ServiceLevel#function}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect.property.attribute">attribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#attribute ServiceLevel#attribute}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect.property.threshold">threshold</a></code> | <code>number</code> | The event threshold to use in the SELECT clause. |

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect.property.function"></a>

```typescript
public readonly function: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#function ServiceLevel#function}.

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#attribute ServiceLevel#attribute}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

The event threshold to use in the SELECT clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#threshold ServiceLevel#threshold}

---

### ServiceLevelObjective <a name="ServiceLevelObjective" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.Initializer"></a>

```typescript
import { serviceLevel } from '@cdktf/provider-newrelic'

const serviceLevelObjective: serviceLevel.ServiceLevelObjective = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.target">target</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#target ServiceLevel#target}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.timeWindow">timeWindow</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow">ServiceLevelObjectiveTimeWindow</a></code> | time_window block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#description ServiceLevel#description}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#name ServiceLevel#name}. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.target"></a>

```typescript
public readonly target: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#target ServiceLevel#target}.

---

##### `timeWindow`<sup>Required</sup> <a name="timeWindow" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.timeWindow"></a>

```typescript
public readonly timeWindow: ServiceLevelObjectiveTimeWindow;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow">ServiceLevelObjectiveTimeWindow</a>

time_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#time_window ServiceLevel#time_window}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#description ServiceLevel#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#name ServiceLevel#name}.

---

### ServiceLevelObjectiveTimeWindow <a name="ServiceLevelObjectiveTimeWindow" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow.Initializer"></a>

```typescript
import { serviceLevel } from '@cdktf/provider-newrelic'

const serviceLevelObjectiveTimeWindow: serviceLevel.ServiceLevelObjectiveTimeWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow.property.rolling">rolling</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling">ServiceLevelObjectiveTimeWindowRolling</a></code> | rolling block. |

---

##### `rolling`<sup>Required</sup> <a name="rolling" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow.property.rolling"></a>

```typescript
public readonly rolling: ServiceLevelObjectiveTimeWindowRolling;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling">ServiceLevelObjectiveTimeWindowRolling</a>

rolling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#rolling ServiceLevel#rolling}

---

### ServiceLevelObjectiveTimeWindowRolling <a name="ServiceLevelObjectiveTimeWindowRolling" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling.Initializer"></a>

```typescript
import { serviceLevel } from '@cdktf/provider-newrelic'

const serviceLevelObjectiveTimeWindowRolling: serviceLevel.ServiceLevelObjectiveTimeWindowRolling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#count ServiceLevel#count}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#unit ServiceLevel#unit}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#count ServiceLevel#count}.

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/service_level#unit ServiceLevel#unit}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceLevelEventsBadEventsOutputReference <a name="ServiceLevelEventsBadEventsOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.Initializer"></a>

```typescript
import { serviceLevel } from '@cdktf/provider-newrelic'

new serviceLevel.ServiceLevelEventsBadEventsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.putSelect">putSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.resetSelect">resetSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.resetWhere">resetWhere</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSelect` <a name="putSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.putSelect"></a>

```typescript
public putSelect(value: ServiceLevelEventsBadEventsSelect): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.putSelect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect">ServiceLevelEventsBadEventsSelect</a>

---

##### `resetSelect` <a name="resetSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.resetSelect"></a>

```typescript
public resetSelect(): void
```

##### `resetWhere` <a name="resetWhere" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.resetWhere"></a>

```typescript
public resetWhere(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.select">select</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference">ServiceLevelEventsBadEventsSelectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.fromInput">fromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.selectInput">selectInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect">ServiceLevelEventsBadEventsSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.whereInput">whereInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.where">where</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents">ServiceLevelEventsBadEvents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `select`<sup>Required</sup> <a name="select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.select"></a>

```typescript
public readonly select: ServiceLevelEventsBadEventsSelectOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference">ServiceLevelEventsBadEventsSelectOutputReference</a>

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.fromInput"></a>

```typescript
public readonly fromInput: string;
```

- *Type:* string

---

##### `selectInput`<sup>Optional</sup> <a name="selectInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.selectInput"></a>

```typescript
public readonly selectInput: ServiceLevelEventsBadEventsSelect;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect">ServiceLevelEventsBadEventsSelect</a>

---

##### `whereInput`<sup>Optional</sup> <a name="whereInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.whereInput"></a>

```typescript
public readonly whereInput: string;
```

- *Type:* string

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `where`<sup>Required</sup> <a name="where" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.where"></a>

```typescript
public readonly where: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceLevelEventsBadEvents;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents">ServiceLevelEventsBadEvents</a>

---


### ServiceLevelEventsBadEventsSelectOutputReference <a name="ServiceLevelEventsBadEventsSelectOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.Initializer"></a>

```typescript
import { serviceLevel } from '@cdktf/provider-newrelic'

new serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.resetAttribute">resetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttribute` <a name="resetAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.resetAttribute"></a>

```typescript
public resetAttribute(): void
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.resetThreshold"></a>

```typescript
public resetThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.attributeInput">attributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.functionInput">functionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.function">function</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect">ServiceLevelEventsBadEventsSelect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.attributeInput"></a>

```typescript
public readonly attributeInput: string;
```

- *Type:* string

---

##### `functionInput`<sup>Optional</sup> <a name="functionInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.functionInput"></a>

```typescript
public readonly functionInput: string;
```

- *Type:* string

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.function"></a>

```typescript
public readonly function: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceLevelEventsBadEventsSelect;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect">ServiceLevelEventsBadEventsSelect</a>

---


### ServiceLevelEventsGoodEventsOutputReference <a name="ServiceLevelEventsGoodEventsOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.Initializer"></a>

```typescript
import { serviceLevel } from '@cdktf/provider-newrelic'

new serviceLevel.ServiceLevelEventsGoodEventsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.putSelect">putSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.resetSelect">resetSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.resetWhere">resetWhere</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSelect` <a name="putSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.putSelect"></a>

```typescript
public putSelect(value: ServiceLevelEventsGoodEventsSelect): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.putSelect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect">ServiceLevelEventsGoodEventsSelect</a>

---

##### `resetSelect` <a name="resetSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.resetSelect"></a>

```typescript
public resetSelect(): void
```

##### `resetWhere` <a name="resetWhere" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.resetWhere"></a>

```typescript
public resetWhere(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.select">select</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference">ServiceLevelEventsGoodEventsSelectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.fromInput">fromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.selectInput">selectInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect">ServiceLevelEventsGoodEventsSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.whereInput">whereInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.where">where</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents">ServiceLevelEventsGoodEvents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `select`<sup>Required</sup> <a name="select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.select"></a>

```typescript
public readonly select: ServiceLevelEventsGoodEventsSelectOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference">ServiceLevelEventsGoodEventsSelectOutputReference</a>

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.fromInput"></a>

```typescript
public readonly fromInput: string;
```

- *Type:* string

---

##### `selectInput`<sup>Optional</sup> <a name="selectInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.selectInput"></a>

```typescript
public readonly selectInput: ServiceLevelEventsGoodEventsSelect;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect">ServiceLevelEventsGoodEventsSelect</a>

---

##### `whereInput`<sup>Optional</sup> <a name="whereInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.whereInput"></a>

```typescript
public readonly whereInput: string;
```

- *Type:* string

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `where`<sup>Required</sup> <a name="where" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.where"></a>

```typescript
public readonly where: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceLevelEventsGoodEvents;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents">ServiceLevelEventsGoodEvents</a>

---


### ServiceLevelEventsGoodEventsSelectOutputReference <a name="ServiceLevelEventsGoodEventsSelectOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.Initializer"></a>

```typescript
import { serviceLevel } from '@cdktf/provider-newrelic'

new serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.resetAttribute">resetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttribute` <a name="resetAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.resetAttribute"></a>

```typescript
public resetAttribute(): void
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.resetThreshold"></a>

```typescript
public resetThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.attributeInput">attributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.functionInput">functionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.function">function</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect">ServiceLevelEventsGoodEventsSelect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.attributeInput"></a>

```typescript
public readonly attributeInput: string;
```

- *Type:* string

---

##### `functionInput`<sup>Optional</sup> <a name="functionInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.functionInput"></a>

```typescript
public readonly functionInput: string;
```

- *Type:* string

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.function"></a>

```typescript
public readonly function: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceLevelEventsGoodEventsSelect;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect">ServiceLevelEventsGoodEventsSelect</a>

---


### ServiceLevelEventsOutputReference <a name="ServiceLevelEventsOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.Initializer"></a>

```typescript
import { serviceLevel } from '@cdktf/provider-newrelic'

new serviceLevel.ServiceLevelEventsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putBadEvents">putBadEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putGoodEvents">putGoodEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putValidEvents">putValidEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.resetBadEvents">resetBadEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.resetGoodEvents">resetGoodEvents</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBadEvents` <a name="putBadEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putBadEvents"></a>

```typescript
public putBadEvents(value: ServiceLevelEventsBadEvents): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putBadEvents.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents">ServiceLevelEventsBadEvents</a>

---

##### `putGoodEvents` <a name="putGoodEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putGoodEvents"></a>

```typescript
public putGoodEvents(value: ServiceLevelEventsGoodEvents): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putGoodEvents.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents">ServiceLevelEventsGoodEvents</a>

---

##### `putValidEvents` <a name="putValidEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putValidEvents"></a>

```typescript
public putValidEvents(value: ServiceLevelEventsValidEvents): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putValidEvents.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents">ServiceLevelEventsValidEvents</a>

---

##### `resetBadEvents` <a name="resetBadEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.resetBadEvents"></a>

```typescript
public resetBadEvents(): void
```

##### `resetGoodEvents` <a name="resetGoodEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.resetGoodEvents"></a>

```typescript
public resetGoodEvents(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.badEvents">badEvents</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference">ServiceLevelEventsBadEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.goodEvents">goodEvents</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference">ServiceLevelEventsGoodEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.validEvents">validEvents</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference">ServiceLevelEventsValidEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.badEventsInput">badEventsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents">ServiceLevelEventsBadEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.goodEventsInput">goodEventsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents">ServiceLevelEventsGoodEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.validEventsInput">validEventsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents">ServiceLevelEventsValidEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `badEvents`<sup>Required</sup> <a name="badEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.badEvents"></a>

```typescript
public readonly badEvents: ServiceLevelEventsBadEventsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference">ServiceLevelEventsBadEventsOutputReference</a>

---

##### `goodEvents`<sup>Required</sup> <a name="goodEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.goodEvents"></a>

```typescript
public readonly goodEvents: ServiceLevelEventsGoodEventsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference">ServiceLevelEventsGoodEventsOutputReference</a>

---

##### `validEvents`<sup>Required</sup> <a name="validEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.validEvents"></a>

```typescript
public readonly validEvents: ServiceLevelEventsValidEventsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference">ServiceLevelEventsValidEventsOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `badEventsInput`<sup>Optional</sup> <a name="badEventsInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.badEventsInput"></a>

```typescript
public readonly badEventsInput: ServiceLevelEventsBadEvents;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents">ServiceLevelEventsBadEvents</a>

---

##### `goodEventsInput`<sup>Optional</sup> <a name="goodEventsInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.goodEventsInput"></a>

```typescript
public readonly goodEventsInput: ServiceLevelEventsGoodEvents;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents">ServiceLevelEventsGoodEvents</a>

---

##### `validEventsInput`<sup>Optional</sup> <a name="validEventsInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.validEventsInput"></a>

```typescript
public readonly validEventsInput: ServiceLevelEventsValidEvents;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents">ServiceLevelEventsValidEvents</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceLevelEvents;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a>

---


### ServiceLevelEventsValidEventsOutputReference <a name="ServiceLevelEventsValidEventsOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.Initializer"></a>

```typescript
import { serviceLevel } from '@cdktf/provider-newrelic'

new serviceLevel.ServiceLevelEventsValidEventsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.putSelect">putSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.resetSelect">resetSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.resetWhere">resetWhere</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSelect` <a name="putSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.putSelect"></a>

```typescript
public putSelect(value: ServiceLevelEventsValidEventsSelect): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.putSelect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect">ServiceLevelEventsValidEventsSelect</a>

---

##### `resetSelect` <a name="resetSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.resetSelect"></a>

```typescript
public resetSelect(): void
```

##### `resetWhere` <a name="resetWhere" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.resetWhere"></a>

```typescript
public resetWhere(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.select">select</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference">ServiceLevelEventsValidEventsSelectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.fromInput">fromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.selectInput">selectInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect">ServiceLevelEventsValidEventsSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.whereInput">whereInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.where">where</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents">ServiceLevelEventsValidEvents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `select`<sup>Required</sup> <a name="select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.select"></a>

```typescript
public readonly select: ServiceLevelEventsValidEventsSelectOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference">ServiceLevelEventsValidEventsSelectOutputReference</a>

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.fromInput"></a>

```typescript
public readonly fromInput: string;
```

- *Type:* string

---

##### `selectInput`<sup>Optional</sup> <a name="selectInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.selectInput"></a>

```typescript
public readonly selectInput: ServiceLevelEventsValidEventsSelect;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect">ServiceLevelEventsValidEventsSelect</a>

---

##### `whereInput`<sup>Optional</sup> <a name="whereInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.whereInput"></a>

```typescript
public readonly whereInput: string;
```

- *Type:* string

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `where`<sup>Required</sup> <a name="where" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.where"></a>

```typescript
public readonly where: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceLevelEventsValidEvents;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents">ServiceLevelEventsValidEvents</a>

---


### ServiceLevelEventsValidEventsSelectOutputReference <a name="ServiceLevelEventsValidEventsSelectOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.Initializer"></a>

```typescript
import { serviceLevel } from '@cdktf/provider-newrelic'

new serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.resetAttribute">resetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttribute` <a name="resetAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.resetAttribute"></a>

```typescript
public resetAttribute(): void
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.resetThreshold"></a>

```typescript
public resetThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.attributeInput">attributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.functionInput">functionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.function">function</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect">ServiceLevelEventsValidEventsSelect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.attributeInput"></a>

```typescript
public readonly attributeInput: string;
```

- *Type:* string

---

##### `functionInput`<sup>Optional</sup> <a name="functionInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.functionInput"></a>

```typescript
public readonly functionInput: string;
```

- *Type:* string

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.function"></a>

```typescript
public readonly function: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceLevelEventsValidEventsSelect;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect">ServiceLevelEventsValidEventsSelect</a>

---


### ServiceLevelObjectiveOutputReference <a name="ServiceLevelObjectiveOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.Initializer"></a>

```typescript
import { serviceLevel } from '@cdktf/provider-newrelic'

new serviceLevel.ServiceLevelObjectiveOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.putTimeWindow">putTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTimeWindow` <a name="putTimeWindow" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.putTimeWindow"></a>

```typescript
public putTimeWindow(value: ServiceLevelObjectiveTimeWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.putTimeWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow">ServiceLevelObjectiveTimeWindow</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.timeWindow">timeWindow</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference">ServiceLevelObjectiveTimeWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.targetInput">targetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.timeWindowInput">timeWindowInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow">ServiceLevelObjectiveTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.target">target</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeWindow`<sup>Required</sup> <a name="timeWindow" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.timeWindow"></a>

```typescript
public readonly timeWindow: ServiceLevelObjectiveTimeWindowOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference">ServiceLevelObjectiveTimeWindowOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: number;
```

- *Type:* number

---

##### `timeWindowInput`<sup>Optional</sup> <a name="timeWindowInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.timeWindowInput"></a>

```typescript
public readonly timeWindowInput: ServiceLevelObjectiveTimeWindow;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow">ServiceLevelObjectiveTimeWindow</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.target"></a>

```typescript
public readonly target: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceLevelObjective;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a>

---


### ServiceLevelObjectiveTimeWindowOutputReference <a name="ServiceLevelObjectiveTimeWindowOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.Initializer"></a>

```typescript
import { serviceLevel } from '@cdktf/provider-newrelic'

new serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.putRolling">putRolling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRolling` <a name="putRolling" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.putRolling"></a>

```typescript
public putRolling(value: ServiceLevelObjectiveTimeWindowRolling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.putRolling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling">ServiceLevelObjectiveTimeWindowRolling</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.rolling">rolling</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference">ServiceLevelObjectiveTimeWindowRollingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.rollingInput">rollingInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling">ServiceLevelObjectiveTimeWindowRolling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow">ServiceLevelObjectiveTimeWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rolling`<sup>Required</sup> <a name="rolling" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.rolling"></a>

```typescript
public readonly rolling: ServiceLevelObjectiveTimeWindowRollingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference">ServiceLevelObjectiveTimeWindowRollingOutputReference</a>

---

##### `rollingInput`<sup>Optional</sup> <a name="rollingInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.rollingInput"></a>

```typescript
public readonly rollingInput: ServiceLevelObjectiveTimeWindowRolling;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling">ServiceLevelObjectiveTimeWindowRolling</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceLevelObjectiveTimeWindow;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow">ServiceLevelObjectiveTimeWindow</a>

---


### ServiceLevelObjectiveTimeWindowRollingOutputReference <a name="ServiceLevelObjectiveTimeWindowRollingOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.Initializer"></a>

```typescript
import { serviceLevel } from '@cdktf/provider-newrelic'

new serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling">ServiceLevelObjectiveTimeWindowRolling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceLevelObjectiveTimeWindowRolling;
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling">ServiceLevelObjectiveTimeWindowRolling</a>

---



