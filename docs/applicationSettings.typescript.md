# `applicationSettings` Submodule <a name="`applicationSettings` Submodule" id="@cdktf/provider-newrelic.applicationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationSettings <a name="ApplicationSettings" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/application_settings newrelic_application_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer"></a>

```typescript
import { applicationSettings } from '@cdktf/provider-newrelic'

new applicationSettings.ApplicationSettings(scope: Construct, id: string, config?: ApplicationSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig">ApplicationSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig">ApplicationSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.putErrorCollector">putErrorCollector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.putTransactionTracer">putTransactionTracer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetAppApdexThreshold">resetAppApdexThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetEnableRealUserMonitoring">resetEnableRealUserMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetEnableSlowSql">resetEnableSlowSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetEnableThreadProfiler">resetEnableThreadProfiler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetEndUserApdexThreshold">resetEndUserApdexThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetErrorCollector">resetErrorCollector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetGuid">resetGuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetTracerType">resetTracerType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetTransactionTracer">resetTransactionTracer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetUseServerSideConfig">resetUseServerSideConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putErrorCollector` <a name="putErrorCollector" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.putErrorCollector"></a>

```typescript
public putErrorCollector(value: IResolvable | ApplicationSettingsErrorCollector[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.putErrorCollector.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector">ApplicationSettingsErrorCollector</a>[]

---

##### `putTransactionTracer` <a name="putTransactionTracer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.putTransactionTracer"></a>

```typescript
public putTransactionTracer(value: IResolvable | ApplicationSettingsTransactionTracer[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.putTransactionTracer.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer">ApplicationSettingsTransactionTracer</a>[]

---

##### `resetAppApdexThreshold` <a name="resetAppApdexThreshold" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetAppApdexThreshold"></a>

```typescript
public resetAppApdexThreshold(): void
```

##### `resetEnableRealUserMonitoring` <a name="resetEnableRealUserMonitoring" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetEnableRealUserMonitoring"></a>

```typescript
public resetEnableRealUserMonitoring(): void
```

##### `resetEnableSlowSql` <a name="resetEnableSlowSql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetEnableSlowSql"></a>

```typescript
public resetEnableSlowSql(): void
```

##### `resetEnableThreadProfiler` <a name="resetEnableThreadProfiler" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetEnableThreadProfiler"></a>

```typescript
public resetEnableThreadProfiler(): void
```

##### `resetEndUserApdexThreshold` <a name="resetEndUserApdexThreshold" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetEndUserApdexThreshold"></a>

```typescript
public resetEndUserApdexThreshold(): void
```

##### `resetErrorCollector` <a name="resetErrorCollector" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetErrorCollector"></a>

```typescript
public resetErrorCollector(): void
```

##### `resetGuid` <a name="resetGuid" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetGuid"></a>

```typescript
public resetGuid(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTracerType` <a name="resetTracerType" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetTracerType"></a>

```typescript
public resetTracerType(): void
```

##### `resetTransactionTracer` <a name="resetTransactionTracer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetTransactionTracer"></a>

```typescript
public resetTransactionTracer(): void
```

##### `resetUseServerSideConfig` <a name="resetUseServerSideConfig" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetUseServerSideConfig"></a>

```typescript
public resetUseServerSideConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.isConstruct"></a>

```typescript
import { applicationSettings } from '@cdktf/provider-newrelic'

applicationSettings.ApplicationSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.isTerraformElement"></a>

```typescript
import { applicationSettings } from '@cdktf/provider-newrelic'

applicationSettings.ApplicationSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.isTerraformResource"></a>

```typescript
import { applicationSettings } from '@cdktf/provider-newrelic'

applicationSettings.ApplicationSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.generateConfigForImport"></a>

```typescript
import { applicationSettings } from '@cdktf/provider-newrelic'

applicationSettings.ApplicationSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApplicationSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApplicationSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApplicationSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/application_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.errorCollector">errorCollector</a></code> | <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList">ApplicationSettingsErrorCollectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.isImported">isImported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.transactionTracer">transactionTracer</a></code> | <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList">ApplicationSettingsTransactionTracerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.appApdexThresholdInput">appApdexThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableRealUserMonitoringInput">enableRealUserMonitoringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableSlowSqlInput">enableSlowSqlInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableThreadProfilerInput">enableThreadProfilerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.endUserApdexThresholdInput">endUserApdexThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.errorCollectorInput">errorCollectorInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector">ApplicationSettingsErrorCollector</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.guidInput">guidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.tracerTypeInput">tracerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.transactionTracerInput">transactionTracerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer">ApplicationSettingsTransactionTracer</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.useServerSideConfigInput">useServerSideConfigInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.appApdexThreshold">appApdexThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableRealUserMonitoring">enableRealUserMonitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableSlowSql">enableSlowSql</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableThreadProfiler">enableThreadProfiler</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.endUserApdexThreshold">endUserApdexThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.guid">guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.tracerType">tracerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.useServerSideConfig">useServerSideConfig</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `errorCollector`<sup>Required</sup> <a name="errorCollector" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.errorCollector"></a>

```typescript
public readonly errorCollector: ApplicationSettingsErrorCollectorList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList">ApplicationSettingsErrorCollectorList</a>

---

##### `isImported`<sup>Required</sup> <a name="isImported" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.isImported"></a>

```typescript
public readonly isImported: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `transactionTracer`<sup>Required</sup> <a name="transactionTracer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.transactionTracer"></a>

```typescript
public readonly transactionTracer: ApplicationSettingsTransactionTracerList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList">ApplicationSettingsTransactionTracerList</a>

---

##### `appApdexThresholdInput`<sup>Optional</sup> <a name="appApdexThresholdInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.appApdexThresholdInput"></a>

```typescript
public readonly appApdexThresholdInput: number;
```

- *Type:* number

---

##### `enableRealUserMonitoringInput`<sup>Optional</sup> <a name="enableRealUserMonitoringInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableRealUserMonitoringInput"></a>

```typescript
public readonly enableRealUserMonitoringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSlowSqlInput`<sup>Optional</sup> <a name="enableSlowSqlInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableSlowSqlInput"></a>

```typescript
public readonly enableSlowSqlInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableThreadProfilerInput`<sup>Optional</sup> <a name="enableThreadProfilerInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableThreadProfilerInput"></a>

```typescript
public readonly enableThreadProfilerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endUserApdexThresholdInput`<sup>Optional</sup> <a name="endUserApdexThresholdInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.endUserApdexThresholdInput"></a>

```typescript
public readonly endUserApdexThresholdInput: number;
```

- *Type:* number

---

##### `errorCollectorInput`<sup>Optional</sup> <a name="errorCollectorInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.errorCollectorInput"></a>

```typescript
public readonly errorCollectorInput: IResolvable | ApplicationSettingsErrorCollector[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector">ApplicationSettingsErrorCollector</a>[]

---

##### `guidInput`<sup>Optional</sup> <a name="guidInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.guidInput"></a>

```typescript
public readonly guidInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tracerTypeInput`<sup>Optional</sup> <a name="tracerTypeInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.tracerTypeInput"></a>

```typescript
public readonly tracerTypeInput: string;
```

- *Type:* string

---

##### `transactionTracerInput`<sup>Optional</sup> <a name="transactionTracerInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.transactionTracerInput"></a>

```typescript
public readonly transactionTracerInput: IResolvable | ApplicationSettingsTransactionTracer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer">ApplicationSettingsTransactionTracer</a>[]

---

##### `useServerSideConfigInput`<sup>Optional</sup> <a name="useServerSideConfigInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.useServerSideConfigInput"></a>

```typescript
public readonly useServerSideConfigInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `appApdexThreshold`<sup>Required</sup> <a name="appApdexThreshold" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.appApdexThreshold"></a>

```typescript
public readonly appApdexThreshold: number;
```

- *Type:* number

---

##### `enableRealUserMonitoring`<sup>Required</sup> <a name="enableRealUserMonitoring" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableRealUserMonitoring"></a>

```typescript
public readonly enableRealUserMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSlowSql`<sup>Required</sup> <a name="enableSlowSql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableSlowSql"></a>

```typescript
public readonly enableSlowSql: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableThreadProfiler`<sup>Required</sup> <a name="enableThreadProfiler" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableThreadProfiler"></a>

```typescript
public readonly enableThreadProfiler: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endUserApdexThreshold`<sup>Required</sup> <a name="endUserApdexThreshold" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.endUserApdexThreshold"></a>

```typescript
public readonly endUserApdexThreshold: number;
```

- *Type:* number

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tracerType`<sup>Required</sup> <a name="tracerType" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.tracerType"></a>

```typescript
public readonly tracerType: string;
```

- *Type:* string

---

##### `useServerSideConfig`<sup>Required</sup> <a name="useServerSideConfig" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.useServerSideConfig"></a>

```typescript
public readonly useServerSideConfig: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationSettingsConfig <a name="ApplicationSettingsConfig" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.Initializer"></a>

```typescript
import { applicationSettings } from '@cdktf/provider-newrelic'

const applicationSettingsConfig: applicationSettings.ApplicationSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.appApdexThreshold">appApdexThreshold</a></code> | <code>number</code> | The response time threshold value for Apdex score calculation. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.enableRealUserMonitoring">enableRealUserMonitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | Dummy field to support backward compatibility of previous version.should be removed with next major version. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.enableSlowSql">enableSlowSql</a></code> | <code>boolean \| cdktf.IResolvable</code> | Samples and reports the slowest database queries in your traces. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.enableThreadProfiler">enableThreadProfiler</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable or disable the thread profiler. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.endUserApdexThreshold">endUserApdexThreshold</a></code> | <code>number</code> | Dummy field to support backward compatibility of previous version.should be removed with next major version. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.errorCollector">errorCollector</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector">ApplicationSettingsErrorCollector</a>[]</code> | error_collector block. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.guid">guid</a></code> | <code>string</code> | The GUID of the application in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/application_settings#id ApplicationSettings#id}. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.name">name</a></code> | <code>string</code> | The name of the application in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.tracerType">tracerType</a></code> | <code>string</code> | The type of tracer to use, either 'CROSS_APPLICATION_TRACER', 'DISTRIBUTED_TRACING', 'NONE', or 'OPT_OUT'. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.transactionTracer">transactionTracer</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer">ApplicationSettingsTransactionTracer</a>[]</code> | transaction_tracer block. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.useServerSideConfig">useServerSideConfig</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable or disable server side monitoring. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appApdexThreshold`<sup>Optional</sup> <a name="appApdexThreshold" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.appApdexThreshold"></a>

```typescript
public readonly appApdexThreshold: number;
```

- *Type:* number

The response time threshold value for Apdex score calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/application_settings#app_apdex_threshold ApplicationSettings#app_apdex_threshold}

---

##### `enableRealUserMonitoring`<sup>Optional</sup> <a name="enableRealUserMonitoring" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.enableRealUserMonitoring"></a>

```typescript
public readonly enableRealUserMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Dummy field to support backward compatibility of previous version.should be removed with next major version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/application_settings#enable_real_user_monitoring ApplicationSettings#enable_real_user_monitoring}

---

##### `enableSlowSql`<sup>Optional</sup> <a name="enableSlowSql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.enableSlowSql"></a>

```typescript
public readonly enableSlowSql: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Samples and reports the slowest database queries in your traces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/application_settings#enable_slow_sql ApplicationSettings#enable_slow_sql}

---

##### `enableThreadProfiler`<sup>Optional</sup> <a name="enableThreadProfiler" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.enableThreadProfiler"></a>

```typescript
public readonly enableThreadProfiler: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable or disable the thread profiler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/application_settings#enable_thread_profiler ApplicationSettings#enable_thread_profiler}

---

##### `endUserApdexThreshold`<sup>Optional</sup> <a name="endUserApdexThreshold" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.endUserApdexThreshold"></a>

```typescript
public readonly endUserApdexThreshold: number;
```

- *Type:* number

Dummy field to support backward compatibility of previous version.should be removed with next major version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/application_settings#end_user_apdex_threshold ApplicationSettings#end_user_apdex_threshold}

---

##### `errorCollector`<sup>Optional</sup> <a name="errorCollector" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.errorCollector"></a>

```typescript
public readonly errorCollector: IResolvable | ApplicationSettingsErrorCollector[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector">ApplicationSettingsErrorCollector</a>[]

error_collector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/application_settings#error_collector ApplicationSettings#error_collector}

---

##### `guid`<sup>Optional</sup> <a name="guid" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

The GUID of the application in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/application_settings#guid ApplicationSettings#guid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/application_settings#id ApplicationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the application in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/application_settings#name ApplicationSettings#name}

---

##### `tracerType`<sup>Optional</sup> <a name="tracerType" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.tracerType"></a>

```typescript
public readonly tracerType: string;
```

- *Type:* string

The type of tracer to use, either 'CROSS_APPLICATION_TRACER', 'DISTRIBUTED_TRACING', 'NONE', or 'OPT_OUT'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/application_settings#tracer_type ApplicationSettings#tracer_type}

---

##### `transactionTracer`<sup>Optional</sup> <a name="transactionTracer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.transactionTracer"></a>

```typescript
public readonly transactionTracer: IResolvable | ApplicationSettingsTransactionTracer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer">ApplicationSettingsTransactionTracer</a>[]

transaction_tracer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/application_settings#transaction_tracer ApplicationSettings#transaction_tracer}

---

##### `useServerSideConfig`<sup>Optional</sup> <a name="useServerSideConfig" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.useServerSideConfig"></a>

```typescript
public readonly useServerSideConfig: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable or disable server side monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/application_settings#use_server_side_config ApplicationSettings#use_server_side_config}

---

### ApplicationSettingsErrorCollector <a name="ApplicationSettingsErrorCollector" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector.Initializer"></a>

```typescript
import { applicationSettings } from '@cdktf/provider-newrelic'

const applicationSettingsErrorCollector: applicationSettings.ApplicationSettingsErrorCollector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector.property.expectedErrorClasses">expectedErrorClasses</a></code> | <code>string[]</code> | A list of error classes that are expected and should not trigger alerts. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector.property.expectedErrorCodes">expectedErrorCodes</a></code> | <code>string[]</code> | A list of error codes that are expected and should not trigger alerts. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector.property.ignoredErrorClasses">ignoredErrorClasses</a></code> | <code>string[]</code> | A list of error classes that should be ignored. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector.property.ignoredErrorCodes">ignoredErrorCodes</a></code> | <code>string[]</code> | A list of error codes that should be ignored. |

---

##### `expectedErrorClasses`<sup>Optional</sup> <a name="expectedErrorClasses" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector.property.expectedErrorClasses"></a>

```typescript
public readonly expectedErrorClasses: string[];
```

- *Type:* string[]

A list of error classes that are expected and should not trigger alerts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/application_settings#expected_error_classes ApplicationSettings#expected_error_classes}

---

##### `expectedErrorCodes`<sup>Optional</sup> <a name="expectedErrorCodes" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector.property.expectedErrorCodes"></a>

```typescript
public readonly expectedErrorCodes: string[];
```

- *Type:* string[]

A list of error codes that are expected and should not trigger alerts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/application_settings#expected_error_codes ApplicationSettings#expected_error_codes}

---

##### `ignoredErrorClasses`<sup>Optional</sup> <a name="ignoredErrorClasses" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector.property.ignoredErrorClasses"></a>

```typescript
public readonly ignoredErrorClasses: string[];
```

- *Type:* string[]

A list of error classes that should be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/application_settings#ignored_error_classes ApplicationSettings#ignored_error_classes}

---

##### `ignoredErrorCodes`<sup>Optional</sup> <a name="ignoredErrorCodes" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector.property.ignoredErrorCodes"></a>

```typescript
public readonly ignoredErrorCodes: string[];
```

- *Type:* string[]

A list of error codes that should be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/application_settings#ignored_error_codes ApplicationSettings#ignored_error_codes}

---

### ApplicationSettingsTransactionTracer <a name="ApplicationSettingsTransactionTracer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.Initializer"></a>

```typescript
import { applicationSettings } from '@cdktf/provider-newrelic'

const applicationSettingsTransactionTracer: applicationSettings.ApplicationSettingsTransactionTracer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.explainQueryPlans">explainQueryPlans</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans">ApplicationSettingsTransactionTracerExplainQueryPlans</a>[]</code> | explain_query_plans block. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.sql">sql</a></code> | <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql">ApplicationSettingsTransactionTracerSql</a></code> | sql block. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.stackTraceThresholdValue">stackTraceThresholdValue</a></code> | <code>number</code> | The response time threshold value for capturing stack traces of SQL queries. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.transactionThresholdType">transactionThresholdType</a></code> | <code>string</code> | The type of threshold for transaction tracing, either 'APDEX_F' or 'VALUE'. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.transactionThresholdValue">transactionThresholdValue</a></code> | <code>number</code> | The threshold value for transaction tracing when 'transaction_threshold_type' is 'VALUE'. |

---

##### `explainQueryPlans`<sup>Optional</sup> <a name="explainQueryPlans" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.explainQueryPlans"></a>

```typescript
public readonly explainQueryPlans: IResolvable | ApplicationSettingsTransactionTracerExplainQueryPlans[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans">ApplicationSettingsTransactionTracerExplainQueryPlans</a>[]

explain_query_plans block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/application_settings#explain_query_plans ApplicationSettings#explain_query_plans}

---

##### `sql`<sup>Optional</sup> <a name="sql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.sql"></a>

```typescript
public readonly sql: ApplicationSettingsTransactionTracerSql;
```

- *Type:* <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql">ApplicationSettingsTransactionTracerSql</a>

sql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/application_settings#sql ApplicationSettings#sql}

---

##### `stackTraceThresholdValue`<sup>Optional</sup> <a name="stackTraceThresholdValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.stackTraceThresholdValue"></a>

```typescript
public readonly stackTraceThresholdValue: number;
```

- *Type:* number

The response time threshold value for capturing stack traces of SQL queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/application_settings#stack_trace_threshold_value ApplicationSettings#stack_trace_threshold_value}

---

##### `transactionThresholdType`<sup>Optional</sup> <a name="transactionThresholdType" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.transactionThresholdType"></a>

```typescript
public readonly transactionThresholdType: string;
```

- *Type:* string

The type of threshold for transaction tracing, either 'APDEX_F' or 'VALUE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/application_settings#transaction_threshold_type ApplicationSettings#transaction_threshold_type}

---

##### `transactionThresholdValue`<sup>Optional</sup> <a name="transactionThresholdValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.transactionThresholdValue"></a>

```typescript
public readonly transactionThresholdValue: number;
```

- *Type:* number

The threshold value for transaction tracing when 'transaction_threshold_type' is 'VALUE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/application_settings#transaction_threshold_value ApplicationSettings#transaction_threshold_value}

---

### ApplicationSettingsTransactionTracerExplainQueryPlans <a name="ApplicationSettingsTransactionTracerExplainQueryPlans" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans.Initializer"></a>

```typescript
import { applicationSettings } from '@cdktf/provider-newrelic'

const applicationSettingsTransactionTracerExplainQueryPlans: applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans.property.queryPlanThresholdType">queryPlanThresholdType</a></code> | <code>string</code> | The type of threshold for explain plans, either 'APDEX_F' or 'VALUE'. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans.property.queryPlanThresholdValue">queryPlanThresholdValue</a></code> | <code>number</code> | The threshold value for explain plans when 'query_plan_threshold_type' is 'VALUE'. |

---

##### `queryPlanThresholdType`<sup>Optional</sup> <a name="queryPlanThresholdType" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans.property.queryPlanThresholdType"></a>

```typescript
public readonly queryPlanThresholdType: string;
```

- *Type:* string

The type of threshold for explain plans, either 'APDEX_F' or 'VALUE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/application_settings#query_plan_threshold_type ApplicationSettings#query_plan_threshold_type}

---

##### `queryPlanThresholdValue`<sup>Optional</sup> <a name="queryPlanThresholdValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans.property.queryPlanThresholdValue"></a>

```typescript
public readonly queryPlanThresholdValue: number;
```

- *Type:* number

The threshold value for explain plans when 'query_plan_threshold_type' is 'VALUE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/application_settings#query_plan_threshold_value ApplicationSettings#query_plan_threshold_value}

---

### ApplicationSettingsTransactionTracerSql <a name="ApplicationSettingsTransactionTracerSql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql.Initializer"></a>

```typescript
import { applicationSettings } from '@cdktf/provider-newrelic'

const applicationSettingsTransactionTracerSql: applicationSettings.ApplicationSettingsTransactionTracerSql = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql.property.recordSql">recordSql</a></code> | <code>string</code> | The level of SQL recording, either 'OBFUSCATED', 'OFF', or 'RAW'. |

---

##### `recordSql`<sup>Required</sup> <a name="recordSql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql.property.recordSql"></a>

```typescript
public readonly recordSql: string;
```

- *Type:* string

The level of SQL recording, either 'OBFUSCATED', 'OFF', or 'RAW'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/application_settings#record_sql ApplicationSettings#record_sql}

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationSettingsErrorCollectorList <a name="ApplicationSettingsErrorCollectorList" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.Initializer"></a>

```typescript
import { applicationSettings } from '@cdktf/provider-newrelic'

new applicationSettings.ApplicationSettingsErrorCollectorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.get"></a>

```typescript
public get(index: number): ApplicationSettingsErrorCollectorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector">ApplicationSettingsErrorCollector</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationSettingsErrorCollector[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector">ApplicationSettingsErrorCollector</a>[]

---


### ApplicationSettingsErrorCollectorOutputReference <a name="ApplicationSettingsErrorCollectorOutputReference" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.Initializer"></a>

```typescript
import { applicationSettings } from '@cdktf/provider-newrelic'

new applicationSettings.ApplicationSettingsErrorCollectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resetExpectedErrorClasses">resetExpectedErrorClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resetExpectedErrorCodes">resetExpectedErrorCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resetIgnoredErrorClasses">resetIgnoredErrorClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resetIgnoredErrorCodes">resetIgnoredErrorCodes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpectedErrorClasses` <a name="resetExpectedErrorClasses" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resetExpectedErrorClasses"></a>

```typescript
public resetExpectedErrorClasses(): void
```

##### `resetExpectedErrorCodes` <a name="resetExpectedErrorCodes" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resetExpectedErrorCodes"></a>

```typescript
public resetExpectedErrorCodes(): void
```

##### `resetIgnoredErrorClasses` <a name="resetIgnoredErrorClasses" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resetIgnoredErrorClasses"></a>

```typescript
public resetIgnoredErrorClasses(): void
```

##### `resetIgnoredErrorCodes` <a name="resetIgnoredErrorCodes" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resetIgnoredErrorCodes"></a>

```typescript
public resetIgnoredErrorCodes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.expectedErrorClassesInput">expectedErrorClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.expectedErrorCodesInput">expectedErrorCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.ignoredErrorClassesInput">ignoredErrorClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.ignoredErrorCodesInput">ignoredErrorCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.expectedErrorClasses">expectedErrorClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.expectedErrorCodes">expectedErrorCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.ignoredErrorClasses">ignoredErrorClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.ignoredErrorCodes">ignoredErrorCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector">ApplicationSettingsErrorCollector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expectedErrorClassesInput`<sup>Optional</sup> <a name="expectedErrorClassesInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.expectedErrorClassesInput"></a>

```typescript
public readonly expectedErrorClassesInput: string[];
```

- *Type:* string[]

---

##### `expectedErrorCodesInput`<sup>Optional</sup> <a name="expectedErrorCodesInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.expectedErrorCodesInput"></a>

```typescript
public readonly expectedErrorCodesInput: string[];
```

- *Type:* string[]

---

##### `ignoredErrorClassesInput`<sup>Optional</sup> <a name="ignoredErrorClassesInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.ignoredErrorClassesInput"></a>

```typescript
public readonly ignoredErrorClassesInput: string[];
```

- *Type:* string[]

---

##### `ignoredErrorCodesInput`<sup>Optional</sup> <a name="ignoredErrorCodesInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.ignoredErrorCodesInput"></a>

```typescript
public readonly ignoredErrorCodesInput: string[];
```

- *Type:* string[]

---

##### `expectedErrorClasses`<sup>Required</sup> <a name="expectedErrorClasses" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.expectedErrorClasses"></a>

```typescript
public readonly expectedErrorClasses: string[];
```

- *Type:* string[]

---

##### `expectedErrorCodes`<sup>Required</sup> <a name="expectedErrorCodes" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.expectedErrorCodes"></a>

```typescript
public readonly expectedErrorCodes: string[];
```

- *Type:* string[]

---

##### `ignoredErrorClasses`<sup>Required</sup> <a name="ignoredErrorClasses" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.ignoredErrorClasses"></a>

```typescript
public readonly ignoredErrorClasses: string[];
```

- *Type:* string[]

---

##### `ignoredErrorCodes`<sup>Required</sup> <a name="ignoredErrorCodes" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.ignoredErrorCodes"></a>

```typescript
public readonly ignoredErrorCodes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationSettingsErrorCollector;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector">ApplicationSettingsErrorCollector</a>

---


### ApplicationSettingsTransactionTracerExplainQueryPlansList <a name="ApplicationSettingsTransactionTracerExplainQueryPlansList" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.Initializer"></a>

```typescript
import { applicationSettings } from '@cdktf/provider-newrelic'

new applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.get"></a>

```typescript
public get(index: number): ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans">ApplicationSettingsTransactionTracerExplainQueryPlans</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationSettingsTransactionTracerExplainQueryPlans[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans">ApplicationSettingsTransactionTracerExplainQueryPlans</a>[]

---


### ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference <a name="ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.Initializer"></a>

```typescript
import { applicationSettings } from '@cdktf/provider-newrelic'

new applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.resetQueryPlanThresholdType">resetQueryPlanThresholdType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.resetQueryPlanThresholdValue">resetQueryPlanThresholdValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQueryPlanThresholdType` <a name="resetQueryPlanThresholdType" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.resetQueryPlanThresholdType"></a>

```typescript
public resetQueryPlanThresholdType(): void
```

##### `resetQueryPlanThresholdValue` <a name="resetQueryPlanThresholdValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.resetQueryPlanThresholdValue"></a>

```typescript
public resetQueryPlanThresholdValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.queryPlanThresholdTypeInput">queryPlanThresholdTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.queryPlanThresholdValueInput">queryPlanThresholdValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.queryPlanThresholdType">queryPlanThresholdType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.queryPlanThresholdValue">queryPlanThresholdValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans">ApplicationSettingsTransactionTracerExplainQueryPlans</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queryPlanThresholdTypeInput`<sup>Optional</sup> <a name="queryPlanThresholdTypeInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.queryPlanThresholdTypeInput"></a>

```typescript
public readonly queryPlanThresholdTypeInput: string;
```

- *Type:* string

---

##### `queryPlanThresholdValueInput`<sup>Optional</sup> <a name="queryPlanThresholdValueInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.queryPlanThresholdValueInput"></a>

```typescript
public readonly queryPlanThresholdValueInput: number;
```

- *Type:* number

---

##### `queryPlanThresholdType`<sup>Required</sup> <a name="queryPlanThresholdType" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.queryPlanThresholdType"></a>

```typescript
public readonly queryPlanThresholdType: string;
```

- *Type:* string

---

##### `queryPlanThresholdValue`<sup>Required</sup> <a name="queryPlanThresholdValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.queryPlanThresholdValue"></a>

```typescript
public readonly queryPlanThresholdValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationSettingsTransactionTracerExplainQueryPlans;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans">ApplicationSettingsTransactionTracerExplainQueryPlans</a>

---


### ApplicationSettingsTransactionTracerList <a name="ApplicationSettingsTransactionTracerList" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.Initializer"></a>

```typescript
import { applicationSettings } from '@cdktf/provider-newrelic'

new applicationSettings.ApplicationSettingsTransactionTracerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.get"></a>

```typescript
public get(index: number): ApplicationSettingsTransactionTracerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer">ApplicationSettingsTransactionTracer</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationSettingsTransactionTracer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer">ApplicationSettingsTransactionTracer</a>[]

---


### ApplicationSettingsTransactionTracerOutputReference <a name="ApplicationSettingsTransactionTracerOutputReference" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.Initializer"></a>

```typescript
import { applicationSettings } from '@cdktf/provider-newrelic'

new applicationSettings.ApplicationSettingsTransactionTracerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.putExplainQueryPlans">putExplainQueryPlans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.putSql">putSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetExplainQueryPlans">resetExplainQueryPlans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetSql">resetSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetStackTraceThresholdValue">resetStackTraceThresholdValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetTransactionThresholdType">resetTransactionThresholdType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetTransactionThresholdValue">resetTransactionThresholdValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExplainQueryPlans` <a name="putExplainQueryPlans" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.putExplainQueryPlans"></a>

```typescript
public putExplainQueryPlans(value: IResolvable | ApplicationSettingsTransactionTracerExplainQueryPlans[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.putExplainQueryPlans.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans">ApplicationSettingsTransactionTracerExplainQueryPlans</a>[]

---

##### `putSql` <a name="putSql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.putSql"></a>

```typescript
public putSql(value: ApplicationSettingsTransactionTracerSql): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.putSql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql">ApplicationSettingsTransactionTracerSql</a>

---

##### `resetExplainQueryPlans` <a name="resetExplainQueryPlans" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetExplainQueryPlans"></a>

```typescript
public resetExplainQueryPlans(): void
```

##### `resetSql` <a name="resetSql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetSql"></a>

```typescript
public resetSql(): void
```

##### `resetStackTraceThresholdValue` <a name="resetStackTraceThresholdValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetStackTraceThresholdValue"></a>

```typescript
public resetStackTraceThresholdValue(): void
```

##### `resetTransactionThresholdType` <a name="resetTransactionThresholdType" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetTransactionThresholdType"></a>

```typescript
public resetTransactionThresholdType(): void
```

##### `resetTransactionThresholdValue` <a name="resetTransactionThresholdValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetTransactionThresholdValue"></a>

```typescript
public resetTransactionThresholdValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.explainQueryPlans">explainQueryPlans</a></code> | <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList">ApplicationSettingsTransactionTracerExplainQueryPlansList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.sql">sql</a></code> | <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference">ApplicationSettingsTransactionTracerSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.explainQueryPlansInput">explainQueryPlansInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans">ApplicationSettingsTransactionTracerExplainQueryPlans</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.sqlInput">sqlInput</a></code> | <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql">ApplicationSettingsTransactionTracerSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.stackTraceThresholdValueInput">stackTraceThresholdValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.transactionThresholdTypeInput">transactionThresholdTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.transactionThresholdValueInput">transactionThresholdValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.stackTraceThresholdValue">stackTraceThresholdValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.transactionThresholdType">transactionThresholdType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.transactionThresholdValue">transactionThresholdValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer">ApplicationSettingsTransactionTracer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `explainQueryPlans`<sup>Required</sup> <a name="explainQueryPlans" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.explainQueryPlans"></a>

```typescript
public readonly explainQueryPlans: ApplicationSettingsTransactionTracerExplainQueryPlansList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList">ApplicationSettingsTransactionTracerExplainQueryPlansList</a>

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.sql"></a>

```typescript
public readonly sql: ApplicationSettingsTransactionTracerSqlOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference">ApplicationSettingsTransactionTracerSqlOutputReference</a>

---

##### `explainQueryPlansInput`<sup>Optional</sup> <a name="explainQueryPlansInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.explainQueryPlansInput"></a>

```typescript
public readonly explainQueryPlansInput: IResolvable | ApplicationSettingsTransactionTracerExplainQueryPlans[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans">ApplicationSettingsTransactionTracerExplainQueryPlans</a>[]

---

##### `sqlInput`<sup>Optional</sup> <a name="sqlInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.sqlInput"></a>

```typescript
public readonly sqlInput: ApplicationSettingsTransactionTracerSql;
```

- *Type:* <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql">ApplicationSettingsTransactionTracerSql</a>

---

##### `stackTraceThresholdValueInput`<sup>Optional</sup> <a name="stackTraceThresholdValueInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.stackTraceThresholdValueInput"></a>

```typescript
public readonly stackTraceThresholdValueInput: number;
```

- *Type:* number

---

##### `transactionThresholdTypeInput`<sup>Optional</sup> <a name="transactionThresholdTypeInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.transactionThresholdTypeInput"></a>

```typescript
public readonly transactionThresholdTypeInput: string;
```

- *Type:* string

---

##### `transactionThresholdValueInput`<sup>Optional</sup> <a name="transactionThresholdValueInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.transactionThresholdValueInput"></a>

```typescript
public readonly transactionThresholdValueInput: number;
```

- *Type:* number

---

##### `stackTraceThresholdValue`<sup>Required</sup> <a name="stackTraceThresholdValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.stackTraceThresholdValue"></a>

```typescript
public readonly stackTraceThresholdValue: number;
```

- *Type:* number

---

##### `transactionThresholdType`<sup>Required</sup> <a name="transactionThresholdType" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.transactionThresholdType"></a>

```typescript
public readonly transactionThresholdType: string;
```

- *Type:* string

---

##### `transactionThresholdValue`<sup>Required</sup> <a name="transactionThresholdValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.transactionThresholdValue"></a>

```typescript
public readonly transactionThresholdValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationSettingsTransactionTracer;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer">ApplicationSettingsTransactionTracer</a>

---


### ApplicationSettingsTransactionTracerSqlOutputReference <a name="ApplicationSettingsTransactionTracerSqlOutputReference" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.Initializer"></a>

```typescript
import { applicationSettings } from '@cdktf/provider-newrelic'

new applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.recordSqlInput">recordSqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.recordSql">recordSql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql">ApplicationSettingsTransactionTracerSql</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `recordSqlInput`<sup>Optional</sup> <a name="recordSqlInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.recordSqlInput"></a>

```typescript
public readonly recordSqlInput: string;
```

- *Type:* string

---

##### `recordSql`<sup>Required</sup> <a name="recordSql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.recordSql"></a>

```typescript
public readonly recordSql: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApplicationSettingsTransactionTracerSql;
```

- *Type:* <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql">ApplicationSettingsTransactionTracerSql</a>

---



