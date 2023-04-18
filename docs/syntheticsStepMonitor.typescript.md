# `newrelic_synthetics_step_monitor`

Refer to the Terraform Registory for docs: [`newrelic_synthetics_step_monitor`](https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/synthetics_step_monitor).

# `syntheticsStepMonitor` Submodule <a name="`syntheticsStepMonitor` Submodule" id="@cdktf/provider-newrelic.syntheticsStepMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsStepMonitor <a name="SyntheticsStepMonitor" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/synthetics_step_monitor newrelic_synthetics_step_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer"></a>

```typescript
import { syntheticsStepMonitor } from '@cdktf/provider-newrelic'

new syntheticsStepMonitor.SyntheticsStepMonitor(scope: Construct, id: string, config: SyntheticsStepMonitorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig">SyntheticsStepMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig">SyntheticsStepMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.putLocationPrivate">putLocationPrivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.putSteps">putSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.putTag">putTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetEnableScreenshotOnFailureAndScript">resetEnableScreenshotOnFailureAndScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetLocationPrivate">resetLocationPrivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetLocationsPublic">resetLocationsPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetTag">resetTag</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putLocationPrivate` <a name="putLocationPrivate" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.putLocationPrivate"></a>

```typescript
public putLocationPrivate(value: IResolvable | SyntheticsStepMonitorLocationPrivate[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.putLocationPrivate.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate">SyntheticsStepMonitorLocationPrivate</a>[]

---

##### `putSteps` <a name="putSteps" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.putSteps"></a>

```typescript
public putSteps(value: IResolvable | SyntheticsStepMonitorSteps[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.putSteps.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps">SyntheticsStepMonitorSteps</a>[]

---

##### `putTag` <a name="putTag" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.putTag"></a>

```typescript
public putTag(value: IResolvable | SyntheticsStepMonitorTag[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.putTag.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag">SyntheticsStepMonitorTag</a>[]

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetEnableScreenshotOnFailureAndScript` <a name="resetEnableScreenshotOnFailureAndScript" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetEnableScreenshotOnFailureAndScript"></a>

```typescript
public resetEnableScreenshotOnFailureAndScript(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocationPrivate` <a name="resetLocationPrivate" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetLocationPrivate"></a>

```typescript
public resetLocationPrivate(): void
```

##### `resetLocationsPublic` <a name="resetLocationsPublic" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetLocationsPublic"></a>

```typescript
public resetLocationsPublic(): void
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetTag"></a>

```typescript
public resetTag(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.isConstruct"></a>

```typescript
import { syntheticsStepMonitor } from '@cdktf/provider-newrelic'

syntheticsStepMonitor.SyntheticsStepMonitor.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.isTerraformElement"></a>

```typescript
import { syntheticsStepMonitor } from '@cdktf/provider-newrelic'

syntheticsStepMonitor.SyntheticsStepMonitor.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.isTerraformResource"></a>

```typescript
import { syntheticsStepMonitor } from '@cdktf/provider-newrelic'

syntheticsStepMonitor.SyntheticsStepMonitor.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.guid">guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.locationPrivate">locationPrivate</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList">SyntheticsStepMonitorLocationPrivateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.steps">steps</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList">SyntheticsStepMonitorStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList">SyntheticsStepMonitorTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.enableScreenshotOnFailureAndScriptInput">enableScreenshotOnFailureAndScriptInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.locationPrivateInput">locationPrivateInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate">SyntheticsStepMonitorLocationPrivate</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.locationsPublicInput">locationsPublicInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.periodInput">periodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.stepsInput">stepsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps">SyntheticsStepMonitorSteps</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.tagInput">tagInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag">SyntheticsStepMonitorTag</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.enableScreenshotOnFailureAndScript">enableScreenshotOnFailureAndScript</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.locationsPublic">locationsPublic</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.period">period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

---

##### `locationPrivate`<sup>Required</sup> <a name="locationPrivate" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.locationPrivate"></a>

```typescript
public readonly locationPrivate: SyntheticsStepMonitorLocationPrivateList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList">SyntheticsStepMonitorLocationPrivateList</a>

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.steps"></a>

```typescript
public readonly steps: SyntheticsStepMonitorStepsList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList">SyntheticsStepMonitorStepsList</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.tag"></a>

```typescript
public readonly tag: SyntheticsStepMonitorTagList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList">SyntheticsStepMonitorTagList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `enableScreenshotOnFailureAndScriptInput`<sup>Optional</sup> <a name="enableScreenshotOnFailureAndScriptInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.enableScreenshotOnFailureAndScriptInput"></a>

```typescript
public readonly enableScreenshotOnFailureAndScriptInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationPrivateInput`<sup>Optional</sup> <a name="locationPrivateInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.locationPrivateInput"></a>

```typescript
public readonly locationPrivateInput: IResolvable | SyntheticsStepMonitorLocationPrivate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate">SyntheticsStepMonitorLocationPrivate</a>[]

---

##### `locationsPublicInput`<sup>Optional</sup> <a name="locationsPublicInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.locationsPublicInput"></a>

```typescript
public readonly locationsPublicInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.periodInput"></a>

```typescript
public readonly periodInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `stepsInput`<sup>Optional</sup> <a name="stepsInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.stepsInput"></a>

```typescript
public readonly stepsInput: IResolvable | SyntheticsStepMonitorSteps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps">SyntheticsStepMonitorSteps</a>[]

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.tagInput"></a>

```typescript
public readonly tagInput: IResolvable | SyntheticsStepMonitorTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag">SyntheticsStepMonitorTag</a>[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `enableScreenshotOnFailureAndScript`<sup>Required</sup> <a name="enableScreenshotOnFailureAndScript" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.enableScreenshotOnFailureAndScript"></a>

```typescript
public readonly enableScreenshotOnFailureAndScript: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `locationsPublic`<sup>Required</sup> <a name="locationsPublic" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.locationsPublic"></a>

```typescript
public readonly locationsPublic: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsStepMonitorConfig <a name="SyntheticsStepMonitorConfig" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.Initializer"></a>

```typescript
import { syntheticsStepMonitor } from '@cdktf/provider-newrelic'

const syntheticsStepMonitorConfig: syntheticsStepMonitor.SyntheticsStepMonitorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.name">name</a></code> | <code>string</code> | The title of this monitor. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.period">period</a></code> | <code>string</code> | The interval at which this monitor should run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.status">status</a></code> | <code>string</code> | The monitor status (i.e. ENABLED, MUTED, DISABLED). |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.steps">steps</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps">SyntheticsStepMonitorSteps</a>[]</code> | steps block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.accountId">accountId</a></code> | <code>number</code> | ID of the newrelic account. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.enableScreenshotOnFailureAndScript">enableScreenshotOnFailureAndScript</a></code> | <code>boolean \| cdktf.IResolvable</code> | Capture a screenshot during job execution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/synthetics_step_monitor#id SyntheticsStepMonitor#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.locationPrivate">locationPrivate</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate">SyntheticsStepMonitorLocationPrivate</a>[]</code> | location_private block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.locationsPublic">locationsPublic</a></code> | <code>string[]</code> | The public location(s) that the monitor will run jobs from. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.tag">tag</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag">SyntheticsStepMonitorTag</a>[]</code> | tag block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The title of this monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/synthetics_step_monitor#name SyntheticsStepMonitor#name}

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

The interval at which this monitor should run.

Valid values are EVERY_MINUTE, EVERY_5_MINUTES, EVERY_10_MINUTES, EVERY_15_MINUTES, EVERY_30_MINUTES, EVERY_HOUR, EVERY_6_HOURS, EVERY_12_HOURS, or EVERY_DAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/synthetics_step_monitor#period SyntheticsStepMonitor#period}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The monitor status (i.e. ENABLED, MUTED, DISABLED).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/synthetics_step_monitor#status SyntheticsStepMonitor#status}

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.steps"></a>

```typescript
public readonly steps: IResolvable | SyntheticsStepMonitorSteps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps">SyntheticsStepMonitorSteps</a>[]

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/synthetics_step_monitor#steps SyntheticsStepMonitor#steps}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

ID of the newrelic account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/synthetics_step_monitor#account_id SyntheticsStepMonitor#account_id}

---

##### `enableScreenshotOnFailureAndScript`<sup>Optional</sup> <a name="enableScreenshotOnFailureAndScript" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.enableScreenshotOnFailureAndScript"></a>

```typescript
public readonly enableScreenshotOnFailureAndScript: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Capture a screenshot during job execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/synthetics_step_monitor#enable_screenshot_on_failure_and_script SyntheticsStepMonitor#enable_screenshot_on_failure_and_script}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/synthetics_step_monitor#id SyntheticsStepMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locationPrivate`<sup>Optional</sup> <a name="locationPrivate" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.locationPrivate"></a>

```typescript
public readonly locationPrivate: IResolvable | SyntheticsStepMonitorLocationPrivate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate">SyntheticsStepMonitorLocationPrivate</a>[]

location_private block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/synthetics_step_monitor#location_private SyntheticsStepMonitor#location_private}

---

##### `locationsPublic`<sup>Optional</sup> <a name="locationsPublic" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.locationsPublic"></a>

```typescript
public readonly locationsPublic: string[];
```

- *Type:* string[]

The public location(s) that the monitor will run jobs from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/synthetics_step_monitor#locations_public SyntheticsStepMonitor#locations_public}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.tag"></a>

```typescript
public readonly tag: IResolvable | SyntheticsStepMonitorTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag">SyntheticsStepMonitorTag</a>[]

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/synthetics_step_monitor#tag SyntheticsStepMonitor#tag}

---

### SyntheticsStepMonitorLocationPrivate <a name="SyntheticsStepMonitorLocationPrivate" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate.Initializer"></a>

```typescript
import { syntheticsStepMonitor } from '@cdktf/provider-newrelic'

const syntheticsStepMonitorLocationPrivate: syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate.property.guid">guid</a></code> | <code>string</code> | The unique identifier for the Synthetics private location in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate.property.vsePassword">vsePassword</a></code> | <code>string</code> | The location's Verified Script Execution password (Only necessary if Verified Script Execution is enabled for the location). |

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

The unique identifier for the Synthetics private location in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/synthetics_step_monitor#guid SyntheticsStepMonitor#guid}

---

##### `vsePassword`<sup>Optional</sup> <a name="vsePassword" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate.property.vsePassword"></a>

```typescript
public readonly vsePassword: string;
```

- *Type:* string

The location's Verified Script Execution password (Only necessary if Verified Script Execution is enabled for the location).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/synthetics_step_monitor#vse_password SyntheticsStepMonitor#vse_password}

---

### SyntheticsStepMonitorSteps <a name="SyntheticsStepMonitorSteps" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps.Initializer"></a>

```typescript
import { syntheticsStepMonitor } from '@cdktf/provider-newrelic'

const syntheticsStepMonitorSteps: syntheticsStepMonitor.SyntheticsStepMonitorSteps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps.property.ordinal">ordinal</a></code> | <code>number</code> | The position of the step within the script ranging from 0-100. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps.property.type">type</a></code> | <code>string</code> | The type of step to be added to the script. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps.property.values">values</a></code> | <code>string[]</code> | The metadata values related to the check the step performs. |

---

##### `ordinal`<sup>Required</sup> <a name="ordinal" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps.property.ordinal"></a>

```typescript
public readonly ordinal: number;
```

- *Type:* number

The position of the step within the script ranging from 0-100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/synthetics_step_monitor#ordinal SyntheticsStepMonitor#ordinal}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of step to be added to the script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/synthetics_step_monitor#type SyntheticsStepMonitor#type}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The metadata values related to the check the step performs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/synthetics_step_monitor#values SyntheticsStepMonitor#values}

---

### SyntheticsStepMonitorTag <a name="SyntheticsStepMonitorTag" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag.Initializer"></a>

```typescript
import { syntheticsStepMonitor } from '@cdktf/provider-newrelic'

const syntheticsStepMonitorTag: syntheticsStepMonitor.SyntheticsStepMonitorTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag.property.key">key</a></code> | <code>string</code> | Name of the tag key. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag.property.values">values</a></code> | <code>string[]</code> | Values associated with the tag key. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Name of the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/synthetics_step_monitor#key SyntheticsStepMonitor#key}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Values associated with the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/synthetics_step_monitor#values SyntheticsStepMonitor#values}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsStepMonitorLocationPrivateList <a name="SyntheticsStepMonitorLocationPrivateList" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.Initializer"></a>

```typescript
import { syntheticsStepMonitor } from '@cdktf/provider-newrelic'

new syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.get"></a>

```typescript
public get(index: number): SyntheticsStepMonitorLocationPrivateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate">SyntheticsStepMonitorLocationPrivate</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsStepMonitorLocationPrivate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate">SyntheticsStepMonitorLocationPrivate</a>[]

---


### SyntheticsStepMonitorLocationPrivateOutputReference <a name="SyntheticsStepMonitorLocationPrivateOutputReference" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.Initializer"></a>

```typescript
import { syntheticsStepMonitor } from '@cdktf/provider-newrelic'

new syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.resetVsePassword">resetVsePassword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVsePassword` <a name="resetVsePassword" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.resetVsePassword"></a>

```typescript
public resetVsePassword(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.guidInput">guidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.vsePasswordInput">vsePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.guid">guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.vsePassword">vsePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate">SyntheticsStepMonitorLocationPrivate</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `guidInput`<sup>Optional</sup> <a name="guidInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.guidInput"></a>

```typescript
public readonly guidInput: string;
```

- *Type:* string

---

##### `vsePasswordInput`<sup>Optional</sup> <a name="vsePasswordInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.vsePasswordInput"></a>

```typescript
public readonly vsePasswordInput: string;
```

- *Type:* string

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

---

##### `vsePassword`<sup>Required</sup> <a name="vsePassword" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.vsePassword"></a>

```typescript
public readonly vsePassword: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsStepMonitorLocationPrivate | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate">SyntheticsStepMonitorLocationPrivate</a> | cdktf.IResolvable

---


### SyntheticsStepMonitorStepsList <a name="SyntheticsStepMonitorStepsList" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.Initializer"></a>

```typescript
import { syntheticsStepMonitor } from '@cdktf/provider-newrelic'

new syntheticsStepMonitor.SyntheticsStepMonitorStepsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.get"></a>

```typescript
public get(index: number): SyntheticsStepMonitorStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps">SyntheticsStepMonitorSteps</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsStepMonitorSteps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps">SyntheticsStepMonitorSteps</a>[]

---


### SyntheticsStepMonitorStepsOutputReference <a name="SyntheticsStepMonitorStepsOutputReference" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.Initializer"></a>

```typescript
import { syntheticsStepMonitor } from '@cdktf/provider-newrelic'

new syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValues` <a name="resetValues" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.ordinalInput">ordinalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.ordinal">ordinal</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps">SyntheticsStepMonitorSteps</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ordinalInput`<sup>Optional</sup> <a name="ordinalInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.ordinalInput"></a>

```typescript
public readonly ordinalInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `ordinal`<sup>Required</sup> <a name="ordinal" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.ordinal"></a>

```typescript
public readonly ordinal: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsStepMonitorSteps | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps">SyntheticsStepMonitorSteps</a> | cdktf.IResolvable

---


### SyntheticsStepMonitorTagList <a name="SyntheticsStepMonitorTagList" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.Initializer"></a>

```typescript
import { syntheticsStepMonitor } from '@cdktf/provider-newrelic'

new syntheticsStepMonitor.SyntheticsStepMonitorTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.get"></a>

```typescript
public get(index: number): SyntheticsStepMonitorTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag">SyntheticsStepMonitorTag</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsStepMonitorTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag">SyntheticsStepMonitorTag</a>[]

---


### SyntheticsStepMonitorTagOutputReference <a name="SyntheticsStepMonitorTagOutputReference" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.Initializer"></a>

```typescript
import { syntheticsStepMonitor } from '@cdktf/provider-newrelic'

new syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag">SyntheticsStepMonitorTag</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsStepMonitorTag | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag">SyntheticsStepMonitorTag</a> | cdktf.IResolvable

---



