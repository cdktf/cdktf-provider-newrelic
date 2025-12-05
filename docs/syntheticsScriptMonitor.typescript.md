# `syntheticsScriptMonitor` Submodule <a name="`syntheticsScriptMonitor` Submodule" id="@cdktf/provider-newrelic.syntheticsScriptMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsScriptMonitor <a name="SyntheticsScriptMonitor" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_script_monitor newrelic_synthetics_script_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer"></a>

```typescript
import { syntheticsScriptMonitor } from '@cdktf/provider-newrelic'

new syntheticsScriptMonitor.SyntheticsScriptMonitor(scope: Construct, id: string, config: SyntheticsScriptMonitorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig">SyntheticsScriptMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig">SyntheticsScriptMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.putLocationPrivate">putLocationPrivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.putTag">putTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetBrowsers">resetBrowsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetDeviceOrientation">resetDeviceOrientation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetDevices">resetDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetDeviceType">resetDeviceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetEnableScreenshotOnFailureAndScript">resetEnableScreenshotOnFailureAndScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetLocationPrivate">resetLocationPrivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetLocationsPublic">resetLocationsPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetRuntimeType">resetRuntimeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetRuntimeTypeVersion">resetRuntimeTypeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetScript">resetScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetScriptLanguage">resetScriptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetUseUnsupportedLegacyRuntime">resetUseUnsupportedLegacyRuntime</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLocationPrivate` <a name="putLocationPrivate" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.putLocationPrivate"></a>

