# `syntheticsBrokenLinksMonitor` Submodule <a name="`syntheticsBrokenLinksMonitor` Submodule" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsBrokenLinksMonitor <a name="SyntheticsBrokenLinksMonitor" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/synthetics_broken_links_monitor newrelic_synthetics_broken_links_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer"></a>

```typescript
import { syntheticsBrokenLinksMonitor } from '@cdktf/provider-newrelic'

new syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor(scope: Construct, id: string, config: SyntheticsBrokenLinksMonitorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig">SyntheticsBrokenLinksMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig">SyntheticsBrokenLinksMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.putTag">putTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetLocationsPrivate">resetLocationsPrivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetLocationsPublic">resetLocationsPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetRuntimeType">resetRuntimeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetRuntimeTypeVersion">resetRuntimeTypeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetUseUnsupportedLegacyRuntime">resetUseUnsupportedLegacyRuntime</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTag` <a name="putTag" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.putTag"></a>

```typescript
public putTag(value: IResolvable | SyntheticsBrokenLinksMonitorTag[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.putTag.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag">SyntheticsBrokenLinksMonitorTag</a>[]

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocationsPrivate` <a name="resetLocationsPrivate" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetLocationsPrivate"></a>

```typescript
public resetLocationsPrivate(): void
```

##### `resetLocationsPublic` <a name="resetLocationsPublic" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetLocationsPublic"></a>

```typescript
public resetLocationsPublic(): void
```

##### `resetRuntimeType` <a name="resetRuntimeType" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetRuntimeType"></a>

```typescript
public resetRuntimeType(): void
```

##### `resetRuntimeTypeVersion` <a name="resetRuntimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetRuntimeTypeVersion"></a>

