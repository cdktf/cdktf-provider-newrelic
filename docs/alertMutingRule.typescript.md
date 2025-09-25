# `alertMutingRule` Submodule <a name="`alertMutingRule` Submodule" id="@cdktf/provider-newrelic.alertMutingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertMutingRule <a name="AlertMutingRule" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/alert_muting_rule newrelic_alert_muting_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer"></a>

```typescript
import { alertMutingRule } from '@cdktf/provider-newrelic'

new alertMutingRule.AlertMutingRule(scope: Construct, id: string, config: AlertMutingRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig">AlertMutingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig">AlertMutingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetActionOnMutingRuleWindowEnded">resetActionOnMutingRuleWindowEnded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetSchedule">resetSchedule</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.putCondition"></a>

```typescript
public putCondition(value: AlertMutingRuleCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition">AlertMutingRuleCondition</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.putSchedule"></a>

```typescript
public putSchedule(value: AlertMutingRuleSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule">AlertMutingRuleSchedule</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetActionOnMutingRuleWindowEnded` <a name="resetActionOnMutingRuleWindowEnded" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetActionOnMutingRuleWindowEnded"></a>

```typescript
public resetActionOnMutingRuleWindowEnded(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AlertMutingRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.isConstruct"></a>

```typescript
import { alertMutingRule } from '@cdktf/provider-newrelic'

alertMutingRule.AlertMutingRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.isTerraformElement"></a>

```typescript
import { alertMutingRule } from '@cdktf/provider-newrelic'

alertMutingRule.AlertMutingRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.isTerraformResource"></a>

```typescript
import { alertMutingRule } from '@cdktf/provider-newrelic'

alertMutingRule.AlertMutingRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.generateConfigForImport"></a>

```typescript
import { alertMutingRule } from '@cdktf/provider-newrelic'

alertMutingRule.AlertMutingRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AlertMutingRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AlertMutingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AlertMutingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/alert_muting_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AlertMutingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference">AlertMutingRuleConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference">AlertMutingRuleScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.actionOnMutingRuleWindowEndedInput">actionOnMutingRuleWindowEndedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition">AlertMutingRuleCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.scheduleInput">scheduleInput</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule">AlertMutingRuleSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.actionOnMutingRuleWindowEnded">actionOnMutingRuleWindowEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.condition"></a>

```typescript
public readonly condition: AlertMutingRuleConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference">AlertMutingRuleConditionOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.schedule"></a>

```typescript
public readonly schedule: AlertMutingRuleScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference">AlertMutingRuleScheduleOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `actionOnMutingRuleWindowEndedInput`<sup>Optional</sup> <a name="actionOnMutingRuleWindowEndedInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.actionOnMutingRuleWindowEndedInput"></a>

```typescript
public readonly actionOnMutingRuleWindowEndedInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.conditionInput"></a>

```typescript
public readonly conditionInput: AlertMutingRuleCondition;
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition">AlertMutingRuleCondition</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: AlertMutingRuleSchedule;
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule">AlertMutingRuleSchedule</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `actionOnMutingRuleWindowEnded`<sup>Required</sup> <a name="actionOnMutingRuleWindowEnded" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.actionOnMutingRuleWindowEnded"></a>

```typescript
public readonly actionOnMutingRuleWindowEnded: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AlertMutingRuleCondition <a name="AlertMutingRuleCondition" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition.Initializer"></a>

```typescript
import { alertMutingRule } from '@cdktf/provider-newrelic'

const alertMutingRuleCondition: alertMutingRule.AlertMutingRuleCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition.property.conditions">conditions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions">AlertMutingRuleConditionConditions</a>[]</code> | conditions block. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition.property.operator">operator</a></code> | <code>string</code> | The operator used to combine all the MutingRuleConditions within the group. |

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition.property.conditions"></a>

```typescript
public readonly conditions: IResolvable | AlertMutingRuleConditionConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions">AlertMutingRuleConditionConditions</a>[]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/alert_muting_rule#conditions AlertMutingRule#conditions}

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

The operator used to combine all the MutingRuleConditions within the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/alert_muting_rule#operator AlertMutingRule#operator}

---

### AlertMutingRuleConditionConditions <a name="AlertMutingRuleConditionConditions" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions.Initializer"></a>

```typescript
import { alertMutingRule } from '@cdktf/provider-newrelic'

const alertMutingRuleConditionConditions: alertMutingRule.AlertMutingRuleConditionConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions.property.attribute">attribute</a></code> | <code>string</code> | The attribute on an incident. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions.property.operator">operator</a></code> | <code>string</code> | The operator used to compare the attribute's value with the supplied value(s). |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions.property.values">values</a></code> | <code>string[]</code> | The value(s) to compare against the attribute's value. |

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

The attribute on an incident.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/alert_muting_rule#attribute AlertMutingRule#attribute}

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

The operator used to compare the attribute's value with the supplied value(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/alert_muting_rule#operator AlertMutingRule#operator}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The value(s) to compare against the attribute's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/alert_muting_rule#values AlertMutingRule#values}

---

### AlertMutingRuleConfig <a name="AlertMutingRuleConfig" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.Initializer"></a>

```typescript
import { alertMutingRule } from '@cdktf/provider-newrelic'

const alertMutingRuleConfig: alertMutingRule.AlertMutingRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition">AlertMutingRuleCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the MutingRule is enabled. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.name">name</a></code> | <code>string</code> | The name of the MutingRule. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.accountId">accountId</a></code> | <code>number</code> | The account id of the MutingRule.. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.actionOnMutingRuleWindowEnded">actionOnMutingRuleWindowEnded</a></code> | <code>string</code> | The action when the muting rule window is ended or disabled. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.description">description</a></code> | <code>string</code> | The description of the MutingRule. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/alert_muting_rule#id AlertMutingRule#id}. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule">AlertMutingRuleSchedule</a></code> | schedule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.condition"></a>

```typescript
public readonly condition: AlertMutingRuleCondition;
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition">AlertMutingRuleCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/alert_muting_rule#condition AlertMutingRule#condition}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the MutingRule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/alert_muting_rule#enabled AlertMutingRule#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the MutingRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/alert_muting_rule#name AlertMutingRule#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The account id of the MutingRule..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/alert_muting_rule#account_id AlertMutingRule#account_id}

---

##### `actionOnMutingRuleWindowEnded`<sup>Optional</sup> <a name="actionOnMutingRuleWindowEnded" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.actionOnMutingRuleWindowEnded"></a>

```typescript
public readonly actionOnMutingRuleWindowEnded: string;
```

- *Type:* string

The action when the muting rule window is ended or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/alert_muting_rule#action_on_muting_rule_window_ended AlertMutingRule#action_on_muting_rule_window_ended}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the MutingRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/alert_muting_rule#description AlertMutingRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/alert_muting_rule#id AlertMutingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.schedule"></a>

```typescript
public readonly schedule: AlertMutingRuleSchedule;
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule">AlertMutingRuleSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/alert_muting_rule#schedule AlertMutingRule#schedule}

---

### AlertMutingRuleSchedule <a name="AlertMutingRuleSchedule" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.Initializer"></a>

```typescript
import { alertMutingRule } from '@cdktf/provider-newrelic'

const alertMutingRuleSchedule: alertMutingRule.AlertMutingRuleSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.timeZone">timeZone</a></code> | <code>string</code> | The time zone that applies to the MutingRule schedule. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.endRepeat">endRepeat</a></code> | <code>string</code> | The datetime stamp when the MutingRule schedule should stop repeating. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.endTime">endTime</a></code> | <code>string</code> | The datetime stamp representing when the MutingRule should end. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.repeat">repeat</a></code> | <code>string</code> | The frequency the MutingRule schedule repeats. One of [DAILY, WEEKLY, MONTHLY]. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.repeatCount">repeatCount</a></code> | <code>number</code> | The number of times the MutingRule schedule should repeat. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.startTime">startTime</a></code> | <code>string</code> | The datetime stamp representing when the MutingRule should start. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.weeklyRepeatDays">weeklyRepeatDays</a></code> | <code>string[]</code> | The day(s) of the week that a MutingRule should repeat when the repeat field is set to WEEKLY. |

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

The time zone that applies to the MutingRule schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/alert_muting_rule#time_zone AlertMutingRule#time_zone}

---

##### `endRepeat`<sup>Optional</sup> <a name="endRepeat" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.endRepeat"></a>

```typescript
public readonly endRepeat: string;
```

- *Type:* string

The datetime stamp when the MutingRule schedule should stop repeating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/alert_muting_rule#end_repeat AlertMutingRule#end_repeat}

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

The datetime stamp representing when the MutingRule should end.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/alert_muting_rule#end_time AlertMutingRule#end_time}

---

##### `repeat`<sup>Optional</sup> <a name="repeat" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.repeat"></a>

```typescript
public readonly repeat: string;
```

- *Type:* string

The frequency the MutingRule schedule repeats. One of [DAILY, WEEKLY, MONTHLY].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/alert_muting_rule#repeat AlertMutingRule#repeat}

---

##### `repeatCount`<sup>Optional</sup> <a name="repeatCount" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.repeatCount"></a>

```typescript
public readonly repeatCount: number;
```

- *Type:* number

The number of times the MutingRule schedule should repeat.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/alert_muting_rule#repeat_count AlertMutingRule#repeat_count}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

The datetime stamp representing when the MutingRule should start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/alert_muting_rule#start_time AlertMutingRule#start_time}

---

##### `weeklyRepeatDays`<sup>Optional</sup> <a name="weeklyRepeatDays" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.weeklyRepeatDays"></a>

```typescript
public readonly weeklyRepeatDays: string[];
```

- *Type:* string[]

The day(s) of the week that a MutingRule should repeat when the repeat field is set to WEEKLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/alert_muting_rule#weekly_repeat_days AlertMutingRule#weekly_repeat_days}

---

## Classes <a name="Classes" id="Classes"></a>

### AlertMutingRuleConditionConditionsList <a name="AlertMutingRuleConditionConditionsList" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.Initializer"></a>

```typescript
import { alertMutingRule } from '@cdktf/provider-newrelic'

new alertMutingRule.AlertMutingRuleConditionConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.get"></a>

```typescript
public get(index: number): AlertMutingRuleConditionConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions">AlertMutingRuleConditionConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AlertMutingRuleConditionConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions">AlertMutingRuleConditionConditions</a>[]

---


### AlertMutingRuleConditionConditionsOutputReference <a name="AlertMutingRuleConditionConditionsOutputReference" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.Initializer"></a>

```typescript
import { alertMutingRule } from '@cdktf/provider-newrelic'

new alertMutingRule.AlertMutingRuleConditionConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.attributeInput">attributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions">AlertMutingRuleConditionConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.attributeInput"></a>

```typescript
public readonly attributeInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AlertMutingRuleConditionConditions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions">AlertMutingRuleConditionConditions</a>

---


### AlertMutingRuleConditionOutputReference <a name="AlertMutingRuleConditionOutputReference" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.Initializer"></a>

```typescript
import { alertMutingRule } from '@cdktf/provider-newrelic'

new alertMutingRule.AlertMutingRuleConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.putConditions">putConditions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditions` <a name="putConditions" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.putConditions"></a>

```typescript
public putConditions(value: IResolvable | AlertMutingRuleConditionConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.putConditions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions">AlertMutingRuleConditionConditions</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList">AlertMutingRuleConditionConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.conditionsInput">conditionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions">AlertMutingRuleConditionConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition">AlertMutingRuleCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.conditions"></a>

```typescript
public readonly conditions: AlertMutingRuleConditionConditionsList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList">AlertMutingRuleConditionConditionsList</a>

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: IResolvable | AlertMutingRuleConditionConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions">AlertMutingRuleConditionConditions</a>[]

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AlertMutingRuleCondition;
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition">AlertMutingRuleCondition</a>

---


### AlertMutingRuleScheduleOutputReference <a name="AlertMutingRuleScheduleOutputReference" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.Initializer"></a>

```typescript
import { alertMutingRule } from '@cdktf/provider-newrelic'

new alertMutingRule.AlertMutingRuleScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetEndRepeat">resetEndRepeat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetRepeat">resetRepeat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetRepeatCount">resetRepeatCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetWeeklyRepeatDays">resetWeeklyRepeatDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndRepeat` <a name="resetEndRepeat" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetEndRepeat"></a>

```typescript
public resetEndRepeat(): void
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetRepeat` <a name="resetRepeat" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetRepeat"></a>

```typescript
public resetRepeat(): void
```

##### `resetRepeatCount` <a name="resetRepeatCount" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetRepeatCount"></a>

```typescript
public resetRepeatCount(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```

##### `resetWeeklyRepeatDays` <a name="resetWeeklyRepeatDays" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetWeeklyRepeatDays"></a>

```typescript
public resetWeeklyRepeatDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.endRepeatInput">endRepeatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.repeatCountInput">repeatCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.repeatInput">repeatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.weeklyRepeatDaysInput">weeklyRepeatDaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.endRepeat">endRepeat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.repeat">repeat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.repeatCount">repeatCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.weeklyRepeatDays">weeklyRepeatDays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule">AlertMutingRuleSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endRepeatInput`<sup>Optional</sup> <a name="endRepeatInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.endRepeatInput"></a>

```typescript
public readonly endRepeatInput: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `repeatCountInput`<sup>Optional</sup> <a name="repeatCountInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.repeatCountInput"></a>

```typescript
public readonly repeatCountInput: number;
```

- *Type:* number

---

##### `repeatInput`<sup>Optional</sup> <a name="repeatInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.repeatInput"></a>

```typescript
public readonly repeatInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `weeklyRepeatDaysInput`<sup>Optional</sup> <a name="weeklyRepeatDaysInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.weeklyRepeatDaysInput"></a>

```typescript
public readonly weeklyRepeatDaysInput: string[];
```

- *Type:* string[]

---

##### `endRepeat`<sup>Required</sup> <a name="endRepeat" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.endRepeat"></a>

```typescript
public readonly endRepeat: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `repeat`<sup>Required</sup> <a name="repeat" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.repeat"></a>

```typescript
public readonly repeat: string;
```

- *Type:* string

---

##### `repeatCount`<sup>Required</sup> <a name="repeatCount" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.repeatCount"></a>

```typescript
public readonly repeatCount: number;
```

- *Type:* number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `weeklyRepeatDays`<sup>Required</sup> <a name="weeklyRepeatDays" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.weeklyRepeatDays"></a>

```typescript
public readonly weeklyRepeatDays: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AlertMutingRuleSchedule;
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule">AlertMutingRuleSchedule</a>

---



