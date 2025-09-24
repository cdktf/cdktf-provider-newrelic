# `monitorDowntime` Submodule <a name="`monitorDowntime` Submodule" id="@cdktf/provider-newrelic.monitorDowntime"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorDowntime <a name="MonitorDowntime" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime newrelic_monitor_downtime}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.monitor_downtime.MonitorDowntime;

MonitorDowntime.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .endTime(java.lang.String)
    .mode(java.lang.String)
    .name(java.lang.String)
    .startTime(java.lang.String)
    .timeZone(java.lang.String)
//  .accountId(java.lang.Number)
//  .endRepeat(MonitorDowntimeEndRepeat)
//  .frequency(MonitorDowntimeFrequency)
//  .id(java.lang.String)
//  .maintenanceDays(java.util.List<java.lang.String>)
//  .monitorGuids(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.endTime">endTime</a></code> | <code>java.lang.String</code> | A datetime stamp signifying the end of the Monitor Downtime. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.mode">mode</a></code> | <code>java.lang.String</code> | An identifier of the type of Monitor Downtime to be created. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A name to identify the Monitor Downtime to be created. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.startTime">startTime</a></code> | <code>java.lang.String</code> | A datetime stamp signifying the start of the Monitor Downtime. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.timeZone">timeZone</a></code> | <code>java.lang.String</code> | The timezone that applies to the Monitor Downtime schedule. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.Number</code> | The ID of the New Relic account in which the Monitor Downtime shall be created. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.endRepeat">endRepeat</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a></code> | end_repeat block. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.frequency">frequency</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a></code> | frequency block. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#id MonitorDowntime#id}. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.maintenanceDays">maintenanceDays</a></code> | <code>java.util.List<java.lang.String></code> | A list of maintenance days to be included with the created weekly Monitor Downtime. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.monitorGuids">monitorGuids</a></code> | <code>java.util.List<java.lang.String></code> | A list of GUIDs of monitors, to which the created Monitor Downtime shall be applied. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.endTime"></a>

- *Type:* java.lang.String

A datetime stamp signifying the end of the Monitor Downtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#end_time MonitorDowntime#end_time}

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.mode"></a>

- *Type:* java.lang.String

An identifier of the type of Monitor Downtime to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#mode MonitorDowntime#mode}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A name to identify the Monitor Downtime to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#name MonitorDowntime#name}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.startTime"></a>

- *Type:* java.lang.String

A datetime stamp signifying the start of the Monitor Downtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#start_time MonitorDowntime#start_time}

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.timeZone"></a>

- *Type:* java.lang.String

The timezone that applies to the Monitor Downtime schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#time_zone MonitorDowntime#time_zone}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.accountId"></a>

- *Type:* java.lang.Number

The ID of the New Relic account in which the Monitor Downtime shall be created.

Defaults to the `account_id` in the provider{} configuration if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#account_id MonitorDowntime#account_id}

---

##### `endRepeat`<sup>Optional</sup> <a name="endRepeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.endRepeat"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a>

end_repeat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#end_repeat MonitorDowntime#end_repeat}

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.frequency"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a>

frequency block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#frequency MonitorDowntime#frequency}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#id MonitorDowntime#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenanceDays`<sup>Optional</sup> <a name="maintenanceDays" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.maintenanceDays"></a>

- *Type:* java.util.List<java.lang.String>

A list of maintenance days to be included with the created weekly Monitor Downtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#maintenance_days MonitorDowntime#maintenance_days}

---

##### `monitorGuids`<sup>Optional</sup> <a name="monitorGuids" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.monitorGuids"></a>

- *Type:* java.util.List<java.lang.String>

A list of GUIDs of monitors, to which the created Monitor Downtime shall be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#monitor_guids MonitorDowntime#monitor_guids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.putEndRepeat">putEndRepeat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.putFrequency">putFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetEndRepeat">resetEndRepeat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetMaintenanceDays">resetMaintenanceDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetMonitorGuids">resetMonitorGuids</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndRepeat` <a name="putEndRepeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.putEndRepeat"></a>

