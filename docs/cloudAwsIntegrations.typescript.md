# `newrelic_cloud_aws_integrations`

Refer to the Terraform Registory for docs: [`newrelic_cloud_aws_integrations`](https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_integrations).

# `cloudAwsIntegrations` Submodule <a name="`cloudAwsIntegrations` Submodule" id="@cdktf/provider-newrelic.cloudAwsIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudAwsIntegrations <a name="CloudAwsIntegrations" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_integrations newrelic_cloud_aws_integrations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsIntegrations.CloudAwsIntegrations(scope: Construct, id: string, config: CloudAwsIntegrationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig">CloudAwsIntegrationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig">CloudAwsIntegrationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putBilling">putBilling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putCloudtrail">putCloudtrail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putDocDb">putDocDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putHealth">putHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putTrustedAdvisor">putTrustedAdvisor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putVpc">putVpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putXRay">putXRay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetBilling">resetBilling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetCloudtrail">resetCloudtrail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetDocDb">resetDocDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetHealth">resetHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetS3">resetS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetTrustedAdvisor">resetTrustedAdvisor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetVpc">resetVpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetXRay">resetXRay</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putBilling` <a name="putBilling" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putBilling"></a>

```typescript
public putBilling(value: CloudAwsIntegrationsBilling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putBilling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling">CloudAwsIntegrationsBilling</a>

---

##### `putCloudtrail` <a name="putCloudtrail" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putCloudtrail"></a>

```typescript
public putCloudtrail(value: CloudAwsIntegrationsCloudtrail): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putCloudtrail.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail">CloudAwsIntegrationsCloudtrail</a>

---

##### `putDocDb` <a name="putDocDb" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putDocDb"></a>

