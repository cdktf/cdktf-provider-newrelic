# `syntheticsAlertCondition` Submodule <a name="`syntheticsAlertCondition` Submodule" id="@cdktf/provider-newrelic.syntheticsAlertCondition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsAlertCondition <a name="SyntheticsAlertCondition" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_alert_condition newrelic_synthetics_alert_condition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer"></a>

```typescript
import { syntheticsAlertCondition } from '@cdktf/provider-newrelic'

new syntheticsAlertCondition.SyntheticsAlertCondition(scope: Construct, id: string, config: SyntheticsAlertConditionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig">SyntheticsAlertConditionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig">SyntheticsAlertConditionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.resetRunbookUrl">resetRunbookUrl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRunbookUrl` <a name="resetRunbookUrl" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.resetRunbookUrl"></a>

```typescript
public resetRunbookUrl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.isConstruct"></a>

```typescript
import { syntheticsAlertCondition } from '@cdktf/provider-newrelic'

syntheticsAlertCondition.SyntheticsAlertCondition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.isTerraformElement"></a>

```typescript
import { syntheticsAlertCondition } from '@cdktf/provider-newrelic'

syntheticsAlertCondition.SyntheticsAlertCondition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.isTerraformResource"></a>

```typescript
import { syntheticsAlertCondition } from '@cdktf/provider-newrelic'

syntheticsAlertCondition.SyntheticsAlertCondition.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.entityGuid">entityGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.monitorIdInput">monitorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.policyIdInput">policyIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.runbookUrlInput">runbookUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.monitorId">monitorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.policyId">policyId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.runbookUrl">runbookUrl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `entityGuid`<sup>Required</sup> <a name="entityGuid" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.entityGuid"></a>

```typescript
public readonly entityGuid: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `monitorIdInput`<sup>Optional</sup> <a name="monitorIdInput" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.monitorIdInput"></a>

```typescript
public readonly monitorIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: number;
```

- *Type:* number

---

##### `runbookUrlInput`<sup>Optional</sup> <a name="runbookUrlInput" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.runbookUrlInput"></a>

```typescript
public readonly runbookUrlInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.monitorId"></a>

```typescript
public readonly monitorId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.policyId"></a>

```typescript
public readonly policyId: number;
```

- *Type:* number

---

##### `runbookUrl`<sup>Required</sup> <a name="runbookUrl" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.runbookUrl"></a>

```typescript
public readonly runbookUrl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsAlertConditionConfig <a name="SyntheticsAlertConditionConfig" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.Initializer"></a>

```typescript
import { syntheticsAlertCondition } from '@cdktf/provider-newrelic'

const syntheticsAlertConditionConfig: syntheticsAlertCondition.SyntheticsAlertConditionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.monitorId">monitorId</a></code> | <code>string</code> | The ID of the Synthetics monitor to be referenced in the alert condition. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.name">name</a></code> | <code>string</code> | The title of this condition. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.policyId">policyId</a></code> | <code>number</code> | The ID of the policy where this condition should be used. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set whether to enable the alert condition. Defaults to true. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_alert_condition#id SyntheticsAlertCondition#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.runbookUrl">runbookUrl</a></code> | <code>string</code> | Runbook URL to display in notifications. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.monitorId"></a>

```typescript
public readonly monitorId: string;
```

- *Type:* string

The ID of the Synthetics monitor to be referenced in the alert condition.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_alert_condition#monitor_id SyntheticsAlertCondition#monitor_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The title of this condition.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_alert_condition#name SyntheticsAlertCondition#name}

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.policyId"></a>

```typescript
public readonly policyId: number;
```

- *Type:* number

The ID of the policy where this condition should be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_alert_condition#policy_id SyntheticsAlertCondition#policy_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set whether to enable the alert condition. Defaults to true.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_alert_condition#enabled SyntheticsAlertCondition#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_alert_condition#id SyntheticsAlertCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `runbookUrl`<sup>Optional</sup> <a name="runbookUrl" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.runbookUrl"></a>

```typescript
public readonly runbookUrl: string;
```

- *Type:* string

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_alert_condition#runbook_url SyntheticsAlertCondition#runbook_url}

---



