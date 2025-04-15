# `syntheticsMonitor` Submodule <a name="`syntheticsMonitor` Submodule" id="@cdktf/provider-newrelic.syntheticsMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsMonitor <a name="SyntheticsMonitor" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_monitor newrelic_synthetics_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer"></a>

```typescript
import { syntheticsMonitor } from '@cdktf/provider-newrelic'

new syntheticsMonitor.SyntheticsMonitor(scope: Construct, id: string, config: SyntheticsMonitorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig">SyntheticsMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig">SyntheticsMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.putCustomHeader">putCustomHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.putTag">putTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetBrowsers">resetBrowsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetBypassHeadRequest">resetBypassHeadRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetCustomHeader">resetCustomHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetDeviceOrientation">resetDeviceOrientation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetDevices">resetDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetDeviceType">resetDeviceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetEnableScreenshotOnFailureAndScript">resetEnableScreenshotOnFailureAndScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetLocationsPrivate">resetLocationsPrivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetLocationsPublic">resetLocationsPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetRuntimeType">resetRuntimeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetRuntimeTypeVersion">resetRuntimeTypeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetScriptLanguage">resetScriptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetTreatRedirectAsFailure">resetTreatRedirectAsFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetUri">resetUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetUseUnsupportedLegacyRuntime">resetUseUnsupportedLegacyRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetValidationString">resetValidationString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetVerifySsl">resetVerifySsl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomHeader` <a name="putCustomHeader" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.putCustomHeader"></a>

