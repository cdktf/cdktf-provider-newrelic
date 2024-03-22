# `notificationDestination` Submodule <a name="`notificationDestination` Submodule" id="@cdktf/provider-newrelic.notificationDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationDestination <a name="NotificationDestination" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.33.0/docs/resources/notification_destination newrelic_notification_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer"></a>

```typescript
import { notificationDestination } from '@cdktf/provider-newrelic'

new notificationDestination.NotificationDestination(scope: Construct, id: string, config: NotificationDestinationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig">NotificationDestinationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig">NotificationDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putAuthBasic">putAuthBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putAuthToken">putAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putProperty">putProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetAuthBasic">resetAuthBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetAuthToken">resetAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthBasic` <a name="putAuthBasic" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putAuthBasic"></a>

```typescript
public putAuthBasic(value: NotificationDestinationAuthBasic): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putAuthBasic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic">NotificationDestinationAuthBasic</a>

---

##### `putAuthToken` <a name="putAuthToken" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putAuthToken"></a>

```typescript
public putAuthToken(value: NotificationDestinationAuthToken): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putAuthToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken">NotificationDestinationAuthToken</a>

---

##### `putProperty` <a name="putProperty" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putProperty"></a>

```typescript
public putProperty(value: IResolvable | NotificationDestinationProperty[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putProperty.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty">NotificationDestinationProperty</a>[]

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetActive` <a name="resetActive" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetActive"></a>

```typescript
public resetActive(): void
```

##### `resetAuthBasic` <a name="resetAuthBasic" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetAuthBasic"></a>

```typescript
public resetAuthBasic(): void
```

##### `resetAuthToken` <a name="resetAuthToken" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetAuthToken"></a>

```typescript
public resetAuthToken(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NotificationDestination resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.isConstruct"></a>

```typescript
import { notificationDestination } from '@cdktf/provider-newrelic'

notificationDestination.NotificationDestination.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.isTerraformElement"></a>

```typescript
import { notificationDestination } from '@cdktf/provider-newrelic'

notificationDestination.NotificationDestination.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.isTerraformResource"></a>

```typescript
import { notificationDestination } from '@cdktf/provider-newrelic'

notificationDestination.NotificationDestination.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.generateConfigForImport"></a>

```typescript
import { notificationDestination } from '@cdktf/provider-newrelic'

notificationDestination.NotificationDestination.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NotificationDestination resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NotificationDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NotificationDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.33.0/docs/resources/notification_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NotificationDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.authBasic">authBasic</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference">NotificationDestinationAuthBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.authToken">authToken</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference">NotificationDestinationAuthTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.guid">guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.lastSent">lastSent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.property">property</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList">NotificationDestinationPropertyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.activeInput">activeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.authBasicInput">authBasicInput</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic">NotificationDestinationAuthBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.authTokenInput">authTokenInput</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken">NotificationDestinationAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.propertyInput">propertyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty">NotificationDestinationProperty</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.active">active</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authBasic`<sup>Required</sup> <a name="authBasic" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.authBasic"></a>

```typescript
public readonly authBasic: NotificationDestinationAuthBasicOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference">NotificationDestinationAuthBasicOutputReference</a>

---

##### `authToken`<sup>Required</sup> <a name="authToken" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.authToken"></a>

```typescript
public readonly authToken: NotificationDestinationAuthTokenOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference">NotificationDestinationAuthTokenOutputReference</a>

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

---

##### `lastSent`<sup>Required</sup> <a name="lastSent" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.lastSent"></a>

```typescript
public readonly lastSent: string;
```

- *Type:* string

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.property"></a>

```typescript
public readonly property: NotificationDestinationPropertyList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList">NotificationDestinationPropertyList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.activeInput"></a>

```typescript
public readonly activeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `authBasicInput`<sup>Optional</sup> <a name="authBasicInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.authBasicInput"></a>

