# `cloudOciLinkAccount` Submodule <a name="`cloudOciLinkAccount` Submodule" id="@cdktf/provider-newrelic.cloudOciLinkAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudOciLinkAccount <a name="CloudOciLinkAccount" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/cloud_oci_link_account newrelic_cloud_oci_link_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer"></a>

```typescript
import { cloudOciLinkAccount } from '@cdktf/provider-newrelic'

new cloudOciLinkAccount.CloudOciLinkAccount(scope: Construct, id: string, config: CloudOciLinkAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig">CloudOciLinkAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig">CloudOciLinkAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetIngestVaultOcid">resetIngestVaultOcid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetInstrumentationType">resetInstrumentationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetLoggingStackOcid">resetLoggingStackOcid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetMetricStackOcid">resetMetricStackOcid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetOciRegion">resetOciRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetUserVaultOcid">resetUserVaultOcid</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIngestVaultOcid` <a name="resetIngestVaultOcid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetIngestVaultOcid"></a>

```typescript
public resetIngestVaultOcid(): void
```

##### `resetInstrumentationType` <a name="resetInstrumentationType" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetInstrumentationType"></a>

```typescript
public resetInstrumentationType(): void
```

##### `resetLoggingStackOcid` <a name="resetLoggingStackOcid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetLoggingStackOcid"></a>

```typescript
public resetLoggingStackOcid(): void
```

##### `resetMetricStackOcid` <a name="resetMetricStackOcid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetMetricStackOcid"></a>

```typescript
public resetMetricStackOcid(): void
```

##### `resetOciRegion` <a name="resetOciRegion" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetOciRegion"></a>

```typescript
public resetOciRegion(): void
```

##### `resetUserVaultOcid` <a name="resetUserVaultOcid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetUserVaultOcid"></a>

```typescript
public resetUserVaultOcid(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudOciLinkAccount resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.isConstruct"></a>

```typescript
import { cloudOciLinkAccount } from '@cdktf/provider-newrelic'

cloudOciLinkAccount.CloudOciLinkAccount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.isTerraformElement"></a>

```typescript
import { cloudOciLinkAccount } from '@cdktf/provider-newrelic'

cloudOciLinkAccount.CloudOciLinkAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.isTerraformResource"></a>

```typescript
import { cloudOciLinkAccount } from '@cdktf/provider-newrelic'

cloudOciLinkAccount.CloudOciLinkAccount.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.generateConfigForImport"></a>

```typescript
import { cloudOciLinkAccount } from '@cdktf/provider-newrelic'

cloudOciLinkAccount.CloudOciLinkAccount.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudOciLinkAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudOciLinkAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudOciLinkAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/cloud_oci_link_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudOciLinkAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.compartmentOcidInput">compartmentOcidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ingestVaultOcidInput">ingestVaultOcidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.instrumentationTypeInput">instrumentationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.loggingStackOcidInput">loggingStackOcidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.metricStackOcidInput">metricStackOcidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociClientIdInput">ociClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociClientSecretInput">ociClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociDomainUrlInput">ociDomainUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociHomeRegionInput">ociHomeRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociRegionInput">ociRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociSvcUserNameInput">ociSvcUserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.userVaultOcidInput">userVaultOcidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ingestVaultOcid">ingestVaultOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.instrumentationType">instrumentationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.loggingStackOcid">loggingStackOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.metricStackOcid">metricStackOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociClientId">ociClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociClientSecret">ociClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociDomainUrl">ociDomainUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociHomeRegion">ociHomeRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociRegion">ociRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociSvcUserName">ociSvcUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.userVaultOcid">userVaultOcid</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `compartmentOcidInput`<sup>Optional</sup> <a name="compartmentOcidInput" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.compartmentOcidInput"></a>

```typescript
public readonly compartmentOcidInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ingestVaultOcidInput`<sup>Optional</sup> <a name="ingestVaultOcidInput" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ingestVaultOcidInput"></a>

```typescript
public readonly ingestVaultOcidInput: string;
```

- *Type:* string

---

##### `instrumentationTypeInput`<sup>Optional</sup> <a name="instrumentationTypeInput" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.instrumentationTypeInput"></a>

```typescript
public readonly instrumentationTypeInput: string;
```

- *Type:* string

---

##### `loggingStackOcidInput`<sup>Optional</sup> <a name="loggingStackOcidInput" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.loggingStackOcidInput"></a>

```typescript
public readonly loggingStackOcidInput: string;
```

- *Type:* string

---

##### `metricStackOcidInput`<sup>Optional</sup> <a name="metricStackOcidInput" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.metricStackOcidInput"></a>

```typescript
public readonly metricStackOcidInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ociClientIdInput`<sup>Optional</sup> <a name="ociClientIdInput" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociClientIdInput"></a>

```typescript
public readonly ociClientIdInput: string;
```

- *Type:* string

---

##### `ociClientSecretInput`<sup>Optional</sup> <a name="ociClientSecretInput" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociClientSecretInput"></a>

```typescript
public readonly ociClientSecretInput: string;
```

- *Type:* string

---

##### `ociDomainUrlInput`<sup>Optional</sup> <a name="ociDomainUrlInput" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociDomainUrlInput"></a>

```typescript
public readonly ociDomainUrlInput: string;
```

- *Type:* string

---

##### `ociHomeRegionInput`<sup>Optional</sup> <a name="ociHomeRegionInput" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociHomeRegionInput"></a>

```typescript
public readonly ociHomeRegionInput: string;
```

- *Type:* string

---

##### `ociRegionInput`<sup>Optional</sup> <a name="ociRegionInput" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociRegionInput"></a>

```typescript
public readonly ociRegionInput: string;
```

- *Type:* string

---

##### `ociSvcUserNameInput`<sup>Optional</sup> <a name="ociSvcUserNameInput" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociSvcUserNameInput"></a>

```typescript
public readonly ociSvcUserNameInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `userVaultOcidInput`<sup>Optional</sup> <a name="userVaultOcidInput" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.userVaultOcidInput"></a>

