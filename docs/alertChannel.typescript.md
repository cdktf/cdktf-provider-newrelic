# `alertChannel` Submodule <a name="`alertChannel` Submodule" id="@cdktf/provider-newrelic.alertChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertChannel <a name="AlertChannel" id="@cdktf/provider-newrelic.alertChannel.AlertChannel"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/alert_channel newrelic_alert_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer"></a>

```typescript
import { alertChannel } from '@cdktf/provider-newrelic'

new alertChannel.AlertChannel(scope: Construct, id: string, config: AlertChannelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig">AlertChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig">AlertChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.putConfig"></a>

```typescript
public putConfig(value: AlertChannelConfigA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.resetConfig"></a>

```typescript
public resetConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AlertChannel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.isConstruct"></a>

```typescript
import { alertChannel } from '@cdktf/provider-newrelic'

alertChannel.AlertChannel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.isTerraformElement"></a>

```typescript
import { alertChannel } from '@cdktf/provider-newrelic'

alertChannel.AlertChannel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.isTerraformResource"></a>

```typescript
import { alertChannel } from '@cdktf/provider-newrelic'

alertChannel.AlertChannel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.generateConfigForImport"></a>

```typescript
import { alertChannel } from '@cdktf/provider-newrelic'

alertChannel.AlertChannel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AlertChannel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AlertChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AlertChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/alert_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AlertChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference">AlertChannelConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.config"></a>

```typescript
public readonly config: AlertChannelConfigAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference">AlertChannelConfigAOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.configInput"></a>

```typescript
public readonly configInput: AlertChannelConfigA;
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AlertChannelConfig <a name="AlertChannelConfig" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.Initializer"></a>

```typescript
import { alertChannel } from '@cdktf/provider-newrelic'

const alertChannelConfig: alertChannel.AlertChannelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.name">name</a></code> | <code>string</code> | (Required) The name of the channel. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.type">type</a></code> | <code>string</code> | (Required) The type of channel. One of: (pagerduty, slack, user, victorops, webhook, email, opsgenie). |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.accountId">accountId</a></code> | <code>number</code> | The New Relic account ID where you want to create alert channels. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/alert_channel#id AlertChannel#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Required) The name of the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/alert_channel#name AlertChannel#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

(Required) The type of channel. One of: (pagerduty, slack, user, victorops, webhook, email, opsgenie).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/alert_channel#type AlertChannel#type}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The New Relic account ID where you want to create alert channels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/alert_channel#account_id AlertChannel#account_id}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.config"></a>

```typescript
public readonly config: AlertChannelConfigA;
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/alert_channel#config AlertChannel#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/alert_channel#id AlertChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AlertChannelConfigA <a name="AlertChannelConfigA" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.Initializer"></a>

```typescript
import { alertChannel } from '@cdktf/provider-newrelic'

const alertChannelConfigA: alertChannel.AlertChannelConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.apiKey">apiKey</a></code> | <code>string</code> | The API key for integrating with OpsGenie. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.authPassword">authPassword</a></code> | <code>string</code> | Specifies an authentication password for use with a channel. Supported by the webhook channel type. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.authType">authType</a></code> | <code>string</code> | Specifies an authentication method for use with a channel. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.authUsername">authUsername</a></code> | <code>string</code> | Specifies an authentication username for use with a channel. Supported by the webhook channel type. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.baseUrl">baseUrl</a></code> | <code>string</code> | The base URL of the webhook destination. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.channel">channel</a></code> | <code>string</code> | The Slack channel to send notifications to. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.headers">headers</a></code> | <code>{[ key: string ]: string}</code> | A map of key/value pairs that represents extra HTTP headers to be sent along with the webhook payload. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.headersString">headersString</a></code> | <code>string</code> | Use instead of headers if the desired payload is more complex than a list of key/value pairs (e.g. a set of headers that makes use of nested objects). The value provided should be a valid JSON string with escaped double quotes. Conflicts with headers. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.includeJsonAttachment">includeJsonAttachment</a></code> | <code>string</code> | true or false. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.key">key</a></code> | <code>string</code> | The key for integrating with VictorOps. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.payload">payload</a></code> | <code>{[ key: string ]: string}</code> | A map of key/value pairs that represents the webhook payload. Must provide payload_type if setting this argument. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.payloadString">payloadString</a></code> | <code>string</code> | Use instead of payload if the desired payload is more complex than a list of key/value pairs (e.g. a payload that makes use of nested objects). The value provided should be a valid JSON string with escaped double quotes. Conflicts with payload. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.payloadType">payloadType</a></code> | <code>string</code> | Can either be application/json or application/x-www-form-urlencoded. The payload_type argument is required if payload is set. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.recipients">recipients</a></code> | <code>string</code> | A set of recipients for targeting notifications. Multiple values are comma separated. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.region">region</a></code> | <code>string</code> | The data center region to store your data. Valid values are US and EU. Default is US. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.routeKey">routeKey</a></code> | <code>string</code> | The route key for integrating with VictorOps. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.serviceKey">serviceKey</a></code> | <code>string</code> | Specifies the service key for integrating with Pagerduty. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.tags">tags</a></code> | <code>string</code> | A set of tags for targeting notifications. Multiple values are comma separated. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.teams">teams</a></code> | <code>string</code> | A set of teams for targeting notifications. Multiple values are comma separated. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.url">url</a></code> | <code>string</code> | Your organization's Slack URL. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.userId">userId</a></code> | <code>string</code> | The user ID for use with the user channel type. |

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

The API key for integrating with OpsGenie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/alert_channel#api_key AlertChannel#api_key}

---

##### `authPassword`<sup>Optional</sup> <a name="authPassword" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.authPassword"></a>

```typescript
public readonly authPassword: string;
```

- *Type:* string

Specifies an authentication password for use with a channel. Supported by the webhook channel type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/alert_channel#auth_password AlertChannel#auth_password}

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

Specifies an authentication method for use with a channel.

Supported by the webhook channel type. Only HTTP basic authentication is currently supported via the value BASIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/alert_channel#auth_type AlertChannel#auth_type}

---

##### `authUsername`<sup>Optional</sup> <a name="authUsername" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.authUsername"></a>

```typescript
public readonly authUsername: string;
```

- *Type:* string

Specifies an authentication username for use with a channel. Supported by the webhook channel type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/alert_channel#auth_username AlertChannel#auth_username}

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* string

The base URL of the webhook destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/alert_channel#base_url AlertChannel#base_url}

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

The Slack channel to send notifications to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/alert_channel#channel AlertChannel#channel}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of key/value pairs that represents extra HTTP headers to be sent along with the webhook payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/alert_channel#headers AlertChannel#headers}

---

##### `headersString`<sup>Optional</sup> <a name="headersString" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.headersString"></a>

```typescript
public readonly headersString: string;
```

- *Type:* string

Use instead of headers if the desired payload is more complex than a list of key/value pairs (e.g. a set of headers that makes use of nested objects). The value provided should be a valid JSON string with escaped double quotes. Conflicts with headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/alert_channel#headers_string AlertChannel#headers_string}

---

##### `includeJsonAttachment`<sup>Optional</sup> <a name="includeJsonAttachment" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.includeJsonAttachment"></a>

```typescript
public readonly includeJsonAttachment: string;
```

- *Type:* string

true or false.

Flag for whether or not to attach a JSON document containing information about the associated alert to the email that is sent to recipients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/alert_channel#include_json_attachment AlertChannel#include_json_attachment}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key for integrating with VictorOps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/alert_channel#key AlertChannel#key}

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.payload"></a>

```typescript
public readonly payload: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of key/value pairs that represents the webhook payload. Must provide payload_type if setting this argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/alert_channel#payload AlertChannel#payload}

---

##### `payloadString`<sup>Optional</sup> <a name="payloadString" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.payloadString"></a>

```typescript
public readonly payloadString: string;
```

- *Type:* string

Use instead of payload if the desired payload is more complex than a list of key/value pairs (e.g. a payload that makes use of nested objects). The value provided should be a valid JSON string with escaped double quotes. Conflicts with payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/alert_channel#payload_string AlertChannel#payload_string}

---

##### `payloadType`<sup>Optional</sup> <a name="payloadType" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.payloadType"></a>

```typescript
public readonly payloadType: string;
```

- *Type:* string

Can either be application/json or application/x-www-form-urlencoded. The payload_type argument is required if payload is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/alert_channel#payload_type AlertChannel#payload_type}

---

##### `recipients`<sup>Optional</sup> <a name="recipients" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.recipients"></a>

```typescript
public readonly recipients: string;
```

- *Type:* string

A set of recipients for targeting notifications. Multiple values are comma separated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/alert_channel#recipients AlertChannel#recipients}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The data center region to store your data. Valid values are US and EU. Default is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/alert_channel#region AlertChannel#region}

---

##### `routeKey`<sup>Optional</sup> <a name="routeKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.routeKey"></a>

```typescript
public readonly routeKey: string;
```

- *Type:* string

The route key for integrating with VictorOps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/alert_channel#route_key AlertChannel#route_key}

---

##### `serviceKey`<sup>Optional</sup> <a name="serviceKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.serviceKey"></a>

```typescript
public readonly serviceKey: string;
```

- *Type:* string

Specifies the service key for integrating with Pagerduty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/alert_channel#service_key AlertChannel#service_key}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.tags"></a>

```typescript
public readonly tags: string;
```

- *Type:* string

A set of tags for targeting notifications. Multiple values are comma separated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/alert_channel#tags AlertChannel#tags}

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.teams"></a>

```typescript
public readonly teams: string;
```

- *Type:* string

A set of teams for targeting notifications. Multiple values are comma separated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/alert_channel#teams AlertChannel#teams}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Your organization's Slack URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/alert_channel#url AlertChannel#url}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

The user ID for use with the user channel type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/alert_channel#user_id AlertChannel#user_id}

---

## Classes <a name="Classes" id="Classes"></a>

### AlertChannelConfigAOutputReference <a name="AlertChannelConfigAOutputReference" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.Initializer"></a>

```typescript
import { alertChannel } from '@cdktf/provider-newrelic'

new alertChannel.AlertChannelConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetAuthPassword">resetAuthPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetAuthType">resetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetAuthUsername">resetAuthUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetBaseUrl">resetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetChannel">resetChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetHeadersString">resetHeadersString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetIncludeJsonAttachment">resetIncludeJsonAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetPayload">resetPayload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetPayloadString">resetPayloadString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetPayloadType">resetPayloadType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetRecipients">resetRecipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetRouteKey">resetRouteKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetServiceKey">resetServiceKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetTeams">resetTeams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetUserId">resetUserId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiKey` <a name="resetApiKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetApiKey"></a>

```typescript
public resetApiKey(): void
```

##### `resetAuthPassword` <a name="resetAuthPassword" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetAuthPassword"></a>

```typescript
public resetAuthPassword(): void
```

##### `resetAuthType` <a name="resetAuthType" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetAuthType"></a>

```typescript
public resetAuthType(): void
```

##### `resetAuthUsername` <a name="resetAuthUsername" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetAuthUsername"></a>

```typescript
public resetAuthUsername(): void
```

##### `resetBaseUrl` <a name="resetBaseUrl" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetBaseUrl"></a>

```typescript
public resetBaseUrl(): void
```

##### `resetChannel` <a name="resetChannel" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetChannel"></a>

```typescript
public resetChannel(): void
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetHeadersString` <a name="resetHeadersString" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetHeadersString"></a>

```typescript
public resetHeadersString(): void
```

##### `resetIncludeJsonAttachment` <a name="resetIncludeJsonAttachment" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetIncludeJsonAttachment"></a>

```typescript
public resetIncludeJsonAttachment(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetPayload` <a name="resetPayload" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetPayload"></a>

```typescript
public resetPayload(): void
```

##### `resetPayloadString` <a name="resetPayloadString" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetPayloadString"></a>

```typescript
public resetPayloadString(): void
```

##### `resetPayloadType` <a name="resetPayloadType" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetPayloadType"></a>

```typescript
public resetPayloadType(): void
```

##### `resetRecipients` <a name="resetRecipients" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetRecipients"></a>

```typescript
public resetRecipients(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRouteKey` <a name="resetRouteKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetRouteKey"></a>

```typescript
public resetRouteKey(): void
```

##### `resetServiceKey` <a name="resetServiceKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetServiceKey"></a>

```typescript
public resetServiceKey(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTeams` <a name="resetTeams" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetTeams"></a>

```typescript
public resetTeams(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```

##### `resetUserId` <a name="resetUserId" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetUserId"></a>

```typescript
public resetUserId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authPasswordInput">authPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authUsernameInput">authUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.baseUrlInput">baseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.channelInput">channelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headersInput">headersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headersStringInput">headersStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.includeJsonAttachmentInput">includeJsonAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadInput">payloadInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadStringInput">payloadStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadTypeInput">payloadTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.recipientsInput">recipientsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.routeKeyInput">routeKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.serviceKeyInput">serviceKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.tagsInput">tagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.teamsInput">teamsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.userIdInput">userIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authPassword">authPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authUsername">authUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.baseUrl">baseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.channel">channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headers">headers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headersString">headersString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.includeJsonAttachment">includeJsonAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payload">payload</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadString">payloadString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadType">payloadType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.recipients">recipients</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.routeKey">routeKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.serviceKey">serviceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.tags">tags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.teams">teams</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.apiKeyInput"></a>

```typescript
public readonly apiKeyInput: string;
```

- *Type:* string

---

##### `authPasswordInput`<sup>Optional</sup> <a name="authPasswordInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authPasswordInput"></a>

```typescript
public readonly authPasswordInput: string;
```

- *Type:* string

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authTypeInput"></a>

```typescript
public readonly authTypeInput: string;
```

- *Type:* string

---

##### `authUsernameInput`<sup>Optional</sup> <a name="authUsernameInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authUsernameInput"></a>

```typescript
public readonly authUsernameInput: string;
```

- *Type:* string

---

##### `baseUrlInput`<sup>Optional</sup> <a name="baseUrlInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.baseUrlInput"></a>

```typescript
public readonly baseUrlInput: string;
```

- *Type:* string

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.channelInput"></a>

```typescript
public readonly channelInput: string;
```

- *Type:* string

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `headersStringInput`<sup>Optional</sup> <a name="headersStringInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headersStringInput"></a>

```typescript
public readonly headersStringInput: string;
```

- *Type:* string

---

##### `includeJsonAttachmentInput`<sup>Optional</sup> <a name="includeJsonAttachmentInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.includeJsonAttachmentInput"></a>

```typescript
public readonly includeJsonAttachmentInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadInput"></a>

```typescript
public readonly payloadInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `payloadStringInput`<sup>Optional</sup> <a name="payloadStringInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadStringInput"></a>

```typescript
public readonly payloadStringInput: string;
```

- *Type:* string

---

##### `payloadTypeInput`<sup>Optional</sup> <a name="payloadTypeInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadTypeInput"></a>

```typescript
public readonly payloadTypeInput: string;
```

- *Type:* string

---

##### `recipientsInput`<sup>Optional</sup> <a name="recipientsInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.recipientsInput"></a>

```typescript
public readonly recipientsInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `routeKeyInput`<sup>Optional</sup> <a name="routeKeyInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.routeKeyInput"></a>

```typescript
public readonly routeKeyInput: string;
```

- *Type:* string

---

##### `serviceKeyInput`<sup>Optional</sup> <a name="serviceKeyInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.serviceKeyInput"></a>

```typescript
public readonly serviceKeyInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: string;
```

- *Type:* string

---

##### `teamsInput`<sup>Optional</sup> <a name="teamsInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.teamsInput"></a>

```typescript
public readonly teamsInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `authPassword`<sup>Required</sup> <a name="authPassword" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authPassword"></a>

```typescript
public readonly authPassword: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `authUsername`<sup>Required</sup> <a name="authUsername" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authUsername"></a>

```typescript
public readonly authUsername: string;
```

- *Type:* string

---

##### `baseUrl`<sup>Required</sup> <a name="baseUrl" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* string

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `headersString`<sup>Required</sup> <a name="headersString" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headersString"></a>

```typescript
public readonly headersString: string;
```

- *Type:* string

---

##### `includeJsonAttachment`<sup>Required</sup> <a name="includeJsonAttachment" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.includeJsonAttachment"></a>

```typescript
public readonly includeJsonAttachment: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payload"></a>

```typescript
public readonly payload: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `payloadString`<sup>Required</sup> <a name="payloadString" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadString"></a>

```typescript
public readonly payloadString: string;
```

- *Type:* string

---

##### `payloadType`<sup>Required</sup> <a name="payloadType" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadType"></a>

```typescript
public readonly payloadType: string;
```

- *Type:* string

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.recipients"></a>

```typescript
public readonly recipients: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `routeKey`<sup>Required</sup> <a name="routeKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.routeKey"></a>

```typescript
public readonly routeKey: string;
```

- *Type:* string

---

##### `serviceKey`<sup>Required</sup> <a name="serviceKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.serviceKey"></a>

```typescript
public readonly serviceKey: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.tags"></a>

```typescript
public readonly tags: string;
```

- *Type:* string

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.teams"></a>

```typescript
public readonly teams: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AlertChannelConfigA;
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a>

---



