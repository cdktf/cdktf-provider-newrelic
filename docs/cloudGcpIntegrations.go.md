# `cloudGcpIntegrations` Submodule <a name="`cloudGcpIntegrations` Submodule" id="@cdktf/provider-newrelic.cloudGcpIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudGcpIntegrations <a name="CloudGcpIntegrations" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations newrelic_cloud_gcp_integrations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

cloudgcpintegrations.NewCloudGcpIntegrations(scope Construct, id *string, config CloudGcpIntegrationsConfig) CloudGcpIntegrations
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig">CloudGcpIntegrationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig">CloudGcpIntegrationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putAlloyDb">PutAlloyDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putAppEngine">PutAppEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putBigQuery">PutBigQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putBigTable">PutBigTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putComposer">PutComposer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putDataFlow">PutDataFlow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putDataProc">PutDataProc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putDataStore">PutDataStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFireBaseDatabase">PutFireBaseDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFireBaseHosting">PutFireBaseHosting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFireBaseStorage">PutFireBaseStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFireStore">PutFireStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFunctions">PutFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putInterconnect">PutInterconnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putKubernetes">PutKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putLoadBalancing">PutLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putMemCache">PutMemCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putPubSub">PutPubSub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putRedis">PutRedis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putRouter">PutRouter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putRun">PutRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putSpanner">PutSpanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putSql">PutSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putStorage">PutStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putVirtualMachines">PutVirtualMachines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putVpcAccess">PutVpcAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetAlloyDb">ResetAlloyDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetAppEngine">ResetAppEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetBigQuery">ResetBigQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetBigTable">ResetBigTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetComposer">ResetComposer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetDataFlow">ResetDataFlow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetDataProc">ResetDataProc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetDataStore">ResetDataStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetFireBaseDatabase">ResetFireBaseDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetFireBaseHosting">ResetFireBaseHosting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetFireBaseStorage">ResetFireBaseStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetFireStore">ResetFireStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetFunctions">ResetFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetInterconnect">ResetInterconnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetKubernetes">ResetKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetLoadBalancing">ResetLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetMemCache">ResetMemCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetPubSub">ResetPubSub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetRedis">ResetRedis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetRouter">ResetRouter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetRun">ResetRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetSpanner">ResetSpanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetSql">ResetSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetStorage">ResetStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetVirtualMachines">ResetVirtualMachines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetVpcAccess">ResetVpcAccess</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAlloyDb` <a name="PutAlloyDb" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putAlloyDb"></a>

```go
func PutAlloyDb(value CloudGcpIntegrationsAlloyDb)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putAlloyDb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb">CloudGcpIntegrationsAlloyDb</a>

---

##### `PutAppEngine` <a name="PutAppEngine" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putAppEngine"></a>

```go
func PutAppEngine(value CloudGcpIntegrationsAppEngine)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putAppEngine.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine">CloudGcpIntegrationsAppEngine</a>

---

##### `PutBigQuery` <a name="PutBigQuery" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putBigQuery"></a>

```go
func PutBigQuery(value CloudGcpIntegrationsBigQuery)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putBigQuery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery">CloudGcpIntegrationsBigQuery</a>

---

##### `PutBigTable` <a name="PutBigTable" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putBigTable"></a>

