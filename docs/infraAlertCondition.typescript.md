# `infraAlertCondition` Submodule <a name="`infraAlertCondition` Submodule" id="@cdktf/provider-newrelic.infraAlertCondition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InfraAlertCondition <a name="InfraAlertCondition" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/infra_alert_condition newrelic_infra_alert_condition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer"></a>

```typescript
import { infraAlertCondition } from '@cdktf/provider-newrelic'

new infraAlertCondition.InfraAlertCondition(scope: Construct, id: string, config: InfraAlertConditionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig">InfraAlertConditionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig">InfraAlertConditionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.putCritical">putCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.putWarning">putWarning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetComparison">resetComparison</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetCritical">resetCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetEvent">resetEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetIntegrationProvider">resetIntegrationProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetProcessWhere">resetProcessWhere</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetRunbookUrl">resetRunbookUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetSelect">resetSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetViolationCloseTimer">resetViolationCloseTimer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetWarning">resetWarning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetWhere">resetWhere</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCritical` <a name="putCritical" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.putCritical"></a>

```typescript
public putCritical(value: InfraAlertConditionCritical): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.putCritical.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a>

---

##### `putWarning` <a name="putWarning" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.putWarning"></a>

```typescript
public putWarning(value: InfraAlertConditionWarning): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.putWarning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a>

---

##### `resetComparison` <a name="resetComparison" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetComparison"></a>

```typescript
public resetComparison(): void
```

##### `resetCritical` <a name="resetCritical" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetCritical"></a>

```typescript
public resetCritical(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetEvent` <a name="resetEvent" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetEvent"></a>

```typescript
public resetEvent(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIntegrationProvider` <a name="resetIntegrationProvider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetIntegrationProvider"></a>

```typescript
public resetIntegrationProvider(): void
```

##### `resetProcessWhere` <a name="resetProcessWhere" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetProcessWhere"></a>

```typescript
public resetProcessWhere(): void
```

##### `resetRunbookUrl` <a name="resetRunbookUrl" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetRunbookUrl"></a>

```typescript
public resetRunbookUrl(): void
```

##### `resetSelect` <a name="resetSelect" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetSelect"></a>

```typescript
public resetSelect(): void
```

##### `resetViolationCloseTimer` <a name="resetViolationCloseTimer" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetViolationCloseTimer"></a>

```typescript
public resetViolationCloseTimer(): void
```

##### `resetWarning` <a name="resetWarning" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetWarning"></a>

```typescript
public resetWarning(): void
```

##### `resetWhere` <a name="resetWhere" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetWhere"></a>

```typescript
public resetWhere(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a InfraAlertCondition resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isConstruct"></a>

```typescript
import { infraAlertCondition } from '@cdktf/provider-newrelic'

infraAlertCondition.InfraAlertCondition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isTerraformElement"></a>

```typescript
import { infraAlertCondition } from '@cdktf/provider-newrelic'

infraAlertCondition.InfraAlertCondition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isTerraformResource"></a>

```typescript
import { infraAlertCondition } from '@cdktf/provider-newrelic'

infraAlertCondition.InfraAlertCondition.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.generateConfigForImport"></a>

```typescript
import { infraAlertCondition } from '@cdktf/provider-newrelic'

infraAlertCondition.InfraAlertCondition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a InfraAlertCondition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the InfraAlertCondition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing InfraAlertCondition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/infra_alert_condition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the InfraAlertCondition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.createdAt">createdAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.critical">critical</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference">InfraAlertConditionCriticalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.entityGuid">entityGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.updatedAt">updatedAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.warning">warning</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference">InfraAlertConditionWarningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.comparisonInput">comparisonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.criticalInput">criticalInput</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.eventInput">eventInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.integrationProviderInput">integrationProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.policyIdInput">policyIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.processWhereInput">processWhereInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.runbookUrlInput">runbookUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.selectInput">selectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.violationCloseTimerInput">violationCloseTimerInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.warningInput">warningInput</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.whereInput">whereInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.comparison">comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.event">event</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.integrationProvider">integrationProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.policyId">policyId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.processWhere">processWhere</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.runbookUrl">runbookUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.select">select</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.violationCloseTimer">violationCloseTimer</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.where">where</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.createdAt"></a>

```typescript
public readonly createdAt: number;
```

- *Type:* number

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.critical"></a>

```typescript
public readonly critical: InfraAlertConditionCriticalOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference">InfraAlertConditionCriticalOutputReference</a>

