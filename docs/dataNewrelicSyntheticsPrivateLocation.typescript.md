# `dataNewrelicSyntheticsPrivateLocation` Submodule <a name="`dataNewrelicSyntheticsPrivateLocation` Submodule" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicSyntheticsPrivateLocation <a name="DataNewrelicSyntheticsPrivateLocation" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/data-sources/synthetics_private_location newrelic_synthetics_private_location}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer"></a>

```typescript
import { dataNewrelicSyntheticsPrivateLocation } from '@cdktf/provider-newrelic'

new dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation(scope: Construct, id: string, config: DataNewrelicSyntheticsPrivateLocationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig">DataNewrelicSyntheticsPrivateLocationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig">DataNewrelicSyntheticsPrivateLocationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.resetKey">resetKey</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.resetKey"></a>

```typescript
public resetKey(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataNewrelicSyntheticsPrivateLocation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isConstruct"></a>

```typescript
import { dataNewrelicSyntheticsPrivateLocation } from '@cdktf/provider-newrelic'

dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isTerraformElement"></a>

```typescript
import { dataNewrelicSyntheticsPrivateLocation } from '@cdktf/provider-newrelic'

dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isTerraformDataSource"></a>

```typescript
import { dataNewrelicSyntheticsPrivateLocation } from '@cdktf/provider-newrelic'

dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.generateConfigForImport"></a>

```typescript
import { dataNewrelicSyntheticsPrivateLocation } from '@cdktf/provider-newrelic'

dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataNewrelicSyntheticsPrivateLocation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataNewrelicSyntheticsPrivateLocation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataNewrelicSyntheticsPrivateLocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/data-sources/synthetics_private_location#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataNewrelicSyntheticsPrivateLocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.keyInput">keyInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.key">key</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.keyInput"></a>

```typescript
public readonly keyInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.key"></a>

```typescript
public readonly key: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicSyntheticsPrivateLocationConfig <a name="DataNewrelicSyntheticsPrivateLocationConfig" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.Initializer"></a>

```typescript
import { dataNewrelicSyntheticsPrivateLocation } from '@cdktf/provider-newrelic'

const dataNewrelicSyntheticsPrivateLocationConfig: dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.name">name</a></code> | <code>string</code> | The name of the Synthetics monitor private location. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.accountId">accountId</a></code> | <code>number</code> | The ID of the account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/data-sources/synthetics_private_location#id DataNewrelicSyntheticsPrivateLocation#id}. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.key">key</a></code> | <code>string[]</code> | The key of the queried private location. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Synthetics monitor private location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/data-sources/synthetics_private_location#name DataNewrelicSyntheticsPrivateLocation#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The ID of the account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/data-sources/synthetics_private_location#account_id DataNewrelicSyntheticsPrivateLocation#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/data-sources/synthetics_private_location#id DataNewrelicSyntheticsPrivateLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.key"></a>

```typescript
public readonly key: string[];
```

- *Type:* string[]

The key of the queried private location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/data-sources/synthetics_private_location#key DataNewrelicSyntheticsPrivateLocation#key}

---



