# `dataNewrelicNotificationDestination` Submodule <a name="`dataNewrelicNotificationDestination` Submodule" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicNotificationDestination <a name="DataNewrelicNotificationDestination" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/d/notification_destination newrelic_notification_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer"></a>

```typescript
import { dataNewrelicNotificationDestination } from '@cdktf/provider-newrelic'

new dataNewrelicNotificationDestination.DataNewrelicNotificationDestination(scope: Construct, id: string, config: DataNewrelicNotificationDestinationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig">DataNewrelicNotificationDestinationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig">DataNewrelicNotificationDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.putAuthBasic">putAuthBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.putAuthToken">putAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.putProperty">putProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetAuthBasic">resetAuthBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetAuthToken">resetAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetProperty">resetProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAuthBasic` <a name="putAuthBasic" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.putAuthBasic"></a>

```typescript
public putAuthBasic(value: DataNewrelicNotificationDestinationAuthBasic): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.putAuthBasic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasic">DataNewrelicNotificationDestinationAuthBasic</a>

---

##### `putAuthToken` <a name="putAuthToken" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.putAuthToken"></a>

```typescript
public putAuthToken(value: DataNewrelicNotificationDestinationAuthToken): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.putAuthToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthToken">DataNewrelicNotificationDestinationAuthToken</a>

---

##### `putProperty` <a name="putProperty" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.putProperty"></a>

```typescript
public putProperty(value: IResolvable | DataNewrelicNotificationDestinationProperty[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.putProperty.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty">DataNewrelicNotificationDestinationProperty</a>[]

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetActive` <a name="resetActive" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetActive"></a>

```typescript
public resetActive(): void
```

##### `resetAuthBasic` <a name="resetAuthBasic" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetAuthBasic"></a>

```typescript
public resetAuthBasic(): void
```

##### `resetAuthToken` <a name="resetAuthToken" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetAuthToken"></a>

```typescript
public resetAuthToken(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProperty` <a name="resetProperty" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetProperty"></a>

```typescript
public resetProperty(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.isConstruct"></a>

```typescript
import { dataNewrelicNotificationDestination } from '@cdktf/provider-newrelic'

dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.isTerraformElement"></a>

```typescript
import { dataNewrelicNotificationDestination } from '@cdktf/provider-newrelic'

dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.isTerraformDataSource"></a>

```typescript
import { dataNewrelicNotificationDestination } from '@cdktf/provider-newrelic'

dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.authBasic">authBasic</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference">DataNewrelicNotificationDestinationAuthBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.authToken">authToken</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference">DataNewrelicNotificationDestinationAuthTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.lastSent">lastSent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.property">property</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList">DataNewrelicNotificationDestinationPropertyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.activeInput">activeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.authBasicInput">authBasicInput</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasic">DataNewrelicNotificationDestinationAuthBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.authTokenInput">authTokenInput</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthToken">DataNewrelicNotificationDestinationAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.propertyInput">propertyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty">DataNewrelicNotificationDestinationProperty</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.active">active</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `authBasic`<sup>Required</sup> <a name="authBasic" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.authBasic"></a>

```typescript
public readonly authBasic: DataNewrelicNotificationDestinationAuthBasicOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference">DataNewrelicNotificationDestinationAuthBasicOutputReference</a>

---

##### `authToken`<sup>Required</sup> <a name="authToken" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.authToken"></a>

```typescript
public readonly authToken: DataNewrelicNotificationDestinationAuthTokenOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference">DataNewrelicNotificationDestinationAuthTokenOutputReference</a>

---

##### `lastSent`<sup>Required</sup> <a name="lastSent" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.lastSent"></a>

```typescript
public readonly lastSent: string;
```

- *Type:* string

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.property"></a>

```typescript
public readonly property: DataNewrelicNotificationDestinationPropertyList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList">DataNewrelicNotificationDestinationPropertyList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.activeInput"></a>

```typescript
public readonly activeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `authBasicInput`<sup>Optional</sup> <a name="authBasicInput" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.authBasicInput"></a>