```typescript
public putDocDb(value: CloudAwsIntegrationsDocDb): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putDocDb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb">CloudAwsIntegrationsDocDb</a>

---

##### `putHealth` <a name="putHealth" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putHealth"></a>

```typescript
public putHealth(value: CloudAwsIntegrationsHealth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putHealth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth">CloudAwsIntegrationsHealth</a>

---

##### `putS3` <a name="putS3" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putS3"></a>

```typescript
public putS3(value: CloudAwsIntegrationsS3): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3">CloudAwsIntegrationsS3</a>

---

##### `putTrustedAdvisor` <a name="putTrustedAdvisor" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putTrustedAdvisor"></a>

```typescript
public putTrustedAdvisor(value: CloudAwsIntegrationsTrustedAdvisor): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putTrustedAdvisor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor">CloudAwsIntegrationsTrustedAdvisor</a>

---

##### `putVpc` <a name="putVpc" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putVpc"></a>

```typescript
public putVpc(value: CloudAwsIntegrationsVpc): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putVpc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc">CloudAwsIntegrationsVpc</a>

---

##### `putXRay` <a name="putXRay" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putXRay"></a>

```typescript
public putXRay(value: CloudAwsIntegrationsXRay): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putXRay.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay">CloudAwsIntegrationsXRay</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetBilling` <a name="resetBilling" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetBilling"></a>

```typescript
public resetBilling(): void
```

##### `resetCloudtrail` <a name="resetCloudtrail" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetCloudtrail"></a>

```typescript
public resetCloudtrail(): void
```

##### `resetDocDb` <a name="resetDocDb" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetDocDb"></a>

```typescript
public resetDocDb(): void
```

##### `resetHealth` <a name="resetHealth" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetHealth"></a>

```typescript
public resetHealth(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetId"></a>

```typescript
public resetId(): void
```

##### `resetS3` <a name="resetS3" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetS3"></a>

```typescript
public resetS3(): void
```

##### `resetTrustedAdvisor` <a name="resetTrustedAdvisor" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetTrustedAdvisor"></a>

```typescript
public resetTrustedAdvisor(): void
```

##### `resetVpc` <a name="resetVpc" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetVpc"></a>

```typescript
public resetVpc(): void
```

##### `resetXRay` <a name="resetXRay" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetXRay"></a>

```typescript
public resetXRay(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.isConstruct"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

cloudAwsIntegrations.CloudAwsIntegrations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.isTerraformElement"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

cloudAwsIntegrations.CloudAwsIntegrations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.isTerraformResource"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

cloudAwsIntegrations.CloudAwsIntegrations.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.billing">billing</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference">CloudAwsIntegrationsBillingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.cloudtrail">cloudtrail</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference">CloudAwsIntegrationsCloudtrailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.docDb">docDb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference">CloudAwsIntegrationsDocDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.health">health</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference">CloudAwsIntegrationsHealthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference">CloudAwsIntegrationsS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.trustedAdvisor">trustedAdvisor</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference">CloudAwsIntegrationsTrustedAdvisorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.vpc">vpc</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference">CloudAwsIntegrationsVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.xRay">xRay</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference">CloudAwsIntegrationsXRayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.billingInput">billingInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling">CloudAwsIntegrationsBilling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.cloudtrailInput">cloudtrailInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail">CloudAwsIntegrationsCloudtrail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.docDbInput">docDbInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb">CloudAwsIntegrationsDocDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.healthInput">healthInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth">CloudAwsIntegrationsHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.linkedAccountIdInput">linkedAccountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.s3Input">s3Input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3">CloudAwsIntegrationsS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.trustedAdvisorInput">trustedAdvisorInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor">CloudAwsIntegrationsTrustedAdvisor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.vpcInput">vpcInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc">CloudAwsIntegrationsVpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.xRayInput">xRayInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay">CloudAwsIntegrationsXRay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.linkedAccountId">linkedAccountId</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `billing`<sup>Required</sup> <a name="billing" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.billing"></a>

```typescript
public readonly billing: CloudAwsIntegrationsBillingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference">CloudAwsIntegrationsBillingOutputReference</a>

---

##### `cloudtrail`<sup>Required</sup> <a name="cloudtrail" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.cloudtrail"></a>

```typescript
public readonly cloudtrail: CloudAwsIntegrationsCloudtrailOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference">CloudAwsIntegrationsCloudtrailOutputReference</a>

---

##### `docDb`<sup>Required</sup> <a name="docDb" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.docDb"></a>

```typescript
public readonly docDb: CloudAwsIntegrationsDocDbOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference">CloudAwsIntegrationsDocDbOutputReference</a>

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.health"></a>

```typescript
public readonly health: CloudAwsIntegrationsHealthOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference">CloudAwsIntegrationsHealthOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.s3"></a>

```typescript
public readonly s3: CloudAwsIntegrationsS3OutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference">CloudAwsIntegrationsS3OutputReference</a>

---

##### `trustedAdvisor`<sup>Required</sup> <a name="trustedAdvisor" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.trustedAdvisor"></a>

```typescript
public readonly trustedAdvisor: CloudAwsIntegrationsTrustedAdvisorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference">CloudAwsIntegrationsTrustedAdvisorOutputReference</a>

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.vpc"></a>

```typescript
public readonly vpc: CloudAwsIntegrationsVpcOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference">CloudAwsIntegrationsVpcOutputReference</a>

---

##### `xRay`<sup>Required</sup> <a name="xRay" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.xRay"></a>

```typescript
public readonly xRay: CloudAwsIntegrationsXRayOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference">CloudAwsIntegrationsXRayOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `billingInput`<sup>Optional</sup> <a name="billingInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.billingInput"></a>

```typescript
public readonly billingInput: CloudAwsIntegrationsBilling;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling">CloudAwsIntegrationsBilling</a>

---

##### `cloudtrailInput`<sup>Optional</sup> <a name="cloudtrailInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.cloudtrailInput"></a>

```typescript
public readonly cloudtrailInput: CloudAwsIntegrationsCloudtrail;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail">CloudAwsIntegrationsCloudtrail</a>

---

##### `docDbInput`<sup>Optional</sup> <a name="docDbInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.docDbInput"></a>

```typescript
public readonly docDbInput: CloudAwsIntegrationsDocDb;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb">CloudAwsIntegrationsDocDb</a>

---

##### `healthInput`<sup>Optional</sup> <a name="healthInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.healthInput"></a>

```typescript
public readonly healthInput: CloudAwsIntegrationsHealth;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth">CloudAwsIntegrationsHealth</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `linkedAccountIdInput`<sup>Optional</sup> <a name="linkedAccountIdInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.linkedAccountIdInput"></a>

```typescript
public readonly linkedAccountIdInput: number;
```

- *Type:* number

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.s3Input"></a>

```typescript
public readonly s3Input: CloudAwsIntegrationsS3;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3">CloudAwsIntegrationsS3</a>

---

##### `trustedAdvisorInput`<sup>Optional</sup> <a name="trustedAdvisorInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.trustedAdvisorInput"></a>

```typescript
public readonly trustedAdvisorInput: CloudAwsIntegrationsTrustedAdvisor;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor">CloudAwsIntegrationsTrustedAdvisor</a>

---

##### `vpcInput`<sup>Optional</sup> <a name="vpcInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.vpcInput"></a>

```typescript
public readonly vpcInput: CloudAwsIntegrationsVpc;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc">CloudAwsIntegrationsVpc</a>

---

##### `xRayInput`<sup>Optional</sup> <a name="xRayInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.xRayInput"></a>

```typescript
public readonly xRayInput: CloudAwsIntegrationsXRay;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay">CloudAwsIntegrationsXRay</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `linkedAccountId`<sup>Required</sup> <a name="linkedAccountId" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.linkedAccountId"></a>

```typescript
public readonly linkedAccountId: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudAwsIntegrationsBilling <a name="CloudAwsIntegrationsBilling" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsIntegrationsBilling: cloudAwsIntegrations.CloudAwsIntegrationsBilling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsCloudtrail <a name="CloudAwsIntegrationsCloudtrail" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsIntegrationsCloudtrail: cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsConfig <a name="CloudAwsIntegrationsConfig" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsIntegrationsConfig: cloudAwsIntegrations.CloudAwsIntegrationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.linkedAccountId">linkedAccountId</a></code> | <code>number</code> | The ID of the linked AWS account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.accountId">accountId</a></code> | <code>number</code> | The ID of the account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.billing">billing</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling">CloudAwsIntegrationsBilling</a></code> | billing block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.cloudtrail">cloudtrail</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail">CloudAwsIntegrationsCloudtrail</a></code> | cloudtrail block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.docDb">docDb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb">CloudAwsIntegrationsDocDb</a></code> | doc_db block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.health">health</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth">CloudAwsIntegrationsHealth</a></code> | health block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_integrations#id CloudAwsIntegrations#id}. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3">CloudAwsIntegrationsS3</a></code> | s3 block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.trustedAdvisor">trustedAdvisor</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor">CloudAwsIntegrationsTrustedAdvisor</a></code> | trusted_advisor block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.vpc">vpc</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc">CloudAwsIntegrationsVpc</a></code> | vpc block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.xRay">xRay</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay">CloudAwsIntegrationsXRay</a></code> | x_ray block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `linkedAccountId`<sup>Required</sup> <a name="linkedAccountId" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.linkedAccountId"></a>

```typescript
public readonly linkedAccountId: number;
```

- *Type:* number

The ID of the linked AWS account in New Relic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_integrations#linked_account_id CloudAwsIntegrations#linked_account_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The ID of the account in New Relic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_integrations#account_id CloudAwsIntegrations#account_id}

---

##### `billing`<sup>Optional</sup> <a name="billing" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.billing"></a>

```typescript
public readonly billing: CloudAwsIntegrationsBilling;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling">CloudAwsIntegrationsBilling</a>

billing block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_integrations#billing CloudAwsIntegrations#billing}

---

##### `cloudtrail`<sup>Optional</sup> <a name="cloudtrail" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.cloudtrail"></a>

```typescript
public readonly cloudtrail: CloudAwsIntegrationsCloudtrail;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail">CloudAwsIntegrationsCloudtrail</a>

cloudtrail block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_integrations#cloudtrail CloudAwsIntegrations#cloudtrail}

---

##### `docDb`<sup>Optional</sup> <a name="docDb" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.docDb"></a>

```typescript
public readonly docDb: CloudAwsIntegrationsDocDb;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb">CloudAwsIntegrationsDocDb</a>

doc_db block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_integrations#doc_db CloudAwsIntegrations#doc_db}

---

##### `health`<sup>Optional</sup> <a name="health" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.health"></a>

```typescript
public readonly health: CloudAwsIntegrationsHealth;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth">CloudAwsIntegrationsHealth</a>

health block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_integrations#health CloudAwsIntegrations#health}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_integrations#id CloudAwsIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.s3"></a>

```typescript
public readonly s3: CloudAwsIntegrationsS3;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3">CloudAwsIntegrationsS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_integrations#s3 CloudAwsIntegrations#s3}

---

##### `trustedAdvisor`<sup>Optional</sup> <a name="trustedAdvisor" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.trustedAdvisor"></a>

```typescript
public readonly trustedAdvisor: CloudAwsIntegrationsTrustedAdvisor;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor">CloudAwsIntegrationsTrustedAdvisor</a>

trusted_advisor block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_integrations#trusted_advisor CloudAwsIntegrations#trusted_advisor}

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.vpc"></a>

```typescript
public readonly vpc: CloudAwsIntegrationsVpc;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc">CloudAwsIntegrationsVpc</a>

vpc block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_integrations#vpc CloudAwsIntegrations#vpc}

---

##### `xRay`<sup>Optional</sup> <a name="xRay" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.xRay"></a>

```typescript
public readonly xRay: CloudAwsIntegrationsXRay;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay">CloudAwsIntegrationsXRay</a>

x_ray block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_integrations#x_ray CloudAwsIntegrations#x_ray}

---

### CloudAwsIntegrationsDocDb <a name="CloudAwsIntegrationsDocDb" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsIntegrationsDocDb: cloudAwsIntegrations.CloudAwsIntegrationsDocDb = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsHealth <a name="CloudAwsIntegrationsHealth" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsIntegrationsHealth: cloudAwsIntegrations.CloudAwsIntegrationsHealth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsS3 <a name="CloudAwsIntegrationsS3" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsIntegrationsS3: cloudAwsIntegrations.CloudAwsIntegrationsS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsTrustedAdvisor <a name="CloudAwsIntegrationsTrustedAdvisor" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsIntegrationsTrustedAdvisor: cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsVpc <a name="CloudAwsIntegrationsVpc" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsIntegrationsVpc: cloudAwsIntegrations.CloudAwsIntegrationsVpc = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.fetchNatGateway">fetchNatGateway</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify if NAT gateway should be monitored. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.fetchVpn">fetchVpn</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify if VPN should be monitored. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.tagKey">tagKey</a></code> | <code>string</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.tagValue">tagValue</a></code> | <code>string</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `fetchNatGateway`<sup>Optional</sup> <a name="fetchNatGateway" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.fetchNatGateway"></a>

```typescript
public readonly fetchNatGateway: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify if NAT gateway should be monitored.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_integrations#fetch_nat_gateway CloudAwsIntegrations#fetch_nat_gateway}

---

##### `fetchVpn`<sup>Optional</sup> <a name="fetchVpn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.fetchVpn"></a>

```typescript
public readonly fetchVpn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify if VPN should be monitored.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_integrations#fetch_vpn CloudAwsIntegrations#fetch_vpn}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}

---

### CloudAwsIntegrationsXRay <a name="CloudAwsIntegrationsXRay" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsIntegrationsXRay: cloudAwsIntegrations.CloudAwsIntegrationsXRay = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudAwsIntegrationsBillingOutputReference <a name="CloudAwsIntegrationsBillingOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling">CloudAwsIntegrationsBilling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsIntegrationsBilling;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling">CloudAwsIntegrationsBilling</a>

---


### CloudAwsIntegrationsCloudtrailOutputReference <a name="CloudAwsIntegrationsCloudtrailOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail">CloudAwsIntegrationsCloudtrail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsIntegrationsCloudtrail;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail">CloudAwsIntegrationsCloudtrail</a>

---


### CloudAwsIntegrationsDocDbOutputReference <a name="CloudAwsIntegrationsDocDbOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb">CloudAwsIntegrationsDocDb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsIntegrationsDocDb;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb">CloudAwsIntegrationsDocDb</a>

---


### CloudAwsIntegrationsHealthOutputReference <a name="CloudAwsIntegrationsHealthOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth">CloudAwsIntegrationsHealth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsIntegrationsHealth;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth">CloudAwsIntegrationsHealth</a>

---


### CloudAwsIntegrationsS3OutputReference <a name="CloudAwsIntegrationsS3OutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3">CloudAwsIntegrationsS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsIntegrationsS3;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3">CloudAwsIntegrationsS3</a>

---


### CloudAwsIntegrationsTrustedAdvisorOutputReference <a name="CloudAwsIntegrationsTrustedAdvisorOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor">CloudAwsIntegrationsTrustedAdvisor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsIntegrationsTrustedAdvisor;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor">CloudAwsIntegrationsTrustedAdvisor</a>

---


### CloudAwsIntegrationsVpcOutputReference <a name="CloudAwsIntegrationsVpcOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resetFetchNatGateway">resetFetchNatGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resetFetchVpn">resetFetchVpn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetFetchNatGateway` <a name="resetFetchNatGateway" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resetFetchNatGateway"></a>

```typescript
public resetFetchNatGateway(): void
```

##### `resetFetchVpn` <a name="resetFetchVpn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resetFetchVpn"></a>

```typescript
public resetFetchVpn(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resetTagKey"></a>

```typescript
public resetTagKey(): void
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resetTagValue"></a>

```typescript
public resetTagValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.fetchNatGatewayInput">fetchNatGatewayInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.fetchVpnInput">fetchVpnInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.fetchNatGateway">fetchNatGateway</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.fetchVpn">fetchVpn</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc">CloudAwsIntegrationsVpc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `fetchNatGatewayInput`<sup>Optional</sup> <a name="fetchNatGatewayInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.fetchNatGatewayInput"></a>

```typescript
public readonly fetchNatGatewayInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fetchVpnInput`<sup>Optional</sup> <a name="fetchVpnInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.fetchVpnInput"></a>

```typescript
public readonly fetchVpnInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: string;
```

- *Type:* string

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `fetchNatGateway`<sup>Required</sup> <a name="fetchNatGateway" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.fetchNatGateway"></a>

```typescript
public readonly fetchNatGateway: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fetchVpn`<sup>Required</sup> <a name="fetchVpn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.fetchVpn"></a>

```typescript
public readonly fetchVpn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsIntegrationsVpc;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc">CloudAwsIntegrationsVpc</a>

---


### CloudAwsIntegrationsXRayOutputReference <a name="CloudAwsIntegrationsXRayOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay">CloudAwsIntegrationsXRay</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsIntegrationsXRay;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay">CloudAwsIntegrationsXRay</a>

---



