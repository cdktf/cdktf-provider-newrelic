# `browserApplication` Submodule <a name="`browserApplication` Submodule" id="@cdktf/provider-newrelic.browserApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BrowserApplication <a name="BrowserApplication" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/browser_application newrelic_browser_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.Initializer"></a>

```typescript
import { browserApplication } from '@cdktf/provider-newrelic'

new browserApplication.BrowserApplication(scope: Construct, id: string, config: BrowserApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig">BrowserApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig">BrowserApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.resetCookiesEnabled">resetCookiesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.resetDistributedTracingEnabled">resetDistributedTracingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.resetLoaderType">resetLoaderType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetCookiesEnabled` <a name="resetCookiesEnabled" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.resetCookiesEnabled"></a>

```typescript
public resetCookiesEnabled(): void
```

##### `resetDistributedTracingEnabled` <a name="resetDistributedTracingEnabled" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.resetDistributedTracingEnabled"></a>

```typescript
public resetDistributedTracingEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLoaderType` <a name="resetLoaderType" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.resetLoaderType"></a>

```typescript
public resetLoaderType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BrowserApplication resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.isConstruct"></a>

```typescript
import { browserApplication } from '@cdktf/provider-newrelic'

browserApplication.BrowserApplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.isTerraformElement"></a>

```typescript
import { browserApplication } from '@cdktf/provider-newrelic'

browserApplication.BrowserApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.isTerraformResource"></a>

```typescript
import { browserApplication } from '@cdktf/provider-newrelic'

browserApplication.BrowserApplication.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.generateConfigForImport"></a>

```typescript
import { browserApplication } from '@cdktf/provider-newrelic'

browserApplication.BrowserApplication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BrowserApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BrowserApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BrowserApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/browser_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BrowserApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.guid">guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.jsConfig">jsConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.cookiesEnabledInput">cookiesEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.distributedTracingEnabledInput">distributedTracingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.loaderTypeInput">loaderTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.cookiesEnabled">cookiesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.distributedTracingEnabled">distributedTracingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.loaderType">loaderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

---

##### `jsConfig`<sup>Required</sup> <a name="jsConfig" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.jsConfig"></a>

```typescript
public readonly jsConfig: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `cookiesEnabledInput`<sup>Optional</sup> <a name="cookiesEnabledInput" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.cookiesEnabledInput"></a>

```typescript
public readonly cookiesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `distributedTracingEnabledInput`<sup>Optional</sup> <a name="distributedTracingEnabledInput" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.distributedTracingEnabledInput"></a>

```typescript
public readonly distributedTracingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loaderTypeInput`<sup>Optional</sup> <a name="loaderTypeInput" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.loaderTypeInput"></a>

```typescript
public readonly loaderTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `cookiesEnabled`<sup>Required</sup> <a name="cookiesEnabled" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.cookiesEnabled"></a>

```typescript
public readonly cookiesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `distributedTracingEnabled`<sup>Required</sup> <a name="distributedTracingEnabled" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.distributedTracingEnabled"></a>

```typescript
public readonly distributedTracingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loaderType`<sup>Required</sup> <a name="loaderType" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.loaderType"></a>

```typescript
public readonly loaderType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BrowserApplicationConfig <a name="BrowserApplicationConfig" id="@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.Initializer"></a>

```typescript
import { browserApplication } from '@cdktf/provider-newrelic'

const browserApplicationConfig: browserApplication.BrowserApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.name">name</a></code> | <code>string</code> | The name of the application to monitor. |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.accountId">accountId</a></code> | <code>number</code> | The account ID. |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.cookiesEnabled">cookiesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Configure cookies. The default is enabled: true. |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.distributedTracingEnabled">distributedTracingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Configure distributed tracing in browser apps. The default is enabled: true. |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/browser_application#id BrowserApplication#id}. |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.loaderType">loaderType</a></code> | <code>string</code> | Determines which browser loader is configured. The default is "SPA". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the application to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/browser_application#name BrowserApplication#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/browser_application#account_id BrowserApplication#account_id}

---

##### `cookiesEnabled`<sup>Optional</sup> <a name="cookiesEnabled" id="@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.cookiesEnabled"></a>

```typescript
public readonly cookiesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Configure cookies. The default is enabled: true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/browser_application#cookies_enabled BrowserApplication#cookies_enabled}

---

##### `distributedTracingEnabled`<sup>Optional</sup> <a name="distributedTracingEnabled" id="@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.distributedTracingEnabled"></a>

```typescript
public readonly distributedTracingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Configure distributed tracing in browser apps. The default is enabled: true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/browser_application#distributed_tracing_enabled BrowserApplication#distributed_tracing_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/browser_application#id BrowserApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loaderType`<sup>Optional</sup> <a name="loaderType" id="@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.loaderType"></a>

```typescript
public readonly loaderType: string;
```

- *Type:* string

Determines which browser loader is configured. The default is "SPA".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/browser_application#loader_type BrowserApplication#loader_type}

---



