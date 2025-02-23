# `alertCondition` Submodule <a name="`alertCondition` Submodule" id="@cdktf/provider-newrelic.alertCondition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertCondition <a name="AlertCondition" id="@cdktf/provider-newrelic.alertCondition.AlertCondition"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/alert_condition newrelic_alert_condition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer"></a>

```typescript
import { alertCondition } from '@cdktf/provider-newrelic'

new alertCondition.AlertCondition(scope: Construct, id: string, config: AlertConditionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig">AlertConditionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig">AlertConditionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.putTerm">putTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetConditionScope">resetConditionScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetGcMetric">resetGcMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetRunbookUrl">resetRunbookUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetUserDefinedMetric">resetUserDefinedMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetUserDefinedValueFunction">resetUserDefinedValueFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetViolationCloseTimer">resetViolationCloseTimer</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTerm` <a name="putTerm" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.putTerm"></a>

```typescript
public putTerm(value: IResolvable | AlertConditionTerm[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.putTerm.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm">AlertConditionTerm</a>[]

---

##### `resetConditionScope` <a name="resetConditionScope" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetConditionScope"></a>

```typescript
public resetConditionScope(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetGcMetric` <a name="resetGcMetric" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetGcMetric"></a>

```typescript
public resetGcMetric(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRunbookUrl` <a name="resetRunbookUrl" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetRunbookUrl"></a>

```typescript
public resetRunbookUrl(): void
```

##### `resetUserDefinedMetric` <a name="resetUserDefinedMetric" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetUserDefinedMetric"></a>

```typescript
public resetUserDefinedMetric(): void
```

##### `resetUserDefinedValueFunction` <a name="resetUserDefinedValueFunction" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetUserDefinedValueFunction"></a>

```typescript
public resetUserDefinedValueFunction(): void
```

##### `resetViolationCloseTimer` <a name="resetViolationCloseTimer" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetViolationCloseTimer"></a>

```typescript
public resetViolationCloseTimer(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AlertCondition resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.isConstruct"></a>

```typescript
import { alertCondition } from '@cdktf/provider-newrelic'

alertCondition.AlertCondition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.isTerraformElement"></a>

```typescript
import { alertCondition } from '@cdktf/provider-newrelic'

alertCondition.AlertCondition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.isTerraformResource"></a>

```typescript
import { alertCondition } from '@cdktf/provider-newrelic'

alertCondition.AlertCondition.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.generateConfigForImport"></a>

```typescript
import { alertCondition } from '@cdktf/provider-newrelic'

alertCondition.AlertCondition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AlertCondition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AlertCondition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AlertCondition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/alert_condition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AlertCondition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.entityGuid">entityGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.term">term</a></code> | <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList">AlertConditionTermList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.conditionScopeInput">conditionScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.entitiesInput">entitiesInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.gcMetricInput">gcMetricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.metricInput">metricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.policyIdInput">policyIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.runbookUrlInput">runbookUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.termInput">termInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm">AlertConditionTerm</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedMetricInput">userDefinedMetricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedValueFunctionInput">userDefinedValueFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.violationCloseTimerInput">violationCloseTimerInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.conditionScope">conditionScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.entities">entities</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.gcMetric">gcMetric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.metric">metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.policyId">policyId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.runbookUrl">runbookUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedMetric">userDefinedMetric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedValueFunction">userDefinedValueFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.violationCloseTimer">violationCloseTimer</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `entityGuid`<sup>Required</sup> <a name="entityGuid" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.entityGuid"></a>

```typescript
public readonly entityGuid: string;
```

- *Type:* string

---

##### `term`<sup>Required</sup> <a name="term" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.term"></a>

```typescript
public readonly term: AlertConditionTermList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList">AlertConditionTermList</a>

---

##### `conditionScopeInput`<sup>Optional</sup> <a name="conditionScopeInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.conditionScopeInput"></a>

```typescript
public readonly conditionScopeInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `entitiesInput`<sup>Optional</sup> <a name="entitiesInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.entitiesInput"></a>

```typescript
public readonly entitiesInput: number[];
```

- *Type:* number[]

---

##### `gcMetricInput`<sup>Optional</sup> <a name="gcMetricInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.gcMetricInput"></a>

```typescript
public readonly gcMetricInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.metricInput"></a>

```typescript
public readonly metricInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: number;
```

- *Type:* number

---

##### `runbookUrlInput`<sup>Optional</sup> <a name="runbookUrlInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.runbookUrlInput"></a>

```typescript
public readonly runbookUrlInput: string;
```

- *Type:* string

---

##### `termInput`<sup>Optional</sup> <a name="termInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.termInput"></a>

```typescript
public readonly termInput: IResolvable | AlertConditionTerm[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm">AlertConditionTerm</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `userDefinedMetricInput`<sup>Optional</sup> <a name="userDefinedMetricInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedMetricInput"></a>

```typescript
public readonly userDefinedMetricInput: string;
```

- *Type:* string

---

##### `userDefinedValueFunctionInput`<sup>Optional</sup> <a name="userDefinedValueFunctionInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedValueFunctionInput"></a>

```typescript
public readonly userDefinedValueFunctionInput: string;
```

- *Type:* string

---

##### `violationCloseTimerInput`<sup>Optional</sup> <a name="violationCloseTimerInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.violationCloseTimerInput"></a>

```typescript
public readonly violationCloseTimerInput: number;
```

- *Type:* number

---

##### `conditionScope`<sup>Required</sup> <a name="conditionScope" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.conditionScope"></a>

```typescript
public readonly conditionScope: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `entities`<sup>Required</sup> <a name="entities" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.entities"></a>

```typescript
public readonly entities: number[];
```

- *Type:* number[]

---

##### `gcMetric`<sup>Required</sup> <a name="gcMetric" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.gcMetric"></a>

```typescript
public readonly gcMetric: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.policyId"></a>

```typescript
public readonly policyId: number;
```

- *Type:* number

---

##### `runbookUrl`<sup>Required</sup> <a name="runbookUrl" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.runbookUrl"></a>

```typescript
public readonly runbookUrl: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `userDefinedMetric`<sup>Required</sup> <a name="userDefinedMetric" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedMetric"></a>

```typescript
public readonly userDefinedMetric: string;
```

- *Type:* string

---

##### `userDefinedValueFunction`<sup>Required</sup> <a name="userDefinedValueFunction" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedValueFunction"></a>

```typescript
public readonly userDefinedValueFunction: string;
```

- *Type:* string

---

##### `violationCloseTimer`<sup>Required</sup> <a name="violationCloseTimer" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.violationCloseTimer"></a>

```typescript
public readonly violationCloseTimer: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AlertConditionConfig <a name="AlertConditionConfig" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.Initializer"></a>

```typescript
import { alertCondition } from '@cdktf/provider-newrelic'

const alertConditionConfig: alertCondition.AlertConditionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.entities">entities</a></code> | <code>number[]</code> | The instance IDs associated with this condition. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.metric">metric</a></code> | <code>string</code> | The metric field accepts parameters based on the type set. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.name">name</a></code> | <code>string</code> | The title of the condition. Must be between 1 and 128 characters, inclusive. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.policyId">policyId</a></code> | <code>number</code> | The ID of the policy where this condition should be used. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.term">term</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm">AlertConditionTerm</a>[]</code> | term block. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.type">type</a></code> | <code>string</code> | The type of condition. One of: (apm_jvm_metric, apm_kt_metric, browser_metric, mobile_metric, servers_metric, apm_app_metric). |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.conditionScope">conditionScope</a></code> | <code>string</code> | One of (application, instance). |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the condition is enabled. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.gcMetric">gcMetric</a></code> | <code>string</code> | A valid Garbage Collection metric e.g. GC/G1 Young Generation. This is required if you are using apm_jvm_metric with gc_cpu_time condition type. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/alert_condition#id AlertCondition#id}. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.runbookUrl">runbookUrl</a></code> | <code>string</code> | Runbook URL to display in notifications. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.userDefinedMetric">userDefinedMetric</a></code> | <code>string</code> | A custom metric to be evaluated. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.userDefinedValueFunction">userDefinedValueFunction</a></code> | <code>string</code> | One of: (average, min, max, total, sample_size, percent, rate). |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.violationCloseTimer">violationCloseTimer</a></code> | <code>number</code> | Automatically close instance-based incidents, including JVM health metric incidents, after the number of hours specified. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `entities`<sup>Required</sup> <a name="entities" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.entities"></a>

```typescript
public readonly entities: number[];
```

- *Type:* number[]

The instance IDs associated with this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/alert_condition#entities AlertCondition#entities}

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

The metric field accepts parameters based on the type set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/alert_condition#metric AlertCondition#metric}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The title of the condition. Must be between 1 and 128 characters, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/alert_condition#name AlertCondition#name}

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.policyId"></a>

```typescript
public readonly policyId: number;
```

- *Type:* number

The ID of the policy where this condition should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/alert_condition#policy_id AlertCondition#policy_id}

---

##### `term`<sup>Required</sup> <a name="term" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.term"></a>

```typescript
public readonly term: IResolvable | AlertConditionTerm[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm">AlertConditionTerm</a>[]

term block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/alert_condition#term AlertCondition#term}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of condition. One of: (apm_jvm_metric, apm_kt_metric, browser_metric, mobile_metric, servers_metric, apm_app_metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/alert_condition#type AlertCondition#type}

---

##### `conditionScope`<sup>Optional</sup> <a name="conditionScope" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.conditionScope"></a>

```typescript
public readonly conditionScope: string;
```

- *Type:* string

One of (application, instance).

Choose application for most scenarios. If you are using the JVM plugin in New Relic, the instance setting allows your condition to trigger for specific app instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/alert_condition#condition_scope AlertCondition#condition_scope}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the condition is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/alert_condition#enabled AlertCondition#enabled}

---

##### `gcMetric`<sup>Optional</sup> <a name="gcMetric" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.gcMetric"></a>

```typescript
public readonly gcMetric: string;
```

- *Type:* string

A valid Garbage Collection metric e.g. GC/G1 Young Generation. This is required if you are using apm_jvm_metric with gc_cpu_time condition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/alert_condition#gc_metric AlertCondition#gc_metric}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/alert_condition#id AlertCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `runbookUrl`<sup>Optional</sup> <a name="runbookUrl" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.runbookUrl"></a>

```typescript
public readonly runbookUrl: string;
```

- *Type:* string

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/alert_condition#runbook_url AlertCondition#runbook_url}

---

##### `userDefinedMetric`<sup>Optional</sup> <a name="userDefinedMetric" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.userDefinedMetric"></a>

```typescript
public readonly userDefinedMetric: string;
```

- *Type:* string

A custom metric to be evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/alert_condition#user_defined_metric AlertCondition#user_defined_metric}

---

##### `userDefinedValueFunction`<sup>Optional</sup> <a name="userDefinedValueFunction" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.userDefinedValueFunction"></a>

```typescript
public readonly userDefinedValueFunction: string;
```

- *Type:* string

One of: (average, min, max, total, sample_size, percent, rate).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/alert_condition#user_defined_value_function AlertCondition#user_defined_value_function}

---

##### `violationCloseTimer`<sup>Optional</sup> <a name="violationCloseTimer" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.violationCloseTimer"></a>

```typescript
public readonly violationCloseTimer: number;
```

- *Type:* number

Automatically close instance-based incidents, including JVM health metric incidents, after the number of hours specified.

Must be between 1 and 720 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/alert_condition#violation_close_timer AlertCondition#violation_close_timer}

---

### AlertConditionTerm <a name="AlertConditionTerm" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTerm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.Initializer"></a>

```typescript
import { alertCondition } from '@cdktf/provider-newrelic'

const alertConditionTerm: alertCondition.AlertConditionTerm = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.duration">duration</a></code> | <code>number</code> | In minutes, must be in the range of 5 to 120, inclusive. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.threshold">threshold</a></code> | <code>number</code> | Must be 0 or greater. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.timeFunction">timeFunction</a></code> | <code>string</code> | One of (all, any). |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.operator">operator</a></code> | <code>string</code> | One of (above, below, equal). Defaults to equal. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.priority">priority</a></code> | <code>string</code> | One of (critical, warning). Defaults to critical. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

In minutes, must be in the range of 5 to 120, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/alert_condition#duration AlertCondition#duration}

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

Must be 0 or greater.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/alert_condition#threshold AlertCondition#threshold}

---

##### `timeFunction`<sup>Required</sup> <a name="timeFunction" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.timeFunction"></a>

```typescript
public readonly timeFunction: string;
```

- *Type:* string

One of (all, any).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/alert_condition#time_function AlertCondition#time_function}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

One of (above, below, equal). Defaults to equal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/alert_condition#operator AlertCondition#operator}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.priority"></a>

```typescript
public readonly priority: string;
```

- *Type:* string

One of (critical, warning). Defaults to critical.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/alert_condition#priority AlertCondition#priority}

---

## Classes <a name="Classes" id="Classes"></a>

### AlertConditionTermList <a name="AlertConditionTermList" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.Initializer"></a>

```typescript
import { alertCondition } from '@cdktf/provider-newrelic'

new alertCondition.AlertConditionTermList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.get"></a>

```typescript
public get(index: number): AlertConditionTermOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm">AlertConditionTerm</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AlertConditionTerm[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm">AlertConditionTerm</a>[]

---


### AlertConditionTermOutputReference <a name="AlertConditionTermOutputReference" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer"></a>

```typescript
import { alertCondition } from '@cdktf/provider-newrelic'

new alertCondition.AlertConditionTermOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.resetPriority">resetPriority</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.durationInput">durationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.priorityInput">priorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.timeFunctionInput">timeFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.duration">duration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.priority">priority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.timeFunction">timeFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm">AlertConditionTerm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: number;
```

- *Type:* number

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: string;
```

- *Type:* string

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `timeFunctionInput`<sup>Optional</sup> <a name="timeFunctionInput" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.timeFunctionInput"></a>

```typescript
public readonly timeFunctionInput: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.priority"></a>

```typescript
public readonly priority: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `timeFunction`<sup>Required</sup> <a name="timeFunction" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.timeFunction"></a>

```typescript
public readonly timeFunction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AlertConditionTerm;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm">AlertConditionTerm</a>

---