---

##### `entityGuid`<sup>Required</sup> <a name="entityGuid" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.entityGuid"></a>

```typescript
public readonly entityGuid: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.updatedAt"></a>

```typescript
public readonly updatedAt: number;
```

- *Type:* number

---

##### `warning`<sup>Required</sup> <a name="warning" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.warning"></a>

```typescript
public readonly warning: InfraAlertConditionWarningOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference">InfraAlertConditionWarningOutputReference</a>

---

##### `comparisonInput`<sup>Optional</sup> <a name="comparisonInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.comparisonInput"></a>

```typescript
public readonly comparisonInput: string;
```

- *Type:* string

---

##### `criticalInput`<sup>Optional</sup> <a name="criticalInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.criticalInput"></a>

```typescript
public readonly criticalInput: InfraAlertConditionCritical;
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `eventInput`<sup>Optional</sup> <a name="eventInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.eventInput"></a>

```typescript
public readonly eventInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `integrationProviderInput`<sup>Optional</sup> <a name="integrationProviderInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.integrationProviderInput"></a>

```typescript
public readonly integrationProviderInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: number;
```

- *Type:* number

---

##### `processWhereInput`<sup>Optional</sup> <a name="processWhereInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.processWhereInput"></a>

```typescript
public readonly processWhereInput: string;
```

- *Type:* string

---

##### `runbookUrlInput`<sup>Optional</sup> <a name="runbookUrlInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.runbookUrlInput"></a>

```typescript
public readonly runbookUrlInput: string;
```

- *Type:* string

---

##### `selectInput`<sup>Optional</sup> <a name="selectInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.selectInput"></a>

```typescript
public readonly selectInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `violationCloseTimerInput`<sup>Optional</sup> <a name="violationCloseTimerInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.violationCloseTimerInput"></a>

```typescript
public readonly violationCloseTimerInput: number;
```

- *Type:* number

---

##### `warningInput`<sup>Optional</sup> <a name="warningInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.warningInput"></a>

```typescript
public readonly warningInput: InfraAlertConditionWarning;
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a>

---

##### `whereInput`<sup>Optional</sup> <a name="whereInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.whereInput"></a>

```typescript
public readonly whereInput: string;
```

- *Type:* string

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.event"></a>

```typescript
public readonly event: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `integrationProvider`<sup>Required</sup> <a name="integrationProvider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.integrationProvider"></a>

```typescript
public readonly integrationProvider: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.policyId"></a>

```typescript
public readonly policyId: number;
```

- *Type:* number

---

##### `processWhere`<sup>Required</sup> <a name="processWhere" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.processWhere"></a>

```typescript
public readonly processWhere: string;
```

- *Type:* string

---

##### `runbookUrl`<sup>Required</sup> <a name="runbookUrl" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.runbookUrl"></a>

```typescript
public readonly runbookUrl: string;
```

- *Type:* string

---

##### `select`<sup>Required</sup> <a name="select" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.select"></a>

```typescript
public readonly select: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `violationCloseTimer`<sup>Required</sup> <a name="violationCloseTimer" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.violationCloseTimer"></a>

```typescript
public readonly violationCloseTimer: number;
```

- *Type:* number

---

##### `where`<sup>Required</sup> <a name="where" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.where"></a>

```typescript
public readonly where: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### InfraAlertConditionConfig <a name="InfraAlertConditionConfig" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.Initializer"></a>