```typescript
public putCustomHeader(value: IResolvable | SyntheticsMonitorCustomHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.putCustomHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader">SyntheticsMonitorCustomHeader</a>[]

---

##### `putTag` <a name="putTag" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.putTag"></a>

```typescript
public putTag(value: IResolvable | SyntheticsMonitorTag[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.putTag.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag">SyntheticsMonitorTag</a>[]

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetBrowsers` <a name="resetBrowsers" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetBrowsers"></a>

```typescript
public resetBrowsers(): void
```

##### `resetBypassHeadRequest` <a name="resetBypassHeadRequest" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetBypassHeadRequest"></a>

```typescript
public resetBypassHeadRequest(): void
```

##### `resetCustomHeader` <a name="resetCustomHeader" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetCustomHeader"></a>

```typescript
public resetCustomHeader(): void
```

##### `resetDeviceOrientation` <a name="resetDeviceOrientation" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetDeviceOrientation"></a>

```typescript
public resetDeviceOrientation(): void
```

##### `resetDevices` <a name="resetDevices" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetDevices"></a>

```typescript
public resetDevices(): void
```

##### `resetDeviceType` <a name="resetDeviceType" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetDeviceType"></a>

```typescript
public resetDeviceType(): void
```

##### `resetEnableScreenshotOnFailureAndScript` <a name="resetEnableScreenshotOnFailureAndScript" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetEnableScreenshotOnFailureAndScript"></a>

```typescript
public resetEnableScreenshotOnFailureAndScript(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocationsPrivate` <a name="resetLocationsPrivate" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetLocationsPrivate"></a>

```typescript
public resetLocationsPrivate(): void
```

##### `resetLocationsPublic` <a name="resetLocationsPublic" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetLocationsPublic"></a>

```typescript
public resetLocationsPublic(): void
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetPeriod"></a>

```typescript
public resetPeriod(): void
```

##### `resetRuntimeType` <a name="resetRuntimeType" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetRuntimeType"></a>

```typescript
public resetRuntimeType(): void
```

##### `resetRuntimeTypeVersion` <a name="resetRuntimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetRuntimeTypeVersion"></a>

```typescript
public resetRuntimeTypeVersion(): void
```

##### `resetScriptLanguage` <a name="resetScriptLanguage" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetScriptLanguage"></a>

```typescript
public resetScriptLanguage(): void
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetTag"></a>

```typescript
public resetTag(): void
```

##### `resetTreatRedirectAsFailure` <a name="resetTreatRedirectAsFailure" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetTreatRedirectAsFailure"></a>

```typescript
public resetTreatRedirectAsFailure(): void
```

##### `resetUri` <a name="resetUri" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetUri"></a>

```typescript
public resetUri(): void
```

##### `resetUseUnsupportedLegacyRuntime` <a name="resetUseUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetUseUnsupportedLegacyRuntime"></a>

```typescript
public resetUseUnsupportedLegacyRuntime(): void
```

##### `resetValidationString` <a name="resetValidationString" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetValidationString"></a>

```typescript
public resetValidationString(): void
```

##### `resetVerifySsl` <a name="resetVerifySsl" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetVerifySsl"></a>

```typescript
public resetVerifySsl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SyntheticsMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.isConstruct"></a>

```typescript
import { syntheticsMonitor } from '@cdktf/provider-newrelic'

syntheticsMonitor.SyntheticsMonitor.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.isTerraformElement"></a>

```typescript
import { syntheticsMonitor } from '@cdktf/provider-newrelic'

syntheticsMonitor.SyntheticsMonitor.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.isTerraformResource"></a>

```typescript
import { syntheticsMonitor } from '@cdktf/provider-newrelic'

syntheticsMonitor.SyntheticsMonitor.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.generateConfigForImport"></a>

```typescript
import { syntheticsMonitor } from '@cdktf/provider-newrelic'

syntheticsMonitor.SyntheticsMonitor.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SyntheticsMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SyntheticsMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SyntheticsMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SyntheticsMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.customHeader">customHeader</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList">SyntheticsMonitorCustomHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.monitorId">monitorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.periodInMinutes">periodInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList">SyntheticsMonitorTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.browsersInput">browsersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.bypassHeadRequestInput">bypassHeadRequestInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.customHeaderInput">customHeaderInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader">SyntheticsMonitorCustomHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.deviceOrientationInput">deviceOrientationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.devicesInput">devicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.deviceTypeInput">deviceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.enableScreenshotOnFailureAndScriptInput">enableScreenshotOnFailureAndScriptInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.locationsPrivateInput">locationsPrivateInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.locationsPublicInput">locationsPublicInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.periodInput">periodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.runtimeTypeInput">runtimeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.runtimeTypeVersionInput">runtimeTypeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.scriptLanguageInput">scriptLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.tagInput">tagInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag">SyntheticsMonitorTag</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.treatRedirectAsFailureInput">treatRedirectAsFailureInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.useUnsupportedLegacyRuntimeInput">useUnsupportedLegacyRuntimeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.validationStringInput">validationStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.verifySslInput">verifySslInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.browsers">browsers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.bypassHeadRequest">bypassHeadRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.deviceOrientation">deviceOrientation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.devices">devices</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.deviceType">deviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.enableScreenshotOnFailureAndScript">enableScreenshotOnFailureAndScript</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.locationsPrivate">locationsPrivate</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.locationsPublic">locationsPublic</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.period">period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.runtimeType">runtimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.runtimeTypeVersion">runtimeTypeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.scriptLanguage">scriptLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.treatRedirectAsFailure">treatRedirectAsFailure</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.useUnsupportedLegacyRuntime">useUnsupportedLegacyRuntime</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.validationString">validationString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.verifySsl">verifySsl</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customHeader`<sup>Required</sup> <a name="customHeader" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.customHeader"></a>

```typescript
public readonly customHeader: SyntheticsMonitorCustomHeaderList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList">SyntheticsMonitorCustomHeaderList</a>

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.monitorId"></a>

```typescript
public readonly monitorId: string;
```

- *Type:* string

---

##### `periodInMinutes`<sup>Required</sup> <a name="periodInMinutes" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.periodInMinutes"></a>

```typescript
public readonly periodInMinutes: number;
```

- *Type:* number

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.tag"></a>

```typescript
public readonly tag: SyntheticsMonitorTagList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList">SyntheticsMonitorTagList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `browsersInput`<sup>Optional</sup> <a name="browsersInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.browsersInput"></a>

```typescript
public readonly browsersInput: string[];
```

- *Type:* string[]

---

##### `bypassHeadRequestInput`<sup>Optional</sup> <a name="bypassHeadRequestInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.bypassHeadRequestInput"></a>

```typescript
public readonly bypassHeadRequestInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customHeaderInput`<sup>Optional</sup> <a name="customHeaderInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.customHeaderInput"></a>

```typescript
public readonly customHeaderInput: IResolvable | SyntheticsMonitorCustomHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader">SyntheticsMonitorCustomHeader</a>[]

---

##### `deviceOrientationInput`<sup>Optional</sup> <a name="deviceOrientationInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.deviceOrientationInput"></a>

```typescript
public readonly deviceOrientationInput: string;
```

- *Type:* string

---

##### `devicesInput`<sup>Optional</sup> <a name="devicesInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.devicesInput"></a>

```typescript
public readonly devicesInput: string[];
```

- *Type:* string[]

---

##### `deviceTypeInput`<sup>Optional</sup> <a name="deviceTypeInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.deviceTypeInput"></a>

```typescript
public readonly deviceTypeInput: string;
```

- *Type:* string

---

##### `enableScreenshotOnFailureAndScriptInput`<sup>Optional</sup> <a name="enableScreenshotOnFailureAndScriptInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.enableScreenshotOnFailureAndScriptInput"></a>

```typescript
public readonly enableScreenshotOnFailureAndScriptInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationsPrivateInput`<sup>Optional</sup> <a name="locationsPrivateInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.locationsPrivateInput"></a>

```typescript
public readonly locationsPrivateInput: string[];
```

- *Type:* string[]

---

##### `locationsPublicInput`<sup>Optional</sup> <a name="locationsPublicInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.locationsPublicInput"></a>

```typescript
public readonly locationsPublicInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.periodInput"></a>

```typescript
public readonly periodInput: string;
```

- *Type:* string

---

##### `runtimeTypeInput`<sup>Optional</sup> <a name="runtimeTypeInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.runtimeTypeInput"></a>

```typescript
public readonly runtimeTypeInput: string;
```

- *Type:* string

---

##### `runtimeTypeVersionInput`<sup>Optional</sup> <a name="runtimeTypeVersionInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.runtimeTypeVersionInput"></a>

```typescript
public readonly runtimeTypeVersionInput: string;
```

- *Type:* string

---

##### `scriptLanguageInput`<sup>Optional</sup> <a name="scriptLanguageInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.scriptLanguageInput"></a>

```typescript
public readonly scriptLanguageInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.tagInput"></a>

```typescript
public readonly tagInput: IResolvable | SyntheticsMonitorTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag">SyntheticsMonitorTag</a>[]

---

##### `treatRedirectAsFailureInput`<sup>Optional</sup> <a name="treatRedirectAsFailureInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.treatRedirectAsFailureInput"></a>

```typescript
public readonly treatRedirectAsFailureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `useUnsupportedLegacyRuntimeInput`<sup>Optional</sup> <a name="useUnsupportedLegacyRuntimeInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.useUnsupportedLegacyRuntimeInput"></a>

```typescript
public readonly useUnsupportedLegacyRuntimeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `validationStringInput`<sup>Optional</sup> <a name="validationStringInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.validationStringInput"></a>

```typescript
public readonly validationStringInput: string;
```

- *Type:* string

---

##### `verifySslInput`<sup>Optional</sup> <a name="verifySslInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.verifySslInput"></a>

```typescript
public readonly verifySslInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `browsers`<sup>Required</sup> <a name="browsers" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.browsers"></a>

```typescript
public readonly browsers: string[];
```

- *Type:* string[]

---

##### `bypassHeadRequest`<sup>Required</sup> <a name="bypassHeadRequest" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.bypassHeadRequest"></a>

```typescript
public readonly bypassHeadRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deviceOrientation`<sup>Required</sup> <a name="deviceOrientation" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.deviceOrientation"></a>

```typescript
public readonly deviceOrientation: string;
```

- *Type:* string

---

##### `devices`<sup>Required</sup> <a name="devices" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.devices"></a>

```typescript
public readonly devices: string[];
```

- *Type:* string[]

---

##### `deviceType`<sup>Required</sup> <a name="deviceType" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.deviceType"></a>

```typescript
public readonly deviceType: string;
```

- *Type:* string

---

##### `enableScreenshotOnFailureAndScript`<sup>Required</sup> <a name="enableScreenshotOnFailureAndScript" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.enableScreenshotOnFailureAndScript"></a>

```typescript
public readonly enableScreenshotOnFailureAndScript: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `locationsPrivate`<sup>Required</sup> <a name="locationsPrivate" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.locationsPrivate"></a>

```typescript
public readonly locationsPrivate: string[];
```

- *Type:* string[]

---

##### `locationsPublic`<sup>Required</sup> <a name="locationsPublic" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.locationsPublic"></a>

```typescript
public readonly locationsPublic: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

---

##### `runtimeType`<sup>Required</sup> <a name="runtimeType" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.runtimeType"></a>

```typescript
public readonly runtimeType: string;
```

- *Type:* string

---

##### `runtimeTypeVersion`<sup>Required</sup> <a name="runtimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.runtimeTypeVersion"></a>

```typescript
public readonly runtimeTypeVersion: string;
```

- *Type:* string

---

##### `scriptLanguage`<sup>Required</sup> <a name="scriptLanguage" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.scriptLanguage"></a>

```typescript
public readonly scriptLanguage: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `treatRedirectAsFailure`<sup>Required</sup> <a name="treatRedirectAsFailure" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.treatRedirectAsFailure"></a>

```typescript
public readonly treatRedirectAsFailure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `useUnsupportedLegacyRuntime`<sup>Required</sup> <a name="useUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.useUnsupportedLegacyRuntime"></a>

```typescript
public readonly useUnsupportedLegacyRuntime: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `validationString`<sup>Required</sup> <a name="validationString" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.validationString"></a>

```typescript
public readonly validationString: string;
```

- *Type:* string

---

##### `verifySsl`<sup>Required</sup> <a name="verifySsl" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.verifySsl"></a>

```typescript
public readonly verifySsl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsMonitorConfig <a name="SyntheticsMonitorConfig" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.Initializer"></a>

```typescript
import { syntheticsMonitor } from '@cdktf/provider-newrelic'

const syntheticsMonitorConfig: syntheticsMonitor.SyntheticsMonitorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.name">name</a></code> | <code>string</code> | The title of this monitor. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.status">status</a></code> | <code>string</code> | The monitor status (ENABLED or DISABLED). |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.type">type</a></code> | <code>string</code> | The monitor type. Valid values are SIMPLE AND BROWSER. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.accountId">accountId</a></code> | <code>number</code> | ID of the newrelic account. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.browsers">browsers</a></code> | <code>string[]</code> | The multiple browsers list on which synthetic monitors will run. Valid values are array of CHROME,and FIREFOX. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.bypassHeadRequest">bypassHeadRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | Bypass HEAD request. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.customHeader">customHeader</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader">SyntheticsMonitorCustomHeader</a>[]</code> | custom_header block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.deviceOrientation">deviceOrientation</a></code> | <code>string</code> | The device orientation the user would like to represent. Valid values are LANDSCAPE, PORTRAIT, or NONE. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.devices">devices</a></code> | <code>string[]</code> | The multiple devices list on which synthetic monitors will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.deviceType">deviceType</a></code> | <code>string</code> | The device type that a user can select. Valid values are MOBILE, TABLET, or NONE. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.enableScreenshotOnFailureAndScript">enableScreenshotOnFailureAndScript</a></code> | <code>boolean \| cdktf.IResolvable</code> | Capture a screenshot during job execution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_monitor#id SyntheticsMonitor#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.locationsPrivate">locationsPrivate</a></code> | <code>string[]</code> | The locations in which this monitor should be run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.locationsPublic">locationsPublic</a></code> | <code>string[]</code> | The locations in which this monitor should be run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.period">period</a></code> | <code>string</code> | The interval at which this monitor should run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.runtimeType">runtimeType</a></code> | <code>string</code> | The runtime type that the monitor will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.runtimeTypeVersion">runtimeTypeVersion</a></code> | <code>string</code> | The specific version of the runtime type selected. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.scriptLanguage">scriptLanguage</a></code> | <code>string</code> | The programing language that should execute the script. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.tag">tag</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag">SyntheticsMonitorTag</a>[]</code> | tag block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.treatRedirectAsFailure">treatRedirectAsFailure</a></code> | <code>boolean \| cdktf.IResolvable</code> | Fail the monitor check if redirected. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.uri">uri</a></code> | <code>string</code> | The URI for the monitor to hit. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.useUnsupportedLegacyRuntime">useUnsupportedLegacyRuntime</a></code> | <code>boolean \| cdktf.IResolvable</code> | A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.validationString">validationString</a></code> | <code>string</code> | The string to validate against in the response. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.verifySsl">verifySsl</a></code> | <code>boolean \| cdktf.IResolvable</code> | Verify SSL. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The title of this monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_monitor#name SyntheticsMonitor#name}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The monitor status (ENABLED or DISABLED).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_monitor#status SyntheticsMonitor#status}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The monitor type. Valid values are SIMPLE AND BROWSER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_monitor#type SyntheticsMonitor#type}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

ID of the newrelic account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_monitor#account_id SyntheticsMonitor#account_id}

---

##### `browsers`<sup>Optional</sup> <a name="browsers" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.browsers"></a>

```typescript
public readonly browsers: string[];
```

- *Type:* string[]

The multiple browsers list on which synthetic monitors will run. Valid values are array of CHROME,and FIREFOX.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_monitor#browsers SyntheticsMonitor#browsers}

---

##### `bypassHeadRequest`<sup>Optional</sup> <a name="bypassHeadRequest" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.bypassHeadRequest"></a>

```typescript
public readonly bypassHeadRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Bypass HEAD request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_monitor#bypass_head_request SyntheticsMonitor#bypass_head_request}

---

##### `customHeader`<sup>Optional</sup> <a name="customHeader" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.customHeader"></a>

```typescript
public readonly customHeader: IResolvable | SyntheticsMonitorCustomHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader">SyntheticsMonitorCustomHeader</a>[]

custom_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_monitor#custom_header SyntheticsMonitor#custom_header}

---

##### `deviceOrientation`<sup>Optional</sup> <a name="deviceOrientation" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.deviceOrientation"></a>

```typescript
public readonly deviceOrientation: string;
```

- *Type:* string

The device orientation the user would like to represent. Valid values are LANDSCAPE, PORTRAIT, or NONE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_monitor#device_orientation SyntheticsMonitor#device_orientation}

---

##### `devices`<sup>Optional</sup> <a name="devices" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.devices"></a>

```typescript
public readonly devices: string[];
```

- *Type:* string[]

The multiple devices list on which synthetic monitors will run.

Valid values are array of DESKTOP, MOBILE_LANDSCAPE, MOBILE_PORTRAIT, TABLET_LANDSCAPE and TABLET_PORTRAIT

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_monitor#devices SyntheticsMonitor#devices}

---

##### `deviceType`<sup>Optional</sup> <a name="deviceType" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.deviceType"></a>

```typescript
public readonly deviceType: string;
```

- *Type:* string

The device type that a user can select. Valid values are MOBILE, TABLET, or NONE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_monitor#device_type SyntheticsMonitor#device_type}

---

##### `enableScreenshotOnFailureAndScript`<sup>Optional</sup> <a name="enableScreenshotOnFailureAndScript" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.enableScreenshotOnFailureAndScript"></a>

```typescript
public readonly enableScreenshotOnFailureAndScript: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Capture a screenshot during job execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_monitor#enable_screenshot_on_failure_and_script SyntheticsMonitor#enable_screenshot_on_failure_and_script}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_monitor#id SyntheticsMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locationsPrivate`<sup>Optional</sup> <a name="locationsPrivate" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.locationsPrivate"></a>

```typescript
public readonly locationsPrivate: string[];
```

- *Type:* string[]

The locations in which this monitor should be run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_monitor#locations_private SyntheticsMonitor#locations_private}

---

##### `locationsPublic`<sup>Optional</sup> <a name="locationsPublic" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.locationsPublic"></a>

```typescript
public readonly locationsPublic: string[];
```

- *Type:* string[]

The locations in which this monitor should be run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_monitor#locations_public SyntheticsMonitor#locations_public}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

The interval at which this monitor should run.

Valid values are EVERY_MINUTE, EVERY_5_MINUTES, EVERY_10_MINUTES, EVERY_15_MINUTES, EVERY_30_MINUTES, EVERY_HOUR, EVERY_6_HOURS, EVERY_12_HOURS, or EVERY_DAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_monitor#period SyntheticsMonitor#period}

---

##### `runtimeType`<sup>Optional</sup> <a name="runtimeType" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.runtimeType"></a>

```typescript
public readonly runtimeType: string;
```

- *Type:* string

The runtime type that the monitor will run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_monitor#runtime_type SyntheticsMonitor#runtime_type}

---

##### `runtimeTypeVersion`<sup>Optional</sup> <a name="runtimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.runtimeTypeVersion"></a>

```typescript
public readonly runtimeTypeVersion: string;
```

- *Type:* string

The specific version of the runtime type selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_monitor#runtime_type_version SyntheticsMonitor#runtime_type_version}

---

##### `scriptLanguage`<sup>Optional</sup> <a name="scriptLanguage" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.scriptLanguage"></a>

```typescript
public readonly scriptLanguage: string;
```

- *Type:* string

The programing language that should execute the script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_monitor#script_language SyntheticsMonitor#script_language}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.tag"></a>

```typescript
public readonly tag: IResolvable | SyntheticsMonitorTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag">SyntheticsMonitorTag</a>[]

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_monitor#tag SyntheticsMonitor#tag}

---

##### `treatRedirectAsFailure`<sup>Optional</sup> <a name="treatRedirectAsFailure" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.treatRedirectAsFailure"></a>

```typescript
public readonly treatRedirectAsFailure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Fail the monitor check if redirected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_monitor#treat_redirect_as_failure SyntheticsMonitor#treat_redirect_as_failure}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

The URI for the monitor to hit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_monitor#uri SyntheticsMonitor#uri}

---

##### `useUnsupportedLegacyRuntime`<sup>Optional</sup> <a name="useUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.useUnsupportedLegacyRuntime"></a>

```typescript
public readonly useUnsupportedLegacyRuntime: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL.

Setting this attribute to true would allow skipping validation performed by the the New Relic Terraform Provider starting v3.43.0 to disallow using the legacy runtime with new monitors. This would, hence, allow creation of monitors in the legacy runtime until the October 22, 2024 Legacy Runtime EOL, if exempt by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_monitor#use_unsupported_legacy_runtime SyntheticsMonitor#use_unsupported_legacy_runtime}

---

##### `validationString`<sup>Optional</sup> <a name="validationString" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.validationString"></a>

```typescript
public readonly validationString: string;
```

- *Type:* string

The string to validate against in the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_monitor#validation_string SyntheticsMonitor#validation_string}

---

##### `verifySsl`<sup>Optional</sup> <a name="verifySsl" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.verifySsl"></a>

```typescript
public readonly verifySsl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Verify SSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_monitor#verify_ssl SyntheticsMonitor#verify_ssl}

---

### SyntheticsMonitorCustomHeader <a name="SyntheticsMonitorCustomHeader" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader.Initializer"></a>

```typescript
import { syntheticsMonitor } from '@cdktf/provider-newrelic'

const syntheticsMonitorCustomHeader: syntheticsMonitor.SyntheticsMonitorCustomHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader.property.name">name</a></code> | <code>string</code> | Header name. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader.property.value">value</a></code> | <code>string</code> | Header value. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_monitor#name SyntheticsMonitor#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_monitor#value SyntheticsMonitor#value}

---

### SyntheticsMonitorTag <a name="SyntheticsMonitorTag" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag.Initializer"></a>

```typescript
import { syntheticsMonitor } from '@cdktf/provider-newrelic'

const syntheticsMonitorTag: syntheticsMonitor.SyntheticsMonitorTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag.property.key">key</a></code> | <code>string</code> | Name of the tag key. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag.property.values">values</a></code> | <code>string[]</code> | Values associated with the tag key. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Name of the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_monitor#key SyntheticsMonitor#key}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Values associated with the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_monitor#values SyntheticsMonitor#values}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsMonitorCustomHeaderList <a name="SyntheticsMonitorCustomHeaderList" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.Initializer"></a>

```typescript
import { syntheticsMonitor } from '@cdktf/provider-newrelic'

new syntheticsMonitor.SyntheticsMonitorCustomHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.get"></a>

```typescript
public get(index: number): SyntheticsMonitorCustomHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader">SyntheticsMonitorCustomHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsMonitorCustomHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader">SyntheticsMonitorCustomHeader</a>[]

---


### SyntheticsMonitorCustomHeaderOutputReference <a name="SyntheticsMonitorCustomHeaderOutputReference" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.Initializer"></a>

```typescript
import { syntheticsMonitor } from '@cdktf/provider-newrelic'

new syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader">SyntheticsMonitorCustomHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsMonitorCustomHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader">SyntheticsMonitorCustomHeader</a>

---


### SyntheticsMonitorTagList <a name="SyntheticsMonitorTagList" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.Initializer"></a>

```typescript
import { syntheticsMonitor } from '@cdktf/provider-newrelic'

new syntheticsMonitor.SyntheticsMonitorTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.get"></a>

```typescript
public get(index: number): SyntheticsMonitorTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag">SyntheticsMonitorTag</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsMonitorTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag">SyntheticsMonitorTag</a>[]

---


### SyntheticsMonitorTagOutputReference <a name="SyntheticsMonitorTagOutputReference" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.Initializer"></a>

```typescript
import { syntheticsMonitor } from '@cdktf/provider-newrelic'

new syntheticsMonitor.SyntheticsMonitorTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag">SyntheticsMonitorTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsMonitorTag;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag">SyntheticsMonitorTag</a>

---