```typescript
public resetRuntimeTypeVersion(): void
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetTag"></a>

```typescript
public resetTag(): void
```

##### `resetUseUnsupportedLegacyRuntime` <a name="resetUseUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetUseUnsupportedLegacyRuntime"></a>

```typescript
public resetUseUnsupportedLegacyRuntime(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SyntheticsBrokenLinksMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.isConstruct"></a>

```typescript
import { syntheticsBrokenLinksMonitor } from '@cdktf/provider-newrelic'

syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.isTerraformElement"></a>

```typescript
import { syntheticsBrokenLinksMonitor } from '@cdktf/provider-newrelic'

syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.isTerraformResource"></a>

```typescript
import { syntheticsBrokenLinksMonitor } from '@cdktf/provider-newrelic'

syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.generateConfigForImport"></a>

```typescript
import { syntheticsBrokenLinksMonitor } from '@cdktf/provider-newrelic'

syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SyntheticsBrokenLinksMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SyntheticsBrokenLinksMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SyntheticsBrokenLinksMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/synthetics_broken_links_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SyntheticsBrokenLinksMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.guid">guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.monitorId">monitorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.periodInMinutes">periodInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList">SyntheticsBrokenLinksMonitorTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.locationsPrivateInput">locationsPrivateInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.locationsPublicInput">locationsPublicInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.periodInput">periodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.runtimeTypeInput">runtimeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.runtimeTypeVersionInput">runtimeTypeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.tagInput">tagInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag">SyntheticsBrokenLinksMonitorTag</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.useUnsupportedLegacyRuntimeInput">useUnsupportedLegacyRuntimeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.locationsPrivate">locationsPrivate</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.locationsPublic">locationsPublic</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.period">period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.runtimeType">runtimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.runtimeTypeVersion">runtimeTypeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.useUnsupportedLegacyRuntime">useUnsupportedLegacyRuntime</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.monitorId"></a>

```typescript
public readonly monitorId: string;
```

- *Type:* string

---

##### `periodInMinutes`<sup>Required</sup> <a name="periodInMinutes" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.periodInMinutes"></a>

```typescript
public readonly periodInMinutes: number;
```

- *Type:* number

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.tag"></a>

```typescript
public readonly tag: SyntheticsBrokenLinksMonitorTagList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList">SyntheticsBrokenLinksMonitorTagList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationsPrivateInput`<sup>Optional</sup> <a name="locationsPrivateInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.locationsPrivateInput"></a>

```typescript
public readonly locationsPrivateInput: string[];
```

- *Type:* string[]

---

##### `locationsPublicInput`<sup>Optional</sup> <a name="locationsPublicInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.locationsPublicInput"></a>

```typescript
public readonly locationsPublicInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.periodInput"></a>

```typescript
public readonly periodInput: string;
```

- *Type:* string

---

##### `runtimeTypeInput`<sup>Optional</sup> <a name="runtimeTypeInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.runtimeTypeInput"></a>

```typescript
public readonly runtimeTypeInput: string;
```

- *Type:* string

---

##### `runtimeTypeVersionInput`<sup>Optional</sup> <a name="runtimeTypeVersionInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.runtimeTypeVersionInput"></a>

```typescript
public readonly runtimeTypeVersionInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.tagInput"></a>

```typescript
public readonly tagInput: IResolvable | SyntheticsBrokenLinksMonitorTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag">SyntheticsBrokenLinksMonitorTag</a>[]

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `useUnsupportedLegacyRuntimeInput`<sup>Optional</sup> <a name="useUnsupportedLegacyRuntimeInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.useUnsupportedLegacyRuntimeInput"></a>

```typescript
public readonly useUnsupportedLegacyRuntimeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `locationsPrivate`<sup>Required</sup> <a name="locationsPrivate" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.locationsPrivate"></a>

```typescript
public readonly locationsPrivate: string[];
```

- *Type:* string[]

---

##### `locationsPublic`<sup>Required</sup> <a name="locationsPublic" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.locationsPublic"></a>

```typescript
public readonly locationsPublic: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

---

##### `runtimeType`<sup>Required</sup> <a name="runtimeType" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.runtimeType"></a>

```typescript
public readonly runtimeType: string;
```

- *Type:* string

---

##### `runtimeTypeVersion`<sup>Required</sup> <a name="runtimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.runtimeTypeVersion"></a>

```typescript
public readonly runtimeTypeVersion: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `useUnsupportedLegacyRuntime`<sup>Required</sup> <a name="useUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.useUnsupportedLegacyRuntime"></a>

```typescript
public readonly useUnsupportedLegacyRuntime: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsBrokenLinksMonitorConfig <a name="SyntheticsBrokenLinksMonitorConfig" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.Initializer"></a>

```typescript
import { syntheticsBrokenLinksMonitor } from '@cdktf/provider-newrelic'

const syntheticsBrokenLinksMonitorConfig: syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.name">name</a></code> | <code>string</code> | The title of this monitor. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.period">period</a></code> | <code>string</code> | The interval at which this monitor should run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.status">status</a></code> | <code>string</code> | The monitor status (ENABLED or DISABLED). |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.uri">uri</a></code> | <code>string</code> | The URI the monitor runs against. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.accountId">accountId</a></code> | <code>number</code> | ID of the newrelic account. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/synthetics_broken_links_monitor#id SyntheticsBrokenLinksMonitor#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.locationsPrivate">locationsPrivate</a></code> | <code>string[]</code> | List private location GUIDs for which the monitor will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.locationsPublic">locationsPublic</a></code> | <code>string[]</code> | Publicly available location names in which the monitor will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.runtimeType">runtimeType</a></code> | <code>string</code> | The runtime type that the monitor will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.runtimeTypeVersion">runtimeTypeVersion</a></code> | <code>string</code> | The specific semver version of the runtime type. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.tag">tag</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag">SyntheticsBrokenLinksMonitorTag</a>[]</code> | tag block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.useUnsupportedLegacyRuntime">useUnsupportedLegacyRuntime</a></code> | <code>boolean \| cdktf.IResolvable</code> | A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The title of this monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/synthetics_broken_links_monitor#name SyntheticsBrokenLinksMonitor#name}

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

The interval at which this monitor should run.

Valid values are EVERY_MINUTE, EVERY_5_MINUTES, EVERY_10_MINUTES, EVERY_15_MINUTES, EVERY_30_MINUTES, EVERY_HOUR, EVERY_6_HOURS, EVERY_12_HOURS, or EVERY_DAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/synthetics_broken_links_monitor#period SyntheticsBrokenLinksMonitor#period}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The monitor status (ENABLED or DISABLED).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/synthetics_broken_links_monitor#status SyntheticsBrokenLinksMonitor#status}

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

The URI the monitor runs against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/synthetics_broken_links_monitor#uri SyntheticsBrokenLinksMonitor#uri}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

ID of the newrelic account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/synthetics_broken_links_monitor#account_id SyntheticsBrokenLinksMonitor#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/synthetics_broken_links_monitor#id SyntheticsBrokenLinksMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locationsPrivate`<sup>Optional</sup> <a name="locationsPrivate" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.locationsPrivate"></a>

```typescript
public readonly locationsPrivate: string[];
```

- *Type:* string[]

List private location GUIDs for which the monitor will run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/synthetics_broken_links_monitor#locations_private SyntheticsBrokenLinksMonitor#locations_private}

---

##### `locationsPublic`<sup>Optional</sup> <a name="locationsPublic" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.locationsPublic"></a>

```typescript
public readonly locationsPublic: string[];
```

- *Type:* string[]

Publicly available location names in which the monitor will run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/synthetics_broken_links_monitor#locations_public SyntheticsBrokenLinksMonitor#locations_public}

---

##### `runtimeType`<sup>Optional</sup> <a name="runtimeType" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.runtimeType"></a>

```typescript
public readonly runtimeType: string;
```

- *Type:* string

The runtime type that the monitor will run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/synthetics_broken_links_monitor#runtime_type SyntheticsBrokenLinksMonitor#runtime_type}

---

##### `runtimeTypeVersion`<sup>Optional</sup> <a name="runtimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.runtimeTypeVersion"></a>

```typescript
public readonly runtimeTypeVersion: string;
```

- *Type:* string

The specific semver version of the runtime type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/synthetics_broken_links_monitor#runtime_type_version SyntheticsBrokenLinksMonitor#runtime_type_version}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.tag"></a>

```typescript
public readonly tag: IResolvable | SyntheticsBrokenLinksMonitorTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag">SyntheticsBrokenLinksMonitorTag</a>[]

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/synthetics_broken_links_monitor#tag SyntheticsBrokenLinksMonitor#tag}

---

##### `useUnsupportedLegacyRuntime`<sup>Optional</sup> <a name="useUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.useUnsupportedLegacyRuntime"></a>

```typescript
public readonly useUnsupportedLegacyRuntime: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL.

Setting this attribute to true would allow skipping validation performed by the the New Relic Terraform Provider starting v3.43.0 to disallow using the legacy runtime with new monitors. This would, hence, allow creation of monitors in the legacy runtime until the October 22, 2024 Legacy Runtime EOL, if exempt by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/synthetics_broken_links_monitor#use_unsupported_legacy_runtime SyntheticsBrokenLinksMonitor#use_unsupported_legacy_runtime}

---

### SyntheticsBrokenLinksMonitorTag <a name="SyntheticsBrokenLinksMonitorTag" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag.Initializer"></a>

```typescript
import { syntheticsBrokenLinksMonitor } from '@cdktf/provider-newrelic'

const syntheticsBrokenLinksMonitorTag: syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag.property.key">key</a></code> | <code>string</code> | Name of the tag key. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag.property.values">values</a></code> | <code>string[]</code> | Values associated with the tag key. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Name of the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/synthetics_broken_links_monitor#key SyntheticsBrokenLinksMonitor#key}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Values associated with the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/synthetics_broken_links_monitor#values SyntheticsBrokenLinksMonitor#values}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsBrokenLinksMonitorTagList <a name="SyntheticsBrokenLinksMonitorTagList" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.Initializer"></a>

```typescript
import { syntheticsBrokenLinksMonitor } from '@cdktf/provider-newrelic'

new syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.get"></a>

```typescript
public get(index: number): SyntheticsBrokenLinksMonitorTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag">SyntheticsBrokenLinksMonitorTag</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsBrokenLinksMonitorTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag">SyntheticsBrokenLinksMonitorTag</a>[]

---


### SyntheticsBrokenLinksMonitorTagOutputReference <a name="SyntheticsBrokenLinksMonitorTagOutputReference" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.Initializer"></a>

```typescript
import { syntheticsBrokenLinksMonitor } from '@cdktf/provider-newrelic'

new syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag">SyntheticsBrokenLinksMonitorTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsBrokenLinksMonitorTag;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag">SyntheticsBrokenLinksMonitorTag</a>

---