```typescript
public readonly userVaultOcidInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ingestVaultOcid`<sup>Required</sup> <a name="ingestVaultOcid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ingestVaultOcid"></a>

```typescript
public readonly ingestVaultOcid: string;
```

- *Type:* string

---

##### `instrumentationType`<sup>Required</sup> <a name="instrumentationType" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.instrumentationType"></a>

```typescript
public readonly instrumentationType: string;
```

- *Type:* string

---

##### `loggingStackOcid`<sup>Required</sup> <a name="loggingStackOcid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.loggingStackOcid"></a>

```typescript
public readonly loggingStackOcid: string;
```

- *Type:* string

---

##### `metricStackOcid`<sup>Required</sup> <a name="metricStackOcid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.metricStackOcid"></a>

```typescript
public readonly metricStackOcid: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ociClientId`<sup>Required</sup> <a name="ociClientId" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociClientId"></a>

```typescript
public readonly ociClientId: string;
```

- *Type:* string

---

##### `ociClientSecret`<sup>Required</sup> <a name="ociClientSecret" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociClientSecret"></a>

```typescript
public readonly ociClientSecret: string;
```

- *Type:* string

---

##### `ociDomainUrl`<sup>Required</sup> <a name="ociDomainUrl" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociDomainUrl"></a>

```typescript
public readonly ociDomainUrl: string;
```

- *Type:* string

---

##### `ociHomeRegion`<sup>Required</sup> <a name="ociHomeRegion" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociHomeRegion"></a>

```typescript
public readonly ociHomeRegion: string;
```

- *Type:* string

---

##### `ociRegion`<sup>Required</sup> <a name="ociRegion" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociRegion"></a>

```typescript
public readonly ociRegion: string;
```

- *Type:* string

---

##### `ociSvcUserName`<sup>Required</sup> <a name="ociSvcUserName" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociSvcUserName"></a>

```typescript
public readonly ociSvcUserName: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `userVaultOcid`<sup>Required</sup> <a name="userVaultOcid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.userVaultOcid"></a>

```typescript
public readonly userVaultOcid: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudOciLinkAccountConfig <a name="CloudOciLinkAccountConfig" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.Initializer"></a>