```go
func PutBigTable(value CloudGcpIntegrationsBigTable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putBigTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTable">CloudGcpIntegrationsBigTable</a>

---

##### `PutComposer` <a name="PutComposer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putComposer"></a>

```go
func PutComposer(value CloudGcpIntegrationsComposer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putComposer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposer">CloudGcpIntegrationsComposer</a>

---

##### `PutDataFlow` <a name="PutDataFlow" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putDataFlow"></a>

```go
func PutDataFlow(value CloudGcpIntegrationsDataFlow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putDataFlow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow">CloudGcpIntegrationsDataFlow</a>

---

##### `PutDataProc` <a name="PutDataProc" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putDataProc"></a>

```go
func PutDataProc(value CloudGcpIntegrationsDataProc)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putDataProc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProc">CloudGcpIntegrationsDataProc</a>

---

##### `PutDataStore` <a name="PutDataStore" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putDataStore"></a>

```go
func PutDataStore(value CloudGcpIntegrationsDataStore)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putDataStore.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStore">CloudGcpIntegrationsDataStore</a>

---

##### `PutFireBaseDatabase` <a name="PutFireBaseDatabase" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFireBaseDatabase"></a>

```go
func PutFireBaseDatabase(value CloudGcpIntegrationsFireBaseDatabase)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFireBaseDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase">CloudGcpIntegrationsFireBaseDatabase</a>

---

##### `PutFireBaseHosting` <a name="PutFireBaseHosting" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFireBaseHosting"></a>

```go
func PutFireBaseHosting(value CloudGcpIntegrationsFireBaseHosting)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFireBaseHosting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting">CloudGcpIntegrationsFireBaseHosting</a>

---

##### `PutFireBaseStorage` <a name="PutFireBaseStorage" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFireBaseStorage"></a>

```go
func PutFireBaseStorage(value CloudGcpIntegrationsFireBaseStorage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFireBaseStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage">CloudGcpIntegrationsFireBaseStorage</a>

---

##### `PutFireStore` <a name="PutFireStore" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFireStore"></a>

```go
func PutFireStore(value CloudGcpIntegrationsFireStore)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFireStore.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStore">CloudGcpIntegrationsFireStore</a>

---

##### `PutFunctions` <a name="PutFunctions" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFunctions"></a>

```go
func PutFunctions(value CloudGcpIntegrationsFunctions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFunctions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctions">CloudGcpIntegrationsFunctions</a>

---

##### `PutInterconnect` <a name="PutInterconnect" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putInterconnect"></a>

```go
func PutInterconnect(value CloudGcpIntegrationsInterconnect)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putInterconnect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect">CloudGcpIntegrationsInterconnect</a>

---

##### `PutKubernetes` <a name="PutKubernetes" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putKubernetes"></a>

```go
func PutKubernetes(value CloudGcpIntegrationsKubernetes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putKubernetes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes">CloudGcpIntegrationsKubernetes</a>

---

##### `PutLoadBalancing` <a name="PutLoadBalancing" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putLoadBalancing"></a>

```go
func PutLoadBalancing(value CloudGcpIntegrationsLoadBalancing)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putLoadBalancing.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing">CloudGcpIntegrationsLoadBalancing</a>

---

##### `PutMemCache` <a name="PutMemCache" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putMemCache"></a>

```go
func PutMemCache(value CloudGcpIntegrationsMemCache)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putMemCache.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCache">CloudGcpIntegrationsMemCache</a>

---

##### `PutPubSub` <a name="PutPubSub" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putPubSub"></a>

```go
func PutPubSub(value CloudGcpIntegrationsPubSub)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putPubSub.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub">CloudGcpIntegrationsPubSub</a>

---

##### `PutRedis` <a name="PutRedis" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putRedis"></a>

```go
func PutRedis(value CloudGcpIntegrationsRedis)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putRedis.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedis">CloudGcpIntegrationsRedis</a>

---

##### `PutRouter` <a name="PutRouter" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putRouter"></a>

```go
func PutRouter(value CloudGcpIntegrationsRouter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putRouter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouter">CloudGcpIntegrationsRouter</a>

---

##### `PutRun` <a name="PutRun" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putRun"></a>

```go
func PutRun(value CloudGcpIntegrationsRun)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putRun.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRun">CloudGcpIntegrationsRun</a>

---

##### `PutSpanner` <a name="PutSpanner" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putSpanner"></a>

```go
func PutSpanner(value CloudGcpIntegrationsSpanner)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putSpanner.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner">CloudGcpIntegrationsSpanner</a>

---

##### `PutSql` <a name="PutSql" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putSql"></a>

```go
func PutSql(value CloudGcpIntegrationsSql)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putSql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSql">CloudGcpIntegrationsSql</a>

---

##### `PutStorage` <a name="PutStorage" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putStorage"></a>

```go
func PutStorage(value CloudGcpIntegrationsStorage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage">CloudGcpIntegrationsStorage</a>

---

##### `PutVirtualMachines` <a name="PutVirtualMachines" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putVirtualMachines"></a>

```go
func PutVirtualMachines(value CloudGcpIntegrationsVirtualMachines)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putVirtualMachines.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines">CloudGcpIntegrationsVirtualMachines</a>

---

##### `PutVpcAccess` <a name="PutVpcAccess" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putVpcAccess"></a>

```go
func PutVpcAccess(value CloudGcpIntegrationsVpcAccess)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putVpcAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess">CloudGcpIntegrationsVpcAccess</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetAlloyDb` <a name="ResetAlloyDb" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetAlloyDb"></a>

```go
func ResetAlloyDb()
```

##### `ResetAppEngine` <a name="ResetAppEngine" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetAppEngine"></a>

```go
func ResetAppEngine()
```

##### `ResetBigQuery` <a name="ResetBigQuery" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetBigQuery"></a>

```go
func ResetBigQuery()
```

##### `ResetBigTable` <a name="ResetBigTable" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetBigTable"></a>

```go
func ResetBigTable()
```

##### `ResetComposer` <a name="ResetComposer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetComposer"></a>

```go
func ResetComposer()
```

##### `ResetDataFlow` <a name="ResetDataFlow" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetDataFlow"></a>

```go
func ResetDataFlow()
```

##### `ResetDataProc` <a name="ResetDataProc" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetDataProc"></a>

```go
func ResetDataProc()
```

##### `ResetDataStore` <a name="ResetDataStore" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetDataStore"></a>

```go
func ResetDataStore()
```

##### `ResetFireBaseDatabase` <a name="ResetFireBaseDatabase" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetFireBaseDatabase"></a>

```go
func ResetFireBaseDatabase()
```

##### `ResetFireBaseHosting` <a name="ResetFireBaseHosting" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetFireBaseHosting"></a>

```go
func ResetFireBaseHosting()
```

##### `ResetFireBaseStorage` <a name="ResetFireBaseStorage" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetFireBaseStorage"></a>

```go
func ResetFireBaseStorage()
```

##### `ResetFireStore` <a name="ResetFireStore" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetFireStore"></a>

```go
func ResetFireStore()
```

##### `ResetFunctions` <a name="ResetFunctions" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetFunctions"></a>

```go
func ResetFunctions()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetId"></a>

```go
func ResetId()
```

##### `ResetInterconnect` <a name="ResetInterconnect" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetInterconnect"></a>

```go
func ResetInterconnect()
```

##### `ResetKubernetes` <a name="ResetKubernetes" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetKubernetes"></a>

```go
func ResetKubernetes()
```

##### `ResetLoadBalancing` <a name="ResetLoadBalancing" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetLoadBalancing"></a>

```go
func ResetLoadBalancing()
```

##### `ResetMemCache` <a name="ResetMemCache" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetMemCache"></a>

```go
func ResetMemCache()
```

##### `ResetPubSub` <a name="ResetPubSub" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetPubSub"></a>

```go
func ResetPubSub()
```

##### `ResetRedis` <a name="ResetRedis" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetRedis"></a>

```go
func ResetRedis()
```

##### `ResetRouter` <a name="ResetRouter" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetRouter"></a>

```go
func ResetRouter()
```

##### `ResetRun` <a name="ResetRun" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetRun"></a>

```go
func ResetRun()
```

##### `ResetSpanner` <a name="ResetSpanner" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetSpanner"></a>

```go
func ResetSpanner()
```

##### `ResetSql` <a name="ResetSql" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetSql"></a>

```go
func ResetSql()
```

##### `ResetStorage` <a name="ResetStorage" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetStorage"></a>

```go
func ResetStorage()
```

##### `ResetVirtualMachines` <a name="ResetVirtualMachines" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetVirtualMachines"></a>

```go
func ResetVirtualMachines()
```

##### `ResetVpcAccess` <a name="ResetVpcAccess" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetVpcAccess"></a>

```go
func ResetVpcAccess()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudGcpIntegrations resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

cloudgcpintegrations.CloudGcpIntegrations_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

cloudgcpintegrations.CloudGcpIntegrations_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

cloudgcpintegrations.CloudGcpIntegrations_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

cloudgcpintegrations.CloudGcpIntegrations_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CloudGcpIntegrations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudGcpIntegrations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudGcpIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CloudGcpIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.alloyDb">AlloyDb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference">CloudGcpIntegrationsAlloyDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.appEngine">AppEngine</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference">CloudGcpIntegrationsAppEngineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.bigQuery">BigQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference">CloudGcpIntegrationsBigQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.bigTable">BigTable</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference">CloudGcpIntegrationsBigTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.composer">Composer</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference">CloudGcpIntegrationsComposerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dataFlow">DataFlow</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference">CloudGcpIntegrationsDataFlowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dataProc">DataProc</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference">CloudGcpIntegrationsDataProcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dataStore">DataStore</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference">CloudGcpIntegrationsDataStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireBaseDatabase">FireBaseDatabase</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference">CloudGcpIntegrationsFireBaseDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireBaseHosting">FireBaseHosting</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference">CloudGcpIntegrationsFireBaseHostingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireBaseStorage">FireBaseStorage</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference">CloudGcpIntegrationsFireBaseStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireStore">FireStore</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference">CloudGcpIntegrationsFireStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.functions">Functions</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference">CloudGcpIntegrationsFunctionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.interconnect">Interconnect</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference">CloudGcpIntegrationsInterconnectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.kubernetes">Kubernetes</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference">CloudGcpIntegrationsKubernetesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.loadBalancing">LoadBalancing</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference">CloudGcpIntegrationsLoadBalancingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.memCache">MemCache</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference">CloudGcpIntegrationsMemCacheOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.pubSub">PubSub</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference">CloudGcpIntegrationsPubSubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.redis">Redis</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference">CloudGcpIntegrationsRedisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.router">Router</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference">CloudGcpIntegrationsRouterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.run">Run</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference">CloudGcpIntegrationsRunOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.spanner">Spanner</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference">CloudGcpIntegrationsSpannerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.sql">Sql</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference">CloudGcpIntegrationsSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.storage">Storage</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference">CloudGcpIntegrationsStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.virtualMachines">VirtualMachines</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference">CloudGcpIntegrationsVirtualMachinesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.vpcAccess">VpcAccess</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference">CloudGcpIntegrationsVpcAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.alloyDbInput">AlloyDbInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb">CloudGcpIntegrationsAlloyDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.appEngineInput">AppEngineInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine">CloudGcpIntegrationsAppEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.bigQueryInput">BigQueryInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery">CloudGcpIntegrationsBigQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.bigTableInput">BigTableInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTable">CloudGcpIntegrationsBigTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.composerInput">ComposerInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposer">CloudGcpIntegrationsComposer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dataFlowInput">DataFlowInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow">CloudGcpIntegrationsDataFlow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dataProcInput">DataProcInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProc">CloudGcpIntegrationsDataProc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dataStoreInput">DataStoreInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStore">CloudGcpIntegrationsDataStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireBaseDatabaseInput">FireBaseDatabaseInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase">CloudGcpIntegrationsFireBaseDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireBaseHostingInput">FireBaseHostingInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting">CloudGcpIntegrationsFireBaseHosting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireBaseStorageInput">FireBaseStorageInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage">CloudGcpIntegrationsFireBaseStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireStoreInput">FireStoreInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStore">CloudGcpIntegrationsFireStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.functionsInput">FunctionsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctions">CloudGcpIntegrationsFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.interconnectInput">InterconnectInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect">CloudGcpIntegrationsInterconnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.kubernetesInput">KubernetesInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes">CloudGcpIntegrationsKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.linkedAccountIdInput">LinkedAccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.loadBalancingInput">LoadBalancingInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing">CloudGcpIntegrationsLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.memCacheInput">MemCacheInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCache">CloudGcpIntegrationsMemCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.pubSubInput">PubSubInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub">CloudGcpIntegrationsPubSub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.redisInput">RedisInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedis">CloudGcpIntegrationsRedis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.routerInput">RouterInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouter">CloudGcpIntegrationsRouter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.runInput">RunInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRun">CloudGcpIntegrationsRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.spannerInput">SpannerInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner">CloudGcpIntegrationsSpanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.sqlInput">SqlInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSql">CloudGcpIntegrationsSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.storageInput">StorageInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage">CloudGcpIntegrationsStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.virtualMachinesInput">VirtualMachinesInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines">CloudGcpIntegrationsVirtualMachines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.vpcAccessInput">VpcAccessInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess">CloudGcpIntegrationsVpcAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.linkedAccountId">LinkedAccountId</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AlloyDb`<sup>Required</sup> <a name="AlloyDb" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.alloyDb"></a>

```go
func AlloyDb() CloudGcpIntegrationsAlloyDbOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference">CloudGcpIntegrationsAlloyDbOutputReference</a>

---

##### `AppEngine`<sup>Required</sup> <a name="AppEngine" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.appEngine"></a>

```go
func AppEngine() CloudGcpIntegrationsAppEngineOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference">CloudGcpIntegrationsAppEngineOutputReference</a>

---

##### `BigQuery`<sup>Required</sup> <a name="BigQuery" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.bigQuery"></a>

```go
func BigQuery() CloudGcpIntegrationsBigQueryOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference">CloudGcpIntegrationsBigQueryOutputReference</a>

---

##### `BigTable`<sup>Required</sup> <a name="BigTable" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.bigTable"></a>

```go
func BigTable() CloudGcpIntegrationsBigTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference">CloudGcpIntegrationsBigTableOutputReference</a>

---

##### `Composer`<sup>Required</sup> <a name="Composer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.composer"></a>

```go
func Composer() CloudGcpIntegrationsComposerOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference">CloudGcpIntegrationsComposerOutputReference</a>

---

##### `DataFlow`<sup>Required</sup> <a name="DataFlow" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dataFlow"></a>

```go
func DataFlow() CloudGcpIntegrationsDataFlowOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference">CloudGcpIntegrationsDataFlowOutputReference</a>

---

##### `DataProc`<sup>Required</sup> <a name="DataProc" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dataProc"></a>

```go
func DataProc() CloudGcpIntegrationsDataProcOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference">CloudGcpIntegrationsDataProcOutputReference</a>

---

##### `DataStore`<sup>Required</sup> <a name="DataStore" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dataStore"></a>

```go
func DataStore() CloudGcpIntegrationsDataStoreOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference">CloudGcpIntegrationsDataStoreOutputReference</a>

---

##### `FireBaseDatabase`<sup>Required</sup> <a name="FireBaseDatabase" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireBaseDatabase"></a>

```go
func FireBaseDatabase() CloudGcpIntegrationsFireBaseDatabaseOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference">CloudGcpIntegrationsFireBaseDatabaseOutputReference</a>

---

##### `FireBaseHosting`<sup>Required</sup> <a name="FireBaseHosting" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireBaseHosting"></a>

```go
func FireBaseHosting() CloudGcpIntegrationsFireBaseHostingOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference">CloudGcpIntegrationsFireBaseHostingOutputReference</a>

---

##### `FireBaseStorage`<sup>Required</sup> <a name="FireBaseStorage" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireBaseStorage"></a>

```go
func FireBaseStorage() CloudGcpIntegrationsFireBaseStorageOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference">CloudGcpIntegrationsFireBaseStorageOutputReference</a>

---

##### `FireStore`<sup>Required</sup> <a name="FireStore" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireStore"></a>

```go
func FireStore() CloudGcpIntegrationsFireStoreOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference">CloudGcpIntegrationsFireStoreOutputReference</a>

---

##### `Functions`<sup>Required</sup> <a name="Functions" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.functions"></a>

```go
func Functions() CloudGcpIntegrationsFunctionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference">CloudGcpIntegrationsFunctionsOutputReference</a>

---

##### `Interconnect`<sup>Required</sup> <a name="Interconnect" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.interconnect"></a>

```go
func Interconnect() CloudGcpIntegrationsInterconnectOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference">CloudGcpIntegrationsInterconnectOutputReference</a>

---

##### `Kubernetes`<sup>Required</sup> <a name="Kubernetes" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.kubernetes"></a>

```go
func Kubernetes() CloudGcpIntegrationsKubernetesOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference">CloudGcpIntegrationsKubernetesOutputReference</a>

---

##### `LoadBalancing`<sup>Required</sup> <a name="LoadBalancing" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.loadBalancing"></a>

```go
func LoadBalancing() CloudGcpIntegrationsLoadBalancingOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference">CloudGcpIntegrationsLoadBalancingOutputReference</a>

---

##### `MemCache`<sup>Required</sup> <a name="MemCache" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.memCache"></a>

```go
func MemCache() CloudGcpIntegrationsMemCacheOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference">CloudGcpIntegrationsMemCacheOutputReference</a>

---

##### `PubSub`<sup>Required</sup> <a name="PubSub" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.pubSub"></a>

```go
func PubSub() CloudGcpIntegrationsPubSubOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference">CloudGcpIntegrationsPubSubOutputReference</a>

---

##### `Redis`<sup>Required</sup> <a name="Redis" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.redis"></a>

```go
func Redis() CloudGcpIntegrationsRedisOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference">CloudGcpIntegrationsRedisOutputReference</a>

---

##### `Router`<sup>Required</sup> <a name="Router" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.router"></a>

```go
func Router() CloudGcpIntegrationsRouterOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference">CloudGcpIntegrationsRouterOutputReference</a>

---

##### `Run`<sup>Required</sup> <a name="Run" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.run"></a>

```go
func Run() CloudGcpIntegrationsRunOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference">CloudGcpIntegrationsRunOutputReference</a>

---

##### `Spanner`<sup>Required</sup> <a name="Spanner" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.spanner"></a>

```go
func Spanner() CloudGcpIntegrationsSpannerOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference">CloudGcpIntegrationsSpannerOutputReference</a>

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.sql"></a>

```go
func Sql() CloudGcpIntegrationsSqlOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference">CloudGcpIntegrationsSqlOutputReference</a>

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.storage"></a>

```go
func Storage() CloudGcpIntegrationsStorageOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference">CloudGcpIntegrationsStorageOutputReference</a>

---

##### `VirtualMachines`<sup>Required</sup> <a name="VirtualMachines" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.virtualMachines"></a>

```go
func VirtualMachines() CloudGcpIntegrationsVirtualMachinesOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference">CloudGcpIntegrationsVirtualMachinesOutputReference</a>

---

##### `VpcAccess`<sup>Required</sup> <a name="VpcAccess" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.vpcAccess"></a>

```go
func VpcAccess() CloudGcpIntegrationsVpcAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference">CloudGcpIntegrationsVpcAccessOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `AlloyDbInput`<sup>Optional</sup> <a name="AlloyDbInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.alloyDbInput"></a>

```go
func AlloyDbInput() CloudGcpIntegrationsAlloyDb
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb">CloudGcpIntegrationsAlloyDb</a>

---

##### `AppEngineInput`<sup>Optional</sup> <a name="AppEngineInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.appEngineInput"></a>

```go
func AppEngineInput() CloudGcpIntegrationsAppEngine
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine">CloudGcpIntegrationsAppEngine</a>

---

##### `BigQueryInput`<sup>Optional</sup> <a name="BigQueryInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.bigQueryInput"></a>

```go
func BigQueryInput() CloudGcpIntegrationsBigQuery
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery">CloudGcpIntegrationsBigQuery</a>

---

##### `BigTableInput`<sup>Optional</sup> <a name="BigTableInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.bigTableInput"></a>

```go
func BigTableInput() CloudGcpIntegrationsBigTable
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTable">CloudGcpIntegrationsBigTable</a>

---

##### `ComposerInput`<sup>Optional</sup> <a name="ComposerInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.composerInput"></a>

```go
func ComposerInput() CloudGcpIntegrationsComposer
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposer">CloudGcpIntegrationsComposer</a>

---

##### `DataFlowInput`<sup>Optional</sup> <a name="DataFlowInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dataFlowInput"></a>

```go
func DataFlowInput() CloudGcpIntegrationsDataFlow
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow">CloudGcpIntegrationsDataFlow</a>

---

##### `DataProcInput`<sup>Optional</sup> <a name="DataProcInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dataProcInput"></a>

```go
func DataProcInput() CloudGcpIntegrationsDataProc
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProc">CloudGcpIntegrationsDataProc</a>

---

##### `DataStoreInput`<sup>Optional</sup> <a name="DataStoreInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dataStoreInput"></a>

```go
func DataStoreInput() CloudGcpIntegrationsDataStore
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStore">CloudGcpIntegrationsDataStore</a>

---

##### `FireBaseDatabaseInput`<sup>Optional</sup> <a name="FireBaseDatabaseInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireBaseDatabaseInput"></a>

```go
func FireBaseDatabaseInput() CloudGcpIntegrationsFireBaseDatabase
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase">CloudGcpIntegrationsFireBaseDatabase</a>

---

##### `FireBaseHostingInput`<sup>Optional</sup> <a name="FireBaseHostingInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireBaseHostingInput"></a>

```go
func FireBaseHostingInput() CloudGcpIntegrationsFireBaseHosting
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting">CloudGcpIntegrationsFireBaseHosting</a>

---

##### `FireBaseStorageInput`<sup>Optional</sup> <a name="FireBaseStorageInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireBaseStorageInput"></a>

```go
func FireBaseStorageInput() CloudGcpIntegrationsFireBaseStorage
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage">CloudGcpIntegrationsFireBaseStorage</a>

---

##### `FireStoreInput`<sup>Optional</sup> <a name="FireStoreInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireStoreInput"></a>

```go
func FireStoreInput() CloudGcpIntegrationsFireStore
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStore">CloudGcpIntegrationsFireStore</a>

---

##### `FunctionsInput`<sup>Optional</sup> <a name="FunctionsInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.functionsInput"></a>

```go
func FunctionsInput() CloudGcpIntegrationsFunctions
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctions">CloudGcpIntegrationsFunctions</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InterconnectInput`<sup>Optional</sup> <a name="InterconnectInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.interconnectInput"></a>

```go
func InterconnectInput() CloudGcpIntegrationsInterconnect
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect">CloudGcpIntegrationsInterconnect</a>

---

##### `KubernetesInput`<sup>Optional</sup> <a name="KubernetesInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.kubernetesInput"></a>

```go
func KubernetesInput() CloudGcpIntegrationsKubernetes
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes">CloudGcpIntegrationsKubernetes</a>

---

##### `LinkedAccountIdInput`<sup>Optional</sup> <a name="LinkedAccountIdInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.linkedAccountIdInput"></a>

```go
func LinkedAccountIdInput() *f64
```

- *Type:* *f64

---

##### `LoadBalancingInput`<sup>Optional</sup> <a name="LoadBalancingInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.loadBalancingInput"></a>

```go
func LoadBalancingInput() CloudGcpIntegrationsLoadBalancing
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing">CloudGcpIntegrationsLoadBalancing</a>

---

##### `MemCacheInput`<sup>Optional</sup> <a name="MemCacheInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.memCacheInput"></a>

```go
func MemCacheInput() CloudGcpIntegrationsMemCache
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCache">CloudGcpIntegrationsMemCache</a>

---

##### `PubSubInput`<sup>Optional</sup> <a name="PubSubInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.pubSubInput"></a>

```go
func PubSubInput() CloudGcpIntegrationsPubSub
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub">CloudGcpIntegrationsPubSub</a>

---

##### `RedisInput`<sup>Optional</sup> <a name="RedisInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.redisInput"></a>

```go
func RedisInput() CloudGcpIntegrationsRedis
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedis">CloudGcpIntegrationsRedis</a>

---

##### `RouterInput`<sup>Optional</sup> <a name="RouterInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.routerInput"></a>

```go
func RouterInput() CloudGcpIntegrationsRouter
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouter">CloudGcpIntegrationsRouter</a>

---

##### `RunInput`<sup>Optional</sup> <a name="RunInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.runInput"></a>

```go
func RunInput() CloudGcpIntegrationsRun
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRun">CloudGcpIntegrationsRun</a>

---

##### `SpannerInput`<sup>Optional</sup> <a name="SpannerInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.spannerInput"></a>

```go
func SpannerInput() CloudGcpIntegrationsSpanner
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner">CloudGcpIntegrationsSpanner</a>

---

##### `SqlInput`<sup>Optional</sup> <a name="SqlInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.sqlInput"></a>

```go
func SqlInput() CloudGcpIntegrationsSql
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSql">CloudGcpIntegrationsSql</a>

---

##### `StorageInput`<sup>Optional</sup> <a name="StorageInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.storageInput"></a>

```go
func StorageInput() CloudGcpIntegrationsStorage
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage">CloudGcpIntegrationsStorage</a>

---

##### `VirtualMachinesInput`<sup>Optional</sup> <a name="VirtualMachinesInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.virtualMachinesInput"></a>

```go
func VirtualMachinesInput() CloudGcpIntegrationsVirtualMachines
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines">CloudGcpIntegrationsVirtualMachines</a>

---

##### `VpcAccessInput`<sup>Optional</sup> <a name="VpcAccessInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.vpcAccessInput"></a>

```go
func VpcAccessInput() CloudGcpIntegrationsVpcAccess
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess">CloudGcpIntegrationsVpcAccess</a>

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LinkedAccountId`<sup>Required</sup> <a name="LinkedAccountId" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.linkedAccountId"></a>

```go
func LinkedAccountId() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudGcpIntegrationsAlloyDb <a name="CloudGcpIntegrationsAlloyDb" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

&cloudgcpintegrations.CloudGcpIntegrationsAlloyDb {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | the data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsAppEngine <a name="CloudGcpIntegrationsAppEngine" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

&cloudgcpintegrations.CloudGcpIntegrationsAppEngine {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | the data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsBigQuery <a name="CloudGcpIntegrationsBigQuery" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

&cloudgcpintegrations.CloudGcpIntegrationsBigQuery {
	FetchTags: interface{},
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery.property.fetchTags">FetchTags</a></code> | <code>interface{}</code> | to fetch tags of the resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | the data polling interval in seconds. |

---

##### `FetchTags`<sup>Optional</sup> <a name="FetchTags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery.property.fetchTags"></a>

```go
FetchTags interface{}
```

- *Type:* interface{}

to fetch tags of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#fetch_tags CloudGcpIntegrations#fetch_tags}

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsBigTable <a name="CloudGcpIntegrationsBigTable" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

&cloudgcpintegrations.CloudGcpIntegrationsBigTable {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTable.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | the data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTable.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsComposer <a name="CloudGcpIntegrationsComposer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

&cloudgcpintegrations.CloudGcpIntegrationsComposer {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposer.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | the data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposer.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsConfig <a name="CloudGcpIntegrationsConfig" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

&cloudgcpintegrations.CloudGcpIntegrationsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	LinkedAccountId: *f64,
	AccountId: *f64,
	AlloyDb: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb,
	AppEngine: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine,
	BigQuery: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery,
	BigTable: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12.cloudGcpIntegrations.CloudGcpIntegrationsBigTable,
	Composer: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12.cloudGcpIntegrations.CloudGcpIntegrationsComposer,
	DataFlow: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow,
	DataProc: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12.cloudGcpIntegrations.CloudGcpIntegrationsDataProc,
	DataStore: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12.cloudGcpIntegrations.CloudGcpIntegrationsDataStore,
	FireBaseDatabase: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase,
	FireBaseHosting: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting,
	FireBaseStorage: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage,
	FireStore: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12.cloudGcpIntegrations.CloudGcpIntegrationsFireStore,
	Functions: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12.cloudGcpIntegrations.CloudGcpIntegrationsFunctions,
	Id: *string,
	Interconnect: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect,
	Kubernetes: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes,
	LoadBalancing: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing,
	MemCache: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12.cloudGcpIntegrations.CloudGcpIntegrationsMemCache,
	PubSub: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12.cloudGcpIntegrations.CloudGcpIntegrationsPubSub,
	Redis: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12.cloudGcpIntegrations.CloudGcpIntegrationsRedis,
	Router: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12.cloudGcpIntegrations.CloudGcpIntegrationsRouter,
	Run: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12.cloudGcpIntegrations.CloudGcpIntegrationsRun,
	Spanner: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12.cloudGcpIntegrations.CloudGcpIntegrationsSpanner,
	Sql: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12.cloudGcpIntegrations.CloudGcpIntegrationsSql,
	Storage: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12.cloudGcpIntegrations.CloudGcpIntegrationsStorage,
	VirtualMachines: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines,
	VpcAccess: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.linkedAccountId">LinkedAccountId</a></code> | <code>*f64</code> | Id of the linked gcp account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.accountId">AccountId</a></code> | <code>*f64</code> | ID of the newrelic account. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.alloyDb">AlloyDb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb">CloudGcpIntegrationsAlloyDb</a></code> | alloy_db block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.appEngine">AppEngine</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine">CloudGcpIntegrationsAppEngine</a></code> | app_engine block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.bigQuery">BigQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery">CloudGcpIntegrationsBigQuery</a></code> | big_query block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.bigTable">BigTable</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTable">CloudGcpIntegrationsBigTable</a></code> | big_table block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.composer">Composer</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposer">CloudGcpIntegrationsComposer</a></code> | composer block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.dataFlow">DataFlow</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow">CloudGcpIntegrationsDataFlow</a></code> | data_flow block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.dataProc">DataProc</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProc">CloudGcpIntegrationsDataProc</a></code> | data_proc block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.dataStore">DataStore</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStore">CloudGcpIntegrationsDataStore</a></code> | data_store block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.fireBaseDatabase">FireBaseDatabase</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase">CloudGcpIntegrationsFireBaseDatabase</a></code> | fire_base_database block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.fireBaseHosting">FireBaseHosting</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting">CloudGcpIntegrationsFireBaseHosting</a></code> | fire_base_hosting block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.fireBaseStorage">FireBaseStorage</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage">CloudGcpIntegrationsFireBaseStorage</a></code> | fire_base_storage block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.fireStore">FireStore</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStore">CloudGcpIntegrationsFireStore</a></code> | fire_store block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.functions">Functions</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctions">CloudGcpIntegrationsFunctions</a></code> | functions block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#id CloudGcpIntegrations#id}. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.interconnect">Interconnect</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect">CloudGcpIntegrationsInterconnect</a></code> | interconnect block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.kubernetes">Kubernetes</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes">CloudGcpIntegrationsKubernetes</a></code> | kubernetes block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.loadBalancing">LoadBalancing</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing">CloudGcpIntegrationsLoadBalancing</a></code> | load_balancing block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.memCache">MemCache</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCache">CloudGcpIntegrationsMemCache</a></code> | mem_cache block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.pubSub">PubSub</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub">CloudGcpIntegrationsPubSub</a></code> | pub_sub block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.redis">Redis</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedis">CloudGcpIntegrationsRedis</a></code> | redis block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.router">Router</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouter">CloudGcpIntegrationsRouter</a></code> | router block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.run">Run</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRun">CloudGcpIntegrationsRun</a></code> | run block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.spanner">Spanner</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner">CloudGcpIntegrationsSpanner</a></code> | spanner block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.sql">Sql</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSql">CloudGcpIntegrationsSql</a></code> | sql block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.storage">Storage</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage">CloudGcpIntegrationsStorage</a></code> | storage block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.virtualMachines">VirtualMachines</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines">CloudGcpIntegrationsVirtualMachines</a></code> | virtual_machines block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.vpcAccess">VpcAccess</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess">CloudGcpIntegrationsVpcAccess</a></code> | vpc_access block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LinkedAccountId`<sup>Required</sup> <a name="LinkedAccountId" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.linkedAccountId"></a>

```go
LinkedAccountId *f64
```

- *Type:* *f64

Id of the linked gcp account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#linked_account_id CloudGcpIntegrations#linked_account_id}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

ID of the newrelic account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#account_id CloudGcpIntegrations#account_id}

---

##### `AlloyDb`<sup>Optional</sup> <a name="AlloyDb" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.alloyDb"></a>

```go
AlloyDb CloudGcpIntegrationsAlloyDb
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb">CloudGcpIntegrationsAlloyDb</a>

alloy_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#alloy_db CloudGcpIntegrations#alloy_db}

---

##### `AppEngine`<sup>Optional</sup> <a name="AppEngine" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.appEngine"></a>

```go
AppEngine CloudGcpIntegrationsAppEngine
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine">CloudGcpIntegrationsAppEngine</a>

app_engine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#app_engine CloudGcpIntegrations#app_engine}

---

##### `BigQuery`<sup>Optional</sup> <a name="BigQuery" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.bigQuery"></a>

```go
BigQuery CloudGcpIntegrationsBigQuery
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery">CloudGcpIntegrationsBigQuery</a>

big_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#big_query CloudGcpIntegrations#big_query}

---

##### `BigTable`<sup>Optional</sup> <a name="BigTable" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.bigTable"></a>

```go
BigTable CloudGcpIntegrationsBigTable
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTable">CloudGcpIntegrationsBigTable</a>

big_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#big_table CloudGcpIntegrations#big_table}

---

##### `Composer`<sup>Optional</sup> <a name="Composer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.composer"></a>

```go
Composer CloudGcpIntegrationsComposer
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposer">CloudGcpIntegrationsComposer</a>

composer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#composer CloudGcpIntegrations#composer}

---

##### `DataFlow`<sup>Optional</sup> <a name="DataFlow" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.dataFlow"></a>

```go
DataFlow CloudGcpIntegrationsDataFlow
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow">CloudGcpIntegrationsDataFlow</a>

data_flow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#data_flow CloudGcpIntegrations#data_flow}

---

##### `DataProc`<sup>Optional</sup> <a name="DataProc" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.dataProc"></a>

```go
DataProc CloudGcpIntegrationsDataProc
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProc">CloudGcpIntegrationsDataProc</a>

data_proc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#data_proc CloudGcpIntegrations#data_proc}

---

##### `DataStore`<sup>Optional</sup> <a name="DataStore" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.dataStore"></a>

```go
DataStore CloudGcpIntegrationsDataStore
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStore">CloudGcpIntegrationsDataStore</a>

data_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#data_store CloudGcpIntegrations#data_store}

---

##### `FireBaseDatabase`<sup>Optional</sup> <a name="FireBaseDatabase" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.fireBaseDatabase"></a>

```go
FireBaseDatabase CloudGcpIntegrationsFireBaseDatabase
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase">CloudGcpIntegrationsFireBaseDatabase</a>

fire_base_database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#fire_base_database CloudGcpIntegrations#fire_base_database}

---

##### `FireBaseHosting`<sup>Optional</sup> <a name="FireBaseHosting" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.fireBaseHosting"></a>

```go
FireBaseHosting CloudGcpIntegrationsFireBaseHosting
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting">CloudGcpIntegrationsFireBaseHosting</a>

fire_base_hosting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#fire_base_hosting CloudGcpIntegrations#fire_base_hosting}

---

##### `FireBaseStorage`<sup>Optional</sup> <a name="FireBaseStorage" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.fireBaseStorage"></a>

```go
FireBaseStorage CloudGcpIntegrationsFireBaseStorage
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage">CloudGcpIntegrationsFireBaseStorage</a>

fire_base_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#fire_base_storage CloudGcpIntegrations#fire_base_storage}

---

##### `FireStore`<sup>Optional</sup> <a name="FireStore" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.fireStore"></a>

```go
FireStore CloudGcpIntegrationsFireStore
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStore">CloudGcpIntegrationsFireStore</a>

fire_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#fire_store CloudGcpIntegrations#fire_store}

---

##### `Functions`<sup>Optional</sup> <a name="Functions" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.functions"></a>

```go
Functions CloudGcpIntegrationsFunctions
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctions">CloudGcpIntegrationsFunctions</a>

functions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#functions CloudGcpIntegrations#functions}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#id CloudGcpIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Interconnect`<sup>Optional</sup> <a name="Interconnect" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.interconnect"></a>

```go
Interconnect CloudGcpIntegrationsInterconnect
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect">CloudGcpIntegrationsInterconnect</a>

interconnect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#interconnect CloudGcpIntegrations#interconnect}

---

##### `Kubernetes`<sup>Optional</sup> <a name="Kubernetes" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.kubernetes"></a>

```go
Kubernetes CloudGcpIntegrationsKubernetes
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes">CloudGcpIntegrationsKubernetes</a>

kubernetes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#kubernetes CloudGcpIntegrations#kubernetes}

---

##### `LoadBalancing`<sup>Optional</sup> <a name="LoadBalancing" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.loadBalancing"></a>

```go
LoadBalancing CloudGcpIntegrationsLoadBalancing
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing">CloudGcpIntegrationsLoadBalancing</a>

load_balancing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#load_balancing CloudGcpIntegrations#load_balancing}

---

##### `MemCache`<sup>Optional</sup> <a name="MemCache" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.memCache"></a>

```go
MemCache CloudGcpIntegrationsMemCache
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCache">CloudGcpIntegrationsMemCache</a>

mem_cache block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#mem_cache CloudGcpIntegrations#mem_cache}

---

##### `PubSub`<sup>Optional</sup> <a name="PubSub" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.pubSub"></a>

```go
PubSub CloudGcpIntegrationsPubSub
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub">CloudGcpIntegrationsPubSub</a>

pub_sub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#pub_sub CloudGcpIntegrations#pub_sub}

---

##### `Redis`<sup>Optional</sup> <a name="Redis" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.redis"></a>

```go
Redis CloudGcpIntegrationsRedis
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedis">CloudGcpIntegrationsRedis</a>

redis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#redis CloudGcpIntegrations#redis}

---

##### `Router`<sup>Optional</sup> <a name="Router" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.router"></a>

```go
Router CloudGcpIntegrationsRouter
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouter">CloudGcpIntegrationsRouter</a>

router block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#router CloudGcpIntegrations#router}

---

##### `Run`<sup>Optional</sup> <a name="Run" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.run"></a>

```go
Run CloudGcpIntegrationsRun
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRun">CloudGcpIntegrationsRun</a>

run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#run CloudGcpIntegrations#run}

---

##### `Spanner`<sup>Optional</sup> <a name="Spanner" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.spanner"></a>

```go
Spanner CloudGcpIntegrationsSpanner
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner">CloudGcpIntegrationsSpanner</a>

spanner block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#spanner CloudGcpIntegrations#spanner}

---

##### `Sql`<sup>Optional</sup> <a name="Sql" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.sql"></a>

```go
Sql CloudGcpIntegrationsSql
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSql">CloudGcpIntegrationsSql</a>

sql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#sql CloudGcpIntegrations#sql}

---

##### `Storage`<sup>Optional</sup> <a name="Storage" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.storage"></a>

```go
Storage CloudGcpIntegrationsStorage
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage">CloudGcpIntegrationsStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#storage CloudGcpIntegrations#storage}

---

##### `VirtualMachines`<sup>Optional</sup> <a name="VirtualMachines" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.virtualMachines"></a>

```go
VirtualMachines CloudGcpIntegrationsVirtualMachines
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines">CloudGcpIntegrationsVirtualMachines</a>

virtual_machines block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#virtual_machines CloudGcpIntegrations#virtual_machines}

---

##### `VpcAccess`<sup>Optional</sup> <a name="VpcAccess" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.vpcAccess"></a>

```go
VpcAccess CloudGcpIntegrationsVpcAccess
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess">CloudGcpIntegrationsVpcAccess</a>

vpc_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#vpc_access CloudGcpIntegrations#vpc_access}

---

### CloudGcpIntegrationsDataFlow <a name="CloudGcpIntegrationsDataFlow" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

&cloudgcpintegrations.CloudGcpIntegrationsDataFlow {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | the data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsDataProc <a name="CloudGcpIntegrationsDataProc" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProc.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

&cloudgcpintegrations.CloudGcpIntegrationsDataProc {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProc.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | the data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProc.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsDataStore <a name="CloudGcpIntegrationsDataStore" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStore.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

&cloudgcpintegrations.CloudGcpIntegrationsDataStore {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStore.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | the data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStore.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsFireBaseDatabase <a name="CloudGcpIntegrationsFireBaseDatabase" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

&cloudgcpintegrations.CloudGcpIntegrationsFireBaseDatabase {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | the data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsFireBaseHosting <a name="CloudGcpIntegrationsFireBaseHosting" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

&cloudgcpintegrations.CloudGcpIntegrationsFireBaseHosting {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | the data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsFireBaseStorage <a name="CloudGcpIntegrationsFireBaseStorage" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

&cloudgcpintegrations.CloudGcpIntegrationsFireBaseStorage {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | the data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsFireStore <a name="CloudGcpIntegrationsFireStore" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStore.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

&cloudgcpintegrations.CloudGcpIntegrationsFireStore {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStore.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | the data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStore.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsFunctions <a name="CloudGcpIntegrationsFunctions" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

&cloudgcpintegrations.CloudGcpIntegrationsFunctions {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctions.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | the data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctions.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsInterconnect <a name="CloudGcpIntegrationsInterconnect" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

&cloudgcpintegrations.CloudGcpIntegrationsInterconnect {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | the data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsKubernetes <a name="CloudGcpIntegrationsKubernetes" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

&cloudgcpintegrations.CloudGcpIntegrationsKubernetes {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | the data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsLoadBalancing <a name="CloudGcpIntegrationsLoadBalancing" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

&cloudgcpintegrations.CloudGcpIntegrationsLoadBalancing {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | the data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsMemCache <a name="CloudGcpIntegrationsMemCache" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCache"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCache.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

&cloudgcpintegrations.CloudGcpIntegrationsMemCache {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCache.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | the data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCache.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsPubSub <a name="CloudGcpIntegrationsPubSub" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

&cloudgcpintegrations.CloudGcpIntegrationsPubSub {
	FetchTags: interface{},
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub.property.fetchTags">FetchTags</a></code> | <code>interface{}</code> | to fetch tags of the resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | the data polling interval in seconds. |

---

##### `FetchTags`<sup>Optional</sup> <a name="FetchTags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub.property.fetchTags"></a>

```go
FetchTags interface{}
```

- *Type:* interface{}

to fetch tags of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#fetch_tags CloudGcpIntegrations#fetch_tags}

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsRedis <a name="CloudGcpIntegrationsRedis" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedis.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

&cloudgcpintegrations.CloudGcpIntegrationsRedis {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedis.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | the data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedis.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsRouter <a name="CloudGcpIntegrationsRouter" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

&cloudgcpintegrations.CloudGcpIntegrationsRouter {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouter.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | the data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouter.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsRun <a name="CloudGcpIntegrationsRun" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRun"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRun.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

&cloudgcpintegrations.CloudGcpIntegrationsRun {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRun.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | the data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRun.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsSpanner <a name="CloudGcpIntegrationsSpanner" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

&cloudgcpintegrations.CloudGcpIntegrationsSpanner {
	FetchTags: interface{},
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner.property.fetchTags">FetchTags</a></code> | <code>interface{}</code> | to fetch tags of the resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | the data polling interval in seconds. |

---

##### `FetchTags`<sup>Optional</sup> <a name="FetchTags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner.property.fetchTags"></a>

```go
FetchTags interface{}
```

- *Type:* interface{}

to fetch tags of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#fetch_tags CloudGcpIntegrations#fetch_tags}

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsSql <a name="CloudGcpIntegrationsSql" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSql.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

&cloudgcpintegrations.CloudGcpIntegrationsSql {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSql.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | the data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSql.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsStorage <a name="CloudGcpIntegrationsStorage" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

&cloudgcpintegrations.CloudGcpIntegrationsStorage {
	FetchTags: interface{},
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage.property.fetchTags">FetchTags</a></code> | <code>interface{}</code> | to fetch tags of the resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | the data polling interval in seconds. |

---

##### `FetchTags`<sup>Optional</sup> <a name="FetchTags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage.property.fetchTags"></a>

```go
FetchTags interface{}
```

- *Type:* interface{}

to fetch tags of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#fetch_tags CloudGcpIntegrations#fetch_tags}

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsVirtualMachines <a name="CloudGcpIntegrationsVirtualMachines" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

&cloudgcpintegrations.CloudGcpIntegrationsVirtualMachines {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | the data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsVpcAccess <a name="CloudGcpIntegrationsVpcAccess" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

&cloudgcpintegrations.CloudGcpIntegrationsVpcAccess {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | the data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudGcpIntegrationsAlloyDbOutputReference <a name="CloudGcpIntegrationsAlloyDbOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

cloudgcpintegrations.NewCloudGcpIntegrationsAlloyDbOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpIntegrationsAlloyDbOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb">CloudGcpIntegrationsAlloyDb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpIntegrationsAlloyDb
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb">CloudGcpIntegrationsAlloyDb</a>

---


### CloudGcpIntegrationsAppEngineOutputReference <a name="CloudGcpIntegrationsAppEngineOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

cloudgcpintegrations.NewCloudGcpIntegrationsAppEngineOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpIntegrationsAppEngineOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine">CloudGcpIntegrationsAppEngine</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpIntegrationsAppEngine
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine">CloudGcpIntegrationsAppEngine</a>

---


### CloudGcpIntegrationsBigQueryOutputReference <a name="CloudGcpIntegrationsBigQueryOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

cloudgcpintegrations.NewCloudGcpIntegrationsBigQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpIntegrationsBigQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.resetFetchTags">ResetFetchTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFetchTags` <a name="ResetFetchTags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.resetFetchTags"></a>

```go
func ResetFetchTags()
```

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.fetchTagsInput">FetchTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.fetchTags">FetchTags</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery">CloudGcpIntegrationsBigQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FetchTagsInput`<sup>Optional</sup> <a name="FetchTagsInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.fetchTagsInput"></a>

```go
func FetchTagsInput() interface{}
```

- *Type:* interface{}

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `FetchTags`<sup>Required</sup> <a name="FetchTags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.fetchTags"></a>

```go
func FetchTags() interface{}
```

- *Type:* interface{}

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpIntegrationsBigQuery
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery">CloudGcpIntegrationsBigQuery</a>

---


### CloudGcpIntegrationsBigTableOutputReference <a name="CloudGcpIntegrationsBigTableOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

cloudgcpintegrations.NewCloudGcpIntegrationsBigTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpIntegrationsBigTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTable">CloudGcpIntegrationsBigTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpIntegrationsBigTable
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTable">CloudGcpIntegrationsBigTable</a>

---


### CloudGcpIntegrationsComposerOutputReference <a name="CloudGcpIntegrationsComposerOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

cloudgcpintegrations.NewCloudGcpIntegrationsComposerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpIntegrationsComposerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposer">CloudGcpIntegrationsComposer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpIntegrationsComposer
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposer">CloudGcpIntegrationsComposer</a>

---


### CloudGcpIntegrationsDataFlowOutputReference <a name="CloudGcpIntegrationsDataFlowOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

cloudgcpintegrations.NewCloudGcpIntegrationsDataFlowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpIntegrationsDataFlowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow">CloudGcpIntegrationsDataFlow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpIntegrationsDataFlow
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow">CloudGcpIntegrationsDataFlow</a>

---


### CloudGcpIntegrationsDataProcOutputReference <a name="CloudGcpIntegrationsDataProcOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

cloudgcpintegrations.NewCloudGcpIntegrationsDataProcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpIntegrationsDataProcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProc">CloudGcpIntegrationsDataProc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpIntegrationsDataProc
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProc">CloudGcpIntegrationsDataProc</a>

---


### CloudGcpIntegrationsDataStoreOutputReference <a name="CloudGcpIntegrationsDataStoreOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

cloudgcpintegrations.NewCloudGcpIntegrationsDataStoreOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpIntegrationsDataStoreOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStore">CloudGcpIntegrationsDataStore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpIntegrationsDataStore
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStore">CloudGcpIntegrationsDataStore</a>

---


### CloudGcpIntegrationsFireBaseDatabaseOutputReference <a name="CloudGcpIntegrationsFireBaseDatabaseOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

cloudgcpintegrations.NewCloudGcpIntegrationsFireBaseDatabaseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpIntegrationsFireBaseDatabaseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase">CloudGcpIntegrationsFireBaseDatabase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpIntegrationsFireBaseDatabase
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase">CloudGcpIntegrationsFireBaseDatabase</a>

---


### CloudGcpIntegrationsFireBaseHostingOutputReference <a name="CloudGcpIntegrationsFireBaseHostingOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

cloudgcpintegrations.NewCloudGcpIntegrationsFireBaseHostingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpIntegrationsFireBaseHostingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting">CloudGcpIntegrationsFireBaseHosting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpIntegrationsFireBaseHosting
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting">CloudGcpIntegrationsFireBaseHosting</a>

---


### CloudGcpIntegrationsFireBaseStorageOutputReference <a name="CloudGcpIntegrationsFireBaseStorageOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

cloudgcpintegrations.NewCloudGcpIntegrationsFireBaseStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpIntegrationsFireBaseStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage">CloudGcpIntegrationsFireBaseStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpIntegrationsFireBaseStorage
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage">CloudGcpIntegrationsFireBaseStorage</a>

---


### CloudGcpIntegrationsFireStoreOutputReference <a name="CloudGcpIntegrationsFireStoreOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

cloudgcpintegrations.NewCloudGcpIntegrationsFireStoreOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpIntegrationsFireStoreOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStore">CloudGcpIntegrationsFireStore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpIntegrationsFireStore
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStore">CloudGcpIntegrationsFireStore</a>

---


### CloudGcpIntegrationsFunctionsOutputReference <a name="CloudGcpIntegrationsFunctionsOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

cloudgcpintegrations.NewCloudGcpIntegrationsFunctionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpIntegrationsFunctionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctions">CloudGcpIntegrationsFunctions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpIntegrationsFunctions
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctions">CloudGcpIntegrationsFunctions</a>

---


### CloudGcpIntegrationsInterconnectOutputReference <a name="CloudGcpIntegrationsInterconnectOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

cloudgcpintegrations.NewCloudGcpIntegrationsInterconnectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpIntegrationsInterconnectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect">CloudGcpIntegrationsInterconnect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpIntegrationsInterconnect
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect">CloudGcpIntegrationsInterconnect</a>

---


### CloudGcpIntegrationsKubernetesOutputReference <a name="CloudGcpIntegrationsKubernetesOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

cloudgcpintegrations.NewCloudGcpIntegrationsKubernetesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpIntegrationsKubernetesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes">CloudGcpIntegrationsKubernetes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpIntegrationsKubernetes
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes">CloudGcpIntegrationsKubernetes</a>

---


### CloudGcpIntegrationsLoadBalancingOutputReference <a name="CloudGcpIntegrationsLoadBalancingOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

cloudgcpintegrations.NewCloudGcpIntegrationsLoadBalancingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpIntegrationsLoadBalancingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing">CloudGcpIntegrationsLoadBalancing</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpIntegrationsLoadBalancing
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing">CloudGcpIntegrationsLoadBalancing</a>

---


### CloudGcpIntegrationsMemCacheOutputReference <a name="CloudGcpIntegrationsMemCacheOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

cloudgcpintegrations.NewCloudGcpIntegrationsMemCacheOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpIntegrationsMemCacheOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCache">CloudGcpIntegrationsMemCache</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpIntegrationsMemCache
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCache">CloudGcpIntegrationsMemCache</a>

---


### CloudGcpIntegrationsPubSubOutputReference <a name="CloudGcpIntegrationsPubSubOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

cloudgcpintegrations.NewCloudGcpIntegrationsPubSubOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpIntegrationsPubSubOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.resetFetchTags">ResetFetchTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFetchTags` <a name="ResetFetchTags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.resetFetchTags"></a>

```go
func ResetFetchTags()
```

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.fetchTagsInput">FetchTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.fetchTags">FetchTags</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub">CloudGcpIntegrationsPubSub</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FetchTagsInput`<sup>Optional</sup> <a name="FetchTagsInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.fetchTagsInput"></a>

```go
func FetchTagsInput() interface{}
```

- *Type:* interface{}

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `FetchTags`<sup>Required</sup> <a name="FetchTags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.fetchTags"></a>

```go
func FetchTags() interface{}
```

- *Type:* interface{}

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpIntegrationsPubSub
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub">CloudGcpIntegrationsPubSub</a>

---


### CloudGcpIntegrationsRedisOutputReference <a name="CloudGcpIntegrationsRedisOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

cloudgcpintegrations.NewCloudGcpIntegrationsRedisOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpIntegrationsRedisOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedis">CloudGcpIntegrationsRedis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpIntegrationsRedis
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedis">CloudGcpIntegrationsRedis</a>

---


### CloudGcpIntegrationsRouterOutputReference <a name="CloudGcpIntegrationsRouterOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

cloudgcpintegrations.NewCloudGcpIntegrationsRouterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpIntegrationsRouterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouter">CloudGcpIntegrationsRouter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpIntegrationsRouter
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouter">CloudGcpIntegrationsRouter</a>

---


### CloudGcpIntegrationsRunOutputReference <a name="CloudGcpIntegrationsRunOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

cloudgcpintegrations.NewCloudGcpIntegrationsRunOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpIntegrationsRunOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRun">CloudGcpIntegrationsRun</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpIntegrationsRun
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRun">CloudGcpIntegrationsRun</a>

---


### CloudGcpIntegrationsSpannerOutputReference <a name="CloudGcpIntegrationsSpannerOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

cloudgcpintegrations.NewCloudGcpIntegrationsSpannerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpIntegrationsSpannerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.resetFetchTags">ResetFetchTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFetchTags` <a name="ResetFetchTags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.resetFetchTags"></a>

```go
func ResetFetchTags()
```

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.fetchTagsInput">FetchTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.fetchTags">FetchTags</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner">CloudGcpIntegrationsSpanner</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FetchTagsInput`<sup>Optional</sup> <a name="FetchTagsInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.fetchTagsInput"></a>

```go
func FetchTagsInput() interface{}
```

- *Type:* interface{}

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `FetchTags`<sup>Required</sup> <a name="FetchTags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.fetchTags"></a>

```go
func FetchTags() interface{}
```

- *Type:* interface{}

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpIntegrationsSpanner
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner">CloudGcpIntegrationsSpanner</a>

---


### CloudGcpIntegrationsSqlOutputReference <a name="CloudGcpIntegrationsSqlOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

cloudgcpintegrations.NewCloudGcpIntegrationsSqlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpIntegrationsSqlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSql">CloudGcpIntegrationsSql</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpIntegrationsSql
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSql">CloudGcpIntegrationsSql</a>

---


### CloudGcpIntegrationsStorageOutputReference <a name="CloudGcpIntegrationsStorageOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

cloudgcpintegrations.NewCloudGcpIntegrationsStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpIntegrationsStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.resetFetchTags">ResetFetchTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFetchTags` <a name="ResetFetchTags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.resetFetchTags"></a>

```go
func ResetFetchTags()
```

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.fetchTagsInput">FetchTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.fetchTags">FetchTags</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage">CloudGcpIntegrationsStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FetchTagsInput`<sup>Optional</sup> <a name="FetchTagsInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.fetchTagsInput"></a>

```go
func FetchTagsInput() interface{}
```

- *Type:* interface{}

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `FetchTags`<sup>Required</sup> <a name="FetchTags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.fetchTags"></a>

```go
func FetchTags() interface{}
```

- *Type:* interface{}

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpIntegrationsStorage
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage">CloudGcpIntegrationsStorage</a>

---


### CloudGcpIntegrationsVirtualMachinesOutputReference <a name="CloudGcpIntegrationsVirtualMachinesOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

cloudgcpintegrations.NewCloudGcpIntegrationsVirtualMachinesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpIntegrationsVirtualMachinesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines">CloudGcpIntegrationsVirtualMachines</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpIntegrationsVirtualMachines
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines">CloudGcpIntegrationsVirtualMachines</a>

---


### CloudGcpIntegrationsVpcAccessOutputReference <a name="CloudGcpIntegrationsVpcAccessOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/cloudgcpintegrations"

cloudgcpintegrations.NewCloudGcpIntegrationsVpcAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGcpIntegrationsVpcAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess">CloudGcpIntegrationsVpcAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGcpIntegrationsVpcAccess
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess">CloudGcpIntegrationsVpcAccess</a>

---



