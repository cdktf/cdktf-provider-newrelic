# `newrelic_cloud_aws_integrations`

Refer to the Terraform Registory for docs: [`newrelic_cloud_aws_integrations`](https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations).

# `cloudAwsIntegrations` Submodule <a name="`cloudAwsIntegrations` Submodule" id="@cdktf/provider-newrelic.cloudAwsIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudAwsIntegrations <a name="CloudAwsIntegrations" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations newrelic_cloud_aws_integrations}.

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
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAlb">putAlb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putApiGateway">putApiGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAutoScaling">putAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsAppSync">putAwsAppSync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsAthena">putAwsAthena</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsCognito">putAwsCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsConnect">putAwsConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsDirectConnect">putAwsDirectConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsFsx">putAwsFsx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putBilling">putBilling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putCloudtrail">putCloudtrail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putDocDb">putDocDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putEbs">putEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putElasticache">putElasticache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putHealth">putHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putSqs">putSqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putTrustedAdvisor">putTrustedAdvisor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putVpc">putVpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putXRay">putXRay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAlb">resetAlb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetApiGateway">resetApiGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAutoScaling">resetAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAwsAppSync">resetAwsAppSync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAwsAthena">resetAwsAthena</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAwsCognito">resetAwsCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAwsConnect">resetAwsConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAwsDirectConnect">resetAwsDirectConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAwsFsx">resetAwsFsx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetBilling">resetBilling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetCloudtrail">resetCloudtrail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetDocDb">resetDocDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetEbs">resetEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetElasticache">resetElasticache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetHealth">resetHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetS3">resetS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetSqs">resetSqs</a></code> | *No description.* |
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

##### `putAlb` <a name="putAlb" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAlb"></a>

```typescript
public putAlb(value: CloudAwsIntegrationsAlb): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAlb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb">CloudAwsIntegrationsAlb</a>

---

##### `putApiGateway` <a name="putApiGateway" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putApiGateway"></a>

```typescript
public putApiGateway(value: CloudAwsIntegrationsApiGateway): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putApiGateway.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway">CloudAwsIntegrationsApiGateway</a>

---

##### `putAutoScaling` <a name="putAutoScaling" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAutoScaling"></a>

```typescript
public putAutoScaling(value: CloudAwsIntegrationsAutoScaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling">CloudAwsIntegrationsAutoScaling</a>

---

##### `putAwsAppSync` <a name="putAwsAppSync" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsAppSync"></a>

```typescript
public putAwsAppSync(value: CloudAwsIntegrationsAwsAppSync): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsAppSync.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync">CloudAwsIntegrationsAwsAppSync</a>

---

##### `putAwsAthena` <a name="putAwsAthena" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsAthena"></a>

```typescript
public putAwsAthena(value: CloudAwsIntegrationsAwsAthena): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsAthena.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena">CloudAwsIntegrationsAwsAthena</a>

---

##### `putAwsCognito` <a name="putAwsCognito" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsCognito"></a>

```typescript
public putAwsCognito(value: CloudAwsIntegrationsAwsCognito): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsCognito.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito">CloudAwsIntegrationsAwsCognito</a>

---

##### `putAwsConnect` <a name="putAwsConnect" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsConnect"></a>

```typescript
public putAwsConnect(value: CloudAwsIntegrationsAwsConnect): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsConnect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect">CloudAwsIntegrationsAwsConnect</a>

---

##### `putAwsDirectConnect` <a name="putAwsDirectConnect" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsDirectConnect"></a>

```typescript
public putAwsDirectConnect(value: CloudAwsIntegrationsAwsDirectConnect): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsDirectConnect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect">CloudAwsIntegrationsAwsDirectConnect</a>

---

##### `putAwsFsx` <a name="putAwsFsx" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsFsx"></a>

