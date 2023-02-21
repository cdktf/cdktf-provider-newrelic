# `oneDashboard` Submodule <a name="`oneDashboard` Submodule" id="@cdktf/provider-newrelic.oneDashboard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OneDashboard <a name="OneDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard newrelic_one_dashboard}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboard(scope: Construct, id: string, config: OneDashboardConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig">OneDashboardConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig">OneDashboardConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.putPage">putPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.putVariable">putVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.resetVariable">resetVariable</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putPage` <a name="putPage" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.putPage"></a>

```typescript
public putPage(value: IResolvable | OneDashboardPage[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.putPage.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage">OneDashboardPage</a>[]

---

##### `putVariable` <a name="putVariable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.putVariable"></a>

```typescript
public putVariable(value: IResolvable | OneDashboardVariable[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.putVariable.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable">OneDashboardVariable</a>[]

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.resetPermissions"></a>

```typescript
public resetPermissions(): void
```

##### `resetVariable` <a name="resetVariable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.resetVariable"></a>

```typescript
public resetVariable(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.isConstruct"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

oneDashboard.OneDashboard.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.isTerraformElement"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

oneDashboard.OneDashboard.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.isTerraformResource"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

oneDashboard.OneDashboard.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.guid">guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.page">page</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList">OneDashboardPageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.permalink">permalink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.variable">variable</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList">OneDashboardVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.pageInput">pageInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage">OneDashboardPage</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.permissionsInput">permissionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.variableInput">variableInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable">OneDashboardVariable</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.permissions">permissions</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.page"></a>

```typescript
public readonly page: OneDashboardPageList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList">OneDashboardPageList</a>

---

##### `permalink`<sup>Required</sup> <a name="permalink" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.permalink"></a>

```typescript
public readonly permalink: string;
```

- *Type:* string

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.variable"></a>

```typescript
public readonly variable: OneDashboardVariableList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList">OneDashboardVariableList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pageInput`<sup>Optional</sup> <a name="pageInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.pageInput"></a>

```typescript
public readonly pageInput: IResolvable | OneDashboardPage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage">OneDashboardPage</a>[]

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: string;
```

- *Type:* string

---

##### `variableInput`<sup>Optional</sup> <a name="variableInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.variableInput"></a>

```typescript
public readonly variableInput: IResolvable | OneDashboardVariable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable">OneDashboardVariable</a>[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OneDashboardConfig <a name="OneDashboardConfig" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

const oneDashboardConfig: oneDashboard.OneDashboardConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.name">name</a></code> | <code>string</code> | The dashboard's name. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.page">page</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage">OneDashboardPage</a>[]</code> | page block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.accountId">accountId</a></code> | <code>number</code> | The New Relic account ID where you want to create the dashboard. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.description">description</a></code> | <code>string</code> | The dashboard's description. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#id OneDashboard#id}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.permissions">permissions</a></code> | <code>string</code> | Determines who can see or edit the dashboard. Valid values are private, public_read_only, public_read_write. Defaults to public_read_only. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.variable">variable</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable">OneDashboardVariable</a>[]</code> | variable block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The dashboard's name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#name OneDashboard#name}

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.page"></a>

```typescript
public readonly page: IResolvable | OneDashboardPage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage">OneDashboardPage</a>[]

page block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#page OneDashboard#page}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The New Relic account ID where you want to create the dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The dashboard's description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#description OneDashboard#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#id OneDashboard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string

Determines who can see or edit the dashboard. Valid values are private, public_read_only, public_read_write. Defaults to public_read_only.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#permissions OneDashboard#permissions}

---

##### `variable`<sup>Optional</sup> <a name="variable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.variable"></a>

```typescript
public readonly variable: IResolvable | OneDashboardVariable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable">OneDashboardVariable</a>[]

variable block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#variable OneDashboard#variable}

---

### OneDashboardPage <a name="OneDashboardPage" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

const oneDashboardPage: oneDashboard.OneDashboardPage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.name">name</a></code> | <code>string</code> | The dashboard page's name. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.description">description</a></code> | <code>string</code> | The dashboard page's description. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetArea">widgetArea</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea">OneDashboardPageWidgetArea</a>[]</code> | widget_area block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetBar">widgetBar</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar">OneDashboardPageWidgetBar</a>[]</code> | widget_bar block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetBillboard">widgetBillboard</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard">OneDashboardPageWidgetBillboard</a>[]</code> | widget_billboard block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetBullet">widgetBullet</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet">OneDashboardPageWidgetBullet</a>[]</code> | widget_bullet block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetFunnel">widgetFunnel</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel">OneDashboardPageWidgetFunnel</a>[]</code> | widget_funnel block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetHeatmap">widgetHeatmap</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap">OneDashboardPageWidgetHeatmap</a>[]</code> | widget_heatmap block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetHistogram">widgetHistogram</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram">OneDashboardPageWidgetHistogram</a>[]</code> | widget_histogram block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetJson">widgetJson</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson">OneDashboardPageWidgetJson</a>[]</code> | widget_json block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetLine">widgetLine</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine">OneDashboardPageWidgetLine</a>[]</code> | widget_line block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetLogTable">widgetLogTable</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable">OneDashboardPageWidgetLogTable</a>[]</code> | widget_log_table block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetMarkdown">widgetMarkdown</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown">OneDashboardPageWidgetMarkdown</a>[]</code> | widget_markdown block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetPie">widgetPie</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie">OneDashboardPageWidgetPie</a>[]</code> | widget_pie block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetStackedBar">widgetStackedBar</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar">OneDashboardPageWidgetStackedBar</a>[]</code> | widget_stacked_bar block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetTable">widgetTable</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable">OneDashboardPageWidgetTable</a>[]</code> | widget_table block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The dashboard page's name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#name OneDashboard#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The dashboard page's description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#description OneDashboard#description}

---

##### `widgetArea`<sup>Optional</sup> <a name="widgetArea" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetArea"></a>

```typescript
public readonly widgetArea: IResolvable | OneDashboardPageWidgetArea[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea">OneDashboardPageWidgetArea</a>[]

widget_area block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_area OneDashboard#widget_area}

---

##### `widgetBar`<sup>Optional</sup> <a name="widgetBar" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetBar"></a>

```typescript
public readonly widgetBar: IResolvable | OneDashboardPageWidgetBar[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar">OneDashboardPageWidgetBar</a>[]

widget_bar block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_bar OneDashboard#widget_bar}

---

##### `widgetBillboard`<sup>Optional</sup> <a name="widgetBillboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetBillboard"></a>

```typescript
public readonly widgetBillboard: IResolvable | OneDashboardPageWidgetBillboard[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard">OneDashboardPageWidgetBillboard</a>[]

widget_billboard block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_billboard OneDashboard#widget_billboard}

---

##### `widgetBullet`<sup>Optional</sup> <a name="widgetBullet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetBullet"></a>

```typescript
public readonly widgetBullet: IResolvable | OneDashboardPageWidgetBullet[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet">OneDashboardPageWidgetBullet</a>[]

widget_bullet block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_bullet OneDashboard#widget_bullet}

---

##### `widgetFunnel`<sup>Optional</sup> <a name="widgetFunnel" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetFunnel"></a>

```typescript
public readonly widgetFunnel: IResolvable | OneDashboardPageWidgetFunnel[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel">OneDashboardPageWidgetFunnel</a>[]

widget_funnel block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_funnel OneDashboard#widget_funnel}

---

##### `widgetHeatmap`<sup>Optional</sup> <a name="widgetHeatmap" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetHeatmap"></a>

```typescript
public readonly widgetHeatmap: IResolvable | OneDashboardPageWidgetHeatmap[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap">OneDashboardPageWidgetHeatmap</a>[]

widget_heatmap block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_heatmap OneDashboard#widget_heatmap}

---

##### `widgetHistogram`<sup>Optional</sup> <a name="widgetHistogram" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetHistogram"></a>

```typescript
public readonly widgetHistogram: IResolvable | OneDashboardPageWidgetHistogram[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram">OneDashboardPageWidgetHistogram</a>[]

widget_histogram block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_histogram OneDashboard#widget_histogram}

---

##### `widgetJson`<sup>Optional</sup> <a name="widgetJson" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetJson"></a>

```typescript
public readonly widgetJson: IResolvable | OneDashboardPageWidgetJson[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson">OneDashboardPageWidgetJson</a>[]

widget_json block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_json OneDashboard#widget_json}

---

##### `widgetLine`<sup>Optional</sup> <a name="widgetLine" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetLine"></a>

```typescript
public readonly widgetLine: IResolvable | OneDashboardPageWidgetLine[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine">OneDashboardPageWidgetLine</a>[]

widget_line block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_line OneDashboard#widget_line}

---

##### `widgetLogTable`<sup>Optional</sup> <a name="widgetLogTable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetLogTable"></a>

```typescript
public readonly widgetLogTable: IResolvable | OneDashboardPageWidgetLogTable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable">OneDashboardPageWidgetLogTable</a>[]

widget_log_table block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_log_table OneDashboard#widget_log_table}

---

##### `widgetMarkdown`<sup>Optional</sup> <a name="widgetMarkdown" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetMarkdown"></a>

```typescript
public readonly widgetMarkdown: IResolvable | OneDashboardPageWidgetMarkdown[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown">OneDashboardPageWidgetMarkdown</a>[]

widget_markdown block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_markdown OneDashboard#widget_markdown}

---

##### `widgetPie`<sup>Optional</sup> <a name="widgetPie" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetPie"></a>

```typescript
public readonly widgetPie: IResolvable | OneDashboardPageWidgetPie[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie">OneDashboardPageWidgetPie</a>[]

widget_pie block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_pie OneDashboard#widget_pie}

---

##### `widgetStackedBar`<sup>Optional</sup> <a name="widgetStackedBar" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetStackedBar"></a>

```typescript
public readonly widgetStackedBar: IResolvable | OneDashboardPageWidgetStackedBar[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar">OneDashboardPageWidgetStackedBar</a>[]

widget_stacked_bar block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_stacked_bar OneDashboard#widget_stacked_bar}

---

##### `widgetTable`<sup>Optional</sup> <a name="widgetTable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetTable"></a>

```typescript
public readonly widgetTable: IResolvable | OneDashboardPageWidgetTable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable">OneDashboardPageWidgetTable</a>[]

widget_table block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_table OneDashboard#widget_table}

---

### OneDashboardPageWidgetArea <a name="OneDashboardPageWidgetArea" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetArea: oneDashboard.OneDashboardPageWidgetArea = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.column">column</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.nrqlQuery">nrqlQuery</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQuery">OneDashboardPageWidgetAreaNrqlQuery</a>[]</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.row">row</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.title">title</a></code> | <code>string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.height">height</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.ignoreTimeRange">ignoreTimeRange</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.width">width</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `nrqlQuery`<sup>Required</sup> <a name="nrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: IResolvable | OneDashboardPageWidgetAreaNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQuery">OneDashboardPageWidgetAreaNrqlQuery</a>[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `height`<sup>Optional</sup> <a name="height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `ignoreTimeRange`<sup>Optional</sup> <a name="ignoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.ignoreTimeRange"></a>

```typescript
public readonly ignoreTimeRange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `width`<sup>Optional</sup> <a name="width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetAreaNrqlQuery <a name="OneDashboardPageWidgetAreaNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQuery.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetAreaNrqlQuery: oneDashboard.OneDashboardPageWidgetAreaNrqlQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQuery.property.query">query</a></code> | <code>string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQuery.property.accountId">accountId</a></code> | <code>number</code> | The account id used for the NRQL query. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQuery.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetBar <a name="OneDashboardPageWidgetBar" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetBar: oneDashboard.OneDashboardPageWidgetBar = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.column">column</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.nrqlQuery">nrqlQuery</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQuery">OneDashboardPageWidgetBarNrqlQuery</a>[]</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.row">row</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.title">title</a></code> | <code>string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.filterCurrentDashboard">filterCurrentDashboard</a></code> | <code>boolean \| cdktf.IResolvable</code> | Use this item to filter the current dashboard. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.height">height</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.ignoreTimeRange">ignoreTimeRange</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.linkedEntityGuids">linkedEntityGuids</a></code> | <code>string[]</code> | Related entities. Currently only supports Dashboard entities, but may allow other cases in the future. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.width">width</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `nrqlQuery`<sup>Required</sup> <a name="nrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: IResolvable | OneDashboardPageWidgetBarNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQuery">OneDashboardPageWidgetBarNrqlQuery</a>[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `filterCurrentDashboard`<sup>Optional</sup> <a name="filterCurrentDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.filterCurrentDashboard"></a>

```typescript
public readonly filterCurrentDashboard: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Use this item to filter the current dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#filter_current_dashboard OneDashboard#filter_current_dashboard}

---

##### `height`<sup>Optional</sup> <a name="height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `ignoreTimeRange`<sup>Optional</sup> <a name="ignoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.ignoreTimeRange"></a>

```typescript
public readonly ignoreTimeRange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `linkedEntityGuids`<sup>Optional</sup> <a name="linkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.linkedEntityGuids"></a>

```typescript
public readonly linkedEntityGuids: string[];
```

- *Type:* string[]

Related entities. Currently only supports Dashboard entities, but may allow other cases in the future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#linked_entity_guids OneDashboard#linked_entity_guids}

---

##### `width`<sup>Optional</sup> <a name="width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetBarNrqlQuery <a name="OneDashboardPageWidgetBarNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQuery.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetBarNrqlQuery: oneDashboard.OneDashboardPageWidgetBarNrqlQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQuery.property.query">query</a></code> | <code>string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQuery.property.accountId">accountId</a></code> | <code>number</code> | The account id used for the NRQL query. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQuery.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetBillboard <a name="OneDashboardPageWidgetBillboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetBillboard: oneDashboard.OneDashboardPageWidgetBillboard = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.column">column</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.nrqlQuery">nrqlQuery</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQuery">OneDashboardPageWidgetBillboardNrqlQuery</a>[]</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.row">row</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.title">title</a></code> | <code>string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.critical">critical</a></code> | <code>string</code> | The critical threshold value. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.height">height</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.ignoreTimeRange">ignoreTimeRange</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.warning">warning</a></code> | <code>string</code> | The warning threshold value. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.width">width</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `nrqlQuery`<sup>Required</sup> <a name="nrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: IResolvable | OneDashboardPageWidgetBillboardNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQuery">OneDashboardPageWidgetBillboardNrqlQuery</a>[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `critical`<sup>Optional</sup> <a name="critical" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.critical"></a>

```typescript
public readonly critical: string;
```

- *Type:* string

The critical threshold value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#critical OneDashboard#critical}

---

##### `height`<sup>Optional</sup> <a name="height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `ignoreTimeRange`<sup>Optional</sup> <a name="ignoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.ignoreTimeRange"></a>

```typescript
public readonly ignoreTimeRange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `warning`<sup>Optional</sup> <a name="warning" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.warning"></a>

```typescript
public readonly warning: string;
```

- *Type:* string

The warning threshold value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#warning OneDashboard#warning}

---

##### `width`<sup>Optional</sup> <a name="width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetBillboardNrqlQuery <a name="OneDashboardPageWidgetBillboardNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQuery.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetBillboardNrqlQuery: oneDashboard.OneDashboardPageWidgetBillboardNrqlQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQuery.property.query">query</a></code> | <code>string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQuery.property.accountId">accountId</a></code> | <code>number</code> | The account id used for the NRQL query. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQuery.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetBullet <a name="OneDashboardPageWidgetBullet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetBullet: oneDashboard.OneDashboardPageWidgetBullet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.column">column</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.limit">limit</a></code> | <code>number</code> | The maximum value for the visualization. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.nrqlQuery">nrqlQuery</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQuery">OneDashboardPageWidgetBulletNrqlQuery</a>[]</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.row">row</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.title">title</a></code> | <code>string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.height">height</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.ignoreTimeRange">ignoreTimeRange</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.width">width</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

The maximum value for the visualization.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#limit OneDashboard#limit}

---

##### `nrqlQuery`<sup>Required</sup> <a name="nrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: IResolvable | OneDashboardPageWidgetBulletNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQuery">OneDashboardPageWidgetBulletNrqlQuery</a>[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `height`<sup>Optional</sup> <a name="height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `ignoreTimeRange`<sup>Optional</sup> <a name="ignoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.ignoreTimeRange"></a>

```typescript
public readonly ignoreTimeRange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `width`<sup>Optional</sup> <a name="width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetBulletNrqlQuery <a name="OneDashboardPageWidgetBulletNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQuery.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetBulletNrqlQuery: oneDashboard.OneDashboardPageWidgetBulletNrqlQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQuery.property.query">query</a></code> | <code>string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQuery.property.accountId">accountId</a></code> | <code>number</code> | The account id used for the NRQL query. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQuery.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetFunnel <a name="OneDashboardPageWidgetFunnel" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetFunnel: oneDashboard.OneDashboardPageWidgetFunnel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.column">column</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.nrqlQuery">nrqlQuery</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQuery">OneDashboardPageWidgetFunnelNrqlQuery</a>[]</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.row">row</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.title">title</a></code> | <code>string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.height">height</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.ignoreTimeRange">ignoreTimeRange</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.width">width</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `nrqlQuery`<sup>Required</sup> <a name="nrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: IResolvable | OneDashboardPageWidgetFunnelNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQuery">OneDashboardPageWidgetFunnelNrqlQuery</a>[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `height`<sup>Optional</sup> <a name="height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `ignoreTimeRange`<sup>Optional</sup> <a name="ignoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.ignoreTimeRange"></a>

```typescript
public readonly ignoreTimeRange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `width`<sup>Optional</sup> <a name="width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetFunnelNrqlQuery <a name="OneDashboardPageWidgetFunnelNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQuery.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetFunnelNrqlQuery: oneDashboard.OneDashboardPageWidgetFunnelNrqlQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQuery.property.query">query</a></code> | <code>string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQuery.property.accountId">accountId</a></code> | <code>number</code> | The account id used for the NRQL query. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQuery.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetHeatmap <a name="OneDashboardPageWidgetHeatmap" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetHeatmap: oneDashboard.OneDashboardPageWidgetHeatmap = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.column">column</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.nrqlQuery">nrqlQuery</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQuery">OneDashboardPageWidgetHeatmapNrqlQuery</a>[]</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.row">row</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.title">title</a></code> | <code>string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.filterCurrentDashboard">filterCurrentDashboard</a></code> | <code>boolean \| cdktf.IResolvable</code> | Use this item to filter the current dashboard. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.height">height</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.ignoreTimeRange">ignoreTimeRange</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.linkedEntityGuids">linkedEntityGuids</a></code> | <code>string[]</code> | Related entities. Currently only supports Dashboard entities, but may allow other cases in the future. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.width">width</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `nrqlQuery`<sup>Required</sup> <a name="nrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: IResolvable | OneDashboardPageWidgetHeatmapNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQuery">OneDashboardPageWidgetHeatmapNrqlQuery</a>[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `filterCurrentDashboard`<sup>Optional</sup> <a name="filterCurrentDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.filterCurrentDashboard"></a>

```typescript
public readonly filterCurrentDashboard: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Use this item to filter the current dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#filter_current_dashboard OneDashboard#filter_current_dashboard}

---

##### `height`<sup>Optional</sup> <a name="height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `ignoreTimeRange`<sup>Optional</sup> <a name="ignoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.ignoreTimeRange"></a>

```typescript
public readonly ignoreTimeRange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `linkedEntityGuids`<sup>Optional</sup> <a name="linkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.linkedEntityGuids"></a>

```typescript
public readonly linkedEntityGuids: string[];
```

- *Type:* string[]

Related entities. Currently only supports Dashboard entities, but may allow other cases in the future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#linked_entity_guids OneDashboard#linked_entity_guids}

---

##### `width`<sup>Optional</sup> <a name="width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetHeatmapNrqlQuery <a name="OneDashboardPageWidgetHeatmapNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQuery.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetHeatmapNrqlQuery: oneDashboard.OneDashboardPageWidgetHeatmapNrqlQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQuery.property.query">query</a></code> | <code>string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQuery.property.accountId">accountId</a></code> | <code>number</code> | The account id used for the NRQL query. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQuery.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetHistogram <a name="OneDashboardPageWidgetHistogram" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetHistogram: oneDashboard.OneDashboardPageWidgetHistogram = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.column">column</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.nrqlQuery">nrqlQuery</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQuery">OneDashboardPageWidgetHistogramNrqlQuery</a>[]</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.row">row</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.title">title</a></code> | <code>string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.height">height</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.ignoreTimeRange">ignoreTimeRange</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.width">width</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `nrqlQuery`<sup>Required</sup> <a name="nrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: IResolvable | OneDashboardPageWidgetHistogramNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQuery">OneDashboardPageWidgetHistogramNrqlQuery</a>[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `height`<sup>Optional</sup> <a name="height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `ignoreTimeRange`<sup>Optional</sup> <a name="ignoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.ignoreTimeRange"></a>

```typescript
public readonly ignoreTimeRange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `width`<sup>Optional</sup> <a name="width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetHistogramNrqlQuery <a name="OneDashboardPageWidgetHistogramNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQuery.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetHistogramNrqlQuery: oneDashboard.OneDashboardPageWidgetHistogramNrqlQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQuery.property.query">query</a></code> | <code>string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQuery.property.accountId">accountId</a></code> | <code>number</code> | The account id used for the NRQL query. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQuery.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetJson <a name="OneDashboardPageWidgetJson" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetJson: oneDashboard.OneDashboardPageWidgetJson = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.column">column</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.nrqlQuery">nrqlQuery</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQuery">OneDashboardPageWidgetJsonNrqlQuery</a>[]</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.row">row</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.title">title</a></code> | <code>string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.height">height</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.ignoreTimeRange">ignoreTimeRange</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.width">width</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `nrqlQuery`<sup>Required</sup> <a name="nrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: IResolvable | OneDashboardPageWidgetJsonNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQuery">OneDashboardPageWidgetJsonNrqlQuery</a>[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `height`<sup>Optional</sup> <a name="height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `ignoreTimeRange`<sup>Optional</sup> <a name="ignoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.ignoreTimeRange"></a>

```typescript
public readonly ignoreTimeRange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `width`<sup>Optional</sup> <a name="width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetJsonNrqlQuery <a name="OneDashboardPageWidgetJsonNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQuery.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetJsonNrqlQuery: oneDashboard.OneDashboardPageWidgetJsonNrqlQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQuery.property.query">query</a></code> | <code>string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQuery.property.accountId">accountId</a></code> | <code>number</code> | The account id used for the NRQL query. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQuery.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetLine <a name="OneDashboardPageWidgetLine" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetLine: oneDashboard.OneDashboardPageWidgetLine = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.column">column</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.nrqlQuery">nrqlQuery</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQuery">OneDashboardPageWidgetLineNrqlQuery</a>[]</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.row">row</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.title">title</a></code> | <code>string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.height">height</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.ignoreTimeRange">ignoreTimeRange</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.width">width</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `nrqlQuery`<sup>Required</sup> <a name="nrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: IResolvable | OneDashboardPageWidgetLineNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQuery">OneDashboardPageWidgetLineNrqlQuery</a>[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `height`<sup>Optional</sup> <a name="height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `ignoreTimeRange`<sup>Optional</sup> <a name="ignoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.ignoreTimeRange"></a>

```typescript
public readonly ignoreTimeRange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `width`<sup>Optional</sup> <a name="width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetLineNrqlQuery <a name="OneDashboardPageWidgetLineNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQuery.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetLineNrqlQuery: oneDashboard.OneDashboardPageWidgetLineNrqlQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQuery.property.query">query</a></code> | <code>string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQuery.property.accountId">accountId</a></code> | <code>number</code> | The account id used for the NRQL query. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQuery.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetLogTable <a name="OneDashboardPageWidgetLogTable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetLogTable: oneDashboard.OneDashboardPageWidgetLogTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.column">column</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.nrqlQuery">nrqlQuery</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQuery">OneDashboardPageWidgetLogTableNrqlQuery</a>[]</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.row">row</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.title">title</a></code> | <code>string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.height">height</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.ignoreTimeRange">ignoreTimeRange</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.width">width</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `nrqlQuery`<sup>Required</sup> <a name="nrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: IResolvable | OneDashboardPageWidgetLogTableNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQuery">OneDashboardPageWidgetLogTableNrqlQuery</a>[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `height`<sup>Optional</sup> <a name="height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `ignoreTimeRange`<sup>Optional</sup> <a name="ignoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.ignoreTimeRange"></a>

```typescript
public readonly ignoreTimeRange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `width`<sup>Optional</sup> <a name="width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetLogTableNrqlQuery <a name="OneDashboardPageWidgetLogTableNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQuery.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetLogTableNrqlQuery: oneDashboard.OneDashboardPageWidgetLogTableNrqlQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQuery.property.query">query</a></code> | <code>string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQuery.property.accountId">accountId</a></code> | <code>number</code> | The account id used for the NRQL query. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQuery.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetMarkdown <a name="OneDashboardPageWidgetMarkdown" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetMarkdown: oneDashboard.OneDashboardPageWidgetMarkdown = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.column">column</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.row">row</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.title">title</a></code> | <code>string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.height">height</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.ignoreTimeRange">ignoreTimeRange</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.text">text</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#text OneDashboard#text}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.width">width</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `row`<sup>Required</sup> <a name="row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `height`<sup>Optional</sup> <a name="height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `ignoreTimeRange`<sup>Optional</sup> <a name="ignoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.ignoreTimeRange"></a>

```typescript
public readonly ignoreTimeRange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#text OneDashboard#text}.

---

##### `width`<sup>Optional</sup> <a name="width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetPie <a name="OneDashboardPageWidgetPie" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetPie: oneDashboard.OneDashboardPageWidgetPie = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.column">column</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.nrqlQuery">nrqlQuery</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQuery">OneDashboardPageWidgetPieNrqlQuery</a>[]</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.row">row</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.title">title</a></code> | <code>string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.filterCurrentDashboard">filterCurrentDashboard</a></code> | <code>boolean \| cdktf.IResolvable</code> | Use this item to filter the current dashboard. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.height">height</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.ignoreTimeRange">ignoreTimeRange</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.linkedEntityGuids">linkedEntityGuids</a></code> | <code>string[]</code> | Related entities. Currently only supports Dashboard entities, but may allow other cases in the future. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.width">width</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `nrqlQuery`<sup>Required</sup> <a name="nrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: IResolvable | OneDashboardPageWidgetPieNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQuery">OneDashboardPageWidgetPieNrqlQuery</a>[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `filterCurrentDashboard`<sup>Optional</sup> <a name="filterCurrentDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.filterCurrentDashboard"></a>

```typescript
public readonly filterCurrentDashboard: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Use this item to filter the current dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#filter_current_dashboard OneDashboard#filter_current_dashboard}

---

##### `height`<sup>Optional</sup> <a name="height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `ignoreTimeRange`<sup>Optional</sup> <a name="ignoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.ignoreTimeRange"></a>

```typescript
public readonly ignoreTimeRange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `linkedEntityGuids`<sup>Optional</sup> <a name="linkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.linkedEntityGuids"></a>

```typescript
public readonly linkedEntityGuids: string[];
```

- *Type:* string[]

Related entities. Currently only supports Dashboard entities, but may allow other cases in the future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#linked_entity_guids OneDashboard#linked_entity_guids}

---

##### `width`<sup>Optional</sup> <a name="width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetPieNrqlQuery <a name="OneDashboardPageWidgetPieNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQuery.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetPieNrqlQuery: oneDashboard.OneDashboardPageWidgetPieNrqlQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQuery.property.query">query</a></code> | <code>string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQuery.property.accountId">accountId</a></code> | <code>number</code> | The account id used for the NRQL query. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQuery.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetStackedBar <a name="OneDashboardPageWidgetStackedBar" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetStackedBar: oneDashboard.OneDashboardPageWidgetStackedBar = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.column">column</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.nrqlQuery">nrqlQuery</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQuery">OneDashboardPageWidgetStackedBarNrqlQuery</a>[]</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.row">row</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.title">title</a></code> | <code>string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.height">height</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.ignoreTimeRange">ignoreTimeRange</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.width">width</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `nrqlQuery`<sup>Required</sup> <a name="nrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: IResolvable | OneDashboardPageWidgetStackedBarNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQuery">OneDashboardPageWidgetStackedBarNrqlQuery</a>[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `height`<sup>Optional</sup> <a name="height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `ignoreTimeRange`<sup>Optional</sup> <a name="ignoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.ignoreTimeRange"></a>

```typescript
public readonly ignoreTimeRange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `width`<sup>Optional</sup> <a name="width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetStackedBarNrqlQuery <a name="OneDashboardPageWidgetStackedBarNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQuery.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetStackedBarNrqlQuery: oneDashboard.OneDashboardPageWidgetStackedBarNrqlQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQuery.property.query">query</a></code> | <code>string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQuery.property.accountId">accountId</a></code> | <code>number</code> | The account id used for the NRQL query. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQuery.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetTable <a name="OneDashboardPageWidgetTable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetTable: oneDashboard.OneDashboardPageWidgetTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.column">column</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.nrqlQuery">nrqlQuery</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQuery">OneDashboardPageWidgetTableNrqlQuery</a>[]</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.row">row</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.title">title</a></code> | <code>string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.filterCurrentDashboard">filterCurrentDashboard</a></code> | <code>boolean \| cdktf.IResolvable</code> | Use this item to filter the current dashboard. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.height">height</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.ignoreTimeRange">ignoreTimeRange</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.linkedEntityGuids">linkedEntityGuids</a></code> | <code>string[]</code> | Related entities. Currently only supports Dashboard entities, but may allow other cases in the future. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.width">width</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `nrqlQuery`<sup>Required</sup> <a name="nrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: IResolvable | OneDashboardPageWidgetTableNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQuery">OneDashboardPageWidgetTableNrqlQuery</a>[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `filterCurrentDashboard`<sup>Optional</sup> <a name="filterCurrentDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.filterCurrentDashboard"></a>

```typescript
public readonly filterCurrentDashboard: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Use this item to filter the current dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#filter_current_dashboard OneDashboard#filter_current_dashboard}

---

##### `height`<sup>Optional</sup> <a name="height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `ignoreTimeRange`<sup>Optional</sup> <a name="ignoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.ignoreTimeRange"></a>

```typescript
public readonly ignoreTimeRange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `linkedEntityGuids`<sup>Optional</sup> <a name="linkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.linkedEntityGuids"></a>

```typescript
public readonly linkedEntityGuids: string[];
```

- *Type:* string[]

Related entities. Currently only supports Dashboard entities, but may allow other cases in the future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#linked_entity_guids OneDashboard#linked_entity_guids}

---

##### `width`<sup>Optional</sup> <a name="width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetTableNrqlQuery <a name="OneDashboardPageWidgetTableNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQuery.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetTableNrqlQuery: oneDashboard.OneDashboardPageWidgetTableNrqlQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQuery.property.query">query</a></code> | <code>string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQuery.property.accountId">accountId</a></code> | <code>number</code> | The account id used for the NRQL query. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQuery.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardVariable <a name="OneDashboardVariable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

const oneDashboardVariable: oneDashboard.OneDashboardVariable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.name">name</a></code> | <code>string</code> | The variable identifier. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.replacementStrategy">replacementStrategy</a></code> | <code>string</code> | Indicates the strategy to apply when replacing a variable in a NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.title">title</a></code> | <code>string</code> | Human-friendly display string for this variable. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.type">type</a></code> | <code>string</code> | Specifies the data type of the variable and where its possible values may come from. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.defaultValues">defaultValues</a></code> | <code>string[]</code> | Default values for this variable. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.isMultiSelection">isMultiSelection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether this variable supports multiple selection or not. Only applies to variables of type NRQL or ENUM. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.item">item</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItem">OneDashboardVariableItem</a>[]</code> | item block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.nrqlQuery">nrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery">OneDashboardVariableNrqlQuery</a></code> | nrql_query block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The variable identifier.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#name OneDashboard#name}

---

##### `replacementStrategy`<sup>Required</sup> <a name="replacementStrategy" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.replacementStrategy"></a>

```typescript
public readonly replacementStrategy: string;
```

- *Type:* string

Indicates the strategy to apply when replacing a variable in a NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#replacement_strategy OneDashboard#replacement_strategy}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Human-friendly display string for this variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Specifies the data type of the variable and where its possible values may come from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#type OneDashboard#type}

---

##### `defaultValues`<sup>Optional</sup> <a name="defaultValues" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.defaultValues"></a>

```typescript
public readonly defaultValues: string[];
```

- *Type:* string[]

Default values for this variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#default_values OneDashboard#default_values}

---

##### `isMultiSelection`<sup>Optional</sup> <a name="isMultiSelection" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.isMultiSelection"></a>

```typescript
public readonly isMultiSelection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether this variable supports multiple selection or not. Only applies to variables of type NRQL or ENUM.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#is_multi_selection OneDashboard#is_multi_selection}

---

##### `item`<sup>Optional</sup> <a name="item" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.item"></a>

```typescript
public readonly item: IResolvable | OneDashboardVariableItem[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItem">OneDashboardVariableItem</a>[]

item block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#item OneDashboard#item}

---

##### `nrqlQuery`<sup>Optional</sup> <a name="nrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: OneDashboardVariableNrqlQuery;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery">OneDashboardVariableNrqlQuery</a>

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

### OneDashboardVariableItem <a name="OneDashboardVariableItem" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItem.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

const oneDashboardVariableItem: oneDashboard.OneDashboardVariableItem = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItem.property.value">value</a></code> | <code>string</code> | A possible variable value. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItem.property.title">title</a></code> | <code>string</code> | A human-friendly display string for this value. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItem.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

A possible variable value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#value OneDashboard#value}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItem.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

A human-friendly display string for this value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

### OneDashboardVariableNrqlQuery <a name="OneDashboardVariableNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

const oneDashboardVariableNrqlQuery: oneDashboard.OneDashboardVariableNrqlQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery.property.query">query</a></code> | <code>string</code> | NRQL formatted query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery.property.accountIds">accountIds</a></code> | <code>number[]</code> | New Relic account ID(s) to issue the query against. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

NRQL formatted query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `accountIds`<sup>Optional</sup> <a name="accountIds" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery.property.accountIds"></a>

```typescript
public readonly accountIds: number[];
```

- *Type:* number[]

New Relic account ID(s) to issue the query against.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_ids OneDashboard#account_ids}

---

## Classes <a name="Classes" id="Classes"></a>

### OneDashboardPageList <a name="OneDashboardPageList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.get"></a>

```typescript
public get(index: number): OneDashboardPageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage">OneDashboardPage</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OneDashboardPage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage">OneDashboardPage</a>[]

---


### OneDashboardPageOutputReference <a name="OneDashboardPageOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetArea">putWidgetArea</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetBar">putWidgetBar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetBillboard">putWidgetBillboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetBullet">putWidgetBullet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetFunnel">putWidgetFunnel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetHeatmap">putWidgetHeatmap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetHistogram">putWidgetHistogram</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetJson">putWidgetJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetLine">putWidgetLine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetLogTable">putWidgetLogTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetMarkdown">putWidgetMarkdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetPie">putWidgetPie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetStackedBar">putWidgetStackedBar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetTable">putWidgetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetArea">resetWidgetArea</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetBar">resetWidgetBar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetBillboard">resetWidgetBillboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetBullet">resetWidgetBullet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetFunnel">resetWidgetFunnel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetHeatmap">resetWidgetHeatmap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetHistogram">resetWidgetHistogram</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetJson">resetWidgetJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetLine">resetWidgetLine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetLogTable">resetWidgetLogTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetMarkdown">resetWidgetMarkdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetPie">resetWidgetPie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetStackedBar">resetWidgetStackedBar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetTable">resetWidgetTable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWidgetArea` <a name="putWidgetArea" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetArea"></a>

```typescript
public putWidgetArea(value: IResolvable | OneDashboardPageWidgetArea[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetArea.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea">OneDashboardPageWidgetArea</a>[]

---

##### `putWidgetBar` <a name="putWidgetBar" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetBar"></a>

```typescript
public putWidgetBar(value: IResolvable | OneDashboardPageWidgetBar[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetBar.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar">OneDashboardPageWidgetBar</a>[]

---

##### `putWidgetBillboard` <a name="putWidgetBillboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetBillboard"></a>

```typescript
public putWidgetBillboard(value: IResolvable | OneDashboardPageWidgetBillboard[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetBillboard.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard">OneDashboardPageWidgetBillboard</a>[]

---

##### `putWidgetBullet` <a name="putWidgetBullet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetBullet"></a>

```typescript
public putWidgetBullet(value: IResolvable | OneDashboardPageWidgetBullet[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetBullet.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet">OneDashboardPageWidgetBullet</a>[]

---

##### `putWidgetFunnel` <a name="putWidgetFunnel" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetFunnel"></a>

```typescript
public putWidgetFunnel(value: IResolvable | OneDashboardPageWidgetFunnel[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetFunnel.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel">OneDashboardPageWidgetFunnel</a>[]

---

##### `putWidgetHeatmap` <a name="putWidgetHeatmap" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetHeatmap"></a>

```typescript
public putWidgetHeatmap(value: IResolvable | OneDashboardPageWidgetHeatmap[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetHeatmap.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap">OneDashboardPageWidgetHeatmap</a>[]

---

##### `putWidgetHistogram` <a name="putWidgetHistogram" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetHistogram"></a>

```typescript
public putWidgetHistogram(value: IResolvable | OneDashboardPageWidgetHistogram[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetHistogram.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram">OneDashboardPageWidgetHistogram</a>[]

---

##### `putWidgetJson` <a name="putWidgetJson" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetJson"></a>

```typescript
public putWidgetJson(value: IResolvable | OneDashboardPageWidgetJson[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetJson.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson">OneDashboardPageWidgetJson</a>[]

---

##### `putWidgetLine` <a name="putWidgetLine" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetLine"></a>

```typescript
public putWidgetLine(value: IResolvable | OneDashboardPageWidgetLine[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetLine.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine">OneDashboardPageWidgetLine</a>[]

---

##### `putWidgetLogTable` <a name="putWidgetLogTable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetLogTable"></a>

```typescript
public putWidgetLogTable(value: IResolvable | OneDashboardPageWidgetLogTable[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetLogTable.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable">OneDashboardPageWidgetLogTable</a>[]

---

##### `putWidgetMarkdown` <a name="putWidgetMarkdown" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetMarkdown"></a>

```typescript
public putWidgetMarkdown(value: IResolvable | OneDashboardPageWidgetMarkdown[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetMarkdown.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown">OneDashboardPageWidgetMarkdown</a>[]

---

##### `putWidgetPie` <a name="putWidgetPie" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetPie"></a>

```typescript
public putWidgetPie(value: IResolvable | OneDashboardPageWidgetPie[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetPie.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie">OneDashboardPageWidgetPie</a>[]

---

##### `putWidgetStackedBar` <a name="putWidgetStackedBar" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetStackedBar"></a>

```typescript
public putWidgetStackedBar(value: IResolvable | OneDashboardPageWidgetStackedBar[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetStackedBar.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar">OneDashboardPageWidgetStackedBar</a>[]

---

##### `putWidgetTable` <a name="putWidgetTable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetTable"></a>

```typescript
public putWidgetTable(value: IResolvable | OneDashboardPageWidgetTable[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetTable.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable">OneDashboardPageWidgetTable</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetWidgetArea` <a name="resetWidgetArea" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetArea"></a>

```typescript
public resetWidgetArea(): void
```

##### `resetWidgetBar` <a name="resetWidgetBar" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetBar"></a>

```typescript
public resetWidgetBar(): void
```

##### `resetWidgetBillboard` <a name="resetWidgetBillboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetBillboard"></a>

```typescript
public resetWidgetBillboard(): void
```

##### `resetWidgetBullet` <a name="resetWidgetBullet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetBullet"></a>

```typescript
public resetWidgetBullet(): void
```

##### `resetWidgetFunnel` <a name="resetWidgetFunnel" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetFunnel"></a>

```typescript
public resetWidgetFunnel(): void
```

##### `resetWidgetHeatmap` <a name="resetWidgetHeatmap" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetHeatmap"></a>

```typescript
public resetWidgetHeatmap(): void
```

##### `resetWidgetHistogram` <a name="resetWidgetHistogram" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetHistogram"></a>

```typescript
public resetWidgetHistogram(): void
```

##### `resetWidgetJson` <a name="resetWidgetJson" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetJson"></a>

```typescript
public resetWidgetJson(): void
```

##### `resetWidgetLine` <a name="resetWidgetLine" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetLine"></a>

```typescript
public resetWidgetLine(): void
```

##### `resetWidgetLogTable` <a name="resetWidgetLogTable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetLogTable"></a>

```typescript
public resetWidgetLogTable(): void
```

##### `resetWidgetMarkdown` <a name="resetWidgetMarkdown" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetMarkdown"></a>

```typescript
public resetWidgetMarkdown(): void
```

##### `resetWidgetPie` <a name="resetWidgetPie" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetPie"></a>

```typescript
public resetWidgetPie(): void
```

##### `resetWidgetStackedBar` <a name="resetWidgetStackedBar" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetStackedBar"></a>

```typescript
public resetWidgetStackedBar(): void
```

##### `resetWidgetTable` <a name="resetWidgetTable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetTable"></a>

```typescript
public resetWidgetTable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.guid">guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetArea">widgetArea</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList">OneDashboardPageWidgetAreaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetBar">widgetBar</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList">OneDashboardPageWidgetBarList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetBillboard">widgetBillboard</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList">OneDashboardPageWidgetBillboardList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetBullet">widgetBullet</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList">OneDashboardPageWidgetBulletList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetFunnel">widgetFunnel</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList">OneDashboardPageWidgetFunnelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetHeatmap">widgetHeatmap</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList">OneDashboardPageWidgetHeatmapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetHistogram">widgetHistogram</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList">OneDashboardPageWidgetHistogramList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetJson">widgetJson</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList">OneDashboardPageWidgetJsonList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetLine">widgetLine</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList">OneDashboardPageWidgetLineList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetLogTable">widgetLogTable</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList">OneDashboardPageWidgetLogTableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetMarkdown">widgetMarkdown</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList">OneDashboardPageWidgetMarkdownList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetPie">widgetPie</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList">OneDashboardPageWidgetPieList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetStackedBar">widgetStackedBar</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList">OneDashboardPageWidgetStackedBarList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetTable">widgetTable</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList">OneDashboardPageWidgetTableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetAreaInput">widgetAreaInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea">OneDashboardPageWidgetArea</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetBarInput">widgetBarInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar">OneDashboardPageWidgetBar</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetBillboardInput">widgetBillboardInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard">OneDashboardPageWidgetBillboard</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetBulletInput">widgetBulletInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet">OneDashboardPageWidgetBullet</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetFunnelInput">widgetFunnelInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel">OneDashboardPageWidgetFunnel</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetHeatmapInput">widgetHeatmapInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap">OneDashboardPageWidgetHeatmap</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetHistogramInput">widgetHistogramInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram">OneDashboardPageWidgetHistogram</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetJsonInput">widgetJsonInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson">OneDashboardPageWidgetJson</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetLineInput">widgetLineInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine">OneDashboardPageWidgetLine</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetLogTableInput">widgetLogTableInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable">OneDashboardPageWidgetLogTable</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetMarkdownInput">widgetMarkdownInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown">OneDashboardPageWidgetMarkdown</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetPieInput">widgetPieInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie">OneDashboardPageWidgetPie</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetStackedBarInput">widgetStackedBarInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar">OneDashboardPageWidgetStackedBar</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetTableInput">widgetTableInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable">OneDashboardPageWidgetTable</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage">OneDashboardPage</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

---

##### `widgetArea`<sup>Required</sup> <a name="widgetArea" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetArea"></a>

```typescript
public readonly widgetArea: OneDashboardPageWidgetAreaList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList">OneDashboardPageWidgetAreaList</a>

---

##### `widgetBar`<sup>Required</sup> <a name="widgetBar" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetBar"></a>

```typescript
public readonly widgetBar: OneDashboardPageWidgetBarList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList">OneDashboardPageWidgetBarList</a>

---

##### `widgetBillboard`<sup>Required</sup> <a name="widgetBillboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetBillboard"></a>

```typescript
public readonly widgetBillboard: OneDashboardPageWidgetBillboardList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList">OneDashboardPageWidgetBillboardList</a>

---

##### `widgetBullet`<sup>Required</sup> <a name="widgetBullet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetBullet"></a>

```typescript
public readonly widgetBullet: OneDashboardPageWidgetBulletList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList">OneDashboardPageWidgetBulletList</a>

---

##### `widgetFunnel`<sup>Required</sup> <a name="widgetFunnel" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetFunnel"></a>

```typescript
public readonly widgetFunnel: OneDashboardPageWidgetFunnelList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList">OneDashboardPageWidgetFunnelList</a>

---

##### `widgetHeatmap`<sup>Required</sup> <a name="widgetHeatmap" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetHeatmap"></a>

```typescript
public readonly widgetHeatmap: OneDashboardPageWidgetHeatmapList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList">OneDashboardPageWidgetHeatmapList</a>

---

##### `widgetHistogram`<sup>Required</sup> <a name="widgetHistogram" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetHistogram"></a>

```typescript
public readonly widgetHistogram: OneDashboardPageWidgetHistogramList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList">OneDashboardPageWidgetHistogramList</a>

---

##### `widgetJson`<sup>Required</sup> <a name="widgetJson" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetJson"></a>

```typescript
public readonly widgetJson: OneDashboardPageWidgetJsonList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList">OneDashboardPageWidgetJsonList</a>

---

##### `widgetLine`<sup>Required</sup> <a name="widgetLine" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetLine"></a>

```typescript
public readonly widgetLine: OneDashboardPageWidgetLineList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList">OneDashboardPageWidgetLineList</a>

---

##### `widgetLogTable`<sup>Required</sup> <a name="widgetLogTable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetLogTable"></a>

```typescript
public readonly widgetLogTable: OneDashboardPageWidgetLogTableList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList">OneDashboardPageWidgetLogTableList</a>

---

##### `widgetMarkdown`<sup>Required</sup> <a name="widgetMarkdown" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetMarkdown"></a>

```typescript
public readonly widgetMarkdown: OneDashboardPageWidgetMarkdownList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList">OneDashboardPageWidgetMarkdownList</a>

---

##### `widgetPie`<sup>Required</sup> <a name="widgetPie" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetPie"></a>

```typescript
public readonly widgetPie: OneDashboardPageWidgetPieList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList">OneDashboardPageWidgetPieList</a>

---

##### `widgetStackedBar`<sup>Required</sup> <a name="widgetStackedBar" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetStackedBar"></a>

```typescript
public readonly widgetStackedBar: OneDashboardPageWidgetStackedBarList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList">OneDashboardPageWidgetStackedBarList</a>

---

##### `widgetTable`<sup>Required</sup> <a name="widgetTable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetTable"></a>

```typescript
public readonly widgetTable: OneDashboardPageWidgetTableList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList">OneDashboardPageWidgetTableList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `widgetAreaInput`<sup>Optional</sup> <a name="widgetAreaInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetAreaInput"></a>

```typescript
public readonly widgetAreaInput: IResolvable | OneDashboardPageWidgetArea[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea">OneDashboardPageWidgetArea</a>[]

---

##### `widgetBarInput`<sup>Optional</sup> <a name="widgetBarInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetBarInput"></a>

```typescript
public readonly widgetBarInput: IResolvable | OneDashboardPageWidgetBar[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar">OneDashboardPageWidgetBar</a>[]

---

##### `widgetBillboardInput`<sup>Optional</sup> <a name="widgetBillboardInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetBillboardInput"></a>

```typescript
public readonly widgetBillboardInput: IResolvable | OneDashboardPageWidgetBillboard[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard">OneDashboardPageWidgetBillboard</a>[]

---

##### `widgetBulletInput`<sup>Optional</sup> <a name="widgetBulletInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetBulletInput"></a>

```typescript
public readonly widgetBulletInput: IResolvable | OneDashboardPageWidgetBullet[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet">OneDashboardPageWidgetBullet</a>[]

---

##### `widgetFunnelInput`<sup>Optional</sup> <a name="widgetFunnelInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetFunnelInput"></a>

```typescript
public readonly widgetFunnelInput: IResolvable | OneDashboardPageWidgetFunnel[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel">OneDashboardPageWidgetFunnel</a>[]

---

##### `widgetHeatmapInput`<sup>Optional</sup> <a name="widgetHeatmapInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetHeatmapInput"></a>

```typescript
public readonly widgetHeatmapInput: IResolvable | OneDashboardPageWidgetHeatmap[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap">OneDashboardPageWidgetHeatmap</a>[]

---

##### `widgetHistogramInput`<sup>Optional</sup> <a name="widgetHistogramInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetHistogramInput"></a>

```typescript
public readonly widgetHistogramInput: IResolvable | OneDashboardPageWidgetHistogram[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram">OneDashboardPageWidgetHistogram</a>[]

---

##### `widgetJsonInput`<sup>Optional</sup> <a name="widgetJsonInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetJsonInput"></a>

```typescript
public readonly widgetJsonInput: IResolvable | OneDashboardPageWidgetJson[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson">OneDashboardPageWidgetJson</a>[]

---

##### `widgetLineInput`<sup>Optional</sup> <a name="widgetLineInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetLineInput"></a>

```typescript
public readonly widgetLineInput: IResolvable | OneDashboardPageWidgetLine[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine">OneDashboardPageWidgetLine</a>[]

---

##### `widgetLogTableInput`<sup>Optional</sup> <a name="widgetLogTableInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetLogTableInput"></a>

```typescript
public readonly widgetLogTableInput: IResolvable | OneDashboardPageWidgetLogTable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable">OneDashboardPageWidgetLogTable</a>[]

---

##### `widgetMarkdownInput`<sup>Optional</sup> <a name="widgetMarkdownInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetMarkdownInput"></a>

```typescript
public readonly widgetMarkdownInput: IResolvable | OneDashboardPageWidgetMarkdown[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown">OneDashboardPageWidgetMarkdown</a>[]

---

##### `widgetPieInput`<sup>Optional</sup> <a name="widgetPieInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetPieInput"></a>

```typescript
public readonly widgetPieInput: IResolvable | OneDashboardPageWidgetPie[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie">OneDashboardPageWidgetPie</a>[]

---

##### `widgetStackedBarInput`<sup>Optional</sup> <a name="widgetStackedBarInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetStackedBarInput"></a>

```typescript
public readonly widgetStackedBarInput: IResolvable | OneDashboardPageWidgetStackedBar[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar">OneDashboardPageWidgetStackedBar</a>[]

---

##### `widgetTableInput`<sup>Optional</sup> <a name="widgetTableInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetTableInput"></a>

```typescript
public readonly widgetTableInput: IResolvable | OneDashboardPageWidgetTable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable">OneDashboardPageWidgetTable</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OneDashboardPage | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage">OneDashboardPage</a> | cdktf.IResolvable

---


### OneDashboardPageWidgetAreaList <a name="OneDashboardPageWidgetAreaList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetAreaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.get"></a>

```typescript
public get(index: number): OneDashboardPageWidgetAreaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea">OneDashboardPageWidgetArea</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OneDashboardPageWidgetArea[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea">OneDashboardPageWidgetArea</a>[]

---


### OneDashboardPageWidgetAreaNrqlQueryList <a name="OneDashboardPageWidgetAreaNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.get"></a>

```typescript
public get(index: number): OneDashboardPageWidgetAreaNrqlQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQuery">OneDashboardPageWidgetAreaNrqlQuery</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OneDashboardPageWidgetAreaNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQuery">OneDashboardPageWidgetAreaNrqlQuery</a>[]

---


### OneDashboardPageWidgetAreaNrqlQueryOutputReference <a name="OneDashboardPageWidgetAreaNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.resetAccountId"></a>

```typescript
public resetAccountId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQuery">OneDashboardPageWidgetAreaNrqlQuery</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OneDashboardPageWidgetAreaNrqlQuery | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQuery">OneDashboardPageWidgetAreaNrqlQuery</a> | cdktf.IResolvable

---


### OneDashboardPageWidgetAreaOutputReference <a name="OneDashboardPageWidgetAreaOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetAreaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.putNrqlQuery">putNrqlQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.resetHeight">resetHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.resetIgnoreTimeRange">resetIgnoreTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.resetWidth">resetWidth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNrqlQuery` <a name="putNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.putNrqlQuery"></a>

```typescript
public putNrqlQuery(value: IResolvable | OneDashboardPageWidgetAreaNrqlQuery[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQuery">OneDashboardPageWidgetAreaNrqlQuery</a>[]

---

##### `resetHeight` <a name="resetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.resetHeight"></a>

```typescript
public resetHeight(): void
```

##### `resetIgnoreTimeRange` <a name="resetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.resetIgnoreTimeRange"></a>

```typescript
public resetIgnoreTimeRange(): void
```

##### `resetWidth` <a name="resetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.resetWidth"></a>

```typescript
public resetWidth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.nrqlQuery">nrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList">OneDashboardPageWidgetAreaNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.columnInput">columnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.heightInput">heightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.ignoreTimeRangeInput">ignoreTimeRangeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.nrqlQueryInput">nrqlQueryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQuery">OneDashboardPageWidgetAreaNrqlQuery</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.rowInput">rowInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.widthInput">widthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.column">column</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.height">height</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.ignoreTimeRange">ignoreTimeRange</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.row">row</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.width">width</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea">OneDashboardPageWidgetArea</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nrqlQuery`<sup>Required</sup> <a name="nrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: OneDashboardPageWidgetAreaNrqlQueryList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList">OneDashboardPageWidgetAreaNrqlQueryList</a>

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.columnInput"></a>

```typescript
public readonly columnInput: number;
```

- *Type:* number

---

##### `heightInput`<sup>Optional</sup> <a name="heightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.heightInput"></a>

```typescript
public readonly heightInput: number;
```

- *Type:* number

---

##### `ignoreTimeRangeInput`<sup>Optional</sup> <a name="ignoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.ignoreTimeRangeInput"></a>

```typescript
public readonly ignoreTimeRangeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nrqlQueryInput`<sup>Optional</sup> <a name="nrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.nrqlQueryInput"></a>

```typescript
public readonly nrqlQueryInput: IResolvable | OneDashboardPageWidgetAreaNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQuery">OneDashboardPageWidgetAreaNrqlQuery</a>[]

---

##### `rowInput`<sup>Optional</sup> <a name="rowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.rowInput"></a>

```typescript
public readonly rowInput: number;
```

- *Type:* number

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `widthInput`<sup>Optional</sup> <a name="widthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.widthInput"></a>

```typescript
public readonly widthInput: number;
```

- *Type:* number

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* number

---

##### `height`<sup>Required</sup> <a name="height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

---

##### `ignoreTimeRange`<sup>Required</sup> <a name="ignoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.ignoreTimeRange"></a>

```typescript
public readonly ignoreTimeRange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `row`<sup>Required</sup> <a name="row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* number

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OneDashboardPageWidgetArea | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea">OneDashboardPageWidgetArea</a> | cdktf.IResolvable

---


### OneDashboardPageWidgetBarList <a name="OneDashboardPageWidgetBarList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetBarList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.get"></a>

```typescript
public get(index: number): OneDashboardPageWidgetBarOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar">OneDashboardPageWidgetBar</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OneDashboardPageWidgetBar[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar">OneDashboardPageWidgetBar</a>[]

---


### OneDashboardPageWidgetBarNrqlQueryList <a name="OneDashboardPageWidgetBarNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetBarNrqlQueryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.get"></a>

```typescript
public get(index: number): OneDashboardPageWidgetBarNrqlQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQuery">OneDashboardPageWidgetBarNrqlQuery</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OneDashboardPageWidgetBarNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQuery">OneDashboardPageWidgetBarNrqlQuery</a>[]

---


### OneDashboardPageWidgetBarNrqlQueryOutputReference <a name="OneDashboardPageWidgetBarNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.resetAccountId"></a>

```typescript
public resetAccountId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQuery">OneDashboardPageWidgetBarNrqlQuery</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OneDashboardPageWidgetBarNrqlQuery | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQuery">OneDashboardPageWidgetBarNrqlQuery</a> | cdktf.IResolvable

---


### OneDashboardPageWidgetBarOutputReference <a name="OneDashboardPageWidgetBarOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetBarOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.putNrqlQuery">putNrqlQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.resetFilterCurrentDashboard">resetFilterCurrentDashboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.resetHeight">resetHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.resetIgnoreTimeRange">resetIgnoreTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.resetLinkedEntityGuids">resetLinkedEntityGuids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.resetWidth">resetWidth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNrqlQuery` <a name="putNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.putNrqlQuery"></a>

```typescript
public putNrqlQuery(value: IResolvable | OneDashboardPageWidgetBarNrqlQuery[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQuery">OneDashboardPageWidgetBarNrqlQuery</a>[]

---

##### `resetFilterCurrentDashboard` <a name="resetFilterCurrentDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.resetFilterCurrentDashboard"></a>

```typescript
public resetFilterCurrentDashboard(): void
```

##### `resetHeight` <a name="resetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.resetHeight"></a>

```typescript
public resetHeight(): void
```

##### `resetIgnoreTimeRange` <a name="resetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.resetIgnoreTimeRange"></a>

```typescript
public resetIgnoreTimeRange(): void
```

##### `resetLinkedEntityGuids` <a name="resetLinkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.resetLinkedEntityGuids"></a>

```typescript
public resetLinkedEntityGuids(): void
```

##### `resetWidth` <a name="resetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.resetWidth"></a>

```typescript
public resetWidth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.nrqlQuery">nrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList">OneDashboardPageWidgetBarNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.columnInput">columnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.filterCurrentDashboardInput">filterCurrentDashboardInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.heightInput">heightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.ignoreTimeRangeInput">ignoreTimeRangeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.linkedEntityGuidsInput">linkedEntityGuidsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.nrqlQueryInput">nrqlQueryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQuery">OneDashboardPageWidgetBarNrqlQuery</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.rowInput">rowInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.widthInput">widthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.column">column</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.filterCurrentDashboard">filterCurrentDashboard</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.height">height</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.ignoreTimeRange">ignoreTimeRange</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.linkedEntityGuids">linkedEntityGuids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.row">row</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.width">width</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar">OneDashboardPageWidgetBar</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nrqlQuery`<sup>Required</sup> <a name="nrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: OneDashboardPageWidgetBarNrqlQueryList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList">OneDashboardPageWidgetBarNrqlQueryList</a>

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.columnInput"></a>

```typescript
public readonly columnInput: number;
```

- *Type:* number

---

##### `filterCurrentDashboardInput`<sup>Optional</sup> <a name="filterCurrentDashboardInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.filterCurrentDashboardInput"></a>

```typescript
public readonly filterCurrentDashboardInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `heightInput`<sup>Optional</sup> <a name="heightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.heightInput"></a>

```typescript
public readonly heightInput: number;
```

- *Type:* number

---

##### `ignoreTimeRangeInput`<sup>Optional</sup> <a name="ignoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.ignoreTimeRangeInput"></a>

```typescript
public readonly ignoreTimeRangeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `linkedEntityGuidsInput`<sup>Optional</sup> <a name="linkedEntityGuidsInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.linkedEntityGuidsInput"></a>

```typescript
public readonly linkedEntityGuidsInput: string[];
```

- *Type:* string[]

---

##### `nrqlQueryInput`<sup>Optional</sup> <a name="nrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.nrqlQueryInput"></a>

```typescript
public readonly nrqlQueryInput: IResolvable | OneDashboardPageWidgetBarNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQuery">OneDashboardPageWidgetBarNrqlQuery</a>[]

---

##### `rowInput`<sup>Optional</sup> <a name="rowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.rowInput"></a>

```typescript
public readonly rowInput: number;
```

- *Type:* number

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `widthInput`<sup>Optional</sup> <a name="widthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.widthInput"></a>

```typescript
public readonly widthInput: number;
```

- *Type:* number

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* number

---

##### `filterCurrentDashboard`<sup>Required</sup> <a name="filterCurrentDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.filterCurrentDashboard"></a>

```typescript
public readonly filterCurrentDashboard: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `height`<sup>Required</sup> <a name="height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

---

##### `ignoreTimeRange`<sup>Required</sup> <a name="ignoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.ignoreTimeRange"></a>

```typescript
public readonly ignoreTimeRange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `linkedEntityGuids`<sup>Required</sup> <a name="linkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.linkedEntityGuids"></a>

```typescript
public readonly linkedEntityGuids: string[];
```

- *Type:* string[]

---

##### `row`<sup>Required</sup> <a name="row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* number

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OneDashboardPageWidgetBar | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar">OneDashboardPageWidgetBar</a> | cdktf.IResolvable

---


### OneDashboardPageWidgetBillboardList <a name="OneDashboardPageWidgetBillboardList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetBillboardList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.get"></a>

```typescript
public get(index: number): OneDashboardPageWidgetBillboardOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard">OneDashboardPageWidgetBillboard</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OneDashboardPageWidgetBillboard[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard">OneDashboardPageWidgetBillboard</a>[]

---


### OneDashboardPageWidgetBillboardNrqlQueryList <a name="OneDashboardPageWidgetBillboardNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.get"></a>

```typescript
public get(index: number): OneDashboardPageWidgetBillboardNrqlQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQuery">OneDashboardPageWidgetBillboardNrqlQuery</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OneDashboardPageWidgetBillboardNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQuery">OneDashboardPageWidgetBillboardNrqlQuery</a>[]

---


### OneDashboardPageWidgetBillboardNrqlQueryOutputReference <a name="OneDashboardPageWidgetBillboardNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.resetAccountId"></a>

```typescript
public resetAccountId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQuery">OneDashboardPageWidgetBillboardNrqlQuery</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OneDashboardPageWidgetBillboardNrqlQuery | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQuery">OneDashboardPageWidgetBillboardNrqlQuery</a> | cdktf.IResolvable

---


### OneDashboardPageWidgetBillboardOutputReference <a name="OneDashboardPageWidgetBillboardOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetBillboardOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.putNrqlQuery">putNrqlQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.resetCritical">resetCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.resetHeight">resetHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.resetIgnoreTimeRange">resetIgnoreTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.resetWarning">resetWarning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.resetWidth">resetWidth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNrqlQuery` <a name="putNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.putNrqlQuery"></a>

```typescript
public putNrqlQuery(value: IResolvable | OneDashboardPageWidgetBillboardNrqlQuery[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQuery">OneDashboardPageWidgetBillboardNrqlQuery</a>[]

---

##### `resetCritical` <a name="resetCritical" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.resetCritical"></a>

```typescript
public resetCritical(): void
```

##### `resetHeight` <a name="resetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.resetHeight"></a>

```typescript
public resetHeight(): void
```

##### `resetIgnoreTimeRange` <a name="resetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.resetIgnoreTimeRange"></a>

```typescript
public resetIgnoreTimeRange(): void
```

##### `resetWarning` <a name="resetWarning" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.resetWarning"></a>

```typescript
public resetWarning(): void
```

##### `resetWidth` <a name="resetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.resetWidth"></a>

```typescript
public resetWidth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.nrqlQuery">nrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList">OneDashboardPageWidgetBillboardNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.columnInput">columnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.criticalInput">criticalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.heightInput">heightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.ignoreTimeRangeInput">ignoreTimeRangeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.nrqlQueryInput">nrqlQueryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQuery">OneDashboardPageWidgetBillboardNrqlQuery</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.rowInput">rowInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.warningInput">warningInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.widthInput">widthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.column">column</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.critical">critical</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.height">height</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.ignoreTimeRange">ignoreTimeRange</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.row">row</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.warning">warning</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.width">width</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard">OneDashboardPageWidgetBillboard</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nrqlQuery`<sup>Required</sup> <a name="nrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: OneDashboardPageWidgetBillboardNrqlQueryList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList">OneDashboardPageWidgetBillboardNrqlQueryList</a>

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.columnInput"></a>

```typescript
public readonly columnInput: number;
```

- *Type:* number

---

##### `criticalInput`<sup>Optional</sup> <a name="criticalInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.criticalInput"></a>

```typescript
public readonly criticalInput: string;
```

- *Type:* string

---

##### `heightInput`<sup>Optional</sup> <a name="heightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.heightInput"></a>

```typescript
public readonly heightInput: number;
```

- *Type:* number

---

##### `ignoreTimeRangeInput`<sup>Optional</sup> <a name="ignoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.ignoreTimeRangeInput"></a>

```typescript
public readonly ignoreTimeRangeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nrqlQueryInput`<sup>Optional</sup> <a name="nrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.nrqlQueryInput"></a>

```typescript
public readonly nrqlQueryInput: IResolvable | OneDashboardPageWidgetBillboardNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQuery">OneDashboardPageWidgetBillboardNrqlQuery</a>[]

---

##### `rowInput`<sup>Optional</sup> <a name="rowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.rowInput"></a>

```typescript
public readonly rowInput: number;
```

- *Type:* number

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `warningInput`<sup>Optional</sup> <a name="warningInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.warningInput"></a>

```typescript
public readonly warningInput: string;
```

- *Type:* string

---

##### `widthInput`<sup>Optional</sup> <a name="widthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.widthInput"></a>

```typescript
public readonly widthInput: number;
```

- *Type:* number

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* number

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.critical"></a>

```typescript
public readonly critical: string;
```

- *Type:* string

---

##### `height`<sup>Required</sup> <a name="height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

---

##### `ignoreTimeRange`<sup>Required</sup> <a name="ignoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.ignoreTimeRange"></a>

```typescript
public readonly ignoreTimeRange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `row`<sup>Required</sup> <a name="row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* number

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `warning`<sup>Required</sup> <a name="warning" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.warning"></a>

```typescript
public readonly warning: string;
```

- *Type:* string

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OneDashboardPageWidgetBillboard | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard">OneDashboardPageWidgetBillboard</a> | cdktf.IResolvable

---


### OneDashboardPageWidgetBulletList <a name="OneDashboardPageWidgetBulletList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetBulletList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.get"></a>

```typescript
public get(index: number): OneDashboardPageWidgetBulletOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet">OneDashboardPageWidgetBullet</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OneDashboardPageWidgetBullet[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet">OneDashboardPageWidgetBullet</a>[]

---


### OneDashboardPageWidgetBulletNrqlQueryList <a name="OneDashboardPageWidgetBulletNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.get"></a>

```typescript
public get(index: number): OneDashboardPageWidgetBulletNrqlQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQuery">OneDashboardPageWidgetBulletNrqlQuery</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OneDashboardPageWidgetBulletNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQuery">OneDashboardPageWidgetBulletNrqlQuery</a>[]

---


### OneDashboardPageWidgetBulletNrqlQueryOutputReference <a name="OneDashboardPageWidgetBulletNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.resetAccountId"></a>

```typescript
public resetAccountId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQuery">OneDashboardPageWidgetBulletNrqlQuery</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OneDashboardPageWidgetBulletNrqlQuery | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQuery">OneDashboardPageWidgetBulletNrqlQuery</a> | cdktf.IResolvable

---


### OneDashboardPageWidgetBulletOutputReference <a name="OneDashboardPageWidgetBulletOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetBulletOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.putNrqlQuery">putNrqlQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.resetHeight">resetHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.resetIgnoreTimeRange">resetIgnoreTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.resetWidth">resetWidth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNrqlQuery` <a name="putNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.putNrqlQuery"></a>

```typescript
public putNrqlQuery(value: IResolvable | OneDashboardPageWidgetBulletNrqlQuery[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQuery">OneDashboardPageWidgetBulletNrqlQuery</a>[]

---

##### `resetHeight` <a name="resetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.resetHeight"></a>

```typescript
public resetHeight(): void
```

##### `resetIgnoreTimeRange` <a name="resetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.resetIgnoreTimeRange"></a>

```typescript
public resetIgnoreTimeRange(): void
```

##### `resetWidth` <a name="resetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.resetWidth"></a>

```typescript
public resetWidth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.nrqlQuery">nrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList">OneDashboardPageWidgetBulletNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.columnInput">columnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.heightInput">heightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.ignoreTimeRangeInput">ignoreTimeRangeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.limitInput">limitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.nrqlQueryInput">nrqlQueryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQuery">OneDashboardPageWidgetBulletNrqlQuery</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.rowInput">rowInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.widthInput">widthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.column">column</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.height">height</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.ignoreTimeRange">ignoreTimeRange</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.limit">limit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.row">row</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.width">width</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet">OneDashboardPageWidgetBullet</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nrqlQuery`<sup>Required</sup> <a name="nrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: OneDashboardPageWidgetBulletNrqlQueryList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList">OneDashboardPageWidgetBulletNrqlQueryList</a>

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.columnInput"></a>

```typescript
public readonly columnInput: number;
```

- *Type:* number

---

##### `heightInput`<sup>Optional</sup> <a name="heightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.heightInput"></a>

```typescript
public readonly heightInput: number;
```

- *Type:* number

---

##### `ignoreTimeRangeInput`<sup>Optional</sup> <a name="ignoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.ignoreTimeRangeInput"></a>

```typescript
public readonly ignoreTimeRangeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.limitInput"></a>

```typescript
public readonly limitInput: number;
```

- *Type:* number

---

##### `nrqlQueryInput`<sup>Optional</sup> <a name="nrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.nrqlQueryInput"></a>

```typescript
public readonly nrqlQueryInput: IResolvable | OneDashboardPageWidgetBulletNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQuery">OneDashboardPageWidgetBulletNrqlQuery</a>[]

---

##### `rowInput`<sup>Optional</sup> <a name="rowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.rowInput"></a>

```typescript
public readonly rowInput: number;
```

- *Type:* number

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `widthInput`<sup>Optional</sup> <a name="widthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.widthInput"></a>

```typescript
public readonly widthInput: number;
```

- *Type:* number

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* number

---

##### `height`<sup>Required</sup> <a name="height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

---

##### `ignoreTimeRange`<sup>Required</sup> <a name="ignoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.ignoreTimeRange"></a>

```typescript
public readonly ignoreTimeRange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

---

##### `row`<sup>Required</sup> <a name="row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* number

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OneDashboardPageWidgetBullet | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet">OneDashboardPageWidgetBullet</a> | cdktf.IResolvable

---


### OneDashboardPageWidgetFunnelList <a name="OneDashboardPageWidgetFunnelList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetFunnelList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.get"></a>

```typescript
public get(index: number): OneDashboardPageWidgetFunnelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel">OneDashboardPageWidgetFunnel</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OneDashboardPageWidgetFunnel[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel">OneDashboardPageWidgetFunnel</a>[]

---


### OneDashboardPageWidgetFunnelNrqlQueryList <a name="OneDashboardPageWidgetFunnelNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.get"></a>

```typescript
public get(index: number): OneDashboardPageWidgetFunnelNrqlQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQuery">OneDashboardPageWidgetFunnelNrqlQuery</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OneDashboardPageWidgetFunnelNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQuery">OneDashboardPageWidgetFunnelNrqlQuery</a>[]

---


### OneDashboardPageWidgetFunnelNrqlQueryOutputReference <a name="OneDashboardPageWidgetFunnelNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.resetAccountId"></a>

```typescript
public resetAccountId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQuery">OneDashboardPageWidgetFunnelNrqlQuery</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OneDashboardPageWidgetFunnelNrqlQuery | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQuery">OneDashboardPageWidgetFunnelNrqlQuery</a> | cdktf.IResolvable

---


### OneDashboardPageWidgetFunnelOutputReference <a name="OneDashboardPageWidgetFunnelOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetFunnelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.putNrqlQuery">putNrqlQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.resetHeight">resetHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.resetIgnoreTimeRange">resetIgnoreTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.resetWidth">resetWidth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNrqlQuery` <a name="putNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.putNrqlQuery"></a>

```typescript
public putNrqlQuery(value: IResolvable | OneDashboardPageWidgetFunnelNrqlQuery[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQuery">OneDashboardPageWidgetFunnelNrqlQuery</a>[]

---

##### `resetHeight` <a name="resetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.resetHeight"></a>

```typescript
public resetHeight(): void
```

##### `resetIgnoreTimeRange` <a name="resetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.resetIgnoreTimeRange"></a>

```typescript
public resetIgnoreTimeRange(): void
```

##### `resetWidth` <a name="resetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.resetWidth"></a>

```typescript
public resetWidth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.nrqlQuery">nrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList">OneDashboardPageWidgetFunnelNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.columnInput">columnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.heightInput">heightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.ignoreTimeRangeInput">ignoreTimeRangeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.nrqlQueryInput">nrqlQueryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQuery">OneDashboardPageWidgetFunnelNrqlQuery</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.rowInput">rowInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.widthInput">widthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.column">column</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.height">height</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.ignoreTimeRange">ignoreTimeRange</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.row">row</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.width">width</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel">OneDashboardPageWidgetFunnel</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nrqlQuery`<sup>Required</sup> <a name="nrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: OneDashboardPageWidgetFunnelNrqlQueryList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList">OneDashboardPageWidgetFunnelNrqlQueryList</a>

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.columnInput"></a>

```typescript
public readonly columnInput: number;
```

- *Type:* number

---

##### `heightInput`<sup>Optional</sup> <a name="heightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.heightInput"></a>

```typescript
public readonly heightInput: number;
```

- *Type:* number

---

##### `ignoreTimeRangeInput`<sup>Optional</sup> <a name="ignoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.ignoreTimeRangeInput"></a>

```typescript
public readonly ignoreTimeRangeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nrqlQueryInput`<sup>Optional</sup> <a name="nrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.nrqlQueryInput"></a>

```typescript
public readonly nrqlQueryInput: IResolvable | OneDashboardPageWidgetFunnelNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQuery">OneDashboardPageWidgetFunnelNrqlQuery</a>[]

---

##### `rowInput`<sup>Optional</sup> <a name="rowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.rowInput"></a>

```typescript
public readonly rowInput: number;
```

- *Type:* number

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `widthInput`<sup>Optional</sup> <a name="widthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.widthInput"></a>

```typescript
public readonly widthInput: number;
```

- *Type:* number

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* number

---

##### `height`<sup>Required</sup> <a name="height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

---

##### `ignoreTimeRange`<sup>Required</sup> <a name="ignoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.ignoreTimeRange"></a>

```typescript
public readonly ignoreTimeRange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `row`<sup>Required</sup> <a name="row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* number

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OneDashboardPageWidgetFunnel | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel">OneDashboardPageWidgetFunnel</a> | cdktf.IResolvable

---


### OneDashboardPageWidgetHeatmapList <a name="OneDashboardPageWidgetHeatmapList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetHeatmapList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.get"></a>

```typescript
public get(index: number): OneDashboardPageWidgetHeatmapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap">OneDashboardPageWidgetHeatmap</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OneDashboardPageWidgetHeatmap[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap">OneDashboardPageWidgetHeatmap</a>[]

---


### OneDashboardPageWidgetHeatmapNrqlQueryList <a name="OneDashboardPageWidgetHeatmapNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.get"></a>

```typescript
public get(index: number): OneDashboardPageWidgetHeatmapNrqlQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQuery">OneDashboardPageWidgetHeatmapNrqlQuery</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OneDashboardPageWidgetHeatmapNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQuery">OneDashboardPageWidgetHeatmapNrqlQuery</a>[]

---


### OneDashboardPageWidgetHeatmapNrqlQueryOutputReference <a name="OneDashboardPageWidgetHeatmapNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.resetAccountId"></a>

```typescript
public resetAccountId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQuery">OneDashboardPageWidgetHeatmapNrqlQuery</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OneDashboardPageWidgetHeatmapNrqlQuery | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQuery">OneDashboardPageWidgetHeatmapNrqlQuery</a> | cdktf.IResolvable

---


### OneDashboardPageWidgetHeatmapOutputReference <a name="OneDashboardPageWidgetHeatmapOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetHeatmapOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.putNrqlQuery">putNrqlQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.resetFilterCurrentDashboard">resetFilterCurrentDashboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.resetHeight">resetHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.resetIgnoreTimeRange">resetIgnoreTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.resetLinkedEntityGuids">resetLinkedEntityGuids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.resetWidth">resetWidth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNrqlQuery` <a name="putNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.putNrqlQuery"></a>

```typescript
public putNrqlQuery(value: IResolvable | OneDashboardPageWidgetHeatmapNrqlQuery[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQuery">OneDashboardPageWidgetHeatmapNrqlQuery</a>[]

---

##### `resetFilterCurrentDashboard` <a name="resetFilterCurrentDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.resetFilterCurrentDashboard"></a>

```typescript
public resetFilterCurrentDashboard(): void
```

##### `resetHeight` <a name="resetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.resetHeight"></a>

```typescript
public resetHeight(): void
```

##### `resetIgnoreTimeRange` <a name="resetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.resetIgnoreTimeRange"></a>

```typescript
public resetIgnoreTimeRange(): void
```

##### `resetLinkedEntityGuids` <a name="resetLinkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.resetLinkedEntityGuids"></a>

```typescript
public resetLinkedEntityGuids(): void
```

##### `resetWidth` <a name="resetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.resetWidth"></a>

```typescript
public resetWidth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.nrqlQuery">nrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList">OneDashboardPageWidgetHeatmapNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.columnInput">columnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.filterCurrentDashboardInput">filterCurrentDashboardInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.heightInput">heightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.ignoreTimeRangeInput">ignoreTimeRangeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.linkedEntityGuidsInput">linkedEntityGuidsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.nrqlQueryInput">nrqlQueryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQuery">OneDashboardPageWidgetHeatmapNrqlQuery</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.rowInput">rowInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.widthInput">widthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.column">column</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.filterCurrentDashboard">filterCurrentDashboard</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.height">height</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.ignoreTimeRange">ignoreTimeRange</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.linkedEntityGuids">linkedEntityGuids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.row">row</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.width">width</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap">OneDashboardPageWidgetHeatmap</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nrqlQuery`<sup>Required</sup> <a name="nrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: OneDashboardPageWidgetHeatmapNrqlQueryList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList">OneDashboardPageWidgetHeatmapNrqlQueryList</a>

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.columnInput"></a>

```typescript
public readonly columnInput: number;
```

- *Type:* number

---

##### `filterCurrentDashboardInput`<sup>Optional</sup> <a name="filterCurrentDashboardInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.filterCurrentDashboardInput"></a>

```typescript
public readonly filterCurrentDashboardInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `heightInput`<sup>Optional</sup> <a name="heightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.heightInput"></a>

```typescript
public readonly heightInput: number;
```

- *Type:* number

---

##### `ignoreTimeRangeInput`<sup>Optional</sup> <a name="ignoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.ignoreTimeRangeInput"></a>

```typescript
public readonly ignoreTimeRangeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `linkedEntityGuidsInput`<sup>Optional</sup> <a name="linkedEntityGuidsInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.linkedEntityGuidsInput"></a>

```typescript
public readonly linkedEntityGuidsInput: string[];
```

- *Type:* string[]

---

##### `nrqlQueryInput`<sup>Optional</sup> <a name="nrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.nrqlQueryInput"></a>

```typescript
public readonly nrqlQueryInput: IResolvable | OneDashboardPageWidgetHeatmapNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQuery">OneDashboardPageWidgetHeatmapNrqlQuery</a>[]

---

##### `rowInput`<sup>Optional</sup> <a name="rowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.rowInput"></a>

```typescript
public readonly rowInput: number;
```

- *Type:* number

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `widthInput`<sup>Optional</sup> <a name="widthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.widthInput"></a>

```typescript
public readonly widthInput: number;
```

- *Type:* number

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* number

---

##### `filterCurrentDashboard`<sup>Required</sup> <a name="filterCurrentDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.filterCurrentDashboard"></a>

```typescript
public readonly filterCurrentDashboard: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `height`<sup>Required</sup> <a name="height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

---

##### `ignoreTimeRange`<sup>Required</sup> <a name="ignoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.ignoreTimeRange"></a>

```typescript
public readonly ignoreTimeRange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `linkedEntityGuids`<sup>Required</sup> <a name="linkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.linkedEntityGuids"></a>

```typescript
public readonly linkedEntityGuids: string[];
```

- *Type:* string[]

---

##### `row`<sup>Required</sup> <a name="row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* number

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OneDashboardPageWidgetHeatmap | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap">OneDashboardPageWidgetHeatmap</a> | cdktf.IResolvable

---


### OneDashboardPageWidgetHistogramList <a name="OneDashboardPageWidgetHistogramList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetHistogramList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.get"></a>

```typescript
public get(index: number): OneDashboardPageWidgetHistogramOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram">OneDashboardPageWidgetHistogram</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OneDashboardPageWidgetHistogram[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram">OneDashboardPageWidgetHistogram</a>[]

---


### OneDashboardPageWidgetHistogramNrqlQueryList <a name="OneDashboardPageWidgetHistogramNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.get"></a>

```typescript
public get(index: number): OneDashboardPageWidgetHistogramNrqlQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQuery">OneDashboardPageWidgetHistogramNrqlQuery</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OneDashboardPageWidgetHistogramNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQuery">OneDashboardPageWidgetHistogramNrqlQuery</a>[]

---


### OneDashboardPageWidgetHistogramNrqlQueryOutputReference <a name="OneDashboardPageWidgetHistogramNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.resetAccountId"></a>

```typescript
public resetAccountId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQuery">OneDashboardPageWidgetHistogramNrqlQuery</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OneDashboardPageWidgetHistogramNrqlQuery | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQuery">OneDashboardPageWidgetHistogramNrqlQuery</a> | cdktf.IResolvable

---


### OneDashboardPageWidgetHistogramOutputReference <a name="OneDashboardPageWidgetHistogramOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetHistogramOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.putNrqlQuery">putNrqlQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.resetHeight">resetHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.resetIgnoreTimeRange">resetIgnoreTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.resetWidth">resetWidth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNrqlQuery` <a name="putNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.putNrqlQuery"></a>

```typescript
public putNrqlQuery(value: IResolvable | OneDashboardPageWidgetHistogramNrqlQuery[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQuery">OneDashboardPageWidgetHistogramNrqlQuery</a>[]

---

##### `resetHeight` <a name="resetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.resetHeight"></a>

```typescript
public resetHeight(): void
```

##### `resetIgnoreTimeRange` <a name="resetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.resetIgnoreTimeRange"></a>

```typescript
public resetIgnoreTimeRange(): void
```

##### `resetWidth` <a name="resetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.resetWidth"></a>

```typescript
public resetWidth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.nrqlQuery">nrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList">OneDashboardPageWidgetHistogramNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.columnInput">columnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.heightInput">heightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.ignoreTimeRangeInput">ignoreTimeRangeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.nrqlQueryInput">nrqlQueryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQuery">OneDashboardPageWidgetHistogramNrqlQuery</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.rowInput">rowInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.widthInput">widthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.column">column</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.height">height</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.ignoreTimeRange">ignoreTimeRange</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.row">row</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.width">width</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram">OneDashboardPageWidgetHistogram</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nrqlQuery`<sup>Required</sup> <a name="nrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: OneDashboardPageWidgetHistogramNrqlQueryList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList">OneDashboardPageWidgetHistogramNrqlQueryList</a>

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.columnInput"></a>

```typescript
public readonly columnInput: number;
```

- *Type:* number

---

##### `heightInput`<sup>Optional</sup> <a name="heightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.heightInput"></a>

```typescript
public readonly heightInput: number;
```

- *Type:* number

---

##### `ignoreTimeRangeInput`<sup>Optional</sup> <a name="ignoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.ignoreTimeRangeInput"></a>

```typescript
public readonly ignoreTimeRangeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nrqlQueryInput`<sup>Optional</sup> <a name="nrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.nrqlQueryInput"></a>

```typescript
public readonly nrqlQueryInput: IResolvable | OneDashboardPageWidgetHistogramNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQuery">OneDashboardPageWidgetHistogramNrqlQuery</a>[]

---

##### `rowInput`<sup>Optional</sup> <a name="rowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.rowInput"></a>

```typescript
public readonly rowInput: number;
```

- *Type:* number

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `widthInput`<sup>Optional</sup> <a name="widthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.widthInput"></a>

```typescript
public readonly widthInput: number;
```

- *Type:* number

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* number

---

##### `height`<sup>Required</sup> <a name="height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

---

##### `ignoreTimeRange`<sup>Required</sup> <a name="ignoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.ignoreTimeRange"></a>

```typescript
public readonly ignoreTimeRange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `row`<sup>Required</sup> <a name="row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* number

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OneDashboardPageWidgetHistogram | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram">OneDashboardPageWidgetHistogram</a> | cdktf.IResolvable

---


### OneDashboardPageWidgetJsonList <a name="OneDashboardPageWidgetJsonList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetJsonList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.get"></a>

```typescript
public get(index: number): OneDashboardPageWidgetJsonOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson">OneDashboardPageWidgetJson</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OneDashboardPageWidgetJson[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson">OneDashboardPageWidgetJson</a>[]

---


### OneDashboardPageWidgetJsonNrqlQueryList <a name="OneDashboardPageWidgetJsonNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.get"></a>

```typescript
public get(index: number): OneDashboardPageWidgetJsonNrqlQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQuery">OneDashboardPageWidgetJsonNrqlQuery</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OneDashboardPageWidgetJsonNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQuery">OneDashboardPageWidgetJsonNrqlQuery</a>[]

---


### OneDashboardPageWidgetJsonNrqlQueryOutputReference <a name="OneDashboardPageWidgetJsonNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.resetAccountId"></a>

```typescript
public resetAccountId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQuery">OneDashboardPageWidgetJsonNrqlQuery</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OneDashboardPageWidgetJsonNrqlQuery | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQuery">OneDashboardPageWidgetJsonNrqlQuery</a> | cdktf.IResolvable

---


### OneDashboardPageWidgetJsonOutputReference <a name="OneDashboardPageWidgetJsonOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetJsonOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.putNrqlQuery">putNrqlQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.resetHeight">resetHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.resetIgnoreTimeRange">resetIgnoreTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.resetWidth">resetWidth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNrqlQuery` <a name="putNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.putNrqlQuery"></a>

```typescript
public putNrqlQuery(value: IResolvable | OneDashboardPageWidgetJsonNrqlQuery[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQuery">OneDashboardPageWidgetJsonNrqlQuery</a>[]

---

##### `resetHeight` <a name="resetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.resetHeight"></a>

```typescript
public resetHeight(): void
```

##### `resetIgnoreTimeRange` <a name="resetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.resetIgnoreTimeRange"></a>

```typescript
public resetIgnoreTimeRange(): void
```

##### `resetWidth` <a name="resetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.resetWidth"></a>

```typescript
public resetWidth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.nrqlQuery">nrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList">OneDashboardPageWidgetJsonNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.columnInput">columnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.heightInput">heightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.ignoreTimeRangeInput">ignoreTimeRangeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.nrqlQueryInput">nrqlQueryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQuery">OneDashboardPageWidgetJsonNrqlQuery</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.rowInput">rowInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.widthInput">widthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.column">column</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.height">height</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.ignoreTimeRange">ignoreTimeRange</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.row">row</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.width">width</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson">OneDashboardPageWidgetJson</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nrqlQuery`<sup>Required</sup> <a name="nrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: OneDashboardPageWidgetJsonNrqlQueryList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList">OneDashboardPageWidgetJsonNrqlQueryList</a>

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.columnInput"></a>

```typescript
public readonly columnInput: number;
```

- *Type:* number

---

##### `heightInput`<sup>Optional</sup> <a name="heightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.heightInput"></a>

```typescript
public readonly heightInput: number;
```

- *Type:* number

---

##### `ignoreTimeRangeInput`<sup>Optional</sup> <a name="ignoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.ignoreTimeRangeInput"></a>

```typescript
public readonly ignoreTimeRangeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nrqlQueryInput`<sup>Optional</sup> <a name="nrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.nrqlQueryInput"></a>

```typescript
public readonly nrqlQueryInput: IResolvable | OneDashboardPageWidgetJsonNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQuery">OneDashboardPageWidgetJsonNrqlQuery</a>[]

---

##### `rowInput`<sup>Optional</sup> <a name="rowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.rowInput"></a>

```typescript
public readonly rowInput: number;
```

- *Type:* number

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `widthInput`<sup>Optional</sup> <a name="widthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.widthInput"></a>

```typescript
public readonly widthInput: number;
```

- *Type:* number

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* number

---

##### `height`<sup>Required</sup> <a name="height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

---

##### `ignoreTimeRange`<sup>Required</sup> <a name="ignoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.ignoreTimeRange"></a>

```typescript
public readonly ignoreTimeRange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `row`<sup>Required</sup> <a name="row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* number

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OneDashboardPageWidgetJson | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson">OneDashboardPageWidgetJson</a> | cdktf.IResolvable

---


### OneDashboardPageWidgetLineList <a name="OneDashboardPageWidgetLineList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetLineList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.get"></a>

```typescript
public get(index: number): OneDashboardPageWidgetLineOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine">OneDashboardPageWidgetLine</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OneDashboardPageWidgetLine[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine">OneDashboardPageWidgetLine</a>[]

---


### OneDashboardPageWidgetLineNrqlQueryList <a name="OneDashboardPageWidgetLineNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetLineNrqlQueryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.get"></a>

```typescript
public get(index: number): OneDashboardPageWidgetLineNrqlQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQuery">OneDashboardPageWidgetLineNrqlQuery</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OneDashboardPageWidgetLineNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQuery">OneDashboardPageWidgetLineNrqlQuery</a>[]

---


### OneDashboardPageWidgetLineNrqlQueryOutputReference <a name="OneDashboardPageWidgetLineNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.resetAccountId"></a>

```typescript
public resetAccountId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQuery">OneDashboardPageWidgetLineNrqlQuery</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OneDashboardPageWidgetLineNrqlQuery | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQuery">OneDashboardPageWidgetLineNrqlQuery</a> | cdktf.IResolvable

---


### OneDashboardPageWidgetLineOutputReference <a name="OneDashboardPageWidgetLineOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetLineOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.putNrqlQuery">putNrqlQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.resetHeight">resetHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.resetIgnoreTimeRange">resetIgnoreTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.resetWidth">resetWidth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNrqlQuery` <a name="putNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.putNrqlQuery"></a>

```typescript
public putNrqlQuery(value: IResolvable | OneDashboardPageWidgetLineNrqlQuery[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQuery">OneDashboardPageWidgetLineNrqlQuery</a>[]

---

##### `resetHeight` <a name="resetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.resetHeight"></a>

```typescript
public resetHeight(): void
```

##### `resetIgnoreTimeRange` <a name="resetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.resetIgnoreTimeRange"></a>

```typescript
public resetIgnoreTimeRange(): void
```

##### `resetWidth` <a name="resetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.resetWidth"></a>

```typescript
public resetWidth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.nrqlQuery">nrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList">OneDashboardPageWidgetLineNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.columnInput">columnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.heightInput">heightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.ignoreTimeRangeInput">ignoreTimeRangeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.nrqlQueryInput">nrqlQueryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQuery">OneDashboardPageWidgetLineNrqlQuery</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.rowInput">rowInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.widthInput">widthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.column">column</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.height">height</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.ignoreTimeRange">ignoreTimeRange</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.row">row</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.width">width</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine">OneDashboardPageWidgetLine</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nrqlQuery`<sup>Required</sup> <a name="nrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: OneDashboardPageWidgetLineNrqlQueryList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList">OneDashboardPageWidgetLineNrqlQueryList</a>

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.columnInput"></a>

```typescript
public readonly columnInput: number;
```

- *Type:* number

---

##### `heightInput`<sup>Optional</sup> <a name="heightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.heightInput"></a>

```typescript
public readonly heightInput: number;
```

- *Type:* number

---

##### `ignoreTimeRangeInput`<sup>Optional</sup> <a name="ignoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.ignoreTimeRangeInput"></a>

```typescript
public readonly ignoreTimeRangeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nrqlQueryInput`<sup>Optional</sup> <a name="nrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.nrqlQueryInput"></a>

```typescript
public readonly nrqlQueryInput: IResolvable | OneDashboardPageWidgetLineNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQuery">OneDashboardPageWidgetLineNrqlQuery</a>[]

---

##### `rowInput`<sup>Optional</sup> <a name="rowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.rowInput"></a>

```typescript
public readonly rowInput: number;
```

- *Type:* number

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `widthInput`<sup>Optional</sup> <a name="widthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.widthInput"></a>

```typescript
public readonly widthInput: number;
```

- *Type:* number

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* number

---

##### `height`<sup>Required</sup> <a name="height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

---

##### `ignoreTimeRange`<sup>Required</sup> <a name="ignoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.ignoreTimeRange"></a>

```typescript
public readonly ignoreTimeRange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `row`<sup>Required</sup> <a name="row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* number

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OneDashboardPageWidgetLine | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine">OneDashboardPageWidgetLine</a> | cdktf.IResolvable

---


### OneDashboardPageWidgetLogTableList <a name="OneDashboardPageWidgetLogTableList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetLogTableList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.get"></a>

```typescript
public get(index: number): OneDashboardPageWidgetLogTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable">OneDashboardPageWidgetLogTable</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OneDashboardPageWidgetLogTable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable">OneDashboardPageWidgetLogTable</a>[]

---


### OneDashboardPageWidgetLogTableNrqlQueryList <a name="OneDashboardPageWidgetLogTableNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.get"></a>

```typescript
public get(index: number): OneDashboardPageWidgetLogTableNrqlQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQuery">OneDashboardPageWidgetLogTableNrqlQuery</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OneDashboardPageWidgetLogTableNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQuery">OneDashboardPageWidgetLogTableNrqlQuery</a>[]

---


### OneDashboardPageWidgetLogTableNrqlQueryOutputReference <a name="OneDashboardPageWidgetLogTableNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.resetAccountId"></a>

```typescript
public resetAccountId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQuery">OneDashboardPageWidgetLogTableNrqlQuery</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OneDashboardPageWidgetLogTableNrqlQuery | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQuery">OneDashboardPageWidgetLogTableNrqlQuery</a> | cdktf.IResolvable

---


### OneDashboardPageWidgetLogTableOutputReference <a name="OneDashboardPageWidgetLogTableOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetLogTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.putNrqlQuery">putNrqlQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.resetHeight">resetHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.resetIgnoreTimeRange">resetIgnoreTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.resetWidth">resetWidth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNrqlQuery` <a name="putNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.putNrqlQuery"></a>

```typescript
public putNrqlQuery(value: IResolvable | OneDashboardPageWidgetLogTableNrqlQuery[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQuery">OneDashboardPageWidgetLogTableNrqlQuery</a>[]

---

##### `resetHeight` <a name="resetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.resetHeight"></a>

```typescript
public resetHeight(): void
```

##### `resetIgnoreTimeRange` <a name="resetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.resetIgnoreTimeRange"></a>

```typescript
public resetIgnoreTimeRange(): void
```

##### `resetWidth` <a name="resetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.resetWidth"></a>

```typescript
public resetWidth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.nrqlQuery">nrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList">OneDashboardPageWidgetLogTableNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.columnInput">columnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.heightInput">heightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.ignoreTimeRangeInput">ignoreTimeRangeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.nrqlQueryInput">nrqlQueryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQuery">OneDashboardPageWidgetLogTableNrqlQuery</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.rowInput">rowInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.widthInput">widthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.column">column</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.height">height</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.ignoreTimeRange">ignoreTimeRange</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.row">row</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.width">width</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable">OneDashboardPageWidgetLogTable</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nrqlQuery`<sup>Required</sup> <a name="nrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: OneDashboardPageWidgetLogTableNrqlQueryList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList">OneDashboardPageWidgetLogTableNrqlQueryList</a>

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.columnInput"></a>

```typescript
public readonly columnInput: number;
```

- *Type:* number

---

##### `heightInput`<sup>Optional</sup> <a name="heightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.heightInput"></a>

```typescript
public readonly heightInput: number;
```

- *Type:* number

---

##### `ignoreTimeRangeInput`<sup>Optional</sup> <a name="ignoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.ignoreTimeRangeInput"></a>

```typescript
public readonly ignoreTimeRangeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nrqlQueryInput`<sup>Optional</sup> <a name="nrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.nrqlQueryInput"></a>

```typescript
public readonly nrqlQueryInput: IResolvable | OneDashboardPageWidgetLogTableNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQuery">OneDashboardPageWidgetLogTableNrqlQuery</a>[]

---

##### `rowInput`<sup>Optional</sup> <a name="rowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.rowInput"></a>

```typescript
public readonly rowInput: number;
```

- *Type:* number

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `widthInput`<sup>Optional</sup> <a name="widthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.widthInput"></a>

```typescript
public readonly widthInput: number;
```

- *Type:* number

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* number

---

##### `height`<sup>Required</sup> <a name="height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

---

##### `ignoreTimeRange`<sup>Required</sup> <a name="ignoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.ignoreTimeRange"></a>

```typescript
public readonly ignoreTimeRange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `row`<sup>Required</sup> <a name="row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* number

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OneDashboardPageWidgetLogTable | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable">OneDashboardPageWidgetLogTable</a> | cdktf.IResolvable

---


### OneDashboardPageWidgetMarkdownList <a name="OneDashboardPageWidgetMarkdownList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetMarkdownList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.get"></a>

```typescript
public get(index: number): OneDashboardPageWidgetMarkdownOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown">OneDashboardPageWidgetMarkdown</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OneDashboardPageWidgetMarkdown[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown">OneDashboardPageWidgetMarkdown</a>[]

---


### OneDashboardPageWidgetMarkdownOutputReference <a name="OneDashboardPageWidgetMarkdownOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetMarkdownOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.resetHeight">resetHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.resetIgnoreTimeRange">resetIgnoreTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.resetText">resetText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.resetWidth">resetWidth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeight` <a name="resetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.resetHeight"></a>

```typescript
public resetHeight(): void
```

##### `resetIgnoreTimeRange` <a name="resetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.resetIgnoreTimeRange"></a>

```typescript
public resetIgnoreTimeRange(): void
```

##### `resetText` <a name="resetText" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.resetText"></a>

```typescript
public resetText(): void
```

##### `resetWidth` <a name="resetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.resetWidth"></a>

```typescript
public resetWidth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.columnInput">columnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.heightInput">heightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.ignoreTimeRangeInput">ignoreTimeRangeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.rowInput">rowInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.widthInput">widthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.column">column</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.height">height</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.ignoreTimeRange">ignoreTimeRange</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.row">row</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.width">width</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown">OneDashboardPageWidgetMarkdown</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.columnInput"></a>

```typescript
public readonly columnInput: number;
```

- *Type:* number

---

##### `heightInput`<sup>Optional</sup> <a name="heightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.heightInput"></a>

```typescript
public readonly heightInput: number;
```

- *Type:* number

---

##### `ignoreTimeRangeInput`<sup>Optional</sup> <a name="ignoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.ignoreTimeRangeInput"></a>

```typescript
public readonly ignoreTimeRangeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rowInput`<sup>Optional</sup> <a name="rowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.rowInput"></a>

```typescript
public readonly rowInput: number;
```

- *Type:* number

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `widthInput`<sup>Optional</sup> <a name="widthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.widthInput"></a>

```typescript
public readonly widthInput: number;
```

- *Type:* number

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* number

---

##### `height`<sup>Required</sup> <a name="height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

---

##### `ignoreTimeRange`<sup>Required</sup> <a name="ignoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.ignoreTimeRange"></a>

```typescript
public readonly ignoreTimeRange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `row`<sup>Required</sup> <a name="row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* number

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OneDashboardPageWidgetMarkdown | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown">OneDashboardPageWidgetMarkdown</a> | cdktf.IResolvable

---


### OneDashboardPageWidgetPieList <a name="OneDashboardPageWidgetPieList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetPieList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.get"></a>

```typescript
public get(index: number): OneDashboardPageWidgetPieOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie">OneDashboardPageWidgetPie</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OneDashboardPageWidgetPie[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie">OneDashboardPageWidgetPie</a>[]

---


### OneDashboardPageWidgetPieNrqlQueryList <a name="OneDashboardPageWidgetPieNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetPieNrqlQueryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.get"></a>

```typescript
public get(index: number): OneDashboardPageWidgetPieNrqlQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQuery">OneDashboardPageWidgetPieNrqlQuery</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OneDashboardPageWidgetPieNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQuery">OneDashboardPageWidgetPieNrqlQuery</a>[]

---


### OneDashboardPageWidgetPieNrqlQueryOutputReference <a name="OneDashboardPageWidgetPieNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.resetAccountId"></a>

```typescript
public resetAccountId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQuery">OneDashboardPageWidgetPieNrqlQuery</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OneDashboardPageWidgetPieNrqlQuery | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQuery">OneDashboardPageWidgetPieNrqlQuery</a> | cdktf.IResolvable

---


### OneDashboardPageWidgetPieOutputReference <a name="OneDashboardPageWidgetPieOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetPieOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.putNrqlQuery">putNrqlQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.resetFilterCurrentDashboard">resetFilterCurrentDashboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.resetHeight">resetHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.resetIgnoreTimeRange">resetIgnoreTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.resetLinkedEntityGuids">resetLinkedEntityGuids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.resetWidth">resetWidth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNrqlQuery` <a name="putNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.putNrqlQuery"></a>

```typescript
public putNrqlQuery(value: IResolvable | OneDashboardPageWidgetPieNrqlQuery[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQuery">OneDashboardPageWidgetPieNrqlQuery</a>[]

---

##### `resetFilterCurrentDashboard` <a name="resetFilterCurrentDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.resetFilterCurrentDashboard"></a>

```typescript
public resetFilterCurrentDashboard(): void
```

##### `resetHeight` <a name="resetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.resetHeight"></a>

```typescript
public resetHeight(): void
```

##### `resetIgnoreTimeRange` <a name="resetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.resetIgnoreTimeRange"></a>

```typescript
public resetIgnoreTimeRange(): void
```

##### `resetLinkedEntityGuids` <a name="resetLinkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.resetLinkedEntityGuids"></a>

```typescript
public resetLinkedEntityGuids(): void
```

##### `resetWidth` <a name="resetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.resetWidth"></a>

```typescript
public resetWidth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.nrqlQuery">nrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList">OneDashboardPageWidgetPieNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.columnInput">columnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.filterCurrentDashboardInput">filterCurrentDashboardInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.heightInput">heightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.ignoreTimeRangeInput">ignoreTimeRangeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.linkedEntityGuidsInput">linkedEntityGuidsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.nrqlQueryInput">nrqlQueryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQuery">OneDashboardPageWidgetPieNrqlQuery</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.rowInput">rowInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.widthInput">widthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.column">column</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.filterCurrentDashboard">filterCurrentDashboard</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.height">height</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.ignoreTimeRange">ignoreTimeRange</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.linkedEntityGuids">linkedEntityGuids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.row">row</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.width">width</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie">OneDashboardPageWidgetPie</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nrqlQuery`<sup>Required</sup> <a name="nrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: OneDashboardPageWidgetPieNrqlQueryList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList">OneDashboardPageWidgetPieNrqlQueryList</a>

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.columnInput"></a>

```typescript
public readonly columnInput: number;
```

- *Type:* number

---

##### `filterCurrentDashboardInput`<sup>Optional</sup> <a name="filterCurrentDashboardInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.filterCurrentDashboardInput"></a>

```typescript
public readonly filterCurrentDashboardInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `heightInput`<sup>Optional</sup> <a name="heightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.heightInput"></a>

```typescript
public readonly heightInput: number;
```

- *Type:* number

---

##### `ignoreTimeRangeInput`<sup>Optional</sup> <a name="ignoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.ignoreTimeRangeInput"></a>

```typescript
public readonly ignoreTimeRangeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `linkedEntityGuidsInput`<sup>Optional</sup> <a name="linkedEntityGuidsInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.linkedEntityGuidsInput"></a>

```typescript
public readonly linkedEntityGuidsInput: string[];
```

- *Type:* string[]

---

##### `nrqlQueryInput`<sup>Optional</sup> <a name="nrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.nrqlQueryInput"></a>

```typescript
public readonly nrqlQueryInput: IResolvable | OneDashboardPageWidgetPieNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQuery">OneDashboardPageWidgetPieNrqlQuery</a>[]

---

##### `rowInput`<sup>Optional</sup> <a name="rowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.rowInput"></a>

```typescript
public readonly rowInput: number;
```

- *Type:* number

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `widthInput`<sup>Optional</sup> <a name="widthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.widthInput"></a>

```typescript
public readonly widthInput: number;
```

- *Type:* number

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* number

---

##### `filterCurrentDashboard`<sup>Required</sup> <a name="filterCurrentDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.filterCurrentDashboard"></a>

```typescript
public readonly filterCurrentDashboard: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `height`<sup>Required</sup> <a name="height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

---

##### `ignoreTimeRange`<sup>Required</sup> <a name="ignoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.ignoreTimeRange"></a>

```typescript
public readonly ignoreTimeRange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `linkedEntityGuids`<sup>Required</sup> <a name="linkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.linkedEntityGuids"></a>

```typescript
public readonly linkedEntityGuids: string[];
```

- *Type:* string[]

---

##### `row`<sup>Required</sup> <a name="row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* number

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OneDashboardPageWidgetPie | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie">OneDashboardPageWidgetPie</a> | cdktf.IResolvable

---


### OneDashboardPageWidgetStackedBarList <a name="OneDashboardPageWidgetStackedBarList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetStackedBarList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.get"></a>

```typescript
public get(index: number): OneDashboardPageWidgetStackedBarOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar">OneDashboardPageWidgetStackedBar</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OneDashboardPageWidgetStackedBar[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar">OneDashboardPageWidgetStackedBar</a>[]

---


### OneDashboardPageWidgetStackedBarNrqlQueryList <a name="OneDashboardPageWidgetStackedBarNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.get"></a>

```typescript
public get(index: number): OneDashboardPageWidgetStackedBarNrqlQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQuery">OneDashboardPageWidgetStackedBarNrqlQuery</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OneDashboardPageWidgetStackedBarNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQuery">OneDashboardPageWidgetStackedBarNrqlQuery</a>[]

---


### OneDashboardPageWidgetStackedBarNrqlQueryOutputReference <a name="OneDashboardPageWidgetStackedBarNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.resetAccountId"></a>

```typescript
public resetAccountId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQuery">OneDashboardPageWidgetStackedBarNrqlQuery</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OneDashboardPageWidgetStackedBarNrqlQuery | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQuery">OneDashboardPageWidgetStackedBarNrqlQuery</a> | cdktf.IResolvable

---


### OneDashboardPageWidgetStackedBarOutputReference <a name="OneDashboardPageWidgetStackedBarOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetStackedBarOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.putNrqlQuery">putNrqlQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.resetHeight">resetHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.resetIgnoreTimeRange">resetIgnoreTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.resetWidth">resetWidth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNrqlQuery` <a name="putNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.putNrqlQuery"></a>

```typescript
public putNrqlQuery(value: IResolvable | OneDashboardPageWidgetStackedBarNrqlQuery[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQuery">OneDashboardPageWidgetStackedBarNrqlQuery</a>[]

---

##### `resetHeight` <a name="resetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.resetHeight"></a>

```typescript
public resetHeight(): void
```

##### `resetIgnoreTimeRange` <a name="resetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.resetIgnoreTimeRange"></a>

```typescript
public resetIgnoreTimeRange(): void
```

##### `resetWidth` <a name="resetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.resetWidth"></a>

```typescript
public resetWidth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.nrqlQuery">nrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList">OneDashboardPageWidgetStackedBarNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.columnInput">columnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.heightInput">heightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.ignoreTimeRangeInput">ignoreTimeRangeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.nrqlQueryInput">nrqlQueryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQuery">OneDashboardPageWidgetStackedBarNrqlQuery</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.rowInput">rowInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.widthInput">widthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.column">column</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.height">height</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.ignoreTimeRange">ignoreTimeRange</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.row">row</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.width">width</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar">OneDashboardPageWidgetStackedBar</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nrqlQuery`<sup>Required</sup> <a name="nrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: OneDashboardPageWidgetStackedBarNrqlQueryList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList">OneDashboardPageWidgetStackedBarNrqlQueryList</a>

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.columnInput"></a>

```typescript
public readonly columnInput: number;
```

- *Type:* number

---

##### `heightInput`<sup>Optional</sup> <a name="heightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.heightInput"></a>

```typescript
public readonly heightInput: number;
```

- *Type:* number

---

##### `ignoreTimeRangeInput`<sup>Optional</sup> <a name="ignoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.ignoreTimeRangeInput"></a>

```typescript
public readonly ignoreTimeRangeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nrqlQueryInput`<sup>Optional</sup> <a name="nrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.nrqlQueryInput"></a>

```typescript
public readonly nrqlQueryInput: IResolvable | OneDashboardPageWidgetStackedBarNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQuery">OneDashboardPageWidgetStackedBarNrqlQuery</a>[]

---

##### `rowInput`<sup>Optional</sup> <a name="rowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.rowInput"></a>

```typescript
public readonly rowInput: number;
```

- *Type:* number

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `widthInput`<sup>Optional</sup> <a name="widthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.widthInput"></a>

```typescript
public readonly widthInput: number;
```

- *Type:* number

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* number

---

##### `height`<sup>Required</sup> <a name="height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

---

##### `ignoreTimeRange`<sup>Required</sup> <a name="ignoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.ignoreTimeRange"></a>

```typescript
public readonly ignoreTimeRange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `row`<sup>Required</sup> <a name="row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* number

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OneDashboardPageWidgetStackedBar | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar">OneDashboardPageWidgetStackedBar</a> | cdktf.IResolvable

---


### OneDashboardPageWidgetTableList <a name="OneDashboardPageWidgetTableList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetTableList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.get"></a>

```typescript
public get(index: number): OneDashboardPageWidgetTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable">OneDashboardPageWidgetTable</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OneDashboardPageWidgetTable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable">OneDashboardPageWidgetTable</a>[]

---


### OneDashboardPageWidgetTableNrqlQueryList <a name="OneDashboardPageWidgetTableNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetTableNrqlQueryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.get"></a>

```typescript
public get(index: number): OneDashboardPageWidgetTableNrqlQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQuery">OneDashboardPageWidgetTableNrqlQuery</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OneDashboardPageWidgetTableNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQuery">OneDashboardPageWidgetTableNrqlQuery</a>[]

---


### OneDashboardPageWidgetTableNrqlQueryOutputReference <a name="OneDashboardPageWidgetTableNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.resetAccountId"></a>

```typescript
public resetAccountId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQuery">OneDashboardPageWidgetTableNrqlQuery</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OneDashboardPageWidgetTableNrqlQuery | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQuery">OneDashboardPageWidgetTableNrqlQuery</a> | cdktf.IResolvable

---


### OneDashboardPageWidgetTableOutputReference <a name="OneDashboardPageWidgetTableOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardPageWidgetTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.putNrqlQuery">putNrqlQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.resetFilterCurrentDashboard">resetFilterCurrentDashboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.resetHeight">resetHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.resetIgnoreTimeRange">resetIgnoreTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.resetLinkedEntityGuids">resetLinkedEntityGuids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.resetWidth">resetWidth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNrqlQuery` <a name="putNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.putNrqlQuery"></a>

```typescript
public putNrqlQuery(value: IResolvable | OneDashboardPageWidgetTableNrqlQuery[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQuery">OneDashboardPageWidgetTableNrqlQuery</a>[]

---

##### `resetFilterCurrentDashboard` <a name="resetFilterCurrentDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.resetFilterCurrentDashboard"></a>

```typescript
public resetFilterCurrentDashboard(): void
```

##### `resetHeight` <a name="resetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.resetHeight"></a>

```typescript
public resetHeight(): void
```

##### `resetIgnoreTimeRange` <a name="resetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.resetIgnoreTimeRange"></a>

```typescript
public resetIgnoreTimeRange(): void
```

##### `resetLinkedEntityGuids` <a name="resetLinkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.resetLinkedEntityGuids"></a>

```typescript
public resetLinkedEntityGuids(): void
```

##### `resetWidth` <a name="resetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.resetWidth"></a>

```typescript
public resetWidth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.nrqlQuery">nrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList">OneDashboardPageWidgetTableNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.columnInput">columnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.filterCurrentDashboardInput">filterCurrentDashboardInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.heightInput">heightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.ignoreTimeRangeInput">ignoreTimeRangeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.linkedEntityGuidsInput">linkedEntityGuidsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.nrqlQueryInput">nrqlQueryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQuery">OneDashboardPageWidgetTableNrqlQuery</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.rowInput">rowInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.widthInput">widthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.column">column</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.filterCurrentDashboard">filterCurrentDashboard</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.height">height</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.ignoreTimeRange">ignoreTimeRange</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.linkedEntityGuids">linkedEntityGuids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.row">row</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.width">width</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable">OneDashboardPageWidgetTable</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nrqlQuery`<sup>Required</sup> <a name="nrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: OneDashboardPageWidgetTableNrqlQueryList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList">OneDashboardPageWidgetTableNrqlQueryList</a>

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.columnInput"></a>

```typescript
public readonly columnInput: number;
```

- *Type:* number

---

##### `filterCurrentDashboardInput`<sup>Optional</sup> <a name="filterCurrentDashboardInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.filterCurrentDashboardInput"></a>

```typescript
public readonly filterCurrentDashboardInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `heightInput`<sup>Optional</sup> <a name="heightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.heightInput"></a>

```typescript
public readonly heightInput: number;
```

- *Type:* number

---

##### `ignoreTimeRangeInput`<sup>Optional</sup> <a name="ignoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.ignoreTimeRangeInput"></a>

```typescript
public readonly ignoreTimeRangeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `linkedEntityGuidsInput`<sup>Optional</sup> <a name="linkedEntityGuidsInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.linkedEntityGuidsInput"></a>

```typescript
public readonly linkedEntityGuidsInput: string[];
```

- *Type:* string[]

---

##### `nrqlQueryInput`<sup>Optional</sup> <a name="nrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.nrqlQueryInput"></a>

```typescript
public readonly nrqlQueryInput: IResolvable | OneDashboardPageWidgetTableNrqlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQuery">OneDashboardPageWidgetTableNrqlQuery</a>[]

---

##### `rowInput`<sup>Optional</sup> <a name="rowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.rowInput"></a>

```typescript
public readonly rowInput: number;
```

- *Type:* number

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `widthInput`<sup>Optional</sup> <a name="widthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.widthInput"></a>

```typescript
public readonly widthInput: number;
```

- *Type:* number

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* number

---

##### `filterCurrentDashboard`<sup>Required</sup> <a name="filterCurrentDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.filterCurrentDashboard"></a>

```typescript
public readonly filterCurrentDashboard: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `height`<sup>Required</sup> <a name="height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

---

##### `ignoreTimeRange`<sup>Required</sup> <a name="ignoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.ignoreTimeRange"></a>

```typescript
public readonly ignoreTimeRange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `linkedEntityGuids`<sup>Required</sup> <a name="linkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.linkedEntityGuids"></a>

```typescript
public readonly linkedEntityGuids: string[];
```

- *Type:* string[]

---

##### `row`<sup>Required</sup> <a name="row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* number

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OneDashboardPageWidgetTable | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable">OneDashboardPageWidgetTable</a> | cdktf.IResolvable

---


### OneDashboardVariableItemList <a name="OneDashboardVariableItemList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardVariableItemList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.get"></a>

```typescript
public get(index: number): OneDashboardVariableItemOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItem">OneDashboardVariableItem</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OneDashboardVariableItem[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItem">OneDashboardVariableItem</a>[]

---


### OneDashboardVariableItemOutputReference <a name="OneDashboardVariableItemOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardVariableItemOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItem">OneDashboardVariableItem</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OneDashboardVariableItem | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItem">OneDashboardVariableItem</a> | cdktf.IResolvable

---


### OneDashboardVariableList <a name="OneDashboardVariableList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardVariableList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.get"></a>

```typescript
public get(index: number): OneDashboardVariableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable">OneDashboardVariable</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OneDashboardVariable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable">OneDashboardVariable</a>[]

---


### OneDashboardVariableNrqlQueryOutputReference <a name="OneDashboardVariableNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardVariableNrqlQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.resetAccountIds">resetAccountIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountIds` <a name="resetAccountIds" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.resetAccountIds"></a>

```typescript
public resetAccountIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.accountIdsInput">accountIdsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.accountIds">accountIds</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery">OneDashboardVariableNrqlQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdsInput`<sup>Optional</sup> <a name="accountIdsInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.accountIdsInput"></a>

```typescript
public readonly accountIdsInput: number[];
```

- *Type:* number[]

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `accountIds`<sup>Required</sup> <a name="accountIds" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.accountIds"></a>

```typescript
public readonly accountIds: number[];
```

- *Type:* number[]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OneDashboardVariableNrqlQuery;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery">OneDashboardVariableNrqlQuery</a>

---


### OneDashboardVariableOutputReference <a name="OneDashboardVariableOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.Initializer"></a>

```typescript
import { oneDashboard } from '@cdktf/provider-newrelic'

new oneDashboard.OneDashboardVariableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.putItem">putItem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.putNrqlQuery">putNrqlQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.resetDefaultValues">resetDefaultValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.resetIsMultiSelection">resetIsMultiSelection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.resetItem">resetItem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.resetNrqlQuery">resetNrqlQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putItem` <a name="putItem" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.putItem"></a>

```typescript
public putItem(value: IResolvable | OneDashboardVariableItem[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.putItem.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItem">OneDashboardVariableItem</a>[]

---

##### `putNrqlQuery` <a name="putNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.putNrqlQuery"></a>

```typescript
public putNrqlQuery(value: OneDashboardVariableNrqlQuery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery">OneDashboardVariableNrqlQuery</a>

---

##### `resetDefaultValues` <a name="resetDefaultValues" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.resetDefaultValues"></a>

```typescript
public resetDefaultValues(): void
```

##### `resetIsMultiSelection` <a name="resetIsMultiSelection" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.resetIsMultiSelection"></a>

```typescript
public resetIsMultiSelection(): void
```

##### `resetItem` <a name="resetItem" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.resetItem"></a>

```typescript
public resetItem(): void
```

##### `resetNrqlQuery` <a name="resetNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.resetNrqlQuery"></a>

```typescript
public resetNrqlQuery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.item">item</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList">OneDashboardVariableItemList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.nrqlQuery">nrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference">OneDashboardVariableNrqlQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.defaultValuesInput">defaultValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.isMultiSelectionInput">isMultiSelectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.itemInput">itemInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItem">OneDashboardVariableItem</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.nrqlQueryInput">nrqlQueryInput</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery">OneDashboardVariableNrqlQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.replacementStrategyInput">replacementStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.defaultValues">defaultValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.isMultiSelection">isMultiSelection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.replacementStrategy">replacementStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable">OneDashboardVariable</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `item`<sup>Required</sup> <a name="item" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.item"></a>

```typescript
public readonly item: OneDashboardVariableItemList;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList">OneDashboardVariableItemList</a>

---

##### `nrqlQuery`<sup>Required</sup> <a name="nrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: OneDashboardVariableNrqlQueryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference">OneDashboardVariableNrqlQueryOutputReference</a>

---

##### `defaultValuesInput`<sup>Optional</sup> <a name="defaultValuesInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.defaultValuesInput"></a>

```typescript
public readonly defaultValuesInput: string[];
```

- *Type:* string[]

---

##### `isMultiSelectionInput`<sup>Optional</sup> <a name="isMultiSelectionInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.isMultiSelectionInput"></a>

```typescript
public readonly isMultiSelectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `itemInput`<sup>Optional</sup> <a name="itemInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.itemInput"></a>

```typescript
public readonly itemInput: IResolvable | OneDashboardVariableItem[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItem">OneDashboardVariableItem</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nrqlQueryInput`<sup>Optional</sup> <a name="nrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.nrqlQueryInput"></a>

```typescript
public readonly nrqlQueryInput: OneDashboardVariableNrqlQuery;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery">OneDashboardVariableNrqlQuery</a>

---

##### `replacementStrategyInput`<sup>Optional</sup> <a name="replacementStrategyInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.replacementStrategyInput"></a>

```typescript
public readonly replacementStrategyInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `defaultValues`<sup>Required</sup> <a name="defaultValues" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.defaultValues"></a>

```typescript
public readonly defaultValues: string[];
```

- *Type:* string[]

---

##### `isMultiSelection`<sup>Required</sup> <a name="isMultiSelection" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.isMultiSelection"></a>

```typescript
public readonly isMultiSelection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `replacementStrategy`<sup>Required</sup> <a name="replacementStrategy" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.replacementStrategy"></a>

```typescript
public readonly replacementStrategy: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OneDashboardVariable | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable">OneDashboardVariable</a> | cdktf.IResolvable

---