```typescript
public readonly authBasicInput: NotificationDestinationAuthBasic;
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic">NotificationDestinationAuthBasic</a>

---

##### `authTokenInput`<sup>Optional</sup> <a name="authTokenInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.authTokenInput"></a>

```typescript
public readonly authTokenInput: NotificationDestinationAuthToken;
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken">NotificationDestinationAuthToken</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `propertyInput`<sup>Optional</sup> <a name="propertyInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.propertyInput"></a>

```typescript
public readonly propertyInput: IResolvable | NotificationDestinationProperty[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty">NotificationDestinationProperty</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationDestinationAuthBasic <a name="NotificationDestinationAuthBasic" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic.Initializer"></a>

```typescript
import { notificationDestination } from '@cdktf/provider-newrelic'

const notificationDestinationAuthBasic: notificationDestination.NotificationDestinationAuthBasic = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.33.0/docs/resources/notification_destination#password NotificationDestination#password}. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic.property.user">user</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.33.0/docs/resources/notification_destination#user NotificationDestination#user}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.33.0/docs/resources/notification_destination#password NotificationDestination#password}.

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.33.0/docs/resources/notification_destination#user NotificationDestination#user}.

---

### NotificationDestinationAuthToken <a name="NotificationDestinationAuthToken" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken.Initializer"></a>

```typescript
import { notificationDestination } from '@cdktf/provider-newrelic'

const notificationDestinationAuthToken: notificationDestination.NotificationDestinationAuthToken = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken.property.token">token</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.33.0/docs/resources/notification_destination#token NotificationDestination#token}. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.33.0/docs/resources/notification_destination#prefix NotificationDestination#prefix}. |

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.33.0/docs/resources/notification_destination#token NotificationDestination#token}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.33.0/docs/resources/notification_destination#prefix NotificationDestination#prefix}.

---

### NotificationDestinationConfig <a name="NotificationDestinationConfig" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.Initializer"></a>

```typescript
import { notificationDestination } from '@cdktf/provider-newrelic'

const notificationDestinationConfig: notificationDestination.NotificationDestinationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.name">name</a></code> | <code>string</code> | (Required) The name of the destination. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.property">property</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty">NotificationDestinationProperty</a>[]</code> | property block. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.type">type</a></code> | <code>string</code> | (Required) The type of the destination. One of: (WEBHOOK, EMAIL, SERVICE_NOW, PAGERDUTY_ACCOUNT_INTEGRATION, PAGERDUTY_SERVICE_INTEGRATION, JIRA, SLACK, SLACK_COLLABORATION, SLACK_LEGACY, MOBILE_PUSH, EVENT_BRIDGE). |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.accountId">accountId</a></code> | <code>number</code> | The account ID under which to put the destination. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.active">active</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether the destination is active. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.authBasic">authBasic</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic">NotificationDestinationAuthBasic</a></code> | auth_basic block. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.authToken">authToken</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken">NotificationDestinationAuthToken</a></code> | auth_token block. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.33.0/docs/resources/notification_destination#id NotificationDestination#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Required) The name of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.33.0/docs/resources/notification_destination#name NotificationDestination#name}

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.property"></a>

```typescript
public readonly property: IResolvable | NotificationDestinationProperty[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty">NotificationDestinationProperty</a>[]

property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.33.0/docs/resources/notification_destination#property NotificationDestination#property}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

(Required) The type of the destination. One of: (WEBHOOK, EMAIL, SERVICE_NOW, PAGERDUTY_ACCOUNT_INTEGRATION, PAGERDUTY_SERVICE_INTEGRATION, JIRA, SLACK, SLACK_COLLABORATION, SLACK_LEGACY, MOBILE_PUSH, EVENT_BRIDGE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.33.0/docs/resources/notification_destination#type NotificationDestination#type}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The account ID under which to put the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.33.0/docs/resources/notification_destination#account_id NotificationDestination#account_id}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether the destination is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.33.0/docs/resources/notification_destination#active NotificationDestination#active}

---

##### `authBasic`<sup>Optional</sup> <a name="authBasic" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.authBasic"></a>

```typescript
public readonly authBasic: NotificationDestinationAuthBasic;
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic">NotificationDestinationAuthBasic</a>