```typescript
public readonly authBasicInput: DataNewrelicNotificationDestinationAuthBasic;
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasic">DataNewrelicNotificationDestinationAuthBasic</a>

---

##### `authTokenInput`<sup>Optional</sup> <a name="authTokenInput" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.authTokenInput"></a>

```typescript
public readonly authTokenInput: DataNewrelicNotificationDestinationAuthToken;
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthToken">DataNewrelicNotificationDestinationAuthToken</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `propertyInput`<sup>Optional</sup> <a name="propertyInput" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.propertyInput"></a>

```typescript
public readonly propertyInput: IResolvable | DataNewrelicNotificationDestinationProperty[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty">DataNewrelicNotificationDestinationProperty</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicNotificationDestinationAuthBasic <a name="DataNewrelicNotificationDestinationAuthBasic" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasic.Initializer"></a>

```typescript
import { dataNewrelicNotificationDestination } from '@cdktf/provider-newrelic'

const dataNewrelicNotificationDestinationAuthBasic: dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasic = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasic.property.user">user</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/notification_destination#user DataNewrelicNotificationDestination#user}. |

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasic.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/notification_destination#user DataNewrelicNotificationDestination#user}.

---

### DataNewrelicNotificationDestinationAuthToken <a name="DataNewrelicNotificationDestinationAuthToken" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthToken.Initializer"></a>

```typescript
import { dataNewrelicNotificationDestination } from '@cdktf/provider-newrelic'

const dataNewrelicNotificationDestinationAuthToken: dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthToken = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthToken.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/notification_destination#prefix DataNewrelicNotificationDestination#prefix}. |

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthToken.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/notification_destination#prefix DataNewrelicNotificationDestination#prefix}.

---

### DataNewrelicNotificationDestinationConfig <a name="DataNewrelicNotificationDestinationConfig" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.Initializer"></a>

```typescript
import { dataNewrelicNotificationDestination } from '@cdktf/provider-newrelic'

const dataNewrelicNotificationDestinationConfig: dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.id">id</a></code> | <code>string</code> | The ID of the destination. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.accountId">accountId</a></code> | <code>number</code> | The account ID under which to put the destination. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.active">active</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether the destination is active. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.authBasic">authBasic</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasic">DataNewrelicNotificationDestinationAuthBasic</a></code> | auth_basic block. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.authToken">authToken</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthToken">DataNewrelicNotificationDestinationAuthToken</a></code> | auth_token block. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.name">name</a></code> | <code>string</code> | The name of the destination. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.property">property</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty">DataNewrelicNotificationDestinationProperty</a>[]</code> | property block. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.type">type</a></code> | <code>string</code> | The type of the destination. One of: (WEBHOOK, EMAIL, SERVICE_NOW, PAGERDUTY_ACCOUNT_INTEGRATION, PAGERDUTY_SERVICE_INTEGRATION, JIRA, SLACK, SLACK_COLLABORATION, SLACK_LEGACY, MOBILE_PUSH, EVENT_BRIDGE). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The ID of the destination.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/notification_destination#id DataNewrelicNotificationDestination#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The account ID under which to put the destination.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/notification_destination#account_id DataNewrelicNotificationDestination#account_id}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether the destination is active.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/notification_destination#active DataNewrelicNotificationDestination#active}

---

##### `authBasic`<sup>Optional</sup> <a name="authBasic" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.authBasic"></a>

```typescript
public readonly authBasic: DataNewrelicNotificationDestinationAuthBasic;
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasic">DataNewrelicNotificationDestinationAuthBasic</a>

auth_basic block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/notification_destination#auth_basic DataNewrelicNotificationDestination#auth_basic}

---

##### `authToken`<sup>Optional</sup> <a name="authToken" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.authToken"></a>

```typescript
public readonly authToken: DataNewrelicNotificationDestinationAuthToken;
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthToken">DataNewrelicNotificationDestinationAuthToken</a>

auth_token block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/notification_destination#auth_token DataNewrelicNotificationDestination#auth_token}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the destination.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/notification_destination#name DataNewrelicNotificationDestination#name}

---

##### `property`<sup>Optional</sup> <a name="property" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.property"></a>

