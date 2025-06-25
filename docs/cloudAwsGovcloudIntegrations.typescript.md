# `cloudAwsGovcloudIntegrations` Submodule <a name="`cloudAwsGovcloudIntegrations` Submodule" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudAwsGovcloudIntegrations <a name="CloudAwsGovcloudIntegrations" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations newrelic_cloud_aws_govcloud_integrations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations(scope: Construct, id: string, config: CloudAwsGovcloudIntegrationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig">CloudAwsGovcloudIntegrationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig">CloudAwsGovcloudIntegrationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putAlb">putAlb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putApiGateway">putApiGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putAutoScaling">putAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putAwsDirectConnect">putAwsDirectConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putAwsStates">putAwsStates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putCloudtrail">putCloudtrail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putDynamoDb">putDynamoDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putEbs">putEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putEc2">putEc2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putElasticSearch">putElasticSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putElb">putElb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putEmr">putEmr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putIam">putIam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putLambda">putLambda</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putRds">putRds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putRedShift">putRedShift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putRoute53">putRoute53</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putSns">putSns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putSqs">putSqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetAlb">resetAlb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetApiGateway">resetApiGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetAutoScaling">resetAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetAwsDirectConnect">resetAwsDirectConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetAwsStates">resetAwsStates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetCloudtrail">resetCloudtrail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetDynamoDb">resetDynamoDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetEbs">resetEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetEc2">resetEc2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetElasticSearch">resetElasticSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetElb">resetElb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetEmr">resetEmr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetIam">resetIam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetLambda">resetLambda</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetRds">resetRds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetRedShift">resetRedShift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetRoute53">resetRoute53</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetS3">resetS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetSns">resetSns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetSqs">resetSqs</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAlb` <a name="putAlb" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putAlb"></a>

```typescript
public putAlb(value: CloudAwsGovcloudIntegrationsAlb): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putAlb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb">CloudAwsGovcloudIntegrationsAlb</a>

---

##### `putApiGateway` <a name="putApiGateway" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putApiGateway"></a>

```typescript
public putApiGateway(value: CloudAwsGovcloudIntegrationsApiGateway): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putApiGateway.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway">CloudAwsGovcloudIntegrationsApiGateway</a>

---

##### `putAutoScaling` <a name="putAutoScaling" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putAutoScaling"></a>

```typescript
public putAutoScaling(value: CloudAwsGovcloudIntegrationsAutoScaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScaling">CloudAwsGovcloudIntegrationsAutoScaling</a>

---

##### `putAwsDirectConnect` <a name="putAwsDirectConnect" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putAwsDirectConnect"></a>

```typescript
public putAwsDirectConnect(value: CloudAwsGovcloudIntegrationsAwsDirectConnect): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putAwsDirectConnect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnect">CloudAwsGovcloudIntegrationsAwsDirectConnect</a>

---

##### `putAwsStates` <a name="putAwsStates" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putAwsStates"></a>

```typescript
public putAwsStates(value: CloudAwsGovcloudIntegrationsAwsStates): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putAwsStates.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStates">CloudAwsGovcloudIntegrationsAwsStates</a>

---

##### `putCloudtrail` <a name="putCloudtrail" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putCloudtrail"></a>

```typescript
public putCloudtrail(value: CloudAwsGovcloudIntegrationsCloudtrail): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putCloudtrail.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrail">CloudAwsGovcloudIntegrationsCloudtrail</a>

---

##### `putDynamoDb` <a name="putDynamoDb" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putDynamoDb"></a>