```typescript
import { infraAlertCondition } from '@cdktf/provider-newrelic'

const infraAlertConditionConfig: infraAlertCondition.InfraAlertConditionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.name">name</a></code> | <code>string</code> | The Infrastructure alert condition's name. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.policyId">policyId</a></code> | <code>number</code> | The ID of the alert policy where this condition should be used. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.type">type</a></code> | <code>string</code> | The type of Infrastructure alert condition. Valid values are infra_process_running, infra_metric, and infra_host_not_reporting. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.comparison">comparison</a></code> | <code>string</code> | The operator used to evaluate the threshold value. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.critical">critical</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a></code> | critical block. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.description">description</a></code> | <code>string</code> | The description of the Infrastructure alert condition. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the condition is turned on or off. Valid values are true and false. Defaults to true. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.event">event</a></code> | <code>string</code> | The metric event; for example, SystemSample or StorageSample. Supported by the infra_metric condition type. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/infra_alert_condition#id InfraAlertCondition#id}. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.integrationProvider">integrationProvider</a></code> | <code>string</code> | For alerts on integrations, use this instead of event. Supported by the infra_metric condition type. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.processWhere">processWhere</a></code> | <code>string</code> | Any filters applied to processes; for example: commandName = 'java'. Supported by the infra_process_running condition type. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.runbookUrl">runbookUrl</a></code> | <code>string</code> | Runbook URL to display in notifications. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.select">select</a></code> | <code>string</code> | The attribute name to identify the metric being targeted; |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.violationCloseTimer">violationCloseTimer</a></code> | <code>number</code> | Determines how much time, in hours, will pass before an incident is automatically closed. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.warning">warning</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a></code> | warning block. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.where">where</a></code> | <code>string</code> | If applicable, this identifies any Infrastructure host filters used; for example: hostname LIKE '%cassandra%'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Infrastructure alert condition's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/infra_alert_condition#name InfraAlertCondition#name}

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.policyId"></a>

```typescript
public readonly policyId: number;
```

- *Type:* number

The ID of the alert policy where this condition should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/infra_alert_condition#policy_id InfraAlertCondition#policy_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of Infrastructure alert condition. Valid values are infra_process_running, infra_metric, and infra_host_not_reporting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/infra_alert_condition#type InfraAlertCondition#type}

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

The operator used to evaluate the threshold value.

Valid values are above, below, and equal. Supported by the infra_metric and infra_process_running condition types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/infra_alert_condition#comparison InfraAlertCondition#comparison}

---

##### `critical`<sup>Optional</sup> <a name="critical" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.critical"></a>

```typescript
public readonly critical: InfraAlertConditionCritical;
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a>

critical block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/infra_alert_condition#critical InfraAlertCondition#critical}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the Infrastructure alert condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/infra_alert_condition#description InfraAlertCondition#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the condition is turned on or off. Valid values are true and false. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/infra_alert_condition#enabled InfraAlertCondition#enabled}

---

##### `event`<sup>Optional</sup> <a name="event" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.event"></a>

```typescript
public readonly event: string;
```

- *Type:* string

The metric event; for example, SystemSample or StorageSample. Supported by the infra_metric condition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/infra_alert_condition#event InfraAlertCondition#event}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/infra_alert_condition#id InfraAlertCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationProvider`<sup>Optional</sup> <a name="integrationProvider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.integrationProvider"></a>

```typescript
public readonly integrationProvider: string;
```

- *Type:* string

For alerts on integrations, use this instead of event. Supported by the infra_metric condition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/infra_alert_condition#integration_provider InfraAlertCondition#integration_provider}

---

##### `processWhere`<sup>Optional</sup> <a name="processWhere" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.processWhere"></a>

```typescript
public readonly processWhere: string;
```

- *Type:* string

Any filters applied to processes; for example: commandName = 'java'. Supported by the infra_process_running condition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/infra_alert_condition#process_where InfraAlertCondition#process_where}

---

##### `runbookUrl`<sup>Optional</sup> <a name="runbookUrl" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.runbookUrl"></a>

```typescript
public readonly runbookUrl: string;
```

- *Type:* string

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/infra_alert_condition#runbook_url InfraAlertCondition#runbook_url}

---

##### `select`<sup>Optional</sup> <a name="select" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.select"></a>

```typescript
public readonly select: string;
```

- *Type:* string

The attribute name to identify the metric being targeted;

for example, cpuPercent, diskFreePercent, or memoryResidentSizeBytes. The underlying API will automatically populate this value for Infrastructure integrations (for example diskFreePercent), so make sure to explicitly include this value to avoid diff issues. Supported by the infra_metric condition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/infra_alert_condition#select InfraAlertCondition#select}

---

##### `violationCloseTimer`<sup>Optional</sup> <a name="violationCloseTimer" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.violationCloseTimer"></a>

```typescript
public readonly violationCloseTimer: number;
```

- *Type:* number

Determines how much time, in hours, will pass before an incident is automatically closed.

Valid values are 1, 2, 4, 8, 12, 24, 48, or 72

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/infra_alert_condition#violation_close_timer InfraAlertCondition#violation_close_timer}