auth_basic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.33.0/docs/resources/notification_destination#auth_basic NotificationDestination#auth_basic}

---

##### `authToken`<sup>Optional</sup> <a name="authToken" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.authToken"></a>

```typescript
public readonly authToken: NotificationDestinationAuthToken;
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken">NotificationDestinationAuthToken</a>

auth_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.33.0/docs/resources/notification_destination#auth_token NotificationDestination#auth_token}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.33.0/docs/resources/notification_destination#id NotificationDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### NotificationDestinationProperty <a name="NotificationDestinationProperty" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty.Initializer"></a>

```typescript
import { notificationDestination } from '@cdktf/provider-newrelic'

const notificationDestinationProperty: notificationDestination.NotificationDestinationProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty.property.key">key</a></code> | <code>string</code> | Notification property key. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty.property.value">value</a></code> | <code>string</code> | Notification property value. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty.property.displayValue">displayValue</a></code> | <code>string</code> | Notification property display key. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty.property.label">label</a></code> | <code>string</code> | Notification property label. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Notification property key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.33.0/docs/resources/notification_destination#key NotificationDestination#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Notification property value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.33.0/docs/resources/notification_destination#value NotificationDestination#value}

---

##### `displayValue`<sup>Optional</sup> <a name="displayValue" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty.property.displayValue"></a>

```typescript
public readonly displayValue: string;
```

- *Type:* string

Notification property display key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.33.0/docs/resources/notification_destination#display_value NotificationDestination#display_value}

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Notification property label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.33.0/docs/resources/notification_destination#label NotificationDestination#label}

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationDestinationAuthBasicOutputReference <a name="NotificationDestinationAuthBasicOutputReference" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.Initializer"></a>

```typescript
import { notificationDestination } from '@cdktf/provider-newrelic'

new notificationDestination.NotificationDestinationAuthBasicOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic">NotificationDestinationAuthBasic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NotificationDestinationAuthBasic;
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic">NotificationDestinationAuthBasic</a>

---


### NotificationDestinationAuthTokenOutputReference <a name="NotificationDestinationAuthTokenOutputReference" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.Initializer"></a>

```typescript
import { notificationDestination } from '@cdktf/provider-newrelic'

new notificationDestination.NotificationDestinationAuthTokenOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken">NotificationDestinationAuthToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NotificationDestinationAuthToken;
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken">NotificationDestinationAuthToken</a>

---


### NotificationDestinationPropertyList <a name="NotificationDestinationPropertyList" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.Initializer"></a>

```typescript
import { notificationDestination } from '@cdktf/provider-newrelic'

new notificationDestination.NotificationDestinationPropertyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.get"></a>

```typescript
public get(index: number): NotificationDestinationPropertyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty">NotificationDestinationProperty</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NotificationDestinationProperty[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty">NotificationDestinationProperty</a>[]

---


### NotificationDestinationPropertyOutputReference <a name="NotificationDestinationPropertyOutputReference" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.Initializer"></a>

```typescript
import { notificationDestination } from '@cdktf/provider-newrelic'

new notificationDestination.NotificationDestinationPropertyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.resetDisplayValue">resetDisplayValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.resetLabel">resetLabel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayValue` <a name="resetDisplayValue" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.resetDisplayValue"></a>

```typescript
public resetDisplayValue(): void
```

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.resetLabel"></a>

```typescript
public resetLabel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.displayValueInput">displayValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.displayValue">displayValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty">NotificationDestinationProperty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayValueInput`<sup>Optional</sup> <a name="displayValueInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.displayValueInput"></a>

```typescript
public readonly displayValueInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `displayValue`<sup>Required</sup> <a name="displayValue" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.displayValue"></a>

```typescript
public readonly displayValue: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NotificationDestinationProperty;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty">NotificationDestinationProperty</a>

---



