# `newrelic_notification_destination`

Refer to the Terraform Registory for docs: [`newrelic_notification_destination`](https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination).

# `notificationDestination` Submodule <a name="`notificationDestination` Submodule" id="@cdktf/provider-newrelic.notificationDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationDestination <a name="NotificationDestination" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination newrelic_notification_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new NotificationDestination(Construct Scope, string Id, NotificationDestinationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig">NotificationDestinationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig">NotificationDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putAuthBasic">PutAuthBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putAuthToken">PutAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putProperty">PutProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetActive">ResetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetAuthBasic">ResetAuthBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetAuthToken">ResetAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAuthBasic` <a name="PutAuthBasic" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putAuthBasic"></a>

```csharp
private void PutAuthBasic(NotificationDestinationAuthBasic Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putAuthBasic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic">NotificationDestinationAuthBasic</a>

---

##### `PutAuthToken` <a name="PutAuthToken" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putAuthToken"></a>

```csharp
private void PutAuthToken(NotificationDestinationAuthToken Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putAuthToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken">NotificationDestinationAuthToken</a>

---

##### `PutProperty` <a name="PutProperty" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putProperty"></a>

```csharp
private void PutProperty(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putProperty.parameter.value"></a>

- *Type:* object

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetActive` <a name="ResetActive" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetActive"></a>

```csharp
private void ResetActive()
```

##### `ResetAuthBasic` <a name="ResetAuthBasic" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetAuthBasic"></a>

```csharp
private void ResetAuthBasic()
```

##### `ResetAuthToken` <a name="ResetAuthToken" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetAuthToken"></a>

```csharp
private void ResetAuthToken()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

NotificationDestination.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

NotificationDestination.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

NotificationDestination.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.authBasic">AuthBasic</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference">NotificationDestinationAuthBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.authToken">AuthToken</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference">NotificationDestinationAuthTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.lastSent">LastSent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.property">Property</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList">NotificationDestinationPropertyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.activeInput">ActiveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.authBasicInput">AuthBasicInput</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic">NotificationDestinationAuthBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.authTokenInput">AuthTokenInput</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken">NotificationDestinationAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.propertyInput">PropertyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.active">Active</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AuthBasic`<sup>Required</sup> <a name="AuthBasic" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.authBasic"></a>

```csharp
public NotificationDestinationAuthBasicOutputReference AuthBasic { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference">NotificationDestinationAuthBasicOutputReference</a>

---

##### `AuthToken`<sup>Required</sup> <a name="AuthToken" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.authToken"></a>

```csharp
public NotificationDestinationAuthTokenOutputReference AuthToken { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference">NotificationDestinationAuthTokenOutputReference</a>

---

##### `LastSent`<sup>Required</sup> <a name="LastSent" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.lastSent"></a>

```csharp
public string LastSent { get; }
```

- *Type:* string

---

##### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.property"></a>

```csharp
public NotificationDestinationPropertyList Property { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList">NotificationDestinationPropertyList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `ActiveInput`<sup>Optional</sup> <a name="ActiveInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.activeInput"></a>

```csharp
public object ActiveInput { get; }
```

- *Type:* object

---

##### `AuthBasicInput`<sup>Optional</sup> <a name="AuthBasicInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.authBasicInput"></a>

```csharp
public NotificationDestinationAuthBasic AuthBasicInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic">NotificationDestinationAuthBasic</a>

---

##### `AuthTokenInput`<sup>Optional</sup> <a name="AuthTokenInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.authTokenInput"></a>

```csharp
public NotificationDestinationAuthToken AuthTokenInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken">NotificationDestinationAuthToken</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PropertyInput`<sup>Optional</sup> <a name="PropertyInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.propertyInput"></a>

```csharp
public object PropertyInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.active"></a>

```csharp
public object Active { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationDestinationAuthBasic <a name="NotificationDestinationAuthBasic" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new NotificationDestinationAuthBasic {
    string Password,
    string User
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#password NotificationDestination#password}. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic.property.user">User</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#user NotificationDestination#user}. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#password NotificationDestination#password}.

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic.property.user"></a>

```csharp
public string User { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#user NotificationDestination#user}.

---

### NotificationDestinationAuthToken <a name="NotificationDestinationAuthToken" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new NotificationDestinationAuthToken {
    string Token,
    string Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken.property.token">Token</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#token NotificationDestination#token}. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#prefix NotificationDestination#prefix}. |

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#token NotificationDestination#token}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#prefix NotificationDestination#prefix}.

---

### NotificationDestinationConfig <a name="NotificationDestinationConfig" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new NotificationDestinationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    object Property,
    string Type,
    double AccountId = null,
    object Active = null,
    NotificationDestinationAuthBasic AuthBasic = null,
    NotificationDestinationAuthToken AuthToken = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.name">Name</a></code> | <code>string</code> | (Required) The name of the destination. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.property">Property</a></code> | <code>object</code> | property block. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.type">Type</a></code> | <code>string</code> | (Required) The type of the destination. One of: (WEBHOOK, EMAIL, SERVICE_NOW, PAGERDUTY_ACCOUNT_INTEGRATION, PAGERDUTY_SERVICE_INTEGRATION, JIRA, SLACK, SLACK_COLLABORATION, SLACK_LEGACY, MOBILE_PUSH, EVENT_BRIDGE). |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.accountId">AccountId</a></code> | <code>double</code> | The account ID under which to put the destination. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.active">Active</a></code> | <code>object</code> | Indicates whether the destination is active. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.authBasic">AuthBasic</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic">NotificationDestinationAuthBasic</a></code> | auth_basic block. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.authToken">AuthToken</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken">NotificationDestinationAuthToken</a></code> | auth_token block. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#id NotificationDestination#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

(Required) The name of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#name NotificationDestination#name}

---

##### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.property"></a>

```csharp
public object Property { get; set; }
```

- *Type:* object

property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#property NotificationDestination#property}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

(Required) The type of the destination. One of: (WEBHOOK, EMAIL, SERVICE_NOW, PAGERDUTY_ACCOUNT_INTEGRATION, PAGERDUTY_SERVICE_INTEGRATION, JIRA, SLACK, SLACK_COLLABORATION, SLACK_LEGACY, MOBILE_PUSH, EVENT_BRIDGE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#type NotificationDestination#type}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The account ID under which to put the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#account_id NotificationDestination#account_id}

---

##### `Active`<sup>Optional</sup> <a name="Active" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.active"></a>

```csharp
public object Active { get; set; }
```

- *Type:* object

Indicates whether the destination is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#active NotificationDestination#active}

---

##### `AuthBasic`<sup>Optional</sup> <a name="AuthBasic" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.authBasic"></a>

```csharp
public NotificationDestinationAuthBasic AuthBasic { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic">NotificationDestinationAuthBasic</a>

auth_basic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#auth_basic NotificationDestination#auth_basic}

---

##### `AuthToken`<sup>Optional</sup> <a name="AuthToken" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.authToken"></a>

```csharp
public NotificationDestinationAuthToken AuthToken { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken">NotificationDestinationAuthToken</a>

auth_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#auth_token NotificationDestination#auth_token}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#id NotificationDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### NotificationDestinationProperty <a name="NotificationDestinationProperty" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new NotificationDestinationProperty {
    string Key,
    string Value,
    string DisplayValue = null,
    string Label = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty.property.key">Key</a></code> | <code>string</code> | Notification property key. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty.property.value">Value</a></code> | <code>string</code> | Notification property value. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty.property.displayValue">DisplayValue</a></code> | <code>string</code> | Notification property display key. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty.property.label">Label</a></code> | <code>string</code> | Notification property label. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Notification property key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#key NotificationDestination#key}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Notification property value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#value NotificationDestination#value}

---

##### `DisplayValue`<sup>Optional</sup> <a name="DisplayValue" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty.property.displayValue"></a>

```csharp
public string DisplayValue { get; set; }
```

- *Type:* string

Notification property display key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#display_value NotificationDestination#display_value}

---

##### `Label`<sup>Optional</sup> <a name="Label" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty.property.label"></a>

```csharp
public string Label { get; set; }
```

- *Type:* string

Notification property label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#label NotificationDestination#label}

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationDestinationAuthBasicOutputReference <a name="NotificationDestinationAuthBasicOutputReference" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new NotificationDestinationAuthBasicOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.userInput">UserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.user">User</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic">NotificationDestinationAuthBasic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.userInput"></a>

```csharp
public string UserInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.user"></a>

```csharp
public string User { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.internalValue"></a>

```csharp
public NotificationDestinationAuthBasic InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic">NotificationDestinationAuthBasic</a>

---


### NotificationDestinationAuthTokenOutputReference <a name="NotificationDestinationAuthTokenOutputReference" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new NotificationDestinationAuthTokenOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken">NotificationDestinationAuthToken</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.internalValue"></a>

```csharp
public NotificationDestinationAuthToken InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken">NotificationDestinationAuthToken</a>

---


### NotificationDestinationPropertyList <a name="NotificationDestinationPropertyList" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new NotificationDestinationPropertyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.get"></a>

```csharp
private NotificationDestinationPropertyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NotificationDestinationPropertyOutputReference <a name="NotificationDestinationPropertyOutputReference" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new NotificationDestinationPropertyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.resetDisplayValue">ResetDisplayValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.resetLabel">ResetLabel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayValue` <a name="ResetDisplayValue" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.resetDisplayValue"></a>

```csharp
private void ResetDisplayValue()
```

##### `ResetLabel` <a name="ResetLabel" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.resetLabel"></a>

```csharp
private void ResetLabel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.displayValueInput">DisplayValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.labelInput">LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.displayValue">DisplayValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayValueInput`<sup>Optional</sup> <a name="DisplayValueInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.displayValueInput"></a>

```csharp
public string DisplayValueInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.labelInput"></a>

```csharp
public string LabelInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `DisplayValue`<sup>Required</sup> <a name="DisplayValue" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.displayValue"></a>

```csharp
public string DisplayValue { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