```typescript
import { cloudOciLinkAccount } from '@cdktf/provider-newrelic'

const cloudOciLinkAccountConfig: cloudOciLinkAccount.CloudOciLinkAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | The New Relic compartment OCID in OCI. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.name">name</a></code> | <code>string</code> | The linked account name. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociClientId">ociClientId</a></code> | <code>string</code> | The client ID for OCI WIF. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociClientSecret">ociClientSecret</a></code> | <code>string</code> | The client secret for OCI WIF. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociDomainUrl">ociDomainUrl</a></code> | <code>string</code> | The OCI domain URL for WIF. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociHomeRegion">ociHomeRegion</a></code> | <code>string</code> | The home region of the tenancy. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociSvcUserName">ociSvcUserName</a></code> | <code>string</code> | The service user name for OCI WIF. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.tenantId">tenantId</a></code> | <code>string</code> | The OCI tenant identifier. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.accountId">accountId</a></code> | <code>number</code> | The New Relic account ID where you want to link the OCI account. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/cloud_oci_link_account#id CloudOciLinkAccount#id}. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ingestVaultOcid">ingestVaultOcid</a></code> | <code>string</code> | The OCI ingest secret OCID. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.instrumentationType">instrumentationType</a></code> | <code>string</code> | Specifies the type of integration, such as metrics, logs, or a combination of logs and metrics. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.loggingStackOcid">loggingStackOcid</a></code> | <code>string</code> | The Logging stack identifier for the OCI account. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.metricStackOcid">metricStackOcid</a></code> | <code>string</code> | The metric stack identifier for the OCI account. This field is only used for updates, not during initial creation. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociRegion">ociRegion</a></code> | <code>string</code> | The OCI region for the account. This field is only used for updates, not during initial creation. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.userVaultOcid">userVaultOcid</a></code> | <code>string</code> | The user secret OCID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

The New Relic compartment OCID in OCI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/cloud_oci_link_account#compartment_ocid CloudOciLinkAccount#compartment_ocid}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The linked account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/cloud_oci_link_account#name CloudOciLinkAccount#name}

---

##### `ociClientId`<sup>Required</sup> <a name="ociClientId" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociClientId"></a>

```typescript
public readonly ociClientId: string;
```

- *Type:* string

The client ID for OCI WIF.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/cloud_oci_link_account#oci_client_id CloudOciLinkAccount#oci_client_id}

---

##### `ociClientSecret`<sup>Required</sup> <a name="ociClientSecret" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociClientSecret"></a>

```typescript
public readonly ociClientSecret: string;
```

- *Type:* string

The client secret for OCI WIF.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/cloud_oci_link_account#oci_client_secret CloudOciLinkAccount#oci_client_secret}

---

##### `ociDomainUrl`<sup>Required</sup> <a name="ociDomainUrl" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociDomainUrl"></a>

```typescript
public readonly ociDomainUrl: string;
```

- *Type:* string

The OCI domain URL for WIF.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/cloud_oci_link_account#oci_domain_url CloudOciLinkAccount#oci_domain_url}

---

##### `ociHomeRegion`<sup>Required</sup> <a name="ociHomeRegion" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociHomeRegion"></a>

```typescript
public readonly ociHomeRegion: string;
```

- *Type:* string

The home region of the tenancy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/cloud_oci_link_account#oci_home_region CloudOciLinkAccount#oci_home_region}

---

##### `ociSvcUserName`<sup>Required</sup> <a name="ociSvcUserName" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociSvcUserName"></a>

```typescript
public readonly ociSvcUserName: string;
```

- *Type:* string

The service user name for OCI WIF.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/cloud_oci_link_account#oci_svc_user_name CloudOciLinkAccount#oci_svc_user_name}

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

The OCI tenant identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/cloud_oci_link_account#tenant_id CloudOciLinkAccount#tenant_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The New Relic account ID where you want to link the OCI account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/cloud_oci_link_account#account_id CloudOciLinkAccount#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/cloud_oci_link_account#id CloudOciLinkAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingestVaultOcid`<sup>Optional</sup> <a name="ingestVaultOcid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ingestVaultOcid"></a>

```typescript
public readonly ingestVaultOcid: string;
```

- *Type:* string

The OCI ingest secret OCID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/cloud_oci_link_account#ingest_vault_ocid CloudOciLinkAccount#ingest_vault_ocid}

---

##### `instrumentationType`<sup>Optional</sup> <a name="instrumentationType" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.instrumentationType"></a>

```typescript
public readonly instrumentationType: string;
```

- *Type:* string

Specifies the type of integration, such as metrics, logs, or a combination of logs and metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/cloud_oci_link_account#instrumentation_type CloudOciLinkAccount#instrumentation_type}

---

##### `loggingStackOcid`<sup>Optional</sup> <a name="loggingStackOcid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.loggingStackOcid"></a>

```typescript
public readonly loggingStackOcid: string;
```

- *Type:* string

The Logging stack identifier for the OCI account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/cloud_oci_link_account#logging_stack_ocid CloudOciLinkAccount#logging_stack_ocid}

---

##### `metricStackOcid`<sup>Optional</sup> <a name="metricStackOcid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.metricStackOcid"></a>

```typescript
public readonly metricStackOcid: string;
```

- *Type:* string

The metric stack identifier for the OCI account. This field is only used for updates, not during initial creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/cloud_oci_link_account#metric_stack_ocid CloudOciLinkAccount#metric_stack_ocid}

---

##### `ociRegion`<sup>Optional</sup> <a name="ociRegion" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociRegion"></a>

```typescript
public readonly ociRegion: string;
```

- *Type:* string

The OCI region for the account. This field is only used for updates, not during initial creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/cloud_oci_link_account#oci_region CloudOciLinkAccount#oci_region}

---

##### `userVaultOcid`<sup>Optional</sup> <a name="userVaultOcid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.userVaultOcid"></a>

```typescript
public readonly userVaultOcid: string;
```

- *Type:* string

The user secret OCID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/cloud_oci_link_account#user_vault_ocid CloudOciLinkAccount#user_vault_ocid}

---