```java
public void putEndRepeat(MonitorDowntimeEndRepeat value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.putEndRepeat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a>

---

##### `putFrequency` <a name="putFrequency" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.putFrequency"></a>

```java
public void putFrequency(MonitorDowntimeFrequency value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.putFrequency.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetEndRepeat` <a name="resetEndRepeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetEndRepeat"></a>

```java
public void resetEndRepeat()
```

##### `resetFrequency` <a name="resetFrequency" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetFrequency"></a>

```java
public void resetFrequency()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetId"></a>

```java
public void resetId()
```

##### `resetMaintenanceDays` <a name="resetMaintenanceDays" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetMaintenanceDays"></a>

```java
public void resetMaintenanceDays()
```

##### `resetMonitorGuids` <a name="resetMonitorGuids" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetMonitorGuids"></a>

```java
public void resetMonitorGuids()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MonitorDowntime resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.monitor_downtime.MonitorDowntime;

MonitorDowntime.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.monitor_downtime.MonitorDowntime;

MonitorDowntime.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.monitor_downtime.MonitorDowntime;

MonitorDowntime.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.monitor_downtime.MonitorDowntime;

MonitorDowntime.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MonitorDowntime.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MonitorDowntime resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MonitorDowntime to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MonitorDowntime that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MonitorDowntime to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endRepeat">endRepeat</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference">MonitorDowntimeEndRepeatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.frequency">frequency</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference">MonitorDowntimeFrequencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endRepeatInput">endRepeatInput</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.frequencyInput">frequencyInput</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.maintenanceDaysInput">maintenanceDaysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.monitorGuidsInput">monitorGuidsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.maintenanceDays">maintenanceDays</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.monitorGuids">monitorGuids</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `endRepeat`<sup>Required</sup> <a name="endRepeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endRepeat"></a>

```java
public MonitorDowntimeEndRepeatOutputReference getEndRepeat();
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference">MonitorDowntimeEndRepeatOutputReference</a>

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.frequency"></a>

```java
public MonitorDowntimeFrequencyOutputReference getFrequency();
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference">MonitorDowntimeFrequencyOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.accountIdInput"></a>

```java
public java.lang.Number getAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `endRepeatInput`<sup>Optional</sup> <a name="endRepeatInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endRepeatInput"></a>

```java
public MonitorDowntimeEndRepeat getEndRepeatInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a>

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.frequencyInput"></a>

```java
public MonitorDowntimeFrequency getFrequencyInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maintenanceDaysInput`<sup>Optional</sup> <a name="maintenanceDaysInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.maintenanceDaysInput"></a>

```java
public java.util.List<java.lang.String> getMaintenanceDaysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `monitorGuidsInput`<sup>Optional</sup> <a name="monitorGuidsInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.monitorGuidsInput"></a>

```java
public java.util.List<java.lang.String> getMonitorGuidsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maintenanceDays`<sup>Required</sup> <a name="maintenanceDays" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.maintenanceDays"></a>

```java
public java.util.List<java.lang.String> getMaintenanceDays();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `monitorGuids`<sup>Required</sup> <a name="monitorGuids" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.monitorGuids"></a>

```java
public java.util.List<java.lang.String> getMonitorGuids();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorDowntimeConfig <a name="MonitorDowntimeConfig" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.monitor_downtime.MonitorDowntimeConfig;

MonitorDowntimeConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .endTime(java.lang.String)
    .mode(java.lang.String)
    .name(java.lang.String)
    .startTime(java.lang.String)
    .timeZone(java.lang.String)
//  .accountId(java.lang.Number)
//  .endRepeat(MonitorDowntimeEndRepeat)
//  .frequency(MonitorDowntimeFrequency)
//  .id(java.lang.String)
//  .maintenanceDays(java.util.List<java.lang.String>)
//  .monitorGuids(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.endTime">endTime</a></code> | <code>java.lang.String</code> | A datetime stamp signifying the end of the Monitor Downtime. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.mode">mode</a></code> | <code>java.lang.String</code> | An identifier of the type of Monitor Downtime to be created. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.name">name</a></code> | <code>java.lang.String</code> | A name to identify the Monitor Downtime to be created. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.startTime">startTime</a></code> | <code>java.lang.String</code> | A datetime stamp signifying the start of the Monitor Downtime. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | The timezone that applies to the Monitor Downtime schedule. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | The ID of the New Relic account in which the Monitor Downtime shall be created. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.endRepeat">endRepeat</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a></code> | end_repeat block. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.frequency">frequency</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a></code> | frequency block. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#id MonitorDowntime#id}. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.maintenanceDays">maintenanceDays</a></code> | <code>java.util.List<java.lang.String></code> | A list of maintenance days to be included with the created weekly Monitor Downtime. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.monitorGuids">monitorGuids</a></code> | <code>java.util.List<java.lang.String></code> | A list of GUIDs of monitors, to which the created Monitor Downtime shall be applied. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

A datetime stamp signifying the end of the Monitor Downtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#end_time MonitorDowntime#end_time}

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

An identifier of the type of Monitor Downtime to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#mode MonitorDowntime#mode}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A name to identify the Monitor Downtime to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#name MonitorDowntime#name}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

A datetime stamp signifying the start of the Monitor Downtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#start_time MonitorDowntime#start_time}

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

The timezone that applies to the Monitor Downtime schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#time_zone MonitorDowntime#time_zone}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

The ID of the New Relic account in which the Monitor Downtime shall be created.

Defaults to the `account_id` in the provider{} configuration if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#account_id MonitorDowntime#account_id}

---

##### `endRepeat`<sup>Optional</sup> <a name="endRepeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.endRepeat"></a>

```java
public MonitorDowntimeEndRepeat getEndRepeat();
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a>

end_repeat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#end_repeat MonitorDowntime#end_repeat}

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.frequency"></a>

```java
public MonitorDowntimeFrequency getFrequency();
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a>

frequency block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#frequency MonitorDowntime#frequency}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#id MonitorDowntime#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenanceDays`<sup>Optional</sup> <a name="maintenanceDays" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.maintenanceDays"></a>

```java
public java.util.List<java.lang.String> getMaintenanceDays();
```

- *Type:* java.util.List<java.lang.String>

A list of maintenance days to be included with the created weekly Monitor Downtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#maintenance_days MonitorDowntime#maintenance_days}

---

##### `monitorGuids`<sup>Optional</sup> <a name="monitorGuids" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.monitorGuids"></a>

```java
public java.util.List<java.lang.String> getMonitorGuids();
```

- *Type:* java.util.List<java.lang.String>

A list of GUIDs of monitors, to which the created Monitor Downtime shall be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#monitor_guids MonitorDowntime#monitor_guids}

---

### MonitorDowntimeEndRepeat <a name="MonitorDowntimeEndRepeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.monitor_downtime.MonitorDowntimeEndRepeat;

MonitorDowntimeEndRepeat.builder()
//  .onDate(java.lang.String)
//  .onRepeat(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat.property.onDate">onDate</a></code> | <code>java.lang.String</code> | A date, on which the Monitor Downtime's repeat cycle is expected to end. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat.property.onRepeat">onRepeat</a></code> | <code>java.lang.Number</code> | Number of repetitions after which the Monitor Downtime's repeat cycle is expected to end. |

---

##### `onDate`<sup>Optional</sup> <a name="onDate" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat.property.onDate"></a>

```java
public java.lang.String getOnDate();
```

- *Type:* java.lang.String

A date, on which the Monitor Downtime's repeat cycle is expected to end.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#on_date MonitorDowntime#on_date}

---

##### `onRepeat`<sup>Optional</sup> <a name="onRepeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat.property.onRepeat"></a>

```java
public java.lang.Number getOnRepeat();
```

- *Type:* java.lang.Number

Number of repetitions after which the Monitor Downtime's repeat cycle is expected to end.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#on_repeat MonitorDowntime#on_repeat}

---

### MonitorDowntimeFrequency <a name="MonitorDowntimeFrequency" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.monitor_downtime.MonitorDowntimeFrequency;

MonitorDowntimeFrequency.builder()
//  .daysOfMonth(java.util.List<java.lang.Number>)
//  .daysOfWeek(MonitorDowntimeFrequencyDaysOfWeek)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency.property.daysOfMonth">daysOfMonth</a></code> | <code>java.util.List<java.lang.Number></code> | A numerical list of days of a month on which the Monitor Downtime is scheduled to run. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency.property.daysOfWeek">daysOfWeek</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek">MonitorDowntimeFrequencyDaysOfWeek</a></code> | days_of_week block. |

---

##### `daysOfMonth`<sup>Optional</sup> <a name="daysOfMonth" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency.property.daysOfMonth"></a>

```java
public java.util.List<java.lang.Number> getDaysOfMonth();
```

- *Type:* java.util.List<java.lang.Number>

A numerical list of days of a month on which the Monitor Downtime is scheduled to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#days_of_month MonitorDowntime#days_of_month}

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency.property.daysOfWeek"></a>

```java
public MonitorDowntimeFrequencyDaysOfWeek getDaysOfWeek();
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek">MonitorDowntimeFrequencyDaysOfWeek</a>

days_of_week block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#days_of_week MonitorDowntime#days_of_week}

---

### MonitorDowntimeFrequencyDaysOfWeek <a name="MonitorDowntimeFrequencyDaysOfWeek" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.monitor_downtime.MonitorDowntimeFrequencyDaysOfWeek;

MonitorDowntimeFrequencyDaysOfWeek.builder()
    .ordinalDayOfMonth(java.lang.String)
    .weekDay(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek.property.ordinalDayOfMonth">ordinalDayOfMonth</a></code> | <code>java.lang.String</code> | An occurrence of the day selected within the month. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek.property.weekDay">weekDay</a></code> | <code>java.lang.String</code> | The day of the week on which the Monitor Downtime would run. |

---

##### `ordinalDayOfMonth`<sup>Required</sup> <a name="ordinalDayOfMonth" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek.property.ordinalDayOfMonth"></a>

```java
public java.lang.String getOrdinalDayOfMonth();
```

- *Type:* java.lang.String

An occurrence of the day selected within the month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#ordinal_day_of_month MonitorDowntime#ordinal_day_of_month}

---

##### `weekDay`<sup>Required</sup> <a name="weekDay" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek.property.weekDay"></a>

```java
public java.lang.String getWeekDay();
```

- *Type:* java.lang.String

The day of the week on which the Monitor Downtime would run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#week_day MonitorDowntime#week_day}

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorDowntimeEndRepeatOutputReference <a name="MonitorDowntimeEndRepeatOutputReference" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.monitor_downtime.MonitorDowntimeEndRepeatOutputReference;

new MonitorDowntimeEndRepeatOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.resetOnDate">resetOnDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.resetOnRepeat">resetOnRepeat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOnDate` <a name="resetOnDate" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.resetOnDate"></a>

```java
public void resetOnDate()
```

##### `resetOnRepeat` <a name="resetOnRepeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.resetOnRepeat"></a>

```java
public void resetOnRepeat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onDateInput">onDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onRepeatInput">onRepeatInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onDate">onDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onRepeat">onRepeat</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `onDateInput`<sup>Optional</sup> <a name="onDateInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onDateInput"></a>

```java
public java.lang.String getOnDateInput();
```

- *Type:* java.lang.String

---

##### `onRepeatInput`<sup>Optional</sup> <a name="onRepeatInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onRepeatInput"></a>

```java
public java.lang.Number getOnRepeatInput();
```

- *Type:* java.lang.Number

---

##### `onDate`<sup>Required</sup> <a name="onDate" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onDate"></a>

```java
public java.lang.String getOnDate();
```

- *Type:* java.lang.String

---

##### `onRepeat`<sup>Required</sup> <a name="onRepeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onRepeat"></a>

```java
public java.lang.Number getOnRepeat();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.internalValue"></a>

```java
public MonitorDowntimeEndRepeat getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a>

---


### MonitorDowntimeFrequencyDaysOfWeekOutputReference <a name="MonitorDowntimeFrequencyDaysOfWeekOutputReference" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.monitor_downtime.MonitorDowntimeFrequencyDaysOfWeekOutputReference;

new MonitorDowntimeFrequencyDaysOfWeekOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.ordinalDayOfMonthInput">ordinalDayOfMonthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.weekDayInput">weekDayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.ordinalDayOfMonth">ordinalDayOfMonth</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.weekDay">weekDay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek">MonitorDowntimeFrequencyDaysOfWeek</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ordinalDayOfMonthInput`<sup>Optional</sup> <a name="ordinalDayOfMonthInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.ordinalDayOfMonthInput"></a>

```java
public java.lang.String getOrdinalDayOfMonthInput();
```

- *Type:* java.lang.String

---

##### `weekDayInput`<sup>Optional</sup> <a name="weekDayInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.weekDayInput"></a>

```java
public java.lang.String getWeekDayInput();
```

- *Type:* java.lang.String

---

##### `ordinalDayOfMonth`<sup>Required</sup> <a name="ordinalDayOfMonth" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.ordinalDayOfMonth"></a>

```java
public java.lang.String getOrdinalDayOfMonth();
```

- *Type:* java.lang.String

---

##### `weekDay`<sup>Required</sup> <a name="weekDay" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.weekDay"></a>

```java
public java.lang.String getWeekDay();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.internalValue"></a>

```java
public MonitorDowntimeFrequencyDaysOfWeek getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek">MonitorDowntimeFrequencyDaysOfWeek</a>

---


### MonitorDowntimeFrequencyOutputReference <a name="MonitorDowntimeFrequencyOutputReference" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.monitor_downtime.MonitorDowntimeFrequencyOutputReference;

new MonitorDowntimeFrequencyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.putDaysOfWeek">putDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.resetDaysOfMonth">resetDaysOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDaysOfWeek` <a name="putDaysOfWeek" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.putDaysOfWeek"></a>

```java
public void putDaysOfWeek(MonitorDowntimeFrequencyDaysOfWeek value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.putDaysOfWeek.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek">MonitorDowntimeFrequencyDaysOfWeek</a>

---

##### `resetDaysOfMonth` <a name="resetDaysOfMonth" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.resetDaysOfMonth"></a>

```java
public void resetDaysOfMonth()
```

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.resetDaysOfWeek"></a>

```java
public void resetDaysOfWeek()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference">MonitorDowntimeFrequencyDaysOfWeekOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfMonthInput">daysOfMonthInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek">MonitorDowntimeFrequencyDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfMonth">daysOfMonth</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfWeek"></a>

```java
public MonitorDowntimeFrequencyDaysOfWeekOutputReference getDaysOfWeek();
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference">MonitorDowntimeFrequencyDaysOfWeekOutputReference</a>

---

##### `daysOfMonthInput`<sup>Optional</sup> <a name="daysOfMonthInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfMonthInput"></a>

```java
public java.util.List<java.lang.Number> getDaysOfMonthInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfWeekInput"></a>

```java
public MonitorDowntimeFrequencyDaysOfWeek getDaysOfWeekInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek">MonitorDowntimeFrequencyDaysOfWeek</a>

---

##### `daysOfMonth`<sup>Required</sup> <a name="daysOfMonth" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfMonth"></a>

```java
public java.util.List<java.lang.Number> getDaysOfMonth();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.internalValue"></a>

```java
public MonitorDowntimeFrequency getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a>

---