```typescript
public putAwsFsx(value: CloudAwsIntegrationsAwsFsx): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsFsx.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx">CloudAwsIntegrationsAwsFsx</a>

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

##### `putEbs` <a name="putEbs" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putEbs"></a>

```typescript
public putEbs(value: CloudAwsIntegrationsEbs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putEbs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs">CloudAwsIntegrationsEbs</a>

---

##### `putElasticache` <a name="putElasticache" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putElasticache"></a>

```typescript
public putElasticache(value: CloudAwsIntegrationsElasticache): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putElasticache.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache">CloudAwsIntegrationsElasticache</a>

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

##### `putSqs` <a name="putSqs" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putSqs"></a>

```typescript
public putSqs(value: CloudAwsIntegrationsSqs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putSqs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs">CloudAwsIntegrationsSqs</a>

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

##### `resetAlb` <a name="resetAlb" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAlb"></a>

```typescript
public resetAlb(): void
```

##### `resetApiGateway` <a name="resetApiGateway" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetApiGateway"></a>

```typescript
public resetApiGateway(): void
```

##### `resetAutoScaling` <a name="resetAutoScaling" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAutoScaling"></a>

```typescript
public resetAutoScaling(): void
```

##### `resetAwsAppSync` <a name="resetAwsAppSync" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAwsAppSync"></a>

```typescript
public resetAwsAppSync(): void
```

##### `resetAwsAthena` <a name="resetAwsAthena" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAwsAthena"></a>

```typescript
public resetAwsAthena(): void
```

##### `resetAwsCognito` <a name="resetAwsCognito" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAwsCognito"></a>

```typescript
public resetAwsCognito(): void
```

##### `resetAwsConnect` <a name="resetAwsConnect" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAwsConnect"></a>

```typescript
public resetAwsConnect(): void
```

##### `resetAwsDirectConnect` <a name="resetAwsDirectConnect" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAwsDirectConnect"></a>

```typescript
public resetAwsDirectConnect(): void
```

##### `resetAwsFsx` <a name="resetAwsFsx" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAwsFsx"></a>

```typescript
public resetAwsFsx(): void
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

##### `resetEbs` <a name="resetEbs" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetEbs"></a>

```typescript
public resetEbs(): void
```

##### `resetElasticache` <a name="resetElasticache" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetElasticache"></a>

```typescript
public resetElasticache(): void
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

##### `resetSqs` <a name="resetSqs" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetSqs"></a>

```typescript
public resetSqs(): void
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
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.alb">alb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference">CloudAwsIntegrationsAlbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.apiGateway">apiGateway</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference">CloudAwsIntegrationsApiGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.autoScaling">autoScaling</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference">CloudAwsIntegrationsAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsAppSync">awsAppSync</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference">CloudAwsIntegrationsAwsAppSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsAthena">awsAthena</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference">CloudAwsIntegrationsAwsAthenaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsCognito">awsCognito</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference">CloudAwsIntegrationsAwsCognitoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsConnect">awsConnect</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference">CloudAwsIntegrationsAwsConnectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsDirectConnect">awsDirectConnect</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference">CloudAwsIntegrationsAwsDirectConnectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsFsx">awsFsx</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference">CloudAwsIntegrationsAwsFsxOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.billing">billing</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference">CloudAwsIntegrationsBillingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.cloudtrail">cloudtrail</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference">CloudAwsIntegrationsCloudtrailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.docDb">docDb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference">CloudAwsIntegrationsDocDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference">CloudAwsIntegrationsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.elasticache">elasticache</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference">CloudAwsIntegrationsElasticacheOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.health">health</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference">CloudAwsIntegrationsHealthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference">CloudAwsIntegrationsS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.sqs">sqs</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference">CloudAwsIntegrationsSqsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.trustedAdvisor">trustedAdvisor</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference">CloudAwsIntegrationsTrustedAdvisorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.vpc">vpc</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference">CloudAwsIntegrationsVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.xRay">xRay</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference">CloudAwsIntegrationsXRayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.albInput">albInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb">CloudAwsIntegrationsAlb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.apiGatewayInput">apiGatewayInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway">CloudAwsIntegrationsApiGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.autoScalingInput">autoScalingInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling">CloudAwsIntegrationsAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsAppSyncInput">awsAppSyncInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync">CloudAwsIntegrationsAwsAppSync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsAthenaInput">awsAthenaInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena">CloudAwsIntegrationsAwsAthena</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsCognitoInput">awsCognitoInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito">CloudAwsIntegrationsAwsCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsConnectInput">awsConnectInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect">CloudAwsIntegrationsAwsConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsDirectConnectInput">awsDirectConnectInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect">CloudAwsIntegrationsAwsDirectConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsFsxInput">awsFsxInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx">CloudAwsIntegrationsAwsFsx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.billingInput">billingInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling">CloudAwsIntegrationsBilling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.cloudtrailInput">cloudtrailInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail">CloudAwsIntegrationsCloudtrail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.docDbInput">docDbInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb">CloudAwsIntegrationsDocDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.ebsInput">ebsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs">CloudAwsIntegrationsEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.elasticacheInput">elasticacheInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache">CloudAwsIntegrationsElasticache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.healthInput">healthInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth">CloudAwsIntegrationsHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.linkedAccountIdInput">linkedAccountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.s3Input">s3Input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3">CloudAwsIntegrationsS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.sqsInput">sqsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs">CloudAwsIntegrationsSqs</a></code> | *No description.* |
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
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

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

##### `alb`<sup>Required</sup> <a name="alb" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.alb"></a>

```typescript
public readonly alb: CloudAwsIntegrationsAlbOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference">CloudAwsIntegrationsAlbOutputReference</a>

---

##### `apiGateway`<sup>Required</sup> <a name="apiGateway" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.apiGateway"></a>

```typescript
public readonly apiGateway: CloudAwsIntegrationsApiGatewayOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference">CloudAwsIntegrationsApiGatewayOutputReference</a>

---

##### `autoScaling`<sup>Required</sup> <a name="autoScaling" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.autoScaling"></a>

```typescript
public readonly autoScaling: CloudAwsIntegrationsAutoScalingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference">CloudAwsIntegrationsAutoScalingOutputReference</a>

---

##### `awsAppSync`<sup>Required</sup> <a name="awsAppSync" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsAppSync"></a>

```typescript
public readonly awsAppSync: CloudAwsIntegrationsAwsAppSyncOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference">CloudAwsIntegrationsAwsAppSyncOutputReference</a>

---

##### `awsAthena`<sup>Required</sup> <a name="awsAthena" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsAthena"></a>

```typescript
public readonly awsAthena: CloudAwsIntegrationsAwsAthenaOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference">CloudAwsIntegrationsAwsAthenaOutputReference</a>

---

##### `awsCognito`<sup>Required</sup> <a name="awsCognito" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsCognito"></a>

```typescript
public readonly awsCognito: CloudAwsIntegrationsAwsCognitoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference">CloudAwsIntegrationsAwsCognitoOutputReference</a>

---

##### `awsConnect`<sup>Required</sup> <a name="awsConnect" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsConnect"></a>

```typescript
public readonly awsConnect: CloudAwsIntegrationsAwsConnectOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference">CloudAwsIntegrationsAwsConnectOutputReference</a>

---

##### `awsDirectConnect`<sup>Required</sup> <a name="awsDirectConnect" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsDirectConnect"></a>

```typescript
public readonly awsDirectConnect: CloudAwsIntegrationsAwsDirectConnectOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference">CloudAwsIntegrationsAwsDirectConnectOutputReference</a>

---

##### `awsFsx`<sup>Required</sup> <a name="awsFsx" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsFsx"></a>

```typescript
public readonly awsFsx: CloudAwsIntegrationsAwsFsxOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference">CloudAwsIntegrationsAwsFsxOutputReference</a>

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

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.ebs"></a>

```typescript
public readonly ebs: CloudAwsIntegrationsEbsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference">CloudAwsIntegrationsEbsOutputReference</a>

---

##### `elasticache`<sup>Required</sup> <a name="elasticache" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.elasticache"></a>

```typescript
public readonly elasticache: CloudAwsIntegrationsElasticacheOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference">CloudAwsIntegrationsElasticacheOutputReference</a>

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

##### `sqs`<sup>Required</sup> <a name="sqs" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.sqs"></a>

```typescript
public readonly sqs: CloudAwsIntegrationsSqsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference">CloudAwsIntegrationsSqsOutputReference</a>

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

##### `albInput`<sup>Optional</sup> <a name="albInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.albInput"></a>

```typescript
public readonly albInput: CloudAwsIntegrationsAlb;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb">CloudAwsIntegrationsAlb</a>

---

##### `apiGatewayInput`<sup>Optional</sup> <a name="apiGatewayInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.apiGatewayInput"></a>

```typescript
public readonly apiGatewayInput: CloudAwsIntegrationsApiGateway;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway">CloudAwsIntegrationsApiGateway</a>

---

##### `autoScalingInput`<sup>Optional</sup> <a name="autoScalingInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.autoScalingInput"></a>

```typescript
public readonly autoScalingInput: CloudAwsIntegrationsAutoScaling;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling">CloudAwsIntegrationsAutoScaling</a>

---

##### `awsAppSyncInput`<sup>Optional</sup> <a name="awsAppSyncInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsAppSyncInput"></a>

```typescript
public readonly awsAppSyncInput: CloudAwsIntegrationsAwsAppSync;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync">CloudAwsIntegrationsAwsAppSync</a>

---

##### `awsAthenaInput`<sup>Optional</sup> <a name="awsAthenaInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsAthenaInput"></a>

```typescript
public readonly awsAthenaInput: CloudAwsIntegrationsAwsAthena;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena">CloudAwsIntegrationsAwsAthena</a>

---

##### `awsCognitoInput`<sup>Optional</sup> <a name="awsCognitoInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsCognitoInput"></a>

```typescript
public readonly awsCognitoInput: CloudAwsIntegrationsAwsCognito;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito">CloudAwsIntegrationsAwsCognito</a>

---

##### `awsConnectInput`<sup>Optional</sup> <a name="awsConnectInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsConnectInput"></a>

```typescript
public readonly awsConnectInput: CloudAwsIntegrationsAwsConnect;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect">CloudAwsIntegrationsAwsConnect</a>

---

##### `awsDirectConnectInput`<sup>Optional</sup> <a name="awsDirectConnectInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsDirectConnectInput"></a>

```typescript
public readonly awsDirectConnectInput: CloudAwsIntegrationsAwsDirectConnect;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect">CloudAwsIntegrationsAwsDirectConnect</a>

---

##### `awsFsxInput`<sup>Optional</sup> <a name="awsFsxInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsFsxInput"></a>

```typescript
public readonly awsFsxInput: CloudAwsIntegrationsAwsFsx;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx">CloudAwsIntegrationsAwsFsx</a>

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

##### `ebsInput`<sup>Optional</sup> <a name="ebsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.ebsInput"></a>

```typescript
public readonly ebsInput: CloudAwsIntegrationsEbs;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs">CloudAwsIntegrationsEbs</a>

---

##### `elasticacheInput`<sup>Optional</sup> <a name="elasticacheInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.elasticacheInput"></a>

```typescript
public readonly elasticacheInput: CloudAwsIntegrationsElasticache;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache">CloudAwsIntegrationsElasticache</a>

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

##### `sqsInput`<sup>Optional</sup> <a name="sqsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.sqsInput"></a>

```typescript
public readonly sqsInput: CloudAwsIntegrationsSqs;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs">CloudAwsIntegrationsSqs</a>

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

### CloudAwsIntegrationsAlb <a name="CloudAwsIntegrationsAlb" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsIntegrationsAlb: cloudAwsIntegrations.CloudAwsIntegrationsAlb = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determine if extra inventory data be collected or not. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.fetchTags">fetchTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify if tags should be collected. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.loadBalancerPrefixes">loadBalancerPrefixes</a></code> | <code>string[]</code> | Specify each name or prefix for the LBs that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.tagKey">tagKey</a></code> | <code>string</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.tagValue">tagValue</a></code> | <code>string</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `fetchExtendedInventory`<sup>Optional</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.fetchExtendedInventory"></a>

```typescript
public readonly fetchExtendedInventory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_extended_inventory CloudAwsIntegrations#fetch_extended_inventory}

---

##### `fetchTags`<sup>Optional</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.fetchTags"></a>

```typescript
public readonly fetchTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify if tags should be collected.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_tags CloudAwsIntegrations#fetch_tags}

---

##### `loadBalancerPrefixes`<sup>Optional</sup> <a name="loadBalancerPrefixes" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.loadBalancerPrefixes"></a>

```typescript
public readonly loadBalancerPrefixes: string[];
```

- *Type:* string[]

Specify each name or prefix for the LBs that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#load_balancer_prefixes CloudAwsIntegrations#load_balancer_prefixes}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}

---

### CloudAwsIntegrationsApiGateway <a name="CloudAwsIntegrationsApiGateway" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsIntegrationsApiGateway: cloudAwsIntegrations.CloudAwsIntegrationsApiGateway = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway.property.stagePrefixes">stagePrefixes</a></code> | <code>string[]</code> | Determine if extra inventory data be collected or not. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway.property.tagKey">tagKey</a></code> | <code>string</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway.property.tagValue">tagValue</a></code> | <code>string</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

##### `stagePrefixes`<sup>Optional</sup> <a name="stagePrefixes" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway.property.stagePrefixes"></a>

```typescript
public readonly stagePrefixes: string[];
```

- *Type:* string[]

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#stage_prefixes CloudAwsIntegrations#stage_prefixes}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}

---

### CloudAwsIntegrationsAutoScaling <a name="CloudAwsIntegrationsAutoScaling" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsIntegrationsAutoScaling: cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsAwsAppSync <a name="CloudAwsIntegrationsAwsAppSync" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsIntegrationsAwsAppSync: cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsAwsAthena <a name="CloudAwsIntegrationsAwsAthena" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsIntegrationsAwsAthena: cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsAwsCognito <a name="CloudAwsIntegrationsAwsCognito" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsIntegrationsAwsCognito: cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsAwsConnect <a name="CloudAwsIntegrationsAwsConnect" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsIntegrationsAwsConnect: cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsAwsDirectConnect <a name="CloudAwsIntegrationsAwsDirectConnect" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsIntegrationsAwsDirectConnect: cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsAwsFsx <a name="CloudAwsIntegrationsAwsFsx" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsIntegrationsAwsFsx: cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

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
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.linkedAccountId">linkedAccountId</a></code> | <code>number</code> | The ID of the linked AWS account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.accountId">accountId</a></code> | <code>number</code> | The ID of the account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.alb">alb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb">CloudAwsIntegrationsAlb</a></code> | alb block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.apiGateway">apiGateway</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway">CloudAwsIntegrationsApiGateway</a></code> | api_gateway block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.autoScaling">autoScaling</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling">CloudAwsIntegrationsAutoScaling</a></code> | auto_scaling block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.awsAppSync">awsAppSync</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync">CloudAwsIntegrationsAwsAppSync</a></code> | aws_app_sync block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.awsAthena">awsAthena</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena">CloudAwsIntegrationsAwsAthena</a></code> | aws_athena block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.awsCognito">awsCognito</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito">CloudAwsIntegrationsAwsCognito</a></code> | aws_cognito block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.awsConnect">awsConnect</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect">CloudAwsIntegrationsAwsConnect</a></code> | aws_connect block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.awsDirectConnect">awsDirectConnect</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect">CloudAwsIntegrationsAwsDirectConnect</a></code> | aws_direct_connect block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.awsFsx">awsFsx</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx">CloudAwsIntegrationsAwsFsx</a></code> | aws_fsx block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.billing">billing</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling">CloudAwsIntegrationsBilling</a></code> | billing block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.cloudtrail">cloudtrail</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail">CloudAwsIntegrationsCloudtrail</a></code> | cloudtrail block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.docDb">docDb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb">CloudAwsIntegrationsDocDb</a></code> | doc_db block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs">CloudAwsIntegrationsEbs</a></code> | ebs block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.elasticache">elasticache</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache">CloudAwsIntegrationsElasticache</a></code> | elasticache block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.health">health</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth">CloudAwsIntegrationsHealth</a></code> | health block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#id CloudAwsIntegrations#id}. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3">CloudAwsIntegrationsS3</a></code> | s3 block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.sqs">sqs</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs">CloudAwsIntegrationsSqs</a></code> | sqs block. |
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
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#linked_account_id CloudAwsIntegrations#linked_account_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The ID of the account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#account_id CloudAwsIntegrations#account_id}

---

##### `alb`<sup>Optional</sup> <a name="alb" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.alb"></a>

```typescript
public readonly alb: CloudAwsIntegrationsAlb;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb">CloudAwsIntegrationsAlb</a>

alb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#alb CloudAwsIntegrations#alb}

---

##### `apiGateway`<sup>Optional</sup> <a name="apiGateway" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.apiGateway"></a>

```typescript
public readonly apiGateway: CloudAwsIntegrationsApiGateway;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway">CloudAwsIntegrationsApiGateway</a>

api_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#api_gateway CloudAwsIntegrations#api_gateway}

---

##### `autoScaling`<sup>Optional</sup> <a name="autoScaling" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.autoScaling"></a>

```typescript
public readonly autoScaling: CloudAwsIntegrationsAutoScaling;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling">CloudAwsIntegrationsAutoScaling</a>

auto_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#auto_scaling CloudAwsIntegrations#auto_scaling}

---

##### `awsAppSync`<sup>Optional</sup> <a name="awsAppSync" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.awsAppSync"></a>

```typescript
public readonly awsAppSync: CloudAwsIntegrationsAwsAppSync;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync">CloudAwsIntegrationsAwsAppSync</a>

aws_app_sync block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_app_sync CloudAwsIntegrations#aws_app_sync}

---

##### `awsAthena`<sup>Optional</sup> <a name="awsAthena" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.awsAthena"></a>

```typescript
public readonly awsAthena: CloudAwsIntegrationsAwsAthena;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena">CloudAwsIntegrationsAwsAthena</a>

aws_athena block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_athena CloudAwsIntegrations#aws_athena}

---

##### `awsCognito`<sup>Optional</sup> <a name="awsCognito" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.awsCognito"></a>

```typescript
public readonly awsCognito: CloudAwsIntegrationsAwsCognito;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito">CloudAwsIntegrationsAwsCognito</a>

aws_cognito block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_cognito CloudAwsIntegrations#aws_cognito}

---

##### `awsConnect`<sup>Optional</sup> <a name="awsConnect" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.awsConnect"></a>

```typescript
public readonly awsConnect: CloudAwsIntegrationsAwsConnect;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect">CloudAwsIntegrationsAwsConnect</a>

aws_connect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_connect CloudAwsIntegrations#aws_connect}

---

##### `awsDirectConnect`<sup>Optional</sup> <a name="awsDirectConnect" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.awsDirectConnect"></a>

```typescript
public readonly awsDirectConnect: CloudAwsIntegrationsAwsDirectConnect;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect">CloudAwsIntegrationsAwsDirectConnect</a>

aws_direct_connect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_direct_connect CloudAwsIntegrations#aws_direct_connect}

---

##### `awsFsx`<sup>Optional</sup> <a name="awsFsx" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.awsFsx"></a>

```typescript
public readonly awsFsx: CloudAwsIntegrationsAwsFsx;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx">CloudAwsIntegrationsAwsFsx</a>

aws_fsx block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_fsx CloudAwsIntegrations#aws_fsx}

---

##### `billing`<sup>Optional</sup> <a name="billing" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.billing"></a>

```typescript
public readonly billing: CloudAwsIntegrationsBilling;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling">CloudAwsIntegrationsBilling</a>

billing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#billing CloudAwsIntegrations#billing}

---

##### `cloudtrail`<sup>Optional</sup> <a name="cloudtrail" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.cloudtrail"></a>

```typescript
public readonly cloudtrail: CloudAwsIntegrationsCloudtrail;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail">CloudAwsIntegrationsCloudtrail</a>

cloudtrail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#cloudtrail CloudAwsIntegrations#cloudtrail}

---

##### `docDb`<sup>Optional</sup> <a name="docDb" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.docDb"></a>

```typescript
public readonly docDb: CloudAwsIntegrationsDocDb;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb">CloudAwsIntegrationsDocDb</a>

doc_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#doc_db CloudAwsIntegrations#doc_db}

---

##### `ebs`<sup>Optional</sup> <a name="ebs" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.ebs"></a>

```typescript
public readonly ebs: CloudAwsIntegrationsEbs;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs">CloudAwsIntegrationsEbs</a>

ebs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#ebs CloudAwsIntegrations#ebs}

---

##### `elasticache`<sup>Optional</sup> <a name="elasticache" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.elasticache"></a>

```typescript
public readonly elasticache: CloudAwsIntegrationsElasticache;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache">CloudAwsIntegrationsElasticache</a>

elasticache block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#elasticache CloudAwsIntegrations#elasticache}

---

##### `health`<sup>Optional</sup> <a name="health" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.health"></a>

```typescript
public readonly health: CloudAwsIntegrationsHealth;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth">CloudAwsIntegrationsHealth</a>

health block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#health CloudAwsIntegrations#health}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#id CloudAwsIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.s3"></a>

```typescript
public readonly s3: CloudAwsIntegrationsS3;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3">CloudAwsIntegrationsS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#s3 CloudAwsIntegrations#s3}

---

##### `sqs`<sup>Optional</sup> <a name="sqs" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.sqs"></a>

```typescript
public readonly sqs: CloudAwsIntegrationsSqs;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs">CloudAwsIntegrationsSqs</a>

sqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#sqs CloudAwsIntegrations#sqs}

---

##### `trustedAdvisor`<sup>Optional</sup> <a name="trustedAdvisor" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.trustedAdvisor"></a>

```typescript
public readonly trustedAdvisor: CloudAwsIntegrationsTrustedAdvisor;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor">CloudAwsIntegrationsTrustedAdvisor</a>

trusted_advisor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#trusted_advisor CloudAwsIntegrations#trusted_advisor}

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.vpc"></a>

```typescript
public readonly vpc: CloudAwsIntegrationsVpc;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc">CloudAwsIntegrationsVpc</a>

vpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#vpc CloudAwsIntegrations#vpc}

---

##### `xRay`<sup>Optional</sup> <a name="xRay" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.xRay"></a>

```typescript
public readonly xRay: CloudAwsIntegrationsXRay;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay">CloudAwsIntegrationsXRay</a>

x_ray block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#x_ray CloudAwsIntegrations#x_ray}

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
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsEbs <a name="CloudAwsIntegrationsEbs" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsIntegrationsEbs: cloudAwsIntegrations.CloudAwsIntegrationsEbs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determine if extra inventory data be collected or not. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs.property.tagKey">tagKey</a></code> | <code>string</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs.property.tagValue">tagValue</a></code> | <code>string</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `fetchExtendedInventory`<sup>Optional</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs.property.fetchExtendedInventory"></a>

```typescript
public readonly fetchExtendedInventory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_extended_inventory CloudAwsIntegrations#fetch_extended_inventory}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}

---

### CloudAwsIntegrationsElasticache <a name="CloudAwsIntegrationsElasticache" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsIntegrationsElasticache: cloudAwsIntegrations.CloudAwsIntegrationsElasticache = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache.property.fetchTags">fetchTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify if tags should be collected. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache.property.tagKey">tagKey</a></code> | <code>string</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache.property.tagValue">tagValue</a></code> | <code>string</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `fetchTags`<sup>Optional</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache.property.fetchTags"></a>

```typescript
public readonly fetchTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify if tags should be collected.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_tags CloudAwsIntegrations#fetch_tags}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

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
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determine if extra inventory data be collected or not. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3.property.fetchTags">fetchTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify if tags should be collected. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3.property.tagKey">tagKey</a></code> | <code>string</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3.property.tagValue">tagValue</a></code> | <code>string</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `fetchExtendedInventory`<sup>Optional</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3.property.fetchExtendedInventory"></a>

```typescript
public readonly fetchExtendedInventory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_extended_inventory CloudAwsIntegrations#fetch_extended_inventory}

---

##### `fetchTags`<sup>Optional</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3.property.fetchTags"></a>

```typescript
public readonly fetchTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify if tags should be collected.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_tags CloudAwsIntegrations#fetch_tags}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}

---

### CloudAwsIntegrationsSqs <a name="CloudAwsIntegrationsSqs" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsIntegrationsSqs: cloudAwsIntegrations.CloudAwsIntegrationsSqs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determine if extra inventory data be collected or not. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.fetchTags">fetchTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify if tags should be collected. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.queuePrefixes">queuePrefixes</a></code> | <code>string[]</code> | Specify each name or prefix for the Queues that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.tagKey">tagKey</a></code> | <code>string</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.tagValue">tagValue</a></code> | <code>string</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `fetchExtendedInventory`<sup>Optional</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.fetchExtendedInventory"></a>

```typescript
public readonly fetchExtendedInventory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_extended_inventory CloudAwsIntegrations#fetch_extended_inventory}

---

##### `fetchTags`<sup>Optional</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.fetchTags"></a>

```typescript
public readonly fetchTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify if tags should be collected.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_tags CloudAwsIntegrations#fetch_tags}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

##### `queuePrefixes`<sup>Optional</sup> <a name="queuePrefixes" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.queuePrefixes"></a>

```typescript
public readonly queuePrefixes: string[];
```

- *Type:* string[]

Specify each name or prefix for the Queues that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#queue_prefixes CloudAwsIntegrations#queue_prefixes}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `fetchNatGateway`<sup>Optional</sup> <a name="fetchNatGateway" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.fetchNatGateway"></a>

```typescript
public readonly fetchNatGateway: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify if NAT gateway should be monitored.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_nat_gateway CloudAwsIntegrations#fetch_nat_gateway}

---

##### `fetchVpn`<sup>Optional</sup> <a name="fetchVpn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.fetchVpn"></a>

```typescript
public readonly fetchVpn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify if VPN should be monitored.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_vpn CloudAwsIntegrations#fetch_vpn}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudAwsIntegrationsAlbOutputReference <a name="CloudAwsIntegrationsAlbOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetFetchExtendedInventory">resetFetchExtendedInventory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetFetchTags">resetFetchTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetLoadBalancerPrefixes">resetLoadBalancerPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetFetchExtendedInventory` <a name="resetFetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetFetchExtendedInventory"></a>

```typescript
public resetFetchExtendedInventory(): void
```

##### `resetFetchTags` <a name="resetFetchTags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetFetchTags"></a>

```typescript
public resetFetchTags(): void
```

##### `resetLoadBalancerPrefixes` <a name="resetLoadBalancerPrefixes" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetLoadBalancerPrefixes"></a>

```typescript
public resetLoadBalancerPrefixes(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetTagKey"></a>

```typescript
public resetTagKey(): void
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetTagValue"></a>

```typescript
public resetTagValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.fetchExtendedInventoryInput">fetchExtendedInventoryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.fetchTagsInput">fetchTagsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.loadBalancerPrefixesInput">loadBalancerPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.fetchTags">fetchTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.loadBalancerPrefixes">loadBalancerPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb">CloudAwsIntegrationsAlb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `fetchExtendedInventoryInput`<sup>Optional</sup> <a name="fetchExtendedInventoryInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.fetchExtendedInventoryInput"></a>

```typescript
public readonly fetchExtendedInventoryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fetchTagsInput`<sup>Optional</sup> <a name="fetchTagsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.fetchTagsInput"></a>

```typescript
public readonly fetchTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `loadBalancerPrefixesInput`<sup>Optional</sup> <a name="loadBalancerPrefixesInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.loadBalancerPrefixesInput"></a>

```typescript
public readonly loadBalancerPrefixesInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: string;
```

- *Type:* string

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `fetchExtendedInventory`<sup>Required</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.fetchExtendedInventory"></a>

```typescript
public readonly fetchExtendedInventory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fetchTags`<sup>Required</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.fetchTags"></a>

```typescript
public readonly fetchTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `loadBalancerPrefixes`<sup>Required</sup> <a name="loadBalancerPrefixes" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.loadBalancerPrefixes"></a>

```typescript
public readonly loadBalancerPrefixes: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsIntegrationsAlb;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb">CloudAwsIntegrationsAlb</a>

---


### CloudAwsIntegrationsApiGatewayOutputReference <a name="CloudAwsIntegrationsApiGatewayOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resetStagePrefixes">resetStagePrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetStagePrefixes` <a name="resetStagePrefixes" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resetStagePrefixes"></a>

```typescript
public resetStagePrefixes(): void
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resetTagKey"></a>

```typescript
public resetTagKey(): void
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resetTagValue"></a>

```typescript
public resetTagValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.stagePrefixesInput">stagePrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.stagePrefixes">stagePrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway">CloudAwsIntegrationsApiGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `stagePrefixesInput`<sup>Optional</sup> <a name="stagePrefixesInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.stagePrefixesInput"></a>

```typescript
public readonly stagePrefixesInput: string[];
```

- *Type:* string[]

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: string;
```

- *Type:* string

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `stagePrefixes`<sup>Required</sup> <a name="stagePrefixes" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.stagePrefixes"></a>

```typescript
public readonly stagePrefixes: string[];
```

- *Type:* string[]

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsIntegrationsApiGateway;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway">CloudAwsIntegrationsApiGateway</a>

---


### CloudAwsIntegrationsAutoScalingOutputReference <a name="CloudAwsIntegrationsAutoScalingOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling">CloudAwsIntegrationsAutoScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsIntegrationsAutoScaling;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling">CloudAwsIntegrationsAutoScaling</a>

---


### CloudAwsIntegrationsAwsAppSyncOutputReference <a name="CloudAwsIntegrationsAwsAppSyncOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync">CloudAwsIntegrationsAwsAppSync</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsIntegrationsAwsAppSync;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync">CloudAwsIntegrationsAwsAppSync</a>

---


### CloudAwsIntegrationsAwsAthenaOutputReference <a name="CloudAwsIntegrationsAwsAthenaOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena">CloudAwsIntegrationsAwsAthena</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsIntegrationsAwsAthena;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena">CloudAwsIntegrationsAwsAthena</a>

---


### CloudAwsIntegrationsAwsCognitoOutputReference <a name="CloudAwsIntegrationsAwsCognitoOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito">CloudAwsIntegrationsAwsCognito</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsIntegrationsAwsCognito;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito">CloudAwsIntegrationsAwsCognito</a>

---


### CloudAwsIntegrationsAwsConnectOutputReference <a name="CloudAwsIntegrationsAwsConnectOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect">CloudAwsIntegrationsAwsConnect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsIntegrationsAwsConnect;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect">CloudAwsIntegrationsAwsConnect</a>

---


### CloudAwsIntegrationsAwsDirectConnectOutputReference <a name="CloudAwsIntegrationsAwsDirectConnectOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect">CloudAwsIntegrationsAwsDirectConnect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsIntegrationsAwsDirectConnect;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect">CloudAwsIntegrationsAwsDirectConnect</a>

---


### CloudAwsIntegrationsAwsFsxOutputReference <a name="CloudAwsIntegrationsAwsFsxOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx">CloudAwsIntegrationsAwsFsx</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsIntegrationsAwsFsx;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx">CloudAwsIntegrationsAwsFsx</a>

---


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
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
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

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
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

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

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


### CloudAwsIntegrationsEbsOutputReference <a name="CloudAwsIntegrationsEbsOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resetFetchExtendedInventory">resetFetchExtendedInventory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetFetchExtendedInventory` <a name="resetFetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resetFetchExtendedInventory"></a>

```typescript
public resetFetchExtendedInventory(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resetTagKey"></a>

```typescript
public resetTagKey(): void
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resetTagValue"></a>

```typescript
public resetTagValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.fetchExtendedInventoryInput">fetchExtendedInventoryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs">CloudAwsIntegrationsEbs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `fetchExtendedInventoryInput`<sup>Optional</sup> <a name="fetchExtendedInventoryInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.fetchExtendedInventoryInput"></a>

```typescript
public readonly fetchExtendedInventoryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: string;
```

- *Type:* string

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `fetchExtendedInventory`<sup>Required</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.fetchExtendedInventory"></a>

```typescript
public readonly fetchExtendedInventory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsIntegrationsEbs;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs">CloudAwsIntegrationsEbs</a>

---


### CloudAwsIntegrationsElasticacheOutputReference <a name="CloudAwsIntegrationsElasticacheOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resetFetchTags">resetFetchTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetFetchTags` <a name="resetFetchTags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resetFetchTags"></a>

```typescript
public resetFetchTags(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resetTagKey"></a>

```typescript
public resetTagKey(): void
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resetTagValue"></a>

```typescript
public resetTagValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.fetchTagsInput">fetchTagsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.fetchTags">fetchTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache">CloudAwsIntegrationsElasticache</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `fetchTagsInput`<sup>Optional</sup> <a name="fetchTagsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.fetchTagsInput"></a>

```typescript
public readonly fetchTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: string;
```

- *Type:* string

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `fetchTags`<sup>Required</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.fetchTags"></a>

```typescript
public readonly fetchTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsIntegrationsElasticache;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache">CloudAwsIntegrationsElasticache</a>

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
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resetFetchExtendedInventory">resetFetchExtendedInventory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resetFetchTags">resetFetchTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

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

##### `resetFetchExtendedInventory` <a name="resetFetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resetFetchExtendedInventory"></a>

```typescript
public resetFetchExtendedInventory(): void
```

##### `resetFetchTags` <a name="resetFetchTags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resetFetchTags"></a>

```typescript
public resetFetchTags(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resetTagKey"></a>

```typescript
public resetTagKey(): void
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resetTagValue"></a>

```typescript
public resetTagValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.fetchExtendedInventoryInput">fetchExtendedInventoryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.fetchTagsInput">fetchTagsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.tagValueInput">tagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.fetchTags">fetchTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |
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

##### `fetchExtendedInventoryInput`<sup>Optional</sup> <a name="fetchExtendedInventoryInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.fetchExtendedInventoryInput"></a>

```typescript
public readonly fetchExtendedInventoryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fetchTagsInput`<sup>Optional</sup> <a name="fetchTagsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.fetchTagsInput"></a>

```typescript
public readonly fetchTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: string;
```

- *Type:* string

---

##### `fetchExtendedInventory`<sup>Required</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.fetchExtendedInventory"></a>

```typescript
public readonly fetchExtendedInventory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fetchTags`<sup>Required</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.fetchTags"></a>

```typescript
public readonly fetchTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsIntegrationsS3;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3">CloudAwsIntegrationsS3</a>

---


### CloudAwsIntegrationsSqsOutputReference <a name="CloudAwsIntegrationsSqsOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.Initializer"></a>

```typescript
import { cloudAwsIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetFetchExtendedInventory">resetFetchExtendedInventory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetFetchTags">resetFetchTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetQueuePrefixes">resetQueuePrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetFetchExtendedInventory` <a name="resetFetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetFetchExtendedInventory"></a>

```typescript
public resetFetchExtendedInventory(): void
```

##### `resetFetchTags` <a name="resetFetchTags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetFetchTags"></a>

```typescript
public resetFetchTags(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetQueuePrefixes` <a name="resetQueuePrefixes" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetQueuePrefixes"></a>

```typescript
public resetQueuePrefixes(): void
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetTagKey"></a>

```typescript
public resetTagKey(): void
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetTagValue"></a>

```typescript
public resetTagValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.fetchExtendedInventoryInput">fetchExtendedInventoryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.fetchTagsInput">fetchTagsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.queuePrefixesInput">queuePrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.fetchTags">fetchTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.queuePrefixes">queuePrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs">CloudAwsIntegrationsSqs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `fetchExtendedInventoryInput`<sup>Optional</sup> <a name="fetchExtendedInventoryInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.fetchExtendedInventoryInput"></a>

```typescript
public readonly fetchExtendedInventoryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fetchTagsInput`<sup>Optional</sup> <a name="fetchTagsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.fetchTagsInput"></a>

```typescript
public readonly fetchTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `queuePrefixesInput`<sup>Optional</sup> <a name="queuePrefixesInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.queuePrefixesInput"></a>

```typescript
public readonly queuePrefixesInput: string[];
```

- *Type:* string[]

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: string;
```

- *Type:* string

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `fetchExtendedInventory`<sup>Required</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.fetchExtendedInventory"></a>

```typescript
public readonly fetchExtendedInventory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fetchTags`<sup>Required</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.fetchTags"></a>

```typescript
public readonly fetchTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `queuePrefixes`<sup>Required</sup> <a name="queuePrefixes" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.queuePrefixes"></a>

```typescript
public readonly queuePrefixes: string[];
```

- *Type:* string[]

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsIntegrationsSqs;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs">CloudAwsIntegrationsSqs</a>

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



