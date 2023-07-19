# `newrelic_synthetics_cert_check_monitor`

Refer to the Terraform Registory for docs: [`newrelic_synthetics_cert_check_monitor`](https://registry.terraform.io/providers/newrelic/newrelic/3.25.2/docs/resources/synthetics_cert_check_monitor).

# `syntheticsCertCheckMonitor` Submodule <a name="`syntheticsCertCheckMonitor` Submodule" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsCertCheckMonitor <a name="SyntheticsCertCheckMonitor" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.25.2/docs/resources/synthetics_cert_check_monitor newrelic_synthetics_cert_check_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsCertCheckMonitor(Construct Scope, string Id, SyntheticsCertCheckMonitorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig">SyntheticsCertCheckMonitorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig">SyntheticsCertCheckMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.putTag">PutTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetLocationsPrivate">ResetLocationsPrivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetLocationsPublic">ResetLocationsPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTag` <a name="PutTag" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.putTag"></a>

```csharp
private void PutTag(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.putTag.parameter.value"></a>

- *Type:* object

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocationsPrivate` <a name="ResetLocationsPrivate" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetLocationsPrivate"></a>

```csharp
private void ResetLocationsPrivate()
```

##### `ResetLocationsPublic` <a name="ResetLocationsPublic" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetLocationsPublic"></a>

```csharp
private void ResetLocationsPublic()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetTag"></a>

```csharp
private void ResetTag()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

SyntheticsCertCheckMonitor.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

SyntheticsCertCheckMonitor.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

SyntheticsCertCheckMonitor.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.periodInMinutes">PeriodInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList">SyntheticsCertCheckMonitorTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.certificateExpirationInput">CertificateExpirationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.locationsPrivateInput">LocationsPrivateInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.locationsPublicInput">LocationsPublicInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.periodInput">PeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.tagInput">TagInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.certificateExpiration">CertificateExpiration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.locationsPrivate">LocationsPrivate</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.locationsPublic">LocationsPublic</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.period">Period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `PeriodInMinutes`<sup>Required</sup> <a name="PeriodInMinutes" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.periodInMinutes"></a>

```csharp
public double PeriodInMinutes { get; }
```

- *Type:* double

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.tag"></a>

```csharp
public SyntheticsCertCheckMonitorTagList Tag { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList">SyntheticsCertCheckMonitorTagList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `CertificateExpirationInput`<sup>Optional</sup> <a name="CertificateExpirationInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.certificateExpirationInput"></a>

```csharp
public double CertificateExpirationInput { get; }
```

- *Type:* double

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationsPrivateInput`<sup>Optional</sup> <a name="LocationsPrivateInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.locationsPrivateInput"></a>

```csharp
public string[] LocationsPrivateInput { get; }
```

- *Type:* string[]

---

##### `LocationsPublicInput`<sup>Optional</sup> <a name="LocationsPublicInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.locationsPublicInput"></a>

```csharp
public string[] LocationsPublicInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.periodInput"></a>

```csharp
public string PeriodInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.tagInput"></a>

```csharp
public object TagInput { get; }
```

- *Type:* object

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `CertificateExpiration`<sup>Required</sup> <a name="CertificateExpiration" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.certificateExpiration"></a>

```csharp
public double CertificateExpiration { get; }
```

- *Type:* double

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocationsPrivate`<sup>Required</sup> <a name="LocationsPrivate" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.locationsPrivate"></a>

```csharp
public string[] LocationsPrivate { get; }
```

- *Type:* string[]

---

##### `LocationsPublic`<sup>Required</sup> <a name="LocationsPublic" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.locationsPublic"></a>

```csharp
public string[] LocationsPublic { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.period"></a>

```csharp
public string Period { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsCertCheckMonitorConfig <a name="SyntheticsCertCheckMonitorConfig" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsCertCheckMonitorConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double CertificateExpiration,
    string Domain,
    string Name,
    string Period,
    string Status,
    double AccountId = null,
    string Id = null,
    string[] LocationsPrivate = null,
    string[] LocationsPublic = null,
    object Tag = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.certificateExpiration">CertificateExpiration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.25.2/docs/resources/synthetics_cert_check_monitor#certificate_expiration SyntheticsCertCheckMonitor#certificate_expiration}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.domain">Domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.25.2/docs/resources/synthetics_cert_check_monitor#domain SyntheticsCertCheckMonitor#domain}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.name">Name</a></code> | <code>string</code> | name of the cert check monitor. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.period">Period</a></code> | <code>string</code> | The interval at which this monitor should run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.status">Status</a></code> | <code>string</code> | The monitor status (i.e. ENABLED, MUTED, DISABLED). |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.accountId">AccountId</a></code> | <code>double</code> | ID of the newrelic account. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.25.2/docs/resources/synthetics_cert_check_monitor#id SyntheticsCertCheckMonitor#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.locationsPrivate">LocationsPrivate</a></code> | <code>string[]</code> | The locations in which this monitor should be run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.locationsPublic">LocationsPublic</a></code> | <code>string[]</code> | The locations in which this monitor should be run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.tag">Tag</a></code> | <code>object</code> | tag block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CertificateExpiration`<sup>Required</sup> <a name="CertificateExpiration" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.certificateExpiration"></a>

```csharp
public double CertificateExpiration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.25.2/docs/resources/synthetics_cert_check_monitor#certificate_expiration SyntheticsCertCheckMonitor#certificate_expiration}.

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.25.2/docs/resources/synthetics_cert_check_monitor#domain SyntheticsCertCheckMonitor#domain}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

name of the cert check monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.25.2/docs/resources/synthetics_cert_check_monitor#name SyntheticsCertCheckMonitor#name}

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.period"></a>

```csharp
public string Period { get; set; }
```

- *Type:* string

The interval at which this monitor should run.

Valid values are EVERY_MINUTE, EVERY_5_MINUTES, EVERY_10_MINUTES, EVERY_15_MINUTES, EVERY_30_MINUTES, EVERY_HOUR, EVERY_6_HOURS, EVERY_12_HOURS, or EVERY_DAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.25.2/docs/resources/synthetics_cert_check_monitor#period SyntheticsCertCheckMonitor#period}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

The monitor status (i.e. ENABLED, MUTED, DISABLED).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.25.2/docs/resources/synthetics_cert_check_monitor#status SyntheticsCertCheckMonitor#status}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

ID of the newrelic account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.25.2/docs/resources/synthetics_cert_check_monitor#account_id SyntheticsCertCheckMonitor#account_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.25.2/docs/resources/synthetics_cert_check_monitor#id SyntheticsCertCheckMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LocationsPrivate`<sup>Optional</sup> <a name="LocationsPrivate" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.locationsPrivate"></a>

```csharp
public string[] LocationsPrivate { get; set; }
```

- *Type:* string[]

The locations in which this monitor should be run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.25.2/docs/resources/synthetics_cert_check_monitor#locations_private SyntheticsCertCheckMonitor#locations_private}

---

##### `LocationsPublic`<sup>Optional</sup> <a name="LocationsPublic" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.locationsPublic"></a>

```csharp
public string[] LocationsPublic { get; set; }
```

- *Type:* string[]

The locations in which this monitor should be run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.25.2/docs/resources/synthetics_cert_check_monitor#locations_public SyntheticsCertCheckMonitor#locations_public}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.tag"></a>

```csharp
public object Tag { get; set; }
```

- *Type:* object

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.25.2/docs/resources/synthetics_cert_check_monitor#tag SyntheticsCertCheckMonitor#tag}

---

### SyntheticsCertCheckMonitorTag <a name="SyntheticsCertCheckMonitorTag" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsCertCheckMonitorTag {
    string Key,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag.property.key">Key</a></code> | <code>string</code> | Name of the tag key. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag.property.values">Values</a></code> | <code>string[]</code> | Values associated with the tag key. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Name of the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.25.2/docs/resources/synthetics_cert_check_monitor#key SyntheticsCertCheckMonitor#key}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Values associated with the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.25.2/docs/resources/synthetics_cert_check_monitor#values SyntheticsCertCheckMonitor#values}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsCertCheckMonitorTagList <a name="SyntheticsCertCheckMonitorTagList" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsCertCheckMonitorTagList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.get"></a>

```csharp
private SyntheticsCertCheckMonitorTagOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SyntheticsCertCheckMonitorTagOutputReference <a name="SyntheticsCertCheckMonitorTagOutputReference" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsCertCheckMonitorTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