```typescript
public putDynamoDb(value: CloudAwsGovcloudIntegrationsDynamoDb): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putDynamoDb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb">CloudAwsGovcloudIntegrationsDynamoDb</a>

---

##### `putEbs` <a name="putEbs" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putEbs"></a>

```typescript
public putEbs(value: CloudAwsGovcloudIntegrationsEbs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putEbs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs">CloudAwsGovcloudIntegrationsEbs</a>

---

##### `putEc2` <a name="putEc2" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putEc2"></a>

```typescript
public putEc2(value: CloudAwsGovcloudIntegrationsEc2): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putEc2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2">CloudAwsGovcloudIntegrationsEc2</a>

---

##### `putElasticSearch` <a name="putElasticSearch" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putElasticSearch"></a>

```typescript
public putElasticSearch(value: CloudAwsGovcloudIntegrationsElasticSearch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putElasticSearch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch">CloudAwsGovcloudIntegrationsElasticSearch</a>

---

##### `putElb` <a name="putElb" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putElb"></a>

```typescript
public putElb(value: CloudAwsGovcloudIntegrationsElb): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putElb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb">CloudAwsGovcloudIntegrationsElb</a>

---

##### `putEmr` <a name="putEmr" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putEmr"></a>

```typescript
public putEmr(value: CloudAwsGovcloudIntegrationsEmr): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putEmr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr">CloudAwsGovcloudIntegrationsEmr</a>

---

##### `putIam` <a name="putIam" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putIam"></a>

```typescript
public putIam(value: CloudAwsGovcloudIntegrationsIam): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putIam.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIam">CloudAwsGovcloudIntegrationsIam</a>

---

##### `putLambda` <a name="putLambda" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putLambda"></a>

```typescript
public putLambda(value: CloudAwsGovcloudIntegrationsLambda): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putLambda.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda">CloudAwsGovcloudIntegrationsLambda</a>

---

##### `putRds` <a name="putRds" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putRds"></a>

```typescript
public putRds(value: CloudAwsGovcloudIntegrationsRds): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putRds.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds">CloudAwsGovcloudIntegrationsRds</a>

---

##### `putRedShift` <a name="putRedShift" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putRedShift"></a>

```typescript
public putRedShift(value: CloudAwsGovcloudIntegrationsRedShift): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putRedShift.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift">CloudAwsGovcloudIntegrationsRedShift</a>

---

##### `putRoute53` <a name="putRoute53" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putRoute53"></a>

```typescript
public putRoute53(value: CloudAwsGovcloudIntegrationsRoute53): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putRoute53.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53">CloudAwsGovcloudIntegrationsRoute53</a>

---

##### `putS3` <a name="putS3" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putS3"></a>

```typescript
public putS3(value: CloudAwsGovcloudIntegrationsS3): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3">CloudAwsGovcloudIntegrationsS3</a>

---

##### `putSns` <a name="putSns" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putSns"></a>

```typescript
public putSns(value: CloudAwsGovcloudIntegrationsSns): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putSns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSns">CloudAwsGovcloudIntegrationsSns</a>

---

##### `putSqs` <a name="putSqs" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putSqs"></a>

```typescript
public putSqs(value: CloudAwsGovcloudIntegrationsSqs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.putSqs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs">CloudAwsGovcloudIntegrationsSqs</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetAlb` <a name="resetAlb" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetAlb"></a>

```typescript
public resetAlb(): void
```

##### `resetApiGateway` <a name="resetApiGateway" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetApiGateway"></a>

```typescript
public resetApiGateway(): void
```

##### `resetAutoScaling` <a name="resetAutoScaling" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetAutoScaling"></a>

```typescript
public resetAutoScaling(): void
```

##### `resetAwsDirectConnect` <a name="resetAwsDirectConnect" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetAwsDirectConnect"></a>

```typescript
public resetAwsDirectConnect(): void
```

##### `resetAwsStates` <a name="resetAwsStates" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetAwsStates"></a>

```typescript
public resetAwsStates(): void
```

##### `resetCloudtrail` <a name="resetCloudtrail" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetCloudtrail"></a>

```typescript
public resetCloudtrail(): void
```

##### `resetDynamoDb` <a name="resetDynamoDb" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetDynamoDb"></a>

```typescript
public resetDynamoDb(): void
```

##### `resetEbs` <a name="resetEbs" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetEbs"></a>

```typescript
public resetEbs(): void
```

##### `resetEc2` <a name="resetEc2" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetEc2"></a>

```typescript
public resetEc2(): void
```

##### `resetElasticSearch` <a name="resetElasticSearch" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetElasticSearch"></a>

```typescript
public resetElasticSearch(): void
```

##### `resetElb` <a name="resetElb" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetElb"></a>

```typescript
public resetElb(): void
```

##### `resetEmr` <a name="resetEmr" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetEmr"></a>

```typescript
public resetEmr(): void
```

##### `resetIam` <a name="resetIam" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetIam"></a>

```typescript
public resetIam(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLambda` <a name="resetLambda" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetLambda"></a>

```typescript
public resetLambda(): void
```

##### `resetRds` <a name="resetRds" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetRds"></a>

```typescript
public resetRds(): void
```

##### `resetRedShift` <a name="resetRedShift" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetRedShift"></a>

```typescript
public resetRedShift(): void
```

##### `resetRoute53` <a name="resetRoute53" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetRoute53"></a>

```typescript
public resetRoute53(): void
```

##### `resetS3` <a name="resetS3" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetS3"></a>

```typescript
public resetS3(): void
```

##### `resetSns` <a name="resetSns" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetSns"></a>

```typescript
public resetSns(): void
```

##### `resetSqs` <a name="resetSqs" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.resetSqs"></a>

```typescript
public resetSqs(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudAwsGovcloudIntegrations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.isConstruct"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.isTerraformElement"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.isTerraformResource"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.generateConfigForImport"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudAwsGovcloudIntegrations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudAwsGovcloudIntegrations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudAwsGovcloudIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudAwsGovcloudIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.alb">alb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference">CloudAwsGovcloudIntegrationsAlbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.apiGateway">apiGateway</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference">CloudAwsGovcloudIntegrationsApiGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.autoScaling">autoScaling</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference">CloudAwsGovcloudIntegrationsAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.awsDirectConnect">awsDirectConnect</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference">CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.awsStates">awsStates</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference">CloudAwsGovcloudIntegrationsAwsStatesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.cloudtrail">cloudtrail</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference">CloudAwsGovcloudIntegrationsCloudtrailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.dynamoDb">dynamoDb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference">CloudAwsGovcloudIntegrationsDynamoDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference">CloudAwsGovcloudIntegrationsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.ec2">ec2</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference">CloudAwsGovcloudIntegrationsEc2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.elasticSearch">elasticSearch</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference">CloudAwsGovcloudIntegrationsElasticSearchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.elb">elb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference">CloudAwsGovcloudIntegrationsElbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.emr">emr</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference">CloudAwsGovcloudIntegrationsEmrOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.iam">iam</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference">CloudAwsGovcloudIntegrationsIamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.lambda">lambda</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference">CloudAwsGovcloudIntegrationsLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.rds">rds</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference">CloudAwsGovcloudIntegrationsRdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.redShift">redShift</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference">CloudAwsGovcloudIntegrationsRedShiftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.route53">route53</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference">CloudAwsGovcloudIntegrationsRoute53OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference">CloudAwsGovcloudIntegrationsS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.sns">sns</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference">CloudAwsGovcloudIntegrationsSnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.sqs">sqs</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference">CloudAwsGovcloudIntegrationsSqsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.albInput">albInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb">CloudAwsGovcloudIntegrationsAlb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.apiGatewayInput">apiGatewayInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway">CloudAwsGovcloudIntegrationsApiGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.autoScalingInput">autoScalingInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScaling">CloudAwsGovcloudIntegrationsAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.awsDirectConnectInput">awsDirectConnectInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnect">CloudAwsGovcloudIntegrationsAwsDirectConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.awsStatesInput">awsStatesInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStates">CloudAwsGovcloudIntegrationsAwsStates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.cloudtrailInput">cloudtrailInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrail">CloudAwsGovcloudIntegrationsCloudtrail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.dynamoDbInput">dynamoDbInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb">CloudAwsGovcloudIntegrationsDynamoDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.ebsInput">ebsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs">CloudAwsGovcloudIntegrationsEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.ec2Input">ec2Input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2">CloudAwsGovcloudIntegrationsEc2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.elasticSearchInput">elasticSearchInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch">CloudAwsGovcloudIntegrationsElasticSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.elbInput">elbInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb">CloudAwsGovcloudIntegrationsElb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.emrInput">emrInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr">CloudAwsGovcloudIntegrationsEmr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.iamInput">iamInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIam">CloudAwsGovcloudIntegrationsIam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.lambdaInput">lambdaInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda">CloudAwsGovcloudIntegrationsLambda</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.linkedAccountIdInput">linkedAccountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.rdsInput">rdsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds">CloudAwsGovcloudIntegrationsRds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.redShiftInput">redShiftInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift">CloudAwsGovcloudIntegrationsRedShift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.route53Input">route53Input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53">CloudAwsGovcloudIntegrationsRoute53</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.s3Input">s3Input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3">CloudAwsGovcloudIntegrationsS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.snsInput">snsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSns">CloudAwsGovcloudIntegrationsSns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.sqsInput">sqsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs">CloudAwsGovcloudIntegrationsSqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.linkedAccountId">linkedAccountId</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `alb`<sup>Required</sup> <a name="alb" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.alb"></a>

```typescript
public readonly alb: CloudAwsGovcloudIntegrationsAlbOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference">CloudAwsGovcloudIntegrationsAlbOutputReference</a>

---

##### `apiGateway`<sup>Required</sup> <a name="apiGateway" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.apiGateway"></a>

```typescript
public readonly apiGateway: CloudAwsGovcloudIntegrationsApiGatewayOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference">CloudAwsGovcloudIntegrationsApiGatewayOutputReference</a>

---

##### `autoScaling`<sup>Required</sup> <a name="autoScaling" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.autoScaling"></a>

```typescript
public readonly autoScaling: CloudAwsGovcloudIntegrationsAutoScalingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference">CloudAwsGovcloudIntegrationsAutoScalingOutputReference</a>

---

##### `awsDirectConnect`<sup>Required</sup> <a name="awsDirectConnect" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.awsDirectConnect"></a>

```typescript
public readonly awsDirectConnect: CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference">CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference</a>

---

##### `awsStates`<sup>Required</sup> <a name="awsStates" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.awsStates"></a>

```typescript
public readonly awsStates: CloudAwsGovcloudIntegrationsAwsStatesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference">CloudAwsGovcloudIntegrationsAwsStatesOutputReference</a>

---

##### `cloudtrail`<sup>Required</sup> <a name="cloudtrail" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.cloudtrail"></a>

```typescript
public readonly cloudtrail: CloudAwsGovcloudIntegrationsCloudtrailOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference">CloudAwsGovcloudIntegrationsCloudtrailOutputReference</a>

---

##### `dynamoDb`<sup>Required</sup> <a name="dynamoDb" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.dynamoDb"></a>

```typescript
public readonly dynamoDb: CloudAwsGovcloudIntegrationsDynamoDbOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference">CloudAwsGovcloudIntegrationsDynamoDbOutputReference</a>

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.ebs"></a>

```typescript
public readonly ebs: CloudAwsGovcloudIntegrationsEbsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference">CloudAwsGovcloudIntegrationsEbsOutputReference</a>

---

##### `ec2`<sup>Required</sup> <a name="ec2" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.ec2"></a>

```typescript
public readonly ec2: CloudAwsGovcloudIntegrationsEc2OutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference">CloudAwsGovcloudIntegrationsEc2OutputReference</a>

---

##### `elasticSearch`<sup>Required</sup> <a name="elasticSearch" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.elasticSearch"></a>

```typescript
public readonly elasticSearch: CloudAwsGovcloudIntegrationsElasticSearchOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference">CloudAwsGovcloudIntegrationsElasticSearchOutputReference</a>

---

##### `elb`<sup>Required</sup> <a name="elb" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.elb"></a>

```typescript
public readonly elb: CloudAwsGovcloudIntegrationsElbOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference">CloudAwsGovcloudIntegrationsElbOutputReference</a>

---

##### `emr`<sup>Required</sup> <a name="emr" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.emr"></a>

```typescript
public readonly emr: CloudAwsGovcloudIntegrationsEmrOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference">CloudAwsGovcloudIntegrationsEmrOutputReference</a>

---

##### `iam`<sup>Required</sup> <a name="iam" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.iam"></a>

```typescript
public readonly iam: CloudAwsGovcloudIntegrationsIamOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference">CloudAwsGovcloudIntegrationsIamOutputReference</a>

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.lambda"></a>

```typescript
public readonly lambda: CloudAwsGovcloudIntegrationsLambdaOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference">CloudAwsGovcloudIntegrationsLambdaOutputReference</a>

---

##### `rds`<sup>Required</sup> <a name="rds" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.rds"></a>

```typescript
public readonly rds: CloudAwsGovcloudIntegrationsRdsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference">CloudAwsGovcloudIntegrationsRdsOutputReference</a>

---

##### `redShift`<sup>Required</sup> <a name="redShift" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.redShift"></a>

```typescript
public readonly redShift: CloudAwsGovcloudIntegrationsRedShiftOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference">CloudAwsGovcloudIntegrationsRedShiftOutputReference</a>

---

##### `route53`<sup>Required</sup> <a name="route53" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.route53"></a>

```typescript
public readonly route53: CloudAwsGovcloudIntegrationsRoute53OutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference">CloudAwsGovcloudIntegrationsRoute53OutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.s3"></a>

```typescript
public readonly s3: CloudAwsGovcloudIntegrationsS3OutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference">CloudAwsGovcloudIntegrationsS3OutputReference</a>

---

##### `sns`<sup>Required</sup> <a name="sns" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.sns"></a>

```typescript
public readonly sns: CloudAwsGovcloudIntegrationsSnsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference">CloudAwsGovcloudIntegrationsSnsOutputReference</a>

---

##### `sqs`<sup>Required</sup> <a name="sqs" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.sqs"></a>

```typescript
public readonly sqs: CloudAwsGovcloudIntegrationsSqsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference">CloudAwsGovcloudIntegrationsSqsOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `albInput`<sup>Optional</sup> <a name="albInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.albInput"></a>

```typescript
public readonly albInput: CloudAwsGovcloudIntegrationsAlb;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb">CloudAwsGovcloudIntegrationsAlb</a>

---

##### `apiGatewayInput`<sup>Optional</sup> <a name="apiGatewayInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.apiGatewayInput"></a>

```typescript
public readonly apiGatewayInput: CloudAwsGovcloudIntegrationsApiGateway;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway">CloudAwsGovcloudIntegrationsApiGateway</a>

---

##### `autoScalingInput`<sup>Optional</sup> <a name="autoScalingInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.autoScalingInput"></a>

```typescript
public readonly autoScalingInput: CloudAwsGovcloudIntegrationsAutoScaling;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScaling">CloudAwsGovcloudIntegrationsAutoScaling</a>

---

##### `awsDirectConnectInput`<sup>Optional</sup> <a name="awsDirectConnectInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.awsDirectConnectInput"></a>

```typescript
public readonly awsDirectConnectInput: CloudAwsGovcloudIntegrationsAwsDirectConnect;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnect">CloudAwsGovcloudIntegrationsAwsDirectConnect</a>

---

##### `awsStatesInput`<sup>Optional</sup> <a name="awsStatesInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.awsStatesInput"></a>

```typescript
public readonly awsStatesInput: CloudAwsGovcloudIntegrationsAwsStates;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStates">CloudAwsGovcloudIntegrationsAwsStates</a>

---

##### `cloudtrailInput`<sup>Optional</sup> <a name="cloudtrailInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.cloudtrailInput"></a>

```typescript
public readonly cloudtrailInput: CloudAwsGovcloudIntegrationsCloudtrail;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrail">CloudAwsGovcloudIntegrationsCloudtrail</a>

---

##### `dynamoDbInput`<sup>Optional</sup> <a name="dynamoDbInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.dynamoDbInput"></a>

```typescript
public readonly dynamoDbInput: CloudAwsGovcloudIntegrationsDynamoDb;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb">CloudAwsGovcloudIntegrationsDynamoDb</a>

---

##### `ebsInput`<sup>Optional</sup> <a name="ebsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.ebsInput"></a>

```typescript
public readonly ebsInput: CloudAwsGovcloudIntegrationsEbs;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs">CloudAwsGovcloudIntegrationsEbs</a>

---

##### `ec2Input`<sup>Optional</sup> <a name="ec2Input" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.ec2Input"></a>

```typescript
public readonly ec2Input: CloudAwsGovcloudIntegrationsEc2;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2">CloudAwsGovcloudIntegrationsEc2</a>

---

##### `elasticSearchInput`<sup>Optional</sup> <a name="elasticSearchInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.elasticSearchInput"></a>

```typescript
public readonly elasticSearchInput: CloudAwsGovcloudIntegrationsElasticSearch;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch">CloudAwsGovcloudIntegrationsElasticSearch</a>

---

##### `elbInput`<sup>Optional</sup> <a name="elbInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.elbInput"></a>

```typescript
public readonly elbInput: CloudAwsGovcloudIntegrationsElb;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb">CloudAwsGovcloudIntegrationsElb</a>

---

##### `emrInput`<sup>Optional</sup> <a name="emrInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.emrInput"></a>

```typescript
public readonly emrInput: CloudAwsGovcloudIntegrationsEmr;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr">CloudAwsGovcloudIntegrationsEmr</a>

---

##### `iamInput`<sup>Optional</sup> <a name="iamInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.iamInput"></a>

```typescript
public readonly iamInput: CloudAwsGovcloudIntegrationsIam;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIam">CloudAwsGovcloudIntegrationsIam</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lambdaInput`<sup>Optional</sup> <a name="lambdaInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.lambdaInput"></a>

```typescript
public readonly lambdaInput: CloudAwsGovcloudIntegrationsLambda;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda">CloudAwsGovcloudIntegrationsLambda</a>

---

##### `linkedAccountIdInput`<sup>Optional</sup> <a name="linkedAccountIdInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.linkedAccountIdInput"></a>

```typescript
public readonly linkedAccountIdInput: number;
```

- *Type:* number

---

##### `rdsInput`<sup>Optional</sup> <a name="rdsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.rdsInput"></a>

```typescript
public readonly rdsInput: CloudAwsGovcloudIntegrationsRds;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds">CloudAwsGovcloudIntegrationsRds</a>

---

##### `redShiftInput`<sup>Optional</sup> <a name="redShiftInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.redShiftInput"></a>

```typescript
public readonly redShiftInput: CloudAwsGovcloudIntegrationsRedShift;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift">CloudAwsGovcloudIntegrationsRedShift</a>

---

##### `route53Input`<sup>Optional</sup> <a name="route53Input" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.route53Input"></a>

```typescript
public readonly route53Input: CloudAwsGovcloudIntegrationsRoute53;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53">CloudAwsGovcloudIntegrationsRoute53</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.s3Input"></a>

```typescript
public readonly s3Input: CloudAwsGovcloudIntegrationsS3;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3">CloudAwsGovcloudIntegrationsS3</a>

---

##### `snsInput`<sup>Optional</sup> <a name="snsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.snsInput"></a>

```typescript
public readonly snsInput: CloudAwsGovcloudIntegrationsSns;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSns">CloudAwsGovcloudIntegrationsSns</a>

---

##### `sqsInput`<sup>Optional</sup> <a name="sqsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.sqsInput"></a>

```typescript
public readonly sqsInput: CloudAwsGovcloudIntegrationsSqs;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs">CloudAwsGovcloudIntegrationsSqs</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `linkedAccountId`<sup>Required</sup> <a name="linkedAccountId" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.linkedAccountId"></a>

```typescript
public readonly linkedAccountId: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudAwsGovcloudIntegrationsAlb <a name="CloudAwsGovcloudIntegrationsAlb" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsGovcloudIntegrationsAlb: cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determine if extra inventory data be collected or not. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb.property.fetchTags">fetchTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify if tags should be collected. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb.property.loadBalancerPrefixes">loadBalancerPrefixes</a></code> | <code>string[]</code> | Specify each name or prefix for the LBs that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb.property.tagKey">tagKey</a></code> | <code>string</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb.property.tagValue">tagValue</a></code> | <code>string</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}

---

##### `fetchExtendedInventory`<sup>Optional</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb.property.fetchExtendedInventory"></a>

```typescript
public readonly fetchExtendedInventory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#fetch_extended_inventory CloudAwsGovcloudIntegrations#fetch_extended_inventory}

---

##### `fetchTags`<sup>Optional</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb.property.fetchTags"></a>

```typescript
public readonly fetchTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify if tags should be collected.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#fetch_tags CloudAwsGovcloudIntegrations#fetch_tags}

---

##### `loadBalancerPrefixes`<sup>Optional</sup> <a name="loadBalancerPrefixes" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb.property.loadBalancerPrefixes"></a>

```typescript
public readonly loadBalancerPrefixes: string[];
```

- *Type:* string[]

Specify each name or prefix for the LBs that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#load_balancer_prefixes CloudAwsGovcloudIntegrations#load_balancer_prefixes}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}

---

### CloudAwsGovcloudIntegrationsApiGateway <a name="CloudAwsGovcloudIntegrationsApiGateway" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsGovcloudIntegrationsApiGateway: cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway.property.stagePrefixes">stagePrefixes</a></code> | <code>string[]</code> | Determine if extra inventory data be collected or not. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway.property.tagKey">tagKey</a></code> | <code>string</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway.property.tagValue">tagValue</a></code> | <code>string</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

##### `stagePrefixes`<sup>Optional</sup> <a name="stagePrefixes" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway.property.stagePrefixes"></a>

```typescript
public readonly stagePrefixes: string[];
```

- *Type:* string[]

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#stage_prefixes CloudAwsGovcloudIntegrations#stage_prefixes}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}

---

### CloudAwsGovcloudIntegrationsAutoScaling <a name="CloudAwsGovcloudIntegrationsAutoScaling" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScaling.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsGovcloudIntegrationsAutoScaling: cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScaling.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScaling.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScaling.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScaling.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

### CloudAwsGovcloudIntegrationsAwsDirectConnect <a name="CloudAwsGovcloudIntegrationsAwsDirectConnect" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnect.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsGovcloudIntegrationsAwsDirectConnect: cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnect = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnect.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnect.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnect.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnect.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

### CloudAwsGovcloudIntegrationsAwsStates <a name="CloudAwsGovcloudIntegrationsAwsStates" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStates.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsGovcloudIntegrationsAwsStates: cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStates = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStates.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStates.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStates.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStates.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

### CloudAwsGovcloudIntegrationsCloudtrail <a name="CloudAwsGovcloudIntegrationsCloudtrail" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrail.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsGovcloudIntegrationsCloudtrail: cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrail = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrail.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrail.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrail.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrail.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

### CloudAwsGovcloudIntegrationsConfig <a name="CloudAwsGovcloudIntegrationsConfig" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsGovcloudIntegrationsConfig: cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.linkedAccountId">linkedAccountId</a></code> | <code>number</code> | The ID of the linked AwsGovCloud account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.accountId">accountId</a></code> | <code>number</code> | The ID of the account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.alb">alb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb">CloudAwsGovcloudIntegrationsAlb</a></code> | alb block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.apiGateway">apiGateway</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway">CloudAwsGovcloudIntegrationsApiGateway</a></code> | api_gateway block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.autoScaling">autoScaling</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScaling">CloudAwsGovcloudIntegrationsAutoScaling</a></code> | auto_scaling block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.awsDirectConnect">awsDirectConnect</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnect">CloudAwsGovcloudIntegrationsAwsDirectConnect</a></code> | aws_direct_connect block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.awsStates">awsStates</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStates">CloudAwsGovcloudIntegrationsAwsStates</a></code> | aws_states block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.cloudtrail">cloudtrail</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrail">CloudAwsGovcloudIntegrationsCloudtrail</a></code> | cloudtrail block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.dynamoDb">dynamoDb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb">CloudAwsGovcloudIntegrationsDynamoDb</a></code> | dynamo_db block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs">CloudAwsGovcloudIntegrationsEbs</a></code> | ebs block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.ec2">ec2</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2">CloudAwsGovcloudIntegrationsEc2</a></code> | ec2 block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.elasticSearch">elasticSearch</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch">CloudAwsGovcloudIntegrationsElasticSearch</a></code> | elastic_search block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.elb">elb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb">CloudAwsGovcloudIntegrationsElb</a></code> | elb block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.emr">emr</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr">CloudAwsGovcloudIntegrationsEmr</a></code> | emr block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.iam">iam</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIam">CloudAwsGovcloudIntegrationsIam</a></code> | iam block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#id CloudAwsGovcloudIntegrations#id}. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.lambda">lambda</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda">CloudAwsGovcloudIntegrationsLambda</a></code> | lambda block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.rds">rds</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds">CloudAwsGovcloudIntegrationsRds</a></code> | rds block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.redShift">redShift</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift">CloudAwsGovcloudIntegrationsRedShift</a></code> | red_shift block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.route53">route53</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53">CloudAwsGovcloudIntegrationsRoute53</a></code> | route53 block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3">CloudAwsGovcloudIntegrationsS3</a></code> | s3 block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.sns">sns</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSns">CloudAwsGovcloudIntegrationsSns</a></code> | sns block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.sqs">sqs</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs">CloudAwsGovcloudIntegrationsSqs</a></code> | sqs block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `linkedAccountId`<sup>Required</sup> <a name="linkedAccountId" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.linkedAccountId"></a>

```typescript
public readonly linkedAccountId: number;
```

- *Type:* number

The ID of the linked AwsGovCloud account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#linked_account_id CloudAwsGovcloudIntegrations#linked_account_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The ID of the account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#account_id CloudAwsGovcloudIntegrations#account_id}

---

##### `alb`<sup>Optional</sup> <a name="alb" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.alb"></a>

```typescript
public readonly alb: CloudAwsGovcloudIntegrationsAlb;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb">CloudAwsGovcloudIntegrationsAlb</a>

alb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#alb CloudAwsGovcloudIntegrations#alb}

---

##### `apiGateway`<sup>Optional</sup> <a name="apiGateway" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.apiGateway"></a>

```typescript
public readonly apiGateway: CloudAwsGovcloudIntegrationsApiGateway;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway">CloudAwsGovcloudIntegrationsApiGateway</a>

api_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#api_gateway CloudAwsGovcloudIntegrations#api_gateway}

---

##### `autoScaling`<sup>Optional</sup> <a name="autoScaling" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.autoScaling"></a>

```typescript
public readonly autoScaling: CloudAwsGovcloudIntegrationsAutoScaling;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScaling">CloudAwsGovcloudIntegrationsAutoScaling</a>

auto_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#auto_scaling CloudAwsGovcloudIntegrations#auto_scaling}

---

##### `awsDirectConnect`<sup>Optional</sup> <a name="awsDirectConnect" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.awsDirectConnect"></a>

```typescript
public readonly awsDirectConnect: CloudAwsGovcloudIntegrationsAwsDirectConnect;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnect">CloudAwsGovcloudIntegrationsAwsDirectConnect</a>

aws_direct_connect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#aws_direct_connect CloudAwsGovcloudIntegrations#aws_direct_connect}

---

##### `awsStates`<sup>Optional</sup> <a name="awsStates" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.awsStates"></a>

```typescript
public readonly awsStates: CloudAwsGovcloudIntegrationsAwsStates;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStates">CloudAwsGovcloudIntegrationsAwsStates</a>

aws_states block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#aws_states CloudAwsGovcloudIntegrations#aws_states}

---

##### `cloudtrail`<sup>Optional</sup> <a name="cloudtrail" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.cloudtrail"></a>

```typescript
public readonly cloudtrail: CloudAwsGovcloudIntegrationsCloudtrail;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrail">CloudAwsGovcloudIntegrationsCloudtrail</a>

cloudtrail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#cloudtrail CloudAwsGovcloudIntegrations#cloudtrail}

---

##### `dynamoDb`<sup>Optional</sup> <a name="dynamoDb" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.dynamoDb"></a>

```typescript
public readonly dynamoDb: CloudAwsGovcloudIntegrationsDynamoDb;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb">CloudAwsGovcloudIntegrationsDynamoDb</a>

dynamo_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#dynamo_db CloudAwsGovcloudIntegrations#dynamo_db}

---

##### `ebs`<sup>Optional</sup> <a name="ebs" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.ebs"></a>

```typescript
public readonly ebs: CloudAwsGovcloudIntegrationsEbs;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs">CloudAwsGovcloudIntegrationsEbs</a>

ebs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#ebs CloudAwsGovcloudIntegrations#ebs}

---

##### `ec2`<sup>Optional</sup> <a name="ec2" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.ec2"></a>

```typescript
public readonly ec2: CloudAwsGovcloudIntegrationsEc2;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2">CloudAwsGovcloudIntegrationsEc2</a>

ec2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#ec2 CloudAwsGovcloudIntegrations#ec2}

---

##### `elasticSearch`<sup>Optional</sup> <a name="elasticSearch" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.elasticSearch"></a>

```typescript
public readonly elasticSearch: CloudAwsGovcloudIntegrationsElasticSearch;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch">CloudAwsGovcloudIntegrationsElasticSearch</a>

elastic_search block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#elastic_search CloudAwsGovcloudIntegrations#elastic_search}

---

##### `elb`<sup>Optional</sup> <a name="elb" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.elb"></a>

```typescript
public readonly elb: CloudAwsGovcloudIntegrationsElb;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb">CloudAwsGovcloudIntegrationsElb</a>

elb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#elb CloudAwsGovcloudIntegrations#elb}

---

##### `emr`<sup>Optional</sup> <a name="emr" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.emr"></a>

```typescript
public readonly emr: CloudAwsGovcloudIntegrationsEmr;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr">CloudAwsGovcloudIntegrationsEmr</a>

emr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#emr CloudAwsGovcloudIntegrations#emr}

---

##### `iam`<sup>Optional</sup> <a name="iam" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.iam"></a>

```typescript
public readonly iam: CloudAwsGovcloudIntegrationsIam;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIam">CloudAwsGovcloudIntegrationsIam</a>

iam block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#iam CloudAwsGovcloudIntegrations#iam}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#id CloudAwsGovcloudIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lambda`<sup>Optional</sup> <a name="lambda" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.lambda"></a>

```typescript
public readonly lambda: CloudAwsGovcloudIntegrationsLambda;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda">CloudAwsGovcloudIntegrationsLambda</a>

lambda block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#lambda CloudAwsGovcloudIntegrations#lambda}

---

##### `rds`<sup>Optional</sup> <a name="rds" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.rds"></a>

```typescript
public readonly rds: CloudAwsGovcloudIntegrationsRds;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds">CloudAwsGovcloudIntegrationsRds</a>

rds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#rds CloudAwsGovcloudIntegrations#rds}

---

##### `redShift`<sup>Optional</sup> <a name="redShift" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.redShift"></a>

```typescript
public readonly redShift: CloudAwsGovcloudIntegrationsRedShift;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift">CloudAwsGovcloudIntegrationsRedShift</a>

red_shift block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#red_shift CloudAwsGovcloudIntegrations#red_shift}

---

##### `route53`<sup>Optional</sup> <a name="route53" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.route53"></a>

```typescript
public readonly route53: CloudAwsGovcloudIntegrationsRoute53;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53">CloudAwsGovcloudIntegrationsRoute53</a>

route53 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#route53 CloudAwsGovcloudIntegrations#route53}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.s3"></a>

```typescript
public readonly s3: CloudAwsGovcloudIntegrationsS3;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3">CloudAwsGovcloudIntegrationsS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#s3 CloudAwsGovcloudIntegrations#s3}

---

##### `sns`<sup>Optional</sup> <a name="sns" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.sns"></a>

```typescript
public readonly sns: CloudAwsGovcloudIntegrationsSns;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSns">CloudAwsGovcloudIntegrationsSns</a>

sns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#sns CloudAwsGovcloudIntegrations#sns}

---

##### `sqs`<sup>Optional</sup> <a name="sqs" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsConfig.property.sqs"></a>

```typescript
public readonly sqs: CloudAwsGovcloudIntegrationsSqs;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs">CloudAwsGovcloudIntegrationsSqs</a>

sqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#sqs CloudAwsGovcloudIntegrations#sqs}

---

### CloudAwsGovcloudIntegrationsDynamoDb <a name="CloudAwsGovcloudIntegrationsDynamoDb" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsGovcloudIntegrationsDynamoDb: cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determine if extra inventory data be collected or not. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb.property.fetchTags">fetchTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify if tags should be collected. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb.property.tagKey">tagKey</a></code> | <code>string</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb.property.tagValue">tagValue</a></code> | <code>string</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}

---

##### `fetchExtendedInventory`<sup>Optional</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb.property.fetchExtendedInventory"></a>

```typescript
public readonly fetchExtendedInventory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#fetch_extended_inventory CloudAwsGovcloudIntegrations#fetch_extended_inventory}

---

##### `fetchTags`<sup>Optional</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb.property.fetchTags"></a>

```typescript
public readonly fetchTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify if tags should be collected.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#fetch_tags CloudAwsGovcloudIntegrations#fetch_tags}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}

---

### CloudAwsGovcloudIntegrationsEbs <a name="CloudAwsGovcloudIntegrationsEbs" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsGovcloudIntegrationsEbs: cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determine if extra inventory data be collected or not. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs.property.tagKey">tagKey</a></code> | <code>string</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs.property.tagValue">tagValue</a></code> | <code>string</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}

---

##### `fetchExtendedInventory`<sup>Optional</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs.property.fetchExtendedInventory"></a>

```typescript
public readonly fetchExtendedInventory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#fetch_extended_inventory CloudAwsGovcloudIntegrations#fetch_extended_inventory}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}

---

### CloudAwsGovcloudIntegrationsEc2 <a name="CloudAwsGovcloudIntegrationsEc2" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsGovcloudIntegrationsEc2: cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2.property.fetchIpAddresses">fetchIpAddresses</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify if IP addresses of ec2 instance should be collected. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2.property.tagKey">tagKey</a></code> | <code>string</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2.property.tagValue">tagValue</a></code> | <code>string</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}

---

##### `fetchIpAddresses`<sup>Optional</sup> <a name="fetchIpAddresses" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2.property.fetchIpAddresses"></a>

```typescript
public readonly fetchIpAddresses: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify if IP addresses of ec2 instance should be collected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#fetch_ip_addresses CloudAwsGovcloudIntegrations#fetch_ip_addresses}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}

---

### CloudAwsGovcloudIntegrationsElasticSearch <a name="CloudAwsGovcloudIntegrationsElasticSearch" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsGovcloudIntegrationsElasticSearch: cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch.property.fetchNodes">fetchNodes</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify if IP addresses of ec2 instance should be collected. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch.property.tagKey">tagKey</a></code> | <code>string</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch.property.tagValue">tagValue</a></code> | <code>string</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}

---

##### `fetchNodes`<sup>Optional</sup> <a name="fetchNodes" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch.property.fetchNodes"></a>

```typescript
public readonly fetchNodes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify if IP addresses of ec2 instance should be collected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#fetch_nodes CloudAwsGovcloudIntegrations#fetch_nodes}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}

---

### CloudAwsGovcloudIntegrationsElb <a name="CloudAwsGovcloudIntegrationsElb" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsGovcloudIntegrationsElb: cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determine if extra inventory data be collected or not. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb.property.fetchTags">fetchTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify if tags should be collected. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}

---

##### `fetchExtendedInventory`<sup>Optional</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb.property.fetchExtendedInventory"></a>

```typescript
public readonly fetchExtendedInventory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#fetch_extended_inventory CloudAwsGovcloudIntegrations#fetch_extended_inventory}

---

##### `fetchTags`<sup>Optional</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb.property.fetchTags"></a>

```typescript
public readonly fetchTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify if tags should be collected.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#fetch_tags CloudAwsGovcloudIntegrations#fetch_tags}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

### CloudAwsGovcloudIntegrationsEmr <a name="CloudAwsGovcloudIntegrationsEmr" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsGovcloudIntegrationsEmr: cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr.property.awsRegions">awsRegions</a></code> | <code>string</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr.property.fetchTags">fetchTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify if tags should be collected. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr.property.tagKey">tagKey</a></code> | <code>string</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr.property.tagValue">tagValue</a></code> | <code>string</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr.property.awsRegions"></a>

```typescript
public readonly awsRegions: string;
```

- *Type:* string

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}

---

##### `fetchTags`<sup>Optional</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr.property.fetchTags"></a>

```typescript
public readonly fetchTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify if tags should be collected.

May affect total data collection time and contribute to the Cloud provider API rate limit.



Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#fetch_tags CloudAwsGovcloudIntegrations#fetch_tags}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}

---

### CloudAwsGovcloudIntegrationsIam <a name="CloudAwsGovcloudIntegrationsIam" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIam.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsGovcloudIntegrationsIam: cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIam = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIam.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIam.property.tagKey">tagKey</a></code> | <code>string</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIam.property.tagValue">tagValue</a></code> | <code>string</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIam.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIam.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIam.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}

---

### CloudAwsGovcloudIntegrationsLambda <a name="CloudAwsGovcloudIntegrationsLambda" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsGovcloudIntegrationsLambda: cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda.property.fetchTags">fetchTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify if tags should be collected. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda.property.tagKey">tagKey</a></code> | <code>string</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda.property.tagValue">tagValue</a></code> | <code>string</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}

---

##### `fetchTags`<sup>Optional</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda.property.fetchTags"></a>

```typescript
public readonly fetchTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify if tags should be collected.

May affect total data collection time and contribute to the Cloud provider API rate limit.



Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#fetch_tags CloudAwsGovcloudIntegrations#fetch_tags}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}

---

### CloudAwsGovcloudIntegrationsRds <a name="CloudAwsGovcloudIntegrationsRds" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsGovcloudIntegrationsRds: cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds.property.fetchTags">fetchTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify if tags should be collected. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds.property.tagKey">tagKey</a></code> | <code>string</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds.property.tagValue">tagValue</a></code> | <code>string</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}

---

##### `fetchTags`<sup>Optional</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds.property.fetchTags"></a>

```typescript
public readonly fetchTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify if tags should be collected.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#fetch_tags CloudAwsGovcloudIntegrations#fetch_tags}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}

---

### CloudAwsGovcloudIntegrationsRedShift <a name="CloudAwsGovcloudIntegrationsRedShift" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsGovcloudIntegrationsRedShift: cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift.property.tagKey">tagKey</a></code> | <code>string</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift.property.tagValue">tagValue</a></code> | <code>string</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}

---

### CloudAwsGovcloudIntegrationsRoute53 <a name="CloudAwsGovcloudIntegrationsRoute53" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsGovcloudIntegrationsRoute53: cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determine if extra inventory data be collected or not. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `fetchExtendedInventory`<sup>Optional</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53.property.fetchExtendedInventory"></a>

```typescript
public readonly fetchExtendedInventory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#fetch_extended_inventory CloudAwsGovcloudIntegrations#fetch_extended_inventory}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

### CloudAwsGovcloudIntegrationsS3 <a name="CloudAwsGovcloudIntegrationsS3" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsGovcloudIntegrationsS3: cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determine if extra inventory data be collected or not. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3.property.fetchTags">fetchTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify if tags should be collected. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3.property.tagKey">tagKey</a></code> | <code>string</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3.property.tagValue">tagValue</a></code> | <code>string</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `fetchExtendedInventory`<sup>Optional</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3.property.fetchExtendedInventory"></a>

```typescript
public readonly fetchExtendedInventory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#fetch_extended_inventory CloudAwsGovcloudIntegrations#fetch_extended_inventory}

---

##### `fetchTags`<sup>Optional</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3.property.fetchTags"></a>

```typescript
public readonly fetchTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify if tags should be collected.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#fetch_tags CloudAwsGovcloudIntegrations#fetch_tags}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}

---

### CloudAwsGovcloudIntegrationsSns <a name="CloudAwsGovcloudIntegrationsSns" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSns.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsGovcloudIntegrationsSns: cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSns.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSns.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determine if extra inventory data be collected or not. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSns.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSns.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}

---

##### `fetchExtendedInventory`<sup>Optional</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSns.property.fetchExtendedInventory"></a>

```typescript
public readonly fetchExtendedInventory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#fetch_extended_inventory CloudAwsGovcloudIntegrations#fetch_extended_inventory}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSns.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

### CloudAwsGovcloudIntegrationsSqs <a name="CloudAwsGovcloudIntegrationsSqs" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

const cloudAwsGovcloudIntegrationsSqs: cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determine if extra inventory data be collected or not. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs.property.fetchTags">fetchTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify if tags should be collected. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs.property.queuePrefixes">queuePrefixes</a></code> | <code>string[]</code> | Specify each name or prefix for the Queues that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs.property.tagKey">tagKey</a></code> | <code>string</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs.property.tagValue">tagValue</a></code> | <code>string</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}

---

##### `fetchExtendedInventory`<sup>Optional</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs.property.fetchExtendedInventory"></a>

```typescript
public readonly fetchExtendedInventory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#fetch_extended_inventory CloudAwsGovcloudIntegrations#fetch_extended_inventory}

---

##### `fetchTags`<sup>Optional</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs.property.fetchTags"></a>

```typescript
public readonly fetchTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify if tags should be collected.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#fetch_tags CloudAwsGovcloudIntegrations#fetch_tags}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}

---

##### `queuePrefixes`<sup>Optional</sup> <a name="queuePrefixes" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs.property.queuePrefixes"></a>

```typescript
public readonly queuePrefixes: string[];
```

- *Type:* string[]

Specify each name or prefix for the Queues that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#queue_prefixes CloudAwsGovcloudIntegrations#queue_prefixes}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudAwsGovcloudIntegrationsAlbOutputReference <a name="CloudAwsGovcloudIntegrationsAlbOutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.resetFetchExtendedInventory">resetFetchExtendedInventory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.resetFetchTags">resetFetchTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.resetLoadBalancerPrefixes">resetLoadBalancerPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetFetchExtendedInventory` <a name="resetFetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.resetFetchExtendedInventory"></a>

```typescript
public resetFetchExtendedInventory(): void
```

##### `resetFetchTags` <a name="resetFetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.resetFetchTags"></a>

```typescript
public resetFetchTags(): void
```

##### `resetLoadBalancerPrefixes` <a name="resetLoadBalancerPrefixes" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.resetLoadBalancerPrefixes"></a>

```typescript
public resetLoadBalancerPrefixes(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.resetTagKey"></a>

```typescript
public resetTagKey(): void
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.resetTagValue"></a>

```typescript
public resetTagValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.fetchExtendedInventoryInput">fetchExtendedInventoryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.fetchTagsInput">fetchTagsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.loadBalancerPrefixesInput">loadBalancerPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.fetchTags">fetchTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.loadBalancerPrefixes">loadBalancerPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb">CloudAwsGovcloudIntegrationsAlb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `fetchExtendedInventoryInput`<sup>Optional</sup> <a name="fetchExtendedInventoryInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.fetchExtendedInventoryInput"></a>

```typescript
public readonly fetchExtendedInventoryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fetchTagsInput`<sup>Optional</sup> <a name="fetchTagsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.fetchTagsInput"></a>

```typescript
public readonly fetchTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `loadBalancerPrefixesInput`<sup>Optional</sup> <a name="loadBalancerPrefixesInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.loadBalancerPrefixesInput"></a>

```typescript
public readonly loadBalancerPrefixesInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: string;
```

- *Type:* string

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `fetchExtendedInventory`<sup>Required</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.fetchExtendedInventory"></a>

```typescript
public readonly fetchExtendedInventory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fetchTags`<sup>Required</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.fetchTags"></a>

```typescript
public readonly fetchTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `loadBalancerPrefixes`<sup>Required</sup> <a name="loadBalancerPrefixes" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.loadBalancerPrefixes"></a>

```typescript
public readonly loadBalancerPrefixes: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsGovcloudIntegrationsAlb;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAlb">CloudAwsGovcloudIntegrationsAlb</a>

---


### CloudAwsGovcloudIntegrationsApiGatewayOutputReference <a name="CloudAwsGovcloudIntegrationsApiGatewayOutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.resetStagePrefixes">resetStagePrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetStagePrefixes` <a name="resetStagePrefixes" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.resetStagePrefixes"></a>

```typescript
public resetStagePrefixes(): void
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.resetTagKey"></a>

```typescript
public resetTagKey(): void
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.resetTagValue"></a>

```typescript
public resetTagValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.stagePrefixesInput">stagePrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.stagePrefixes">stagePrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway">CloudAwsGovcloudIntegrationsApiGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `stagePrefixesInput`<sup>Optional</sup> <a name="stagePrefixesInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.stagePrefixesInput"></a>

```typescript
public readonly stagePrefixesInput: string[];
```

- *Type:* string[]

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: string;
```

- *Type:* string

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `stagePrefixes`<sup>Required</sup> <a name="stagePrefixes" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.stagePrefixes"></a>

```typescript
public readonly stagePrefixes: string[];
```

- *Type:* string[]

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGatewayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsGovcloudIntegrationsApiGateway;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsApiGateway">CloudAwsGovcloudIntegrationsApiGateway</a>

---


### CloudAwsGovcloudIntegrationsAutoScalingOutputReference <a name="CloudAwsGovcloudIntegrationsAutoScalingOutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScaling">CloudAwsGovcloudIntegrationsAutoScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsGovcloudIntegrationsAutoScaling;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAutoScaling">CloudAwsGovcloudIntegrationsAutoScaling</a>

---


### CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference <a name="CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnect">CloudAwsGovcloudIntegrationsAwsDirectConnect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsGovcloudIntegrationsAwsDirectConnect;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsDirectConnect">CloudAwsGovcloudIntegrationsAwsDirectConnect</a>

---


### CloudAwsGovcloudIntegrationsAwsStatesOutputReference <a name="CloudAwsGovcloudIntegrationsAwsStatesOutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStates">CloudAwsGovcloudIntegrationsAwsStates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsGovcloudIntegrationsAwsStates;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsAwsStates">CloudAwsGovcloudIntegrationsAwsStates</a>

---


### CloudAwsGovcloudIntegrationsCloudtrailOutputReference <a name="CloudAwsGovcloudIntegrationsCloudtrailOutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrail">CloudAwsGovcloudIntegrationsCloudtrail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsGovcloudIntegrationsCloudtrail;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsCloudtrail">CloudAwsGovcloudIntegrationsCloudtrail</a>

---


### CloudAwsGovcloudIntegrationsDynamoDbOutputReference <a name="CloudAwsGovcloudIntegrationsDynamoDbOutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.resetFetchExtendedInventory">resetFetchExtendedInventory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.resetFetchTags">resetFetchTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetFetchExtendedInventory` <a name="resetFetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.resetFetchExtendedInventory"></a>

```typescript
public resetFetchExtendedInventory(): void
```

##### `resetFetchTags` <a name="resetFetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.resetFetchTags"></a>

```typescript
public resetFetchTags(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.resetTagKey"></a>

```typescript
public resetTagKey(): void
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.resetTagValue"></a>

```typescript
public resetTagValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.fetchExtendedInventoryInput">fetchExtendedInventoryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.fetchTagsInput">fetchTagsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.fetchTags">fetchTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb">CloudAwsGovcloudIntegrationsDynamoDb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `fetchExtendedInventoryInput`<sup>Optional</sup> <a name="fetchExtendedInventoryInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.fetchExtendedInventoryInput"></a>

```typescript
public readonly fetchExtendedInventoryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fetchTagsInput`<sup>Optional</sup> <a name="fetchTagsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.fetchTagsInput"></a>

```typescript
public readonly fetchTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: string;
```

- *Type:* string

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `fetchExtendedInventory`<sup>Required</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.fetchExtendedInventory"></a>

```typescript
public readonly fetchExtendedInventory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fetchTags`<sup>Required</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.fetchTags"></a>

```typescript
public readonly fetchTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsGovcloudIntegrationsDynamoDb;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsDynamoDb">CloudAwsGovcloudIntegrationsDynamoDb</a>

---


### CloudAwsGovcloudIntegrationsEbsOutputReference <a name="CloudAwsGovcloudIntegrationsEbsOutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.resetFetchExtendedInventory">resetFetchExtendedInventory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetFetchExtendedInventory` <a name="resetFetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.resetFetchExtendedInventory"></a>

```typescript
public resetFetchExtendedInventory(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.resetTagKey"></a>

```typescript
public resetTagKey(): void
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.resetTagValue"></a>

```typescript
public resetTagValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.fetchExtendedInventoryInput">fetchExtendedInventoryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs">CloudAwsGovcloudIntegrationsEbs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `fetchExtendedInventoryInput`<sup>Optional</sup> <a name="fetchExtendedInventoryInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.fetchExtendedInventoryInput"></a>

```typescript
public readonly fetchExtendedInventoryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: string;
```

- *Type:* string

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `fetchExtendedInventory`<sup>Required</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.fetchExtendedInventory"></a>

```typescript
public readonly fetchExtendedInventory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsGovcloudIntegrationsEbs;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEbs">CloudAwsGovcloudIntegrationsEbs</a>

---


### CloudAwsGovcloudIntegrationsEc2OutputReference <a name="CloudAwsGovcloudIntegrationsEc2OutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.resetFetchIpAddresses">resetFetchIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetFetchIpAddresses` <a name="resetFetchIpAddresses" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.resetFetchIpAddresses"></a>

```typescript
public resetFetchIpAddresses(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.resetTagKey"></a>

```typescript
public resetTagKey(): void
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.resetTagValue"></a>

```typescript
public resetTagValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.fetchIpAddressesInput">fetchIpAddressesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.tagValueInput">tagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.fetchIpAddresses">fetchIpAddresses</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2">CloudAwsGovcloudIntegrationsEc2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `fetchIpAddressesInput`<sup>Optional</sup> <a name="fetchIpAddressesInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.fetchIpAddressesInput"></a>

```typescript
public readonly fetchIpAddressesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: string;
```

- *Type:* string

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `fetchIpAddresses`<sup>Required</sup> <a name="fetchIpAddresses" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.fetchIpAddresses"></a>

```typescript
public readonly fetchIpAddresses: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsGovcloudIntegrationsEc2;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEc2">CloudAwsGovcloudIntegrationsEc2</a>

---


### CloudAwsGovcloudIntegrationsElasticSearchOutputReference <a name="CloudAwsGovcloudIntegrationsElasticSearchOutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.resetFetchNodes">resetFetchNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetFetchNodes` <a name="resetFetchNodes" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.resetFetchNodes"></a>

```typescript
public resetFetchNodes(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.resetTagKey"></a>

```typescript
public resetTagKey(): void
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.resetTagValue"></a>

```typescript
public resetTagValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.fetchNodesInput">fetchNodesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.fetchNodes">fetchNodes</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch">CloudAwsGovcloudIntegrationsElasticSearch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `fetchNodesInput`<sup>Optional</sup> <a name="fetchNodesInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.fetchNodesInput"></a>

```typescript
public readonly fetchNodesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: string;
```

- *Type:* string

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `fetchNodes`<sup>Required</sup> <a name="fetchNodes" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.fetchNodes"></a>

```typescript
public readonly fetchNodes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsGovcloudIntegrationsElasticSearch;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElasticSearch">CloudAwsGovcloudIntegrationsElasticSearch</a>

---


### CloudAwsGovcloudIntegrationsElbOutputReference <a name="CloudAwsGovcloudIntegrationsElbOutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.resetFetchExtendedInventory">resetFetchExtendedInventory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.resetFetchTags">resetFetchTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetFetchExtendedInventory` <a name="resetFetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.resetFetchExtendedInventory"></a>

```typescript
public resetFetchExtendedInventory(): void
```

##### `resetFetchTags` <a name="resetFetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.resetFetchTags"></a>

```typescript
public resetFetchTags(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.fetchExtendedInventoryInput">fetchExtendedInventoryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.fetchTagsInput">fetchTagsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.fetchTags">fetchTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb">CloudAwsGovcloudIntegrationsElb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `fetchExtendedInventoryInput`<sup>Optional</sup> <a name="fetchExtendedInventoryInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.fetchExtendedInventoryInput"></a>

```typescript
public readonly fetchExtendedInventoryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fetchTagsInput`<sup>Optional</sup> <a name="fetchTagsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.fetchTagsInput"></a>

```typescript
public readonly fetchTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `fetchExtendedInventory`<sup>Required</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.fetchExtendedInventory"></a>

```typescript
public readonly fetchExtendedInventory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fetchTags`<sup>Required</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.fetchTags"></a>

```typescript
public readonly fetchTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsGovcloudIntegrationsElb;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsElb">CloudAwsGovcloudIntegrationsElb</a>

---


### CloudAwsGovcloudIntegrationsEmrOutputReference <a name="CloudAwsGovcloudIntegrationsEmrOutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.resetFetchTags">resetFetchTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetFetchTags` <a name="resetFetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.resetFetchTags"></a>

```typescript
public resetFetchTags(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.resetTagKey"></a>

```typescript
public resetTagKey(): void
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.resetTagValue"></a>

```typescript
public resetTagValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.fetchTagsInput">fetchTagsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.awsRegions">awsRegions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.fetchTags">fetchTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr">CloudAwsGovcloudIntegrationsEmr</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string;
```

- *Type:* string

---

##### `fetchTagsInput`<sup>Optional</sup> <a name="fetchTagsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.fetchTagsInput"></a>

```typescript
public readonly fetchTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: string;
```

- *Type:* string

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string;
```

- *Type:* string

---

##### `fetchTags`<sup>Required</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.fetchTags"></a>

```typescript
public readonly fetchTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmrOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsGovcloudIntegrationsEmr;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsEmr">CloudAwsGovcloudIntegrationsEmr</a>

---


### CloudAwsGovcloudIntegrationsIamOutputReference <a name="CloudAwsGovcloudIntegrationsIamOutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.resetTagKey"></a>

```typescript
public resetTagKey(): void
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.resetTagValue"></a>

```typescript
public resetTagValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIam">CloudAwsGovcloudIntegrationsIam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: string;
```

- *Type:* string

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsGovcloudIntegrationsIam;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsIam">CloudAwsGovcloudIntegrationsIam</a>

---


### CloudAwsGovcloudIntegrationsLambdaOutputReference <a name="CloudAwsGovcloudIntegrationsLambdaOutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.resetFetchTags">resetFetchTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetFetchTags` <a name="resetFetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.resetFetchTags"></a>

```typescript
public resetFetchTags(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.resetTagKey"></a>

```typescript
public resetTagKey(): void
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.resetTagValue"></a>

```typescript
public resetTagValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.fetchTagsInput">fetchTagsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.fetchTags">fetchTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda">CloudAwsGovcloudIntegrationsLambda</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `fetchTagsInput`<sup>Optional</sup> <a name="fetchTagsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.fetchTagsInput"></a>

```typescript
public readonly fetchTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: string;
```

- *Type:* string

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `fetchTags`<sup>Required</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.fetchTags"></a>

```typescript
public readonly fetchTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambdaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsGovcloudIntegrationsLambda;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsLambda">CloudAwsGovcloudIntegrationsLambda</a>

---


### CloudAwsGovcloudIntegrationsRdsOutputReference <a name="CloudAwsGovcloudIntegrationsRdsOutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.resetFetchTags">resetFetchTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetFetchTags` <a name="resetFetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.resetFetchTags"></a>

```typescript
public resetFetchTags(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.resetTagKey"></a>

```typescript
public resetTagKey(): void
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.resetTagValue"></a>

```typescript
public resetTagValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.fetchTagsInput">fetchTagsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.fetchTags">fetchTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds">CloudAwsGovcloudIntegrationsRds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `fetchTagsInput`<sup>Optional</sup> <a name="fetchTagsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.fetchTagsInput"></a>

```typescript
public readonly fetchTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: string;
```

- *Type:* string

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `fetchTags`<sup>Required</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.fetchTags"></a>

```typescript
public readonly fetchTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsGovcloudIntegrationsRds;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRds">CloudAwsGovcloudIntegrationsRds</a>

---


### CloudAwsGovcloudIntegrationsRedShiftOutputReference <a name="CloudAwsGovcloudIntegrationsRedShiftOutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.resetTagKey"></a>

```typescript
public resetTagKey(): void
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.resetTagValue"></a>

```typescript
public resetTagValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift">CloudAwsGovcloudIntegrationsRedShift</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: string;
```

- *Type:* string

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShiftOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsGovcloudIntegrationsRedShift;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRedShift">CloudAwsGovcloudIntegrationsRedShift</a>

---


### CloudAwsGovcloudIntegrationsRoute53OutputReference <a name="CloudAwsGovcloudIntegrationsRoute53OutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.resetFetchExtendedInventory">resetFetchExtendedInventory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFetchExtendedInventory` <a name="resetFetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.resetFetchExtendedInventory"></a>

```typescript
public resetFetchExtendedInventory(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.property.fetchExtendedInventoryInput">fetchExtendedInventoryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53">CloudAwsGovcloudIntegrationsRoute53</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fetchExtendedInventoryInput`<sup>Optional</sup> <a name="fetchExtendedInventoryInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.property.fetchExtendedInventoryInput"></a>

```typescript
public readonly fetchExtendedInventoryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `fetchExtendedInventory`<sup>Required</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.property.fetchExtendedInventory"></a>

```typescript
public readonly fetchExtendedInventory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsGovcloudIntegrationsRoute53;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsRoute53">CloudAwsGovcloudIntegrationsRoute53</a>

---


### CloudAwsGovcloudIntegrationsS3OutputReference <a name="CloudAwsGovcloudIntegrationsS3OutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.resetFetchExtendedInventory">resetFetchExtendedInventory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.resetFetchTags">resetFetchTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFetchExtendedInventory` <a name="resetFetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.resetFetchExtendedInventory"></a>

```typescript
public resetFetchExtendedInventory(): void
```

##### `resetFetchTags` <a name="resetFetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.resetFetchTags"></a>

```typescript
public resetFetchTags(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.resetTagKey"></a>

```typescript
public resetTagKey(): void
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.resetTagValue"></a>

```typescript
public resetTagValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.fetchExtendedInventoryInput">fetchExtendedInventoryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.fetchTagsInput">fetchTagsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.tagValueInput">tagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.fetchTags">fetchTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3">CloudAwsGovcloudIntegrationsS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fetchExtendedInventoryInput`<sup>Optional</sup> <a name="fetchExtendedInventoryInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.fetchExtendedInventoryInput"></a>

```typescript
public readonly fetchExtendedInventoryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fetchTagsInput`<sup>Optional</sup> <a name="fetchTagsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.fetchTagsInput"></a>

```typescript
public readonly fetchTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: string;
```

- *Type:* string

---

##### `fetchExtendedInventory`<sup>Required</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.fetchExtendedInventory"></a>

```typescript
public readonly fetchExtendedInventory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fetchTags`<sup>Required</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.fetchTags"></a>

```typescript
public readonly fetchTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsGovcloudIntegrationsS3;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsS3">CloudAwsGovcloudIntegrationsS3</a>

---


### CloudAwsGovcloudIntegrationsSnsOutputReference <a name="CloudAwsGovcloudIntegrationsSnsOutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.resetFetchExtendedInventory">resetFetchExtendedInventory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetFetchExtendedInventory` <a name="resetFetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.resetFetchExtendedInventory"></a>

```typescript
public resetFetchExtendedInventory(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.property.fetchExtendedInventoryInput">fetchExtendedInventoryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSns">CloudAwsGovcloudIntegrationsSns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `fetchExtendedInventoryInput`<sup>Optional</sup> <a name="fetchExtendedInventoryInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.property.fetchExtendedInventoryInput"></a>

```typescript
public readonly fetchExtendedInventoryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `fetchExtendedInventory`<sup>Required</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.property.fetchExtendedInventory"></a>

```typescript
public readonly fetchExtendedInventory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsGovcloudIntegrationsSns;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSns">CloudAwsGovcloudIntegrationsSns</a>

---


### CloudAwsGovcloudIntegrationsSqsOutputReference <a name="CloudAwsGovcloudIntegrationsSqsOutputReference" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.Initializer"></a>

```typescript
import { cloudAwsGovcloudIntegrations } from '@cdktf/provider-newrelic'

new cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.resetFetchExtendedInventory">resetFetchExtendedInventory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.resetFetchTags">resetFetchTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.resetQueuePrefixes">resetQueuePrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetFetchExtendedInventory` <a name="resetFetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.resetFetchExtendedInventory"></a>

```typescript
public resetFetchExtendedInventory(): void
```

##### `resetFetchTags` <a name="resetFetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.resetFetchTags"></a>

```typescript
public resetFetchTags(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetQueuePrefixes` <a name="resetQueuePrefixes" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.resetQueuePrefixes"></a>

```typescript
public resetQueuePrefixes(): void
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.resetTagKey"></a>

```typescript
public resetTagKey(): void
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.resetTagValue"></a>

```typescript
public resetTagValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.fetchExtendedInventoryInput">fetchExtendedInventoryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.fetchTagsInput">fetchTagsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.queuePrefixesInput">queuePrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.fetchTags">fetchTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.queuePrefixes">queuePrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs">CloudAwsGovcloudIntegrationsSqs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `fetchExtendedInventoryInput`<sup>Optional</sup> <a name="fetchExtendedInventoryInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.fetchExtendedInventoryInput"></a>

```typescript
public readonly fetchExtendedInventoryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fetchTagsInput`<sup>Optional</sup> <a name="fetchTagsInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.fetchTagsInput"></a>

```typescript
public readonly fetchTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `queuePrefixesInput`<sup>Optional</sup> <a name="queuePrefixesInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.queuePrefixesInput"></a>

```typescript
public readonly queuePrefixesInput: string[];
```

- *Type:* string[]

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: string;
```

- *Type:* string

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `fetchExtendedInventory`<sup>Required</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.fetchExtendedInventory"></a>

```typescript
public readonly fetchExtendedInventory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fetchTags`<sup>Required</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.fetchTags"></a>

```typescript
public readonly fetchTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `queuePrefixes`<sup>Required</sup> <a name="queuePrefixes" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.queuePrefixes"></a>

```typescript
public readonly queuePrefixes: string[];
```

- *Type:* string[]

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsGovcloudIntegrationsSqs;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudIntegrations.CloudAwsGovcloudIntegrationsSqs">CloudAwsGovcloudIntegrationsSqs</a>

---