```typescript
public readonly property: IResolvable | DataNewrelicNotificationDestinationProperty[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty">DataNewrelicNotificationDestinationProperty</a>[]

property block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/notification_destination#property DataNewrelicNotificationDestination#property}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the destination. One of: (WEBHOOK, EMAIL, SERVICE_NOW, PAGERDUTY_ACCOUNT_INTEGRATION, PAGERDUTY_SERVICE_INTEGRATION, JIRA, SLACK, SLACK_COLLABORATION, SLACK_LEGACY, MOBILE_PUSH, EVENT_BRIDGE).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/notification_destination#type DataNewrelicNotificationDestination#type}

---

### DataNewrelicNotificationDestinationProperty <a name="DataNewrelicNotificationDestinationProperty" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty.Initializer"></a>

```typescript
import { dataNewrelicNotificationDestination } from '@cdktf/provider-newrelic'

const dataNewrelicNotificationDestinationProperty: dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty.property.key">key</a></code> | <code>string</code> | Notification property key. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty.property.value">value</a></code> | <code>string</code> | Notification property value. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty.property.displayValue">displayValue</a></code> | <code>string</code> | Notification property display key. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty.property.label">label</a></code> | <code>string</code> | Notification property label. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Notification property key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/notification_destination#key DataNewrelicNotificationDestination#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Notification property value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/notification_destination#value DataNewrelicNotificationDestination#value}

---

##### `displayValue`<sup>Optional</sup> <a name="displayValue" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty.property.displayValue"></a>

```typescript
public readonly displayValue: string;
```

- *Type:* string

Notification property display key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/notification_destination#display_value DataNewrelicNotificationDestination#display_value}

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Notification property label.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/notification_destination#label DataNewrelicNotificationDestination#label}

---

## Classes <a name="Classes" id="Classes"></a>

### DataNewrelicNotificationDestinationAuthBasicOutputReference <a name="DataNewrelicNotificationDestinationAuthBasicOutputReference" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.Initializer"></a>

```typescript
import { dataNewrelicNotificationDestination } from '@cdktf/provider-newrelic'

new dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.resetUser">resetUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUser` <a name="resetUser" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.resetUser"></a>

```typescript
public resetUser(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasic">DataNewrelicNotificationDestinationAuthBasic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataNewrelicNotificationDestinationAuthBasic;
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasic">DataNewrelicNotificationDestinationAuthBasic</a>

---


### DataNewrelicNotificationDestinationAuthTokenOutputReference <a name="DataNewrelicNotificationDestinationAuthTokenOutputReference" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.Initializer"></a>

```typescript
import { dataNewrelicNotificationDestination } from '@cdktf/provider-newrelic'

new dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthToken">DataNewrelicNotificationDestinationAuthToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataNewrelicNotificationDestinationAuthToken;
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthToken">DataNewrelicNotificationDestinationAuthToken</a>

---


### DataNewrelicNotificationDestinationPropertyList <a name="DataNewrelicNotificationDestinationPropertyList" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.Initializer"></a>

```typescript
import { dataNewrelicNotificationDestination } from '@cdktf/provider-newrelic'

new dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.get"></a>

```typescript
public get(index: number): DataNewrelicNotificationDestinationPropertyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty">DataNewrelicNotificationDestinationProperty</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataNewrelicNotificationDestinationProperty[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty">DataNewrelicNotificationDestinationProperty</a>[]

---


### DataNewrelicNotificationDestinationPropertyOutputReference <a name="DataNewrelicNotificationDestinationPropertyOutputReference" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.Initializer"></a>

```typescript
import { dataNewrelicNotificationDestination } from '@cdktf/provider-newrelic'

new dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.resetDisplayValue">resetDisplayValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.resetLabel">resetLabel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayValue` <a name="resetDisplayValue" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.resetDisplayValue"></a>

```typescript
public resetDisplayValue(): void
```

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.resetLabel"></a>

```typescript
public resetLabel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.displayValueInput">displayValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.displayValue">displayValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty">DataNewrelicNotificationDestinationProperty</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayValueInput`<sup>Optional</sup> <a name="displayValueInput" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.displayValueInput"></a>

```typescript
public readonly displayValueInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `displayValue`<sup>Required</sup> <a name="displayValue" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.displayValue"></a>

```typescript
public readonly displayValue: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataNewrelicNotificationDestinationProperty | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty">DataNewrelicNotificationDestinationProperty</a> | cdktf.IResolvable

---