```typescript
public putLocationPrivate(value: IResolvable | SyntheticsScriptMonitorLocationPrivate[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.putLocationPrivate.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate">SyntheticsScriptMonitorLocationPrivate</a>[]

---

##### `putTag` <a name="putTag" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.putTag"></a>

```typescript
public putTag(value: IResolvable | SyntheticsScriptMonitorTag[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.putTag.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag">SyntheticsScriptMonitorTag</a>[]

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetBrowsers` <a name="resetBrowsers" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetBrowsers"></a>

```typescript
public resetBrowsers(): void
```

##### `resetDeviceOrientation` <a name="resetDeviceOrientation" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetDeviceOrientation"></a>

```typescript
public resetDeviceOrientation(): void
```

##### `resetDevices` <a name="resetDevices" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetDevices"></a>

```typescript
public resetDevices(): void
```

##### `resetDeviceType` <a name="resetDeviceType" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetDeviceType"></a>

```typescript
public resetDeviceType(): void
```

##### `resetEnableScreenshotOnFailureAndScript` <a name="resetEnableScreenshotOnFailureAndScript" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetEnableScreenshotOnFailureAndScript"></a>

```typescript
public resetEnableScreenshotOnFailureAndScript(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocationPrivate` <a name="resetLocationPrivate" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetLocationPrivate"></a>

```typescript
public resetLocationPrivate(): void
```

##### `resetLocationsPublic` <a name="resetLocationsPublic" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetLocationsPublic"></a>

```typescript
public resetLocationsPublic(): void
```

##### `resetRuntimeType` <a name="resetRuntimeType" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetRuntimeType"></a>

```typescript
public resetRuntimeType(): void
```

##### `resetRuntimeTypeVersion` <a name="resetRuntimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetRuntimeTypeVersion"></a>

```typescript
public resetRuntimeTypeVersion(): void
```

##### `resetScript` <a name="resetScript" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetScript"></a>

```typescript
public resetScript(): void
```

##### `resetScriptLanguage` <a name="resetScriptLanguage" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetScriptLanguage"></a>

```typescript
public resetScriptLanguage(): void
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetTag"></a>

```typescript
public resetTag(): void
```

##### `resetUseUnsupportedLegacyRuntime` <a name="resetUseUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetUseUnsupportedLegacyRuntime"></a>

```typescript
public resetUseUnsupportedLegacyRuntime(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SyntheticsScriptMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.isConstruct"></a>

```typescript
import { syntheticsScriptMonitor } from '@cdktf/provider-newrelic'

syntheticsScriptMonitor.SyntheticsScriptMonitor.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.isTerraformElement"></a>

```typescript
import { syntheticsScriptMonitor } from '@cdktf/provider-newrelic'

syntheticsScriptMonitor.SyntheticsScriptMonitor.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.isTerraformResource"></a>

```typescript
import { syntheticsScriptMonitor } from '@cdktf/provider-newrelic'

syntheticsScriptMonitor.SyntheticsScriptMonitor.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.generateConfigForImport"></a>

```typescript
import { syntheticsScriptMonitor } from '@cdktf/provider-newrelic'

syntheticsScriptMonitor.SyntheticsScriptMonitor.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SyntheticsScriptMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SyntheticsScriptMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SyntheticsScriptMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_script_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SyntheticsScriptMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.guid">guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.locationPrivate">locationPrivate</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList">SyntheticsScriptMonitorLocationPrivateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.monitorId">monitorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.periodInMinutes">periodInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList">SyntheticsScriptMonitorTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.browsersInput">browsersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.deviceOrientationInput">deviceOrientationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.devicesInput">devicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.deviceTypeInput">deviceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.enableScreenshotOnFailureAndScriptInput">enableScreenshotOnFailureAndScriptInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.locationPrivateInput">locationPrivateInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate">SyntheticsScriptMonitorLocationPrivate</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.locationsPublicInput">locationsPublicInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.periodInput">periodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.runtimeTypeInput">runtimeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.runtimeTypeVersionInput">runtimeTypeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.scriptInput">scriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.scriptLanguageInput">scriptLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.tagInput">tagInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag">SyntheticsScriptMonitorTag</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.useUnsupportedLegacyRuntimeInput">useUnsupportedLegacyRuntimeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.browsers">browsers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.deviceOrientation">deviceOrientation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.devices">devices</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.deviceType">deviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.enableScreenshotOnFailureAndScript">enableScreenshotOnFailureAndScript</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.locationsPublic">locationsPublic</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.period">period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.runtimeType">runtimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.runtimeTypeVersion">runtimeTypeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.script">script</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.scriptLanguage">scriptLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.useUnsupportedLegacyRuntime">useUnsupportedLegacyRuntime</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

---

##### `locationPrivate`<sup>Required</sup> <a name="locationPrivate" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.locationPrivate"></a>

```typescript
public readonly locationPrivate: SyntheticsScriptMonitorLocationPrivateList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList">SyntheticsScriptMonitorLocationPrivateList</a>

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.monitorId"></a>

```typescript
public readonly monitorId: string;
```

- *Type:* string

---

##### `periodInMinutes`<sup>Required</sup> <a name="periodInMinutes" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.periodInMinutes"></a>

```typescript
public readonly periodInMinutes: number;
```

- *Type:* number

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.tag"></a>

```typescript
public readonly tag: SyntheticsScriptMonitorTagList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList">SyntheticsScriptMonitorTagList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `browsersInput`<sup>Optional</sup> <a name="browsersInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.browsersInput"></a>

```typescript
public readonly browsersInput: string[];
```

- *Type:* string[]

---

##### `deviceOrientationInput`<sup>Optional</sup> <a name="deviceOrientationInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.deviceOrientationInput"></a>

```typescript
public readonly deviceOrientationInput: string;
```

- *Type:* string

---

##### `devicesInput`<sup>Optional</sup> <a name="devicesInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.devicesInput"></a>

```typescript
public readonly devicesInput: string[];
```

- *Type:* string[]

---

##### `deviceTypeInput`<sup>Optional</sup> <a name="deviceTypeInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.deviceTypeInput"></a>

```typescript
public readonly deviceTypeInput: string;
```

- *Type:* string

---

##### `enableScreenshotOnFailureAndScriptInput`<sup>Optional</sup> <a name="enableScreenshotOnFailureAndScriptInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.enableScreenshotOnFailureAndScriptInput"></a>

```typescript
public readonly enableScreenshotOnFailureAndScriptInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationPrivateInput`<sup>Optional</sup> <a name="locationPrivateInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.locationPrivateInput"></a>

```typescript
public readonly locationPrivateInput: IResolvable | SyntheticsScriptMonitorLocationPrivate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate">SyntheticsScriptMonitorLocationPrivate</a>[]

---

##### `locationsPublicInput`<sup>Optional</sup> <a name="locationsPublicInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.locationsPublicInput"></a>

```typescript
public readonly locationsPublicInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.periodInput"></a>

```typescript
public readonly periodInput: string;
```

- *Type:* string

---

##### `runtimeTypeInput`<sup>Optional</sup> <a name="runtimeTypeInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.runtimeTypeInput"></a>

```typescript
public readonly runtimeTypeInput: string;
```

- *Type:* string

---

##### `runtimeTypeVersionInput`<sup>Optional</sup> <a name="runtimeTypeVersionInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.runtimeTypeVersionInput"></a>

```typescript
public readonly runtimeTypeVersionInput: string;
```

- *Type:* string

---

##### `scriptInput`<sup>Optional</sup> <a name="scriptInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.scriptInput"></a>

```typescript
public readonly scriptInput: string;
```

- *Type:* string

---

##### `scriptLanguageInput`<sup>Optional</sup> <a name="scriptLanguageInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.scriptLanguageInput"></a>

```typescript
public readonly scriptLanguageInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.tagInput"></a>

```typescript
public readonly tagInput: IResolvable | SyntheticsScriptMonitorTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag">SyntheticsScriptMonitorTag</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `useUnsupportedLegacyRuntimeInput`<sup>Optional</sup> <a name="useUnsupportedLegacyRuntimeInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.useUnsupportedLegacyRuntimeInput"></a>

```typescript
public readonly useUnsupportedLegacyRuntimeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `browsers`<sup>Required</sup> <a name="browsers" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.browsers"></a>

```typescript
public readonly browsers: string[];
```

- *Type:* string[]

---

##### `deviceOrientation`<sup>Required</sup> <a name="deviceOrientation" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.deviceOrientation"></a>

```typescript
public readonly deviceOrientation: string;
```

- *Type:* string

---

##### `devices`<sup>Required</sup> <a name="devices" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.devices"></a>

```typescript
public readonly devices: string[];
```

- *Type:* string[]

---

##### `deviceType`<sup>Required</sup> <a name="deviceType" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.deviceType"></a>

```typescript
public readonly deviceType: string;
```

- *Type:* string

---

##### `enableScreenshotOnFailureAndScript`<sup>Required</sup> <a name="enableScreenshotOnFailureAndScript" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.enableScreenshotOnFailureAndScript"></a>

```typescript
public readonly enableScreenshotOnFailureAndScript: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `locationsPublic`<sup>Required</sup> <a name="locationsPublic" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.locationsPublic"></a>

```typescript
public readonly locationsPublic: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

---

##### `runtimeType`<sup>Required</sup> <a name="runtimeType" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.runtimeType"></a>

```typescript
public readonly runtimeType: string;
```

- *Type:* string

---

##### `runtimeTypeVersion`<sup>Required</sup> <a name="runtimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.runtimeTypeVersion"></a>

```typescript
public readonly runtimeTypeVersion: string;
```

- *Type:* string

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.script"></a>

```typescript
public readonly script: string;
```

- *Type:* string

---

##### `scriptLanguage`<sup>Required</sup> <a name="scriptLanguage" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.scriptLanguage"></a>

```typescript
public readonly scriptLanguage: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `useUnsupportedLegacyRuntime`<sup>Required</sup> <a name="useUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.useUnsupportedLegacyRuntime"></a>

```typescript
public readonly useUnsupportedLegacyRuntime: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsScriptMonitorConfig <a name="SyntheticsScriptMonitorConfig" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.Initializer"></a>

```typescript
import { syntheticsScriptMonitor } from '@cdktf/provider-newrelic'

const syntheticsScriptMonitorConfig: syntheticsScriptMonitor.SyntheticsScriptMonitorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.name">name</a></code> | <code>string</code> | The title of this monitor. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.period">period</a></code> | <code>string</code> | The interval at which this monitor should run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.status">status</a></code> | <code>string</code> | The monitor status (ENABLED or DISABLED). |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.type">type</a></code> | <code>string</code> | The monitor type. Valid values are SCRIPT_BROWSER, and SCRIPT_API. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.accountId">accountId</a></code> | <code>number</code> | ID of the newrelic account. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.browsers">browsers</a></code> | <code>string[]</code> | The multiple browsers list on which synthetic monitors will run. Valid values are array of CHROME,and FIREFOX. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.deviceOrientation">deviceOrientation</a></code> | <code>string</code> | The device orientation the user would like to represent. Valid values are LANDSCAPE, PORTRAIT, or NONE. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.devices">devices</a></code> | <code>string[]</code> | The multiple devices list on which synthetic monitors will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.deviceType">deviceType</a></code> | <code>string</code> | The device type that a user can select. Valid values are MOBILE, TABLET, or NONE. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.enableScreenshotOnFailureAndScript">enableScreenshotOnFailureAndScript</a></code> | <code>boolean \| cdktf.IResolvable</code> | Capture a screenshot during job execution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_script_monitor#id SyntheticsScriptMonitor#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.locationPrivate">locationPrivate</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate">SyntheticsScriptMonitorLocationPrivate</a>[]</code> | location_private block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.locationsPublic">locationsPublic</a></code> | <code>string[]</code> | The public location(s) that the monitor will run jobs from. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.runtimeType">runtimeType</a></code> | <code>string</code> | The runtime type that the monitor will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.runtimeTypeVersion">runtimeTypeVersion</a></code> | <code>string</code> | The specific semver version of the runtime type. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.script">script</a></code> | <code>string</code> | The script that the monitor runs. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.scriptLanguage">scriptLanguage</a></code> | <code>string</code> | The programing language that should execute the script. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.tag">tag</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag">SyntheticsScriptMonitorTag</a>[]</code> | tag block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.useUnsupportedLegacyRuntime">useUnsupportedLegacyRuntime</a></code> | <code>boolean \| cdktf.IResolvable</code> | A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The title of this monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_script_monitor#name SyntheticsScriptMonitor#name}

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

The interval at which this monitor should run.

Valid values are EVERY_MINUTE, EVERY_5_MINUTES, EVERY_10_MINUTES, EVERY_15_MINUTES, EVERY_30_MINUTES, EVERY_HOUR, EVERY_6_HOURS, EVERY_12_HOURS, or EVERY_DAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_script_monitor#period SyntheticsScriptMonitor#period}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The monitor status (ENABLED or DISABLED).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_script_monitor#status SyntheticsScriptMonitor#status}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The monitor type. Valid values are SCRIPT_BROWSER, and SCRIPT_API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_script_monitor#type SyntheticsScriptMonitor#type}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

ID of the newrelic account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_script_monitor#account_id SyntheticsScriptMonitor#account_id}

---

##### `browsers`<sup>Optional</sup> <a name="browsers" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.browsers"></a>

```typescript
public readonly browsers: string[];
```

- *Type:* string[]

The multiple browsers list on which synthetic monitors will run. Valid values are array of CHROME,and FIREFOX.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_script_monitor#browsers SyntheticsScriptMonitor#browsers}

---

##### `deviceOrientation`<sup>Optional</sup> <a name="deviceOrientation" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.deviceOrientation"></a>

```typescript
public readonly deviceOrientation: string;
```

- *Type:* string

The device orientation the user would like to represent. Valid values are LANDSCAPE, PORTRAIT, or NONE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_script_monitor#device_orientation SyntheticsScriptMonitor#device_orientation}

---

##### `devices`<sup>Optional</sup> <a name="devices" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.devices"></a>

```typescript
public readonly devices: string[];
```

- *Type:* string[]

The multiple devices list on which synthetic monitors will run.

Valid values are array of DESKTOP, MOBILE_LANDSCAPE, MOBILE_PORTRAIT, TABLET_LANDSCAPE and TABLET_PORTRAIT

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_script_monitor#devices SyntheticsScriptMonitor#devices}

---

##### `deviceType`<sup>Optional</sup> <a name="deviceType" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.deviceType"></a>

```typescript
public readonly deviceType: string;
```

- *Type:* string

The device type that a user can select. Valid values are MOBILE, TABLET, or NONE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_script_monitor#device_type SyntheticsScriptMonitor#device_type}

---

##### `enableScreenshotOnFailureAndScript`<sup>Optional</sup> <a name="enableScreenshotOnFailureAndScript" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.enableScreenshotOnFailureAndScript"></a>

```typescript
public readonly enableScreenshotOnFailureAndScript: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Capture a screenshot during job execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_script_monitor#enable_screenshot_on_failure_and_script SyntheticsScriptMonitor#enable_screenshot_on_failure_and_script}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_script_monitor#id SyntheticsScriptMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locationPrivate`<sup>Optional</sup> <a name="locationPrivate" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.locationPrivate"></a>

```typescript
public readonly locationPrivate: IResolvable | SyntheticsScriptMonitorLocationPrivate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate">SyntheticsScriptMonitorLocationPrivate</a>[]

location_private block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_script_monitor#location_private SyntheticsScriptMonitor#location_private}

---

##### `locationsPublic`<sup>Optional</sup> <a name="locationsPublic" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.locationsPublic"></a>

```typescript
public readonly locationsPublic: string[];
```

- *Type:* string[]

The public location(s) that the monitor will run jobs from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_script_monitor#locations_public SyntheticsScriptMonitor#locations_public}

---

##### `runtimeType`<sup>Optional</sup> <a name="runtimeType" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.runtimeType"></a>

```typescript
public readonly runtimeType: string;
```

- *Type:* string

The runtime type that the monitor will run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_script_monitor#runtime_type SyntheticsScriptMonitor#runtime_type}

---

##### `runtimeTypeVersion`<sup>Optional</sup> <a name="runtimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.runtimeTypeVersion"></a>

```typescript
public readonly runtimeTypeVersion: string;
```

- *Type:* string

The specific semver version of the runtime type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_script_monitor#runtime_type_version SyntheticsScriptMonitor#runtime_type_version}

---

##### `script`<sup>Optional</sup> <a name="script" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.script"></a>

```typescript
public readonly script: string;
```

- *Type:* string

The script that the monitor runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_script_monitor#script SyntheticsScriptMonitor#script}

---

##### `scriptLanguage`<sup>Optional</sup> <a name="scriptLanguage" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.scriptLanguage"></a>

```typescript
public readonly scriptLanguage: string;
```

- *Type:* string

The programing language that should execute the script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_script_monitor#script_language SyntheticsScriptMonitor#script_language}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.tag"></a>

```typescript
public readonly tag: IResolvable | SyntheticsScriptMonitorTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag">SyntheticsScriptMonitorTag</a>[]

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_script_monitor#tag SyntheticsScriptMonitor#tag}

---

##### `useUnsupportedLegacyRuntime`<sup>Optional</sup> <a name="useUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.useUnsupportedLegacyRuntime"></a>

```typescript
public readonly useUnsupportedLegacyRuntime: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL.

Setting this attribute to true would allow skipping validation performed by the the New Relic Terraform Provider starting v3.43.0 to disallow using the legacy runtime with new monitors. This would, hence, allow creation of monitors in the legacy runtime until the October 22, 2024 Legacy Runtime EOL, if exempt by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_script_monitor#use_unsupported_legacy_runtime SyntheticsScriptMonitor#use_unsupported_legacy_runtime}

---

### SyntheticsScriptMonitorLocationPrivate <a name="SyntheticsScriptMonitorLocationPrivate" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate.Initializer"></a>

```typescript
import { syntheticsScriptMonitor } from '@cdktf/provider-newrelic'

const syntheticsScriptMonitorLocationPrivate: syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate.property.guid">guid</a></code> | <code>string</code> | The unique identifier for the Synthetics private location in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate.property.vsePassword">vsePassword</a></code> | <code>string</code> | The location's Verified Script Execution password (Only necessary if Verified Script Execution is enabled for the location). |

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

The unique identifier for the Synthetics private location in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_script_monitor#guid SyntheticsScriptMonitor#guid}

---

##### `vsePassword`<sup>Optional</sup> <a name="vsePassword" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate.property.vsePassword"></a>

```typescript
public readonly vsePassword: string;
```

- *Type:* string

The location's Verified Script Execution password (Only necessary if Verified Script Execution is enabled for the location).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_script_monitor#vse_password SyntheticsScriptMonitor#vse_password}

---

### SyntheticsScriptMonitorTag <a name="SyntheticsScriptMonitorTag" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag.Initializer"></a>

```typescript
import { syntheticsScriptMonitor } from '@cdktf/provider-newrelic'

const syntheticsScriptMonitorTag: syntheticsScriptMonitor.SyntheticsScriptMonitorTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag.property.key">key</a></code> | <code>string</code> | Name of the tag key. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag.property.values">values</a></code> | <code>string[]</code> | Values associated with the tag key. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Name of the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_script_monitor#key SyntheticsScriptMonitor#key}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Values associated with the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_script_monitor#values SyntheticsScriptMonitor#values}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsScriptMonitorLocationPrivateList <a name="SyntheticsScriptMonitorLocationPrivateList" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.Initializer"></a>

```typescript
import { syntheticsScriptMonitor } from '@cdktf/provider-newrelic'

new syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.get"></a>

```typescript
public get(index: number): SyntheticsScriptMonitorLocationPrivateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate">SyntheticsScriptMonitorLocationPrivate</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsScriptMonitorLocationPrivate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate">SyntheticsScriptMonitorLocationPrivate</a>[]

---


### SyntheticsScriptMonitorLocationPrivateOutputReference <a name="SyntheticsScriptMonitorLocationPrivateOutputReference" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.Initializer"></a>

```typescript
import { syntheticsScriptMonitor } from '@cdktf/provider-newrelic'

new syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.resetVsePassword">resetVsePassword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVsePassword` <a name="resetVsePassword" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.resetVsePassword"></a>

```typescript
public resetVsePassword(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.guidInput">guidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.vsePasswordInput">vsePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.guid">guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.vsePassword">vsePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate">SyntheticsScriptMonitorLocationPrivate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `guidInput`<sup>Optional</sup> <a name="guidInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.guidInput"></a>

```typescript
public readonly guidInput: string;
```

- *Type:* string

---

##### `vsePasswordInput`<sup>Optional</sup> <a name="vsePasswordInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.vsePasswordInput"></a>

```typescript
public readonly vsePasswordInput: string;
```

- *Type:* string

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

---

##### `vsePassword`<sup>Required</sup> <a name="vsePassword" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.vsePassword"></a>

```typescript
public readonly vsePassword: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsScriptMonitorLocationPrivate;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate">SyntheticsScriptMonitorLocationPrivate</a>

---


### SyntheticsScriptMonitorTagList <a name="SyntheticsScriptMonitorTagList" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.Initializer"></a>

```typescript
import { syntheticsScriptMonitor } from '@cdktf/provider-newrelic'

new syntheticsScriptMonitor.SyntheticsScriptMonitorTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.get"></a>

```typescript
public get(index: number): SyntheticsScriptMonitorTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag">SyntheticsScriptMonitorTag</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsScriptMonitorTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag">SyntheticsScriptMonitorTag</a>[]

---


### SyntheticsScriptMonitorTagOutputReference <a name="SyntheticsScriptMonitorTagOutputReference" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.Initializer"></a>

```typescript
import { syntheticsScriptMonitor } from '@cdktf/provider-newrelic'

new syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag">SyntheticsScriptMonitorTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsScriptMonitorTag;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag">SyntheticsScriptMonitorTag</a>

---