---

##### `warning`<sup>Optional</sup> <a name="warning" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.warning"></a>

```typescript
public readonly warning: InfraAlertConditionWarning;
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a>

warning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/infra_alert_condition#warning InfraAlertCondition#warning}

---

##### `where`<sup>Optional</sup> <a name="where" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.where"></a>

```typescript
public readonly where: string;
```

- *Type:* string

If applicable, this identifies any Infrastructure host filters used; for example: hostname LIKE '%cassandra%'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/infra_alert_condition#where InfraAlertCondition#where}

---

### InfraAlertConditionCritical <a name="InfraAlertConditionCritical" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical.Initializer"></a>

```typescript
import { infraAlertCondition } from '@cdktf/provider-newrelic'

const infraAlertConditionCritical: infraAlertCondition.InfraAlertConditionCritical = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical.property.duration">duration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/infra_alert_condition#duration InfraAlertCondition#duration}. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical.property.timeFunction">timeFunction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/infra_alert_condition#time_function InfraAlertCondition#time_function}. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/infra_alert_condition#value InfraAlertCondition#value}. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/infra_alert_condition#duration InfraAlertCondition#duration}.

---

##### `timeFunction`<sup>Optional</sup> <a name="timeFunction" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical.property.timeFunction"></a>

```typescript
public readonly timeFunction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/infra_alert_condition#time_function InfraAlertCondition#time_function}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/infra_alert_condition#value InfraAlertCondition#value}.

---

### InfraAlertConditionWarning <a name="InfraAlertConditionWarning" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning.Initializer"></a>

```typescript
import { infraAlertCondition } from '@cdktf/provider-newrelic'

const infraAlertConditionWarning: infraAlertCondition.InfraAlertConditionWarning = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning.property.duration">duration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/infra_alert_condition#duration InfraAlertCondition#duration}. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning.property.timeFunction">timeFunction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/infra_alert_condition#time_function InfraAlertCondition#time_function}. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/infra_alert_condition#value InfraAlertCondition#value}. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/infra_alert_condition#duration InfraAlertCondition#duration}.

---

##### `timeFunction`<sup>Optional</sup> <a name="timeFunction" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning.property.timeFunction"></a>

```typescript
public readonly timeFunction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/infra_alert_condition#time_function InfraAlertCondition#time_function}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/infra_alert_condition#value InfraAlertCondition#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### InfraAlertConditionCriticalOutputReference <a name="InfraAlertConditionCriticalOutputReference" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.Initializer"></a>

```typescript
import { infraAlertCondition } from '@cdktf/provider-newrelic'

new infraAlertCondition.InfraAlertConditionCriticalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.resetTimeFunction">resetTimeFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimeFunction` <a name="resetTimeFunction" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.resetTimeFunction"></a>

```typescript
public resetTimeFunction(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.durationInput">durationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.timeFunctionInput">timeFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.duration">duration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.timeFunction">timeFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: number;
```

- *Type:* number

---

##### `timeFunctionInput`<sup>Optional</sup> <a name="timeFunctionInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.timeFunctionInput"></a>

```typescript
public readonly timeFunctionInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

---

##### `timeFunction`<sup>Required</sup> <a name="timeFunction" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.timeFunction"></a>

```typescript
public readonly timeFunction: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: InfraAlertConditionCritical;
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a>

---


### InfraAlertConditionWarningOutputReference <a name="InfraAlertConditionWarningOutputReference" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.Initializer"></a>

```typescript
import { infraAlertCondition } from '@cdktf/provider-newrelic'

new infraAlertCondition.InfraAlertConditionWarningOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.resetTimeFunction">resetTimeFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimeFunction` <a name="resetTimeFunction" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.resetTimeFunction"></a>

```typescript
public resetTimeFunction(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.durationInput">durationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.timeFunctionInput">timeFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.duration">duration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.timeFunction">timeFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: number;
```

- *Type:* number

---

##### `timeFunctionInput`<sup>Optional</sup> <a name="timeFunctionInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.timeFunctionInput"></a>

```typescript
public readonly timeFunctionInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

---

##### `timeFunction`<sup>Required</sup> <a name="timeFunction" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.timeFunction"></a>

```typescript
public readonly timeFunction: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: InfraAlertConditionWarning;
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a>

---



