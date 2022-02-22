# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### AlertChannel <a name="@cdktf/provider-newrelic.AlertChannel" id="cdktfprovidernewrelicalertchannel"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel newrelic_alert_channel}.

#### Initializers <a name="@cdktf/provider-newrelic.AlertChannel.Initializer" id="cdktfprovidernewrelicalertchannelinitializer"></a>

```typescript
import { AlertChannel } from '@cdktf/provider-newrelic'

new AlertChannel(scope: Construct, id: string, config: AlertChannelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidernewrelicalertchannelparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidernewrelicalertchannelparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidernewrelicalertchannelparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-newrelic.AlertChannelConfig`](#@cdktf/provider-newrelic.AlertChannelConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannel.parameter.scope" id="cdktfprovidernewrelicalertchannelparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannel.parameter.id" id="cdktfprovidernewrelicalertchannelparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannel.parameter.config" id="cdktfprovidernewrelicalertchannelparameterconfig"></a>

- *Type:* [`@cdktf/provider-newrelic.AlertChannelConfig`](#@cdktf/provider-newrelic.AlertChannelConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`putConfig`](#cdktfprovidernewrelicalertchannelputconfig) | *No description.* |
| [`resetConfig`](#cdktfprovidernewrelicalertchannelresetconfig) | *No description.* |

---

##### `putConfig` <a name="@cdktf/provider-newrelic.AlertChannel.putConfig" id="cdktfprovidernewrelicalertchannelputconfig"></a>

```typescript
public putConfig(value: AlertChannelConfigA)
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannel.parameter.value" id="cdktfprovidernewrelicalertchannelparametervalue"></a>

- *Type:* [`@cdktf/provider-newrelic.AlertChannelConfigA`](#@cdktf/provider-newrelic.AlertChannelConfigA)

---

##### `resetConfig` <a name="@cdktf/provider-newrelic.AlertChannel.resetConfig" id="cdktfprovidernewrelicalertchannelresetconfig"></a>

```typescript
public resetConfig()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`config`](#cdktfprovidernewrelicalertchannelpropertyconfig)<span title="Required">*</span> | [`@cdktf/provider-newrelic.AlertChannelConfigAOutputReference`](#@cdktf/provider-newrelic.AlertChannelConfigAOutputReference) | *No description.* |
| [`id`](#cdktfprovidernewrelicalertchannelpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`configInput`](#cdktfprovidernewrelicalertchannelpropertyconfiginput) | [`@cdktf/provider-newrelic.AlertChannelConfigA`](#@cdktf/provider-newrelic.AlertChannelConfigA) | *No description.* |
| [`nameInput`](#cdktfprovidernewrelicalertchannelpropertynameinput) | `string` | *No description.* |
| [`typeInput`](#cdktfprovidernewrelicalertchannelpropertytypeinput) | `string` | *No description.* |
| [`name`](#cdktfprovidernewrelicalertchannelpropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`type`](#cdktfprovidernewrelicalertchannelpropertytype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannel.property.config" id="cdktfprovidernewrelicalertchannelpropertyconfig"></a>

```typescript
public readonly config: AlertChannelConfigAOutputReference;
```

- *Type:* [`@cdktf/provider-newrelic.AlertChannelConfigAOutputReference`](#@cdktf/provider-newrelic.AlertChannelConfigAOutputReference)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannel.property.id" id="cdktfprovidernewrelicalertchannelpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `configInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannel.property.configInput" id="cdktfprovidernewrelicalertchannelpropertyconfiginput"></a>

```typescript
public readonly configInput: AlertChannelConfigA;
```

- *Type:* [`@cdktf/provider-newrelic.AlertChannelConfigA`](#@cdktf/provider-newrelic.AlertChannelConfigA)

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannel.property.nameInput" id="cdktfprovidernewrelicalertchannelpropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `typeInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannel.property.typeInput" id="cdktfprovidernewrelicalertchannelpropertytypeinput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannel.property.name" id="cdktfprovidernewrelicalertchannelpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannel.property.type" id="cdktfprovidernewrelicalertchannelpropertytype"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidernewrelicalertchannelpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-newrelic.AlertChannel.property.tfResourceType" id="cdktfprovidernewrelicalertchannelpropertytfresourcetype"></a>

- *Type:* `string`

---

### AlertCondition <a name="@cdktf/provider-newrelic.AlertCondition" id="cdktfprovidernewrelicalertcondition"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition newrelic_alert_condition}.

#### Initializers <a name="@cdktf/provider-newrelic.AlertCondition.Initializer" id="cdktfprovidernewrelicalertconditioninitializer"></a>

```typescript
import { AlertCondition } from '@cdktf/provider-newrelic'

new AlertCondition(scope: Construct, id: string, config: AlertConditionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidernewrelicalertconditionparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidernewrelicalertconditionparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidernewrelicalertconditionparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-newrelic.AlertConditionConfig`](#@cdktf/provider-newrelic.AlertConditionConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertCondition.parameter.scope" id="cdktfprovidernewrelicalertconditionparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertCondition.parameter.id" id="cdktfprovidernewrelicalertconditionparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertCondition.parameter.config" id="cdktfprovidernewrelicalertconditionparameterconfig"></a>

- *Type:* [`@cdktf/provider-newrelic.AlertConditionConfig`](#@cdktf/provider-newrelic.AlertConditionConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetConditionScope`](#cdktfprovidernewrelicalertconditionresetconditionscope) | *No description.* |
| [`resetEnabled`](#cdktfprovidernewrelicalertconditionresetenabled) | *No description.* |
| [`resetGcMetric`](#cdktfprovidernewrelicalertconditionresetgcmetric) | *No description.* |
| [`resetRunbookUrl`](#cdktfprovidernewrelicalertconditionresetrunbookurl) | *No description.* |
| [`resetUserDefinedMetric`](#cdktfprovidernewrelicalertconditionresetuserdefinedmetric) | *No description.* |
| [`resetUserDefinedValueFunction`](#cdktfprovidernewrelicalertconditionresetuserdefinedvaluefunction) | *No description.* |
| [`resetViolationCloseTimer`](#cdktfprovidernewrelicalertconditionresetviolationclosetimer) | *No description.* |

---

##### `resetConditionScope` <a name="@cdktf/provider-newrelic.AlertCondition.resetConditionScope" id="cdktfprovidernewrelicalertconditionresetconditionscope"></a>

```typescript
public resetConditionScope()
```

##### `resetEnabled` <a name="@cdktf/provider-newrelic.AlertCondition.resetEnabled" id="cdktfprovidernewrelicalertconditionresetenabled"></a>

```typescript
public resetEnabled()
```

##### `resetGcMetric` <a name="@cdktf/provider-newrelic.AlertCondition.resetGcMetric" id="cdktfprovidernewrelicalertconditionresetgcmetric"></a>

```typescript
public resetGcMetric()
```

##### `resetRunbookUrl` <a name="@cdktf/provider-newrelic.AlertCondition.resetRunbookUrl" id="cdktfprovidernewrelicalertconditionresetrunbookurl"></a>

```typescript
public resetRunbookUrl()
```

##### `resetUserDefinedMetric` <a name="@cdktf/provider-newrelic.AlertCondition.resetUserDefinedMetric" id="cdktfprovidernewrelicalertconditionresetuserdefinedmetric"></a>

```typescript
public resetUserDefinedMetric()
```

##### `resetUserDefinedValueFunction` <a name="@cdktf/provider-newrelic.AlertCondition.resetUserDefinedValueFunction" id="cdktfprovidernewrelicalertconditionresetuserdefinedvaluefunction"></a>

```typescript
public resetUserDefinedValueFunction()
```

##### `resetViolationCloseTimer` <a name="@cdktf/provider-newrelic.AlertCondition.resetViolationCloseTimer" id="cdktfprovidernewrelicalertconditionresetviolationclosetimer"></a>

```typescript
public resetViolationCloseTimer()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`id`](#cdktfprovidernewrelicalertconditionpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`conditionScopeInput`](#cdktfprovidernewrelicalertconditionpropertyconditionscopeinput) | `string` | *No description.* |
| [`enabledInput`](#cdktfprovidernewrelicalertconditionpropertyenabledinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`entitiesInput`](#cdktfprovidernewrelicalertconditionpropertyentitiesinput) | `number`[] | *No description.* |
| [`gcMetricInput`](#cdktfprovidernewrelicalertconditionpropertygcmetricinput) | `string` | *No description.* |
| [`metricInput`](#cdktfprovidernewrelicalertconditionpropertymetricinput) | `string` | *No description.* |
| [`nameInput`](#cdktfprovidernewrelicalertconditionpropertynameinput) | `string` | *No description.* |
| [`policyIdInput`](#cdktfprovidernewrelicalertconditionpropertypolicyidinput) | `number` | *No description.* |
| [`runbookUrlInput`](#cdktfprovidernewrelicalertconditionpropertyrunbookurlinput) | `string` | *No description.* |
| [`termInput`](#cdktfprovidernewrelicalertconditionpropertyterminput) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.AlertConditionTerm`](#@cdktf/provider-newrelic.AlertConditionTerm)[] | *No description.* |
| [`typeInput`](#cdktfprovidernewrelicalertconditionpropertytypeinput) | `string` | *No description.* |
| [`userDefinedMetricInput`](#cdktfprovidernewrelicalertconditionpropertyuserdefinedmetricinput) | `string` | *No description.* |
| [`userDefinedValueFunctionInput`](#cdktfprovidernewrelicalertconditionpropertyuserdefinedvaluefunctioninput) | `string` | *No description.* |
| [`violationCloseTimerInput`](#cdktfprovidernewrelicalertconditionpropertyviolationclosetimerinput) | `number` | *No description.* |
| [`conditionScope`](#cdktfprovidernewrelicalertconditionpropertyconditionscope)<span title="Required">*</span> | `string` | *No description.* |
| [`enabled`](#cdktfprovidernewrelicalertconditionpropertyenabled)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`entities`](#cdktfprovidernewrelicalertconditionpropertyentities)<span title="Required">*</span> | `number`[] | *No description.* |
| [`gcMetric`](#cdktfprovidernewrelicalertconditionpropertygcmetric)<span title="Required">*</span> | `string` | *No description.* |
| [`metric`](#cdktfprovidernewrelicalertconditionpropertymetric)<span title="Required">*</span> | `string` | *No description.* |
| [`name`](#cdktfprovidernewrelicalertconditionpropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`policyId`](#cdktfprovidernewrelicalertconditionpropertypolicyid)<span title="Required">*</span> | `number` | *No description.* |
| [`runbookUrl`](#cdktfprovidernewrelicalertconditionpropertyrunbookurl)<span title="Required">*</span> | `string` | *No description.* |
| [`term`](#cdktfprovidernewrelicalertconditionpropertyterm)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.AlertConditionTerm`](#@cdktf/provider-newrelic.AlertConditionTerm)[] | *No description.* |
| [`type`](#cdktfprovidernewrelicalertconditionpropertytype)<span title="Required">*</span> | `string` | *No description.* |
| [`userDefinedMetric`](#cdktfprovidernewrelicalertconditionpropertyuserdefinedmetric)<span title="Required">*</span> | `string` | *No description.* |
| [`userDefinedValueFunction`](#cdktfprovidernewrelicalertconditionpropertyuserdefinedvaluefunction)<span title="Required">*</span> | `string` | *No description.* |
| [`violationCloseTimer`](#cdktfprovidernewrelicalertconditionpropertyviolationclosetimer)<span title="Required">*</span> | `number` | *No description.* |

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.id" id="cdktfprovidernewrelicalertconditionpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `conditionScopeInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.conditionScopeInput" id="cdktfprovidernewrelicalertconditionpropertyconditionscopeinput"></a>

```typescript
public readonly conditionScopeInput: string;
```

- *Type:* `string`

---

##### `enabledInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.enabledInput" id="cdktfprovidernewrelicalertconditionpropertyenabledinput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `entitiesInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.entitiesInput" id="cdktfprovidernewrelicalertconditionpropertyentitiesinput"></a>

```typescript
public readonly entitiesInput: number[];
```

- *Type:* `number`[]

---

##### `gcMetricInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.gcMetricInput" id="cdktfprovidernewrelicalertconditionpropertygcmetricinput"></a>

```typescript
public readonly gcMetricInput: string;
```

- *Type:* `string`

---

##### `metricInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.metricInput" id="cdktfprovidernewrelicalertconditionpropertymetricinput"></a>

```typescript
public readonly metricInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.nameInput" id="cdktfprovidernewrelicalertconditionpropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `policyIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.policyIdInput" id="cdktfprovidernewrelicalertconditionpropertypolicyidinput"></a>

```typescript
public readonly policyIdInput: number;
```

- *Type:* `number`

---

##### `runbookUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.runbookUrlInput" id="cdktfprovidernewrelicalertconditionpropertyrunbookurlinput"></a>

```typescript
public readonly runbookUrlInput: string;
```

- *Type:* `string`

---

##### `termInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.termInput" id="cdktfprovidernewrelicalertconditionpropertyterminput"></a>

```typescript
public readonly termInput: IResolvable | AlertConditionTerm[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.AlertConditionTerm`](#@cdktf/provider-newrelic.AlertConditionTerm)[]

---

##### `typeInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.typeInput" id="cdktfprovidernewrelicalertconditionpropertytypeinput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* `string`

---

##### `userDefinedMetricInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.userDefinedMetricInput" id="cdktfprovidernewrelicalertconditionpropertyuserdefinedmetricinput"></a>

```typescript
public readonly userDefinedMetricInput: string;
```

- *Type:* `string`

---

##### `userDefinedValueFunctionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.userDefinedValueFunctionInput" id="cdktfprovidernewrelicalertconditionpropertyuserdefinedvaluefunctioninput"></a>

```typescript
public readonly userDefinedValueFunctionInput: string;
```

- *Type:* `string`

---

##### `violationCloseTimerInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.violationCloseTimerInput" id="cdktfprovidernewrelicalertconditionpropertyviolationclosetimerinput"></a>

```typescript
public readonly violationCloseTimerInput: number;
```

- *Type:* `number`

---

##### `conditionScope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.conditionScope" id="cdktfprovidernewrelicalertconditionpropertyconditionscope"></a>

```typescript
public readonly conditionScope: string;
```

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.enabled" id="cdktfprovidernewrelicalertconditionpropertyenabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `entities`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.entities" id="cdktfprovidernewrelicalertconditionpropertyentities"></a>

```typescript
public readonly entities: number[];
```

- *Type:* `number`[]

---

##### `gcMetric`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.gcMetric" id="cdktfprovidernewrelicalertconditionpropertygcmetric"></a>

```typescript
public readonly gcMetric: string;
```

- *Type:* `string`

---

##### `metric`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.metric" id="cdktfprovidernewrelicalertconditionpropertymetric"></a>

```typescript
public readonly metric: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.name" id="cdktfprovidernewrelicalertconditionpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `policyId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.policyId" id="cdktfprovidernewrelicalertconditionpropertypolicyid"></a>

```typescript
public readonly policyId: number;
```

- *Type:* `number`

---

##### `runbookUrl`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.runbookUrl" id="cdktfprovidernewrelicalertconditionpropertyrunbookurl"></a>

```typescript
public readonly runbookUrl: string;
```

- *Type:* `string`

---

##### `term`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.term" id="cdktfprovidernewrelicalertconditionpropertyterm"></a>

```typescript
public readonly term: IResolvable | AlertConditionTerm[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.AlertConditionTerm`](#@cdktf/provider-newrelic.AlertConditionTerm)[]

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.type" id="cdktfprovidernewrelicalertconditionpropertytype"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

##### `userDefinedMetric`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.userDefinedMetric" id="cdktfprovidernewrelicalertconditionpropertyuserdefinedmetric"></a>

```typescript
public readonly userDefinedMetric: string;
```

- *Type:* `string`

---

##### `userDefinedValueFunction`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.userDefinedValueFunction" id="cdktfprovidernewrelicalertconditionpropertyuserdefinedvaluefunction"></a>

```typescript
public readonly userDefinedValueFunction: string;
```

- *Type:* `string`

---

##### `violationCloseTimer`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.violationCloseTimer" id="cdktfprovidernewrelicalertconditionpropertyviolationclosetimer"></a>

```typescript
public readonly violationCloseTimer: number;
```

- *Type:* `number`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidernewrelicalertconditionpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-newrelic.AlertCondition.property.tfResourceType" id="cdktfprovidernewrelicalertconditionpropertytfresourcetype"></a>

- *Type:* `string`

---

### AlertMutingRule <a name="@cdktf/provider-newrelic.AlertMutingRule" id="cdktfprovidernewrelicalertmutingrule"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule newrelic_alert_muting_rule}.

#### Initializers <a name="@cdktf/provider-newrelic.AlertMutingRule.Initializer" id="cdktfprovidernewrelicalertmutingruleinitializer"></a>

```typescript
import { AlertMutingRule } from '@cdktf/provider-newrelic'

new AlertMutingRule(scope: Construct, id: string, config: AlertMutingRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidernewrelicalertmutingruleparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidernewrelicalertmutingruleparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidernewrelicalertmutingruleparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-newrelic.AlertMutingRuleConfig`](#@cdktf/provider-newrelic.AlertMutingRuleConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRule.parameter.scope" id="cdktfprovidernewrelicalertmutingruleparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRule.parameter.id" id="cdktfprovidernewrelicalertmutingruleparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRule.parameter.config" id="cdktfprovidernewrelicalertmutingruleparameterconfig"></a>

- *Type:* [`@cdktf/provider-newrelic.AlertMutingRuleConfig`](#@cdktf/provider-newrelic.AlertMutingRuleConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`putCondition`](#cdktfprovidernewrelicalertmutingruleputcondition) | *No description.* |
| [`putSchedule`](#cdktfprovidernewrelicalertmutingruleputschedule) | *No description.* |
| [`resetAccountId`](#cdktfprovidernewrelicalertmutingruleresetaccountid) | *No description.* |
| [`resetDescription`](#cdktfprovidernewrelicalertmutingruleresetdescription) | *No description.* |
| [`resetSchedule`](#cdktfprovidernewrelicalertmutingruleresetschedule) | *No description.* |

---

##### `putCondition` <a name="@cdktf/provider-newrelic.AlertMutingRule.putCondition" id="cdktfprovidernewrelicalertmutingruleputcondition"></a>

```typescript
public putCondition(value: AlertMutingRuleCondition)
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRule.parameter.value" id="cdktfprovidernewrelicalertmutingruleparametervalue"></a>

- *Type:* [`@cdktf/provider-newrelic.AlertMutingRuleCondition`](#@cdktf/provider-newrelic.AlertMutingRuleCondition)

---

##### `putSchedule` <a name="@cdktf/provider-newrelic.AlertMutingRule.putSchedule" id="cdktfprovidernewrelicalertmutingruleputschedule"></a>

```typescript
public putSchedule(value: AlertMutingRuleSchedule)
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRule.parameter.value" id="cdktfprovidernewrelicalertmutingruleparametervalue"></a>

- *Type:* [`@cdktf/provider-newrelic.AlertMutingRuleSchedule`](#@cdktf/provider-newrelic.AlertMutingRuleSchedule)

---

##### `resetAccountId` <a name="@cdktf/provider-newrelic.AlertMutingRule.resetAccountId" id="cdktfprovidernewrelicalertmutingruleresetaccountid"></a>

```typescript
public resetAccountId()
```

##### `resetDescription` <a name="@cdktf/provider-newrelic.AlertMutingRule.resetDescription" id="cdktfprovidernewrelicalertmutingruleresetdescription"></a>

```typescript
public resetDescription()
```

##### `resetSchedule` <a name="@cdktf/provider-newrelic.AlertMutingRule.resetSchedule" id="cdktfprovidernewrelicalertmutingruleresetschedule"></a>

```typescript
public resetSchedule()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`condition`](#cdktfprovidernewrelicalertmutingrulepropertycondition)<span title="Required">*</span> | [`@cdktf/provider-newrelic.AlertMutingRuleConditionOutputReference`](#@cdktf/provider-newrelic.AlertMutingRuleConditionOutputReference) | *No description.* |
| [`id`](#cdktfprovidernewrelicalertmutingrulepropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`schedule`](#cdktfprovidernewrelicalertmutingrulepropertyschedule)<span title="Required">*</span> | [`@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference`](#@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference) | *No description.* |
| [`accountIdInput`](#cdktfprovidernewrelicalertmutingrulepropertyaccountidinput) | `number` | *No description.* |
| [`conditionInput`](#cdktfprovidernewrelicalertmutingrulepropertyconditioninput) | [`@cdktf/provider-newrelic.AlertMutingRuleCondition`](#@cdktf/provider-newrelic.AlertMutingRuleCondition) | *No description.* |
| [`descriptionInput`](#cdktfprovidernewrelicalertmutingrulepropertydescriptioninput) | `string` | *No description.* |
| [`enabledInput`](#cdktfprovidernewrelicalertmutingrulepropertyenabledinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`nameInput`](#cdktfprovidernewrelicalertmutingrulepropertynameinput) | `string` | *No description.* |
| [`scheduleInput`](#cdktfprovidernewrelicalertmutingrulepropertyscheduleinput) | [`@cdktf/provider-newrelic.AlertMutingRuleSchedule`](#@cdktf/provider-newrelic.AlertMutingRuleSchedule) | *No description.* |
| [`accountId`](#cdktfprovidernewrelicalertmutingrulepropertyaccountid)<span title="Required">*</span> | `number` | *No description.* |
| [`description`](#cdktfprovidernewrelicalertmutingrulepropertydescription)<span title="Required">*</span> | `string` | *No description.* |
| [`enabled`](#cdktfprovidernewrelicalertmutingrulepropertyenabled)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`name`](#cdktfprovidernewrelicalertmutingrulepropertyname)<span title="Required">*</span> | `string` | *No description.* |

---

##### `condition`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRule.property.condition" id="cdktfprovidernewrelicalertmutingrulepropertycondition"></a>

```typescript
public readonly condition: AlertMutingRuleConditionOutputReference;
```

- *Type:* [`@cdktf/provider-newrelic.AlertMutingRuleConditionOutputReference`](#@cdktf/provider-newrelic.AlertMutingRuleConditionOutputReference)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRule.property.id" id="cdktfprovidernewrelicalertmutingrulepropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `schedule`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRule.property.schedule" id="cdktfprovidernewrelicalertmutingrulepropertyschedule"></a>

```typescript
public readonly schedule: AlertMutingRuleScheduleOutputReference;
```

- *Type:* [`@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference`](#@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference)

---

##### `accountIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRule.property.accountIdInput" id="cdktfprovidernewrelicalertmutingrulepropertyaccountidinput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* `number`

---

##### `conditionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRule.property.conditionInput" id="cdktfprovidernewrelicalertmutingrulepropertyconditioninput"></a>

```typescript
public readonly conditionInput: AlertMutingRuleCondition;
```

- *Type:* [`@cdktf/provider-newrelic.AlertMutingRuleCondition`](#@cdktf/provider-newrelic.AlertMutingRuleCondition)

---

##### `descriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRule.property.descriptionInput" id="cdktfprovidernewrelicalertmutingrulepropertydescriptioninput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* `string`

---

##### `enabledInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRule.property.enabledInput" id="cdktfprovidernewrelicalertmutingrulepropertyenabledinput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRule.property.nameInput" id="cdktfprovidernewrelicalertmutingrulepropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `scheduleInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRule.property.scheduleInput" id="cdktfprovidernewrelicalertmutingrulepropertyscheduleinput"></a>

```typescript
public readonly scheduleInput: AlertMutingRuleSchedule;
```

- *Type:* [`@cdktf/provider-newrelic.AlertMutingRuleSchedule`](#@cdktf/provider-newrelic.AlertMutingRuleSchedule)

---

##### `accountId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRule.property.accountId" id="cdktfprovidernewrelicalertmutingrulepropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

---

##### `description`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRule.property.description" id="cdktfprovidernewrelicalertmutingrulepropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRule.property.enabled" id="cdktfprovidernewrelicalertmutingrulepropertyenabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRule.property.name" id="cdktfprovidernewrelicalertmutingrulepropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidernewrelicalertmutingrulepropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-newrelic.AlertMutingRule.property.tfResourceType" id="cdktfprovidernewrelicalertmutingrulepropertytfresourcetype"></a>

- *Type:* `string`

---

### AlertPolicy <a name="@cdktf/provider-newrelic.AlertPolicy" id="cdktfprovidernewrelicalertpolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/alert_policy newrelic_alert_policy}.

#### Initializers <a name="@cdktf/provider-newrelic.AlertPolicy.Initializer" id="cdktfprovidernewrelicalertpolicyinitializer"></a>

```typescript
import { AlertPolicy } from '@cdktf/provider-newrelic'

new AlertPolicy(scope: Construct, id: string, config: AlertPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidernewrelicalertpolicyparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidernewrelicalertpolicyparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidernewrelicalertpolicyparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-newrelic.AlertPolicyConfig`](#@cdktf/provider-newrelic.AlertPolicyConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertPolicy.parameter.scope" id="cdktfprovidernewrelicalertpolicyparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertPolicy.parameter.id" id="cdktfprovidernewrelicalertpolicyparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertPolicy.parameter.config" id="cdktfprovidernewrelicalertpolicyparameterconfig"></a>

- *Type:* [`@cdktf/provider-newrelic.AlertPolicyConfig`](#@cdktf/provider-newrelic.AlertPolicyConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetAccountId`](#cdktfprovidernewrelicalertpolicyresetaccountid) | *No description.* |
| [`resetChannelIds`](#cdktfprovidernewrelicalertpolicyresetchannelids) | *No description.* |
| [`resetIncidentPreference`](#cdktfprovidernewrelicalertpolicyresetincidentpreference) | *No description.* |

---

##### `resetAccountId` <a name="@cdktf/provider-newrelic.AlertPolicy.resetAccountId" id="cdktfprovidernewrelicalertpolicyresetaccountid"></a>

```typescript
public resetAccountId()
```

##### `resetChannelIds` <a name="@cdktf/provider-newrelic.AlertPolicy.resetChannelIds" id="cdktfprovidernewrelicalertpolicyresetchannelids"></a>

```typescript
public resetChannelIds()
```

##### `resetIncidentPreference` <a name="@cdktf/provider-newrelic.AlertPolicy.resetIncidentPreference" id="cdktfprovidernewrelicalertpolicyresetincidentpreference"></a>

```typescript
public resetIncidentPreference()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`id`](#cdktfprovidernewrelicalertpolicypropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`accountIdInput`](#cdktfprovidernewrelicalertpolicypropertyaccountidinput) | `number` | *No description.* |
| [`channelIdsInput`](#cdktfprovidernewrelicalertpolicypropertychannelidsinput) | `number`[] | *No description.* |
| [`incidentPreferenceInput`](#cdktfprovidernewrelicalertpolicypropertyincidentpreferenceinput) | `string` | *No description.* |
| [`nameInput`](#cdktfprovidernewrelicalertpolicypropertynameinput) | `string` | *No description.* |
| [`accountId`](#cdktfprovidernewrelicalertpolicypropertyaccountid)<span title="Required">*</span> | `number` | *No description.* |
| [`channelIds`](#cdktfprovidernewrelicalertpolicypropertychannelids)<span title="Required">*</span> | `number`[] | *No description.* |
| [`incidentPreference`](#cdktfprovidernewrelicalertpolicypropertyincidentpreference)<span title="Required">*</span> | `string` | *No description.* |
| [`name`](#cdktfprovidernewrelicalertpolicypropertyname)<span title="Required">*</span> | `string` | *No description.* |

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertPolicy.property.id" id="cdktfprovidernewrelicalertpolicypropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `accountIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicy.property.accountIdInput" id="cdktfprovidernewrelicalertpolicypropertyaccountidinput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* `number`

---

##### `channelIdsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicy.property.channelIdsInput" id="cdktfprovidernewrelicalertpolicypropertychannelidsinput"></a>

```typescript
public readonly channelIdsInput: number[];
```

- *Type:* `number`[]

---

##### `incidentPreferenceInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicy.property.incidentPreferenceInput" id="cdktfprovidernewrelicalertpolicypropertyincidentpreferenceinput"></a>

```typescript
public readonly incidentPreferenceInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicy.property.nameInput" id="cdktfprovidernewrelicalertpolicypropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `accountId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertPolicy.property.accountId" id="cdktfprovidernewrelicalertpolicypropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

---

##### `channelIds`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertPolicy.property.channelIds" id="cdktfprovidernewrelicalertpolicypropertychannelids"></a>

```typescript
public readonly channelIds: number[];
```

- *Type:* `number`[]

---

##### `incidentPreference`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertPolicy.property.incidentPreference" id="cdktfprovidernewrelicalertpolicypropertyincidentpreference"></a>

```typescript
public readonly incidentPreference: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertPolicy.property.name" id="cdktfprovidernewrelicalertpolicypropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidernewrelicalertpolicypropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-newrelic.AlertPolicy.property.tfResourceType" id="cdktfprovidernewrelicalertpolicypropertytfresourcetype"></a>

- *Type:* `string`

---

### AlertPolicyChannel <a name="@cdktf/provider-newrelic.AlertPolicyChannel" id="cdktfprovidernewrelicalertpolicychannel"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/alert_policy_channel newrelic_alert_policy_channel}.

#### Initializers <a name="@cdktf/provider-newrelic.AlertPolicyChannel.Initializer" id="cdktfprovidernewrelicalertpolicychannelinitializer"></a>

```typescript
import { AlertPolicyChannel } from '@cdktf/provider-newrelic'

new AlertPolicyChannel(scope: Construct, id: string, config: AlertPolicyChannelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidernewrelicalertpolicychannelparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidernewrelicalertpolicychannelparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidernewrelicalertpolicychannelparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-newrelic.AlertPolicyChannelConfig`](#@cdktf/provider-newrelic.AlertPolicyChannelConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertPolicyChannel.parameter.scope" id="cdktfprovidernewrelicalertpolicychannelparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertPolicyChannel.parameter.id" id="cdktfprovidernewrelicalertpolicychannelparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertPolicyChannel.parameter.config" id="cdktfprovidernewrelicalertpolicychannelparameterconfig"></a>

- *Type:* [`@cdktf/provider-newrelic.AlertPolicyChannelConfig`](#@cdktf/provider-newrelic.AlertPolicyChannelConfig)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`id`](#cdktfprovidernewrelicalertpolicychannelpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`channelIdsInput`](#cdktfprovidernewrelicalertpolicychannelpropertychannelidsinput) | `number`[] | *No description.* |
| [`policyIdInput`](#cdktfprovidernewrelicalertpolicychannelpropertypolicyidinput) | `number` | *No description.* |
| [`channelIds`](#cdktfprovidernewrelicalertpolicychannelpropertychannelids)<span title="Required">*</span> | `number`[] | *No description.* |
| [`policyId`](#cdktfprovidernewrelicalertpolicychannelpropertypolicyid)<span title="Required">*</span> | `number` | *No description.* |

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertPolicyChannel.property.id" id="cdktfprovidernewrelicalertpolicychannelpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `channelIdsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicyChannel.property.channelIdsInput" id="cdktfprovidernewrelicalertpolicychannelpropertychannelidsinput"></a>

```typescript
public readonly channelIdsInput: number[];
```

- *Type:* `number`[]

---

##### `policyIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicyChannel.property.policyIdInput" id="cdktfprovidernewrelicalertpolicychannelpropertypolicyidinput"></a>

```typescript
public readonly policyIdInput: number;
```

- *Type:* `number`

---

##### `channelIds`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertPolicyChannel.property.channelIds" id="cdktfprovidernewrelicalertpolicychannelpropertychannelids"></a>

```typescript
public readonly channelIds: number[];
```

- *Type:* `number`[]

---

##### `policyId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertPolicyChannel.property.policyId" id="cdktfprovidernewrelicalertpolicychannelpropertypolicyid"></a>

```typescript
public readonly policyId: number;
```

- *Type:* `number`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidernewrelicalertpolicychannelpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-newrelic.AlertPolicyChannel.property.tfResourceType" id="cdktfprovidernewrelicalertpolicychannelpropertytfresourcetype"></a>

- *Type:* `string`

---

### ApiAccessKey <a name="@cdktf/provider-newrelic.ApiAccessKey" id="cdktfprovidernewrelicapiaccesskey"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/api_access_key newrelic_api_access_key}.

#### Initializers <a name="@cdktf/provider-newrelic.ApiAccessKey.Initializer" id="cdktfprovidernewrelicapiaccesskeyinitializer"></a>

```typescript
import { ApiAccessKey } from '@cdktf/provider-newrelic'

new ApiAccessKey(scope: Construct, id: string, config: ApiAccessKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidernewrelicapiaccesskeyparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidernewrelicapiaccesskeyparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidernewrelicapiaccesskeyparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-newrelic.ApiAccessKeyConfig`](#@cdktf/provider-newrelic.ApiAccessKeyConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApiAccessKey.parameter.scope" id="cdktfprovidernewrelicapiaccesskeyparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApiAccessKey.parameter.id" id="cdktfprovidernewrelicapiaccesskeyparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApiAccessKey.parameter.config" id="cdktfprovidernewrelicapiaccesskeyparameterconfig"></a>

- *Type:* [`@cdktf/provider-newrelic.ApiAccessKeyConfig`](#@cdktf/provider-newrelic.ApiAccessKeyConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetIngestType`](#cdktfprovidernewrelicapiaccesskeyresetingesttype) | *No description.* |
| [`resetName`](#cdktfprovidernewrelicapiaccesskeyresetname) | *No description.* |
| [`resetNotes`](#cdktfprovidernewrelicapiaccesskeyresetnotes) | *No description.* |
| [`resetUserId`](#cdktfprovidernewrelicapiaccesskeyresetuserid) | *No description.* |

---

##### `resetIngestType` <a name="@cdktf/provider-newrelic.ApiAccessKey.resetIngestType" id="cdktfprovidernewrelicapiaccesskeyresetingesttype"></a>

```typescript
public resetIngestType()
```

##### `resetName` <a name="@cdktf/provider-newrelic.ApiAccessKey.resetName" id="cdktfprovidernewrelicapiaccesskeyresetname"></a>

```typescript
public resetName()
```

##### `resetNotes` <a name="@cdktf/provider-newrelic.ApiAccessKey.resetNotes" id="cdktfprovidernewrelicapiaccesskeyresetnotes"></a>

```typescript
public resetNotes()
```

##### `resetUserId` <a name="@cdktf/provider-newrelic.ApiAccessKey.resetUserId" id="cdktfprovidernewrelicapiaccesskeyresetuserid"></a>

```typescript
public resetUserId()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`id`](#cdktfprovidernewrelicapiaccesskeypropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`key`](#cdktfprovidernewrelicapiaccesskeypropertykey)<span title="Required">*</span> | `string` | *No description.* |
| [`accountIdInput`](#cdktfprovidernewrelicapiaccesskeypropertyaccountidinput) | `number` | *No description.* |
| [`ingestTypeInput`](#cdktfprovidernewrelicapiaccesskeypropertyingesttypeinput) | `string` | *No description.* |
| [`keyTypeInput`](#cdktfprovidernewrelicapiaccesskeypropertykeytypeinput) | `string` | *No description.* |
| [`nameInput`](#cdktfprovidernewrelicapiaccesskeypropertynameinput) | `string` | *No description.* |
| [`notesInput`](#cdktfprovidernewrelicapiaccesskeypropertynotesinput) | `string` | *No description.* |
| [`userIdInput`](#cdktfprovidernewrelicapiaccesskeypropertyuseridinput) | `number` | *No description.* |
| [`accountId`](#cdktfprovidernewrelicapiaccesskeypropertyaccountid)<span title="Required">*</span> | `number` | *No description.* |
| [`ingestType`](#cdktfprovidernewrelicapiaccesskeypropertyingesttype)<span title="Required">*</span> | `string` | *No description.* |
| [`keyType`](#cdktfprovidernewrelicapiaccesskeypropertykeytype)<span title="Required">*</span> | `string` | *No description.* |
| [`name`](#cdktfprovidernewrelicapiaccesskeypropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`notes`](#cdktfprovidernewrelicapiaccesskeypropertynotes)<span title="Required">*</span> | `string` | *No description.* |
| [`userId`](#cdktfprovidernewrelicapiaccesskeypropertyuserid)<span title="Required">*</span> | `number` | *No description.* |

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApiAccessKey.property.id" id="cdktfprovidernewrelicapiaccesskeypropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApiAccessKey.property.key" id="cdktfprovidernewrelicapiaccesskeypropertykey"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

---

##### `accountIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApiAccessKey.property.accountIdInput" id="cdktfprovidernewrelicapiaccesskeypropertyaccountidinput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* `number`

---

##### `ingestTypeInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApiAccessKey.property.ingestTypeInput" id="cdktfprovidernewrelicapiaccesskeypropertyingesttypeinput"></a>

```typescript
public readonly ingestTypeInput: string;
```

- *Type:* `string`

---

##### `keyTypeInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApiAccessKey.property.keyTypeInput" id="cdktfprovidernewrelicapiaccesskeypropertykeytypeinput"></a>

```typescript
public readonly keyTypeInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApiAccessKey.property.nameInput" id="cdktfprovidernewrelicapiaccesskeypropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `notesInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApiAccessKey.property.notesInput" id="cdktfprovidernewrelicapiaccesskeypropertynotesinput"></a>

```typescript
public readonly notesInput: string;
```

- *Type:* `string`

---

##### `userIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApiAccessKey.property.userIdInput" id="cdktfprovidernewrelicapiaccesskeypropertyuseridinput"></a>

```typescript
public readonly userIdInput: number;
```

- *Type:* `number`

---

##### `accountId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApiAccessKey.property.accountId" id="cdktfprovidernewrelicapiaccesskeypropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

---

##### `ingestType`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApiAccessKey.property.ingestType" id="cdktfprovidernewrelicapiaccesskeypropertyingesttype"></a>

```typescript
public readonly ingestType: string;
```

- *Type:* `string`

---

##### `keyType`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApiAccessKey.property.keyType" id="cdktfprovidernewrelicapiaccesskeypropertykeytype"></a>

```typescript
public readonly keyType: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApiAccessKey.property.name" id="cdktfprovidernewrelicapiaccesskeypropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `notes`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApiAccessKey.property.notes" id="cdktfprovidernewrelicapiaccesskeypropertynotes"></a>

```typescript
public readonly notes: string;
```

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApiAccessKey.property.userId" id="cdktfprovidernewrelicapiaccesskeypropertyuserid"></a>

```typescript
public readonly userId: number;
```

- *Type:* `number`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidernewrelicapiaccesskeypropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-newrelic.ApiAccessKey.property.tfResourceType" id="cdktfprovidernewrelicapiaccesskeypropertytfresourcetype"></a>

- *Type:* `string`

---

### ApplicationSettings <a name="@cdktf/provider-newrelic.ApplicationSettings" id="cdktfprovidernewrelicapplicationsettings"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/application_settings newrelic_application_settings}.

#### Initializers <a name="@cdktf/provider-newrelic.ApplicationSettings.Initializer" id="cdktfprovidernewrelicapplicationsettingsinitializer"></a>

```typescript
import { ApplicationSettings } from '@cdktf/provider-newrelic'

new ApplicationSettings(scope: Construct, id: string, config: ApplicationSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidernewrelicapplicationsettingsparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidernewrelicapplicationsettingsparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidernewrelicapplicationsettingsparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-newrelic.ApplicationSettingsConfig`](#@cdktf/provider-newrelic.ApplicationSettingsConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApplicationSettings.parameter.scope" id="cdktfprovidernewrelicapplicationsettingsparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApplicationSettings.parameter.id" id="cdktfprovidernewrelicapplicationsettingsparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApplicationSettings.parameter.config" id="cdktfprovidernewrelicapplicationsettingsparameterconfig"></a>

- *Type:* [`@cdktf/provider-newrelic.ApplicationSettingsConfig`](#@cdktf/provider-newrelic.ApplicationSettingsConfig)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`id`](#cdktfprovidernewrelicapplicationsettingspropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`appApdexThresholdInput`](#cdktfprovidernewrelicapplicationsettingspropertyappapdexthresholdinput) | `number` | *No description.* |
| [`enableRealUserMonitoringInput`](#cdktfprovidernewrelicapplicationsettingspropertyenablerealusermonitoringinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`endUserApdexThresholdInput`](#cdktfprovidernewrelicapplicationsettingspropertyenduserapdexthresholdinput) | `number` | *No description.* |
| [`nameInput`](#cdktfprovidernewrelicapplicationsettingspropertynameinput) | `string` | *No description.* |
| [`appApdexThreshold`](#cdktfprovidernewrelicapplicationsettingspropertyappapdexthreshold)<span title="Required">*</span> | `number` | *No description.* |
| [`enableRealUserMonitoring`](#cdktfprovidernewrelicapplicationsettingspropertyenablerealusermonitoring)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`endUserApdexThreshold`](#cdktfprovidernewrelicapplicationsettingspropertyenduserapdexthreshold)<span title="Required">*</span> | `number` | *No description.* |
| [`name`](#cdktfprovidernewrelicapplicationsettingspropertyname)<span title="Required">*</span> | `string` | *No description.* |

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApplicationSettings.property.id" id="cdktfprovidernewrelicapplicationsettingspropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `appApdexThresholdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApplicationSettings.property.appApdexThresholdInput" id="cdktfprovidernewrelicapplicationsettingspropertyappapdexthresholdinput"></a>

```typescript
public readonly appApdexThresholdInput: number;
```

- *Type:* `number`

---

##### `enableRealUserMonitoringInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApplicationSettings.property.enableRealUserMonitoringInput" id="cdktfprovidernewrelicapplicationsettingspropertyenablerealusermonitoringinput"></a>

```typescript
public readonly enableRealUserMonitoringInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `endUserApdexThresholdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApplicationSettings.property.endUserApdexThresholdInput" id="cdktfprovidernewrelicapplicationsettingspropertyenduserapdexthresholdinput"></a>

```typescript
public readonly endUserApdexThresholdInput: number;
```

- *Type:* `number`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApplicationSettings.property.nameInput" id="cdktfprovidernewrelicapplicationsettingspropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `appApdexThreshold`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApplicationSettings.property.appApdexThreshold" id="cdktfprovidernewrelicapplicationsettingspropertyappapdexthreshold"></a>

```typescript
public readonly appApdexThreshold: number;
```

- *Type:* `number`

---

##### `enableRealUserMonitoring`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApplicationSettings.property.enableRealUserMonitoring" id="cdktfprovidernewrelicapplicationsettingspropertyenablerealusermonitoring"></a>

```typescript
public readonly enableRealUserMonitoring: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `endUserApdexThreshold`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApplicationSettings.property.endUserApdexThreshold" id="cdktfprovidernewrelicapplicationsettingspropertyenduserapdexthreshold"></a>

```typescript
public readonly endUserApdexThreshold: number;
```

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApplicationSettings.property.name" id="cdktfprovidernewrelicapplicationsettingspropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidernewrelicapplicationsettingspropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-newrelic.ApplicationSettings.property.tfResourceType" id="cdktfprovidernewrelicapplicationsettingspropertytfresourcetype"></a>

- *Type:* `string`

---

### Dashboard <a name="@cdktf/provider-newrelic.Dashboard" id="cdktfprovidernewrelicdashboard"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard newrelic_dashboard}.

#### Initializers <a name="@cdktf/provider-newrelic.Dashboard.Initializer" id="cdktfprovidernewrelicdashboardinitializer"></a>

```typescript
import { Dashboard } from '@cdktf/provider-newrelic'

new Dashboard(scope: Construct, id: string, config: DashboardConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidernewrelicdashboardparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidernewrelicdashboardparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidernewrelicdashboardparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-newrelic.DashboardConfig`](#@cdktf/provider-newrelic.DashboardConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Dashboard.parameter.scope" id="cdktfprovidernewrelicdashboardparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Dashboard.parameter.id" id="cdktfprovidernewrelicdashboardparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Dashboard.parameter.config" id="cdktfprovidernewrelicdashboardparameterconfig"></a>

- *Type:* [`@cdktf/provider-newrelic.DashboardConfig`](#@cdktf/provider-newrelic.DashboardConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`putFilter`](#cdktfprovidernewrelicdashboardputfilter) | *No description.* |
| [`resetEditable`](#cdktfprovidernewrelicdashboardreseteditable) | *No description.* |
| [`resetFilter`](#cdktfprovidernewrelicdashboardresetfilter) | *No description.* |
| [`resetGridColumnCount`](#cdktfprovidernewrelicdashboardresetgridcolumncount) | *No description.* |
| [`resetIcon`](#cdktfprovidernewrelicdashboardreseticon) | *No description.* |
| [`resetVisibility`](#cdktfprovidernewrelicdashboardresetvisibility) | *No description.* |
| [`resetWidget`](#cdktfprovidernewrelicdashboardresetwidget) | *No description.* |

---

##### `putFilter` <a name="@cdktf/provider-newrelic.Dashboard.putFilter" id="cdktfprovidernewrelicdashboardputfilter"></a>

```typescript
public putFilter(value: DashboardFilter)
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Dashboard.parameter.value" id="cdktfprovidernewrelicdashboardparametervalue"></a>

- *Type:* [`@cdktf/provider-newrelic.DashboardFilter`](#@cdktf/provider-newrelic.DashboardFilter)

---

##### `resetEditable` <a name="@cdktf/provider-newrelic.Dashboard.resetEditable" id="cdktfprovidernewrelicdashboardreseteditable"></a>

```typescript
public resetEditable()
```

##### `resetFilter` <a name="@cdktf/provider-newrelic.Dashboard.resetFilter" id="cdktfprovidernewrelicdashboardresetfilter"></a>

```typescript
public resetFilter()
```

##### `resetGridColumnCount` <a name="@cdktf/provider-newrelic.Dashboard.resetGridColumnCount" id="cdktfprovidernewrelicdashboardresetgridcolumncount"></a>

```typescript
public resetGridColumnCount()
```

##### `resetIcon` <a name="@cdktf/provider-newrelic.Dashboard.resetIcon" id="cdktfprovidernewrelicdashboardreseticon"></a>

```typescript
public resetIcon()
```

##### `resetVisibility` <a name="@cdktf/provider-newrelic.Dashboard.resetVisibility" id="cdktfprovidernewrelicdashboardresetvisibility"></a>

```typescript
public resetVisibility()
```

##### `resetWidget` <a name="@cdktf/provider-newrelic.Dashboard.resetWidget" id="cdktfprovidernewrelicdashboardresetwidget"></a>

```typescript
public resetWidget()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`dashboardUrl`](#cdktfprovidernewrelicdashboardpropertydashboardurl)<span title="Required">*</span> | `string` | *No description.* |
| [`filter`](#cdktfprovidernewrelicdashboardpropertyfilter)<span title="Required">*</span> | [`@cdktf/provider-newrelic.DashboardFilterOutputReference`](#@cdktf/provider-newrelic.DashboardFilterOutputReference) | *No description.* |
| [`id`](#cdktfprovidernewrelicdashboardpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`editableInput`](#cdktfprovidernewrelicdashboardpropertyeditableinput) | `string` | *No description.* |
| [`filterInput`](#cdktfprovidernewrelicdashboardpropertyfilterinput) | [`@cdktf/provider-newrelic.DashboardFilter`](#@cdktf/provider-newrelic.DashboardFilter) | *No description.* |
| [`gridColumnCountInput`](#cdktfprovidernewrelicdashboardpropertygridcolumncountinput) | `number` | *No description.* |
| [`iconInput`](#cdktfprovidernewrelicdashboardpropertyiconinput) | `string` | *No description.* |
| [`titleInput`](#cdktfprovidernewrelicdashboardpropertytitleinput) | `string` | *No description.* |
| [`visibilityInput`](#cdktfprovidernewrelicdashboardpropertyvisibilityinput) | `string` | *No description.* |
| [`widgetInput`](#cdktfprovidernewrelicdashboardpropertywidgetinput) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.DashboardWidget`](#@cdktf/provider-newrelic.DashboardWidget)[] | *No description.* |
| [`editable`](#cdktfprovidernewrelicdashboardpropertyeditable)<span title="Required">*</span> | `string` | *No description.* |
| [`gridColumnCount`](#cdktfprovidernewrelicdashboardpropertygridcolumncount)<span title="Required">*</span> | `number` | *No description.* |
| [`icon`](#cdktfprovidernewrelicdashboardpropertyicon)<span title="Required">*</span> | `string` | *No description.* |
| [`title`](#cdktfprovidernewrelicdashboardpropertytitle)<span title="Required">*</span> | `string` | *No description.* |
| [`visibility`](#cdktfprovidernewrelicdashboardpropertyvisibility)<span title="Required">*</span> | `string` | *No description.* |
| [`widget`](#cdktfprovidernewrelicdashboardpropertywidget)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.DashboardWidget`](#@cdktf/provider-newrelic.DashboardWidget)[] | *No description.* |

---

##### `dashboardUrl`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Dashboard.property.dashboardUrl" id="cdktfprovidernewrelicdashboardpropertydashboardurl"></a>

```typescript
public readonly dashboardUrl: string;
```

- *Type:* `string`

---

##### `filter`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Dashboard.property.filter" id="cdktfprovidernewrelicdashboardpropertyfilter"></a>

```typescript
public readonly filter: DashboardFilterOutputReference;
```

- *Type:* [`@cdktf/provider-newrelic.DashboardFilterOutputReference`](#@cdktf/provider-newrelic.DashboardFilterOutputReference)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Dashboard.property.id" id="cdktfprovidernewrelicdashboardpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `editableInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.Dashboard.property.editableInput" id="cdktfprovidernewrelicdashboardpropertyeditableinput"></a>

```typescript
public readonly editableInput: string;
```

- *Type:* `string`

---

##### `filterInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.Dashboard.property.filterInput" id="cdktfprovidernewrelicdashboardpropertyfilterinput"></a>

```typescript
public readonly filterInput: DashboardFilter;
```

- *Type:* [`@cdktf/provider-newrelic.DashboardFilter`](#@cdktf/provider-newrelic.DashboardFilter)

---

##### `gridColumnCountInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.Dashboard.property.gridColumnCountInput" id="cdktfprovidernewrelicdashboardpropertygridcolumncountinput"></a>

```typescript
public readonly gridColumnCountInput: number;
```

- *Type:* `number`

---

##### `iconInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.Dashboard.property.iconInput" id="cdktfprovidernewrelicdashboardpropertyiconinput"></a>

```typescript
public readonly iconInput: string;
```

- *Type:* `string`

---

##### `titleInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.Dashboard.property.titleInput" id="cdktfprovidernewrelicdashboardpropertytitleinput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* `string`

---

##### `visibilityInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.Dashboard.property.visibilityInput" id="cdktfprovidernewrelicdashboardpropertyvisibilityinput"></a>

```typescript
public readonly visibilityInput: string;
```

- *Type:* `string`

---

##### `widgetInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.Dashboard.property.widgetInput" id="cdktfprovidernewrelicdashboardpropertywidgetinput"></a>

```typescript
public readonly widgetInput: IResolvable | DashboardWidget[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.DashboardWidget`](#@cdktf/provider-newrelic.DashboardWidget)[]

---

##### `editable`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Dashboard.property.editable" id="cdktfprovidernewrelicdashboardpropertyeditable"></a>

```typescript
public readonly editable: string;
```

- *Type:* `string`

---

##### `gridColumnCount`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Dashboard.property.gridColumnCount" id="cdktfprovidernewrelicdashboardpropertygridcolumncount"></a>

```typescript
public readonly gridColumnCount: number;
```

- *Type:* `number`

---

##### `icon`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Dashboard.property.icon" id="cdktfprovidernewrelicdashboardpropertyicon"></a>

```typescript
public readonly icon: string;
```

- *Type:* `string`

---

##### `title`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Dashboard.property.title" id="cdktfprovidernewrelicdashboardpropertytitle"></a>

```typescript
public readonly title: string;
```

- *Type:* `string`

---

##### `visibility`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Dashboard.property.visibility" id="cdktfprovidernewrelicdashboardpropertyvisibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* `string`

---

##### `widget`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Dashboard.property.widget" id="cdktfprovidernewrelicdashboardpropertywidget"></a>

```typescript
public readonly widget: IResolvable | DashboardWidget[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.DashboardWidget`](#@cdktf/provider-newrelic.DashboardWidget)[]

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidernewrelicdashboardpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-newrelic.Dashboard.property.tfResourceType" id="cdktfprovidernewrelicdashboardpropertytfresourcetype"></a>

- *Type:* `string`

---

### DataNewrelicAccount <a name="@cdktf/provider-newrelic.DataNewrelicAccount" id="cdktfprovidernewrelicdatanewrelicaccount"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/d/account newrelic_account}.

#### Initializers <a name="@cdktf/provider-newrelic.DataNewrelicAccount.Initializer" id="cdktfprovidernewrelicdatanewrelicaccountinitializer"></a>

```typescript
import { DataNewrelicAccount } from '@cdktf/provider-newrelic'

new DataNewrelicAccount(scope: Construct, id: string, config?: DataNewrelicAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidernewrelicdatanewrelicaccountparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidernewrelicdatanewrelicaccountparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidernewrelicdatanewrelicaccountparameterconfig) | [`@cdktf/provider-newrelic.DataNewrelicAccountConfig`](#@cdktf/provider-newrelic.DataNewrelicAccountConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAccount.parameter.scope" id="cdktfprovidernewrelicdatanewrelicaccountparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAccount.parameter.id" id="cdktfprovidernewrelicdatanewrelicaccountparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAccount.parameter.config" id="cdktfprovidernewrelicdatanewrelicaccountparameterconfig"></a>

- *Type:* [`@cdktf/provider-newrelic.DataNewrelicAccountConfig`](#@cdktf/provider-newrelic.DataNewrelicAccountConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetAccountId`](#cdktfprovidernewrelicdatanewrelicaccountresetaccountid) | *No description.* |
| [`resetName`](#cdktfprovidernewrelicdatanewrelicaccountresetname) | *No description.* |
| [`resetScope`](#cdktfprovidernewrelicdatanewrelicaccountresetscope) | *No description.* |

---

##### `resetAccountId` <a name="@cdktf/provider-newrelic.DataNewrelicAccount.resetAccountId" id="cdktfprovidernewrelicdatanewrelicaccountresetaccountid"></a>

```typescript
public resetAccountId()
```

##### `resetName` <a name="@cdktf/provider-newrelic.DataNewrelicAccount.resetName" id="cdktfprovidernewrelicdatanewrelicaccountresetname"></a>

```typescript
public resetName()
```

##### `resetScope` <a name="@cdktf/provider-newrelic.DataNewrelicAccount.resetScope" id="cdktfprovidernewrelicdatanewrelicaccountresetscope"></a>

```typescript
public resetScope()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`id`](#cdktfprovidernewrelicdatanewrelicaccountpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`accountIdInput`](#cdktfprovidernewrelicdatanewrelicaccountpropertyaccountidinput) | `number` | *No description.* |
| [`nameInput`](#cdktfprovidernewrelicdatanewrelicaccountpropertynameinput) | `string` | *No description.* |
| [`scopeInput`](#cdktfprovidernewrelicdatanewrelicaccountpropertyscopeinput) | `string` | *No description.* |
| [`accountId`](#cdktfprovidernewrelicdatanewrelicaccountpropertyaccountid)<span title="Required">*</span> | `number` | *No description.* |
| [`name`](#cdktfprovidernewrelicdatanewrelicaccountpropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`scope`](#cdktfprovidernewrelicdatanewrelicaccountpropertyscope)<span title="Required">*</span> | `string` | *No description.* |

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAccount.property.id" id="cdktfprovidernewrelicdatanewrelicaccountpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `accountIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAccount.property.accountIdInput" id="cdktfprovidernewrelicdatanewrelicaccountpropertyaccountidinput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* `number`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAccount.property.nameInput" id="cdktfprovidernewrelicdatanewrelicaccountpropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `scopeInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAccount.property.scopeInput" id="cdktfprovidernewrelicdatanewrelicaccountpropertyscopeinput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* `string`

---

##### `accountId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAccount.property.accountId" id="cdktfprovidernewrelicdatanewrelicaccountpropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAccount.property.name" id="cdktfprovidernewrelicdatanewrelicaccountpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAccount.property.scope" id="cdktfprovidernewrelicdatanewrelicaccountpropertyscope"></a>

```typescript
public readonly scope: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidernewrelicdatanewrelicaccountpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-newrelic.DataNewrelicAccount.property.tfResourceType" id="cdktfprovidernewrelicdatanewrelicaccountpropertytfresourcetype"></a>

- *Type:* `string`

---

### DataNewrelicAlertChannel <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannel" id="cdktfprovidernewrelicdatanewrelicalertchannel"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/d/alert_channel newrelic_alert_channel}.

#### Initializers <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannel.Initializer" id="cdktfprovidernewrelicdatanewrelicalertchannelinitializer"></a>

```typescript
import { DataNewrelicAlertChannel } from '@cdktf/provider-newrelic'

new DataNewrelicAlertChannel(scope: Construct, id: string, config: DataNewrelicAlertChannelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidernewrelicdatanewrelicalertchannelparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidernewrelicdatanewrelicalertchannelparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidernewrelicdatanewrelicalertchannelparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-newrelic.DataNewrelicAlertChannelConfig`](#@cdktf/provider-newrelic.DataNewrelicAlertChannelConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannel.parameter.scope" id="cdktfprovidernewrelicdatanewrelicalertchannelparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannel.parameter.id" id="cdktfprovidernewrelicdatanewrelicalertchannelparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannel.parameter.config" id="cdktfprovidernewrelicdatanewrelicalertchannelparameterconfig"></a>

- *Type:* [`@cdktf/provider-newrelic.DataNewrelicAlertChannelConfig`](#@cdktf/provider-newrelic.DataNewrelicAlertChannelConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`config`](#cdktfprovidernewrelicdatanewrelicalertchannelconfig) | *No description.* |

---

##### `config` <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannel.config" id="cdktfprovidernewrelicdatanewrelicalertchannelconfig"></a>

```typescript
public config(index: string)
```

###### `index`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannel.parameter.index" id="cdktfprovidernewrelicdatanewrelicalertchannelparameterindex"></a>

- *Type:* `string`

---


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`id`](#cdktfprovidernewrelicdatanewrelicalertchannelpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`policyIds`](#cdktfprovidernewrelicdatanewrelicalertchannelpropertypolicyids)<span title="Required">*</span> | `number`[] | *No description.* |
| [`type`](#cdktfprovidernewrelicdatanewrelicalertchannelpropertytype)<span title="Required">*</span> | `string` | *No description.* |
| [`nameInput`](#cdktfprovidernewrelicdatanewrelicalertchannelpropertynameinput) | `string` | *No description.* |
| [`name`](#cdktfprovidernewrelicdatanewrelicalertchannelpropertyname)<span title="Required">*</span> | `string` | *No description.* |

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannel.property.id" id="cdktfprovidernewrelicdatanewrelicalertchannelpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `policyIds`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannel.property.policyIds" id="cdktfprovidernewrelicdatanewrelicalertchannelpropertypolicyids"></a>

```typescript
public readonly policyIds: number[];
```

- *Type:* `number`[]

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannel.property.type" id="cdktfprovidernewrelicdatanewrelicalertchannelpropertytype"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannel.property.nameInput" id="cdktfprovidernewrelicdatanewrelicalertchannelpropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannel.property.name" id="cdktfprovidernewrelicdatanewrelicalertchannelpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidernewrelicdatanewrelicalertchannelpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannel.property.tfResourceType" id="cdktfprovidernewrelicdatanewrelicalertchannelpropertytfresourcetype"></a>

- *Type:* `string`

---

### DataNewrelicAlertPolicy <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicy" id="cdktfprovidernewrelicdatanewrelicalertpolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/d/alert_policy newrelic_alert_policy}.

#### Initializers <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicy.Initializer" id="cdktfprovidernewrelicdatanewrelicalertpolicyinitializer"></a>

```typescript
import { DataNewrelicAlertPolicy } from '@cdktf/provider-newrelic'

new DataNewrelicAlertPolicy(scope: Construct, id: string, config: DataNewrelicAlertPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidernewrelicdatanewrelicalertpolicyparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidernewrelicdatanewrelicalertpolicyparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidernewrelicdatanewrelicalertpolicyparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-newrelic.DataNewrelicAlertPolicyConfig`](#@cdktf/provider-newrelic.DataNewrelicAlertPolicyConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicy.parameter.scope" id="cdktfprovidernewrelicdatanewrelicalertpolicyparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicy.parameter.id" id="cdktfprovidernewrelicdatanewrelicalertpolicyparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicy.parameter.config" id="cdktfprovidernewrelicdatanewrelicalertpolicyparameterconfig"></a>

- *Type:* [`@cdktf/provider-newrelic.DataNewrelicAlertPolicyConfig`](#@cdktf/provider-newrelic.DataNewrelicAlertPolicyConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetAccountId`](#cdktfprovidernewrelicdatanewrelicalertpolicyresetaccountid) | *No description.* |
| [`resetIncidentPreference`](#cdktfprovidernewrelicdatanewrelicalertpolicyresetincidentpreference) | *No description.* |

---

##### `resetAccountId` <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicy.resetAccountId" id="cdktfprovidernewrelicdatanewrelicalertpolicyresetaccountid"></a>

```typescript
public resetAccountId()
```

##### `resetIncidentPreference` <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicy.resetIncidentPreference" id="cdktfprovidernewrelicdatanewrelicalertpolicyresetincidentpreference"></a>

```typescript
public resetIncidentPreference()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`createdAt`](#cdktfprovidernewrelicdatanewrelicalertpolicypropertycreatedat)<span title="Required">*</span> | `string` | *No description.* |
| [`id`](#cdktfprovidernewrelicdatanewrelicalertpolicypropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`updatedAt`](#cdktfprovidernewrelicdatanewrelicalertpolicypropertyupdatedat)<span title="Required">*</span> | `string` | *No description.* |
| [`accountIdInput`](#cdktfprovidernewrelicdatanewrelicalertpolicypropertyaccountidinput) | `number` | *No description.* |
| [`incidentPreferenceInput`](#cdktfprovidernewrelicdatanewrelicalertpolicypropertyincidentpreferenceinput) | `string` | *No description.* |
| [`nameInput`](#cdktfprovidernewrelicdatanewrelicalertpolicypropertynameinput) | `string` | *No description.* |
| [`accountId`](#cdktfprovidernewrelicdatanewrelicalertpolicypropertyaccountid)<span title="Required">*</span> | `number` | *No description.* |
| [`incidentPreference`](#cdktfprovidernewrelicdatanewrelicalertpolicypropertyincidentpreference)<span title="Required">*</span> | `string` | *No description.* |
| [`name`](#cdktfprovidernewrelicdatanewrelicalertpolicypropertyname)<span title="Required">*</span> | `string` | *No description.* |

---

##### `createdAt`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicy.property.createdAt" id="cdktfprovidernewrelicdatanewrelicalertpolicypropertycreatedat"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicy.property.id" id="cdktfprovidernewrelicdatanewrelicalertpolicypropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicy.property.updatedAt" id="cdktfprovidernewrelicdatanewrelicalertpolicypropertyupdatedat"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* `string`

---

##### `accountIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicy.property.accountIdInput" id="cdktfprovidernewrelicdatanewrelicalertpolicypropertyaccountidinput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* `number`

---

##### `incidentPreferenceInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicy.property.incidentPreferenceInput" id="cdktfprovidernewrelicdatanewrelicalertpolicypropertyincidentpreferenceinput"></a>

```typescript
public readonly incidentPreferenceInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicy.property.nameInput" id="cdktfprovidernewrelicdatanewrelicalertpolicypropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `accountId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicy.property.accountId" id="cdktfprovidernewrelicdatanewrelicalertpolicypropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

---

##### `incidentPreference`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicy.property.incidentPreference" id="cdktfprovidernewrelicdatanewrelicalertpolicypropertyincidentpreference"></a>

```typescript
public readonly incidentPreference: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicy.property.name" id="cdktfprovidernewrelicdatanewrelicalertpolicypropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidernewrelicdatanewrelicalertpolicypropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicy.property.tfResourceType" id="cdktfprovidernewrelicdatanewrelicalertpolicypropertytfresourcetype"></a>

- *Type:* `string`

---

### DataNewrelicApplication <a name="@cdktf/provider-newrelic.DataNewrelicApplication" id="cdktfprovidernewrelicdatanewrelicapplication"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/d/application newrelic_application}.

#### Initializers <a name="@cdktf/provider-newrelic.DataNewrelicApplication.Initializer" id="cdktfprovidernewrelicdatanewrelicapplicationinitializer"></a>

```typescript
import { DataNewrelicApplication } from '@cdktf/provider-newrelic'

new DataNewrelicApplication(scope: Construct, id: string, config: DataNewrelicApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidernewrelicdatanewrelicapplicationparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidernewrelicdatanewrelicapplicationparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidernewrelicdatanewrelicapplicationparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-newrelic.DataNewrelicApplicationConfig`](#@cdktf/provider-newrelic.DataNewrelicApplicationConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicApplication.parameter.scope" id="cdktfprovidernewrelicdatanewrelicapplicationparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicApplication.parameter.id" id="cdktfprovidernewrelicdatanewrelicapplicationparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicApplication.parameter.config" id="cdktfprovidernewrelicdatanewrelicapplicationparameterconfig"></a>

- *Type:* [`@cdktf/provider-newrelic.DataNewrelicApplicationConfig`](#@cdktf/provider-newrelic.DataNewrelicApplicationConfig)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`hostIds`](#cdktfprovidernewrelicdatanewrelicapplicationpropertyhostids)<span title="Required">*</span> | `number`[] | *No description.* |
| [`id`](#cdktfprovidernewrelicdatanewrelicapplicationpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`instanceIds`](#cdktfprovidernewrelicdatanewrelicapplicationpropertyinstanceids)<span title="Required">*</span> | `number`[] | *No description.* |
| [`nameInput`](#cdktfprovidernewrelicdatanewrelicapplicationpropertynameinput) | `string` | *No description.* |
| [`name`](#cdktfprovidernewrelicdatanewrelicapplicationpropertyname)<span title="Required">*</span> | `string` | *No description.* |

---

##### `hostIds`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicApplication.property.hostIds" id="cdktfprovidernewrelicdatanewrelicapplicationpropertyhostids"></a>

```typescript
public readonly hostIds: number[];
```

- *Type:* `number`[]

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicApplication.property.id" id="cdktfprovidernewrelicdatanewrelicapplicationpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `instanceIds`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicApplication.property.instanceIds" id="cdktfprovidernewrelicdatanewrelicapplicationpropertyinstanceids"></a>

```typescript
public readonly instanceIds: number[];
```

- *Type:* `number`[]

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicApplication.property.nameInput" id="cdktfprovidernewrelicdatanewrelicapplicationpropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicApplication.property.name" id="cdktfprovidernewrelicdatanewrelicapplicationpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidernewrelicdatanewrelicapplicationpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-newrelic.DataNewrelicApplication.property.tfResourceType" id="cdktfprovidernewrelicdatanewrelicapplicationpropertytfresourcetype"></a>

- *Type:* `string`

---

### DataNewrelicEntity <a name="@cdktf/provider-newrelic.DataNewrelicEntity" id="cdktfprovidernewrelicdatanewrelicentity"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/d/entity newrelic_entity}.

#### Initializers <a name="@cdktf/provider-newrelic.DataNewrelicEntity.Initializer" id="cdktfprovidernewrelicdatanewrelicentityinitializer"></a>

```typescript
import { DataNewrelicEntity } from '@cdktf/provider-newrelic'

new DataNewrelicEntity(scope: Construct, id: string, config: DataNewrelicEntityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidernewrelicdatanewrelicentityparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidernewrelicdatanewrelicentityparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidernewrelicdatanewrelicentityparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-newrelic.DataNewrelicEntityConfig`](#@cdktf/provider-newrelic.DataNewrelicEntityConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.parameter.scope" id="cdktfprovidernewrelicdatanewrelicentityparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.parameter.id" id="cdktfprovidernewrelicdatanewrelicentityparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.parameter.config" id="cdktfprovidernewrelicdatanewrelicentityparameterconfig"></a>

- *Type:* [`@cdktf/provider-newrelic.DataNewrelicEntityConfig`](#@cdktf/provider-newrelic.DataNewrelicEntityConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`putTag`](#cdktfprovidernewrelicdatanewrelicentityputtag) | *No description.* |
| [`resetDomain`](#cdktfprovidernewrelicdatanewrelicentityresetdomain) | *No description.* |
| [`resetIgnoreCase`](#cdktfprovidernewrelicdatanewrelicentityresetignorecase) | *No description.* |
| [`resetTag`](#cdktfprovidernewrelicdatanewrelicentityresettag) | *No description.* |
| [`resetType`](#cdktfprovidernewrelicdatanewrelicentityresettype) | *No description.* |

---

##### `putTag` <a name="@cdktf/provider-newrelic.DataNewrelicEntity.putTag" id="cdktfprovidernewrelicdatanewrelicentityputtag"></a>

```typescript
public putTag(value: DataNewrelicEntityTag)
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.parameter.value" id="cdktfprovidernewrelicdatanewrelicentityparametervalue"></a>

- *Type:* [`@cdktf/provider-newrelic.DataNewrelicEntityTag`](#@cdktf/provider-newrelic.DataNewrelicEntityTag)

---

##### `resetDomain` <a name="@cdktf/provider-newrelic.DataNewrelicEntity.resetDomain" id="cdktfprovidernewrelicdatanewrelicentityresetdomain"></a>

```typescript
public resetDomain()
```

##### `resetIgnoreCase` <a name="@cdktf/provider-newrelic.DataNewrelicEntity.resetIgnoreCase" id="cdktfprovidernewrelicdatanewrelicentityresetignorecase"></a>

```typescript
public resetIgnoreCase()
```

##### `resetTag` <a name="@cdktf/provider-newrelic.DataNewrelicEntity.resetTag" id="cdktfprovidernewrelicdatanewrelicentityresettag"></a>

```typescript
public resetTag()
```

##### `resetType` <a name="@cdktf/provider-newrelic.DataNewrelicEntity.resetType" id="cdktfprovidernewrelicdatanewrelicentityresettype"></a>

```typescript
public resetType()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`accountId`](#cdktfprovidernewrelicdatanewrelicentitypropertyaccountid)<span title="Required">*</span> | `number` | *No description.* |
| [`applicationId`](#cdktfprovidernewrelicdatanewrelicentitypropertyapplicationid)<span title="Required">*</span> | `number` | *No description.* |
| [`guid`](#cdktfprovidernewrelicdatanewrelicentitypropertyguid)<span title="Required">*</span> | `string` | *No description.* |
| [`id`](#cdktfprovidernewrelicdatanewrelicentitypropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`servingApmApplicationId`](#cdktfprovidernewrelicdatanewrelicentitypropertyservingapmapplicationid)<span title="Required">*</span> | `number` | *No description.* |
| [`tag`](#cdktfprovidernewrelicdatanewrelicentitypropertytag)<span title="Required">*</span> | [`@cdktf/provider-newrelic.DataNewrelicEntityTagOutputReference`](#@cdktf/provider-newrelic.DataNewrelicEntityTagOutputReference) | *No description.* |
| [`domainInput`](#cdktfprovidernewrelicdatanewrelicentitypropertydomaininput) | `string` | *No description.* |
| [`ignoreCaseInput`](#cdktfprovidernewrelicdatanewrelicentitypropertyignorecaseinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`nameInput`](#cdktfprovidernewrelicdatanewrelicentitypropertynameinput) | `string` | *No description.* |
| [`tagInput`](#cdktfprovidernewrelicdatanewrelicentitypropertytaginput) | [`@cdktf/provider-newrelic.DataNewrelicEntityTag`](#@cdktf/provider-newrelic.DataNewrelicEntityTag) | *No description.* |
| [`typeInput`](#cdktfprovidernewrelicdatanewrelicentitypropertytypeinput) | `string` | *No description.* |
| [`domain`](#cdktfprovidernewrelicdatanewrelicentitypropertydomain)<span title="Required">*</span> | `string` | *No description.* |
| [`ignoreCase`](#cdktfprovidernewrelicdatanewrelicentitypropertyignorecase)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`name`](#cdktfprovidernewrelicdatanewrelicentitypropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`type`](#cdktfprovidernewrelicdatanewrelicentitypropertytype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `accountId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.property.accountId" id="cdktfprovidernewrelicdatanewrelicentitypropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

---

##### `applicationId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.property.applicationId" id="cdktfprovidernewrelicdatanewrelicentitypropertyapplicationid"></a>

```typescript
public readonly applicationId: number;
```

- *Type:* `number`

---

##### `guid`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.property.guid" id="cdktfprovidernewrelicdatanewrelicentitypropertyguid"></a>

```typescript
public readonly guid: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.property.id" id="cdktfprovidernewrelicdatanewrelicentitypropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `servingApmApplicationId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.property.servingApmApplicationId" id="cdktfprovidernewrelicdatanewrelicentitypropertyservingapmapplicationid"></a>

```typescript
public readonly servingApmApplicationId: number;
```

- *Type:* `number`

---

##### `tag`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.property.tag" id="cdktfprovidernewrelicdatanewrelicentitypropertytag"></a>

```typescript
public readonly tag: DataNewrelicEntityTagOutputReference;
```

- *Type:* [`@cdktf/provider-newrelic.DataNewrelicEntityTagOutputReference`](#@cdktf/provider-newrelic.DataNewrelicEntityTagOutputReference)

---

##### `domainInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.property.domainInput" id="cdktfprovidernewrelicdatanewrelicentitypropertydomaininput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* `string`

---

##### `ignoreCaseInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.property.ignoreCaseInput" id="cdktfprovidernewrelicdatanewrelicentitypropertyignorecaseinput"></a>

```typescript
public readonly ignoreCaseInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.property.nameInput" id="cdktfprovidernewrelicdatanewrelicentitypropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `tagInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.property.tagInput" id="cdktfprovidernewrelicdatanewrelicentitypropertytaginput"></a>

```typescript
public readonly tagInput: DataNewrelicEntityTag;
```

- *Type:* [`@cdktf/provider-newrelic.DataNewrelicEntityTag`](#@cdktf/provider-newrelic.DataNewrelicEntityTag)

---

##### `typeInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.property.typeInput" id="cdktfprovidernewrelicdatanewrelicentitypropertytypeinput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* `string`

---

##### `domain`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.property.domain" id="cdktfprovidernewrelicdatanewrelicentitypropertydomain"></a>

```typescript
public readonly domain: string;
```

- *Type:* `string`

---

##### `ignoreCase`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.property.ignoreCase" id="cdktfprovidernewrelicdatanewrelicentitypropertyignorecase"></a>

```typescript
public readonly ignoreCase: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.property.name" id="cdktfprovidernewrelicdatanewrelicentitypropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.property.type" id="cdktfprovidernewrelicdatanewrelicentitypropertytype"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidernewrelicdatanewrelicentitypropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-newrelic.DataNewrelicEntity.property.tfResourceType" id="cdktfprovidernewrelicdatanewrelicentitypropertytfresourcetype"></a>

- *Type:* `string`

---

### DataNewrelicKeyTransaction <a name="@cdktf/provider-newrelic.DataNewrelicKeyTransaction" id="cdktfprovidernewrelicdatanewrelickeytransaction"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/d/key_transaction newrelic_key_transaction}.

#### Initializers <a name="@cdktf/provider-newrelic.DataNewrelicKeyTransaction.Initializer" id="cdktfprovidernewrelicdatanewrelickeytransactioninitializer"></a>

```typescript
import { DataNewrelicKeyTransaction } from '@cdktf/provider-newrelic'

new DataNewrelicKeyTransaction(scope: Construct, id: string, config: DataNewrelicKeyTransactionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidernewrelicdatanewrelickeytransactionparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidernewrelicdatanewrelickeytransactionparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidernewrelicdatanewrelickeytransactionparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-newrelic.DataNewrelicKeyTransactionConfig`](#@cdktf/provider-newrelic.DataNewrelicKeyTransactionConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicKeyTransaction.parameter.scope" id="cdktfprovidernewrelicdatanewrelickeytransactionparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicKeyTransaction.parameter.id" id="cdktfprovidernewrelicdatanewrelickeytransactionparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicKeyTransaction.parameter.config" id="cdktfprovidernewrelicdatanewrelickeytransactionparameterconfig"></a>

- *Type:* [`@cdktf/provider-newrelic.DataNewrelicKeyTransactionConfig`](#@cdktf/provider-newrelic.DataNewrelicKeyTransactionConfig)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`id`](#cdktfprovidernewrelicdatanewrelickeytransactionpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`nameInput`](#cdktfprovidernewrelicdatanewrelickeytransactionpropertynameinput) | `string` | *No description.* |
| [`name`](#cdktfprovidernewrelicdatanewrelickeytransactionpropertyname)<span title="Required">*</span> | `string` | *No description.* |

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicKeyTransaction.property.id" id="cdktfprovidernewrelicdatanewrelickeytransactionpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicKeyTransaction.property.nameInput" id="cdktfprovidernewrelicdatanewrelickeytransactionpropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicKeyTransaction.property.name" id="cdktfprovidernewrelicdatanewrelickeytransactionpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidernewrelicdatanewrelickeytransactionpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-newrelic.DataNewrelicKeyTransaction.property.tfResourceType" id="cdktfprovidernewrelicdatanewrelickeytransactionpropertytfresourcetype"></a>

- *Type:* `string`

---

### DataNewrelicPlugin <a name="@cdktf/provider-newrelic.DataNewrelicPlugin" id="cdktfprovidernewrelicdatanewrelicplugin"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/d/plugin newrelic_plugin}.

#### Initializers <a name="@cdktf/provider-newrelic.DataNewrelicPlugin.Initializer" id="cdktfprovidernewrelicdatanewrelicplugininitializer"></a>

```typescript
import { DataNewrelicPlugin } from '@cdktf/provider-newrelic'

new DataNewrelicPlugin(scope: Construct, id: string, config: DataNewrelicPluginConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidernewrelicdatanewrelicpluginparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidernewrelicdatanewrelicpluginparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidernewrelicdatanewrelicpluginparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-newrelic.DataNewrelicPluginConfig`](#@cdktf/provider-newrelic.DataNewrelicPluginConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPlugin.parameter.scope" id="cdktfprovidernewrelicdatanewrelicpluginparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPlugin.parameter.id" id="cdktfprovidernewrelicdatanewrelicpluginparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPlugin.parameter.config" id="cdktfprovidernewrelicdatanewrelicpluginparameterconfig"></a>

- *Type:* [`@cdktf/provider-newrelic.DataNewrelicPluginConfig`](#@cdktf/provider-newrelic.DataNewrelicPluginConfig)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`id`](#cdktfprovidernewrelicdatanewrelicpluginpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`guidInput`](#cdktfprovidernewrelicdatanewrelicpluginpropertyguidinput) | `string` | *No description.* |
| [`guid`](#cdktfprovidernewrelicdatanewrelicpluginpropertyguid)<span title="Required">*</span> | `string` | *No description.* |

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPlugin.property.id" id="cdktfprovidernewrelicdatanewrelicpluginpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `guidInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPlugin.property.guidInput" id="cdktfprovidernewrelicdatanewrelicpluginpropertyguidinput"></a>

```typescript
public readonly guidInput: string;
```

- *Type:* `string`

---

##### `guid`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPlugin.property.guid" id="cdktfprovidernewrelicdatanewrelicpluginpropertyguid"></a>

```typescript
public readonly guid: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidernewrelicdatanewrelicpluginpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-newrelic.DataNewrelicPlugin.property.tfResourceType" id="cdktfprovidernewrelicdatanewrelicpluginpropertytfresourcetype"></a>

- *Type:* `string`

---

### DataNewrelicPluginComponent <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponent" id="cdktfprovidernewrelicdatanewrelicplugincomponent"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/d/plugin_component newrelic_plugin_component}.

#### Initializers <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponent.Initializer" id="cdktfprovidernewrelicdatanewrelicplugincomponentinitializer"></a>

```typescript
import { DataNewrelicPluginComponent } from '@cdktf/provider-newrelic'

new DataNewrelicPluginComponent(scope: Construct, id: string, config: DataNewrelicPluginComponentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidernewrelicdatanewrelicplugincomponentparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidernewrelicdatanewrelicplugincomponentparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidernewrelicdatanewrelicplugincomponentparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-newrelic.DataNewrelicPluginComponentConfig`](#@cdktf/provider-newrelic.DataNewrelicPluginComponentConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponent.parameter.scope" id="cdktfprovidernewrelicdatanewrelicplugincomponentparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponent.parameter.id" id="cdktfprovidernewrelicdatanewrelicplugincomponentparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponent.parameter.config" id="cdktfprovidernewrelicdatanewrelicplugincomponentparameterconfig"></a>

- *Type:* [`@cdktf/provider-newrelic.DataNewrelicPluginComponentConfig`](#@cdktf/provider-newrelic.DataNewrelicPluginComponentConfig)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`healthStatus`](#cdktfprovidernewrelicdatanewrelicplugincomponentpropertyhealthstatus)<span title="Required">*</span> | `string` | *No description.* |
| [`id`](#cdktfprovidernewrelicdatanewrelicplugincomponentpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`nameInput`](#cdktfprovidernewrelicdatanewrelicplugincomponentpropertynameinput) | `string` | *No description.* |
| [`pluginIdInput`](#cdktfprovidernewrelicdatanewrelicplugincomponentpropertypluginidinput) | `number` | *No description.* |
| [`name`](#cdktfprovidernewrelicdatanewrelicplugincomponentpropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`pluginId`](#cdktfprovidernewrelicdatanewrelicplugincomponentpropertypluginid)<span title="Required">*</span> | `number` | *No description.* |

---

##### `healthStatus`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponent.property.healthStatus" id="cdktfprovidernewrelicdatanewrelicplugincomponentpropertyhealthstatus"></a>

```typescript
public readonly healthStatus: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponent.property.id" id="cdktfprovidernewrelicdatanewrelicplugincomponentpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponent.property.nameInput" id="cdktfprovidernewrelicdatanewrelicplugincomponentpropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `pluginIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponent.property.pluginIdInput" id="cdktfprovidernewrelicdatanewrelicplugincomponentpropertypluginidinput"></a>

```typescript
public readonly pluginIdInput: number;
```

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponent.property.name" id="cdktfprovidernewrelicdatanewrelicplugincomponentpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `pluginId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponent.property.pluginId" id="cdktfprovidernewrelicdatanewrelicplugincomponentpropertypluginid"></a>

```typescript
public readonly pluginId: number;
```

- *Type:* `number`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidernewrelicdatanewrelicplugincomponentpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponent.property.tfResourceType" id="cdktfprovidernewrelicdatanewrelicplugincomponentpropertytfresourcetype"></a>

- *Type:* `string`

---

### DataNewrelicSyntheticsMonitor <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitor" id="cdktfprovidernewrelicdatanewrelicsyntheticsmonitor"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/d/synthetics_monitor newrelic_synthetics_monitor}.

#### Initializers <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitor.Initializer" id="cdktfprovidernewrelicdatanewrelicsyntheticsmonitorinitializer"></a>

```typescript
import { DataNewrelicSyntheticsMonitor } from '@cdktf/provider-newrelic'

new DataNewrelicSyntheticsMonitor(scope: Construct, id: string, config: DataNewrelicSyntheticsMonitorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidernewrelicdatanewrelicsyntheticsmonitorparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidernewrelicdatanewrelicsyntheticsmonitorparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidernewrelicdatanewrelicsyntheticsmonitorparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorConfig`](#@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitor.parameter.scope" id="cdktfprovidernewrelicdatanewrelicsyntheticsmonitorparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitor.parameter.id" id="cdktfprovidernewrelicdatanewrelicsyntheticsmonitorparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitor.parameter.config" id="cdktfprovidernewrelicdatanewrelicsyntheticsmonitorparameterconfig"></a>

- *Type:* [`@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorConfig`](#@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorConfig)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`id`](#cdktfprovidernewrelicdatanewrelicsyntheticsmonitorpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`monitorId`](#cdktfprovidernewrelicdatanewrelicsyntheticsmonitorpropertymonitorid)<span title="Required">*</span> | `string` | *No description.* |
| [`nameInput`](#cdktfprovidernewrelicdatanewrelicsyntheticsmonitorpropertynameinput) | `string` | *No description.* |
| [`name`](#cdktfprovidernewrelicdatanewrelicsyntheticsmonitorpropertyname)<span title="Required">*</span> | `string` | *No description.* |

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitor.property.id" id="cdktfprovidernewrelicdatanewrelicsyntheticsmonitorpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `monitorId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitor.property.monitorId" id="cdktfprovidernewrelicdatanewrelicsyntheticsmonitorpropertymonitorid"></a>

```typescript
public readonly monitorId: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitor.property.nameInput" id="cdktfprovidernewrelicdatanewrelicsyntheticsmonitorpropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitor.property.name" id="cdktfprovidernewrelicdatanewrelicsyntheticsmonitorpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidernewrelicdatanewrelicsyntheticsmonitorpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitor.property.tfResourceType" id="cdktfprovidernewrelicdatanewrelicsyntheticsmonitorpropertytfresourcetype"></a>

- *Type:* `string`

---

### DataNewrelicSyntheticsMonitorLocation <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocation" id="cdktfprovidernewrelicdatanewrelicsyntheticsmonitorlocation"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/d/synthetics_monitor_location newrelic_synthetics_monitor_location}.

#### Initializers <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocation.Initializer" id="cdktfprovidernewrelicdatanewrelicsyntheticsmonitorlocationinitializer"></a>

```typescript
import { DataNewrelicSyntheticsMonitorLocation } from '@cdktf/provider-newrelic'

new DataNewrelicSyntheticsMonitorLocation(scope: Construct, id: string, config: DataNewrelicSyntheticsMonitorLocationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidernewrelicdatanewrelicsyntheticsmonitorlocationparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidernewrelicdatanewrelicsyntheticsmonitorlocationparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidernewrelicdatanewrelicsyntheticsmonitorlocationparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocationConfig`](#@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocationConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocation.parameter.scope" id="cdktfprovidernewrelicdatanewrelicsyntheticsmonitorlocationparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocation.parameter.id" id="cdktfprovidernewrelicdatanewrelicsyntheticsmonitorlocationparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocation.parameter.config" id="cdktfprovidernewrelicdatanewrelicsyntheticsmonitorlocationparameterconfig"></a>

- *Type:* [`@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocationConfig`](#@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocationConfig)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`description`](#cdktfprovidernewrelicdatanewrelicsyntheticsmonitorlocationpropertydescription)<span title="Required">*</span> | `string` | *No description.* |
| [`highSecurityMode`](#cdktfprovidernewrelicdatanewrelicsyntheticsmonitorlocationpropertyhighsecuritymode)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`id`](#cdktfprovidernewrelicdatanewrelicsyntheticsmonitorlocationpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`name`](#cdktfprovidernewrelicdatanewrelicsyntheticsmonitorlocationpropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`private`](#cdktfprovidernewrelicdatanewrelicsyntheticsmonitorlocationpropertyprivate)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`labelInput`](#cdktfprovidernewrelicdatanewrelicsyntheticsmonitorlocationpropertylabelinput) | `string` | *No description.* |
| [`label`](#cdktfprovidernewrelicdatanewrelicsyntheticsmonitorlocationpropertylabel)<span title="Required">*</span> | `string` | *No description.* |

---

##### `description`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocation.property.description" id="cdktfprovidernewrelicdatanewrelicsyntheticsmonitorlocationpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `highSecurityMode`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocation.property.highSecurityMode" id="cdktfprovidernewrelicdatanewrelicsyntheticsmonitorlocationpropertyhighsecuritymode"></a>

```typescript
public readonly highSecurityMode: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocation.property.id" id="cdktfprovidernewrelicdatanewrelicsyntheticsmonitorlocationpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocation.property.name" id="cdktfprovidernewrelicdatanewrelicsyntheticsmonitorlocationpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `private`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocation.property.private" id="cdktfprovidernewrelicdatanewrelicsyntheticsmonitorlocationpropertyprivate"></a>

```typescript
public readonly private: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `labelInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocation.property.labelInput" id="cdktfprovidernewrelicdatanewrelicsyntheticsmonitorlocationpropertylabelinput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* `string`

---

##### `label`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocation.property.label" id="cdktfprovidernewrelicdatanewrelicsyntheticsmonitorlocationpropertylabel"></a>

```typescript
public readonly label: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidernewrelicdatanewrelicsyntheticsmonitorlocationpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocation.property.tfResourceType" id="cdktfprovidernewrelicdatanewrelicsyntheticsmonitorlocationpropertytfresourcetype"></a>

- *Type:* `string`

---

### DataNewrelicSyntheticsSecureCredential <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredential" id="cdktfprovidernewrelicdatanewrelicsyntheticssecurecredential"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/d/synthetics_secure_credential newrelic_synthetics_secure_credential}.

#### Initializers <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredential.Initializer" id="cdktfprovidernewrelicdatanewrelicsyntheticssecurecredentialinitializer"></a>

```typescript
import { DataNewrelicSyntheticsSecureCredential } from '@cdktf/provider-newrelic'

new DataNewrelicSyntheticsSecureCredential(scope: Construct, id: string, config: DataNewrelicSyntheticsSecureCredentialConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidernewrelicdatanewrelicsyntheticssecurecredentialparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidernewrelicdatanewrelicsyntheticssecurecredentialparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidernewrelicdatanewrelicsyntheticssecurecredentialparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredentialConfig`](#@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredentialConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredential.parameter.scope" id="cdktfprovidernewrelicdatanewrelicsyntheticssecurecredentialparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredential.parameter.id" id="cdktfprovidernewrelicdatanewrelicsyntheticssecurecredentialparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredential.parameter.config" id="cdktfprovidernewrelicdatanewrelicsyntheticssecurecredentialparameterconfig"></a>

- *Type:* [`@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredentialConfig`](#@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredentialConfig)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`createdAt`](#cdktfprovidernewrelicdatanewrelicsyntheticssecurecredentialpropertycreatedat)<span title="Required">*</span> | `string` | *No description.* |
| [`description`](#cdktfprovidernewrelicdatanewrelicsyntheticssecurecredentialpropertydescription)<span title="Required">*</span> | `string` | *No description.* |
| [`id`](#cdktfprovidernewrelicdatanewrelicsyntheticssecurecredentialpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`lastUpdated`](#cdktfprovidernewrelicdatanewrelicsyntheticssecurecredentialpropertylastupdated)<span title="Required">*</span> | `string` | *No description.* |
| [`keyInput`](#cdktfprovidernewrelicdatanewrelicsyntheticssecurecredentialpropertykeyinput) | `string` | *No description.* |
| [`key`](#cdktfprovidernewrelicdatanewrelicsyntheticssecurecredentialpropertykey)<span title="Required">*</span> | `string` | *No description.* |

---

##### `createdAt`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredential.property.createdAt" id="cdktfprovidernewrelicdatanewrelicsyntheticssecurecredentialpropertycreatedat"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredential.property.description" id="cdktfprovidernewrelicdatanewrelicsyntheticssecurecredentialpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredential.property.id" id="cdktfprovidernewrelicdatanewrelicsyntheticssecurecredentialpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `lastUpdated`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredential.property.lastUpdated" id="cdktfprovidernewrelicdatanewrelicsyntheticssecurecredentialpropertylastupdated"></a>

```typescript
public readonly lastUpdated: string;
```

- *Type:* `string`

---

##### `keyInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredential.property.keyInput" id="cdktfprovidernewrelicdatanewrelicsyntheticssecurecredentialpropertykeyinput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredential.property.key" id="cdktfprovidernewrelicdatanewrelicsyntheticssecurecredentialpropertykey"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidernewrelicdatanewrelicsyntheticssecurecredentialpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredential.property.tfResourceType" id="cdktfprovidernewrelicdatanewrelicsyntheticssecurecredentialpropertytfresourcetype"></a>

- *Type:* `string`

---

### EntityTags <a name="@cdktf/provider-newrelic.EntityTags" id="cdktfprovidernewrelicentitytags"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/entity_tags newrelic_entity_tags}.

#### Initializers <a name="@cdktf/provider-newrelic.EntityTags.Initializer" id="cdktfprovidernewrelicentitytagsinitializer"></a>

```typescript
import { EntityTags } from '@cdktf/provider-newrelic'

new EntityTags(scope: Construct, id: string, config: EntityTagsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidernewrelicentitytagsparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidernewrelicentitytagsparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidernewrelicentitytagsparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-newrelic.EntityTagsConfig`](#@cdktf/provider-newrelic.EntityTagsConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EntityTags.parameter.scope" id="cdktfprovidernewrelicentitytagsparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EntityTags.parameter.id" id="cdktfprovidernewrelicentitytagsparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EntityTags.parameter.config" id="cdktfprovidernewrelicentitytagsparameterconfig"></a>

- *Type:* [`@cdktf/provider-newrelic.EntityTagsConfig`](#@cdktf/provider-newrelic.EntityTagsConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`putTimeouts`](#cdktfprovidernewrelicentitytagsputtimeouts) | *No description.* |
| [`resetTimeouts`](#cdktfprovidernewrelicentitytagsresettimeouts) | *No description.* |

---

##### `putTimeouts` <a name="@cdktf/provider-newrelic.EntityTags.putTimeouts" id="cdktfprovidernewrelicentitytagsputtimeouts"></a>

```typescript
public putTimeouts(value: EntityTagsTimeouts)
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EntityTags.parameter.value" id="cdktfprovidernewrelicentitytagsparametervalue"></a>

- *Type:* [`@cdktf/provider-newrelic.EntityTagsTimeouts`](#@cdktf/provider-newrelic.EntityTagsTimeouts)

---

##### `resetTimeouts` <a name="@cdktf/provider-newrelic.EntityTags.resetTimeouts" id="cdktfprovidernewrelicentitytagsresettimeouts"></a>

```typescript
public resetTimeouts()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`id`](#cdktfprovidernewrelicentitytagspropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`timeouts`](#cdktfprovidernewrelicentitytagspropertytimeouts)<span title="Required">*</span> | [`@cdktf/provider-newrelic.EntityTagsTimeoutsOutputReference`](#@cdktf/provider-newrelic.EntityTagsTimeoutsOutputReference) | *No description.* |
| [`guidInput`](#cdktfprovidernewrelicentitytagspropertyguidinput) | `string` | *No description.* |
| [`tagInput`](#cdktfprovidernewrelicentitytagspropertytaginput) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.EntityTagsTag`](#@cdktf/provider-newrelic.EntityTagsTag)[] | *No description.* |
| [`timeoutsInput`](#cdktfprovidernewrelicentitytagspropertytimeoutsinput) | [`@cdktf/provider-newrelic.EntityTagsTimeouts`](#@cdktf/provider-newrelic.EntityTagsTimeouts) | *No description.* |
| [`guid`](#cdktfprovidernewrelicentitytagspropertyguid)<span title="Required">*</span> | `string` | *No description.* |
| [`tag`](#cdktfprovidernewrelicentitytagspropertytag)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.EntityTagsTag`](#@cdktf/provider-newrelic.EntityTagsTag)[] | *No description.* |

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EntityTags.property.id" id="cdktfprovidernewrelicentitytagspropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `timeouts`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EntityTags.property.timeouts" id="cdktfprovidernewrelicentitytagspropertytimeouts"></a>

```typescript
public readonly timeouts: EntityTagsTimeoutsOutputReference;
```

- *Type:* [`@cdktf/provider-newrelic.EntityTagsTimeoutsOutputReference`](#@cdktf/provider-newrelic.EntityTagsTimeoutsOutputReference)

---

##### `guidInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EntityTags.property.guidInput" id="cdktfprovidernewrelicentitytagspropertyguidinput"></a>

```typescript
public readonly guidInput: string;
```

- *Type:* `string`

---

##### `tagInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EntityTags.property.tagInput" id="cdktfprovidernewrelicentitytagspropertytaginput"></a>

```typescript
public readonly tagInput: IResolvable | EntityTagsTag[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.EntityTagsTag`](#@cdktf/provider-newrelic.EntityTagsTag)[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EntityTags.property.timeoutsInput" id="cdktfprovidernewrelicentitytagspropertytimeoutsinput"></a>

```typescript
public readonly timeoutsInput: EntityTagsTimeouts;
```

- *Type:* [`@cdktf/provider-newrelic.EntityTagsTimeouts`](#@cdktf/provider-newrelic.EntityTagsTimeouts)

---

##### `guid`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EntityTags.property.guid" id="cdktfprovidernewrelicentitytagspropertyguid"></a>

```typescript
public readonly guid: string;
```

- *Type:* `string`

---

##### `tag`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EntityTags.property.tag" id="cdktfprovidernewrelicentitytagspropertytag"></a>

```typescript
public readonly tag: IResolvable | EntityTagsTag[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.EntityTagsTag`](#@cdktf/provider-newrelic.EntityTagsTag)[]

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidernewrelicentitytagspropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-newrelic.EntityTags.property.tfResourceType" id="cdktfprovidernewrelicentitytagspropertytfresourcetype"></a>

- *Type:* `string`

---

### EventsToMetricsRule <a name="@cdktf/provider-newrelic.EventsToMetricsRule" id="cdktfprovidernewreliceventstometricsrule"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/events_to_metrics_rule newrelic_events_to_metrics_rule}.

#### Initializers <a name="@cdktf/provider-newrelic.EventsToMetricsRule.Initializer" id="cdktfprovidernewreliceventstometricsruleinitializer"></a>

```typescript
import { EventsToMetricsRule } from '@cdktf/provider-newrelic'

new EventsToMetricsRule(scope: Construct, id: string, config: EventsToMetricsRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidernewreliceventstometricsruleparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidernewreliceventstometricsruleparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidernewreliceventstometricsruleparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-newrelic.EventsToMetricsRuleConfig`](#@cdktf/provider-newrelic.EventsToMetricsRuleConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRule.parameter.scope" id="cdktfprovidernewreliceventstometricsruleparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRule.parameter.id" id="cdktfprovidernewreliceventstometricsruleparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRule.parameter.config" id="cdktfprovidernewreliceventstometricsruleparameterconfig"></a>

- *Type:* [`@cdktf/provider-newrelic.EventsToMetricsRuleConfig`](#@cdktf/provider-newrelic.EventsToMetricsRuleConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetAccountId`](#cdktfprovidernewreliceventstometricsruleresetaccountid) | *No description.* |
| [`resetDescription`](#cdktfprovidernewreliceventstometricsruleresetdescription) | *No description.* |
| [`resetEnabled`](#cdktfprovidernewreliceventstometricsruleresetenabled) | *No description.* |

---

##### `resetAccountId` <a name="@cdktf/provider-newrelic.EventsToMetricsRule.resetAccountId" id="cdktfprovidernewreliceventstometricsruleresetaccountid"></a>

```typescript
public resetAccountId()
```

##### `resetDescription` <a name="@cdktf/provider-newrelic.EventsToMetricsRule.resetDescription" id="cdktfprovidernewreliceventstometricsruleresetdescription"></a>

```typescript
public resetDescription()
```

##### `resetEnabled` <a name="@cdktf/provider-newrelic.EventsToMetricsRule.resetEnabled" id="cdktfprovidernewreliceventstometricsruleresetenabled"></a>

```typescript
public resetEnabled()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`id`](#cdktfprovidernewreliceventstometricsrulepropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`ruleId`](#cdktfprovidernewreliceventstometricsrulepropertyruleid)<span title="Required">*</span> | `string` | *No description.* |
| [`accountIdInput`](#cdktfprovidernewreliceventstometricsrulepropertyaccountidinput) | `number` | *No description.* |
| [`descriptionInput`](#cdktfprovidernewreliceventstometricsrulepropertydescriptioninput) | `string` | *No description.* |
| [`enabledInput`](#cdktfprovidernewreliceventstometricsrulepropertyenabledinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`nameInput`](#cdktfprovidernewreliceventstometricsrulepropertynameinput) | `string` | *No description.* |
| [`nrqlInput`](#cdktfprovidernewreliceventstometricsrulepropertynrqlinput) | `string` | *No description.* |
| [`accountId`](#cdktfprovidernewreliceventstometricsrulepropertyaccountid)<span title="Required">*</span> | `number` | *No description.* |
| [`description`](#cdktfprovidernewreliceventstometricsrulepropertydescription)<span title="Required">*</span> | `string` | *No description.* |
| [`enabled`](#cdktfprovidernewreliceventstometricsrulepropertyenabled)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`name`](#cdktfprovidernewreliceventstometricsrulepropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`nrql`](#cdktfprovidernewreliceventstometricsrulepropertynrql)<span title="Required">*</span> | `string` | *No description.* |

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRule.property.id" id="cdktfprovidernewreliceventstometricsrulepropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `ruleId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRule.property.ruleId" id="cdktfprovidernewreliceventstometricsrulepropertyruleid"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* `string`

---

##### `accountIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRule.property.accountIdInput" id="cdktfprovidernewreliceventstometricsrulepropertyaccountidinput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* `number`

---

##### `descriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRule.property.descriptionInput" id="cdktfprovidernewreliceventstometricsrulepropertydescriptioninput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* `string`

---

##### `enabledInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRule.property.enabledInput" id="cdktfprovidernewreliceventstometricsrulepropertyenabledinput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRule.property.nameInput" id="cdktfprovidernewreliceventstometricsrulepropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `nrqlInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRule.property.nrqlInput" id="cdktfprovidernewreliceventstometricsrulepropertynrqlinput"></a>

```typescript
public readonly nrqlInput: string;
```

- *Type:* `string`

---

##### `accountId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRule.property.accountId" id="cdktfprovidernewreliceventstometricsrulepropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

---

##### `description`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRule.property.description" id="cdktfprovidernewreliceventstometricsrulepropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRule.property.enabled" id="cdktfprovidernewreliceventstometricsrulepropertyenabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRule.property.name" id="cdktfprovidernewreliceventstometricsrulepropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `nrql`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRule.property.nrql" id="cdktfprovidernewreliceventstometricsrulepropertynrql"></a>

```typescript
public readonly nrql: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidernewreliceventstometricsrulepropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-newrelic.EventsToMetricsRule.property.tfResourceType" id="cdktfprovidernewreliceventstometricsrulepropertytfresourcetype"></a>

- *Type:* `string`

---

### InfraAlertCondition <a name="@cdktf/provider-newrelic.InfraAlertCondition" id="cdktfprovidernewrelicinfraalertcondition"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition newrelic_infra_alert_condition}.

#### Initializers <a name="@cdktf/provider-newrelic.InfraAlertCondition.Initializer" id="cdktfprovidernewrelicinfraalertconditioninitializer"></a>

```typescript
import { InfraAlertCondition } from '@cdktf/provider-newrelic'

new InfraAlertCondition(scope: Construct, id: string, config: InfraAlertConditionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidernewrelicinfraalertconditionparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidernewrelicinfraalertconditionparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidernewrelicinfraalertconditionparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-newrelic.InfraAlertConditionConfig`](#@cdktf/provider-newrelic.InfraAlertConditionConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.parameter.scope" id="cdktfprovidernewrelicinfraalertconditionparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.parameter.id" id="cdktfprovidernewrelicinfraalertconditionparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.parameter.config" id="cdktfprovidernewrelicinfraalertconditionparameterconfig"></a>

- *Type:* [`@cdktf/provider-newrelic.InfraAlertConditionConfig`](#@cdktf/provider-newrelic.InfraAlertConditionConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`putCritical`](#cdktfprovidernewrelicinfraalertconditionputcritical) | *No description.* |
| [`putWarning`](#cdktfprovidernewrelicinfraalertconditionputwarning) | *No description.* |
| [`resetComparison`](#cdktfprovidernewrelicinfraalertconditionresetcomparison) | *No description.* |
| [`resetCritical`](#cdktfprovidernewrelicinfraalertconditionresetcritical) | *No description.* |
| [`resetDescription`](#cdktfprovidernewrelicinfraalertconditionresetdescription) | *No description.* |
| [`resetEnabled`](#cdktfprovidernewrelicinfraalertconditionresetenabled) | *No description.* |
| [`resetEvent`](#cdktfprovidernewrelicinfraalertconditionresetevent) | *No description.* |
| [`resetIntegrationProvider`](#cdktfprovidernewrelicinfraalertconditionresetintegrationprovider) | *No description.* |
| [`resetProcessWhere`](#cdktfprovidernewrelicinfraalertconditionresetprocesswhere) | *No description.* |
| [`resetRunbookUrl`](#cdktfprovidernewrelicinfraalertconditionresetrunbookurl) | *No description.* |
| [`resetSelect`](#cdktfprovidernewrelicinfraalertconditionresetselect) | *No description.* |
| [`resetViolationCloseTimer`](#cdktfprovidernewrelicinfraalertconditionresetviolationclosetimer) | *No description.* |
| [`resetWarning`](#cdktfprovidernewrelicinfraalertconditionresetwarning) | *No description.* |
| [`resetWhere`](#cdktfprovidernewrelicinfraalertconditionresetwhere) | *No description.* |

---

##### `putCritical` <a name="@cdktf/provider-newrelic.InfraAlertCondition.putCritical" id="cdktfprovidernewrelicinfraalertconditionputcritical"></a>

```typescript
public putCritical(value: InfraAlertConditionCritical)
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.parameter.value" id="cdktfprovidernewrelicinfraalertconditionparametervalue"></a>

- *Type:* [`@cdktf/provider-newrelic.InfraAlertConditionCritical`](#@cdktf/provider-newrelic.InfraAlertConditionCritical)

---

##### `putWarning` <a name="@cdktf/provider-newrelic.InfraAlertCondition.putWarning" id="cdktfprovidernewrelicinfraalertconditionputwarning"></a>

```typescript
public putWarning(value: InfraAlertConditionWarning)
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.parameter.value" id="cdktfprovidernewrelicinfraalertconditionparametervalue"></a>

- *Type:* [`@cdktf/provider-newrelic.InfraAlertConditionWarning`](#@cdktf/provider-newrelic.InfraAlertConditionWarning)

---

##### `resetComparison` <a name="@cdktf/provider-newrelic.InfraAlertCondition.resetComparison" id="cdktfprovidernewrelicinfraalertconditionresetcomparison"></a>

```typescript
public resetComparison()
```

##### `resetCritical` <a name="@cdktf/provider-newrelic.InfraAlertCondition.resetCritical" id="cdktfprovidernewrelicinfraalertconditionresetcritical"></a>

```typescript
public resetCritical()
```

##### `resetDescription` <a name="@cdktf/provider-newrelic.InfraAlertCondition.resetDescription" id="cdktfprovidernewrelicinfraalertconditionresetdescription"></a>

```typescript
public resetDescription()
```

##### `resetEnabled` <a name="@cdktf/provider-newrelic.InfraAlertCondition.resetEnabled" id="cdktfprovidernewrelicinfraalertconditionresetenabled"></a>

```typescript
public resetEnabled()
```

##### `resetEvent` <a name="@cdktf/provider-newrelic.InfraAlertCondition.resetEvent" id="cdktfprovidernewrelicinfraalertconditionresetevent"></a>

```typescript
public resetEvent()
```

##### `resetIntegrationProvider` <a name="@cdktf/provider-newrelic.InfraAlertCondition.resetIntegrationProvider" id="cdktfprovidernewrelicinfraalertconditionresetintegrationprovider"></a>

```typescript
public resetIntegrationProvider()
```

##### `resetProcessWhere` <a name="@cdktf/provider-newrelic.InfraAlertCondition.resetProcessWhere" id="cdktfprovidernewrelicinfraalertconditionresetprocesswhere"></a>

```typescript
public resetProcessWhere()
```

##### `resetRunbookUrl` <a name="@cdktf/provider-newrelic.InfraAlertCondition.resetRunbookUrl" id="cdktfprovidernewrelicinfraalertconditionresetrunbookurl"></a>

```typescript
public resetRunbookUrl()
```

##### `resetSelect` <a name="@cdktf/provider-newrelic.InfraAlertCondition.resetSelect" id="cdktfprovidernewrelicinfraalertconditionresetselect"></a>

```typescript
public resetSelect()
```

##### `resetViolationCloseTimer` <a name="@cdktf/provider-newrelic.InfraAlertCondition.resetViolationCloseTimer" id="cdktfprovidernewrelicinfraalertconditionresetviolationclosetimer"></a>

```typescript
public resetViolationCloseTimer()
```

##### `resetWarning` <a name="@cdktf/provider-newrelic.InfraAlertCondition.resetWarning" id="cdktfprovidernewrelicinfraalertconditionresetwarning"></a>

```typescript
public resetWarning()
```

##### `resetWhere` <a name="@cdktf/provider-newrelic.InfraAlertCondition.resetWhere" id="cdktfprovidernewrelicinfraalertconditionresetwhere"></a>

```typescript
public resetWhere()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`createdAt`](#cdktfprovidernewrelicinfraalertconditionpropertycreatedat)<span title="Required">*</span> | `number` | *No description.* |
| [`critical`](#cdktfprovidernewrelicinfraalertconditionpropertycritical)<span title="Required">*</span> | [`@cdktf/provider-newrelic.InfraAlertConditionCriticalOutputReference`](#@cdktf/provider-newrelic.InfraAlertConditionCriticalOutputReference) | *No description.* |
| [`id`](#cdktfprovidernewrelicinfraalertconditionpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`updatedAt`](#cdktfprovidernewrelicinfraalertconditionpropertyupdatedat)<span title="Required">*</span> | `number` | *No description.* |
| [`warning`](#cdktfprovidernewrelicinfraalertconditionpropertywarning)<span title="Required">*</span> | [`@cdktf/provider-newrelic.InfraAlertConditionWarningOutputReference`](#@cdktf/provider-newrelic.InfraAlertConditionWarningOutputReference) | *No description.* |
| [`comparisonInput`](#cdktfprovidernewrelicinfraalertconditionpropertycomparisoninput) | `string` | *No description.* |
| [`criticalInput`](#cdktfprovidernewrelicinfraalertconditionpropertycriticalinput) | [`@cdktf/provider-newrelic.InfraAlertConditionCritical`](#@cdktf/provider-newrelic.InfraAlertConditionCritical) | *No description.* |
| [`descriptionInput`](#cdktfprovidernewrelicinfraalertconditionpropertydescriptioninput) | `string` | *No description.* |
| [`enabledInput`](#cdktfprovidernewrelicinfraalertconditionpropertyenabledinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`eventInput`](#cdktfprovidernewrelicinfraalertconditionpropertyeventinput) | `string` | *No description.* |
| [`integrationProviderInput`](#cdktfprovidernewrelicinfraalertconditionpropertyintegrationproviderinput) | `string` | *No description.* |
| [`nameInput`](#cdktfprovidernewrelicinfraalertconditionpropertynameinput) | `string` | *No description.* |
| [`policyIdInput`](#cdktfprovidernewrelicinfraalertconditionpropertypolicyidinput) | `number` | *No description.* |
| [`processWhereInput`](#cdktfprovidernewrelicinfraalertconditionpropertyprocesswhereinput) | `string` | *No description.* |
| [`runbookUrlInput`](#cdktfprovidernewrelicinfraalertconditionpropertyrunbookurlinput) | `string` | *No description.* |
| [`selectInput`](#cdktfprovidernewrelicinfraalertconditionpropertyselectinput) | `string` | *No description.* |
| [`typeInput`](#cdktfprovidernewrelicinfraalertconditionpropertytypeinput) | `string` | *No description.* |
| [`violationCloseTimerInput`](#cdktfprovidernewrelicinfraalertconditionpropertyviolationclosetimerinput) | `number` | *No description.* |
| [`warningInput`](#cdktfprovidernewrelicinfraalertconditionpropertywarninginput) | [`@cdktf/provider-newrelic.InfraAlertConditionWarning`](#@cdktf/provider-newrelic.InfraAlertConditionWarning) | *No description.* |
| [`whereInput`](#cdktfprovidernewrelicinfraalertconditionpropertywhereinput) | `string` | *No description.* |
| [`comparison`](#cdktfprovidernewrelicinfraalertconditionpropertycomparison)<span title="Required">*</span> | `string` | *No description.* |
| [`description`](#cdktfprovidernewrelicinfraalertconditionpropertydescription)<span title="Required">*</span> | `string` | *No description.* |
| [`enabled`](#cdktfprovidernewrelicinfraalertconditionpropertyenabled)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`event`](#cdktfprovidernewrelicinfraalertconditionpropertyevent)<span title="Required">*</span> | `string` | *No description.* |
| [`integrationProvider`](#cdktfprovidernewrelicinfraalertconditionpropertyintegrationprovider)<span title="Required">*</span> | `string` | *No description.* |
| [`name`](#cdktfprovidernewrelicinfraalertconditionpropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`policyId`](#cdktfprovidernewrelicinfraalertconditionpropertypolicyid)<span title="Required">*</span> | `number` | *No description.* |
| [`processWhere`](#cdktfprovidernewrelicinfraalertconditionpropertyprocesswhere)<span title="Required">*</span> | `string` | *No description.* |
| [`runbookUrl`](#cdktfprovidernewrelicinfraalertconditionpropertyrunbookurl)<span title="Required">*</span> | `string` | *No description.* |
| [`select`](#cdktfprovidernewrelicinfraalertconditionpropertyselect)<span title="Required">*</span> | `string` | *No description.* |
| [`type`](#cdktfprovidernewrelicinfraalertconditionpropertytype)<span title="Required">*</span> | `string` | *No description.* |
| [`violationCloseTimer`](#cdktfprovidernewrelicinfraalertconditionpropertyviolationclosetimer)<span title="Required">*</span> | `number` | *No description.* |
| [`where`](#cdktfprovidernewrelicinfraalertconditionpropertywhere)<span title="Required">*</span> | `string` | *No description.* |

---

##### `createdAt`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.createdAt" id="cdktfprovidernewrelicinfraalertconditionpropertycreatedat"></a>

```typescript
public readonly createdAt: number;
```

- *Type:* `number`

---

##### `critical`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.critical" id="cdktfprovidernewrelicinfraalertconditionpropertycritical"></a>

```typescript
public readonly critical: InfraAlertConditionCriticalOutputReference;
```

- *Type:* [`@cdktf/provider-newrelic.InfraAlertConditionCriticalOutputReference`](#@cdktf/provider-newrelic.InfraAlertConditionCriticalOutputReference)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.id" id="cdktfprovidernewrelicinfraalertconditionpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.updatedAt" id="cdktfprovidernewrelicinfraalertconditionpropertyupdatedat"></a>

```typescript
public readonly updatedAt: number;
```

- *Type:* `number`

---

##### `warning`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.warning" id="cdktfprovidernewrelicinfraalertconditionpropertywarning"></a>

```typescript
public readonly warning: InfraAlertConditionWarningOutputReference;
```

- *Type:* [`@cdktf/provider-newrelic.InfraAlertConditionWarningOutputReference`](#@cdktf/provider-newrelic.InfraAlertConditionWarningOutputReference)

---

##### `comparisonInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.comparisonInput" id="cdktfprovidernewrelicinfraalertconditionpropertycomparisoninput"></a>

```typescript
public readonly comparisonInput: string;
```

- *Type:* `string`

---

##### `criticalInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.criticalInput" id="cdktfprovidernewrelicinfraalertconditionpropertycriticalinput"></a>

```typescript
public readonly criticalInput: InfraAlertConditionCritical;
```

- *Type:* [`@cdktf/provider-newrelic.InfraAlertConditionCritical`](#@cdktf/provider-newrelic.InfraAlertConditionCritical)

---

##### `descriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.descriptionInput" id="cdktfprovidernewrelicinfraalertconditionpropertydescriptioninput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* `string`

---

##### `enabledInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.enabledInput" id="cdktfprovidernewrelicinfraalertconditionpropertyenabledinput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `eventInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.eventInput" id="cdktfprovidernewrelicinfraalertconditionpropertyeventinput"></a>

```typescript
public readonly eventInput: string;
```

- *Type:* `string`

---

##### `integrationProviderInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.integrationProviderInput" id="cdktfprovidernewrelicinfraalertconditionpropertyintegrationproviderinput"></a>

```typescript
public readonly integrationProviderInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.nameInput" id="cdktfprovidernewrelicinfraalertconditionpropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `policyIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.policyIdInput" id="cdktfprovidernewrelicinfraalertconditionpropertypolicyidinput"></a>

```typescript
public readonly policyIdInput: number;
```

- *Type:* `number`

---

##### `processWhereInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.processWhereInput" id="cdktfprovidernewrelicinfraalertconditionpropertyprocesswhereinput"></a>

```typescript
public readonly processWhereInput: string;
```

- *Type:* `string`

---

##### `runbookUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.runbookUrlInput" id="cdktfprovidernewrelicinfraalertconditionpropertyrunbookurlinput"></a>

```typescript
public readonly runbookUrlInput: string;
```

- *Type:* `string`

---

##### `selectInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.selectInput" id="cdktfprovidernewrelicinfraalertconditionpropertyselectinput"></a>

```typescript
public readonly selectInput: string;
```

- *Type:* `string`

---

##### `typeInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.typeInput" id="cdktfprovidernewrelicinfraalertconditionpropertytypeinput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* `string`

---

##### `violationCloseTimerInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.violationCloseTimerInput" id="cdktfprovidernewrelicinfraalertconditionpropertyviolationclosetimerinput"></a>

```typescript
public readonly violationCloseTimerInput: number;
```

- *Type:* `number`

---

##### `warningInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.warningInput" id="cdktfprovidernewrelicinfraalertconditionpropertywarninginput"></a>

```typescript
public readonly warningInput: InfraAlertConditionWarning;
```

- *Type:* [`@cdktf/provider-newrelic.InfraAlertConditionWarning`](#@cdktf/provider-newrelic.InfraAlertConditionWarning)

---

##### `whereInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.whereInput" id="cdktfprovidernewrelicinfraalertconditionpropertywhereinput"></a>

```typescript
public readonly whereInput: string;
```

- *Type:* `string`

---

##### `comparison`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.comparison" id="cdktfprovidernewrelicinfraalertconditionpropertycomparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.description" id="cdktfprovidernewrelicinfraalertconditionpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.enabled" id="cdktfprovidernewrelicinfraalertconditionpropertyenabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `event`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.event" id="cdktfprovidernewrelicinfraalertconditionpropertyevent"></a>

```typescript
public readonly event: string;
```

- *Type:* `string`

---

##### `integrationProvider`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.integrationProvider" id="cdktfprovidernewrelicinfraalertconditionpropertyintegrationprovider"></a>

```typescript
public readonly integrationProvider: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.name" id="cdktfprovidernewrelicinfraalertconditionpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `policyId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.policyId" id="cdktfprovidernewrelicinfraalertconditionpropertypolicyid"></a>

```typescript
public readonly policyId: number;
```

- *Type:* `number`

---

##### `processWhere`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.processWhere" id="cdktfprovidernewrelicinfraalertconditionpropertyprocesswhere"></a>

```typescript
public readonly processWhere: string;
```

- *Type:* `string`

---

##### `runbookUrl`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.runbookUrl" id="cdktfprovidernewrelicinfraalertconditionpropertyrunbookurl"></a>

```typescript
public readonly runbookUrl: string;
```

- *Type:* `string`

---

##### `select`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.select" id="cdktfprovidernewrelicinfraalertconditionpropertyselect"></a>

```typescript
public readonly select: string;
```

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.type" id="cdktfprovidernewrelicinfraalertconditionpropertytype"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

##### `violationCloseTimer`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.violationCloseTimer" id="cdktfprovidernewrelicinfraalertconditionpropertyviolationclosetimer"></a>

```typescript
public readonly violationCloseTimer: number;
```

- *Type:* `number`

---

##### `where`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.where" id="cdktfprovidernewrelicinfraalertconditionpropertywhere"></a>

```typescript
public readonly where: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidernewrelicinfraalertconditionpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.tfResourceType" id="cdktfprovidernewrelicinfraalertconditionpropertytfresourcetype"></a>

- *Type:* `string`

---

### InsightsEvent <a name="@cdktf/provider-newrelic.InsightsEvent" id="cdktfprovidernewrelicinsightsevent"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/insights_event newrelic_insights_event}.

#### Initializers <a name="@cdktf/provider-newrelic.InsightsEvent.Initializer" id="cdktfprovidernewrelicinsightseventinitializer"></a>

```typescript
import { InsightsEvent } from '@cdktf/provider-newrelic'

new InsightsEvent(scope: Construct, id: string, config: InsightsEventConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidernewrelicinsightseventparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidernewrelicinsightseventparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidernewrelicinsightseventparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-newrelic.InsightsEventConfig`](#@cdktf/provider-newrelic.InsightsEventConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InsightsEvent.parameter.scope" id="cdktfprovidernewrelicinsightseventparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InsightsEvent.parameter.id" id="cdktfprovidernewrelicinsightseventparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InsightsEvent.parameter.config" id="cdktfprovidernewrelicinsightseventparameterconfig"></a>

- *Type:* [`@cdktf/provider-newrelic.InsightsEventConfig`](#@cdktf/provider-newrelic.InsightsEventConfig)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`id`](#cdktfprovidernewrelicinsightseventpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`eventInput`](#cdktfprovidernewrelicinsightseventpropertyeventinput) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.InsightsEventEvent`](#@cdktf/provider-newrelic.InsightsEventEvent)[] | *No description.* |
| [`event`](#cdktfprovidernewrelicinsightseventpropertyevent)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.InsightsEventEvent`](#@cdktf/provider-newrelic.InsightsEventEvent)[] | *No description.* |

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InsightsEvent.property.id" id="cdktfprovidernewrelicinsightseventpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `eventInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InsightsEvent.property.eventInput" id="cdktfprovidernewrelicinsightseventpropertyeventinput"></a>

```typescript
public readonly eventInput: IResolvable | InsightsEventEvent[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.InsightsEventEvent`](#@cdktf/provider-newrelic.InsightsEventEvent)[]

---

##### `event`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InsightsEvent.property.event" id="cdktfprovidernewrelicinsightseventpropertyevent"></a>

```typescript
public readonly event: IResolvable | InsightsEventEvent[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.InsightsEventEvent`](#@cdktf/provider-newrelic.InsightsEventEvent)[]

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidernewrelicinsightseventpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-newrelic.InsightsEvent.property.tfResourceType" id="cdktfprovidernewrelicinsightseventpropertytfresourcetype"></a>

- *Type:* `string`

---

### NewrelicProvider <a name="@cdktf/provider-newrelic.NewrelicProvider" id="cdktfprovidernewrelicnewrelicprovider"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic newrelic}.

#### Initializers <a name="@cdktf/provider-newrelic.NewrelicProvider.Initializer" id="cdktfprovidernewrelicnewrelicproviderinitializer"></a>

```typescript
import { NewrelicProvider } from '@cdktf/provider-newrelic'

new NewrelicProvider(scope: Construct, id: string, config: NewrelicProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidernewrelicnewrelicproviderparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidernewrelicnewrelicproviderparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidernewrelicnewrelicproviderparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-newrelic.NewrelicProviderConfig`](#@cdktf/provider-newrelic.NewrelicProviderConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.parameter.scope" id="cdktfprovidernewrelicnewrelicproviderparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.parameter.id" id="cdktfprovidernewrelicnewrelicproviderparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.parameter.config" id="cdktfprovidernewrelicnewrelicproviderparameterconfig"></a>

- *Type:* [`@cdktf/provider-newrelic.NewrelicProviderConfig`](#@cdktf/provider-newrelic.NewrelicProviderConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetAdminApiKey`](#cdktfprovidernewrelicnewrelicproviderresetadminapikey) | *No description.* |
| [`resetAlias`](#cdktfprovidernewrelicnewrelicproviderresetalias) | *No description.* |
| [`resetApiKey`](#cdktfprovidernewrelicnewrelicproviderresetapikey) | *No description.* |
| [`resetApiUrl`](#cdktfprovidernewrelicnewrelicproviderresetapiurl) | *No description.* |
| [`resetCacertFile`](#cdktfprovidernewrelicnewrelicproviderresetcacertfile) | *No description.* |
| [`resetInfrastructureApiUrl`](#cdktfprovidernewrelicnewrelicproviderresetinfrastructureapiurl) | *No description.* |
| [`resetInsecureSkipVerify`](#cdktfprovidernewrelicnewrelicproviderresetinsecureskipverify) | *No description.* |
| [`resetInsightsInsertKey`](#cdktfprovidernewrelicnewrelicproviderresetinsightsinsertkey) | *No description.* |
| [`resetInsightsInsertUrl`](#cdktfprovidernewrelicnewrelicproviderresetinsightsinserturl) | *No description.* |
| [`resetInsightsQueryUrl`](#cdktfprovidernewrelicnewrelicproviderresetinsightsqueryurl) | *No description.* |
| [`resetNerdgraphApiUrl`](#cdktfprovidernewrelicnewrelicproviderresetnerdgraphapiurl) | *No description.* |
| [`resetRegion`](#cdktfprovidernewrelicnewrelicproviderresetregion) | *No description.* |
| [`resetSyntheticsApiUrl`](#cdktfprovidernewrelicnewrelicproviderresetsyntheticsapiurl) | *No description.* |

---

##### `resetAdminApiKey` <a name="@cdktf/provider-newrelic.NewrelicProvider.resetAdminApiKey" id="cdktfprovidernewrelicnewrelicproviderresetadminapikey"></a>

```typescript
public resetAdminApiKey()
```

##### `resetAlias` <a name="@cdktf/provider-newrelic.NewrelicProvider.resetAlias" id="cdktfprovidernewrelicnewrelicproviderresetalias"></a>

```typescript
public resetAlias()
```

##### `resetApiKey` <a name="@cdktf/provider-newrelic.NewrelicProvider.resetApiKey" id="cdktfprovidernewrelicnewrelicproviderresetapikey"></a>

```typescript
public resetApiKey()
```

##### `resetApiUrl` <a name="@cdktf/provider-newrelic.NewrelicProvider.resetApiUrl" id="cdktfprovidernewrelicnewrelicproviderresetapiurl"></a>

```typescript
public resetApiUrl()
```

##### `resetCacertFile` <a name="@cdktf/provider-newrelic.NewrelicProvider.resetCacertFile" id="cdktfprovidernewrelicnewrelicproviderresetcacertfile"></a>

```typescript
public resetCacertFile()
```

##### `resetInfrastructureApiUrl` <a name="@cdktf/provider-newrelic.NewrelicProvider.resetInfrastructureApiUrl" id="cdktfprovidernewrelicnewrelicproviderresetinfrastructureapiurl"></a>

```typescript
public resetInfrastructureApiUrl()
```

##### `resetInsecureSkipVerify` <a name="@cdktf/provider-newrelic.NewrelicProvider.resetInsecureSkipVerify" id="cdktfprovidernewrelicnewrelicproviderresetinsecureskipverify"></a>

```typescript
public resetInsecureSkipVerify()
```

##### `resetInsightsInsertKey` <a name="@cdktf/provider-newrelic.NewrelicProvider.resetInsightsInsertKey" id="cdktfprovidernewrelicnewrelicproviderresetinsightsinsertkey"></a>

```typescript
public resetInsightsInsertKey()
```

##### `resetInsightsInsertUrl` <a name="@cdktf/provider-newrelic.NewrelicProvider.resetInsightsInsertUrl" id="cdktfprovidernewrelicnewrelicproviderresetinsightsinserturl"></a>

```typescript
public resetInsightsInsertUrl()
```

##### `resetInsightsQueryUrl` <a name="@cdktf/provider-newrelic.NewrelicProvider.resetInsightsQueryUrl" id="cdktfprovidernewrelicnewrelicproviderresetinsightsqueryurl"></a>

```typescript
public resetInsightsQueryUrl()
```

##### `resetNerdgraphApiUrl` <a name="@cdktf/provider-newrelic.NewrelicProvider.resetNerdgraphApiUrl" id="cdktfprovidernewrelicnewrelicproviderresetnerdgraphapiurl"></a>

```typescript
public resetNerdgraphApiUrl()
```

##### `resetRegion` <a name="@cdktf/provider-newrelic.NewrelicProvider.resetRegion" id="cdktfprovidernewrelicnewrelicproviderresetregion"></a>

```typescript
public resetRegion()
```

##### `resetSyntheticsApiUrl` <a name="@cdktf/provider-newrelic.NewrelicProvider.resetSyntheticsApiUrl" id="cdktfprovidernewrelicnewrelicproviderresetsyntheticsapiurl"></a>

```typescript
public resetSyntheticsApiUrl()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`accountIdInput`](#cdktfprovidernewrelicnewrelicproviderpropertyaccountidinput) | `number` | *No description.* |
| [`adminApiKeyInput`](#cdktfprovidernewrelicnewrelicproviderpropertyadminapikeyinput) | `string` | *No description.* |
| [`aliasInput`](#cdktfprovidernewrelicnewrelicproviderpropertyaliasinput) | `string` | *No description.* |
| [`apiKeyInput`](#cdktfprovidernewrelicnewrelicproviderpropertyapikeyinput) | `string` | *No description.* |
| [`apiUrlInput`](#cdktfprovidernewrelicnewrelicproviderpropertyapiurlinput) | `string` | *No description.* |
| [`cacertFileInput`](#cdktfprovidernewrelicnewrelicproviderpropertycacertfileinput) | `string` | *No description.* |
| [`infrastructureApiUrlInput`](#cdktfprovidernewrelicnewrelicproviderpropertyinfrastructureapiurlinput) | `string` | *No description.* |
| [`insecureSkipVerifyInput`](#cdktfprovidernewrelicnewrelicproviderpropertyinsecureskipverifyinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`insightsInsertKeyInput`](#cdktfprovidernewrelicnewrelicproviderpropertyinsightsinsertkeyinput) | `string` | *No description.* |
| [`insightsInsertUrlInput`](#cdktfprovidernewrelicnewrelicproviderpropertyinsightsinserturlinput) | `string` | *No description.* |
| [`insightsQueryUrlInput`](#cdktfprovidernewrelicnewrelicproviderpropertyinsightsqueryurlinput) | `string` | *No description.* |
| [`nerdgraphApiUrlInput`](#cdktfprovidernewrelicnewrelicproviderpropertynerdgraphapiurlinput) | `string` | *No description.* |
| [`regionInput`](#cdktfprovidernewrelicnewrelicproviderpropertyregioninput) | `string` | *No description.* |
| [`syntheticsApiUrlInput`](#cdktfprovidernewrelicnewrelicproviderpropertysyntheticsapiurlinput) | `string` | *No description.* |
| [`accountId`](#cdktfprovidernewrelicnewrelicproviderpropertyaccountid) | `number` | *No description.* |
| [`adminApiKey`](#cdktfprovidernewrelicnewrelicproviderpropertyadminapikey) | `string` | *No description.* |
| [`alias`](#cdktfprovidernewrelicnewrelicproviderpropertyalias) | `string` | *No description.* |
| [`apiKey`](#cdktfprovidernewrelicnewrelicproviderpropertyapikey) | `string` | *No description.* |
| [`apiUrl`](#cdktfprovidernewrelicnewrelicproviderpropertyapiurl) | `string` | *No description.* |
| [`cacertFile`](#cdktfprovidernewrelicnewrelicproviderpropertycacertfile) | `string` | *No description.* |
| [`infrastructureApiUrl`](#cdktfprovidernewrelicnewrelicproviderpropertyinfrastructureapiurl) | `string` | *No description.* |
| [`insecureSkipVerify`](#cdktfprovidernewrelicnewrelicproviderpropertyinsecureskipverify) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`insightsInsertKey`](#cdktfprovidernewrelicnewrelicproviderpropertyinsightsinsertkey) | `string` | *No description.* |
| [`insightsInsertUrl`](#cdktfprovidernewrelicnewrelicproviderpropertyinsightsinserturl) | `string` | *No description.* |
| [`insightsQueryUrl`](#cdktfprovidernewrelicnewrelicproviderpropertyinsightsqueryurl) | `string` | *No description.* |
| [`nerdgraphApiUrl`](#cdktfprovidernewrelicnewrelicproviderpropertynerdgraphapiurl) | `string` | *No description.* |
| [`region`](#cdktfprovidernewrelicnewrelicproviderpropertyregion) | `string` | *No description.* |
| [`syntheticsApiUrl`](#cdktfprovidernewrelicnewrelicproviderpropertysyntheticsapiurl) | `string` | *No description.* |

---

##### `accountIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.accountIdInput" id="cdktfprovidernewrelicnewrelicproviderpropertyaccountidinput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* `number`

---

##### `adminApiKeyInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.adminApiKeyInput" id="cdktfprovidernewrelicnewrelicproviderpropertyadminapikeyinput"></a>

```typescript
public readonly adminApiKeyInput: string;
```

- *Type:* `string`

---

##### `aliasInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.aliasInput" id="cdktfprovidernewrelicnewrelicproviderpropertyaliasinput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* `string`

---

##### `apiKeyInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.apiKeyInput" id="cdktfprovidernewrelicnewrelicproviderpropertyapikeyinput"></a>

```typescript
public readonly apiKeyInput: string;
```

- *Type:* `string`

---

##### `apiUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.apiUrlInput" id="cdktfprovidernewrelicnewrelicproviderpropertyapiurlinput"></a>

```typescript
public readonly apiUrlInput: string;
```

- *Type:* `string`

---

##### `cacertFileInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.cacertFileInput" id="cdktfprovidernewrelicnewrelicproviderpropertycacertfileinput"></a>

```typescript
public readonly cacertFileInput: string;
```

- *Type:* `string`

---

##### `infrastructureApiUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.infrastructureApiUrlInput" id="cdktfprovidernewrelicnewrelicproviderpropertyinfrastructureapiurlinput"></a>

```typescript
public readonly infrastructureApiUrlInput: string;
```

- *Type:* `string`

---

##### `insecureSkipVerifyInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.insecureSkipVerifyInput" id="cdktfprovidernewrelicnewrelicproviderpropertyinsecureskipverifyinput"></a>

```typescript
public readonly insecureSkipVerifyInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `insightsInsertKeyInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.insightsInsertKeyInput" id="cdktfprovidernewrelicnewrelicproviderpropertyinsightsinsertkeyinput"></a>

```typescript
public readonly insightsInsertKeyInput: string;
```

- *Type:* `string`

---

##### `insightsInsertUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.insightsInsertUrlInput" id="cdktfprovidernewrelicnewrelicproviderpropertyinsightsinserturlinput"></a>

```typescript
public readonly insightsInsertUrlInput: string;
```

- *Type:* `string`

---

##### `insightsQueryUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.insightsQueryUrlInput" id="cdktfprovidernewrelicnewrelicproviderpropertyinsightsqueryurlinput"></a>

```typescript
public readonly insightsQueryUrlInput: string;
```

- *Type:* `string`

---

##### `nerdgraphApiUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.nerdgraphApiUrlInput" id="cdktfprovidernewrelicnewrelicproviderpropertynerdgraphapiurlinput"></a>

```typescript
public readonly nerdgraphApiUrlInput: string;
```

- *Type:* `string`

---

##### `regionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.regionInput" id="cdktfprovidernewrelicnewrelicproviderpropertyregioninput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* `string`

---

##### `syntheticsApiUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.syntheticsApiUrlInput" id="cdktfprovidernewrelicnewrelicproviderpropertysyntheticsapiurlinput"></a>

```typescript
public readonly syntheticsApiUrlInput: string;
```

- *Type:* `string`

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.accountId" id="cdktfprovidernewrelicnewrelicproviderpropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

---

##### `adminApiKey`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.adminApiKey" id="cdktfprovidernewrelicnewrelicproviderpropertyadminapikey"></a>

```typescript
public readonly adminApiKey: string;
```

- *Type:* `string`

---

##### `alias`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.alias" id="cdktfprovidernewrelicnewrelicproviderpropertyalias"></a>

```typescript
public readonly alias: string;
```

- *Type:* `string`

---

##### `apiKey`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.apiKey" id="cdktfprovidernewrelicnewrelicproviderpropertyapikey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* `string`

---

##### `apiUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.apiUrl" id="cdktfprovidernewrelicnewrelicproviderpropertyapiurl"></a>

```typescript
public readonly apiUrl: string;
```

- *Type:* `string`

---

##### `cacertFile`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.cacertFile" id="cdktfprovidernewrelicnewrelicproviderpropertycacertfile"></a>

```typescript
public readonly cacertFile: string;
```

- *Type:* `string`

---

##### `infrastructureApiUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.infrastructureApiUrl" id="cdktfprovidernewrelicnewrelicproviderpropertyinfrastructureapiurl"></a>

```typescript
public readonly infrastructureApiUrl: string;
```

- *Type:* `string`

---

##### `insecureSkipVerify`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.insecureSkipVerify" id="cdktfprovidernewrelicnewrelicproviderpropertyinsecureskipverify"></a>

```typescript
public readonly insecureSkipVerify: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `insightsInsertKey`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.insightsInsertKey" id="cdktfprovidernewrelicnewrelicproviderpropertyinsightsinsertkey"></a>

```typescript
public readonly insightsInsertKey: string;
```

- *Type:* `string`

---

##### `insightsInsertUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.insightsInsertUrl" id="cdktfprovidernewrelicnewrelicproviderpropertyinsightsinserturl"></a>

```typescript
public readonly insightsInsertUrl: string;
```

- *Type:* `string`

---

##### `insightsQueryUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.insightsQueryUrl" id="cdktfprovidernewrelicnewrelicproviderpropertyinsightsqueryurl"></a>

```typescript
public readonly insightsQueryUrl: string;
```

- *Type:* `string`

---

##### `nerdgraphApiUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.nerdgraphApiUrl" id="cdktfprovidernewrelicnewrelicproviderpropertynerdgraphapiurl"></a>

```typescript
public readonly nerdgraphApiUrl: string;
```

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.region" id="cdktfprovidernewrelicnewrelicproviderpropertyregion"></a>

```typescript
public readonly region: string;
```

- *Type:* `string`

---

##### `syntheticsApiUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.syntheticsApiUrl" id="cdktfprovidernewrelicnewrelicproviderpropertysyntheticsapiurl"></a>

```typescript
public readonly syntheticsApiUrl: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidernewrelicnewrelicproviderpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-newrelic.NewrelicProvider.property.tfResourceType" id="cdktfprovidernewrelicnewrelicproviderpropertytfresourcetype"></a>

- *Type:* `string`

---

### NrqlAlertCondition <a name="@cdktf/provider-newrelic.NrqlAlertCondition" id="cdktfprovidernewrelicnrqlalertcondition"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition newrelic_nrql_alert_condition}.

#### Initializers <a name="@cdktf/provider-newrelic.NrqlAlertCondition.Initializer" id="cdktfprovidernewrelicnrqlalertconditioninitializer"></a>

```typescript
import { NrqlAlertCondition } from '@cdktf/provider-newrelic'

new NrqlAlertCondition(scope: Construct, id: string, config: NrqlAlertConditionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidernewrelicnrqlalertconditionparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidernewrelicnrqlalertconditionparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidernewrelicnrqlalertconditionparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-newrelic.NrqlAlertConditionConfig`](#@cdktf/provider-newrelic.NrqlAlertConditionConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.parameter.scope" id="cdktfprovidernewrelicnrqlalertconditionparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.parameter.id" id="cdktfprovidernewrelicnrqlalertconditionparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.parameter.config" id="cdktfprovidernewrelicnrqlalertconditionparameterconfig"></a>

- *Type:* [`@cdktf/provider-newrelic.NrqlAlertConditionConfig`](#@cdktf/provider-newrelic.NrqlAlertConditionConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`putCritical`](#cdktfprovidernewrelicnrqlalertconditionputcritical) | *No description.* |
| [`putNrql`](#cdktfprovidernewrelicnrqlalertconditionputnrql) | *No description.* |
| [`putWarning`](#cdktfprovidernewrelicnrqlalertconditionputwarning) | *No description.* |
| [`resetAccountId`](#cdktfprovidernewrelicnrqlalertconditionresetaccountid) | *No description.* |
| [`resetAggregationDelay`](#cdktfprovidernewrelicnrqlalertconditionresetaggregationdelay) | *No description.* |
| [`resetAggregationMethod`](#cdktfprovidernewrelicnrqlalertconditionresetaggregationmethod) | *No description.* |
| [`resetAggregationTimer`](#cdktfprovidernewrelicnrqlalertconditionresetaggregationtimer) | *No description.* |
| [`resetAggregationWindow`](#cdktfprovidernewrelicnrqlalertconditionresetaggregationwindow) | *No description.* |
| [`resetBaselineDirection`](#cdktfprovidernewrelicnrqlalertconditionresetbaselinedirection) | *No description.* |
| [`resetCloseViolationsOnExpiration`](#cdktfprovidernewrelicnrqlalertconditionresetcloseviolationsonexpiration) | *No description.* |
| [`resetCritical`](#cdktfprovidernewrelicnrqlalertconditionresetcritical) | *No description.* |
| [`resetDescription`](#cdktfprovidernewrelicnrqlalertconditionresetdescription) | *No description.* |
| [`resetEnabled`](#cdktfprovidernewrelicnrqlalertconditionresetenabled) | *No description.* |
| [`resetExpectedGroups`](#cdktfprovidernewrelicnrqlalertconditionresetexpectedgroups) | *No description.* |
| [`resetExpirationDuration`](#cdktfprovidernewrelicnrqlalertconditionresetexpirationduration) | *No description.* |
| [`resetFillOption`](#cdktfprovidernewrelicnrqlalertconditionresetfilloption) | *No description.* |
| [`resetFillValue`](#cdktfprovidernewrelicnrqlalertconditionresetfillvalue) | *No description.* |
| [`resetIgnoreOverlap`](#cdktfprovidernewrelicnrqlalertconditionresetignoreoverlap) | *No description.* |
| [`resetOpenViolationOnExpiration`](#cdktfprovidernewrelicnrqlalertconditionresetopenviolationonexpiration) | *No description.* |
| [`resetOpenViolationOnGroupOverlap`](#cdktfprovidernewrelicnrqlalertconditionresetopenviolationongroupoverlap) | *No description.* |
| [`resetRunbookUrl`](#cdktfprovidernewrelicnrqlalertconditionresetrunbookurl) | *No description.* |
| [`resetSlideBy`](#cdktfprovidernewrelicnrqlalertconditionresetslideby) | *No description.* |
| [`resetTerm`](#cdktfprovidernewrelicnrqlalertconditionresetterm) | *No description.* |
| [`resetType`](#cdktfprovidernewrelicnrqlalertconditionresettype) | *No description.* |
| [`resetValueFunction`](#cdktfprovidernewrelicnrqlalertconditionresetvaluefunction) | *No description.* |
| [`resetViolationTimeLimit`](#cdktfprovidernewrelicnrqlalertconditionresetviolationtimelimit) | *No description.* |
| [`resetViolationTimeLimitSeconds`](#cdktfprovidernewrelicnrqlalertconditionresetviolationtimelimitseconds) | *No description.* |
| [`resetWarning`](#cdktfprovidernewrelicnrqlalertconditionresetwarning) | *No description.* |

---

##### `putCritical` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.putCritical" id="cdktfprovidernewrelicnrqlalertconditionputcritical"></a>

```typescript
public putCritical(value: NrqlAlertConditionCritical)
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.parameter.value" id="cdktfprovidernewrelicnrqlalertconditionparametervalue"></a>

- *Type:* [`@cdktf/provider-newrelic.NrqlAlertConditionCritical`](#@cdktf/provider-newrelic.NrqlAlertConditionCritical)

---

##### `putNrql` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.putNrql" id="cdktfprovidernewrelicnrqlalertconditionputnrql"></a>

```typescript
public putNrql(value: NrqlAlertConditionNrql)
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.parameter.value" id="cdktfprovidernewrelicnrqlalertconditionparametervalue"></a>

- *Type:* [`@cdktf/provider-newrelic.NrqlAlertConditionNrql`](#@cdktf/provider-newrelic.NrqlAlertConditionNrql)

---

##### `putWarning` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.putWarning" id="cdktfprovidernewrelicnrqlalertconditionputwarning"></a>

```typescript
public putWarning(value: NrqlAlertConditionWarning)
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.parameter.value" id="cdktfprovidernewrelicnrqlalertconditionparametervalue"></a>

- *Type:* [`@cdktf/provider-newrelic.NrqlAlertConditionWarning`](#@cdktf/provider-newrelic.NrqlAlertConditionWarning)

---

##### `resetAccountId` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetAccountId" id="cdktfprovidernewrelicnrqlalertconditionresetaccountid"></a>

```typescript
public resetAccountId()
```

##### `resetAggregationDelay` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetAggregationDelay" id="cdktfprovidernewrelicnrqlalertconditionresetaggregationdelay"></a>

```typescript
public resetAggregationDelay()
```

##### `resetAggregationMethod` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetAggregationMethod" id="cdktfprovidernewrelicnrqlalertconditionresetaggregationmethod"></a>

```typescript
public resetAggregationMethod()
```

##### `resetAggregationTimer` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetAggregationTimer" id="cdktfprovidernewrelicnrqlalertconditionresetaggregationtimer"></a>

```typescript
public resetAggregationTimer()
```

##### `resetAggregationWindow` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetAggregationWindow" id="cdktfprovidernewrelicnrqlalertconditionresetaggregationwindow"></a>

```typescript
public resetAggregationWindow()
```

##### `resetBaselineDirection` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetBaselineDirection" id="cdktfprovidernewrelicnrqlalertconditionresetbaselinedirection"></a>

```typescript
public resetBaselineDirection()
```

##### `resetCloseViolationsOnExpiration` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetCloseViolationsOnExpiration" id="cdktfprovidernewrelicnrqlalertconditionresetcloseviolationsonexpiration"></a>

```typescript
public resetCloseViolationsOnExpiration()
```

##### `resetCritical` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetCritical" id="cdktfprovidernewrelicnrqlalertconditionresetcritical"></a>

```typescript
public resetCritical()
```

##### `resetDescription` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetDescription" id="cdktfprovidernewrelicnrqlalertconditionresetdescription"></a>

```typescript
public resetDescription()
```

##### `resetEnabled` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetEnabled" id="cdktfprovidernewrelicnrqlalertconditionresetenabled"></a>

```typescript
public resetEnabled()
```

##### `resetExpectedGroups` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetExpectedGroups" id="cdktfprovidernewrelicnrqlalertconditionresetexpectedgroups"></a>

```typescript
public resetExpectedGroups()
```

##### `resetExpirationDuration` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetExpirationDuration" id="cdktfprovidernewrelicnrqlalertconditionresetexpirationduration"></a>

```typescript
public resetExpirationDuration()
```

##### `resetFillOption` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetFillOption" id="cdktfprovidernewrelicnrqlalertconditionresetfilloption"></a>

```typescript
public resetFillOption()
```

##### `resetFillValue` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetFillValue" id="cdktfprovidernewrelicnrqlalertconditionresetfillvalue"></a>

```typescript
public resetFillValue()
```

##### `resetIgnoreOverlap` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetIgnoreOverlap" id="cdktfprovidernewrelicnrqlalertconditionresetignoreoverlap"></a>

```typescript
public resetIgnoreOverlap()
```

##### `resetOpenViolationOnExpiration` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetOpenViolationOnExpiration" id="cdktfprovidernewrelicnrqlalertconditionresetopenviolationonexpiration"></a>

```typescript
public resetOpenViolationOnExpiration()
```

##### `resetOpenViolationOnGroupOverlap` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetOpenViolationOnGroupOverlap" id="cdktfprovidernewrelicnrqlalertconditionresetopenviolationongroupoverlap"></a>

```typescript
public resetOpenViolationOnGroupOverlap()
```

##### `resetRunbookUrl` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetRunbookUrl" id="cdktfprovidernewrelicnrqlalertconditionresetrunbookurl"></a>

```typescript
public resetRunbookUrl()
```

##### `resetSlideBy` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetSlideBy" id="cdktfprovidernewrelicnrqlalertconditionresetslideby"></a>

```typescript
public resetSlideBy()
```

##### `resetTerm` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetTerm" id="cdktfprovidernewrelicnrqlalertconditionresetterm"></a>

```typescript
public resetTerm()
```

##### `resetType` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetType" id="cdktfprovidernewrelicnrqlalertconditionresettype"></a>

```typescript
public resetType()
```

##### `resetValueFunction` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetValueFunction" id="cdktfprovidernewrelicnrqlalertconditionresetvaluefunction"></a>

```typescript
public resetValueFunction()
```

##### `resetViolationTimeLimit` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetViolationTimeLimit" id="cdktfprovidernewrelicnrqlalertconditionresetviolationtimelimit"></a>

```typescript
public resetViolationTimeLimit()
```

##### `resetViolationTimeLimitSeconds` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetViolationTimeLimitSeconds" id="cdktfprovidernewrelicnrqlalertconditionresetviolationtimelimitseconds"></a>

```typescript
public resetViolationTimeLimitSeconds()
```

##### `resetWarning` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetWarning" id="cdktfprovidernewrelicnrqlalertconditionresetwarning"></a>

```typescript
public resetWarning()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`critical`](#cdktfprovidernewrelicnrqlalertconditionpropertycritical)<span title="Required">*</span> | [`@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference`](#@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference) | *No description.* |
| [`id`](#cdktfprovidernewrelicnrqlalertconditionpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`nrql`](#cdktfprovidernewrelicnrqlalertconditionpropertynrql)<span title="Required">*</span> | [`@cdktf/provider-newrelic.NrqlAlertConditionNrqlOutputReference`](#@cdktf/provider-newrelic.NrqlAlertConditionNrqlOutputReference) | *No description.* |
| [`warning`](#cdktfprovidernewrelicnrqlalertconditionpropertywarning)<span title="Required">*</span> | [`@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference`](#@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference) | *No description.* |
| [`accountIdInput`](#cdktfprovidernewrelicnrqlalertconditionpropertyaccountidinput) | `number` | *No description.* |
| [`aggregationDelayInput`](#cdktfprovidernewrelicnrqlalertconditionpropertyaggregationdelayinput) | `number` | *No description.* |
| [`aggregationMethodInput`](#cdktfprovidernewrelicnrqlalertconditionpropertyaggregationmethodinput) | `string` | *No description.* |
| [`aggregationTimerInput`](#cdktfprovidernewrelicnrqlalertconditionpropertyaggregationtimerinput) | `number` | *No description.* |
| [`aggregationWindowInput`](#cdktfprovidernewrelicnrqlalertconditionpropertyaggregationwindowinput) | `number` | *No description.* |
| [`baselineDirectionInput`](#cdktfprovidernewrelicnrqlalertconditionpropertybaselinedirectioninput) | `string` | *No description.* |
| [`closeViolationsOnExpirationInput`](#cdktfprovidernewrelicnrqlalertconditionpropertycloseviolationsonexpirationinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`criticalInput`](#cdktfprovidernewrelicnrqlalertconditionpropertycriticalinput) | [`@cdktf/provider-newrelic.NrqlAlertConditionCritical`](#@cdktf/provider-newrelic.NrqlAlertConditionCritical) | *No description.* |
| [`descriptionInput`](#cdktfprovidernewrelicnrqlalertconditionpropertydescriptioninput) | `string` | *No description.* |
| [`enabledInput`](#cdktfprovidernewrelicnrqlalertconditionpropertyenabledinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`expectedGroupsInput`](#cdktfprovidernewrelicnrqlalertconditionpropertyexpectedgroupsinput) | `number` | *No description.* |
| [`expirationDurationInput`](#cdktfprovidernewrelicnrqlalertconditionpropertyexpirationdurationinput) | `number` | *No description.* |
| [`fillOptionInput`](#cdktfprovidernewrelicnrqlalertconditionpropertyfilloptioninput) | `string` | *No description.* |
| [`fillValueInput`](#cdktfprovidernewrelicnrqlalertconditionpropertyfillvalueinput) | `number` | *No description.* |
| [`ignoreOverlapInput`](#cdktfprovidernewrelicnrqlalertconditionpropertyignoreoverlapinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`nameInput`](#cdktfprovidernewrelicnrqlalertconditionpropertynameinput) | `string` | *No description.* |
| [`nrqlInput`](#cdktfprovidernewrelicnrqlalertconditionpropertynrqlinput) | [`@cdktf/provider-newrelic.NrqlAlertConditionNrql`](#@cdktf/provider-newrelic.NrqlAlertConditionNrql) | *No description.* |
| [`openViolationOnExpirationInput`](#cdktfprovidernewrelicnrqlalertconditionpropertyopenviolationonexpirationinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`openViolationOnGroupOverlapInput`](#cdktfprovidernewrelicnrqlalertconditionpropertyopenviolationongroupoverlapinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`policyIdInput`](#cdktfprovidernewrelicnrqlalertconditionpropertypolicyidinput) | `number` | *No description.* |
| [`runbookUrlInput`](#cdktfprovidernewrelicnrqlalertconditionpropertyrunbookurlinput) | `string` | *No description.* |
| [`slideByInput`](#cdktfprovidernewrelicnrqlalertconditionpropertyslidebyinput) | `number` | *No description.* |
| [`termInput`](#cdktfprovidernewrelicnrqlalertconditionpropertyterminput) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.NrqlAlertConditionTerm`](#@cdktf/provider-newrelic.NrqlAlertConditionTerm)[] | *No description.* |
| [`typeInput`](#cdktfprovidernewrelicnrqlalertconditionpropertytypeinput) | `string` | *No description.* |
| [`valueFunctionInput`](#cdktfprovidernewrelicnrqlalertconditionpropertyvaluefunctioninput) | `string` | *No description.* |
| [`violationTimeLimitInput`](#cdktfprovidernewrelicnrqlalertconditionpropertyviolationtimelimitinput) | `string` | *No description.* |
| [`violationTimeLimitSecondsInput`](#cdktfprovidernewrelicnrqlalertconditionpropertyviolationtimelimitsecondsinput) | `number` | *No description.* |
| [`warningInput`](#cdktfprovidernewrelicnrqlalertconditionpropertywarninginput) | [`@cdktf/provider-newrelic.NrqlAlertConditionWarning`](#@cdktf/provider-newrelic.NrqlAlertConditionWarning) | *No description.* |
| [`accountId`](#cdktfprovidernewrelicnrqlalertconditionpropertyaccountid)<span title="Required">*</span> | `number` | *No description.* |
| [`aggregationDelay`](#cdktfprovidernewrelicnrqlalertconditionpropertyaggregationdelay)<span title="Required">*</span> | `number` | *No description.* |
| [`aggregationMethod`](#cdktfprovidernewrelicnrqlalertconditionpropertyaggregationmethod)<span title="Required">*</span> | `string` | *No description.* |
| [`aggregationTimer`](#cdktfprovidernewrelicnrqlalertconditionpropertyaggregationtimer)<span title="Required">*</span> | `number` | *No description.* |
| [`aggregationWindow`](#cdktfprovidernewrelicnrqlalertconditionpropertyaggregationwindow)<span title="Required">*</span> | `number` | *No description.* |
| [`baselineDirection`](#cdktfprovidernewrelicnrqlalertconditionpropertybaselinedirection)<span title="Required">*</span> | `string` | *No description.* |
| [`closeViolationsOnExpiration`](#cdktfprovidernewrelicnrqlalertconditionpropertycloseviolationsonexpiration)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`description`](#cdktfprovidernewrelicnrqlalertconditionpropertydescription)<span title="Required">*</span> | `string` | *No description.* |
| [`enabled`](#cdktfprovidernewrelicnrqlalertconditionpropertyenabled)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`expectedGroups`](#cdktfprovidernewrelicnrqlalertconditionpropertyexpectedgroups)<span title="Required">*</span> | `number` | *No description.* |
| [`expirationDuration`](#cdktfprovidernewrelicnrqlalertconditionpropertyexpirationduration)<span title="Required">*</span> | `number` | *No description.* |
| [`fillOption`](#cdktfprovidernewrelicnrqlalertconditionpropertyfilloption)<span title="Required">*</span> | `string` | *No description.* |
| [`fillValue`](#cdktfprovidernewrelicnrqlalertconditionpropertyfillvalue)<span title="Required">*</span> | `number` | *No description.* |
| [`ignoreOverlap`](#cdktfprovidernewrelicnrqlalertconditionpropertyignoreoverlap)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`name`](#cdktfprovidernewrelicnrqlalertconditionpropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`openViolationOnExpiration`](#cdktfprovidernewrelicnrqlalertconditionpropertyopenviolationonexpiration)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`openViolationOnGroupOverlap`](#cdktfprovidernewrelicnrqlalertconditionpropertyopenviolationongroupoverlap)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`policyId`](#cdktfprovidernewrelicnrqlalertconditionpropertypolicyid)<span title="Required">*</span> | `number` | *No description.* |
| [`runbookUrl`](#cdktfprovidernewrelicnrqlalertconditionpropertyrunbookurl)<span title="Required">*</span> | `string` | *No description.* |
| [`slideBy`](#cdktfprovidernewrelicnrqlalertconditionpropertyslideby)<span title="Required">*</span> | `number` | *No description.* |
| [`term`](#cdktfprovidernewrelicnrqlalertconditionpropertyterm)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.NrqlAlertConditionTerm`](#@cdktf/provider-newrelic.NrqlAlertConditionTerm)[] | *No description.* |
| [`type`](#cdktfprovidernewrelicnrqlalertconditionpropertytype)<span title="Required">*</span> | `string` | *No description.* |
| [`valueFunction`](#cdktfprovidernewrelicnrqlalertconditionpropertyvaluefunction)<span title="Required">*</span> | `string` | *No description.* |
| [`violationTimeLimit`](#cdktfprovidernewrelicnrqlalertconditionpropertyviolationtimelimit)<span title="Required">*</span> | `string` | *No description.* |
| [`violationTimeLimitSeconds`](#cdktfprovidernewrelicnrqlalertconditionpropertyviolationtimelimitseconds)<span title="Required">*</span> | `number` | *No description.* |

---

##### `critical`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.critical" id="cdktfprovidernewrelicnrqlalertconditionpropertycritical"></a>

```typescript
public readonly critical: NrqlAlertConditionCriticalOutputReference;
```

- *Type:* [`@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference`](#@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.id" id="cdktfprovidernewrelicnrqlalertconditionpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `nrql`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.nrql" id="cdktfprovidernewrelicnrqlalertconditionpropertynrql"></a>

```typescript
public readonly nrql: NrqlAlertConditionNrqlOutputReference;
```

- *Type:* [`@cdktf/provider-newrelic.NrqlAlertConditionNrqlOutputReference`](#@cdktf/provider-newrelic.NrqlAlertConditionNrqlOutputReference)

---

##### `warning`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.warning" id="cdktfprovidernewrelicnrqlalertconditionpropertywarning"></a>

```typescript
public readonly warning: NrqlAlertConditionWarningOutputReference;
```

- *Type:* [`@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference`](#@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference)

---

##### `accountIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.accountIdInput" id="cdktfprovidernewrelicnrqlalertconditionpropertyaccountidinput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* `number`

---

##### `aggregationDelayInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.aggregationDelayInput" id="cdktfprovidernewrelicnrqlalertconditionpropertyaggregationdelayinput"></a>

```typescript
public readonly aggregationDelayInput: number;
```

- *Type:* `number`

---

##### `aggregationMethodInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.aggregationMethodInput" id="cdktfprovidernewrelicnrqlalertconditionpropertyaggregationmethodinput"></a>

```typescript
public readonly aggregationMethodInput: string;
```

- *Type:* `string`

---

##### `aggregationTimerInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.aggregationTimerInput" id="cdktfprovidernewrelicnrqlalertconditionpropertyaggregationtimerinput"></a>

```typescript
public readonly aggregationTimerInput: number;
```

- *Type:* `number`

---

##### `aggregationWindowInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.aggregationWindowInput" id="cdktfprovidernewrelicnrqlalertconditionpropertyaggregationwindowinput"></a>

```typescript
public readonly aggregationWindowInput: number;
```

- *Type:* `number`

---

##### `baselineDirectionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.baselineDirectionInput" id="cdktfprovidernewrelicnrqlalertconditionpropertybaselinedirectioninput"></a>

```typescript
public readonly baselineDirectionInput: string;
```

- *Type:* `string`

---

##### `closeViolationsOnExpirationInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.closeViolationsOnExpirationInput" id="cdktfprovidernewrelicnrqlalertconditionpropertycloseviolationsonexpirationinput"></a>

```typescript
public readonly closeViolationsOnExpirationInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `criticalInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.criticalInput" id="cdktfprovidernewrelicnrqlalertconditionpropertycriticalinput"></a>

```typescript
public readonly criticalInput: NrqlAlertConditionCritical;
```

- *Type:* [`@cdktf/provider-newrelic.NrqlAlertConditionCritical`](#@cdktf/provider-newrelic.NrqlAlertConditionCritical)

---

##### `descriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.descriptionInput" id="cdktfprovidernewrelicnrqlalertconditionpropertydescriptioninput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* `string`

---

##### `enabledInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.enabledInput" id="cdktfprovidernewrelicnrqlalertconditionpropertyenabledinput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `expectedGroupsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.expectedGroupsInput" id="cdktfprovidernewrelicnrqlalertconditionpropertyexpectedgroupsinput"></a>

```typescript
public readonly expectedGroupsInput: number;
```

- *Type:* `number`

---

##### `expirationDurationInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.expirationDurationInput" id="cdktfprovidernewrelicnrqlalertconditionpropertyexpirationdurationinput"></a>

```typescript
public readonly expirationDurationInput: number;
```

- *Type:* `number`

---

##### `fillOptionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.fillOptionInput" id="cdktfprovidernewrelicnrqlalertconditionpropertyfilloptioninput"></a>

```typescript
public readonly fillOptionInput: string;
```

- *Type:* `string`

---

##### `fillValueInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.fillValueInput" id="cdktfprovidernewrelicnrqlalertconditionpropertyfillvalueinput"></a>

```typescript
public readonly fillValueInput: number;
```

- *Type:* `number`

---

##### `ignoreOverlapInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.ignoreOverlapInput" id="cdktfprovidernewrelicnrqlalertconditionpropertyignoreoverlapinput"></a>

```typescript
public readonly ignoreOverlapInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.nameInput" id="cdktfprovidernewrelicnrqlalertconditionpropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `nrqlInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.nrqlInput" id="cdktfprovidernewrelicnrqlalertconditionpropertynrqlinput"></a>

```typescript
public readonly nrqlInput: NrqlAlertConditionNrql;
```

- *Type:* [`@cdktf/provider-newrelic.NrqlAlertConditionNrql`](#@cdktf/provider-newrelic.NrqlAlertConditionNrql)

---

##### `openViolationOnExpirationInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.openViolationOnExpirationInput" id="cdktfprovidernewrelicnrqlalertconditionpropertyopenviolationonexpirationinput"></a>

```typescript
public readonly openViolationOnExpirationInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `openViolationOnGroupOverlapInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.openViolationOnGroupOverlapInput" id="cdktfprovidernewrelicnrqlalertconditionpropertyopenviolationongroupoverlapinput"></a>

```typescript
public readonly openViolationOnGroupOverlapInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `policyIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.policyIdInput" id="cdktfprovidernewrelicnrqlalertconditionpropertypolicyidinput"></a>

```typescript
public readonly policyIdInput: number;
```

- *Type:* `number`

---

##### `runbookUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.runbookUrlInput" id="cdktfprovidernewrelicnrqlalertconditionpropertyrunbookurlinput"></a>

```typescript
public readonly runbookUrlInput: string;
```

- *Type:* `string`

---

##### `slideByInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.slideByInput" id="cdktfprovidernewrelicnrqlalertconditionpropertyslidebyinput"></a>

```typescript
public readonly slideByInput: number;
```

- *Type:* `number`

---

##### `termInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.termInput" id="cdktfprovidernewrelicnrqlalertconditionpropertyterminput"></a>

```typescript
public readonly termInput: IResolvable | NrqlAlertConditionTerm[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.NrqlAlertConditionTerm`](#@cdktf/provider-newrelic.NrqlAlertConditionTerm)[]

---

##### `typeInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.typeInput" id="cdktfprovidernewrelicnrqlalertconditionpropertytypeinput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* `string`

---

##### `valueFunctionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.valueFunctionInput" id="cdktfprovidernewrelicnrqlalertconditionpropertyvaluefunctioninput"></a>

```typescript
public readonly valueFunctionInput: string;
```

- *Type:* `string`

---

##### `violationTimeLimitInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.violationTimeLimitInput" id="cdktfprovidernewrelicnrqlalertconditionpropertyviolationtimelimitinput"></a>

```typescript
public readonly violationTimeLimitInput: string;
```

- *Type:* `string`

---

##### `violationTimeLimitSecondsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.violationTimeLimitSecondsInput" id="cdktfprovidernewrelicnrqlalertconditionpropertyviolationtimelimitsecondsinput"></a>

```typescript
public readonly violationTimeLimitSecondsInput: number;
```

- *Type:* `number`

---

##### `warningInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.warningInput" id="cdktfprovidernewrelicnrqlalertconditionpropertywarninginput"></a>

```typescript
public readonly warningInput: NrqlAlertConditionWarning;
```

- *Type:* [`@cdktf/provider-newrelic.NrqlAlertConditionWarning`](#@cdktf/provider-newrelic.NrqlAlertConditionWarning)

---

##### `accountId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.accountId" id="cdktfprovidernewrelicnrqlalertconditionpropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

---

##### `aggregationDelay`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.aggregationDelay" id="cdktfprovidernewrelicnrqlalertconditionpropertyaggregationdelay"></a>

```typescript
public readonly aggregationDelay: number;
```

- *Type:* `number`

---

##### `aggregationMethod`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.aggregationMethod" id="cdktfprovidernewrelicnrqlalertconditionpropertyaggregationmethod"></a>

```typescript
public readonly aggregationMethod: string;
```

- *Type:* `string`

---

##### `aggregationTimer`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.aggregationTimer" id="cdktfprovidernewrelicnrqlalertconditionpropertyaggregationtimer"></a>

```typescript
public readonly aggregationTimer: number;
```

- *Type:* `number`

---

##### `aggregationWindow`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.aggregationWindow" id="cdktfprovidernewrelicnrqlalertconditionpropertyaggregationwindow"></a>

```typescript
public readonly aggregationWindow: number;
```

- *Type:* `number`

---

##### `baselineDirection`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.baselineDirection" id="cdktfprovidernewrelicnrqlalertconditionpropertybaselinedirection"></a>

```typescript
public readonly baselineDirection: string;
```

- *Type:* `string`

---

##### `closeViolationsOnExpiration`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.closeViolationsOnExpiration" id="cdktfprovidernewrelicnrqlalertconditionpropertycloseviolationsonexpiration"></a>

```typescript
public readonly closeViolationsOnExpiration: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `description`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.description" id="cdktfprovidernewrelicnrqlalertconditionpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.enabled" id="cdktfprovidernewrelicnrqlalertconditionpropertyenabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `expectedGroups`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.expectedGroups" id="cdktfprovidernewrelicnrqlalertconditionpropertyexpectedgroups"></a>

```typescript
public readonly expectedGroups: number;
```

- *Type:* `number`

---

##### `expirationDuration`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.expirationDuration" id="cdktfprovidernewrelicnrqlalertconditionpropertyexpirationduration"></a>

```typescript
public readonly expirationDuration: number;
```

- *Type:* `number`

---

##### `fillOption`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.fillOption" id="cdktfprovidernewrelicnrqlalertconditionpropertyfilloption"></a>

```typescript
public readonly fillOption: string;
```

- *Type:* `string`

---

##### `fillValue`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.fillValue" id="cdktfprovidernewrelicnrqlalertconditionpropertyfillvalue"></a>

```typescript
public readonly fillValue: number;
```

- *Type:* `number`

---

##### `ignoreOverlap`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.ignoreOverlap" id="cdktfprovidernewrelicnrqlalertconditionpropertyignoreoverlap"></a>

```typescript
public readonly ignoreOverlap: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.name" id="cdktfprovidernewrelicnrqlalertconditionpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `openViolationOnExpiration`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.openViolationOnExpiration" id="cdktfprovidernewrelicnrqlalertconditionpropertyopenviolationonexpiration"></a>

```typescript
public readonly openViolationOnExpiration: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `openViolationOnGroupOverlap`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.openViolationOnGroupOverlap" id="cdktfprovidernewrelicnrqlalertconditionpropertyopenviolationongroupoverlap"></a>

```typescript
public readonly openViolationOnGroupOverlap: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `policyId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.policyId" id="cdktfprovidernewrelicnrqlalertconditionpropertypolicyid"></a>

```typescript
public readonly policyId: number;
```

- *Type:* `number`

---

##### `runbookUrl`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.runbookUrl" id="cdktfprovidernewrelicnrqlalertconditionpropertyrunbookurl"></a>

```typescript
public readonly runbookUrl: string;
```

- *Type:* `string`

---

##### `slideBy`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.slideBy" id="cdktfprovidernewrelicnrqlalertconditionpropertyslideby"></a>

```typescript
public readonly slideBy: number;
```

- *Type:* `number`

---

##### `term`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.term" id="cdktfprovidernewrelicnrqlalertconditionpropertyterm"></a>

```typescript
public readonly term: IResolvable | NrqlAlertConditionTerm[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.NrqlAlertConditionTerm`](#@cdktf/provider-newrelic.NrqlAlertConditionTerm)[]

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.type" id="cdktfprovidernewrelicnrqlalertconditionpropertytype"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

##### `valueFunction`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.valueFunction" id="cdktfprovidernewrelicnrqlalertconditionpropertyvaluefunction"></a>

```typescript
public readonly valueFunction: string;
```

- *Type:* `string`

---

##### `violationTimeLimit`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.violationTimeLimit" id="cdktfprovidernewrelicnrqlalertconditionpropertyviolationtimelimit"></a>

```typescript
public readonly violationTimeLimit: string;
```

- *Type:* `string`

---

##### `violationTimeLimitSeconds`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.violationTimeLimitSeconds" id="cdktfprovidernewrelicnrqlalertconditionpropertyviolationtimelimitseconds"></a>

```typescript
public readonly violationTimeLimitSeconds: number;
```

- *Type:* `number`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidernewrelicnrqlalertconditionpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.tfResourceType" id="cdktfprovidernewrelicnrqlalertconditionpropertytfresourcetype"></a>

- *Type:* `string`

---

### NrqlDropRule <a name="@cdktf/provider-newrelic.NrqlDropRule" id="cdktfprovidernewrelicnrqldroprule"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_drop_rule newrelic_nrql_drop_rule}.

#### Initializers <a name="@cdktf/provider-newrelic.NrqlDropRule.Initializer" id="cdktfprovidernewrelicnrqldropruleinitializer"></a>

```typescript
import { NrqlDropRule } from '@cdktf/provider-newrelic'

new NrqlDropRule(scope: Construct, id: string, config: NrqlDropRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidernewrelicnrqldropruleparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidernewrelicnrqldropruleparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidernewrelicnrqldropruleparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-newrelic.NrqlDropRuleConfig`](#@cdktf/provider-newrelic.NrqlDropRuleConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlDropRule.parameter.scope" id="cdktfprovidernewrelicnrqldropruleparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlDropRule.parameter.id" id="cdktfprovidernewrelicnrqldropruleparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlDropRule.parameter.config" id="cdktfprovidernewrelicnrqldropruleparameterconfig"></a>

- *Type:* [`@cdktf/provider-newrelic.NrqlDropRuleConfig`](#@cdktf/provider-newrelic.NrqlDropRuleConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetAccountId`](#cdktfprovidernewrelicnrqldropruleresetaccountid) | *No description.* |
| [`resetDescription`](#cdktfprovidernewrelicnrqldropruleresetdescription) | *No description.* |

---

##### `resetAccountId` <a name="@cdktf/provider-newrelic.NrqlDropRule.resetAccountId" id="cdktfprovidernewrelicnrqldropruleresetaccountid"></a>

```typescript
public resetAccountId()
```

##### `resetDescription` <a name="@cdktf/provider-newrelic.NrqlDropRule.resetDescription" id="cdktfprovidernewrelicnrqldropruleresetdescription"></a>

```typescript
public resetDescription()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`id`](#cdktfprovidernewrelicnrqldroprulepropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`ruleId`](#cdktfprovidernewrelicnrqldroprulepropertyruleid)<span title="Required">*</span> | `string` | *No description.* |
| [`accountIdInput`](#cdktfprovidernewrelicnrqldroprulepropertyaccountidinput) | `number` | *No description.* |
| [`actionInput`](#cdktfprovidernewrelicnrqldroprulepropertyactioninput) | `string` | *No description.* |
| [`descriptionInput`](#cdktfprovidernewrelicnrqldroprulepropertydescriptioninput) | `string` | *No description.* |
| [`nrqlInput`](#cdktfprovidernewrelicnrqldroprulepropertynrqlinput) | `string` | *No description.* |
| [`accountId`](#cdktfprovidernewrelicnrqldroprulepropertyaccountid)<span title="Required">*</span> | `number` | *No description.* |
| [`action`](#cdktfprovidernewrelicnrqldroprulepropertyaction)<span title="Required">*</span> | `string` | *No description.* |
| [`description`](#cdktfprovidernewrelicnrqldroprulepropertydescription)<span title="Required">*</span> | `string` | *No description.* |
| [`nrql`](#cdktfprovidernewrelicnrqldroprulepropertynrql)<span title="Required">*</span> | `string` | *No description.* |

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlDropRule.property.id" id="cdktfprovidernewrelicnrqldroprulepropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `ruleId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlDropRule.property.ruleId" id="cdktfprovidernewrelicnrqldroprulepropertyruleid"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* `string`

---

##### `accountIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlDropRule.property.accountIdInput" id="cdktfprovidernewrelicnrqldroprulepropertyaccountidinput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* `number`

---

##### `actionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlDropRule.property.actionInput" id="cdktfprovidernewrelicnrqldroprulepropertyactioninput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* `string`

---

##### `descriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlDropRule.property.descriptionInput" id="cdktfprovidernewrelicnrqldroprulepropertydescriptioninput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* `string`

---

##### `nrqlInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlDropRule.property.nrqlInput" id="cdktfprovidernewrelicnrqldroprulepropertynrqlinput"></a>

```typescript
public readonly nrqlInput: string;
```

- *Type:* `string`

---

##### `accountId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlDropRule.property.accountId" id="cdktfprovidernewrelicnrqldroprulepropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

---

##### `action`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlDropRule.property.action" id="cdktfprovidernewrelicnrqldroprulepropertyaction"></a>

```typescript
public readonly action: string;
```

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlDropRule.property.description" id="cdktfprovidernewrelicnrqldroprulepropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `nrql`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlDropRule.property.nrql" id="cdktfprovidernewrelicnrqldroprulepropertynrql"></a>

```typescript
public readonly nrql: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidernewrelicnrqldroprulepropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-newrelic.NrqlDropRule.property.tfResourceType" id="cdktfprovidernewrelicnrqldroprulepropertytfresourcetype"></a>

- *Type:* `string`

---

### OneDashboard <a name="@cdktf/provider-newrelic.OneDashboard" id="cdktfprovidernewreliconedashboard"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard newrelic_one_dashboard}.

#### Initializers <a name="@cdktf/provider-newrelic.OneDashboard.Initializer" id="cdktfprovidernewreliconedashboardinitializer"></a>

```typescript
import { OneDashboard } from '@cdktf/provider-newrelic'

new OneDashboard(scope: Construct, id: string, config: OneDashboardConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidernewreliconedashboardparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidernewreliconedashboardparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidernewreliconedashboardparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-newrelic.OneDashboardConfig`](#@cdktf/provider-newrelic.OneDashboardConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboard.parameter.scope" id="cdktfprovidernewreliconedashboardparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboard.parameter.id" id="cdktfprovidernewreliconedashboardparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboard.parameter.config" id="cdktfprovidernewreliconedashboardparameterconfig"></a>

- *Type:* [`@cdktf/provider-newrelic.OneDashboardConfig`](#@cdktf/provider-newrelic.OneDashboardConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetAccountId`](#cdktfprovidernewreliconedashboardresetaccountid) | *No description.* |
| [`resetDescription`](#cdktfprovidernewreliconedashboardresetdescription) | *No description.* |
| [`resetPermissions`](#cdktfprovidernewreliconedashboardresetpermissions) | *No description.* |

---

##### `resetAccountId` <a name="@cdktf/provider-newrelic.OneDashboard.resetAccountId" id="cdktfprovidernewreliconedashboardresetaccountid"></a>

```typescript
public resetAccountId()
```

##### `resetDescription` <a name="@cdktf/provider-newrelic.OneDashboard.resetDescription" id="cdktfprovidernewreliconedashboardresetdescription"></a>

```typescript
public resetDescription()
```

##### `resetPermissions` <a name="@cdktf/provider-newrelic.OneDashboard.resetPermissions" id="cdktfprovidernewreliconedashboardresetpermissions"></a>

```typescript
public resetPermissions()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`guid`](#cdktfprovidernewreliconedashboardpropertyguid)<span title="Required">*</span> | `string` | *No description.* |
| [`id`](#cdktfprovidernewreliconedashboardpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`permalink`](#cdktfprovidernewreliconedashboardpropertypermalink)<span title="Required">*</span> | `string` | *No description.* |
| [`accountIdInput`](#cdktfprovidernewreliconedashboardpropertyaccountidinput) | `number` | *No description.* |
| [`descriptionInput`](#cdktfprovidernewreliconedashboardpropertydescriptioninput) | `string` | *No description.* |
| [`nameInput`](#cdktfprovidernewreliconedashboardpropertynameinput) | `string` | *No description.* |
| [`pageInput`](#cdktfprovidernewreliconedashboardpropertypageinput) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.OneDashboardPage`](#@cdktf/provider-newrelic.OneDashboardPage)[] | *No description.* |
| [`permissionsInput`](#cdktfprovidernewreliconedashboardpropertypermissionsinput) | `string` | *No description.* |
| [`accountId`](#cdktfprovidernewreliconedashboardpropertyaccountid)<span title="Required">*</span> | `number` | *No description.* |
| [`description`](#cdktfprovidernewreliconedashboardpropertydescription)<span title="Required">*</span> | `string` | *No description.* |
| [`name`](#cdktfprovidernewreliconedashboardpropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`page`](#cdktfprovidernewreliconedashboardpropertypage)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.OneDashboardPage`](#@cdktf/provider-newrelic.OneDashboardPage)[] | *No description.* |
| [`permissions`](#cdktfprovidernewreliconedashboardpropertypermissions)<span title="Required">*</span> | `string` | *No description.* |

---

##### `guid`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboard.property.guid" id="cdktfprovidernewreliconedashboardpropertyguid"></a>

```typescript
public readonly guid: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboard.property.id" id="cdktfprovidernewreliconedashboardpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `permalink`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboard.property.permalink" id="cdktfprovidernewreliconedashboardpropertypermalink"></a>

```typescript
public readonly permalink: string;
```

- *Type:* `string`

---

##### `accountIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboard.property.accountIdInput" id="cdktfprovidernewreliconedashboardpropertyaccountidinput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* `number`

---

##### `descriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboard.property.descriptionInput" id="cdktfprovidernewreliconedashboardpropertydescriptioninput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboard.property.nameInput" id="cdktfprovidernewreliconedashboardpropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `pageInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboard.property.pageInput" id="cdktfprovidernewreliconedashboardpropertypageinput"></a>

```typescript
public readonly pageInput: IResolvable | OneDashboardPage[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.OneDashboardPage`](#@cdktf/provider-newrelic.OneDashboardPage)[]

---

##### `permissionsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboard.property.permissionsInput" id="cdktfprovidernewreliconedashboardpropertypermissionsinput"></a>

```typescript
public readonly permissionsInput: string;
```

- *Type:* `string`

---

##### `accountId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboard.property.accountId" id="cdktfprovidernewreliconedashboardpropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

---

##### `description`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboard.property.description" id="cdktfprovidernewreliconedashboardpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboard.property.name" id="cdktfprovidernewreliconedashboardpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `page`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboard.property.page" id="cdktfprovidernewreliconedashboardpropertypage"></a>

```typescript
public readonly page: IResolvable | OneDashboardPage[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.OneDashboardPage`](#@cdktf/provider-newrelic.OneDashboardPage)[]

---

##### `permissions`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboard.property.permissions" id="cdktfprovidernewreliconedashboardpropertypermissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidernewreliconedashboardpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-newrelic.OneDashboard.property.tfResourceType" id="cdktfprovidernewreliconedashboardpropertytfresourcetype"></a>

- *Type:* `string`

---

### OneDashboardRaw <a name="@cdktf/provider-newrelic.OneDashboardRaw" id="cdktfprovidernewreliconedashboardraw"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw newrelic_one_dashboard_raw}.

#### Initializers <a name="@cdktf/provider-newrelic.OneDashboardRaw.Initializer" id="cdktfprovidernewreliconedashboardrawinitializer"></a>

```typescript
import { OneDashboardRaw } from '@cdktf/provider-newrelic'

new OneDashboardRaw(scope: Construct, id: string, config: OneDashboardRawConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidernewreliconedashboardrawparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidernewreliconedashboardrawparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidernewreliconedashboardrawparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-newrelic.OneDashboardRawConfig`](#@cdktf/provider-newrelic.OneDashboardRawConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardRaw.parameter.scope" id="cdktfprovidernewreliconedashboardrawparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardRaw.parameter.id" id="cdktfprovidernewreliconedashboardrawparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardRaw.parameter.config" id="cdktfprovidernewreliconedashboardrawparameterconfig"></a>

- *Type:* [`@cdktf/provider-newrelic.OneDashboardRawConfig`](#@cdktf/provider-newrelic.OneDashboardRawConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetAccountId`](#cdktfprovidernewreliconedashboardrawresetaccountid) | *No description.* |
| [`resetDescription`](#cdktfprovidernewreliconedashboardrawresetdescription) | *No description.* |
| [`resetPermissions`](#cdktfprovidernewreliconedashboardrawresetpermissions) | *No description.* |

---

##### `resetAccountId` <a name="@cdktf/provider-newrelic.OneDashboardRaw.resetAccountId" id="cdktfprovidernewreliconedashboardrawresetaccountid"></a>

```typescript
public resetAccountId()
```

##### `resetDescription` <a name="@cdktf/provider-newrelic.OneDashboardRaw.resetDescription" id="cdktfprovidernewreliconedashboardrawresetdescription"></a>

```typescript
public resetDescription()
```

##### `resetPermissions` <a name="@cdktf/provider-newrelic.OneDashboardRaw.resetPermissions" id="cdktfprovidernewreliconedashboardrawresetpermissions"></a>

```typescript
public resetPermissions()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`guid`](#cdktfprovidernewreliconedashboardrawpropertyguid)<span title="Required">*</span> | `string` | *No description.* |
| [`id`](#cdktfprovidernewreliconedashboardrawpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`permalink`](#cdktfprovidernewreliconedashboardrawpropertypermalink)<span title="Required">*</span> | `string` | *No description.* |
| [`accountIdInput`](#cdktfprovidernewreliconedashboardrawpropertyaccountidinput) | `number` | *No description.* |
| [`descriptionInput`](#cdktfprovidernewreliconedashboardrawpropertydescriptioninput) | `string` | *No description.* |
| [`nameInput`](#cdktfprovidernewreliconedashboardrawpropertynameinput) | `string` | *No description.* |
| [`pageInput`](#cdktfprovidernewreliconedashboardrawpropertypageinput) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.OneDashboardRawPage`](#@cdktf/provider-newrelic.OneDashboardRawPage)[] | *No description.* |
| [`permissionsInput`](#cdktfprovidernewreliconedashboardrawpropertypermissionsinput) | `string` | *No description.* |
| [`accountId`](#cdktfprovidernewreliconedashboardrawpropertyaccountid)<span title="Required">*</span> | `number` | *No description.* |
| [`description`](#cdktfprovidernewreliconedashboardrawpropertydescription)<span title="Required">*</span> | `string` | *No description.* |
| [`name`](#cdktfprovidernewreliconedashboardrawpropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`page`](#cdktfprovidernewreliconedashboardrawpropertypage)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.OneDashboardRawPage`](#@cdktf/provider-newrelic.OneDashboardRawPage)[] | *No description.* |
| [`permissions`](#cdktfprovidernewreliconedashboardrawpropertypermissions)<span title="Required">*</span> | `string` | *No description.* |

---

##### `guid`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardRaw.property.guid" id="cdktfprovidernewreliconedashboardrawpropertyguid"></a>

```typescript
public readonly guid: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardRaw.property.id" id="cdktfprovidernewreliconedashboardrawpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `permalink`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardRaw.property.permalink" id="cdktfprovidernewreliconedashboardrawpropertypermalink"></a>

```typescript
public readonly permalink: string;
```

- *Type:* `string`

---

##### `accountIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRaw.property.accountIdInput" id="cdktfprovidernewreliconedashboardrawpropertyaccountidinput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* `number`

---

##### `descriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRaw.property.descriptionInput" id="cdktfprovidernewreliconedashboardrawpropertydescriptioninput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRaw.property.nameInput" id="cdktfprovidernewreliconedashboardrawpropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `pageInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRaw.property.pageInput" id="cdktfprovidernewreliconedashboardrawpropertypageinput"></a>

```typescript
public readonly pageInput: IResolvable | OneDashboardRawPage[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.OneDashboardRawPage`](#@cdktf/provider-newrelic.OneDashboardRawPage)[]

---

##### `permissionsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRaw.property.permissionsInput" id="cdktfprovidernewreliconedashboardrawpropertypermissionsinput"></a>

```typescript
public readonly permissionsInput: string;
```

- *Type:* `string`

---

##### `accountId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardRaw.property.accountId" id="cdktfprovidernewreliconedashboardrawpropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

---

##### `description`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardRaw.property.description" id="cdktfprovidernewreliconedashboardrawpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardRaw.property.name" id="cdktfprovidernewreliconedashboardrawpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `page`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardRaw.property.page" id="cdktfprovidernewreliconedashboardrawpropertypage"></a>

```typescript
public readonly page: IResolvable | OneDashboardRawPage[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.OneDashboardRawPage`](#@cdktf/provider-newrelic.OneDashboardRawPage)[]

---

##### `permissions`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardRaw.property.permissions" id="cdktfprovidernewreliconedashboardrawpropertypermissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidernewreliconedashboardrawpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-newrelic.OneDashboardRaw.property.tfResourceType" id="cdktfprovidernewreliconedashboardrawpropertytfresourcetype"></a>

- *Type:* `string`

---

### PluginsAlertCondition <a name="@cdktf/provider-newrelic.PluginsAlertCondition" id="cdktfprovidernewrelicpluginsalertcondition"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition newrelic_plugins_alert_condition}.

#### Initializers <a name="@cdktf/provider-newrelic.PluginsAlertCondition.Initializer" id="cdktfprovidernewrelicpluginsalertconditioninitializer"></a>

```typescript
import { PluginsAlertCondition } from '@cdktf/provider-newrelic'

new PluginsAlertCondition(scope: Construct, id: string, config: PluginsAlertConditionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidernewrelicpluginsalertconditionparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidernewrelicpluginsalertconditionparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidernewrelicpluginsalertconditionparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-newrelic.PluginsAlertConditionConfig`](#@cdktf/provider-newrelic.PluginsAlertConditionConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.parameter.scope" id="cdktfprovidernewrelicpluginsalertconditionparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.parameter.id" id="cdktfprovidernewrelicpluginsalertconditionparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.parameter.config" id="cdktfprovidernewrelicpluginsalertconditionparameterconfig"></a>

- *Type:* [`@cdktf/provider-newrelic.PluginsAlertConditionConfig`](#@cdktf/provider-newrelic.PluginsAlertConditionConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetEnabled`](#cdktfprovidernewrelicpluginsalertconditionresetenabled) | *No description.* |
| [`resetRunbookUrl`](#cdktfprovidernewrelicpluginsalertconditionresetrunbookurl) | *No description.* |

---

##### `resetEnabled` <a name="@cdktf/provider-newrelic.PluginsAlertCondition.resetEnabled" id="cdktfprovidernewrelicpluginsalertconditionresetenabled"></a>

```typescript
public resetEnabled()
```

##### `resetRunbookUrl` <a name="@cdktf/provider-newrelic.PluginsAlertCondition.resetRunbookUrl" id="cdktfprovidernewrelicpluginsalertconditionresetrunbookurl"></a>

```typescript
public resetRunbookUrl()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`id`](#cdktfprovidernewrelicpluginsalertconditionpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`enabledInput`](#cdktfprovidernewrelicpluginsalertconditionpropertyenabledinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`entitiesInput`](#cdktfprovidernewrelicpluginsalertconditionpropertyentitiesinput) | `number`[] | *No description.* |
| [`metricDescriptionInput`](#cdktfprovidernewrelicpluginsalertconditionpropertymetricdescriptioninput) | `string` | *No description.* |
| [`metricInput`](#cdktfprovidernewrelicpluginsalertconditionpropertymetricinput) | `string` | *No description.* |
| [`nameInput`](#cdktfprovidernewrelicpluginsalertconditionpropertynameinput) | `string` | *No description.* |
| [`pluginGuidInput`](#cdktfprovidernewrelicpluginsalertconditionpropertypluginguidinput) | `string` | *No description.* |
| [`pluginIdInput`](#cdktfprovidernewrelicpluginsalertconditionpropertypluginidinput) | `string` | *No description.* |
| [`policyIdInput`](#cdktfprovidernewrelicpluginsalertconditionpropertypolicyidinput) | `number` | *No description.* |
| [`runbookUrlInput`](#cdktfprovidernewrelicpluginsalertconditionpropertyrunbookurlinput) | `string` | *No description.* |
| [`termInput`](#cdktfprovidernewrelicpluginsalertconditionpropertyterminput) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.PluginsAlertConditionTerm`](#@cdktf/provider-newrelic.PluginsAlertConditionTerm)[] | *No description.* |
| [`valueFunctionInput`](#cdktfprovidernewrelicpluginsalertconditionpropertyvaluefunctioninput) | `string` | *No description.* |
| [`enabled`](#cdktfprovidernewrelicpluginsalertconditionpropertyenabled)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`entities`](#cdktfprovidernewrelicpluginsalertconditionpropertyentities)<span title="Required">*</span> | `number`[] | *No description.* |
| [`metric`](#cdktfprovidernewrelicpluginsalertconditionpropertymetric)<span title="Required">*</span> | `string` | *No description.* |
| [`metricDescription`](#cdktfprovidernewrelicpluginsalertconditionpropertymetricdescription)<span title="Required">*</span> | `string` | *No description.* |
| [`name`](#cdktfprovidernewrelicpluginsalertconditionpropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`pluginGuid`](#cdktfprovidernewrelicpluginsalertconditionpropertypluginguid)<span title="Required">*</span> | `string` | *No description.* |
| [`pluginId`](#cdktfprovidernewrelicpluginsalertconditionpropertypluginid)<span title="Required">*</span> | `string` | *No description.* |
| [`policyId`](#cdktfprovidernewrelicpluginsalertconditionpropertypolicyid)<span title="Required">*</span> | `number` | *No description.* |
| [`runbookUrl`](#cdktfprovidernewrelicpluginsalertconditionpropertyrunbookurl)<span title="Required">*</span> | `string` | *No description.* |
| [`term`](#cdktfprovidernewrelicpluginsalertconditionpropertyterm)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.PluginsAlertConditionTerm`](#@cdktf/provider-newrelic.PluginsAlertConditionTerm)[] | *No description.* |
| [`valueFunction`](#cdktfprovidernewrelicpluginsalertconditionpropertyvaluefunction)<span title="Required">*</span> | `string` | *No description.* |

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.id" id="cdktfprovidernewrelicpluginsalertconditionpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `enabledInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.enabledInput" id="cdktfprovidernewrelicpluginsalertconditionpropertyenabledinput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `entitiesInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.entitiesInput" id="cdktfprovidernewrelicpluginsalertconditionpropertyentitiesinput"></a>

```typescript
public readonly entitiesInput: number[];
```

- *Type:* `number`[]

---

##### `metricDescriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.metricDescriptionInput" id="cdktfprovidernewrelicpluginsalertconditionpropertymetricdescriptioninput"></a>

```typescript
public readonly metricDescriptionInput: string;
```

- *Type:* `string`

---

##### `metricInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.metricInput" id="cdktfprovidernewrelicpluginsalertconditionpropertymetricinput"></a>

```typescript
public readonly metricInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.nameInput" id="cdktfprovidernewrelicpluginsalertconditionpropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `pluginGuidInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.pluginGuidInput" id="cdktfprovidernewrelicpluginsalertconditionpropertypluginguidinput"></a>

```typescript
public readonly pluginGuidInput: string;
```

- *Type:* `string`

---

##### `pluginIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.pluginIdInput" id="cdktfprovidernewrelicpluginsalertconditionpropertypluginidinput"></a>

```typescript
public readonly pluginIdInput: string;
```

- *Type:* `string`

---

##### `policyIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.policyIdInput" id="cdktfprovidernewrelicpluginsalertconditionpropertypolicyidinput"></a>

```typescript
public readonly policyIdInput: number;
```

- *Type:* `number`

---

##### `runbookUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.runbookUrlInput" id="cdktfprovidernewrelicpluginsalertconditionpropertyrunbookurlinput"></a>

```typescript
public readonly runbookUrlInput: string;
```

- *Type:* `string`

---

##### `termInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.termInput" id="cdktfprovidernewrelicpluginsalertconditionpropertyterminput"></a>

```typescript
public readonly termInput: IResolvable | PluginsAlertConditionTerm[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.PluginsAlertConditionTerm`](#@cdktf/provider-newrelic.PluginsAlertConditionTerm)[]

---

##### `valueFunctionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.valueFunctionInput" id="cdktfprovidernewrelicpluginsalertconditionpropertyvaluefunctioninput"></a>

```typescript
public readonly valueFunctionInput: string;
```

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.enabled" id="cdktfprovidernewrelicpluginsalertconditionpropertyenabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `entities`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.entities" id="cdktfprovidernewrelicpluginsalertconditionpropertyentities"></a>

```typescript
public readonly entities: number[];
```

- *Type:* `number`[]

---

##### `metric`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.metric" id="cdktfprovidernewrelicpluginsalertconditionpropertymetric"></a>

```typescript
public readonly metric: string;
```

- *Type:* `string`

---

##### `metricDescription`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.metricDescription" id="cdktfprovidernewrelicpluginsalertconditionpropertymetricdescription"></a>

```typescript
public readonly metricDescription: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.name" id="cdktfprovidernewrelicpluginsalertconditionpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `pluginGuid`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.pluginGuid" id="cdktfprovidernewrelicpluginsalertconditionpropertypluginguid"></a>

```typescript
public readonly pluginGuid: string;
```

- *Type:* `string`

---

##### `pluginId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.pluginId" id="cdktfprovidernewrelicpluginsalertconditionpropertypluginid"></a>

```typescript
public readonly pluginId: string;
```

- *Type:* `string`

---

##### `policyId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.policyId" id="cdktfprovidernewrelicpluginsalertconditionpropertypolicyid"></a>

```typescript
public readonly policyId: number;
```

- *Type:* `number`

---

##### `runbookUrl`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.runbookUrl" id="cdktfprovidernewrelicpluginsalertconditionpropertyrunbookurl"></a>

```typescript
public readonly runbookUrl: string;
```

- *Type:* `string`

---

##### `term`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.term" id="cdktfprovidernewrelicpluginsalertconditionpropertyterm"></a>

```typescript
public readonly term: IResolvable | PluginsAlertConditionTerm[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.PluginsAlertConditionTerm`](#@cdktf/provider-newrelic.PluginsAlertConditionTerm)[]

---

##### `valueFunction`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.valueFunction" id="cdktfprovidernewrelicpluginsalertconditionpropertyvaluefunction"></a>

```typescript
public readonly valueFunction: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidernewrelicpluginsalertconditionpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.tfResourceType" id="cdktfprovidernewrelicpluginsalertconditionpropertytfresourcetype"></a>

- *Type:* `string`

---

### ServiceLevel <a name="@cdktf/provider-newrelic.ServiceLevel" id="cdktfprovidernewrelicservicelevel"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/service_level newrelic_service_level}.

#### Initializers <a name="@cdktf/provider-newrelic.ServiceLevel.Initializer" id="cdktfprovidernewrelicservicelevelinitializer"></a>

```typescript
import { ServiceLevel } from '@cdktf/provider-newrelic'

new ServiceLevel(scope: Construct, id: string, config: ServiceLevelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidernewrelicservicelevelparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidernewrelicservicelevelparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidernewrelicservicelevelparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-newrelic.ServiceLevelConfig`](#@cdktf/provider-newrelic.ServiceLevelConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevel.parameter.scope" id="cdktfprovidernewrelicservicelevelparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevel.parameter.id" id="cdktfprovidernewrelicservicelevelparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevel.parameter.config" id="cdktfprovidernewrelicservicelevelparameterconfig"></a>

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelConfig`](#@cdktf/provider-newrelic.ServiceLevelConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`putEvents`](#cdktfprovidernewrelicservicelevelputevents) | *No description.* |
| [`resetDescription`](#cdktfprovidernewrelicservicelevelresetdescription) | *No description.* |
| [`resetObjective`](#cdktfprovidernewrelicservicelevelresetobjective) | *No description.* |

---

##### `putEvents` <a name="@cdktf/provider-newrelic.ServiceLevel.putEvents" id="cdktfprovidernewrelicservicelevelputevents"></a>

```typescript
public putEvents(value: ServiceLevelEvents)
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevel.parameter.value" id="cdktfprovidernewrelicservicelevelparametervalue"></a>

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelEvents`](#@cdktf/provider-newrelic.ServiceLevelEvents)

---

##### `resetDescription` <a name="@cdktf/provider-newrelic.ServiceLevel.resetDescription" id="cdktfprovidernewrelicservicelevelresetdescription"></a>

```typescript
public resetDescription()
```

##### `resetObjective` <a name="@cdktf/provider-newrelic.ServiceLevel.resetObjective" id="cdktfprovidernewrelicservicelevelresetobjective"></a>

```typescript
public resetObjective()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`events`](#cdktfprovidernewrelicservicelevelpropertyevents)<span title="Required">*</span> | [`@cdktf/provider-newrelic.ServiceLevelEventsOutputReference`](#@cdktf/provider-newrelic.ServiceLevelEventsOutputReference) | *No description.* |
| [`id`](#cdktfprovidernewrelicservicelevelpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`sliId`](#cdktfprovidernewrelicservicelevelpropertysliid)<span title="Required">*</span> | `string` | *No description.* |
| [`descriptionInput`](#cdktfprovidernewrelicservicelevelpropertydescriptioninput) | `string` | *No description.* |
| [`eventsInput`](#cdktfprovidernewrelicservicelevelpropertyeventsinput) | [`@cdktf/provider-newrelic.ServiceLevelEvents`](#@cdktf/provider-newrelic.ServiceLevelEvents) | *No description.* |
| [`guidInput`](#cdktfprovidernewrelicservicelevelpropertyguidinput) | `string` | *No description.* |
| [`nameInput`](#cdktfprovidernewrelicservicelevelpropertynameinput) | `string` | *No description.* |
| [`objectiveInput`](#cdktfprovidernewrelicservicelevelpropertyobjectiveinput) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.ServiceLevelObjective`](#@cdktf/provider-newrelic.ServiceLevelObjective)[] | *No description.* |
| [`description`](#cdktfprovidernewrelicservicelevelpropertydescription)<span title="Required">*</span> | `string` | *No description.* |
| [`guid`](#cdktfprovidernewrelicservicelevelpropertyguid)<span title="Required">*</span> | `string` | *No description.* |
| [`name`](#cdktfprovidernewrelicservicelevelpropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`objective`](#cdktfprovidernewrelicservicelevelpropertyobjective)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.ServiceLevelObjective`](#@cdktf/provider-newrelic.ServiceLevelObjective)[] | *No description.* |

---

##### `events`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevel.property.events" id="cdktfprovidernewrelicservicelevelpropertyevents"></a>

```typescript
public readonly events: ServiceLevelEventsOutputReference;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelEventsOutputReference`](#@cdktf/provider-newrelic.ServiceLevelEventsOutputReference)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevel.property.id" id="cdktfprovidernewrelicservicelevelpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `sliId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevel.property.sliId" id="cdktfprovidernewrelicservicelevelpropertysliid"></a>

```typescript
public readonly sliId: string;
```

- *Type:* `string`

---

##### `descriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevel.property.descriptionInput" id="cdktfprovidernewrelicservicelevelpropertydescriptioninput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* `string`

---

##### `eventsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevel.property.eventsInput" id="cdktfprovidernewrelicservicelevelpropertyeventsinput"></a>

```typescript
public readonly eventsInput: ServiceLevelEvents;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelEvents`](#@cdktf/provider-newrelic.ServiceLevelEvents)

---

##### `guidInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevel.property.guidInput" id="cdktfprovidernewrelicservicelevelpropertyguidinput"></a>

```typescript
public readonly guidInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevel.property.nameInput" id="cdktfprovidernewrelicservicelevelpropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `objectiveInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevel.property.objectiveInput" id="cdktfprovidernewrelicservicelevelpropertyobjectiveinput"></a>

```typescript
public readonly objectiveInput: IResolvable | ServiceLevelObjective[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.ServiceLevelObjective`](#@cdktf/provider-newrelic.ServiceLevelObjective)[]

---

##### `description`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevel.property.description" id="cdktfprovidernewrelicservicelevelpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `guid`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevel.property.guid" id="cdktfprovidernewrelicservicelevelpropertyguid"></a>

```typescript
public readonly guid: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevel.property.name" id="cdktfprovidernewrelicservicelevelpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `objective`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevel.property.objective" id="cdktfprovidernewrelicservicelevelpropertyobjective"></a>

```typescript
public readonly objective: IResolvable | ServiceLevelObjective[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.ServiceLevelObjective`](#@cdktf/provider-newrelic.ServiceLevelObjective)[]

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidernewrelicservicelevelpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-newrelic.ServiceLevel.property.tfResourceType" id="cdktfprovidernewrelicservicelevelpropertytfresourcetype"></a>

- *Type:* `string`

---

### SyntheticsAlertCondition <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition" id="cdktfprovidernewrelicsyntheticsalertcondition"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_alert_condition newrelic_synthetics_alert_condition}.

#### Initializers <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition.Initializer" id="cdktfprovidernewrelicsyntheticsalertconditioninitializer"></a>

```typescript
import { SyntheticsAlertCondition } from '@cdktf/provider-newrelic'

new SyntheticsAlertCondition(scope: Construct, id: string, config: SyntheticsAlertConditionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidernewrelicsyntheticsalertconditionparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidernewrelicsyntheticsalertconditionparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidernewrelicsyntheticsalertconditionparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-newrelic.SyntheticsAlertConditionConfig`](#@cdktf/provider-newrelic.SyntheticsAlertConditionConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition.parameter.scope" id="cdktfprovidernewrelicsyntheticsalertconditionparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition.parameter.id" id="cdktfprovidernewrelicsyntheticsalertconditionparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition.parameter.config" id="cdktfprovidernewrelicsyntheticsalertconditionparameterconfig"></a>

- *Type:* [`@cdktf/provider-newrelic.SyntheticsAlertConditionConfig`](#@cdktf/provider-newrelic.SyntheticsAlertConditionConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetEnabled`](#cdktfprovidernewrelicsyntheticsalertconditionresetenabled) | *No description.* |
| [`resetRunbookUrl`](#cdktfprovidernewrelicsyntheticsalertconditionresetrunbookurl) | *No description.* |

---

##### `resetEnabled` <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition.resetEnabled" id="cdktfprovidernewrelicsyntheticsalertconditionresetenabled"></a>

```typescript
public resetEnabled()
```

##### `resetRunbookUrl` <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition.resetRunbookUrl" id="cdktfprovidernewrelicsyntheticsalertconditionresetrunbookurl"></a>

```typescript
public resetRunbookUrl()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`id`](#cdktfprovidernewrelicsyntheticsalertconditionpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`enabledInput`](#cdktfprovidernewrelicsyntheticsalertconditionpropertyenabledinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`monitorIdInput`](#cdktfprovidernewrelicsyntheticsalertconditionpropertymonitoridinput) | `string` | *No description.* |
| [`nameInput`](#cdktfprovidernewrelicsyntheticsalertconditionpropertynameinput) | `string` | *No description.* |
| [`policyIdInput`](#cdktfprovidernewrelicsyntheticsalertconditionpropertypolicyidinput) | `number` | *No description.* |
| [`runbookUrlInput`](#cdktfprovidernewrelicsyntheticsalertconditionpropertyrunbookurlinput) | `string` | *No description.* |
| [`enabled`](#cdktfprovidernewrelicsyntheticsalertconditionpropertyenabled)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`monitorId`](#cdktfprovidernewrelicsyntheticsalertconditionpropertymonitorid)<span title="Required">*</span> | `string` | *No description.* |
| [`name`](#cdktfprovidernewrelicsyntheticsalertconditionpropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`policyId`](#cdktfprovidernewrelicsyntheticsalertconditionpropertypolicyid)<span title="Required">*</span> | `number` | *No description.* |
| [`runbookUrl`](#cdktfprovidernewrelicsyntheticsalertconditionpropertyrunbookurl)<span title="Required">*</span> | `string` | *No description.* |

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition.property.id" id="cdktfprovidernewrelicsyntheticsalertconditionpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `enabledInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition.property.enabledInput" id="cdktfprovidernewrelicsyntheticsalertconditionpropertyenabledinput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `monitorIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition.property.monitorIdInput" id="cdktfprovidernewrelicsyntheticsalertconditionpropertymonitoridinput"></a>

```typescript
public readonly monitorIdInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition.property.nameInput" id="cdktfprovidernewrelicsyntheticsalertconditionpropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `policyIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition.property.policyIdInput" id="cdktfprovidernewrelicsyntheticsalertconditionpropertypolicyidinput"></a>

```typescript
public readonly policyIdInput: number;
```

- *Type:* `number`

---

##### `runbookUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition.property.runbookUrlInput" id="cdktfprovidernewrelicsyntheticsalertconditionpropertyrunbookurlinput"></a>

```typescript
public readonly runbookUrlInput: string;
```

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition.property.enabled" id="cdktfprovidernewrelicsyntheticsalertconditionpropertyenabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `monitorId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition.property.monitorId" id="cdktfprovidernewrelicsyntheticsalertconditionpropertymonitorid"></a>

```typescript
public readonly monitorId: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition.property.name" id="cdktfprovidernewrelicsyntheticsalertconditionpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `policyId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition.property.policyId" id="cdktfprovidernewrelicsyntheticsalertconditionpropertypolicyid"></a>

```typescript
public readonly policyId: number;
```

- *Type:* `number`

---

##### `runbookUrl`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition.property.runbookUrl" id="cdktfprovidernewrelicsyntheticsalertconditionpropertyrunbookurl"></a>

```typescript
public readonly runbookUrl: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidernewrelicsyntheticsalertconditionpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition.property.tfResourceType" id="cdktfprovidernewrelicsyntheticsalertconditionpropertytfresourcetype"></a>

- *Type:* `string`

---

### SyntheticsMonitor <a name="@cdktf/provider-newrelic.SyntheticsMonitor" id="cdktfprovidernewrelicsyntheticsmonitor"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor newrelic_synthetics_monitor}.

#### Initializers <a name="@cdktf/provider-newrelic.SyntheticsMonitor.Initializer" id="cdktfprovidernewrelicsyntheticsmonitorinitializer"></a>

```typescript
import { SyntheticsMonitor } from '@cdktf/provider-newrelic'

new SyntheticsMonitor(scope: Construct, id: string, config: SyntheticsMonitorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidernewrelicsyntheticsmonitorparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidernewrelicsyntheticsmonitorparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidernewrelicsyntheticsmonitorparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-newrelic.SyntheticsMonitorConfig`](#@cdktf/provider-newrelic.SyntheticsMonitorConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.parameter.scope" id="cdktfprovidernewrelicsyntheticsmonitorparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.parameter.id" id="cdktfprovidernewrelicsyntheticsmonitorparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.parameter.config" id="cdktfprovidernewrelicsyntheticsmonitorparameterconfig"></a>

- *Type:* [`@cdktf/provider-newrelic.SyntheticsMonitorConfig`](#@cdktf/provider-newrelic.SyntheticsMonitorConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetBypassHeadRequest`](#cdktfprovidernewrelicsyntheticsmonitorresetbypassheadrequest) | *No description.* |
| [`resetSlaThreshold`](#cdktfprovidernewrelicsyntheticsmonitorresetslathreshold) | *No description.* |
| [`resetTreatRedirectAsFailure`](#cdktfprovidernewrelicsyntheticsmonitorresettreatredirectasfailure) | *No description.* |
| [`resetUri`](#cdktfprovidernewrelicsyntheticsmonitorreseturi) | *No description.* |
| [`resetValidationString`](#cdktfprovidernewrelicsyntheticsmonitorresetvalidationstring) | *No description.* |
| [`resetVerifySsl`](#cdktfprovidernewrelicsyntheticsmonitorresetverifyssl) | *No description.* |

---

##### `resetBypassHeadRequest` <a name="@cdktf/provider-newrelic.SyntheticsMonitor.resetBypassHeadRequest" id="cdktfprovidernewrelicsyntheticsmonitorresetbypassheadrequest"></a>

```typescript
public resetBypassHeadRequest()
```

##### `resetSlaThreshold` <a name="@cdktf/provider-newrelic.SyntheticsMonitor.resetSlaThreshold" id="cdktfprovidernewrelicsyntheticsmonitorresetslathreshold"></a>

```typescript
public resetSlaThreshold()
```

##### `resetTreatRedirectAsFailure` <a name="@cdktf/provider-newrelic.SyntheticsMonitor.resetTreatRedirectAsFailure" id="cdktfprovidernewrelicsyntheticsmonitorresettreatredirectasfailure"></a>

```typescript
public resetTreatRedirectAsFailure()
```

##### `resetUri` <a name="@cdktf/provider-newrelic.SyntheticsMonitor.resetUri" id="cdktfprovidernewrelicsyntheticsmonitorreseturi"></a>

```typescript
public resetUri()
```

##### `resetValidationString` <a name="@cdktf/provider-newrelic.SyntheticsMonitor.resetValidationString" id="cdktfprovidernewrelicsyntheticsmonitorresetvalidationstring"></a>

```typescript
public resetValidationString()
```

##### `resetVerifySsl` <a name="@cdktf/provider-newrelic.SyntheticsMonitor.resetVerifySsl" id="cdktfprovidernewrelicsyntheticsmonitorresetverifyssl"></a>

```typescript
public resetVerifySsl()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`id`](#cdktfprovidernewrelicsyntheticsmonitorpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`bypassHeadRequestInput`](#cdktfprovidernewrelicsyntheticsmonitorpropertybypassheadrequestinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`frequencyInput`](#cdktfprovidernewrelicsyntheticsmonitorpropertyfrequencyinput) | `number` | *No description.* |
| [`locationsInput`](#cdktfprovidernewrelicsyntheticsmonitorpropertylocationsinput) | `string`[] | *No description.* |
| [`nameInput`](#cdktfprovidernewrelicsyntheticsmonitorpropertynameinput) | `string` | *No description.* |
| [`slaThresholdInput`](#cdktfprovidernewrelicsyntheticsmonitorpropertyslathresholdinput) | `number` | *No description.* |
| [`statusInput`](#cdktfprovidernewrelicsyntheticsmonitorpropertystatusinput) | `string` | *No description.* |
| [`treatRedirectAsFailureInput`](#cdktfprovidernewrelicsyntheticsmonitorpropertytreatredirectasfailureinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`typeInput`](#cdktfprovidernewrelicsyntheticsmonitorpropertytypeinput) | `string` | *No description.* |
| [`uriInput`](#cdktfprovidernewrelicsyntheticsmonitorpropertyuriinput) | `string` | *No description.* |
| [`validationStringInput`](#cdktfprovidernewrelicsyntheticsmonitorpropertyvalidationstringinput) | `string` | *No description.* |
| [`verifySslInput`](#cdktfprovidernewrelicsyntheticsmonitorpropertyverifysslinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`bypassHeadRequest`](#cdktfprovidernewrelicsyntheticsmonitorpropertybypassheadrequest)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`frequency`](#cdktfprovidernewrelicsyntheticsmonitorpropertyfrequency)<span title="Required">*</span> | `number` | *No description.* |
| [`locations`](#cdktfprovidernewrelicsyntheticsmonitorpropertylocations)<span title="Required">*</span> | `string`[] | *No description.* |
| [`name`](#cdktfprovidernewrelicsyntheticsmonitorpropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`slaThreshold`](#cdktfprovidernewrelicsyntheticsmonitorpropertyslathreshold)<span title="Required">*</span> | `number` | *No description.* |
| [`status`](#cdktfprovidernewrelicsyntheticsmonitorpropertystatus)<span title="Required">*</span> | `string` | *No description.* |
| [`treatRedirectAsFailure`](#cdktfprovidernewrelicsyntheticsmonitorpropertytreatredirectasfailure)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`type`](#cdktfprovidernewrelicsyntheticsmonitorpropertytype)<span title="Required">*</span> | `string` | *No description.* |
| [`uri`](#cdktfprovidernewrelicsyntheticsmonitorpropertyuri)<span title="Required">*</span> | `string` | *No description.* |
| [`validationString`](#cdktfprovidernewrelicsyntheticsmonitorpropertyvalidationstring)<span title="Required">*</span> | `string` | *No description.* |
| [`verifySsl`](#cdktfprovidernewrelicsyntheticsmonitorpropertyverifyssl)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.id" id="cdktfprovidernewrelicsyntheticsmonitorpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `bypassHeadRequestInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.bypassHeadRequestInput" id="cdktfprovidernewrelicsyntheticsmonitorpropertybypassheadrequestinput"></a>

```typescript
public readonly bypassHeadRequestInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `frequencyInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.frequencyInput" id="cdktfprovidernewrelicsyntheticsmonitorpropertyfrequencyinput"></a>

```typescript
public readonly frequencyInput: number;
```

- *Type:* `number`

---

##### `locationsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.locationsInput" id="cdktfprovidernewrelicsyntheticsmonitorpropertylocationsinput"></a>

```typescript
public readonly locationsInput: string[];
```

- *Type:* `string`[]

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.nameInput" id="cdktfprovidernewrelicsyntheticsmonitorpropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `slaThresholdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.slaThresholdInput" id="cdktfprovidernewrelicsyntheticsmonitorpropertyslathresholdinput"></a>

```typescript
public readonly slaThresholdInput: number;
```

- *Type:* `number`

---

##### `statusInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.statusInput" id="cdktfprovidernewrelicsyntheticsmonitorpropertystatusinput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* `string`

---

##### `treatRedirectAsFailureInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.treatRedirectAsFailureInput" id="cdktfprovidernewrelicsyntheticsmonitorpropertytreatredirectasfailureinput"></a>

```typescript
public readonly treatRedirectAsFailureInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `typeInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.typeInput" id="cdktfprovidernewrelicsyntheticsmonitorpropertytypeinput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* `string`

---

##### `uriInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.uriInput" id="cdktfprovidernewrelicsyntheticsmonitorpropertyuriinput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* `string`

---

##### `validationStringInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.validationStringInput" id="cdktfprovidernewrelicsyntheticsmonitorpropertyvalidationstringinput"></a>

```typescript
public readonly validationStringInput: string;
```

- *Type:* `string`

---

##### `verifySslInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.verifySslInput" id="cdktfprovidernewrelicsyntheticsmonitorpropertyverifysslinput"></a>

```typescript
public readonly verifySslInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `bypassHeadRequest`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.bypassHeadRequest" id="cdktfprovidernewrelicsyntheticsmonitorpropertybypassheadrequest"></a>

```typescript
public readonly bypassHeadRequest: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `frequency`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.frequency" id="cdktfprovidernewrelicsyntheticsmonitorpropertyfrequency"></a>

```typescript
public readonly frequency: number;
```

- *Type:* `number`

---

##### `locations`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.locations" id="cdktfprovidernewrelicsyntheticsmonitorpropertylocations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* `string`[]

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.name" id="cdktfprovidernewrelicsyntheticsmonitorpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `slaThreshold`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.slaThreshold" id="cdktfprovidernewrelicsyntheticsmonitorpropertyslathreshold"></a>

```typescript
public readonly slaThreshold: number;
```

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.status" id="cdktfprovidernewrelicsyntheticsmonitorpropertystatus"></a>

```typescript
public readonly status: string;
```

- *Type:* `string`

---

##### `treatRedirectAsFailure`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.treatRedirectAsFailure" id="cdktfprovidernewrelicsyntheticsmonitorpropertytreatredirectasfailure"></a>

```typescript
public readonly treatRedirectAsFailure: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.type" id="cdktfprovidernewrelicsyntheticsmonitorpropertytype"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

##### `uri`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.uri" id="cdktfprovidernewrelicsyntheticsmonitorpropertyuri"></a>

```typescript
public readonly uri: string;
```

- *Type:* `string`

---

##### `validationString`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.validationString" id="cdktfprovidernewrelicsyntheticsmonitorpropertyvalidationstring"></a>

```typescript
public readonly validationString: string;
```

- *Type:* `string`

---

##### `verifySsl`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.verifySsl" id="cdktfprovidernewrelicsyntheticsmonitorpropertyverifyssl"></a>

```typescript
public readonly verifySsl: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidernewrelicsyntheticsmonitorpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.tfResourceType" id="cdktfprovidernewrelicsyntheticsmonitorpropertytfresourcetype"></a>

- *Type:* `string`

---

### SyntheticsMonitorScript <a name="@cdktf/provider-newrelic.SyntheticsMonitorScript" id="cdktfprovidernewrelicsyntheticsmonitorscript"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor_script newrelic_synthetics_monitor_script}.

#### Initializers <a name="@cdktf/provider-newrelic.SyntheticsMonitorScript.Initializer" id="cdktfprovidernewrelicsyntheticsmonitorscriptinitializer"></a>

```typescript
import { SyntheticsMonitorScript } from '@cdktf/provider-newrelic'

new SyntheticsMonitorScript(scope: Construct, id: string, config: SyntheticsMonitorScriptConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidernewrelicsyntheticsmonitorscriptparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidernewrelicsyntheticsmonitorscriptparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidernewrelicsyntheticsmonitorscriptparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-newrelic.SyntheticsMonitorScriptConfig`](#@cdktf/provider-newrelic.SyntheticsMonitorScriptConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScript.parameter.scope" id="cdktfprovidernewrelicsyntheticsmonitorscriptparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScript.parameter.id" id="cdktfprovidernewrelicsyntheticsmonitorscriptparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScript.parameter.config" id="cdktfprovidernewrelicsyntheticsmonitorscriptparameterconfig"></a>

- *Type:* [`@cdktf/provider-newrelic.SyntheticsMonitorScriptConfig`](#@cdktf/provider-newrelic.SyntheticsMonitorScriptConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetLocation`](#cdktfprovidernewrelicsyntheticsmonitorscriptresetlocation) | *No description.* |

---

##### `resetLocation` <a name="@cdktf/provider-newrelic.SyntheticsMonitorScript.resetLocation" id="cdktfprovidernewrelicsyntheticsmonitorscriptresetlocation"></a>

```typescript
public resetLocation()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`id`](#cdktfprovidernewrelicsyntheticsmonitorscriptpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`locationInput`](#cdktfprovidernewrelicsyntheticsmonitorscriptpropertylocationinput) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.SyntheticsMonitorScriptLocation`](#@cdktf/provider-newrelic.SyntheticsMonitorScriptLocation)[] | *No description.* |
| [`monitorIdInput`](#cdktfprovidernewrelicsyntheticsmonitorscriptpropertymonitoridinput) | `string` | *No description.* |
| [`textInput`](#cdktfprovidernewrelicsyntheticsmonitorscriptpropertytextinput) | `string` | *No description.* |
| [`location`](#cdktfprovidernewrelicsyntheticsmonitorscriptpropertylocation)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.SyntheticsMonitorScriptLocation`](#@cdktf/provider-newrelic.SyntheticsMonitorScriptLocation)[] | *No description.* |
| [`monitorId`](#cdktfprovidernewrelicsyntheticsmonitorscriptpropertymonitorid)<span title="Required">*</span> | `string` | *No description.* |
| [`text`](#cdktfprovidernewrelicsyntheticsmonitorscriptpropertytext)<span title="Required">*</span> | `string` | *No description.* |

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScript.property.id" id="cdktfprovidernewrelicsyntheticsmonitorscriptpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `locationInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScript.property.locationInput" id="cdktfprovidernewrelicsyntheticsmonitorscriptpropertylocationinput"></a>

```typescript
public readonly locationInput: IResolvable | SyntheticsMonitorScriptLocation[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.SyntheticsMonitorScriptLocation`](#@cdktf/provider-newrelic.SyntheticsMonitorScriptLocation)[]

---

##### `monitorIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScript.property.monitorIdInput" id="cdktfprovidernewrelicsyntheticsmonitorscriptpropertymonitoridinput"></a>

```typescript
public readonly monitorIdInput: string;
```

- *Type:* `string`

---

##### `textInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScript.property.textInput" id="cdktfprovidernewrelicsyntheticsmonitorscriptpropertytextinput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScript.property.location" id="cdktfprovidernewrelicsyntheticsmonitorscriptpropertylocation"></a>

```typescript
public readonly location: IResolvable | SyntheticsMonitorScriptLocation[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.SyntheticsMonitorScriptLocation`](#@cdktf/provider-newrelic.SyntheticsMonitorScriptLocation)[]

---

##### `monitorId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScript.property.monitorId" id="cdktfprovidernewrelicsyntheticsmonitorscriptpropertymonitorid"></a>

```typescript
public readonly monitorId: string;
```

- *Type:* `string`

---

##### `text`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScript.property.text" id="cdktfprovidernewrelicsyntheticsmonitorscriptpropertytext"></a>

```typescript
public readonly text: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidernewrelicsyntheticsmonitorscriptpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-newrelic.SyntheticsMonitorScript.property.tfResourceType" id="cdktfprovidernewrelicsyntheticsmonitorscriptpropertytfresourcetype"></a>

- *Type:* `string`

---

### SyntheticsMultilocationAlertCondition <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition" id="cdktfprovidernewrelicsyntheticsmultilocationalertcondition"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_multilocation_alert_condition newrelic_synthetics_multilocation_alert_condition}.

#### Initializers <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.Initializer" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditioninitializer"></a>

```typescript
import { SyntheticsMultilocationAlertCondition } from '@cdktf/provider-newrelic'

new SyntheticsMultilocationAlertCondition(scope: Construct, id: string, config: SyntheticsMultilocationAlertConditionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionConfig`](#@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.parameter.scope" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.parameter.id" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.parameter.config" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionparameterconfig"></a>

- *Type:* [`@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionConfig`](#@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`putCritical`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionputcritical) | *No description.* |
| [`putWarning`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionputwarning) | *No description.* |
| [`resetEnabled`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionresetenabled) | *No description.* |
| [`resetRunbookUrl`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionresetrunbookurl) | *No description.* |
| [`resetWarning`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionresetwarning) | *No description.* |

---

##### `putCritical` <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.putCritical" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionputcritical"></a>

```typescript
public putCritical(value: SyntheticsMultilocationAlertConditionCritical)
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.parameter.value" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionparametervalue"></a>

- *Type:* [`@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCritical`](#@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCritical)

---

##### `putWarning` <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.putWarning" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionputwarning"></a>

```typescript
public putWarning(value: SyntheticsMultilocationAlertConditionWarning)
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.parameter.value" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionparametervalue"></a>

- *Type:* [`@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarning`](#@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarning)

---

##### `resetEnabled` <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.resetEnabled" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionresetenabled"></a>

```typescript
public resetEnabled()
```

##### `resetRunbookUrl` <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.resetRunbookUrl" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionresetrunbookurl"></a>

```typescript
public resetRunbookUrl()
```

##### `resetWarning` <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.resetWarning" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionresetwarning"></a>

```typescript
public resetWarning()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`critical`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionpropertycritical)<span title="Required">*</span> | [`@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCriticalOutputReference`](#@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCriticalOutputReference) | *No description.* |
| [`id`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`warning`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionpropertywarning)<span title="Required">*</span> | [`@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarningOutputReference`](#@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarningOutputReference) | *No description.* |
| [`criticalInput`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionpropertycriticalinput) | [`@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCritical`](#@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCritical) | *No description.* |
| [`enabledInput`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionpropertyenabledinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`entitiesInput`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionpropertyentitiesinput) | `string`[] | *No description.* |
| [`nameInput`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionpropertynameinput) | `string` | *No description.* |
| [`policyIdInput`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionpropertypolicyidinput) | `number` | *No description.* |
| [`runbookUrlInput`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionpropertyrunbookurlinput) | `string` | *No description.* |
| [`violationTimeLimitSecondsInput`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionpropertyviolationtimelimitsecondsinput) | `number` | *No description.* |
| [`warningInput`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionpropertywarninginput) | [`@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarning`](#@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarning) | *No description.* |
| [`enabled`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionpropertyenabled)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`entities`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionpropertyentities)<span title="Required">*</span> | `string`[] | *No description.* |
| [`name`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionpropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`policyId`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionpropertypolicyid)<span title="Required">*</span> | `number` | *No description.* |
| [`runbookUrl`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionpropertyrunbookurl)<span title="Required">*</span> | `string` | *No description.* |
| [`violationTimeLimitSeconds`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionpropertyviolationtimelimitseconds)<span title="Required">*</span> | `number` | *No description.* |

---

##### `critical`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.property.critical" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionpropertycritical"></a>

```typescript
public readonly critical: SyntheticsMultilocationAlertConditionCriticalOutputReference;
```

- *Type:* [`@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCriticalOutputReference`](#@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCriticalOutputReference)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.property.id" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `warning`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.property.warning" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionpropertywarning"></a>

```typescript
public readonly warning: SyntheticsMultilocationAlertConditionWarningOutputReference;
```

- *Type:* [`@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarningOutputReference`](#@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarningOutputReference)

---

##### `criticalInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.property.criticalInput" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionpropertycriticalinput"></a>

```typescript
public readonly criticalInput: SyntheticsMultilocationAlertConditionCritical;
```

- *Type:* [`@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCritical`](#@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCritical)

---

##### `enabledInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.property.enabledInput" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionpropertyenabledinput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `entitiesInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.property.entitiesInput" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionpropertyentitiesinput"></a>

```typescript
public readonly entitiesInput: string[];
```

- *Type:* `string`[]

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.property.nameInput" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionpropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `policyIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.property.policyIdInput" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionpropertypolicyidinput"></a>

```typescript
public readonly policyIdInput: number;
```

- *Type:* `number`

---

##### `runbookUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.property.runbookUrlInput" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionpropertyrunbookurlinput"></a>

```typescript
public readonly runbookUrlInput: string;
```

- *Type:* `string`

---

##### `violationTimeLimitSecondsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.property.violationTimeLimitSecondsInput" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionpropertyviolationtimelimitsecondsinput"></a>

```typescript
public readonly violationTimeLimitSecondsInput: number;
```

- *Type:* `number`

---

##### `warningInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.property.warningInput" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionpropertywarninginput"></a>

```typescript
public readonly warningInput: SyntheticsMultilocationAlertConditionWarning;
```

- *Type:* [`@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarning`](#@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarning)

---

##### `enabled`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.property.enabled" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionpropertyenabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `entities`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.property.entities" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionpropertyentities"></a>

```typescript
public readonly entities: string[];
```

- *Type:* `string`[]

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.property.name" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `policyId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.property.policyId" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionpropertypolicyid"></a>

```typescript
public readonly policyId: number;
```

- *Type:* `number`

---

##### `runbookUrl`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.property.runbookUrl" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionpropertyrunbookurl"></a>

```typescript
public readonly runbookUrl: string;
```

- *Type:* `string`

---

##### `violationTimeLimitSeconds`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.property.violationTimeLimitSeconds" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionpropertyviolationtimelimitseconds"></a>

```typescript
public readonly violationTimeLimitSeconds: number;
```

- *Type:* `number`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.property.tfResourceType" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionpropertytfresourcetype"></a>

- *Type:* `string`

---

### SyntheticsSecureCredential <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential" id="cdktfprovidernewrelicsyntheticssecurecredential"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_secure_credential newrelic_synthetics_secure_credential}.

#### Initializers <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.Initializer" id="cdktfprovidernewrelicsyntheticssecurecredentialinitializer"></a>

```typescript
import { SyntheticsSecureCredential } from '@cdktf/provider-newrelic'

new SyntheticsSecureCredential(scope: Construct, id: string, config: SyntheticsSecureCredentialConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidernewrelicsyntheticssecurecredentialparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidernewrelicsyntheticssecurecredentialparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidernewrelicsyntheticssecurecredentialparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-newrelic.SyntheticsSecureCredentialConfig`](#@cdktf/provider-newrelic.SyntheticsSecureCredentialConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.parameter.scope" id="cdktfprovidernewrelicsyntheticssecurecredentialparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.parameter.id" id="cdktfprovidernewrelicsyntheticssecurecredentialparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.parameter.config" id="cdktfprovidernewrelicsyntheticssecurecredentialparameterconfig"></a>

- *Type:* [`@cdktf/provider-newrelic.SyntheticsSecureCredentialConfig`](#@cdktf/provider-newrelic.SyntheticsSecureCredentialConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetCreatedAt`](#cdktfprovidernewrelicsyntheticssecurecredentialresetcreatedat) | *No description.* |
| [`resetDescription`](#cdktfprovidernewrelicsyntheticssecurecredentialresetdescription) | *No description.* |
| [`resetLastUpdated`](#cdktfprovidernewrelicsyntheticssecurecredentialresetlastupdated) | *No description.* |

---

##### `resetCreatedAt` <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.resetCreatedAt" id="cdktfprovidernewrelicsyntheticssecurecredentialresetcreatedat"></a>

```typescript
public resetCreatedAt()
```

##### `resetDescription` <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.resetDescription" id="cdktfprovidernewrelicsyntheticssecurecredentialresetdescription"></a>

```typescript
public resetDescription()
```

##### `resetLastUpdated` <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.resetLastUpdated" id="cdktfprovidernewrelicsyntheticssecurecredentialresetlastupdated"></a>

```typescript
public resetLastUpdated()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`id`](#cdktfprovidernewrelicsyntheticssecurecredentialpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`createdAtInput`](#cdktfprovidernewrelicsyntheticssecurecredentialpropertycreatedatinput) | `string` | *No description.* |
| [`descriptionInput`](#cdktfprovidernewrelicsyntheticssecurecredentialpropertydescriptioninput) | `string` | *No description.* |
| [`keyInput`](#cdktfprovidernewrelicsyntheticssecurecredentialpropertykeyinput) | `string` | *No description.* |
| [`lastUpdatedInput`](#cdktfprovidernewrelicsyntheticssecurecredentialpropertylastupdatedinput) | `string` | *No description.* |
| [`valueInput`](#cdktfprovidernewrelicsyntheticssecurecredentialpropertyvalueinput) | `string` | *No description.* |
| [`createdAt`](#cdktfprovidernewrelicsyntheticssecurecredentialpropertycreatedat)<span title="Required">*</span> | `string` | *No description.* |
| [`description`](#cdktfprovidernewrelicsyntheticssecurecredentialpropertydescription)<span title="Required">*</span> | `string` | *No description.* |
| [`key`](#cdktfprovidernewrelicsyntheticssecurecredentialpropertykey)<span title="Required">*</span> | `string` | *No description.* |
| [`lastUpdated`](#cdktfprovidernewrelicsyntheticssecurecredentialpropertylastupdated)<span title="Required">*</span> | `string` | *No description.* |
| [`value`](#cdktfprovidernewrelicsyntheticssecurecredentialpropertyvalue)<span title="Required">*</span> | `string` | *No description.* |

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.property.id" id="cdktfprovidernewrelicsyntheticssecurecredentialpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `createdAtInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.property.createdAtInput" id="cdktfprovidernewrelicsyntheticssecurecredentialpropertycreatedatinput"></a>

```typescript
public readonly createdAtInput: string;
```

- *Type:* `string`

---

##### `descriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.property.descriptionInput" id="cdktfprovidernewrelicsyntheticssecurecredentialpropertydescriptioninput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* `string`

---

##### `keyInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.property.keyInput" id="cdktfprovidernewrelicsyntheticssecurecredentialpropertykeyinput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* `string`

---

##### `lastUpdatedInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.property.lastUpdatedInput" id="cdktfprovidernewrelicsyntheticssecurecredentialpropertylastupdatedinput"></a>

```typescript
public readonly lastUpdatedInput: string;
```

- *Type:* `string`

---

##### `valueInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.property.valueInput" id="cdktfprovidernewrelicsyntheticssecurecredentialpropertyvalueinput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.property.createdAt" id="cdktfprovidernewrelicsyntheticssecurecredentialpropertycreatedat"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.property.description" id="cdktfprovidernewrelicsyntheticssecurecredentialpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.property.key" id="cdktfprovidernewrelicsyntheticssecurecredentialpropertykey"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

---

##### `lastUpdated`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.property.lastUpdated" id="cdktfprovidernewrelicsyntheticssecurecredentialpropertylastupdated"></a>

```typescript
public readonly lastUpdated: string;
```

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.property.value" id="cdktfprovidernewrelicsyntheticssecurecredentialpropertyvalue"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidernewrelicsyntheticssecurecredentialpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.property.tfResourceType" id="cdktfprovidernewrelicsyntheticssecurecredentialpropertytfresourcetype"></a>

- *Type:* `string`

---

### Workload <a name="@cdktf/provider-newrelic.Workload" id="cdktfprovidernewrelicworkload"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/workload newrelic_workload}.

#### Initializers <a name="@cdktf/provider-newrelic.Workload.Initializer" id="cdktfprovidernewrelicworkloadinitializer"></a>

```typescript
import { Workload } from '@cdktf/provider-newrelic'

new Workload(scope: Construct, id: string, config: WorkloadConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidernewrelicworkloadparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidernewrelicworkloadparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidernewrelicworkloadparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-newrelic.WorkloadConfig`](#@cdktf/provider-newrelic.WorkloadConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Workload.parameter.scope" id="cdktfprovidernewrelicworkloadparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Workload.parameter.id" id="cdktfprovidernewrelicworkloadparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Workload.parameter.config" id="cdktfprovidernewrelicworkloadparameterconfig"></a>

- *Type:* [`@cdktf/provider-newrelic.WorkloadConfig`](#@cdktf/provider-newrelic.WorkloadConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetAccountId`](#cdktfprovidernewrelicworkloadresetaccountid) | *No description.* |
| [`resetEntityGuids`](#cdktfprovidernewrelicworkloadresetentityguids) | *No description.* |
| [`resetEntitySearchQuery`](#cdktfprovidernewrelicworkloadresetentitysearchquery) | *No description.* |
| [`resetScopeAccountIds`](#cdktfprovidernewrelicworkloadresetscopeaccountids) | *No description.* |

---

##### `resetAccountId` <a name="@cdktf/provider-newrelic.Workload.resetAccountId" id="cdktfprovidernewrelicworkloadresetaccountid"></a>

```typescript
public resetAccountId()
```

##### `resetEntityGuids` <a name="@cdktf/provider-newrelic.Workload.resetEntityGuids" id="cdktfprovidernewrelicworkloadresetentityguids"></a>

```typescript
public resetEntityGuids()
```

##### `resetEntitySearchQuery` <a name="@cdktf/provider-newrelic.Workload.resetEntitySearchQuery" id="cdktfprovidernewrelicworkloadresetentitysearchquery"></a>

```typescript
public resetEntitySearchQuery()
```

##### `resetScopeAccountIds` <a name="@cdktf/provider-newrelic.Workload.resetScopeAccountIds" id="cdktfprovidernewrelicworkloadresetscopeaccountids"></a>

```typescript
public resetScopeAccountIds()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`compositeEntitySearchQuery`](#cdktfprovidernewrelicworkloadpropertycompositeentitysearchquery)<span title="Required">*</span> | `string` | *No description.* |
| [`guid`](#cdktfprovidernewrelicworkloadpropertyguid)<span title="Required">*</span> | `string` | *No description.* |
| [`id`](#cdktfprovidernewrelicworkloadpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`permalink`](#cdktfprovidernewrelicworkloadpropertypermalink)<span title="Required">*</span> | `string` | *No description.* |
| [`workloadId`](#cdktfprovidernewrelicworkloadpropertyworkloadid)<span title="Required">*</span> | `number` | *No description.* |
| [`accountIdInput`](#cdktfprovidernewrelicworkloadpropertyaccountidinput) | `number` | *No description.* |
| [`entityGuidsInput`](#cdktfprovidernewrelicworkloadpropertyentityguidsinput) | `string`[] | *No description.* |
| [`entitySearchQueryInput`](#cdktfprovidernewrelicworkloadpropertyentitysearchqueryinput) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.WorkloadEntitySearchQuery`](#@cdktf/provider-newrelic.WorkloadEntitySearchQuery)[] | *No description.* |
| [`nameInput`](#cdktfprovidernewrelicworkloadpropertynameinput) | `string` | *No description.* |
| [`scopeAccountIdsInput`](#cdktfprovidernewrelicworkloadpropertyscopeaccountidsinput) | `number`[] | *No description.* |
| [`accountId`](#cdktfprovidernewrelicworkloadpropertyaccountid)<span title="Required">*</span> | `number` | *No description.* |
| [`entityGuids`](#cdktfprovidernewrelicworkloadpropertyentityguids)<span title="Required">*</span> | `string`[] | *No description.* |
| [`entitySearchQuery`](#cdktfprovidernewrelicworkloadpropertyentitysearchquery)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.WorkloadEntitySearchQuery`](#@cdktf/provider-newrelic.WorkloadEntitySearchQuery)[] | *No description.* |
| [`name`](#cdktfprovidernewrelicworkloadpropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`scopeAccountIds`](#cdktfprovidernewrelicworkloadpropertyscopeaccountids)<span title="Required">*</span> | `number`[] | *No description.* |

---

##### `compositeEntitySearchQuery`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Workload.property.compositeEntitySearchQuery" id="cdktfprovidernewrelicworkloadpropertycompositeentitysearchquery"></a>

```typescript
public readonly compositeEntitySearchQuery: string;
```

- *Type:* `string`

---

##### `guid`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Workload.property.guid" id="cdktfprovidernewrelicworkloadpropertyguid"></a>

```typescript
public readonly guid: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Workload.property.id" id="cdktfprovidernewrelicworkloadpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `permalink`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Workload.property.permalink" id="cdktfprovidernewrelicworkloadpropertypermalink"></a>

```typescript
public readonly permalink: string;
```

- *Type:* `string`

---

##### `workloadId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Workload.property.workloadId" id="cdktfprovidernewrelicworkloadpropertyworkloadid"></a>

```typescript
public readonly workloadId: number;
```

- *Type:* `number`

---

##### `accountIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.Workload.property.accountIdInput" id="cdktfprovidernewrelicworkloadpropertyaccountidinput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* `number`

---

##### `entityGuidsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.Workload.property.entityGuidsInput" id="cdktfprovidernewrelicworkloadpropertyentityguidsinput"></a>

```typescript
public readonly entityGuidsInput: string[];
```

- *Type:* `string`[]

---

##### `entitySearchQueryInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.Workload.property.entitySearchQueryInput" id="cdktfprovidernewrelicworkloadpropertyentitysearchqueryinput"></a>

```typescript
public readonly entitySearchQueryInput: IResolvable | WorkloadEntitySearchQuery[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.WorkloadEntitySearchQuery`](#@cdktf/provider-newrelic.WorkloadEntitySearchQuery)[]

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.Workload.property.nameInput" id="cdktfprovidernewrelicworkloadpropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `scopeAccountIdsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.Workload.property.scopeAccountIdsInput" id="cdktfprovidernewrelicworkloadpropertyscopeaccountidsinput"></a>

```typescript
public readonly scopeAccountIdsInput: number[];
```

- *Type:* `number`[]

---

##### `accountId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Workload.property.accountId" id="cdktfprovidernewrelicworkloadpropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

---

##### `entityGuids`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Workload.property.entityGuids" id="cdktfprovidernewrelicworkloadpropertyentityguids"></a>

```typescript
public readonly entityGuids: string[];
```

- *Type:* `string`[]

---

##### `entitySearchQuery`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Workload.property.entitySearchQuery" id="cdktfprovidernewrelicworkloadpropertyentitysearchquery"></a>

```typescript
public readonly entitySearchQuery: IResolvable | WorkloadEntitySearchQuery[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.WorkloadEntitySearchQuery`](#@cdktf/provider-newrelic.WorkloadEntitySearchQuery)[]

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Workload.property.name" id="cdktfprovidernewrelicworkloadpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `scopeAccountIds`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Workload.property.scopeAccountIds" id="cdktfprovidernewrelicworkloadpropertyscopeaccountids"></a>

```typescript
public readonly scopeAccountIds: number[];
```

- *Type:* `number`[]

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidernewrelicworkloadpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-newrelic.Workload.property.tfResourceType" id="cdktfprovidernewrelicworkloadpropertytfresourcetype"></a>

- *Type:* `string`

---

## Structs <a name="Structs" id="structs"></a>

### AlertChannelConfig <a name="@cdktf/provider-newrelic.AlertChannelConfig" id="cdktfprovidernewrelicalertchannelconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { AlertChannelConfig } from '@cdktf/provider-newrelic'

const alertChannelConfig: AlertChannelConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidernewrelicalertchannelconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidernewrelicalertchannelconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidernewrelicalertchannelconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidernewrelicalertchannelconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`name`](#cdktfprovidernewrelicalertchannelconfigpropertyname)<span title="Required">*</span> | `string` | (Required) The name of the channel. |
| [`type`](#cdktfprovidernewrelicalertchannelconfigpropertytype)<span title="Required">*</span> | `string` | (Required) The type of channel. One of: (slack, user, victorops, webhook, email, opsgenie, pagerduty). |
| [`config`](#cdktfprovidernewrelicalertchannelconfigpropertyconfig) | [`@cdktf/provider-newrelic.AlertChannelConfigA`](#@cdktf/provider-newrelic.AlertChannelConfigA) | config block. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfig.property.count" id="cdktfprovidernewrelicalertchannelconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfig.property.dependsOn" id="cdktfprovidernewrelicalertchannelconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfig.property.lifecycle" id="cdktfprovidernewrelicalertchannelconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfig.property.provider" id="cdktfprovidernewrelicalertchannelconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfig.property.name" id="cdktfprovidernewrelicalertchannelconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

(Required) The name of the channel.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel#name AlertChannel#name}

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfig.property.type" id="cdktfprovidernewrelicalertchannelconfigpropertytype"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

(Required) The type of channel. One of: (slack, user, victorops, webhook, email, opsgenie, pagerduty).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel#type AlertChannel#type}

---

##### `config`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfig.property.config" id="cdktfprovidernewrelicalertchannelconfigpropertyconfig"></a>

```typescript
public readonly config: AlertChannelConfigA;
```

- *Type:* [`@cdktf/provider-newrelic.AlertChannelConfigA`](#@cdktf/provider-newrelic.AlertChannelConfigA)

config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel#config AlertChannel#config}

---

### AlertChannelConfigA <a name="@cdktf/provider-newrelic.AlertChannelConfigA" id="cdktfprovidernewrelicalertchannelconfiga"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { AlertChannelConfigA } from '@cdktf/provider-newrelic'

const alertChannelConfigA: AlertChannelConfigA = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`apiKey`](#cdktfprovidernewrelicalertchannelconfigapropertyapikey) | `string` | The API key for integrating with OpsGenie. |
| [`authPassword`](#cdktfprovidernewrelicalertchannelconfigapropertyauthpassword) | `string` | Specifies an authentication password for use with a channel. Supported by the webhook channel type. |
| [`authType`](#cdktfprovidernewrelicalertchannelconfigapropertyauthtype) | `string` | Specifies an authentication method for use with a channel. |
| [`authUsername`](#cdktfprovidernewrelicalertchannelconfigapropertyauthusername) | `string` | Specifies an authentication username for use with a channel. Supported by the webhook channel type. |
| [`baseUrl`](#cdktfprovidernewrelicalertchannelconfigapropertybaseurl) | `string` | The base URL of the webhook destination. |
| [`channel`](#cdktfprovidernewrelicalertchannelconfigapropertychannel) | `string` | The Slack channel to send notifications to. |
| [`headers`](#cdktfprovidernewrelicalertchannelconfigapropertyheaders) | {[ key: string ]: `string`} | A map of key/value pairs that represents extra HTTP headers to be sent along with the webhook payload. |
| [`headersString`](#cdktfprovidernewrelicalertchannelconfigapropertyheadersstring) | `string` | Use instead of headers if the desired payload is more complex than a list of key/value pairs (e.g. a set of headers that makes use of nested objects). The value provided should be a valid JSON string with escaped double quotes. Conflicts with headers. |
| [`includeJsonAttachment`](#cdktfprovidernewrelicalertchannelconfigapropertyincludejsonattachment) | `string` | true or false. |
| [`key`](#cdktfprovidernewrelicalertchannelconfigapropertykey) | `string` | The key for integrating with VictorOps. |
| [`payload`](#cdktfprovidernewrelicalertchannelconfigapropertypayload) | {[ key: string ]: `string`} | A map of key/value pairs that represents the webhook payload. Must provide payload_type if setting this argument. |
| [`payloadString`](#cdktfprovidernewrelicalertchannelconfigapropertypayloadstring) | `string` | Use instead of payload if the desired payload is more complex than a list of key/value pairs (e.g. a payload that makes use of nested objects). The value provided should be a valid JSON string with escaped double quotes. Conflicts with payload. |
| [`payloadType`](#cdktfprovidernewrelicalertchannelconfigapropertypayloadtype) | `string` | Can either be application/json or application/x-www-form-urlencoded. The payload_type argument is required if payload is set. |
| [`recipients`](#cdktfprovidernewrelicalertchannelconfigapropertyrecipients) | `string` | A set of recipients for targeting notifications. Multiple values are comma separated. |
| [`region`](#cdktfprovidernewrelicalertchannelconfigapropertyregion) | `string` | The data center region to store your data. Valid values are US and EU. Default is US. |
| [`routeKey`](#cdktfprovidernewrelicalertchannelconfigapropertyroutekey) | `string` | The route key for integrating with VictorOps. |
| [`serviceKey`](#cdktfprovidernewrelicalertchannelconfigapropertyservicekey) | `string` | Specifies the service key for integrating with Pagerduty. |
| [`tags`](#cdktfprovidernewrelicalertchannelconfigapropertytags) | `string` | A set of tags for targeting notifications. Multiple values are comma separated. |
| [`teams`](#cdktfprovidernewrelicalertchannelconfigapropertyteams) | `string` | A set of teams for targeting notifications. Multiple values are comma separated. |
| [`url`](#cdktfprovidernewrelicalertchannelconfigapropertyurl) | `string` | Your organization's Slack URL. |
| [`userId`](#cdktfprovidernewrelicalertchannelconfigapropertyuserid) | `string` | The user ID for use with the user channel type. |

---

##### `apiKey`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.apiKey" id="cdktfprovidernewrelicalertchannelconfigapropertyapikey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* `string`

The API key for integrating with OpsGenie.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel#api_key AlertChannel#api_key}

---

##### `authPassword`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.authPassword" id="cdktfprovidernewrelicalertchannelconfigapropertyauthpassword"></a>

```typescript
public readonly authPassword: string;
```

- *Type:* `string`

Specifies an authentication password for use with a channel. Supported by the webhook channel type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel#auth_password AlertChannel#auth_password}

---

##### `authType`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.authType" id="cdktfprovidernewrelicalertchannelconfigapropertyauthtype"></a>

```typescript
public readonly authType: string;
```

- *Type:* `string`

Specifies an authentication method for use with a channel.

Supported by the webhook channel type. Only HTTP basic authentication is currently supported via the value BASIC.  Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel#auth_type AlertChannel#auth_type}

---

##### `authUsername`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.authUsername" id="cdktfprovidernewrelicalertchannelconfigapropertyauthusername"></a>

```typescript
public readonly authUsername: string;
```

- *Type:* `string`

Specifies an authentication username for use with a channel. Supported by the webhook channel type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel#auth_username AlertChannel#auth_username}

---

##### `baseUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.baseUrl" id="cdktfprovidernewrelicalertchannelconfigapropertybaseurl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* `string`

The base URL of the webhook destination.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel#base_url AlertChannel#base_url}

---

##### `channel`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.channel" id="cdktfprovidernewrelicalertchannelconfigapropertychannel"></a>

```typescript
public readonly channel: string;
```

- *Type:* `string`

The Slack channel to send notifications to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel#channel AlertChannel#channel}

---

##### `headers`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.headers" id="cdktfprovidernewrelicalertchannelconfigapropertyheaders"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

A map of key/value pairs that represents extra HTTP headers to be sent along with the webhook payload.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel#headers AlertChannel#headers}

---

##### `headersString`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.headersString" id="cdktfprovidernewrelicalertchannelconfigapropertyheadersstring"></a>

```typescript
public readonly headersString: string;
```

- *Type:* `string`

Use instead of headers if the desired payload is more complex than a list of key/value pairs (e.g. a set of headers that makes use of nested objects). The value provided should be a valid JSON string with escaped double quotes. Conflicts with headers.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel#headers_string AlertChannel#headers_string}

---

##### `includeJsonAttachment`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.includeJsonAttachment" id="cdktfprovidernewrelicalertchannelconfigapropertyincludejsonattachment"></a>

```typescript
public readonly includeJsonAttachment: string;
```

- *Type:* `string`

true or false.

Flag for whether or not to attach a JSON document containing information about the associated alert to the email that is sent to recipients.  Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel#include_json_attachment AlertChannel#include_json_attachment}

---

##### `key`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.key" id="cdktfprovidernewrelicalertchannelconfigapropertykey"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

The key for integrating with VictorOps.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel#key AlertChannel#key}

---

##### `payload`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.payload" id="cdktfprovidernewrelicalertchannelconfigapropertypayload"></a>

```typescript
public readonly payload: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

A map of key/value pairs that represents the webhook payload. Must provide payload_type if setting this argument.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel#payload AlertChannel#payload}

---

##### `payloadString`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.payloadString" id="cdktfprovidernewrelicalertchannelconfigapropertypayloadstring"></a>

```typescript
public readonly payloadString: string;
```

- *Type:* `string`

Use instead of payload if the desired payload is more complex than a list of key/value pairs (e.g. a payload that makes use of nested objects). The value provided should be a valid JSON string with escaped double quotes. Conflicts with payload.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel#payload_string AlertChannel#payload_string}

---

##### `payloadType`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.payloadType" id="cdktfprovidernewrelicalertchannelconfigapropertypayloadtype"></a>

```typescript
public readonly payloadType: string;
```

- *Type:* `string`

Can either be application/json or application/x-www-form-urlencoded. The payload_type argument is required if payload is set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel#payload_type AlertChannel#payload_type}

---

##### `recipients`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.recipients" id="cdktfprovidernewrelicalertchannelconfigapropertyrecipients"></a>

```typescript
public readonly recipients: string;
```

- *Type:* `string`

A set of recipients for targeting notifications. Multiple values are comma separated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel#recipients AlertChannel#recipients}

---

##### `region`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.region" id="cdktfprovidernewrelicalertchannelconfigapropertyregion"></a>

```typescript
public readonly region: string;
```

- *Type:* `string`

The data center region to store your data. Valid values are US and EU. Default is US.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel#region AlertChannel#region}

---

##### `routeKey`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.routeKey" id="cdktfprovidernewrelicalertchannelconfigapropertyroutekey"></a>

```typescript
public readonly routeKey: string;
```

- *Type:* `string`

The route key for integrating with VictorOps.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel#route_key AlertChannel#route_key}

---

##### `serviceKey`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.serviceKey" id="cdktfprovidernewrelicalertchannelconfigapropertyservicekey"></a>

```typescript
public readonly serviceKey: string;
```

- *Type:* `string`

Specifies the service key for integrating with Pagerduty.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel#service_key AlertChannel#service_key}

---

##### `tags`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.tags" id="cdktfprovidernewrelicalertchannelconfigapropertytags"></a>

```typescript
public readonly tags: string;
```

- *Type:* `string`

A set of tags for targeting notifications. Multiple values are comma separated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel#tags AlertChannel#tags}

---

##### `teams`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.teams" id="cdktfprovidernewrelicalertchannelconfigapropertyteams"></a>

```typescript
public readonly teams: string;
```

- *Type:* `string`

A set of teams for targeting notifications. Multiple values are comma separated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel#teams AlertChannel#teams}

---

##### `url`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.url" id="cdktfprovidernewrelicalertchannelconfigapropertyurl"></a>

```typescript
public readonly url: string;
```

- *Type:* `string`

Your organization's Slack URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel#url AlertChannel#url}

---

##### `userId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.userId" id="cdktfprovidernewrelicalertchannelconfigapropertyuserid"></a>

```typescript
public readonly userId: string;
```

- *Type:* `string`

The user ID for use with the user channel type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel#user_id AlertChannel#user_id}

---

### AlertConditionConfig <a name="@cdktf/provider-newrelic.AlertConditionConfig" id="cdktfprovidernewrelicalertconditionconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { AlertConditionConfig } from '@cdktf/provider-newrelic'

const alertConditionConfig: AlertConditionConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidernewrelicalertconditionconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidernewrelicalertconditionconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidernewrelicalertconditionconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidernewrelicalertconditionconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`entities`](#cdktfprovidernewrelicalertconditionconfigpropertyentities)<span title="Required">*</span> | `number`[] | The instance IDs associated with this condition. |
| [`metric`](#cdktfprovidernewrelicalertconditionconfigpropertymetric)<span title="Required">*</span> | `string` | The metric field accepts parameters based on the type set. |
| [`name`](#cdktfprovidernewrelicalertconditionconfigpropertyname)<span title="Required">*</span> | `string` | The title of the condition. Must be between 1 and 128 characters, inclusive. |
| [`policyId`](#cdktfprovidernewrelicalertconditionconfigpropertypolicyid)<span title="Required">*</span> | `number` | The ID of the policy where this condition should be used. |
| [`term`](#cdktfprovidernewrelicalertconditionconfigpropertyterm)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.AlertConditionTerm`](#@cdktf/provider-newrelic.AlertConditionTerm)[] | term block. |
| [`type`](#cdktfprovidernewrelicalertconditionconfigpropertytype)<span title="Required">*</span> | `string` | The type of condition. One of: (apm_app_metric, apm_jvm_metric, apm_kt_metric, browser_metric, mobile_metric, servers_metric). |
| [`conditionScope`](#cdktfprovidernewrelicalertconditionconfigpropertyconditionscope) | `string` | One of (application, instance). |
| [`enabled`](#cdktfprovidernewrelicalertconditionconfigpropertyenabled) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Whether the condition is enabled. |
| [`gcMetric`](#cdktfprovidernewrelicalertconditionconfigpropertygcmetric) | `string` | A valid Garbage Collection metric e.g. GC/G1 Young Generation. This is required if you are using apm_jvm_metric with gc_cpu_time condition type. |
| [`runbookUrl`](#cdktfprovidernewrelicalertconditionconfigpropertyrunbookurl) | `string` | Runbook URL to display in notifications. |
| [`userDefinedMetric`](#cdktfprovidernewrelicalertconditionconfigpropertyuserdefinedmetric) | `string` | A custom metric to be evaluated. |
| [`userDefinedValueFunction`](#cdktfprovidernewrelicalertconditionconfigpropertyuserdefinedvaluefunction) | `string` | One of: (average, min, max, total, sample_size). |
| [`violationCloseTimer`](#cdktfprovidernewrelicalertconditionconfigpropertyviolationclosetimer) | `number` | Automatically close instance-based violations, including JVM health metric violations, after the number of hours specified. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertConditionConfig.property.count" id="cdktfprovidernewrelicalertconditionconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertConditionConfig.property.dependsOn" id="cdktfprovidernewrelicalertconditionconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertConditionConfig.property.lifecycle" id="cdktfprovidernewrelicalertconditionconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertConditionConfig.property.provider" id="cdktfprovidernewrelicalertconditionconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `entities`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertConditionConfig.property.entities" id="cdktfprovidernewrelicalertconditionconfigpropertyentities"></a>

```typescript
public readonly entities: number[];
```

- *Type:* `number`[]

The instance IDs associated with this condition.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition#entities AlertCondition#entities}

---

##### `metric`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertConditionConfig.property.metric" id="cdktfprovidernewrelicalertconditionconfigpropertymetric"></a>

```typescript
public readonly metric: string;
```

- *Type:* `string`

The metric field accepts parameters based on the type set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition#metric AlertCondition#metric}

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertConditionConfig.property.name" id="cdktfprovidernewrelicalertconditionconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The title of the condition. Must be between 1 and 128 characters, inclusive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition#name AlertCondition#name}

---

##### `policyId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertConditionConfig.property.policyId" id="cdktfprovidernewrelicalertconditionconfigpropertypolicyid"></a>

```typescript
public readonly policyId: number;
```

- *Type:* `number`

The ID of the policy where this condition should be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition#policy_id AlertCondition#policy_id}

---

##### `term`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertConditionConfig.property.term" id="cdktfprovidernewrelicalertconditionconfigpropertyterm"></a>

```typescript
public readonly term: IResolvable | AlertConditionTerm[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.AlertConditionTerm`](#@cdktf/provider-newrelic.AlertConditionTerm)[]

term block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition#term AlertCondition#term}

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertConditionConfig.property.type" id="cdktfprovidernewrelicalertconditionconfigpropertytype"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

The type of condition. One of: (apm_app_metric, apm_jvm_metric, apm_kt_metric, browser_metric, mobile_metric, servers_metric).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition#type AlertCondition#type}

---

##### `conditionScope`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertConditionConfig.property.conditionScope" id="cdktfprovidernewrelicalertconditionconfigpropertyconditionscope"></a>

```typescript
public readonly conditionScope: string;
```

- *Type:* `string`

One of (application, instance).

Choose application for most scenarios. If you are using the JVM plugin in New Relic, the instance setting allows your condition to trigger for specific app instances.  Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition#condition_scope AlertCondition#condition_scope}

---

##### `enabled`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertConditionConfig.property.enabled" id="cdktfprovidernewrelicalertconditionconfigpropertyenabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether the condition is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition#enabled AlertCondition#enabled}

---

##### `gcMetric`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertConditionConfig.property.gcMetric" id="cdktfprovidernewrelicalertconditionconfigpropertygcmetric"></a>

```typescript
public readonly gcMetric: string;
```

- *Type:* `string`

A valid Garbage Collection metric e.g. GC/G1 Young Generation. This is required if you are using apm_jvm_metric with gc_cpu_time condition type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition#gc_metric AlertCondition#gc_metric}

---

##### `runbookUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertConditionConfig.property.runbookUrl" id="cdktfprovidernewrelicalertconditionconfigpropertyrunbookurl"></a>

```typescript
public readonly runbookUrl: string;
```

- *Type:* `string`

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition#runbook_url AlertCondition#runbook_url}

---

##### `userDefinedMetric`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertConditionConfig.property.userDefinedMetric" id="cdktfprovidernewrelicalertconditionconfigpropertyuserdefinedmetric"></a>

```typescript
public readonly userDefinedMetric: string;
```

- *Type:* `string`

A custom metric to be evaluated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition#user_defined_metric AlertCondition#user_defined_metric}

---

##### `userDefinedValueFunction`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertConditionConfig.property.userDefinedValueFunction" id="cdktfprovidernewrelicalertconditionconfigpropertyuserdefinedvaluefunction"></a>

```typescript
public readonly userDefinedValueFunction: string;
```

- *Type:* `string`

One of: (average, min, max, total, sample_size).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition#user_defined_value_function AlertCondition#user_defined_value_function}

---

##### `violationCloseTimer`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertConditionConfig.property.violationCloseTimer" id="cdktfprovidernewrelicalertconditionconfigpropertyviolationclosetimer"></a>

```typescript
public readonly violationCloseTimer: number;
```

- *Type:* `number`

Automatically close instance-based violations, including JVM health metric violations, after the number of hours specified.

Must be: 1, 2, 4, 8, 12 or 24.  Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition#violation_close_timer AlertCondition#violation_close_timer}

---

### AlertConditionTerm <a name="@cdktf/provider-newrelic.AlertConditionTerm" id="cdktfprovidernewrelicalertconditionterm"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { AlertConditionTerm } from '@cdktf/provider-newrelic'

const alertConditionTerm: AlertConditionTerm = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`duration`](#cdktfprovidernewrelicalertconditiontermpropertyduration)<span title="Required">*</span> | `number` | In minutes, must be in the range of 5 to 120, inclusive. |
| [`threshold`](#cdktfprovidernewrelicalertconditiontermpropertythreshold)<span title="Required">*</span> | `number` | Must be 0 or greater. |
| [`timeFunction`](#cdktfprovidernewrelicalertconditiontermpropertytimefunction)<span title="Required">*</span> | `string` | One of (all, any). |
| [`operator`](#cdktfprovidernewrelicalertconditiontermpropertyoperator) | `string` | One of (above, below, equal). Defaults to equal. |
| [`priority`](#cdktfprovidernewrelicalertconditiontermpropertypriority) | `string` | One of (critical, warning). Defaults to critical. |

---

##### `duration`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertConditionTerm.property.duration" id="cdktfprovidernewrelicalertconditiontermpropertyduration"></a>

```typescript
public readonly duration: number;
```

- *Type:* `number`

In minutes, must be in the range of 5 to 120, inclusive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition#duration AlertCondition#duration}

---

##### `threshold`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertConditionTerm.property.threshold" id="cdktfprovidernewrelicalertconditiontermpropertythreshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* `number`

Must be 0 or greater.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition#threshold AlertCondition#threshold}

---

##### `timeFunction`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertConditionTerm.property.timeFunction" id="cdktfprovidernewrelicalertconditiontermpropertytimefunction"></a>

```typescript
public readonly timeFunction: string;
```

- *Type:* `string`

One of (all, any).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition#time_function AlertCondition#time_function}

---

##### `operator`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertConditionTerm.property.operator" id="cdktfprovidernewrelicalertconditiontermpropertyoperator"></a>

```typescript
public readonly operator: string;
```

- *Type:* `string`

One of (above, below, equal). Defaults to equal.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition#operator AlertCondition#operator}

---

##### `priority`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertConditionTerm.property.priority" id="cdktfprovidernewrelicalertconditiontermpropertypriority"></a>

```typescript
public readonly priority: string;
```

- *Type:* `string`

One of (critical, warning). Defaults to critical.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition#priority AlertCondition#priority}

---

### AlertMutingRuleCondition <a name="@cdktf/provider-newrelic.AlertMutingRuleCondition" id="cdktfprovidernewrelicalertmutingrulecondition"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { AlertMutingRuleCondition } from '@cdktf/provider-newrelic'

const alertMutingRuleCondition: AlertMutingRuleCondition = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`conditions`](#cdktfprovidernewrelicalertmutingruleconditionpropertyconditions)<span title="Required">*</span> | [`@cdktf/provider-newrelic.AlertMutingRuleConditionConditions`](#@cdktf/provider-newrelic.AlertMutingRuleConditionConditions)[] \| [`cdktf.IResolvable`](#cdktf.IResolvable) | conditions block. |
| [`operator`](#cdktfprovidernewrelicalertmutingruleconditionpropertyoperator)<span title="Required">*</span> | `string` | The operator used to combine all the MutingRuleConditions within the group. |

---

##### `conditions`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleCondition.property.conditions" id="cdktfprovidernewrelicalertmutingruleconditionpropertyconditions"></a>

```typescript
public readonly conditions: AlertMutingRuleConditionConditions[] | IResolvable;
```

- *Type:* [`@cdktf/provider-newrelic.AlertMutingRuleConditionConditions`](#@cdktf/provider-newrelic.AlertMutingRuleConditionConditions)[] | [`cdktf.IResolvable`](#cdktf.IResolvable)

conditions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule#conditions AlertMutingRule#conditions}

---

##### `operator`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleCondition.property.operator" id="cdktfprovidernewrelicalertmutingruleconditionpropertyoperator"></a>

```typescript
public readonly operator: string;
```

- *Type:* `string`

The operator used to combine all the MutingRuleConditions within the group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule#operator AlertMutingRule#operator}

---

### AlertMutingRuleConditionConditions <a name="@cdktf/provider-newrelic.AlertMutingRuleConditionConditions" id="cdktfprovidernewrelicalertmutingruleconditionconditions"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { AlertMutingRuleConditionConditions } from '@cdktf/provider-newrelic'

const alertMutingRuleConditionConditions: AlertMutingRuleConditionConditions = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`attribute`](#cdktfprovidernewrelicalertmutingruleconditionconditionspropertyattribute)<span title="Required">*</span> | `string` | The attribute on a violation. |
| [`operator`](#cdktfprovidernewrelicalertmutingruleconditionconditionspropertyoperator)<span title="Required">*</span> | `string` | The operator used to compare the attribute's value with the supplied value(s). |
| [`values`](#cdktfprovidernewrelicalertmutingruleconditionconditionspropertyvalues)<span title="Required">*</span> | `string`[] | The value(s) to compare against the attribute's value. |

---

##### `attribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConditionConditions.property.attribute" id="cdktfprovidernewrelicalertmutingruleconditionconditionspropertyattribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* `string`

The attribute on a violation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule#attribute AlertMutingRule#attribute}

---

##### `operator`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConditionConditions.property.operator" id="cdktfprovidernewrelicalertmutingruleconditionconditionspropertyoperator"></a>

```typescript
public readonly operator: string;
```

- *Type:* `string`

The operator used to compare the attribute's value with the supplied value(s).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule#operator AlertMutingRule#operator}

---

##### `values`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConditionConditions.property.values" id="cdktfprovidernewrelicalertmutingruleconditionconditionspropertyvalues"></a>

```typescript
public readonly values: string[];
```

- *Type:* `string`[]

The value(s) to compare against the attribute's value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule#values AlertMutingRule#values}

---

### AlertMutingRuleConfig <a name="@cdktf/provider-newrelic.AlertMutingRuleConfig" id="cdktfprovidernewrelicalertmutingruleconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { AlertMutingRuleConfig } from '@cdktf/provider-newrelic'

const alertMutingRuleConfig: AlertMutingRuleConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidernewrelicalertmutingruleconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidernewrelicalertmutingruleconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidernewrelicalertmutingruleconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidernewrelicalertmutingruleconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`condition`](#cdktfprovidernewrelicalertmutingruleconfigpropertycondition)<span title="Required">*</span> | [`@cdktf/provider-newrelic.AlertMutingRuleCondition`](#@cdktf/provider-newrelic.AlertMutingRuleCondition) | condition block. |
| [`enabled`](#cdktfprovidernewrelicalertmutingruleconfigpropertyenabled)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Whether the MutingRule is enabled. |
| [`name`](#cdktfprovidernewrelicalertmutingruleconfigpropertyname)<span title="Required">*</span> | `string` | The name of the MutingRule. |
| [`accountId`](#cdktfprovidernewrelicalertmutingruleconfigpropertyaccountid) | `number` | The account id of the MutingRule.. |
| [`description`](#cdktfprovidernewrelicalertmutingruleconfigpropertydescription) | `string` | The description of the MutingRule. |
| [`schedule`](#cdktfprovidernewrelicalertmutingruleconfigpropertyschedule) | [`@cdktf/provider-newrelic.AlertMutingRuleSchedule`](#@cdktf/provider-newrelic.AlertMutingRuleSchedule) | schedule block. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConfig.property.count" id="cdktfprovidernewrelicalertmutingruleconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConfig.property.dependsOn" id="cdktfprovidernewrelicalertmutingruleconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConfig.property.lifecycle" id="cdktfprovidernewrelicalertmutingruleconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConfig.property.provider" id="cdktfprovidernewrelicalertmutingruleconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `condition`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConfig.property.condition" id="cdktfprovidernewrelicalertmutingruleconfigpropertycondition"></a>

```typescript
public readonly condition: AlertMutingRuleCondition;
```

- *Type:* [`@cdktf/provider-newrelic.AlertMutingRuleCondition`](#@cdktf/provider-newrelic.AlertMutingRuleCondition)

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule#condition AlertMutingRule#condition}

---

##### `enabled`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConfig.property.enabled" id="cdktfprovidernewrelicalertmutingruleconfigpropertyenabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether the MutingRule is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule#enabled AlertMutingRule#enabled}

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConfig.property.name" id="cdktfprovidernewrelicalertmutingruleconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the MutingRule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule#name AlertMutingRule#name}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConfig.property.accountId" id="cdktfprovidernewrelicalertmutingruleconfigpropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The account id of the MutingRule..

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule#account_id AlertMutingRule#account_id}

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConfig.property.description" id="cdktfprovidernewrelicalertmutingruleconfigpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

The description of the MutingRule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule#description AlertMutingRule#description}

---

##### `schedule`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConfig.property.schedule" id="cdktfprovidernewrelicalertmutingruleconfigpropertyschedule"></a>

```typescript
public readonly schedule: AlertMutingRuleSchedule;
```

- *Type:* [`@cdktf/provider-newrelic.AlertMutingRuleSchedule`](#@cdktf/provider-newrelic.AlertMutingRuleSchedule)

schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule#schedule AlertMutingRule#schedule}

---

### AlertMutingRuleSchedule <a name="@cdktf/provider-newrelic.AlertMutingRuleSchedule" id="cdktfprovidernewrelicalertmutingruleschedule"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { AlertMutingRuleSchedule } from '@cdktf/provider-newrelic'

const alertMutingRuleSchedule: AlertMutingRuleSchedule = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`timeZone`](#cdktfprovidernewrelicalertmutingruleschedulepropertytimezone)<span title="Required">*</span> | `string` | The time zone that applies to the MutingRule schedule. |
| [`endRepeat`](#cdktfprovidernewrelicalertmutingruleschedulepropertyendrepeat) | `string` | The datetime stamp when the MutingRule schedule should stop repeating. |
| [`endTime`](#cdktfprovidernewrelicalertmutingruleschedulepropertyendtime) | `string` | The datetime stamp representing when the MutingRule should end. |
| [`repeat`](#cdktfprovidernewrelicalertmutingruleschedulepropertyrepeat) | `string` | The frequency the MutingRule schedule repeats. One of [DAILY, WEEKLY, MONTHLY]. |
| [`repeatCount`](#cdktfprovidernewrelicalertmutingruleschedulepropertyrepeatcount) | `number` | The number of times the MutingRule schedule should repeat. |
| [`startTime`](#cdktfprovidernewrelicalertmutingruleschedulepropertystarttime) | `string` | The datetime stamp representing when the MutingRule should start. |
| [`weeklyRepeatDays`](#cdktfprovidernewrelicalertmutingruleschedulepropertyweeklyrepeatdays) | `string`[] | The day(s) of the week that a MutingRule should repeat when the repeat field is set to WEEKLY. |

---

##### `timeZone`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleSchedule.property.timeZone" id="cdktfprovidernewrelicalertmutingruleschedulepropertytimezone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* `string`

The time zone that applies to the MutingRule schedule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule#time_zone AlertMutingRule#time_zone}

---

##### `endRepeat`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleSchedule.property.endRepeat" id="cdktfprovidernewrelicalertmutingruleschedulepropertyendrepeat"></a>

```typescript
public readonly endRepeat: string;
```

- *Type:* `string`

The datetime stamp when the MutingRule schedule should stop repeating.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule#end_repeat AlertMutingRule#end_repeat}

---

##### `endTime`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleSchedule.property.endTime" id="cdktfprovidernewrelicalertmutingruleschedulepropertyendtime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* `string`

The datetime stamp representing when the MutingRule should end.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule#end_time AlertMutingRule#end_time}

---

##### `repeat`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleSchedule.property.repeat" id="cdktfprovidernewrelicalertmutingruleschedulepropertyrepeat"></a>

```typescript
public readonly repeat: string;
```

- *Type:* `string`

The frequency the MutingRule schedule repeats. One of [DAILY, WEEKLY, MONTHLY].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule#repeat AlertMutingRule#repeat}

---

##### `repeatCount`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleSchedule.property.repeatCount" id="cdktfprovidernewrelicalertmutingruleschedulepropertyrepeatcount"></a>

```typescript
public readonly repeatCount: number;
```

- *Type:* `number`

The number of times the MutingRule schedule should repeat.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule#repeat_count AlertMutingRule#repeat_count}

---

##### `startTime`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleSchedule.property.startTime" id="cdktfprovidernewrelicalertmutingruleschedulepropertystarttime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* `string`

The datetime stamp representing when the MutingRule should start.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule#start_time AlertMutingRule#start_time}

---

##### `weeklyRepeatDays`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleSchedule.property.weeklyRepeatDays" id="cdktfprovidernewrelicalertmutingruleschedulepropertyweeklyrepeatdays"></a>

```typescript
public readonly weeklyRepeatDays: string[];
```

- *Type:* `string`[]

The day(s) of the week that a MutingRule should repeat when the repeat field is set to WEEKLY.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule#weekly_repeat_days AlertMutingRule#weekly_repeat_days}

---

### AlertPolicyChannelConfig <a name="@cdktf/provider-newrelic.AlertPolicyChannelConfig" id="cdktfprovidernewrelicalertpolicychannelconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { AlertPolicyChannelConfig } from '@cdktf/provider-newrelic'

const alertPolicyChannelConfig: AlertPolicyChannelConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidernewrelicalertpolicychannelconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidernewrelicalertpolicychannelconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidernewrelicalertpolicychannelconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidernewrelicalertpolicychannelconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`channelIds`](#cdktfprovidernewrelicalertpolicychannelconfigpropertychannelids)<span title="Required">*</span> | `number`[] | Array of channel IDs to apply to the specified policy. |
| [`policyId`](#cdktfprovidernewrelicalertpolicychannelconfigpropertypolicyid)<span title="Required">*</span> | `number` | The ID of the policy. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicyChannelConfig.property.count" id="cdktfprovidernewrelicalertpolicychannelconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicyChannelConfig.property.dependsOn" id="cdktfprovidernewrelicalertpolicychannelconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicyChannelConfig.property.lifecycle" id="cdktfprovidernewrelicalertpolicychannelconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicyChannelConfig.property.provider" id="cdktfprovidernewrelicalertpolicychannelconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `channelIds`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertPolicyChannelConfig.property.channelIds" id="cdktfprovidernewrelicalertpolicychannelconfigpropertychannelids"></a>

```typescript
public readonly channelIds: number[];
```

- *Type:* `number`[]

Array of channel IDs to apply to the specified policy.

We recommended sorting channel IDs in ascending order to avoid drift your Terraform state.  Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_policy_channel#channel_ids AlertPolicyChannel#channel_ids}

---

##### `policyId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertPolicyChannelConfig.property.policyId" id="cdktfprovidernewrelicalertpolicychannelconfigpropertypolicyid"></a>

```typescript
public readonly policyId: number;
```

- *Type:* `number`

The ID of the policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_policy_channel#policy_id AlertPolicyChannel#policy_id}

---

### AlertPolicyConfig <a name="@cdktf/provider-newrelic.AlertPolicyConfig" id="cdktfprovidernewrelicalertpolicyconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { AlertPolicyConfig } from '@cdktf/provider-newrelic'

const alertPolicyConfig: AlertPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidernewrelicalertpolicyconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidernewrelicalertpolicyconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidernewrelicalertpolicyconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidernewrelicalertpolicyconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`name`](#cdktfprovidernewrelicalertpolicyconfigpropertyname)<span title="Required">*</span> | `string` | The name of the policy. |
| [`accountId`](#cdktfprovidernewrelicalertpolicyconfigpropertyaccountid) | `number` | The New Relic account ID to operate on. |
| [`channelIds`](#cdktfprovidernewrelicalertpolicyconfigpropertychannelids) | `number`[] | An array of channel IDs (integers) to assign to the policy. |
| [`incidentPreference`](#cdktfprovidernewrelicalertpolicyconfigpropertyincidentpreference) | `string` | The rollup strategy for the policy. Options include: PER_POLICY, PER_CONDITION, or PER_CONDITION_AND_TARGET. The default is PER_POLICY. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicyConfig.property.count" id="cdktfprovidernewrelicalertpolicyconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicyConfig.property.dependsOn" id="cdktfprovidernewrelicalertpolicyconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicyConfig.property.lifecycle" id="cdktfprovidernewrelicalertpolicyconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicyConfig.property.provider" id="cdktfprovidernewrelicalertpolicyconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertPolicyConfig.property.name" id="cdktfprovidernewrelicalertpolicyconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_policy#name AlertPolicy#name}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicyConfig.property.accountId" id="cdktfprovidernewrelicalertpolicyconfigpropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The New Relic account ID to operate on.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_policy#account_id AlertPolicy#account_id}

---

##### `channelIds`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicyConfig.property.channelIds" id="cdktfprovidernewrelicalertpolicyconfigpropertychannelids"></a>

```typescript
public readonly channelIds: number[];
```

- *Type:* `number`[]

An array of channel IDs (integers) to assign to the policy.

Adding or removing channel IDs from this array will result in a new alert policy resource being created and the old one being destroyed. Also note that channel IDs cannot be imported via terraform import.  Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_policy#channel_ids AlertPolicy#channel_ids}

---

##### `incidentPreference`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicyConfig.property.incidentPreference" id="cdktfprovidernewrelicalertpolicyconfigpropertyincidentpreference"></a>

```typescript
public readonly incidentPreference: string;
```

- *Type:* `string`

The rollup strategy for the policy. Options include: PER_POLICY, PER_CONDITION, or PER_CONDITION_AND_TARGET. The default is PER_POLICY.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_policy#incident_preference AlertPolicy#incident_preference}

---

### ApiAccessKeyConfig <a name="@cdktf/provider-newrelic.ApiAccessKeyConfig" id="cdktfprovidernewrelicapiaccesskeyconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ApiAccessKeyConfig } from '@cdktf/provider-newrelic'

const apiAccessKeyConfig: ApiAccessKeyConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidernewrelicapiaccesskeyconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidernewrelicapiaccesskeyconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidernewrelicapiaccesskeyconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidernewrelicapiaccesskeyconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`accountId`](#cdktfprovidernewrelicapiaccesskeyconfigpropertyaccountid)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/api_access_key#account_id ApiAccessKey#account_id}. |
| [`keyType`](#cdktfprovidernewrelicapiaccesskeyconfigpropertykeytype)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/api_access_key#key_type ApiAccessKey#key_type}. |
| [`ingestType`](#cdktfprovidernewrelicapiaccesskeyconfigpropertyingesttype) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/api_access_key#ingest_type ApiAccessKey#ingest_type}. |
| [`name`](#cdktfprovidernewrelicapiaccesskeyconfigpropertyname) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/api_access_key#name ApiAccessKey#name}. |
| [`notes`](#cdktfprovidernewrelicapiaccesskeyconfigpropertynotes) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/api_access_key#notes ApiAccessKey#notes}. |
| [`userId`](#cdktfprovidernewrelicapiaccesskeyconfigpropertyuserid) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/api_access_key#user_id ApiAccessKey#user_id}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApiAccessKeyConfig.property.count" id="cdktfprovidernewrelicapiaccesskeyconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApiAccessKeyConfig.property.dependsOn" id="cdktfprovidernewrelicapiaccesskeyconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApiAccessKeyConfig.property.lifecycle" id="cdktfprovidernewrelicapiaccesskeyconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApiAccessKeyConfig.property.provider" id="cdktfprovidernewrelicapiaccesskeyconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `accountId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApiAccessKeyConfig.property.accountId" id="cdktfprovidernewrelicapiaccesskeyconfigpropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/api_access_key#account_id ApiAccessKey#account_id}.

---

##### `keyType`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApiAccessKeyConfig.property.keyType" id="cdktfprovidernewrelicapiaccesskeyconfigpropertykeytype"></a>

```typescript
public readonly keyType: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/api_access_key#key_type ApiAccessKey#key_type}.

---

##### `ingestType`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApiAccessKeyConfig.property.ingestType" id="cdktfprovidernewrelicapiaccesskeyconfigpropertyingesttype"></a>

```typescript
public readonly ingestType: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/api_access_key#ingest_type ApiAccessKey#ingest_type}.

---

##### `name`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApiAccessKeyConfig.property.name" id="cdktfprovidernewrelicapiaccesskeyconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/api_access_key#name ApiAccessKey#name}.

---

##### `notes`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApiAccessKeyConfig.property.notes" id="cdktfprovidernewrelicapiaccesskeyconfigpropertynotes"></a>

```typescript
public readonly notes: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/api_access_key#notes ApiAccessKey#notes}.

---

##### `userId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApiAccessKeyConfig.property.userId" id="cdktfprovidernewrelicapiaccesskeyconfigpropertyuserid"></a>

```typescript
public readonly userId: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/api_access_key#user_id ApiAccessKey#user_id}.

---

### ApplicationSettingsConfig <a name="@cdktf/provider-newrelic.ApplicationSettingsConfig" id="cdktfprovidernewrelicapplicationsettingsconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ApplicationSettingsConfig } from '@cdktf/provider-newrelic'

const applicationSettingsConfig: ApplicationSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidernewrelicapplicationsettingsconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidernewrelicapplicationsettingsconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidernewrelicapplicationsettingsconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidernewrelicapplicationsettingsconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`appApdexThreshold`](#cdktfprovidernewrelicapplicationsettingsconfigpropertyappapdexthreshold)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/application_settings#app_apdex_threshold ApplicationSettings#app_apdex_threshold}. |
| [`enableRealUserMonitoring`](#cdktfprovidernewrelicapplicationsettingsconfigpropertyenablerealusermonitoring)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/application_settings#enable_real_user_monitoring ApplicationSettings#enable_real_user_monitoring}. |
| [`endUserApdexThreshold`](#cdktfprovidernewrelicapplicationsettingsconfigpropertyenduserapdexthreshold)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/application_settings#end_user_apdex_threshold ApplicationSettings#end_user_apdex_threshold}. |
| [`name`](#cdktfprovidernewrelicapplicationsettingsconfigpropertyname)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/application_settings#name ApplicationSettings#name}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApplicationSettingsConfig.property.count" id="cdktfprovidernewrelicapplicationsettingsconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApplicationSettingsConfig.property.dependsOn" id="cdktfprovidernewrelicapplicationsettingsconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApplicationSettingsConfig.property.lifecycle" id="cdktfprovidernewrelicapplicationsettingsconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApplicationSettingsConfig.property.provider" id="cdktfprovidernewrelicapplicationsettingsconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `appApdexThreshold`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApplicationSettingsConfig.property.appApdexThreshold" id="cdktfprovidernewrelicapplicationsettingsconfigpropertyappapdexthreshold"></a>

```typescript
public readonly appApdexThreshold: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/application_settings#app_apdex_threshold ApplicationSettings#app_apdex_threshold}.

---

##### `enableRealUserMonitoring`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApplicationSettingsConfig.property.enableRealUserMonitoring" id="cdktfprovidernewrelicapplicationsettingsconfigpropertyenablerealusermonitoring"></a>

```typescript
public readonly enableRealUserMonitoring: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/application_settings#enable_real_user_monitoring ApplicationSettings#enable_real_user_monitoring}.

---

##### `endUserApdexThreshold`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApplicationSettingsConfig.property.endUserApdexThreshold" id="cdktfprovidernewrelicapplicationsettingsconfigpropertyenduserapdexthreshold"></a>

```typescript
public readonly endUserApdexThreshold: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/application_settings#end_user_apdex_threshold ApplicationSettings#end_user_apdex_threshold}.

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApplicationSettingsConfig.property.name" id="cdktfprovidernewrelicapplicationsettingsconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/application_settings#name ApplicationSettings#name}.

---

### DashboardConfig <a name="@cdktf/provider-newrelic.DashboardConfig" id="cdktfprovidernewrelicdashboardconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DashboardConfig } from '@cdktf/provider-newrelic'

const dashboardConfig: DashboardConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidernewrelicdashboardconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidernewrelicdashboardconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidernewrelicdashboardconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidernewrelicdashboardconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`title`](#cdktfprovidernewrelicdashboardconfigpropertytitle)<span title="Required">*</span> | `string` | The title of the dashboard. |
| [`editable`](#cdktfprovidernewrelicdashboardconfigpropertyeditable) | `string` | Determines who can edit the dashboard in an account. |
| [`filter`](#cdktfprovidernewrelicdashboardconfigpropertyfilter) | [`@cdktf/provider-newrelic.DashboardFilter`](#@cdktf/provider-newrelic.DashboardFilter) | filter block. |
| [`gridColumnCount`](#cdktfprovidernewrelicdashboardconfigpropertygridcolumncount) | `number` | New Relic One supports a 3 column grid or a 12 column grid. |
| [`icon`](#cdktfprovidernewrelicdashboardconfigpropertyicon) | `string` | The icon for the dashboard. |
| [`visibility`](#cdktfprovidernewrelicdashboardconfigpropertyvisibility) | `string` | Determines who can see the dashboard in an account. Valid values are all or owner. Defaults to all. |
| [`widget`](#cdktfprovidernewrelicdashboardconfigpropertywidget) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.DashboardWidget`](#@cdktf/provider-newrelic.DashboardWidget)[] | widget block. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardConfig.property.count" id="cdktfprovidernewrelicdashboardconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardConfig.property.dependsOn" id="cdktfprovidernewrelicdashboardconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardConfig.property.lifecycle" id="cdktfprovidernewrelicdashboardconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardConfig.property.provider" id="cdktfprovidernewrelicdashboardconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `title`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardConfig.property.title" id="cdktfprovidernewrelicdashboardconfigpropertytitle"></a>

```typescript
public readonly title: string;
```

- *Type:* `string`

The title of the dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#title Dashboard#title}

---

##### `editable`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardConfig.property.editable" id="cdktfprovidernewrelicdashboardconfigpropertyeditable"></a>

```typescript
public readonly editable: string;
```

- *Type:* `string`

Determines who can edit the dashboard in an account.

Valid values are all, editable_by_all, editable_by_owner, or read_only. Defaults to editable_by_all.  Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#editable Dashboard#editable}

---

##### `filter`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardConfig.property.filter" id="cdktfprovidernewrelicdashboardconfigpropertyfilter"></a>

```typescript
public readonly filter: DashboardFilter;
```

- *Type:* [`@cdktf/provider-newrelic.DashboardFilter`](#@cdktf/provider-newrelic.DashboardFilter)

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#filter Dashboard#filter}

---

##### `gridColumnCount`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardConfig.property.gridColumnCount" id="cdktfprovidernewrelicdashboardconfigpropertygridcolumncount"></a>

```typescript
public readonly gridColumnCount: number;
```

- *Type:* `number`

New Relic One supports a 3 column grid or a 12 column grid.

New Relic Insights supports a 3 column grid.  Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#grid_column_count Dashboard#grid_column_count}

---

##### `icon`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardConfig.property.icon" id="cdktfprovidernewrelicdashboardconfigpropertyicon"></a>

```typescript
public readonly icon: string;
```

- *Type:* `string`

The icon for the dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#icon Dashboard#icon}

---

##### `visibility`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardConfig.property.visibility" id="cdktfprovidernewrelicdashboardconfigpropertyvisibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* `string`

Determines who can see the dashboard in an account. Valid values are all or owner. Defaults to all.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#visibility Dashboard#visibility}

---

##### `widget`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardConfig.property.widget" id="cdktfprovidernewrelicdashboardconfigpropertywidget"></a>

```typescript
public readonly widget: IResolvable | DashboardWidget[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.DashboardWidget`](#@cdktf/provider-newrelic.DashboardWidget)[]

widget block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#widget Dashboard#widget}

---

### DashboardFilter <a name="@cdktf/provider-newrelic.DashboardFilter" id="cdktfprovidernewrelicdashboardfilter"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DashboardFilter } from '@cdktf/provider-newrelic'

const dashboardFilter: DashboardFilter = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`eventTypes`](#cdktfprovidernewrelicdashboardfilterpropertyeventtypes)<span title="Required">*</span> | `string`[] | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#event_types Dashboard#event_types}. |
| [`attributes`](#cdktfprovidernewrelicdashboardfilterpropertyattributes) | `string`[] | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#attributes Dashboard#attributes}. |

---

##### `eventTypes`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardFilter.property.eventTypes" id="cdktfprovidernewrelicdashboardfilterpropertyeventtypes"></a>

```typescript
public readonly eventTypes: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#event_types Dashboard#event_types}.

---

##### `attributes`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardFilter.property.attributes" id="cdktfprovidernewrelicdashboardfilterpropertyattributes"></a>

```typescript
public readonly attributes: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#attributes Dashboard#attributes}.

---

### DashboardWidget <a name="@cdktf/provider-newrelic.DashboardWidget" id="cdktfprovidernewrelicdashboardwidget"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DashboardWidget } from '@cdktf/provider-newrelic'

const dashboardWidget: DashboardWidget = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`column`](#cdktfprovidernewrelicdashboardwidgetpropertycolumn)<span title="Required">*</span> | `number` | Column position of widget from top left, starting at 1. |
| [`row`](#cdktfprovidernewrelicdashboardwidgetpropertyrow)<span title="Required">*</span> | `number` | Row position of widget from top left, starting at 1. |
| [`title`](#cdktfprovidernewrelicdashboardwidgetpropertytitle)<span title="Required">*</span> | `string` | A title for the widget. |
| [`visualization`](#cdktfprovidernewrelicdashboardwidgetpropertyvisualization)<span title="Required">*</span> | `string` | How the widget visualizes data. |
| [`accountId`](#cdktfprovidernewrelicdashboardwidgetpropertyaccountid) | `number` | The target account ID to fetch data from, if not the current account. |
| [`compareWith`](#cdktfprovidernewrelicdashboardwidgetpropertycomparewith) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.DashboardWidgetCompareWith`](#@cdktf/provider-newrelic.DashboardWidgetCompareWith)[] | compare_with block. |
| [`drilldownDashboardId`](#cdktfprovidernewrelicdashboardwidgetpropertydrilldowndashboardid) | `number` | The ID of a dashboard to link to from the widget's facets. |
| [`duration`](#cdktfprovidernewrelicdashboardwidgetpropertyduration) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#duration Dashboard#duration}. |
| [`endTime`](#cdktfprovidernewrelicdashboardwidgetpropertyendtime) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#end_time Dashboard#end_time}. |
| [`entityIds`](#cdktfprovidernewrelicdashboardwidgetpropertyentityids) | `number`[] | A collection of entity ids to display data for. These are typically application IDs. |
| [`facet`](#cdktfprovidernewrelicdashboardwidgetpropertyfacet) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#facet Dashboard#facet}. |
| [`height`](#cdktfprovidernewrelicdashboardwidgetpropertyheight) | `number` | Height of the widget. Valid values are 1 to 3 inclusive. Defaults to 1. |
| [`limit`](#cdktfprovidernewrelicdashboardwidgetpropertylimit) | `number` | The limit of distinct data series to display.  Requires `order_by` to be set. |
| [`metric`](#cdktfprovidernewrelicdashboardwidgetpropertymetric) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.DashboardWidgetMetric`](#@cdktf/provider-newrelic.DashboardWidgetMetric)[] | metric block. |
| [`notes`](#cdktfprovidernewrelicdashboardwidgetpropertynotes) | `string` | Description of the widget. |
| [`nrql`](#cdktfprovidernewrelicdashboardwidgetpropertynrql) | `string` | Valid NRQL query string. |
| [`orderBy`](#cdktfprovidernewrelicdashboardwidgetpropertyorderby) | `string` | Set the order of result series.  Required when using `limit`. |
| [`source`](#cdktfprovidernewrelicdashboardwidgetpropertysource) | `string` | The markdown source to be rendered in the widget. |
| [`thresholdRed`](#cdktfprovidernewrelicdashboardwidgetpropertythresholdred) | `number` | Threshold above which the displayed value will be styled with a red color. |
| [`thresholdYellow`](#cdktfprovidernewrelicdashboardwidgetpropertythresholdyellow) | `number` | Threshold above which the displayed value will be styled with a yellow color. |
| [`width`](#cdktfprovidernewrelicdashboardwidgetpropertywidth) | `number` | Width of the widget. Valid values are 1 to 3 inclusive. Defaults to 1. |

---

##### `column`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.column" id="cdktfprovidernewrelicdashboardwidgetpropertycolumn"></a>

```typescript
public readonly column: number;
```

- *Type:* `number`

Column position of widget from top left, starting at 1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#column Dashboard#column}

---

##### `row`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.row" id="cdktfprovidernewrelicdashboardwidgetpropertyrow"></a>

```typescript
public readonly row: number;
```

- *Type:* `number`

Row position of widget from top left, starting at 1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#row Dashboard#row}

---

##### `title`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.title" id="cdktfprovidernewrelicdashboardwidgetpropertytitle"></a>

```typescript
public readonly title: string;
```

- *Type:* `string`

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#title Dashboard#title}

---

##### `visualization`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.visualization" id="cdktfprovidernewrelicdashboardwidgetpropertyvisualization"></a>

```typescript
public readonly visualization: string;
```

- *Type:* `string`

How the widget visualizes data.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#visualization Dashboard#visualization}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.accountId" id="cdktfprovidernewrelicdashboardwidgetpropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The target account ID to fetch data from, if not the current account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#account_id Dashboard#account_id}

---

##### `compareWith`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.compareWith" id="cdktfprovidernewrelicdashboardwidgetpropertycomparewith"></a>

```typescript
public readonly compareWith: IResolvable | DashboardWidgetCompareWith[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.DashboardWidgetCompareWith`](#@cdktf/provider-newrelic.DashboardWidgetCompareWith)[]

compare_with block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#compare_with Dashboard#compare_with}

---

##### `drilldownDashboardId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.drilldownDashboardId" id="cdktfprovidernewrelicdashboardwidgetpropertydrilldowndashboardid"></a>

```typescript
public readonly drilldownDashboardId: number;
```

- *Type:* `number`

The ID of a dashboard to link to from the widget's facets.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#drilldown_dashboard_id Dashboard#drilldown_dashboard_id}

---

##### `duration`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.duration" id="cdktfprovidernewrelicdashboardwidgetpropertyduration"></a>

```typescript
public readonly duration: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#duration Dashboard#duration}.

---

##### `endTime`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.endTime" id="cdktfprovidernewrelicdashboardwidgetpropertyendtime"></a>

```typescript
public readonly endTime: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#end_time Dashboard#end_time}.

---

##### `entityIds`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.entityIds" id="cdktfprovidernewrelicdashboardwidgetpropertyentityids"></a>

```typescript
public readonly entityIds: number[];
```

- *Type:* `number`[]

A collection of entity ids to display data for. These are typically application IDs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#entity_ids Dashboard#entity_ids}

---

##### `facet`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.facet" id="cdktfprovidernewrelicdashboardwidgetpropertyfacet"></a>

```typescript
public readonly facet: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#facet Dashboard#facet}.

---

##### `height`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.height" id="cdktfprovidernewrelicdashboardwidgetpropertyheight"></a>

```typescript
public readonly height: number;
```

- *Type:* `number`

Height of the widget. Valid values are 1 to 3 inclusive. Defaults to 1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#height Dashboard#height}

---

##### `limit`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.limit" id="cdktfprovidernewrelicdashboardwidgetpropertylimit"></a>

```typescript
public readonly limit: number;
```

- *Type:* `number`

The limit of distinct data series to display.  Requires `order_by` to be set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#limit Dashboard#limit}

---

##### `metric`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.metric" id="cdktfprovidernewrelicdashboardwidgetpropertymetric"></a>

```typescript
public readonly metric: IResolvable | DashboardWidgetMetric[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.DashboardWidgetMetric`](#@cdktf/provider-newrelic.DashboardWidgetMetric)[]

metric block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#metric Dashboard#metric}

---

##### `notes`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.notes" id="cdktfprovidernewrelicdashboardwidgetpropertynotes"></a>

```typescript
public readonly notes: string;
```

- *Type:* `string`

Description of the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#notes Dashboard#notes}

---

##### `nrql`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.nrql" id="cdktfprovidernewrelicdashboardwidgetpropertynrql"></a>

```typescript
public readonly nrql: string;
```

- *Type:* `string`

Valid NRQL query string.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#nrql Dashboard#nrql}

---

##### `orderBy`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.orderBy" id="cdktfprovidernewrelicdashboardwidgetpropertyorderby"></a>

```typescript
public readonly orderBy: string;
```

- *Type:* `string`

Set the order of result series.  Required when using `limit`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#order_by Dashboard#order_by}

---

##### `source`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.source" id="cdktfprovidernewrelicdashboardwidgetpropertysource"></a>

```typescript
public readonly source: string;
```

- *Type:* `string`

The markdown source to be rendered in the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#source Dashboard#source}

---

##### `thresholdRed`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.thresholdRed" id="cdktfprovidernewrelicdashboardwidgetpropertythresholdred"></a>

```typescript
public readonly thresholdRed: number;
```

- *Type:* `number`

Threshold above which the displayed value will be styled with a red color.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#threshold_red Dashboard#threshold_red}

---

##### `thresholdYellow`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.thresholdYellow" id="cdktfprovidernewrelicdashboardwidgetpropertythresholdyellow"></a>

```typescript
public readonly thresholdYellow: number;
```

- *Type:* `number`

Threshold above which the displayed value will be styled with a yellow color.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#threshold_yellow Dashboard#threshold_yellow}

---

##### `width`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.width" id="cdktfprovidernewrelicdashboardwidgetpropertywidth"></a>

```typescript
public readonly width: number;
```

- *Type:* `number`

Width of the widget. Valid values are 1 to 3 inclusive. Defaults to 1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#width Dashboard#width}

---

### DashboardWidgetCompareWith <a name="@cdktf/provider-newrelic.DashboardWidgetCompareWith" id="cdktfprovidernewrelicdashboardwidgetcomparewith"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DashboardWidgetCompareWith } from '@cdktf/provider-newrelic'

const dashboardWidgetCompareWith: DashboardWidgetCompareWith = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`offsetDuration`](#cdktfprovidernewrelicdashboardwidgetcomparewithpropertyoffsetduration)<span title="Required">*</span> | `string` | The offset duration for the COMPARE WITH clause. |
| [`presentation`](#cdktfprovidernewrelicdashboardwidgetcomparewithpropertypresentation)<span title="Required">*</span> | [`@cdktf/provider-newrelic.DashboardWidgetCompareWithPresentation`](#@cdktf/provider-newrelic.DashboardWidgetCompareWithPresentation) | presentation block. |

---

##### `offsetDuration`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardWidgetCompareWith.property.offsetDuration" id="cdktfprovidernewrelicdashboardwidgetcomparewithpropertyoffsetduration"></a>

```typescript
public readonly offsetDuration: string;
```

- *Type:* `string`

The offset duration for the COMPARE WITH clause.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#offset_duration Dashboard#offset_duration}

---

##### `presentation`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardWidgetCompareWith.property.presentation" id="cdktfprovidernewrelicdashboardwidgetcomparewithpropertypresentation"></a>

```typescript
public readonly presentation: DashboardWidgetCompareWithPresentation;
```

- *Type:* [`@cdktf/provider-newrelic.DashboardWidgetCompareWithPresentation`](#@cdktf/provider-newrelic.DashboardWidgetCompareWithPresentation)

presentation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#presentation Dashboard#presentation}

---

### DashboardWidgetCompareWithPresentation <a name="@cdktf/provider-newrelic.DashboardWidgetCompareWithPresentation" id="cdktfprovidernewrelicdashboardwidgetcomparewithpresentation"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DashboardWidgetCompareWithPresentation } from '@cdktf/provider-newrelic'

const dashboardWidgetCompareWithPresentation: DashboardWidgetCompareWithPresentation = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`color`](#cdktfprovidernewrelicdashboardwidgetcomparewithpresentationpropertycolor)<span title="Required">*</span> | `string` | The color for the rendered data. |
| [`name`](#cdktfprovidernewrelicdashboardwidgetcomparewithpresentationpropertyname)<span title="Required">*</span> | `string` | The name for the rendered data. |

---

##### `color`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardWidgetCompareWithPresentation.property.color" id="cdktfprovidernewrelicdashboardwidgetcomparewithpresentationpropertycolor"></a>

```typescript
public readonly color: string;
```

- *Type:* `string`

The color for the rendered data.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#color Dashboard#color}

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardWidgetCompareWithPresentation.property.name" id="cdktfprovidernewrelicdashboardwidgetcomparewithpresentationpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name for the rendered data.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#name Dashboard#name}

---

### DashboardWidgetMetric <a name="@cdktf/provider-newrelic.DashboardWidgetMetric" id="cdktfprovidernewrelicdashboardwidgetmetric"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DashboardWidgetMetric } from '@cdktf/provider-newrelic'

const dashboardWidgetMetric: DashboardWidgetMetric = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`name`](#cdktfprovidernewrelicdashboardwidgetmetricpropertyname)<span title="Required">*</span> | `string` | The metric name to display. |
| [`scope`](#cdktfprovidernewrelicdashboardwidgetmetricpropertyscope) | `string` | The metric scope. |
| [`units`](#cdktfprovidernewrelicdashboardwidgetmetricpropertyunits) | `string` | The metric units. |
| [`values`](#cdktfprovidernewrelicdashboardwidgetmetricpropertyvalues) | `string`[] | The metric values to display. |

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardWidgetMetric.property.name" id="cdktfprovidernewrelicdashboardwidgetmetricpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The metric name to display.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#name Dashboard#name}

---

##### `scope`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidgetMetric.property.scope" id="cdktfprovidernewrelicdashboardwidgetmetricpropertyscope"></a>

```typescript
public readonly scope: string;
```

- *Type:* `string`

The metric scope.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#scope Dashboard#scope}

---

##### `units`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidgetMetric.property.units" id="cdktfprovidernewrelicdashboardwidgetmetricpropertyunits"></a>

```typescript
public readonly units: string;
```

- *Type:* `string`

The metric units.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#units Dashboard#units}

---

##### `values`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidgetMetric.property.values" id="cdktfprovidernewrelicdashboardwidgetmetricpropertyvalues"></a>

```typescript
public readonly values: string[];
```

- *Type:* `string`[]

The metric values to display.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#values Dashboard#values}

---

### DataNewrelicAccountConfig <a name="@cdktf/provider-newrelic.DataNewrelicAccountConfig" id="cdktfprovidernewrelicdatanewrelicaccountconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DataNewrelicAccountConfig } from '@cdktf/provider-newrelic'

const dataNewrelicAccountConfig: DataNewrelicAccountConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidernewrelicdatanewrelicaccountconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidernewrelicdatanewrelicaccountconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidernewrelicdatanewrelicaccountconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidernewrelicdatanewrelicaccountconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`accountId`](#cdktfprovidernewrelicdatanewrelicaccountconfigpropertyaccountid) | `number` | The ID of the account in New Relic. |
| [`name`](#cdktfprovidernewrelicdatanewrelicaccountconfigpropertyname) | `string` | The name of the account in New Relic. |
| [`scope`](#cdktfprovidernewrelicdatanewrelicaccountconfigpropertyscope) | `string` | The scope of the account in New Relic.  Valid values are "global" and "in_region".  Defaults to "in_region". |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAccountConfig.property.count" id="cdktfprovidernewrelicdatanewrelicaccountconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAccountConfig.property.dependsOn" id="cdktfprovidernewrelicdatanewrelicaccountconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAccountConfig.property.lifecycle" id="cdktfprovidernewrelicdatanewrelicaccountconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAccountConfig.property.provider" id="cdktfprovidernewrelicdatanewrelicaccountconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAccountConfig.property.accountId" id="cdktfprovidernewrelicdatanewrelicaccountconfigpropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The ID of the account in New Relic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/account#account_id DataNewrelicAccount#account_id}

---

##### `name`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAccountConfig.property.name" id="cdktfprovidernewrelicdatanewrelicaccountconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the account in New Relic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/account#name DataNewrelicAccount#name}

---

##### `scope`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAccountConfig.property.scope" id="cdktfprovidernewrelicdatanewrelicaccountconfigpropertyscope"></a>

```typescript
public readonly scope: string;
```

- *Type:* `string`

The scope of the account in New Relic.  Valid values are "global" and "in_region".  Defaults to "in_region".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/account#scope DataNewrelicAccount#scope}

---

### DataNewrelicAlertChannelConfig <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfig" id="cdktfprovidernewrelicdatanewrelicalertchannelconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DataNewrelicAlertChannelConfig } from '@cdktf/provider-newrelic'

const dataNewrelicAlertChannelConfig: DataNewrelicAlertChannelConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidernewrelicdatanewrelicalertchannelconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidernewrelicdatanewrelicalertchannelconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidernewrelicdatanewrelicalertchannelconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidernewrelicdatanewrelicalertchannelconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`name`](#cdktfprovidernewrelicdatanewrelicalertchannelconfigpropertyname)<span title="Required">*</span> | `string` | The name of the alert channel in New Relic. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfig.property.count" id="cdktfprovidernewrelicdatanewrelicalertchannelconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfig.property.dependsOn" id="cdktfprovidernewrelicdatanewrelicalertchannelconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfig.property.lifecycle" id="cdktfprovidernewrelicdatanewrelicalertchannelconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfig.property.provider" id="cdktfprovidernewrelicdatanewrelicalertchannelconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfig.property.name" id="cdktfprovidernewrelicdatanewrelicalertchannelconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the alert channel in New Relic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/alert_channel#name DataNewrelicAlertChannel#name}

---

### DataNewrelicAlertPolicyConfig <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicyConfig" id="cdktfprovidernewrelicdatanewrelicalertpolicyconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DataNewrelicAlertPolicyConfig } from '@cdktf/provider-newrelic'

const dataNewrelicAlertPolicyConfig: DataNewrelicAlertPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidernewrelicdatanewrelicalertpolicyconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidernewrelicdatanewrelicalertpolicyconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidernewrelicdatanewrelicalertpolicyconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidernewrelicdatanewrelicalertpolicyconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`name`](#cdktfprovidernewrelicdatanewrelicalertpolicyconfigpropertyname)<span title="Required">*</span> | `string` | The name of the alert policy in New Relic. |
| [`accountId`](#cdktfprovidernewrelicdatanewrelicalertpolicyconfigpropertyaccountid) | `number` | The New Relic account ID to operate on. |
| [`incidentPreference`](#cdktfprovidernewrelicdatanewrelicalertpolicyconfigpropertyincidentpreference) | `string` | The rollup strategy for the policy. Options include: `PER_POLICY`, `PER_CONDITION`, or `PER_CONDITION_AND_TARGET`. The default is `PER_POLICY`. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicyConfig.property.count" id="cdktfprovidernewrelicdatanewrelicalertpolicyconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicyConfig.property.dependsOn" id="cdktfprovidernewrelicdatanewrelicalertpolicyconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicyConfig.property.lifecycle" id="cdktfprovidernewrelicdatanewrelicalertpolicyconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicyConfig.property.provider" id="cdktfprovidernewrelicdatanewrelicalertpolicyconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicyConfig.property.name" id="cdktfprovidernewrelicdatanewrelicalertpolicyconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the alert policy in New Relic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/alert_policy#name DataNewrelicAlertPolicy#name}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicyConfig.property.accountId" id="cdktfprovidernewrelicdatanewrelicalertpolicyconfigpropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The New Relic account ID to operate on.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/alert_policy#account_id DataNewrelicAlertPolicy#account_id}

---

##### `incidentPreference`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicyConfig.property.incidentPreference" id="cdktfprovidernewrelicdatanewrelicalertpolicyconfigpropertyincidentpreference"></a>

```typescript
public readonly incidentPreference: string;
```

- *Type:* `string`

The rollup strategy for the policy. Options include: `PER_POLICY`, `PER_CONDITION`, or `PER_CONDITION_AND_TARGET`. The default is `PER_POLICY`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/alert_policy#incident_preference DataNewrelicAlertPolicy#incident_preference}

---

### DataNewrelicApplicationConfig <a name="@cdktf/provider-newrelic.DataNewrelicApplicationConfig" id="cdktfprovidernewrelicdatanewrelicapplicationconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DataNewrelicApplicationConfig } from '@cdktf/provider-newrelic'

const dataNewrelicApplicationConfig: DataNewrelicApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidernewrelicdatanewrelicapplicationconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidernewrelicdatanewrelicapplicationconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidernewrelicdatanewrelicapplicationconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidernewrelicdatanewrelicapplicationconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`name`](#cdktfprovidernewrelicdatanewrelicapplicationconfigpropertyname)<span title="Required">*</span> | `string` | The name of the application in New Relic. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicApplicationConfig.property.count" id="cdktfprovidernewrelicdatanewrelicapplicationconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicApplicationConfig.property.dependsOn" id="cdktfprovidernewrelicdatanewrelicapplicationconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicApplicationConfig.property.lifecycle" id="cdktfprovidernewrelicdatanewrelicapplicationconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicApplicationConfig.property.provider" id="cdktfprovidernewrelicdatanewrelicapplicationconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicApplicationConfig.property.name" id="cdktfprovidernewrelicdatanewrelicapplicationconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the application in New Relic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/application#name DataNewrelicApplication#name}

---

### DataNewrelicEntityConfig <a name="@cdktf/provider-newrelic.DataNewrelicEntityConfig" id="cdktfprovidernewrelicdatanewrelicentityconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DataNewrelicEntityConfig } from '@cdktf/provider-newrelic'

const dataNewrelicEntityConfig: DataNewrelicEntityConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidernewrelicdatanewrelicentityconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidernewrelicdatanewrelicentityconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidernewrelicdatanewrelicentityconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidernewrelicdatanewrelicentityconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`name`](#cdktfprovidernewrelicdatanewrelicentityconfigpropertyname)<span title="Required">*</span> | `string` | The name of the entity in New Relic One. |
| [`domain`](#cdktfprovidernewrelicdatanewrelicentityconfigpropertydomain) | `string` | The entity's domain. |
| [`ignoreCase`](#cdktfprovidernewrelicdatanewrelicentityconfigpropertyignorecase) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Ignore case when searching the entity name. |
| [`tag`](#cdktfprovidernewrelicdatanewrelicentityconfigpropertytag) | [`@cdktf/provider-newrelic.DataNewrelicEntityTag`](#@cdktf/provider-newrelic.DataNewrelicEntityTag) | tag block. |
| [`type`](#cdktfprovidernewrelicdatanewrelicentityconfigpropertytype) | `string` | The entity's type. Valid values are APPLICATION, DASHBOARD, HOST, MONITOR, and WORKLOAD. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityConfig.property.count" id="cdktfprovidernewrelicdatanewrelicentityconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityConfig.property.dependsOn" id="cdktfprovidernewrelicdatanewrelicentityconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityConfig.property.lifecycle" id="cdktfprovidernewrelicdatanewrelicentityconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityConfig.property.provider" id="cdktfprovidernewrelicdatanewrelicentityconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityConfig.property.name" id="cdktfprovidernewrelicdatanewrelicentityconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the entity in New Relic One.

The first entity matching this name for the given search parameters will be returned.  Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/entity#name DataNewrelicEntity#name}

---

##### `domain`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityConfig.property.domain" id="cdktfprovidernewrelicdatanewrelicentityconfigpropertydomain"></a>

```typescript
public readonly domain: string;
```

- *Type:* `string`

The entity's domain.

Valid values are APM, BROWSER, INFRA, MOBILE, SYNTH, and VIZ. If not specified, all domains are searched.  Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/entity#domain DataNewrelicEntity#domain}

---

##### `ignoreCase`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityConfig.property.ignoreCase" id="cdktfprovidernewrelicdatanewrelicentityconfigpropertyignorecase"></a>

```typescript
public readonly ignoreCase: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Ignore case when searching the entity name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/entity#ignore_case DataNewrelicEntity#ignore_case}

---

##### `tag`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityConfig.property.tag" id="cdktfprovidernewrelicdatanewrelicentityconfigpropertytag"></a>

```typescript
public readonly tag: DataNewrelicEntityTag;
```

- *Type:* [`@cdktf/provider-newrelic.DataNewrelicEntityTag`](#@cdktf/provider-newrelic.DataNewrelicEntityTag)

tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/entity#tag DataNewrelicEntity#tag}

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityConfig.property.type" id="cdktfprovidernewrelicdatanewrelicentityconfigpropertytype"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

The entity's type. Valid values are APPLICATION, DASHBOARD, HOST, MONITOR, and WORKLOAD.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/entity#type DataNewrelicEntity#type}

---

### DataNewrelicEntityTag <a name="@cdktf/provider-newrelic.DataNewrelicEntityTag" id="cdktfprovidernewrelicdatanewrelicentitytag"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DataNewrelicEntityTag } from '@cdktf/provider-newrelic'

const dataNewrelicEntityTag: DataNewrelicEntityTag = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`key`](#cdktfprovidernewrelicdatanewrelicentitytagpropertykey)<span title="Required">*</span> | `string` | The tag key. |
| [`value`](#cdktfprovidernewrelicdatanewrelicentitytagpropertyvalue)<span title="Required">*</span> | `string` | The tag value. |

---

##### `key`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityTag.property.key" id="cdktfprovidernewrelicdatanewrelicentitytagpropertykey"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

The tag key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/entity#key DataNewrelicEntity#key}

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityTag.property.value" id="cdktfprovidernewrelicdatanewrelicentitytagpropertyvalue"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

The tag value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/entity#value DataNewrelicEntity#value}

---

### DataNewrelicKeyTransactionConfig <a name="@cdktf/provider-newrelic.DataNewrelicKeyTransactionConfig" id="cdktfprovidernewrelicdatanewrelickeytransactionconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DataNewrelicKeyTransactionConfig } from '@cdktf/provider-newrelic'

const dataNewrelicKeyTransactionConfig: DataNewrelicKeyTransactionConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidernewrelicdatanewrelickeytransactionconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidernewrelicdatanewrelickeytransactionconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidernewrelicdatanewrelickeytransactionconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidernewrelicdatanewrelickeytransactionconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`name`](#cdktfprovidernewrelicdatanewrelickeytransactionconfigpropertyname)<span title="Required">*</span> | `string` | The name of the key transaction in New Relic. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicKeyTransactionConfig.property.count" id="cdktfprovidernewrelicdatanewrelickeytransactionconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicKeyTransactionConfig.property.dependsOn" id="cdktfprovidernewrelicdatanewrelickeytransactionconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicKeyTransactionConfig.property.lifecycle" id="cdktfprovidernewrelicdatanewrelickeytransactionconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicKeyTransactionConfig.property.provider" id="cdktfprovidernewrelicdatanewrelickeytransactionconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicKeyTransactionConfig.property.name" id="cdktfprovidernewrelicdatanewrelickeytransactionconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the key transaction in New Relic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/key_transaction#name DataNewrelicKeyTransaction#name}

---

### DataNewrelicPluginComponentConfig <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponentConfig" id="cdktfprovidernewrelicdatanewrelicplugincomponentconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DataNewrelicPluginComponentConfig } from '@cdktf/provider-newrelic'

const dataNewrelicPluginComponentConfig: DataNewrelicPluginComponentConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidernewrelicdatanewrelicplugincomponentconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidernewrelicdatanewrelicplugincomponentconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidernewrelicdatanewrelicplugincomponentconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidernewrelicdatanewrelicplugincomponentconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`name`](#cdktfprovidernewrelicdatanewrelicplugincomponentconfigpropertyname)<span title="Required">*</span> | `string` | The name of the plugin component. |
| [`pluginId`](#cdktfprovidernewrelicdatanewrelicplugincomponentconfigpropertypluginid)<span title="Required">*</span> | `number` | The ID of the plugin instance this component belongs to. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponentConfig.property.count" id="cdktfprovidernewrelicdatanewrelicplugincomponentconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponentConfig.property.dependsOn" id="cdktfprovidernewrelicdatanewrelicplugincomponentconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponentConfig.property.lifecycle" id="cdktfprovidernewrelicdatanewrelicplugincomponentconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponentConfig.property.provider" id="cdktfprovidernewrelicdatanewrelicplugincomponentconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponentConfig.property.name" id="cdktfprovidernewrelicdatanewrelicplugincomponentconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the plugin component.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/plugin_component#name DataNewrelicPluginComponent#name}

---

##### `pluginId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponentConfig.property.pluginId" id="cdktfprovidernewrelicdatanewrelicplugincomponentconfigpropertypluginid"></a>

```typescript
public readonly pluginId: number;
```

- *Type:* `number`

The ID of the plugin instance this component belongs to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/plugin_component#plugin_id DataNewrelicPluginComponent#plugin_id}

---

### DataNewrelicPluginConfig <a name="@cdktf/provider-newrelic.DataNewrelicPluginConfig" id="cdktfprovidernewrelicdatanewrelicpluginconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DataNewrelicPluginConfig } from '@cdktf/provider-newrelic'

const dataNewrelicPluginConfig: DataNewrelicPluginConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidernewrelicdatanewrelicpluginconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidernewrelicdatanewrelicpluginconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidernewrelicdatanewrelicpluginconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidernewrelicdatanewrelicpluginconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`guid`](#cdktfprovidernewrelicdatanewrelicpluginconfigpropertyguid)<span title="Required">*</span> | `string` | The GUID of the plugin in New Relic. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginConfig.property.count" id="cdktfprovidernewrelicdatanewrelicpluginconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginConfig.property.dependsOn" id="cdktfprovidernewrelicdatanewrelicpluginconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginConfig.property.lifecycle" id="cdktfprovidernewrelicdatanewrelicpluginconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginConfig.property.provider" id="cdktfprovidernewrelicdatanewrelicpluginconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `guid`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginConfig.property.guid" id="cdktfprovidernewrelicdatanewrelicpluginconfigpropertyguid"></a>

```typescript
public readonly guid: string;
```

- *Type:* `string`

The GUID of the plugin in New Relic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/plugin#guid DataNewrelicPlugin#guid}

---

### DataNewrelicSyntheticsMonitorConfig <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorConfig" id="cdktfprovidernewrelicdatanewrelicsyntheticsmonitorconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DataNewrelicSyntheticsMonitorConfig } from '@cdktf/provider-newrelic'

const dataNewrelicSyntheticsMonitorConfig: DataNewrelicSyntheticsMonitorConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidernewrelicdatanewrelicsyntheticsmonitorconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidernewrelicdatanewrelicsyntheticsmonitorconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidernewrelicdatanewrelicsyntheticsmonitorconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidernewrelicdatanewrelicsyntheticsmonitorconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`name`](#cdktfprovidernewrelicdatanewrelicsyntheticsmonitorconfigpropertyname)<span title="Required">*</span> | `string` | The name of the synthetics monitor in New Relic. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorConfig.property.count" id="cdktfprovidernewrelicdatanewrelicsyntheticsmonitorconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorConfig.property.dependsOn" id="cdktfprovidernewrelicdatanewrelicsyntheticsmonitorconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorConfig.property.lifecycle" id="cdktfprovidernewrelicdatanewrelicsyntheticsmonitorconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorConfig.property.provider" id="cdktfprovidernewrelicdatanewrelicsyntheticsmonitorconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorConfig.property.name" id="cdktfprovidernewrelicdatanewrelicsyntheticsmonitorconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the synthetics monitor in New Relic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/synthetics_monitor#name DataNewrelicSyntheticsMonitor#name}

---

### DataNewrelicSyntheticsMonitorLocationConfig <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocationConfig" id="cdktfprovidernewrelicdatanewrelicsyntheticsmonitorlocationconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DataNewrelicSyntheticsMonitorLocationConfig } from '@cdktf/provider-newrelic'

const dataNewrelicSyntheticsMonitorLocationConfig: DataNewrelicSyntheticsMonitorLocationConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidernewrelicdatanewrelicsyntheticsmonitorlocationconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidernewrelicdatanewrelicsyntheticsmonitorlocationconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidernewrelicdatanewrelicsyntheticsmonitorlocationconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidernewrelicdatanewrelicsyntheticsmonitorlocationconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`label`](#cdktfprovidernewrelicdatanewrelicsyntheticsmonitorlocationconfigpropertylabel)<span title="Required">*</span> | `string` | The label of the Synthetics monitor location. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocationConfig.property.count" id="cdktfprovidernewrelicdatanewrelicsyntheticsmonitorlocationconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocationConfig.property.dependsOn" id="cdktfprovidernewrelicdatanewrelicsyntheticsmonitorlocationconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocationConfig.property.lifecycle" id="cdktfprovidernewrelicdatanewrelicsyntheticsmonitorlocationconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocationConfig.property.provider" id="cdktfprovidernewrelicdatanewrelicsyntheticsmonitorlocationconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `label`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocationConfig.property.label" id="cdktfprovidernewrelicdatanewrelicsyntheticsmonitorlocationconfigpropertylabel"></a>

```typescript
public readonly label: string;
```

- *Type:* `string`

The label of the Synthetics monitor location.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/synthetics_monitor_location#label DataNewrelicSyntheticsMonitorLocation#label}

---

### DataNewrelicSyntheticsSecureCredentialConfig <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredentialConfig" id="cdktfprovidernewrelicdatanewrelicsyntheticssecurecredentialconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DataNewrelicSyntheticsSecureCredentialConfig } from '@cdktf/provider-newrelic'

const dataNewrelicSyntheticsSecureCredentialConfig: DataNewrelicSyntheticsSecureCredentialConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidernewrelicdatanewrelicsyntheticssecurecredentialconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidernewrelicdatanewrelicsyntheticssecurecredentialconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidernewrelicdatanewrelicsyntheticssecurecredentialconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidernewrelicdatanewrelicsyntheticssecurecredentialconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`key`](#cdktfprovidernewrelicdatanewrelicsyntheticssecurecredentialconfigpropertykey)<span title="Required">*</span> | `string` | The secure credential's key name. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredentialConfig.property.count" id="cdktfprovidernewrelicdatanewrelicsyntheticssecurecredentialconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredentialConfig.property.dependsOn" id="cdktfprovidernewrelicdatanewrelicsyntheticssecurecredentialconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredentialConfig.property.lifecycle" id="cdktfprovidernewrelicdatanewrelicsyntheticssecurecredentialconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredentialConfig.property.provider" id="cdktfprovidernewrelicdatanewrelicsyntheticssecurecredentialconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `key`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredentialConfig.property.key" id="cdktfprovidernewrelicdatanewrelicsyntheticssecurecredentialconfigpropertykey"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

The secure credential's key name.

Regardless of the case used in the configuration, the provider will provide an upcased key to the underlying API.  Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/synthetics_secure_credential#key DataNewrelicSyntheticsSecureCredential#key}

---

### EntityTagsConfig <a name="@cdktf/provider-newrelic.EntityTagsConfig" id="cdktfprovidernewrelicentitytagsconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { EntityTagsConfig } from '@cdktf/provider-newrelic'

const entityTagsConfig: EntityTagsConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidernewrelicentitytagsconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidernewrelicentitytagsconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidernewrelicentitytagsconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidernewrelicentitytagsconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`guid`](#cdktfprovidernewrelicentitytagsconfigpropertyguid)<span title="Required">*</span> | `string` | The guid of the entity to tag. |
| [`tag`](#cdktfprovidernewrelicentitytagsconfigpropertytag)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.EntityTagsTag`](#@cdktf/provider-newrelic.EntityTagsTag)[] | tag block. |
| [`timeouts`](#cdktfprovidernewrelicentitytagsconfigpropertytimeouts) | [`@cdktf/provider-newrelic.EntityTagsTimeouts`](#@cdktf/provider-newrelic.EntityTagsTimeouts) | timeouts block. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EntityTagsConfig.property.count" id="cdktfprovidernewrelicentitytagsconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EntityTagsConfig.property.dependsOn" id="cdktfprovidernewrelicentitytagsconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EntityTagsConfig.property.lifecycle" id="cdktfprovidernewrelicentitytagsconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EntityTagsConfig.property.provider" id="cdktfprovidernewrelicentitytagsconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `guid`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EntityTagsConfig.property.guid" id="cdktfprovidernewrelicentitytagsconfigpropertyguid"></a>

```typescript
public readonly guid: string;
```

- *Type:* `string`

The guid of the entity to tag.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/entity_tags#guid EntityTags#guid}

---

##### `tag`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EntityTagsConfig.property.tag" id="cdktfprovidernewrelicentitytagsconfigpropertytag"></a>

```typescript
public readonly tag: IResolvable | EntityTagsTag[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.EntityTagsTag`](#@cdktf/provider-newrelic.EntityTagsTag)[]

tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/entity_tags#tag EntityTags#tag}

---

##### `timeouts`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EntityTagsConfig.property.timeouts" id="cdktfprovidernewrelicentitytagsconfigpropertytimeouts"></a>

```typescript
public readonly timeouts: EntityTagsTimeouts;
```

- *Type:* [`@cdktf/provider-newrelic.EntityTagsTimeouts`](#@cdktf/provider-newrelic.EntityTagsTimeouts)

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/entity_tags#timeouts EntityTags#timeouts}

---

### EntityTagsTag <a name="@cdktf/provider-newrelic.EntityTagsTag" id="cdktfprovidernewrelicentitytagstag"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { EntityTagsTag } from '@cdktf/provider-newrelic'

const entityTagsTag: EntityTagsTag = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`key`](#cdktfprovidernewrelicentitytagstagpropertykey)<span title="Required">*</span> | `string` | The tag key. |
| [`values`](#cdktfprovidernewrelicentitytagstagpropertyvalues)<span title="Required">*</span> | `string`[] | The tag values. |

---

##### `key`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EntityTagsTag.property.key" id="cdktfprovidernewrelicentitytagstagpropertykey"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

The tag key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/entity_tags#key EntityTags#key}

---

##### `values`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EntityTagsTag.property.values" id="cdktfprovidernewrelicentitytagstagpropertyvalues"></a>

```typescript
public readonly values: string[];
```

- *Type:* `string`[]

The tag values.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/entity_tags#values EntityTags#values}

---

### EntityTagsTimeouts <a name="@cdktf/provider-newrelic.EntityTagsTimeouts" id="cdktfprovidernewrelicentitytagstimeouts"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { EntityTagsTimeouts } from '@cdktf/provider-newrelic'

const entityTagsTimeouts: EntityTagsTimeouts = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`create`](#cdktfprovidernewrelicentitytagstimeoutspropertycreate) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/entity_tags#create EntityTags#create}. |

---

##### `create`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EntityTagsTimeouts.property.create" id="cdktfprovidernewrelicentitytagstimeoutspropertycreate"></a>

```typescript
public readonly create: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/entity_tags#create EntityTags#create}.

---

### EventsToMetricsRuleConfig <a name="@cdktf/provider-newrelic.EventsToMetricsRuleConfig" id="cdktfprovidernewreliceventstometricsruleconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { EventsToMetricsRuleConfig } from '@cdktf/provider-newrelic'

const eventsToMetricsRuleConfig: EventsToMetricsRuleConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidernewreliceventstometricsruleconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidernewreliceventstometricsruleconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidernewreliceventstometricsruleconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidernewreliceventstometricsruleconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`name`](#cdktfprovidernewreliceventstometricsruleconfigpropertyname)<span title="Required">*</span> | `string` | The name of the rule. This must be unique within an account. |
| [`nrql`](#cdktfprovidernewreliceventstometricsruleconfigpropertynrql)<span title="Required">*</span> | `string` | Explains how to create metrics from events. |
| [`accountId`](#cdktfprovidernewreliceventstometricsruleconfigpropertyaccountid) | `number` | Account with the event and where the metrics will be put. |
| [`description`](#cdktfprovidernewreliceventstometricsruleconfigpropertydescription) | `string` | Provides additional information about the rule. |
| [`enabled`](#cdktfprovidernewreliceventstometricsruleconfigpropertyenabled) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | True means this rule is enabled. False means the rule is currently not creating metrics. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRuleConfig.property.count" id="cdktfprovidernewreliceventstometricsruleconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRuleConfig.property.dependsOn" id="cdktfprovidernewreliceventstometricsruleconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRuleConfig.property.lifecycle" id="cdktfprovidernewreliceventstometricsruleconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRuleConfig.property.provider" id="cdktfprovidernewreliceventstometricsruleconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRuleConfig.property.name" id="cdktfprovidernewreliceventstometricsruleconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the rule. This must be unique within an account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/events_to_metrics_rule#name EventsToMetricsRule#name}

---

##### `nrql`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRuleConfig.property.nrql" id="cdktfprovidernewreliceventstometricsruleconfigpropertynrql"></a>

```typescript
public readonly nrql: string;
```

- *Type:* `string`

Explains how to create metrics from events.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/events_to_metrics_rule#nrql EventsToMetricsRule#nrql}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRuleConfig.property.accountId" id="cdktfprovidernewreliceventstometricsruleconfigpropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

Account with the event and where the metrics will be put.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/events_to_metrics_rule#account_id EventsToMetricsRule#account_id}

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRuleConfig.property.description" id="cdktfprovidernewreliceventstometricsruleconfigpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

Provides additional information about the rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/events_to_metrics_rule#description EventsToMetricsRule#description}

---

##### `enabled`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRuleConfig.property.enabled" id="cdktfprovidernewreliceventstometricsruleconfigpropertyenabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

True means this rule is enabled. False means the rule is currently not creating metrics.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/events_to_metrics_rule#enabled EventsToMetricsRule#enabled}

---

### InfraAlertConditionConfig <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig" id="cdktfprovidernewrelicinfraalertconditionconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { InfraAlertConditionConfig } from '@cdktf/provider-newrelic'

const infraAlertConditionConfig: InfraAlertConditionConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidernewrelicinfraalertconditionconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidernewrelicinfraalertconditionconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidernewrelicinfraalertconditionconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidernewrelicinfraalertconditionconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`name`](#cdktfprovidernewrelicinfraalertconditionconfigpropertyname)<span title="Required">*</span> | `string` | The Infrastructure alert condition's name. |
| [`policyId`](#cdktfprovidernewrelicinfraalertconditionconfigpropertypolicyid)<span title="Required">*</span> | `number` | The ID of the alert policy where this condition should be used. |
| [`type`](#cdktfprovidernewrelicinfraalertconditionconfigpropertytype)<span title="Required">*</span> | `string` | The type of Infrastructure alert condition. Valid values are infra_process_running, infra_metric, and infra_host_not_reporting. |
| [`comparison`](#cdktfprovidernewrelicinfraalertconditionconfigpropertycomparison) | `string` | The operator used to evaluate the threshold value. |
| [`critical`](#cdktfprovidernewrelicinfraalertconditionconfigpropertycritical) | [`@cdktf/provider-newrelic.InfraAlertConditionCritical`](#@cdktf/provider-newrelic.InfraAlertConditionCritical) | critical block. |
| [`description`](#cdktfprovidernewrelicinfraalertconditionconfigpropertydescription) | `string` | The description of the Infrastructure alert condition. |
| [`enabled`](#cdktfprovidernewrelicinfraalertconditionconfigpropertyenabled) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Whether the condition is turned on or off. Valid values are true and false. Defaults to true. |
| [`event`](#cdktfprovidernewrelicinfraalertconditionconfigpropertyevent) | `string` | The metric event; for example, SystemSample or StorageSample. Supported by the infra_metric condition type. |
| [`integrationProvider`](#cdktfprovidernewrelicinfraalertconditionconfigpropertyintegrationprovider) | `string` | For alerts on integrations, use this instead of event. Supported by the infra_metric condition type. |
| [`processWhere`](#cdktfprovidernewrelicinfraalertconditionconfigpropertyprocesswhere) | `string` | Any filters applied to processes; for example: commandName = 'java'. Supported by the infra_process_running condition type. |
| [`runbookUrl`](#cdktfprovidernewrelicinfraalertconditionconfigpropertyrunbookurl) | `string` | Runbook URL to display in notifications. |
| [`select`](#cdktfprovidernewrelicinfraalertconditionconfigpropertyselect) | `string` | The attribute name to identify the metric being targeted; |
| [`violationCloseTimer`](#cdktfprovidernewrelicinfraalertconditionconfigpropertyviolationclosetimer) | `number` | Determines how much time, in hours, will pass before a violation is automatically closed. |
| [`warning`](#cdktfprovidernewrelicinfraalertconditionconfigpropertywarning) | [`@cdktf/provider-newrelic.InfraAlertConditionWarning`](#@cdktf/provider-newrelic.InfraAlertConditionWarning) | warning block. |
| [`where`](#cdktfprovidernewrelicinfraalertconditionconfigpropertywhere) | `string` | If applicable, this identifies any Infrastructure host filters used; for example: hostname LIKE '%cassandra%'. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.count" id="cdktfprovidernewrelicinfraalertconditionconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.dependsOn" id="cdktfprovidernewrelicinfraalertconditionconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.lifecycle" id="cdktfprovidernewrelicinfraalertconditionconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.provider" id="cdktfprovidernewrelicinfraalertconditionconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.name" id="cdktfprovidernewrelicinfraalertconditionconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The Infrastructure alert condition's name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition#name InfraAlertCondition#name}

---

##### `policyId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.policyId" id="cdktfprovidernewrelicinfraalertconditionconfigpropertypolicyid"></a>

```typescript
public readonly policyId: number;
```

- *Type:* `number`

The ID of the alert policy where this condition should be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition#policy_id InfraAlertCondition#policy_id}

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.type" id="cdktfprovidernewrelicinfraalertconditionconfigpropertytype"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

The type of Infrastructure alert condition. Valid values are infra_process_running, infra_metric, and infra_host_not_reporting.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition#type InfraAlertCondition#type}

---

##### `comparison`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.comparison" id="cdktfprovidernewrelicinfraalertconditionconfigpropertycomparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* `string`

The operator used to evaluate the threshold value.

Valid values are above, below, and equal. Supported by the infra_metric and infra_process_running condition types.  Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition#comparison InfraAlertCondition#comparison}

---

##### `critical`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.critical" id="cdktfprovidernewrelicinfraalertconditionconfigpropertycritical"></a>

```typescript
public readonly critical: InfraAlertConditionCritical;
```

- *Type:* [`@cdktf/provider-newrelic.InfraAlertConditionCritical`](#@cdktf/provider-newrelic.InfraAlertConditionCritical)

critical block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition#critical InfraAlertCondition#critical}

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.description" id="cdktfprovidernewrelicinfraalertconditionconfigpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

The description of the Infrastructure alert condition.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition#description InfraAlertCondition#description}

---

##### `enabled`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.enabled" id="cdktfprovidernewrelicinfraalertconditionconfigpropertyenabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether the condition is turned on or off. Valid values are true and false. Defaults to true.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition#enabled InfraAlertCondition#enabled}

---

##### `event`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.event" id="cdktfprovidernewrelicinfraalertconditionconfigpropertyevent"></a>

```typescript
public readonly event: string;
```

- *Type:* `string`

The metric event; for example, SystemSample or StorageSample. Supported by the infra_metric condition type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition#event InfraAlertCondition#event}

---

##### `integrationProvider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.integrationProvider" id="cdktfprovidernewrelicinfraalertconditionconfigpropertyintegrationprovider"></a>

```typescript
public readonly integrationProvider: string;
```

- *Type:* `string`

For alerts on integrations, use this instead of event. Supported by the infra_metric condition type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition#integration_provider InfraAlertCondition#integration_provider}

---

##### `processWhere`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.processWhere" id="cdktfprovidernewrelicinfraalertconditionconfigpropertyprocesswhere"></a>

```typescript
public readonly processWhere: string;
```

- *Type:* `string`

Any filters applied to processes; for example: commandName = 'java'. Supported by the infra_process_running condition type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition#process_where InfraAlertCondition#process_where}

---

##### `runbookUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.runbookUrl" id="cdktfprovidernewrelicinfraalertconditionconfigpropertyrunbookurl"></a>

```typescript
public readonly runbookUrl: string;
```

- *Type:* `string`

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition#runbook_url InfraAlertCondition#runbook_url}

---

##### `select`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.select" id="cdktfprovidernewrelicinfraalertconditionconfigpropertyselect"></a>

```typescript
public readonly select: string;
```

- *Type:* `string`

The attribute name to identify the metric being targeted;

for example, cpuPercent, diskFreePercent, or memoryResidentSizeBytes. The underlying API will automatically populate this value for Infrastructure integrations (for example diskFreePercent), so make sure to explicitly include this value to avoid diff issues. Supported by the infra_metric condition type.  Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition#select InfraAlertCondition#select}

---

##### `violationCloseTimer`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.violationCloseTimer" id="cdktfprovidernewrelicinfraalertconditionconfigpropertyviolationclosetimer"></a>

```typescript
public readonly violationCloseTimer: number;
```

- *Type:* `number`

Determines how much time, in hours, will pass before a violation is automatically closed.

Valid values are 1, 2, 4, 8, 12, 24, 48, or 72  Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition#violation_close_timer InfraAlertCondition#violation_close_timer}

---

##### `warning`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.warning" id="cdktfprovidernewrelicinfraalertconditionconfigpropertywarning"></a>

```typescript
public readonly warning: InfraAlertConditionWarning;
```

- *Type:* [`@cdktf/provider-newrelic.InfraAlertConditionWarning`](#@cdktf/provider-newrelic.InfraAlertConditionWarning)

warning block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition#warning InfraAlertCondition#warning}

---

##### `where`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.where" id="cdktfprovidernewrelicinfraalertconditionconfigpropertywhere"></a>

```typescript
public readonly where: string;
```

- *Type:* `string`

If applicable, this identifies any Infrastructure host filters used; for example: hostname LIKE '%cassandra%'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition#where InfraAlertCondition#where}

---

### InfraAlertConditionCritical <a name="@cdktf/provider-newrelic.InfraAlertConditionCritical" id="cdktfprovidernewrelicinfraalertconditioncritical"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { InfraAlertConditionCritical } from '@cdktf/provider-newrelic'

const infraAlertConditionCritical: InfraAlertConditionCritical = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`duration`](#cdktfprovidernewrelicinfraalertconditioncriticalpropertyduration)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition#duration InfraAlertCondition#duration}. |
| [`timeFunction`](#cdktfprovidernewrelicinfraalertconditioncriticalpropertytimefunction) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition#time_function InfraAlertCondition#time_function}. |
| [`value`](#cdktfprovidernewrelicinfraalertconditioncriticalpropertyvalue) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition#value InfraAlertCondition#value}. |

---

##### `duration`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionCritical.property.duration" id="cdktfprovidernewrelicinfraalertconditioncriticalpropertyduration"></a>

```typescript
public readonly duration: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition#duration InfraAlertCondition#duration}.

---

##### `timeFunction`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionCritical.property.timeFunction" id="cdktfprovidernewrelicinfraalertconditioncriticalpropertytimefunction"></a>

```typescript
public readonly timeFunction: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition#time_function InfraAlertCondition#time_function}.

---

##### `value`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionCritical.property.value" id="cdktfprovidernewrelicinfraalertconditioncriticalpropertyvalue"></a>

```typescript
public readonly value: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition#value InfraAlertCondition#value}.

---

### InfraAlertConditionWarning <a name="@cdktf/provider-newrelic.InfraAlertConditionWarning" id="cdktfprovidernewrelicinfraalertconditionwarning"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { InfraAlertConditionWarning } from '@cdktf/provider-newrelic'

const infraAlertConditionWarning: InfraAlertConditionWarning = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`duration`](#cdktfprovidernewrelicinfraalertconditionwarningpropertyduration)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition#duration InfraAlertCondition#duration}. |
| [`timeFunction`](#cdktfprovidernewrelicinfraalertconditionwarningpropertytimefunction) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition#time_function InfraAlertCondition#time_function}. |
| [`value`](#cdktfprovidernewrelicinfraalertconditionwarningpropertyvalue) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition#value InfraAlertCondition#value}. |

---

##### `duration`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionWarning.property.duration" id="cdktfprovidernewrelicinfraalertconditionwarningpropertyduration"></a>

```typescript
public readonly duration: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition#duration InfraAlertCondition#duration}.

---

##### `timeFunction`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionWarning.property.timeFunction" id="cdktfprovidernewrelicinfraalertconditionwarningpropertytimefunction"></a>

```typescript
public readonly timeFunction: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition#time_function InfraAlertCondition#time_function}.

---

##### `value`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionWarning.property.value" id="cdktfprovidernewrelicinfraalertconditionwarningpropertyvalue"></a>

```typescript
public readonly value: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition#value InfraAlertCondition#value}.

---

### InsightsEventConfig <a name="@cdktf/provider-newrelic.InsightsEventConfig" id="cdktfprovidernewrelicinsightseventconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { InsightsEventConfig } from '@cdktf/provider-newrelic'

const insightsEventConfig: InsightsEventConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidernewrelicinsightseventconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidernewrelicinsightseventconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidernewrelicinsightseventconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidernewrelicinsightseventconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`event`](#cdktfprovidernewrelicinsightseventconfigpropertyevent)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.InsightsEventEvent`](#@cdktf/provider-newrelic.InsightsEventEvent)[] | event block. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InsightsEventConfig.property.count" id="cdktfprovidernewrelicinsightseventconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InsightsEventConfig.property.dependsOn" id="cdktfprovidernewrelicinsightseventconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InsightsEventConfig.property.lifecycle" id="cdktfprovidernewrelicinsightseventconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InsightsEventConfig.property.provider" id="cdktfprovidernewrelicinsightseventconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `event`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InsightsEventConfig.property.event" id="cdktfprovidernewrelicinsightseventconfigpropertyevent"></a>

```typescript
public readonly event: IResolvable | InsightsEventEvent[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.InsightsEventEvent`](#@cdktf/provider-newrelic.InsightsEventEvent)[]

event block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/insights_event#event InsightsEvent#event}

---

### InsightsEventEvent <a name="@cdktf/provider-newrelic.InsightsEventEvent" id="cdktfprovidernewrelicinsightseventevent"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { InsightsEventEvent } from '@cdktf/provider-newrelic'

const insightsEventEvent: InsightsEventEvent = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`attribute`](#cdktfprovidernewrelicinsightseventeventpropertyattribute)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.InsightsEventEventAttribute`](#@cdktf/provider-newrelic.InsightsEventEventAttribute)[] | attribute block. |
| [`type`](#cdktfprovidernewrelicinsightseventeventpropertytype)<span title="Required">*</span> | `string` | The event's name. Can be a combination of alphanumeric characters, underscores, and colons. |
| [`timestamp`](#cdktfprovidernewrelicinsightseventeventpropertytimestamp) | `number` | Must be a Unix epoch timestamp. You can define timestamps either in seconds or in milliseconds. |

---

##### `attribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InsightsEventEvent.property.attribute" id="cdktfprovidernewrelicinsightseventeventpropertyattribute"></a>

```typescript
public readonly attribute: IResolvable | InsightsEventEventAttribute[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.InsightsEventEventAttribute`](#@cdktf/provider-newrelic.InsightsEventEventAttribute)[]

attribute block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/insights_event#attribute InsightsEvent#attribute}

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InsightsEventEvent.property.type" id="cdktfprovidernewrelicinsightseventeventpropertytype"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

The event's name. Can be a combination of alphanumeric characters, underscores, and colons.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/insights_event#type InsightsEvent#type}

---

##### `timestamp`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InsightsEventEvent.property.timestamp" id="cdktfprovidernewrelicinsightseventeventpropertytimestamp"></a>

```typescript
public readonly timestamp: number;
```

- *Type:* `number`

Must be a Unix epoch timestamp. You can define timestamps either in seconds or in milliseconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/insights_event#timestamp InsightsEvent#timestamp}

---

### InsightsEventEventAttribute <a name="@cdktf/provider-newrelic.InsightsEventEventAttribute" id="cdktfprovidernewrelicinsightseventeventattribute"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { InsightsEventEventAttribute } from '@cdktf/provider-newrelic'

const insightsEventEventAttribute: InsightsEventEventAttribute = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`key`](#cdktfprovidernewrelicinsightseventeventattributepropertykey)<span title="Required">*</span> | `string` | The name of the attribute. |
| [`value`](#cdktfprovidernewrelicinsightseventeventattributepropertyvalue)<span title="Required">*</span> | `string` | The value of the attribute. |
| [`type`](#cdktfprovidernewrelicinsightseventeventattributepropertytype) | `string` | Specify the type for the attribute value. |

---

##### `key`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InsightsEventEventAttribute.property.key" id="cdktfprovidernewrelicinsightseventeventattributepropertykey"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

The name of the attribute.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/insights_event#key InsightsEvent#key}

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InsightsEventEventAttribute.property.value" id="cdktfprovidernewrelicinsightseventeventattributepropertyvalue"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

The value of the attribute.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/insights_event#value InsightsEvent#value}

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InsightsEventEventAttribute.property.type" id="cdktfprovidernewrelicinsightseventeventattributepropertytype"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

Specify the type for the attribute value.

This is useful when passing integer or float values to Insights. Allowed values are string, int, or float. Defaults to string.  Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/insights_event#type InsightsEvent#type}

---

### NewrelicProviderConfig <a name="@cdktf/provider-newrelic.NewrelicProviderConfig" id="cdktfprovidernewrelicnewrelicproviderconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { NewrelicProviderConfig } from '@cdktf/provider-newrelic'

const newrelicProviderConfig: NewrelicProviderConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`accountId`](#cdktfprovidernewrelicnewrelicproviderconfigpropertyaccountid)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#account_id NewrelicProvider#account_id}. |
| [`adminApiKey`](#cdktfprovidernewrelicnewrelicproviderconfigpropertyadminapikey) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#admin_api_key NewrelicProvider#admin_api_key}. |
| [`alias`](#cdktfprovidernewrelicnewrelicproviderconfigpropertyalias) | `string` | Alias name. |
| [`apiKey`](#cdktfprovidernewrelicnewrelicproviderconfigpropertyapikey) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#api_key NewrelicProvider#api_key}. |
| [`apiUrl`](#cdktfprovidernewrelicnewrelicproviderconfigpropertyapiurl) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#api_url NewrelicProvider#api_url}. |
| [`cacertFile`](#cdktfprovidernewrelicnewrelicproviderconfigpropertycacertfile) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#cacert_file NewrelicProvider#cacert_file}. |
| [`infrastructureApiUrl`](#cdktfprovidernewrelicnewrelicproviderconfigpropertyinfrastructureapiurl) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#infrastructure_api_url NewrelicProvider#infrastructure_api_url}. |
| [`insecureSkipVerify`](#cdktfprovidernewrelicnewrelicproviderconfigpropertyinsecureskipverify) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#insecure_skip_verify NewrelicProvider#insecure_skip_verify}. |
| [`insightsInsertKey`](#cdktfprovidernewrelicnewrelicproviderconfigpropertyinsightsinsertkey) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#insights_insert_key NewrelicProvider#insights_insert_key}. |
| [`insightsInsertUrl`](#cdktfprovidernewrelicnewrelicproviderconfigpropertyinsightsinserturl) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#insights_insert_url NewrelicProvider#insights_insert_url}. |
| [`insightsQueryUrl`](#cdktfprovidernewrelicnewrelicproviderconfigpropertyinsightsqueryurl) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#insights_query_url NewrelicProvider#insights_query_url}. |
| [`nerdgraphApiUrl`](#cdktfprovidernewrelicnewrelicproviderconfigpropertynerdgraphapiurl) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#nerdgraph_api_url NewrelicProvider#nerdgraph_api_url}. |
| [`region`](#cdktfprovidernewrelicnewrelicproviderconfigpropertyregion) | `string` | The data center for which your New Relic account is configured. Only one region per provider block is permitted. |
| [`syntheticsApiUrl`](#cdktfprovidernewrelicnewrelicproviderconfigpropertysyntheticsapiurl) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#synthetics_api_url NewrelicProvider#synthetics_api_url}. |

---

##### `accountId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NewrelicProviderConfig.property.accountId" id="cdktfprovidernewrelicnewrelicproviderconfigpropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#account_id NewrelicProvider#account_id}.

---

##### `adminApiKey`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProviderConfig.property.adminApiKey" id="cdktfprovidernewrelicnewrelicproviderconfigpropertyadminapikey"></a>

```typescript
public readonly adminApiKey: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#admin_api_key NewrelicProvider#admin_api_key}.

---

##### `alias`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProviderConfig.property.alias" id="cdktfprovidernewrelicnewrelicproviderconfigpropertyalias"></a>

```typescript
public readonly alias: string;
```

- *Type:* `string`

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#alias NewrelicProvider#alias}

---

##### `apiKey`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProviderConfig.property.apiKey" id="cdktfprovidernewrelicnewrelicproviderconfigpropertyapikey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#api_key NewrelicProvider#api_key}.

---

##### `apiUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProviderConfig.property.apiUrl" id="cdktfprovidernewrelicnewrelicproviderconfigpropertyapiurl"></a>

```typescript
public readonly apiUrl: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#api_url NewrelicProvider#api_url}.

---

##### `cacertFile`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProviderConfig.property.cacertFile" id="cdktfprovidernewrelicnewrelicproviderconfigpropertycacertfile"></a>

```typescript
public readonly cacertFile: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#cacert_file NewrelicProvider#cacert_file}.

---

##### `infrastructureApiUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProviderConfig.property.infrastructureApiUrl" id="cdktfprovidernewrelicnewrelicproviderconfigpropertyinfrastructureapiurl"></a>

```typescript
public readonly infrastructureApiUrl: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#infrastructure_api_url NewrelicProvider#infrastructure_api_url}.

---

##### `insecureSkipVerify`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProviderConfig.property.insecureSkipVerify" id="cdktfprovidernewrelicnewrelicproviderconfigpropertyinsecureskipverify"></a>

```typescript
public readonly insecureSkipVerify: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#insecure_skip_verify NewrelicProvider#insecure_skip_verify}.

---

##### `insightsInsertKey`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProviderConfig.property.insightsInsertKey" id="cdktfprovidernewrelicnewrelicproviderconfigpropertyinsightsinsertkey"></a>

```typescript
public readonly insightsInsertKey: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#insights_insert_key NewrelicProvider#insights_insert_key}.

---

##### `insightsInsertUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProviderConfig.property.insightsInsertUrl" id="cdktfprovidernewrelicnewrelicproviderconfigpropertyinsightsinserturl"></a>

```typescript
public readonly insightsInsertUrl: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#insights_insert_url NewrelicProvider#insights_insert_url}.

---

##### `insightsQueryUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProviderConfig.property.insightsQueryUrl" id="cdktfprovidernewrelicnewrelicproviderconfigpropertyinsightsqueryurl"></a>

```typescript
public readonly insightsQueryUrl: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#insights_query_url NewrelicProvider#insights_query_url}.

---

##### `nerdgraphApiUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProviderConfig.property.nerdgraphApiUrl" id="cdktfprovidernewrelicnewrelicproviderconfigpropertynerdgraphapiurl"></a>

```typescript
public readonly nerdgraphApiUrl: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#nerdgraph_api_url NewrelicProvider#nerdgraph_api_url}.

---

##### `region`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProviderConfig.property.region" id="cdktfprovidernewrelicnewrelicproviderconfigpropertyregion"></a>

```typescript
public readonly region: string;
```

- *Type:* `string`

The data center for which your New Relic account is configured. Only one region per provider block is permitted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#region NewrelicProvider#region}

---

##### `syntheticsApiUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProviderConfig.property.syntheticsApiUrl" id="cdktfprovidernewrelicnewrelicproviderconfigpropertysyntheticsapiurl"></a>

```typescript
public readonly syntheticsApiUrl: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#synthetics_api_url NewrelicProvider#synthetics_api_url}.

---

### NrqlAlertConditionConfig <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig" id="cdktfprovidernewrelicnrqlalertconditionconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { NrqlAlertConditionConfig } from '@cdktf/provider-newrelic'

const nrqlAlertConditionConfig: NrqlAlertConditionConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidernewrelicnrqlalertconditionconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidernewrelicnrqlalertconditionconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidernewrelicnrqlalertconditionconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidernewrelicnrqlalertconditionconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`name`](#cdktfprovidernewrelicnrqlalertconditionconfigpropertyname)<span title="Required">*</span> | `string` | The title of the condition. |
| [`nrql`](#cdktfprovidernewrelicnrqlalertconditionconfigpropertynrql)<span title="Required">*</span> | [`@cdktf/provider-newrelic.NrqlAlertConditionNrql`](#@cdktf/provider-newrelic.NrqlAlertConditionNrql) | nrql block. |
| [`policyId`](#cdktfprovidernewrelicnrqlalertconditionconfigpropertypolicyid)<span title="Required">*</span> | `number` | The ID of the policy where this condition should be used. |
| [`accountId`](#cdktfprovidernewrelicnrqlalertconditionconfigpropertyaccountid) | `number` | The New Relic account ID for managing your NRQL alert conditions. |
| [`aggregationDelay`](#cdktfprovidernewrelicnrqlalertconditionconfigpropertyaggregationdelay) | `number` | How long we wait for data that belongs in each aggregation window. |
| [`aggregationMethod`](#cdktfprovidernewrelicnrqlalertconditionconfigpropertyaggregationmethod) | `string` | The method that determines when we consider an aggregation window to be complete so that we can evaluate the signal for violations. |
| [`aggregationTimer`](#cdktfprovidernewrelicnrqlalertconditionconfigpropertyaggregationtimer) | `number` | How long we wait after each data point arrives to make sure we've processed the whole batch. |
| [`aggregationWindow`](#cdktfprovidernewrelicnrqlalertconditionconfigpropertyaggregationwindow) | `number` | The duration of the time window used to evaluate the NRQL query, in seconds. |
| [`baselineDirection`](#cdktfprovidernewrelicnrqlalertconditionconfigpropertybaselinedirection) | `string` | The baseline direction of a baseline NRQL alert condition. Valid values are: 'LOWER_ONLY', 'UPPER_AND_LOWER', 'UPPER_ONLY' (case insensitive). |
| [`closeViolationsOnExpiration`](#cdktfprovidernewrelicnrqlalertconditionconfigpropertycloseviolationsonexpiration) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Whether to close all open violations when the signal expires. |
| [`critical`](#cdktfprovidernewrelicnrqlalertconditionconfigpropertycritical) | [`@cdktf/provider-newrelic.NrqlAlertConditionCritical`](#@cdktf/provider-newrelic.NrqlAlertConditionCritical) | critical block. |
| [`description`](#cdktfprovidernewrelicnrqlalertconditionconfigpropertydescription) | `string` | The description of the NRQL alert condition. |
| [`enabled`](#cdktfprovidernewrelicnrqlalertconditionconfigpropertyenabled) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Whether or not to enable the alert condition. |
| [`expectedGroups`](#cdktfprovidernewrelicnrqlalertconditionconfigpropertyexpectedgroups) | `number` | Number of expected groups when using outlier detection. |
| [`expirationDuration`](#cdktfprovidernewrelicnrqlalertconditionconfigpropertyexpirationduration) | `number` | The amount of time (in seconds) to wait before considering the signal expired. |
| [`fillOption`](#cdktfprovidernewrelicnrqlalertconditionconfigpropertyfilloption) | `string` | Which strategy to use when filling gaps in the signal. |
| [`fillValue`](#cdktfprovidernewrelicnrqlalertconditionconfigpropertyfillvalue) | `number` | If using the 'static' fill option, this value will be used for filling gaps in the signal. |
| [`ignoreOverlap`](#cdktfprovidernewrelicnrqlalertconditionconfigpropertyignoreoverlap) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Whether to look for a convergence of groups when using outlier detection. |
| [`openViolationOnExpiration`](#cdktfprovidernewrelicnrqlalertconditionconfigpropertyopenviolationonexpiration) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Whether to create a new violation to capture that the signal expired. |
| [`openViolationOnGroupOverlap`](#cdktfprovidernewrelicnrqlalertconditionconfigpropertyopenviolationongroupoverlap) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Whether overlapping groups should produce a violation. |
| [`runbookUrl`](#cdktfprovidernewrelicnrqlalertconditionconfigpropertyrunbookurl) | `string` | Runbook URL to display in notifications. |
| [`slideBy`](#cdktfprovidernewrelicnrqlalertconditionconfigpropertyslideby) | `number` | The duration of overlapping timewindows used to smooth the chart line, in seconds. |
| [`term`](#cdktfprovidernewrelicnrqlalertconditionconfigpropertyterm) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.NrqlAlertConditionTerm`](#@cdktf/provider-newrelic.NrqlAlertConditionTerm)[] | term block. |
| [`type`](#cdktfprovidernewrelicnrqlalertconditionconfigpropertytype) | `string` | The type of NRQL alert condition to create. Valid values are: 'static', 'baseline', 'outlier' (deprecated). |
| [`valueFunction`](#cdktfprovidernewrelicnrqlalertconditionconfigpropertyvaluefunction) | `string` | Valid values are: 'single_value' or 'sum'. |
| [`violationTimeLimit`](#cdktfprovidernewrelicnrqlalertconditionconfigpropertyviolationtimelimit) | `string` | Sets a time limit, in hours, that will automatically force-close a long-lasting violation after the time limit you select. |
| [`violationTimeLimitSeconds`](#cdktfprovidernewrelicnrqlalertconditionconfigpropertyviolationtimelimitseconds) | `number` | Sets a time limit, in seconds, that will automatically force-close a long-lasting violation after the time limit you select. |
| [`warning`](#cdktfprovidernewrelicnrqlalertconditionconfigpropertywarning) | [`@cdktf/provider-newrelic.NrqlAlertConditionWarning`](#@cdktf/provider-newrelic.NrqlAlertConditionWarning) | warning block. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.count" id="cdktfprovidernewrelicnrqlalertconditionconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.dependsOn" id="cdktfprovidernewrelicnrqlalertconditionconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.lifecycle" id="cdktfprovidernewrelicnrqlalertconditionconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.provider" id="cdktfprovidernewrelicnrqlalertconditionconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.name" id="cdktfprovidernewrelicnrqlalertconditionconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The title of the condition.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#name NrqlAlertCondition#name}

---

##### `nrql`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.nrql" id="cdktfprovidernewrelicnrqlalertconditionconfigpropertynrql"></a>

```typescript
public readonly nrql: NrqlAlertConditionNrql;
```

- *Type:* [`@cdktf/provider-newrelic.NrqlAlertConditionNrql`](#@cdktf/provider-newrelic.NrqlAlertConditionNrql)

nrql block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#nrql NrqlAlertCondition#nrql}

---

##### `policyId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.policyId" id="cdktfprovidernewrelicnrqlalertconditionconfigpropertypolicyid"></a>

```typescript
public readonly policyId: number;
```

- *Type:* `number`

The ID of the policy where this condition should be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#policy_id NrqlAlertCondition#policy_id}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.accountId" id="cdktfprovidernewrelicnrqlalertconditionconfigpropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The New Relic account ID for managing your NRQL alert conditions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#account_id NrqlAlertCondition#account_id}

---

##### `aggregationDelay`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.aggregationDelay" id="cdktfprovidernewrelicnrqlalertconditionconfigpropertyaggregationdelay"></a>

```typescript
public readonly aggregationDelay: number;
```

- *Type:* `number`

How long we wait for data that belongs in each aggregation window.

Depending on your data, a longer delay may increase accuracy but delay notifications. Use aggregationDelay with the EVENT_FLOW and CADENCE aggregation methods.  Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#aggregation_delay NrqlAlertCondition#aggregation_delay}

---

##### `aggregationMethod`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.aggregationMethod" id="cdktfprovidernewrelicnrqlalertconditionconfigpropertyaggregationmethod"></a>

```typescript
public readonly aggregationMethod: string;
```

- *Type:* `string`

The method that determines when we consider an aggregation window to be complete so that we can evaluate the signal for violations.

Default is CADENCE.  Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#aggregation_method NrqlAlertCondition#aggregation_method}

---

##### `aggregationTimer`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.aggregationTimer" id="cdktfprovidernewrelicnrqlalertconditionconfigpropertyaggregationtimer"></a>

```typescript
public readonly aggregationTimer: number;
```

- *Type:* `number`

How long we wait after each data point arrives to make sure we've processed the whole batch.

Use aggregationTimer with the EVENT_TIMER aggregation method.  Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#aggregation_timer NrqlAlertCondition#aggregation_timer}

---

##### `aggregationWindow`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.aggregationWindow" id="cdktfprovidernewrelicnrqlalertconditionconfigpropertyaggregationwindow"></a>

```typescript
public readonly aggregationWindow: number;
```

- *Type:* `number`

The duration of the time window used to evaluate the NRQL query, in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#aggregation_window NrqlAlertCondition#aggregation_window}

---

##### `baselineDirection`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.baselineDirection" id="cdktfprovidernewrelicnrqlalertconditionconfigpropertybaselinedirection"></a>

```typescript
public readonly baselineDirection: string;
```

- *Type:* `string`

The baseline direction of a baseline NRQL alert condition. Valid values are: 'LOWER_ONLY', 'UPPER_AND_LOWER', 'UPPER_ONLY' (case insensitive).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#baseline_direction NrqlAlertCondition#baseline_direction}

---

##### `closeViolationsOnExpiration`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.closeViolationsOnExpiration" id="cdktfprovidernewrelicnrqlalertconditionconfigpropertycloseviolationsonexpiration"></a>

```typescript
public readonly closeViolationsOnExpiration: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether to close all open violations when the signal expires.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#close_violations_on_expiration NrqlAlertCondition#close_violations_on_expiration}

---

##### `critical`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.critical" id="cdktfprovidernewrelicnrqlalertconditionconfigpropertycritical"></a>

```typescript
public readonly critical: NrqlAlertConditionCritical;
```

- *Type:* [`@cdktf/provider-newrelic.NrqlAlertConditionCritical`](#@cdktf/provider-newrelic.NrqlAlertConditionCritical)

critical block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#critical NrqlAlertCondition#critical}

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.description" id="cdktfprovidernewrelicnrqlalertconditionconfigpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

The description of the NRQL alert condition.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#description NrqlAlertCondition#description}

---

##### `enabled`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.enabled" id="cdktfprovidernewrelicnrqlalertconditionconfigpropertyenabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether or not to enable the alert condition.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#enabled NrqlAlertCondition#enabled}

---

##### `expectedGroups`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.expectedGroups" id="cdktfprovidernewrelicnrqlalertconditionconfigpropertyexpectedgroups"></a>

```typescript
public readonly expectedGroups: number;
```

- *Type:* `number`

Number of expected groups when using outlier detection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#expected_groups NrqlAlertCondition#expected_groups}

---

##### `expirationDuration`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.expirationDuration" id="cdktfprovidernewrelicnrqlalertconditionconfigpropertyexpirationduration"></a>

```typescript
public readonly expirationDuration: number;
```

- *Type:* `number`

The amount of time (in seconds) to wait before considering the signal expired.

Must be in the range of 30 to 172800 (inclusive)  Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#expiration_duration NrqlAlertCondition#expiration_duration}

---

##### `fillOption`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.fillOption" id="cdktfprovidernewrelicnrqlalertconditionconfigpropertyfilloption"></a>

```typescript
public readonly fillOption: string;
```

- *Type:* `string`

Which strategy to use when filling gaps in the signal.

If static, the 'fill value' will be used for filling gaps in the signal. Valid values are: 'NONE', 'LAST_VALUE', or 'STATIC' (case insensitive).  Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#fill_option NrqlAlertCondition#fill_option}

---

##### `fillValue`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.fillValue" id="cdktfprovidernewrelicnrqlalertconditionconfigpropertyfillvalue"></a>

```typescript
public readonly fillValue: number;
```

- *Type:* `number`

If using the 'static' fill option, this value will be used for filling gaps in the signal.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#fill_value NrqlAlertCondition#fill_value}

---

##### `ignoreOverlap`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.ignoreOverlap" id="cdktfprovidernewrelicnrqlalertconditionconfigpropertyignoreoverlap"></a>

```typescript
public readonly ignoreOverlap: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether to look for a convergence of groups when using outlier detection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#ignore_overlap NrqlAlertCondition#ignore_overlap}

---

##### `openViolationOnExpiration`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.openViolationOnExpiration" id="cdktfprovidernewrelicnrqlalertconditionconfigpropertyopenviolationonexpiration"></a>

```typescript
public readonly openViolationOnExpiration: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether to create a new violation to capture that the signal expired.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#open_violation_on_expiration NrqlAlertCondition#open_violation_on_expiration}

---

##### `openViolationOnGroupOverlap`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.openViolationOnGroupOverlap" id="cdktfprovidernewrelicnrqlalertconditionconfigpropertyopenviolationongroupoverlap"></a>

```typescript
public readonly openViolationOnGroupOverlap: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether overlapping groups should produce a violation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#open_violation_on_group_overlap NrqlAlertCondition#open_violation_on_group_overlap}

---

##### `runbookUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.runbookUrl" id="cdktfprovidernewrelicnrqlalertconditionconfigpropertyrunbookurl"></a>

```typescript
public readonly runbookUrl: string;
```

- *Type:* `string`

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#runbook_url NrqlAlertCondition#runbook_url}

---

##### `slideBy`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.slideBy" id="cdktfprovidernewrelicnrqlalertconditionconfigpropertyslideby"></a>

```typescript
public readonly slideBy: number;
```

- *Type:* `number`

The duration of overlapping timewindows used to smooth the chart line, in seconds.

Must be a factor of `aggregation_window` and less than the aggregation window. It should be greater or equal to 30 seconds if `aggregation_window` is less than or equal to 3600 seconds, or greater or eqaul to `aggregation_window / 120` if `aggregation_window` is greater than 3600 seconds.  Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#slide_by NrqlAlertCondition#slide_by}

---

##### `term`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.term" id="cdktfprovidernewrelicnrqlalertconditionconfigpropertyterm"></a>

```typescript
public readonly term: IResolvable | NrqlAlertConditionTerm[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.NrqlAlertConditionTerm`](#@cdktf/provider-newrelic.NrqlAlertConditionTerm)[]

term block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#term NrqlAlertCondition#term}

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.type" id="cdktfprovidernewrelicnrqlalertconditionconfigpropertytype"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

The type of NRQL alert condition to create. Valid values are: 'static', 'baseline', 'outlier' (deprecated).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#type NrqlAlertCondition#type}

---

##### `valueFunction`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.valueFunction" id="cdktfprovidernewrelicnrqlalertconditionconfigpropertyvaluefunction"></a>

```typescript
public readonly valueFunction: string;
```

- *Type:* `string`

Valid values are: 'single_value' or 'sum'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#value_function NrqlAlertCondition#value_function}

---

##### `violationTimeLimit`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.violationTimeLimit" id="cdktfprovidernewrelicnrqlalertconditionconfigpropertyviolationtimelimit"></a>

```typescript
public readonly violationTimeLimit: string;
```

- *Type:* `string`

Sets a time limit, in hours, that will automatically force-close a long-lasting violation after the time limit you select.

Possible values are 'ONE_HOUR', 'TWO_HOURS', 'FOUR_HOURS', 'EIGHT_HOURS', 'TWELVE_HOURS', 'TWENTY_FOUR_HOURS', 'THIRTY_DAYS' (case insensitive).  Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#violation_time_limit NrqlAlertCondition#violation_time_limit}

---

##### `violationTimeLimitSeconds`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.violationTimeLimitSeconds" id="cdktfprovidernewrelicnrqlalertconditionconfigpropertyviolationtimelimitseconds"></a>

```typescript
public readonly violationTimeLimitSeconds: number;
```

- *Type:* `number`

Sets a time limit, in seconds, that will automatically force-close a long-lasting violation after the time limit you select.

Must be in the range of 300 to 2592000 (inclusive)  Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#violation_time_limit_seconds NrqlAlertCondition#violation_time_limit_seconds}

---

##### `warning`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.warning" id="cdktfprovidernewrelicnrqlalertconditionconfigpropertywarning"></a>

```typescript
public readonly warning: NrqlAlertConditionWarning;
```

- *Type:* [`@cdktf/provider-newrelic.NrqlAlertConditionWarning`](#@cdktf/provider-newrelic.NrqlAlertConditionWarning)

warning block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#warning NrqlAlertCondition#warning}

---

### NrqlAlertConditionCritical <a name="@cdktf/provider-newrelic.NrqlAlertConditionCritical" id="cdktfprovidernewrelicnrqlalertconditioncritical"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { NrqlAlertConditionCritical } from '@cdktf/provider-newrelic'

const nrqlAlertConditionCritical: NrqlAlertConditionCritical = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`threshold`](#cdktfprovidernewrelicnrqlalertconditioncriticalpropertythreshold)<span title="Required">*</span> | `number` | Must be 0 or greater. For baseline conditions must be in range [1, 1000]. |
| [`duration`](#cdktfprovidernewrelicnrqlalertconditioncriticalpropertyduration) | `number` | In minutes, must be in the range of 1 to 120 (inclusive). |
| [`operator`](#cdktfprovidernewrelicnrqlalertconditioncriticalpropertyoperator) | `string` | One of (above, below, equals). Defaults to 'equals'. |
| [`thresholdDuration`](#cdktfprovidernewrelicnrqlalertconditioncriticalpropertythresholdduration) | `number` | The duration, in seconds, that the threshold must violate in order to create a violation. |
| [`thresholdOccurrences`](#cdktfprovidernewrelicnrqlalertconditioncriticalpropertythresholdoccurrences) | `string` | The criteria for how many data points must be in violation for the specified threshold duration. |
| [`timeFunction`](#cdktfprovidernewrelicnrqlalertconditioncriticalpropertytimefunction) | `string` | Valid values are: 'all' or 'any'. |

---

##### `threshold`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCritical.property.threshold" id="cdktfprovidernewrelicnrqlalertconditioncriticalpropertythreshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* `number`

Must be 0 or greater. For baseline conditions must be in range [1, 1000].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#threshold NrqlAlertCondition#threshold}

---

##### `duration`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCritical.property.duration" id="cdktfprovidernewrelicnrqlalertconditioncriticalpropertyduration"></a>

```typescript
public readonly duration: number;
```

- *Type:* `number`

In minutes, must be in the range of 1 to 120 (inclusive).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#duration NrqlAlertCondition#duration}

---

##### `operator`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCritical.property.operator" id="cdktfprovidernewrelicnrqlalertconditioncriticalpropertyoperator"></a>

```typescript
public readonly operator: string;
```

- *Type:* `string`

One of (above, below, equals). Defaults to 'equals'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#operator NrqlAlertCondition#operator}

---

##### `thresholdDuration`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCritical.property.thresholdDuration" id="cdktfprovidernewrelicnrqlalertconditioncriticalpropertythresholdduration"></a>

```typescript
public readonly thresholdDuration: number;
```

- *Type:* `number`

The duration, in seconds, that the threshold must violate in order to create a violation.

Value must be a multiple of the 'aggregation_window' (which has a default of 60 seconds). Value must be within 120-3600 seconds for baseline and outlier conditions, within 120-7200 seconds for static conditions with the sum value function, and within 60-7200 seconds for static conditions with the single_value value function.  Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#threshold_duration NrqlAlertCondition#threshold_duration}

---

##### `thresholdOccurrences`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCritical.property.thresholdOccurrences" id="cdktfprovidernewrelicnrqlalertconditioncriticalpropertythresholdoccurrences"></a>

```typescript
public readonly thresholdOccurrences: string;
```

- *Type:* `string`

The criteria for how many data points must be in violation for the specified threshold duration.

Valid values are: 'ALL' or 'AT_LEAST_ONCE' (case insensitive).  Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#threshold_occurrences NrqlAlertCondition#threshold_occurrences}

---

##### `timeFunction`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCritical.property.timeFunction" id="cdktfprovidernewrelicnrqlalertconditioncriticalpropertytimefunction"></a>

```typescript
public readonly timeFunction: string;
```

- *Type:* `string`

Valid values are: 'all' or 'any'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#time_function NrqlAlertCondition#time_function}

---

### NrqlAlertConditionNrql <a name="@cdktf/provider-newrelic.NrqlAlertConditionNrql" id="cdktfprovidernewrelicnrqlalertconditionnrql"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { NrqlAlertConditionNrql } from '@cdktf/provider-newrelic'

const nrqlAlertConditionNrql: NrqlAlertConditionNrql = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`query`](#cdktfprovidernewrelicnrqlalertconditionnrqlpropertyquery)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#query NrqlAlertCondition#query}. |
| [`evaluationOffset`](#cdktfprovidernewrelicnrqlalertconditionnrqlpropertyevaluationoffset) | `number` | NRQL queries are evaluated in one-minute time windows. |
| [`sinceValue`](#cdktfprovidernewrelicnrqlalertconditionnrqlpropertysincevalue) | `string` | NRQL queries are evaluated in one-minute time windows. |

---

##### `query`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionNrql.property.query" id="cdktfprovidernewrelicnrqlalertconditionnrqlpropertyquery"></a>

```typescript
public readonly query: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#query NrqlAlertCondition#query}.

---

##### `evaluationOffset`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionNrql.property.evaluationOffset" id="cdktfprovidernewrelicnrqlalertconditionnrqlpropertyevaluationoffset"></a>

```typescript
public readonly evaluationOffset: number;
```

- *Type:* `number`

NRQL queries are evaluated in one-minute time windows.

The start time depends on the value you provide in the NRQL condition's `evaluation_offset`.  Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#evaluation_offset NrqlAlertCondition#evaluation_offset}

---

##### `sinceValue`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionNrql.property.sinceValue" id="cdktfprovidernewrelicnrqlalertconditionnrqlpropertysincevalue"></a>

```typescript
public readonly sinceValue: string;
```

- *Type:* `string`

NRQL queries are evaluated in one-minute time windows.

The start time depends on the value you provide in the NRQL condition's `since_value`.  Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#since_value NrqlAlertCondition#since_value}

---

### NrqlAlertConditionTerm <a name="@cdktf/provider-newrelic.NrqlAlertConditionTerm" id="cdktfprovidernewrelicnrqlalertconditionterm"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { NrqlAlertConditionTerm } from '@cdktf/provider-newrelic'

const nrqlAlertConditionTerm: NrqlAlertConditionTerm = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`threshold`](#cdktfprovidernewrelicnrqlalertconditiontermpropertythreshold)<span title="Required">*</span> | `number` | Must be 0 or greater. For baseline conditions must be in range [1, 1000]. |
| [`duration`](#cdktfprovidernewrelicnrqlalertconditiontermpropertyduration) | `number` | In minutes, must be in the range of 1 to 120 (inclusive). |
| [`operator`](#cdktfprovidernewrelicnrqlalertconditiontermpropertyoperator) | `string` | One of (above, below, equals). Defaults to 'equals'. |
| [`priority`](#cdktfprovidernewrelicnrqlalertconditiontermpropertypriority) | `string` | One of (critical, warning). Defaults to 'critical'. At least one condition term must have priority set to 'critical'. |
| [`thresholdDuration`](#cdktfprovidernewrelicnrqlalertconditiontermpropertythresholdduration) | `number` | The duration, in seconds, that the threshold must violate in order to create a violation. |
| [`thresholdOccurrences`](#cdktfprovidernewrelicnrqlalertconditiontermpropertythresholdoccurrences) | `string` | The criteria for how many data points must be in violation for the specified threshold duration. |
| [`timeFunction`](#cdktfprovidernewrelicnrqlalertconditiontermpropertytimefunction) | `string` | Valid values are: 'all' or 'any'. |

---

##### `threshold`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionTerm.property.threshold" id="cdktfprovidernewrelicnrqlalertconditiontermpropertythreshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* `number`

Must be 0 or greater. For baseline conditions must be in range [1, 1000].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#threshold NrqlAlertCondition#threshold}

---

##### `duration`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionTerm.property.duration" id="cdktfprovidernewrelicnrqlalertconditiontermpropertyduration"></a>

```typescript
public readonly duration: number;
```

- *Type:* `number`

In minutes, must be in the range of 1 to 120 (inclusive).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#duration NrqlAlertCondition#duration}

---

##### `operator`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionTerm.property.operator" id="cdktfprovidernewrelicnrqlalertconditiontermpropertyoperator"></a>

```typescript
public readonly operator: string;
```

- *Type:* `string`

One of (above, below, equals). Defaults to 'equals'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#operator NrqlAlertCondition#operator}

---

##### `priority`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionTerm.property.priority" id="cdktfprovidernewrelicnrqlalertconditiontermpropertypriority"></a>

```typescript
public readonly priority: string;
```

- *Type:* `string`

One of (critical, warning). Defaults to 'critical'. At least one condition term must have priority set to 'critical'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#priority NrqlAlertCondition#priority}

---

##### `thresholdDuration`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionTerm.property.thresholdDuration" id="cdktfprovidernewrelicnrqlalertconditiontermpropertythresholdduration"></a>

```typescript
public readonly thresholdDuration: number;
```

- *Type:* `number`

The duration, in seconds, that the threshold must violate in order to create a violation.

Value must be a multiple of the 'aggregation_window' (which has a default of 60 seconds). Value must be within 120-3600 seconds for baseline and outlier conditions, within 120-7200 seconds for static conditions with the sum value function, and within 60-7200 seconds for static conditions with the single_value value function.  Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#threshold_duration NrqlAlertCondition#threshold_duration}

---

##### `thresholdOccurrences`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionTerm.property.thresholdOccurrences" id="cdktfprovidernewrelicnrqlalertconditiontermpropertythresholdoccurrences"></a>

```typescript
public readonly thresholdOccurrences: string;
```

- *Type:* `string`

The criteria for how many data points must be in violation for the specified threshold duration.

Valid values are: 'ALL' or 'AT_LEAST_ONCE' (case insensitive).  Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#threshold_occurrences NrqlAlertCondition#threshold_occurrences}

---

##### `timeFunction`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionTerm.property.timeFunction" id="cdktfprovidernewrelicnrqlalertconditiontermpropertytimefunction"></a>

```typescript
public readonly timeFunction: string;
```

- *Type:* `string`

Valid values are: 'all' or 'any'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#time_function NrqlAlertCondition#time_function}

---

### NrqlAlertConditionWarning <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarning" id="cdktfprovidernewrelicnrqlalertconditionwarning"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { NrqlAlertConditionWarning } from '@cdktf/provider-newrelic'

const nrqlAlertConditionWarning: NrqlAlertConditionWarning = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`threshold`](#cdktfprovidernewrelicnrqlalertconditionwarningpropertythreshold)<span title="Required">*</span> | `number` | Must be 0 or greater. For baseline conditions must be in range [1, 1000]. |
| [`duration`](#cdktfprovidernewrelicnrqlalertconditionwarningpropertyduration) | `number` | In minutes, must be in the range of 1 to 120 (inclusive). |
| [`operator`](#cdktfprovidernewrelicnrqlalertconditionwarningpropertyoperator) | `string` | One of (above, below, equals). Defaults to 'equals'. |
| [`thresholdDuration`](#cdktfprovidernewrelicnrqlalertconditionwarningpropertythresholdduration) | `number` | The duration, in seconds, that the threshold must violate in order to create a violation. |
| [`thresholdOccurrences`](#cdktfprovidernewrelicnrqlalertconditionwarningpropertythresholdoccurrences) | `string` | The criteria for how many data points must be in violation for the specified threshold duration. |
| [`timeFunction`](#cdktfprovidernewrelicnrqlalertconditionwarningpropertytimefunction) | `string` | Valid values are: 'all' or 'any'. |

---

##### `threshold`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarning.property.threshold" id="cdktfprovidernewrelicnrqlalertconditionwarningpropertythreshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* `number`

Must be 0 or greater. For baseline conditions must be in range [1, 1000].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#threshold NrqlAlertCondition#threshold}

---

##### `duration`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarning.property.duration" id="cdktfprovidernewrelicnrqlalertconditionwarningpropertyduration"></a>

```typescript
public readonly duration: number;
```

- *Type:* `number`

In minutes, must be in the range of 1 to 120 (inclusive).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#duration NrqlAlertCondition#duration}

---

##### `operator`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarning.property.operator" id="cdktfprovidernewrelicnrqlalertconditionwarningpropertyoperator"></a>

```typescript
public readonly operator: string;
```

- *Type:* `string`

One of (above, below, equals). Defaults to 'equals'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#operator NrqlAlertCondition#operator}

---

##### `thresholdDuration`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarning.property.thresholdDuration" id="cdktfprovidernewrelicnrqlalertconditionwarningpropertythresholdduration"></a>

```typescript
public readonly thresholdDuration: number;
```

- *Type:* `number`

The duration, in seconds, that the threshold must violate in order to create a violation.

Value must be a multiple of the 'aggregation_window' (which has a default of 60 seconds). Value must be within 120-3600 seconds for baseline and outlier conditions, within 120-7200 seconds for static conditions with the sum value function, and within 60-7200 seconds for static conditions with the single_value value function.  Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#threshold_duration NrqlAlertCondition#threshold_duration}

---

##### `thresholdOccurrences`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarning.property.thresholdOccurrences" id="cdktfprovidernewrelicnrqlalertconditionwarningpropertythresholdoccurrences"></a>

```typescript
public readonly thresholdOccurrences: string;
```

- *Type:* `string`

The criteria for how many data points must be in violation for the specified threshold duration.

Valid values are: 'ALL' or 'AT_LEAST_ONCE' (case insensitive).  Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#threshold_occurrences NrqlAlertCondition#threshold_occurrences}

---

##### `timeFunction`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarning.property.timeFunction" id="cdktfprovidernewrelicnrqlalertconditionwarningpropertytimefunction"></a>

```typescript
public readonly timeFunction: string;
```

- *Type:* `string`

Valid values are: 'all' or 'any'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition#time_function NrqlAlertCondition#time_function}

---

### NrqlDropRuleConfig <a name="@cdktf/provider-newrelic.NrqlDropRuleConfig" id="cdktfprovidernewrelicnrqldropruleconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { NrqlDropRuleConfig } from '@cdktf/provider-newrelic'

const nrqlDropRuleConfig: NrqlDropRuleConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidernewrelicnrqldropruleconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidernewrelicnrqldropruleconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidernewrelicnrqldropruleconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidernewrelicnrqldropruleconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`action`](#cdktfprovidernewrelicnrqldropruleconfigpropertyaction)<span title="Required">*</span> | `string` | The drop rule action (drop_data, drop_attributes, or drop_attributes_from_metric_aggregates). |
| [`nrql`](#cdktfprovidernewrelicnrqldropruleconfigpropertynrql)<span title="Required">*</span> | `string` | Explains which data to apply the drop rule to. |
| [`accountId`](#cdktfprovidernewrelicnrqldropruleconfigpropertyaccountid) | `number` | Account with the NRQL drop rule will be put. |
| [`description`](#cdktfprovidernewrelicnrqldropruleconfigpropertydescription) | `string` | Provides additional information about the rule. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlDropRuleConfig.property.count" id="cdktfprovidernewrelicnrqldropruleconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlDropRuleConfig.property.dependsOn" id="cdktfprovidernewrelicnrqldropruleconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlDropRuleConfig.property.lifecycle" id="cdktfprovidernewrelicnrqldropruleconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlDropRuleConfig.property.provider" id="cdktfprovidernewrelicnrqldropruleconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `action`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlDropRuleConfig.property.action" id="cdktfprovidernewrelicnrqldropruleconfigpropertyaction"></a>

```typescript
public readonly action: string;
```

- *Type:* `string`

The drop rule action (drop_data, drop_attributes, or drop_attributes_from_metric_aggregates).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_drop_rule#action NrqlDropRule#action}

---

##### `nrql`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlDropRuleConfig.property.nrql" id="cdktfprovidernewrelicnrqldropruleconfigpropertynrql"></a>

```typescript
public readonly nrql: string;
```

- *Type:* `string`

Explains which data to apply the drop rule to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_drop_rule#nrql NrqlDropRule#nrql}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlDropRuleConfig.property.accountId" id="cdktfprovidernewrelicnrqldropruleconfigpropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

Account with the NRQL drop rule will be put.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_drop_rule#account_id NrqlDropRule#account_id}

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlDropRuleConfig.property.description" id="cdktfprovidernewrelicnrqldropruleconfigpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

Provides additional information about the rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_drop_rule#description NrqlDropRule#description}

---

### OneDashboardConfig <a name="@cdktf/provider-newrelic.OneDashboardConfig" id="cdktfprovidernewreliconedashboardconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OneDashboardConfig } from '@cdktf/provider-newrelic'

const oneDashboardConfig: OneDashboardConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidernewreliconedashboardconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidernewreliconedashboardconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidernewreliconedashboardconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidernewreliconedashboardconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`name`](#cdktfprovidernewreliconedashboardconfigpropertyname)<span title="Required">*</span> | `string` | The dashboard's name. |
| [`page`](#cdktfprovidernewreliconedashboardconfigpropertypage)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.OneDashboardPage`](#@cdktf/provider-newrelic.OneDashboardPage)[] | page block. |
| [`accountId`](#cdktfprovidernewreliconedashboardconfigpropertyaccountid) | `number` | The New Relic account ID where you want to create the dashboard. |
| [`description`](#cdktfprovidernewreliconedashboardconfigpropertydescription) | `string` | The dashboard's description. |
| [`permissions`](#cdktfprovidernewreliconedashboardconfigpropertypermissions) | `string` | Determines who can see or edit the dashboard. Valid values are private, public_read_only, public_read_write. Defaults to public_read_only. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardConfig.property.count" id="cdktfprovidernewreliconedashboardconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardConfig.property.dependsOn" id="cdktfprovidernewreliconedashboardconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardConfig.property.lifecycle" id="cdktfprovidernewreliconedashboardconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardConfig.property.provider" id="cdktfprovidernewreliconedashboardconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardConfig.property.name" id="cdktfprovidernewreliconedashboardconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The dashboard's name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#name OneDashboard#name}

---

##### `page`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardConfig.property.page" id="cdktfprovidernewreliconedashboardconfigpropertypage"></a>

```typescript
public readonly page: IResolvable | OneDashboardPage[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.OneDashboardPage`](#@cdktf/provider-newrelic.OneDashboardPage)[]

page block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#page OneDashboard#page}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardConfig.property.accountId" id="cdktfprovidernewreliconedashboardconfigpropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The New Relic account ID where you want to create the dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardConfig.property.description" id="cdktfprovidernewreliconedashboardconfigpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

The dashboard's description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#description OneDashboard#description}

---

##### `permissions`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardConfig.property.permissions" id="cdktfprovidernewreliconedashboardconfigpropertypermissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* `string`

Determines who can see or edit the dashboard. Valid values are private, public_read_only, public_read_write. Defaults to public_read_only.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#permissions OneDashboard#permissions}

---

### OneDashboardPage <a name="@cdktf/provider-newrelic.OneDashboardPage" id="cdktfprovidernewreliconedashboardpage"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OneDashboardPage } from '@cdktf/provider-newrelic'

const oneDashboardPage: OneDashboardPage = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`name`](#cdktfprovidernewreliconedashboardpagepropertyname)<span title="Required">*</span> | `string` | The dashboard page's name. |
| [`description`](#cdktfprovidernewreliconedashboardpagepropertydescription) | `string` | The dashboard page's description. |
| [`widgetArea`](#cdktfprovidernewreliconedashboardpagepropertywidgetarea) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.OneDashboardPageWidgetArea`](#@cdktf/provider-newrelic.OneDashboardPageWidgetArea)[] | widget_area block. |
| [`widgetBar`](#cdktfprovidernewreliconedashboardpagepropertywidgetbar) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.OneDashboardPageWidgetBar`](#@cdktf/provider-newrelic.OneDashboardPageWidgetBar)[] | widget_bar block. |
| [`widgetBillboard`](#cdktfprovidernewreliconedashboardpagepropertywidgetbillboard) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.OneDashboardPageWidgetBillboard`](#@cdktf/provider-newrelic.OneDashboardPageWidgetBillboard)[] | widget_billboard block. |
| [`widgetBullet`](#cdktfprovidernewreliconedashboardpagepropertywidgetbullet) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.OneDashboardPageWidgetBullet`](#@cdktf/provider-newrelic.OneDashboardPageWidgetBullet)[] | widget_bullet block. |
| [`widgetFunnel`](#cdktfprovidernewreliconedashboardpagepropertywidgetfunnel) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.OneDashboardPageWidgetFunnel`](#@cdktf/provider-newrelic.OneDashboardPageWidgetFunnel)[] | widget_funnel block. |
| [`widgetHeatmap`](#cdktfprovidernewreliconedashboardpagepropertywidgetheatmap) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.OneDashboardPageWidgetHeatmap`](#@cdktf/provider-newrelic.OneDashboardPageWidgetHeatmap)[] | widget_heatmap block. |
| [`widgetHistogram`](#cdktfprovidernewreliconedashboardpagepropertywidgethistogram) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.OneDashboardPageWidgetHistogram`](#@cdktf/provider-newrelic.OneDashboardPageWidgetHistogram)[] | widget_histogram block. |
| [`widgetJson`](#cdktfprovidernewreliconedashboardpagepropertywidgetjson) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.OneDashboardPageWidgetJson`](#@cdktf/provider-newrelic.OneDashboardPageWidgetJson)[] | widget_json block. |
| [`widgetLine`](#cdktfprovidernewreliconedashboardpagepropertywidgetline) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.OneDashboardPageWidgetLine`](#@cdktf/provider-newrelic.OneDashboardPageWidgetLine)[] | widget_line block. |
| [`widgetMarkdown`](#cdktfprovidernewreliconedashboardpagepropertywidgetmarkdown) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.OneDashboardPageWidgetMarkdown`](#@cdktf/provider-newrelic.OneDashboardPageWidgetMarkdown)[] | widget_markdown block. |
| [`widgetPie`](#cdktfprovidernewreliconedashboardpagepropertywidgetpie) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.OneDashboardPageWidgetPie`](#@cdktf/provider-newrelic.OneDashboardPageWidgetPie)[] | widget_pie block. |
| [`widgetStackedBar`](#cdktfprovidernewreliconedashboardpagepropertywidgetstackedbar) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.OneDashboardPageWidgetStackedBar`](#@cdktf/provider-newrelic.OneDashboardPageWidgetStackedBar)[] | widget_stacked_bar block. |
| [`widgetTable`](#cdktfprovidernewreliconedashboardpagepropertywidgettable) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.OneDashboardPageWidgetTable`](#@cdktf/provider-newrelic.OneDashboardPageWidgetTable)[] | widget_table block. |

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPage.property.name" id="cdktfprovidernewreliconedashboardpagepropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The dashboard page's name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#name OneDashboard#name}

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPage.property.description" id="cdktfprovidernewreliconedashboardpagepropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

The dashboard page's description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#description OneDashboard#description}

---

##### `widgetArea`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPage.property.widgetArea" id="cdktfprovidernewreliconedashboardpagepropertywidgetarea"></a>

```typescript
public readonly widgetArea: IResolvable | OneDashboardPageWidgetArea[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.OneDashboardPageWidgetArea`](#@cdktf/provider-newrelic.OneDashboardPageWidgetArea)[]

widget_area block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_area OneDashboard#widget_area}

---

##### `widgetBar`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPage.property.widgetBar" id="cdktfprovidernewreliconedashboardpagepropertywidgetbar"></a>

```typescript
public readonly widgetBar: IResolvable | OneDashboardPageWidgetBar[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.OneDashboardPageWidgetBar`](#@cdktf/provider-newrelic.OneDashboardPageWidgetBar)[]

widget_bar block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_bar OneDashboard#widget_bar}

---

##### `widgetBillboard`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPage.property.widgetBillboard" id="cdktfprovidernewreliconedashboardpagepropertywidgetbillboard"></a>

```typescript
public readonly widgetBillboard: IResolvable | OneDashboardPageWidgetBillboard[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.OneDashboardPageWidgetBillboard`](#@cdktf/provider-newrelic.OneDashboardPageWidgetBillboard)[]

widget_billboard block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_billboard OneDashboard#widget_billboard}

---

##### `widgetBullet`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPage.property.widgetBullet" id="cdktfprovidernewreliconedashboardpagepropertywidgetbullet"></a>

```typescript
public readonly widgetBullet: IResolvable | OneDashboardPageWidgetBullet[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.OneDashboardPageWidgetBullet`](#@cdktf/provider-newrelic.OneDashboardPageWidgetBullet)[]

widget_bullet block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_bullet OneDashboard#widget_bullet}

---

##### `widgetFunnel`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPage.property.widgetFunnel" id="cdktfprovidernewreliconedashboardpagepropertywidgetfunnel"></a>

```typescript
public readonly widgetFunnel: IResolvable | OneDashboardPageWidgetFunnel[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.OneDashboardPageWidgetFunnel`](#@cdktf/provider-newrelic.OneDashboardPageWidgetFunnel)[]

widget_funnel block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_funnel OneDashboard#widget_funnel}

---

##### `widgetHeatmap`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPage.property.widgetHeatmap" id="cdktfprovidernewreliconedashboardpagepropertywidgetheatmap"></a>

```typescript
public readonly widgetHeatmap: IResolvable | OneDashboardPageWidgetHeatmap[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.OneDashboardPageWidgetHeatmap`](#@cdktf/provider-newrelic.OneDashboardPageWidgetHeatmap)[]

widget_heatmap block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_heatmap OneDashboard#widget_heatmap}

---

##### `widgetHistogram`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPage.property.widgetHistogram" id="cdktfprovidernewreliconedashboardpagepropertywidgethistogram"></a>

```typescript
public readonly widgetHistogram: IResolvable | OneDashboardPageWidgetHistogram[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.OneDashboardPageWidgetHistogram`](#@cdktf/provider-newrelic.OneDashboardPageWidgetHistogram)[]

widget_histogram block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_histogram OneDashboard#widget_histogram}

---

##### `widgetJson`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPage.property.widgetJson" id="cdktfprovidernewreliconedashboardpagepropertywidgetjson"></a>

```typescript
public readonly widgetJson: IResolvable | OneDashboardPageWidgetJson[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.OneDashboardPageWidgetJson`](#@cdktf/provider-newrelic.OneDashboardPageWidgetJson)[]

widget_json block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_json OneDashboard#widget_json}

---

##### `widgetLine`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPage.property.widgetLine" id="cdktfprovidernewreliconedashboardpagepropertywidgetline"></a>

```typescript
public readonly widgetLine: IResolvable | OneDashboardPageWidgetLine[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.OneDashboardPageWidgetLine`](#@cdktf/provider-newrelic.OneDashboardPageWidgetLine)[]

widget_line block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_line OneDashboard#widget_line}

---

##### `widgetMarkdown`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPage.property.widgetMarkdown" id="cdktfprovidernewreliconedashboardpagepropertywidgetmarkdown"></a>

```typescript
public readonly widgetMarkdown: IResolvable | OneDashboardPageWidgetMarkdown[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.OneDashboardPageWidgetMarkdown`](#@cdktf/provider-newrelic.OneDashboardPageWidgetMarkdown)[]

widget_markdown block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_markdown OneDashboard#widget_markdown}

---

##### `widgetPie`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPage.property.widgetPie" id="cdktfprovidernewreliconedashboardpagepropertywidgetpie"></a>

```typescript
public readonly widgetPie: IResolvable | OneDashboardPageWidgetPie[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.OneDashboardPageWidgetPie`](#@cdktf/provider-newrelic.OneDashboardPageWidgetPie)[]

widget_pie block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_pie OneDashboard#widget_pie}

---

##### `widgetStackedBar`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPage.property.widgetStackedBar" id="cdktfprovidernewreliconedashboardpagepropertywidgetstackedbar"></a>

```typescript
public readonly widgetStackedBar: IResolvable | OneDashboardPageWidgetStackedBar[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.OneDashboardPageWidgetStackedBar`](#@cdktf/provider-newrelic.OneDashboardPageWidgetStackedBar)[]

widget_stacked_bar block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_stacked_bar OneDashboard#widget_stacked_bar}

---

##### `widgetTable`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPage.property.widgetTable" id="cdktfprovidernewreliconedashboardpagepropertywidgettable"></a>

```typescript
public readonly widgetTable: IResolvable | OneDashboardPageWidgetTable[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.OneDashboardPageWidgetTable`](#@cdktf/provider-newrelic.OneDashboardPageWidgetTable)[]

widget_table block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_table OneDashboard#widget_table}

---

### OneDashboardPageWidgetArea <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetArea" id="cdktfprovidernewreliconedashboardpagewidgetarea"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OneDashboardPageWidgetArea } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetArea: OneDashboardPageWidgetArea = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`column`](#cdktfprovidernewreliconedashboardpagewidgetareapropertycolumn)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| [`nrqlQuery`](#cdktfprovidernewreliconedashboardpagewidgetareapropertynrqlquery)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.OneDashboardPageWidgetAreaNrqlQuery`](#@cdktf/provider-newrelic.OneDashboardPageWidgetAreaNrqlQuery)[] | nrql_query block. |
| [`row`](#cdktfprovidernewreliconedashboardpagewidgetareapropertyrow)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| [`title`](#cdktfprovidernewreliconedashboardpagewidgetareapropertytitle)<span title="Required">*</span> | `string` | A title for the widget. |
| [`height`](#cdktfprovidernewreliconedashboardpagewidgetareapropertyheight) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| [`width`](#cdktfprovidernewreliconedashboardpagewidgetareapropertywidth) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `column`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetArea.property.column" id="cdktfprovidernewreliconedashboardpagewidgetareapropertycolumn"></a>

```typescript
public readonly column: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `nrqlQuery`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetArea.property.nrqlQuery" id="cdktfprovidernewreliconedashboardpagewidgetareapropertynrqlquery"></a>

```typescript
public readonly nrqlQuery: IResolvable | OneDashboardPageWidgetAreaNrqlQuery[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.OneDashboardPageWidgetAreaNrqlQuery`](#@cdktf/provider-newrelic.OneDashboardPageWidgetAreaNrqlQuery)[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetArea.property.row" id="cdktfprovidernewreliconedashboardpagewidgetareapropertyrow"></a>

```typescript
public readonly row: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetArea.property.title" id="cdktfprovidernewreliconedashboardpagewidgetareapropertytitle"></a>

```typescript
public readonly title: string;
```

- *Type:* `string`

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `height`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetArea.property.height" id="cdktfprovidernewreliconedashboardpagewidgetareapropertyheight"></a>

```typescript
public readonly height: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `width`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetArea.property.width" id="cdktfprovidernewreliconedashboardpagewidgetareapropertywidth"></a>

```typescript
public readonly width: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetAreaNrqlQuery <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetAreaNrqlQuery" id="cdktfprovidernewreliconedashboardpagewidgetareanrqlquery"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OneDashboardPageWidgetAreaNrqlQuery } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetAreaNrqlQuery: OneDashboardPageWidgetAreaNrqlQuery = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`query`](#cdktfprovidernewreliconedashboardpagewidgetareanrqlquerypropertyquery)<span title="Required">*</span> | `string` | The NRQL query. |
| [`accountId`](#cdktfprovidernewreliconedashboardpagewidgetareanrqlquerypropertyaccountid) | `number` | The account id used for the NRQL query. |

---

##### `query`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetAreaNrqlQuery.property.query" id="cdktfprovidernewreliconedashboardpagewidgetareanrqlquerypropertyquery"></a>

```typescript
public readonly query: string;
```

- *Type:* `string`

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetAreaNrqlQuery.property.accountId" id="cdktfprovidernewreliconedashboardpagewidgetareanrqlquerypropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetBar <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBar" id="cdktfprovidernewreliconedashboardpagewidgetbar"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OneDashboardPageWidgetBar } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetBar: OneDashboardPageWidgetBar = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`column`](#cdktfprovidernewreliconedashboardpagewidgetbarpropertycolumn)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| [`nrqlQuery`](#cdktfprovidernewreliconedashboardpagewidgetbarpropertynrqlquery)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.OneDashboardPageWidgetBarNrqlQuery`](#@cdktf/provider-newrelic.OneDashboardPageWidgetBarNrqlQuery)[] | nrql_query block. |
| [`row`](#cdktfprovidernewreliconedashboardpagewidgetbarpropertyrow)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| [`title`](#cdktfprovidernewreliconedashboardpagewidgetbarpropertytitle)<span title="Required">*</span> | `string` | A title for the widget. |
| [`filterCurrentDashboard`](#cdktfprovidernewreliconedashboardpagewidgetbarpropertyfiltercurrentdashboard) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Use this item to filter the current dashboard. |
| [`height`](#cdktfprovidernewreliconedashboardpagewidgetbarpropertyheight) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| [`linkedEntityGuids`](#cdktfprovidernewreliconedashboardpagewidgetbarpropertylinkedentityguids) | `string`[] | Related entities. Currently only supports Dashboard entities, but may allow other cases in the future. |
| [`width`](#cdktfprovidernewreliconedashboardpagewidgetbarpropertywidth) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `column`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBar.property.column" id="cdktfprovidernewreliconedashboardpagewidgetbarpropertycolumn"></a>

```typescript
public readonly column: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `nrqlQuery`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBar.property.nrqlQuery" id="cdktfprovidernewreliconedashboardpagewidgetbarpropertynrqlquery"></a>

```typescript
public readonly nrqlQuery: IResolvable | OneDashboardPageWidgetBarNrqlQuery[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.OneDashboardPageWidgetBarNrqlQuery`](#@cdktf/provider-newrelic.OneDashboardPageWidgetBarNrqlQuery)[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBar.property.row" id="cdktfprovidernewreliconedashboardpagewidgetbarpropertyrow"></a>

```typescript
public readonly row: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBar.property.title" id="cdktfprovidernewreliconedashboardpagewidgetbarpropertytitle"></a>

```typescript
public readonly title: string;
```

- *Type:* `string`

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `filterCurrentDashboard`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBar.property.filterCurrentDashboard" id="cdktfprovidernewreliconedashboardpagewidgetbarpropertyfiltercurrentdashboard"></a>

```typescript
public readonly filterCurrentDashboard: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Use this item to filter the current dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#filter_current_dashboard OneDashboard#filter_current_dashboard}

---

##### `height`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBar.property.height" id="cdktfprovidernewreliconedashboardpagewidgetbarpropertyheight"></a>

```typescript
public readonly height: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `linkedEntityGuids`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBar.property.linkedEntityGuids" id="cdktfprovidernewreliconedashboardpagewidgetbarpropertylinkedentityguids"></a>

```typescript
public readonly linkedEntityGuids: string[];
```

- *Type:* `string`[]

Related entities. Currently only supports Dashboard entities, but may allow other cases in the future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#linked_entity_guids OneDashboard#linked_entity_guids}

---

##### `width`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBar.property.width" id="cdktfprovidernewreliconedashboardpagewidgetbarpropertywidth"></a>

```typescript
public readonly width: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetBarNrqlQuery <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBarNrqlQuery" id="cdktfprovidernewreliconedashboardpagewidgetbarnrqlquery"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OneDashboardPageWidgetBarNrqlQuery } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetBarNrqlQuery: OneDashboardPageWidgetBarNrqlQuery = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`query`](#cdktfprovidernewreliconedashboardpagewidgetbarnrqlquerypropertyquery)<span title="Required">*</span> | `string` | The NRQL query. |
| [`accountId`](#cdktfprovidernewreliconedashboardpagewidgetbarnrqlquerypropertyaccountid) | `number` | The account id used for the NRQL query. |

---

##### `query`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBarNrqlQuery.property.query" id="cdktfprovidernewreliconedashboardpagewidgetbarnrqlquerypropertyquery"></a>

```typescript
public readonly query: string;
```

- *Type:* `string`

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBarNrqlQuery.property.accountId" id="cdktfprovidernewreliconedashboardpagewidgetbarnrqlquerypropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetBillboard <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBillboard" id="cdktfprovidernewreliconedashboardpagewidgetbillboard"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OneDashboardPageWidgetBillboard } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetBillboard: OneDashboardPageWidgetBillboard = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`column`](#cdktfprovidernewreliconedashboardpagewidgetbillboardpropertycolumn)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| [`nrqlQuery`](#cdktfprovidernewreliconedashboardpagewidgetbillboardpropertynrqlquery)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.OneDashboardPageWidgetBillboardNrqlQuery`](#@cdktf/provider-newrelic.OneDashboardPageWidgetBillboardNrqlQuery)[] | nrql_query block. |
| [`row`](#cdktfprovidernewreliconedashboardpagewidgetbillboardpropertyrow)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| [`title`](#cdktfprovidernewreliconedashboardpagewidgetbillboardpropertytitle)<span title="Required">*</span> | `string` | A title for the widget. |
| [`critical`](#cdktfprovidernewreliconedashboardpagewidgetbillboardpropertycritical) | `number` | The critical threshold value. |
| [`height`](#cdktfprovidernewreliconedashboardpagewidgetbillboardpropertyheight) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| [`warning`](#cdktfprovidernewreliconedashboardpagewidgetbillboardpropertywarning) | `number` | The warning threshold value. |
| [`width`](#cdktfprovidernewreliconedashboardpagewidgetbillboardpropertywidth) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `column`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBillboard.property.column" id="cdktfprovidernewreliconedashboardpagewidgetbillboardpropertycolumn"></a>

```typescript
public readonly column: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `nrqlQuery`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBillboard.property.nrqlQuery" id="cdktfprovidernewreliconedashboardpagewidgetbillboardpropertynrqlquery"></a>

```typescript
public readonly nrqlQuery: IResolvable | OneDashboardPageWidgetBillboardNrqlQuery[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.OneDashboardPageWidgetBillboardNrqlQuery`](#@cdktf/provider-newrelic.OneDashboardPageWidgetBillboardNrqlQuery)[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBillboard.property.row" id="cdktfprovidernewreliconedashboardpagewidgetbillboardpropertyrow"></a>

```typescript
public readonly row: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBillboard.property.title" id="cdktfprovidernewreliconedashboardpagewidgetbillboardpropertytitle"></a>

```typescript
public readonly title: string;
```

- *Type:* `string`

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `critical`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBillboard.property.critical" id="cdktfprovidernewreliconedashboardpagewidgetbillboardpropertycritical"></a>

```typescript
public readonly critical: number;
```

- *Type:* `number`

The critical threshold value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#critical OneDashboard#critical}

---

##### `height`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBillboard.property.height" id="cdktfprovidernewreliconedashboardpagewidgetbillboardpropertyheight"></a>

```typescript
public readonly height: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `warning`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBillboard.property.warning" id="cdktfprovidernewreliconedashboardpagewidgetbillboardpropertywarning"></a>

```typescript
public readonly warning: number;
```

- *Type:* `number`

The warning threshold value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#warning OneDashboard#warning}

---

##### `width`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBillboard.property.width" id="cdktfprovidernewreliconedashboardpagewidgetbillboardpropertywidth"></a>

```typescript
public readonly width: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetBillboardNrqlQuery <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBillboardNrqlQuery" id="cdktfprovidernewreliconedashboardpagewidgetbillboardnrqlquery"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OneDashboardPageWidgetBillboardNrqlQuery } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetBillboardNrqlQuery: OneDashboardPageWidgetBillboardNrqlQuery = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`query`](#cdktfprovidernewreliconedashboardpagewidgetbillboardnrqlquerypropertyquery)<span title="Required">*</span> | `string` | The NRQL query. |
| [`accountId`](#cdktfprovidernewreliconedashboardpagewidgetbillboardnrqlquerypropertyaccountid) | `number` | The account id used for the NRQL query. |

---

##### `query`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBillboardNrqlQuery.property.query" id="cdktfprovidernewreliconedashboardpagewidgetbillboardnrqlquerypropertyquery"></a>

```typescript
public readonly query: string;
```

- *Type:* `string`

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBillboardNrqlQuery.property.accountId" id="cdktfprovidernewreliconedashboardpagewidgetbillboardnrqlquerypropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetBullet <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBullet" id="cdktfprovidernewreliconedashboardpagewidgetbullet"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OneDashboardPageWidgetBullet } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetBullet: OneDashboardPageWidgetBullet = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`column`](#cdktfprovidernewreliconedashboardpagewidgetbulletpropertycolumn)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| [`nrqlQuery`](#cdktfprovidernewreliconedashboardpagewidgetbulletpropertynrqlquery)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.OneDashboardPageWidgetBulletNrqlQuery`](#@cdktf/provider-newrelic.OneDashboardPageWidgetBulletNrqlQuery)[] | nrql_query block. |
| [`row`](#cdktfprovidernewreliconedashboardpagewidgetbulletpropertyrow)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| [`title`](#cdktfprovidernewreliconedashboardpagewidgetbulletpropertytitle)<span title="Required">*</span> | `string` | A title for the widget. |
| [`height`](#cdktfprovidernewreliconedashboardpagewidgetbulletpropertyheight) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| [`limit`](#cdktfprovidernewreliconedashboardpagewidgetbulletpropertylimit) | `number` | The maximum value for the visualization. |
| [`width`](#cdktfprovidernewreliconedashboardpagewidgetbulletpropertywidth) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `column`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBullet.property.column" id="cdktfprovidernewreliconedashboardpagewidgetbulletpropertycolumn"></a>

```typescript
public readonly column: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `nrqlQuery`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBullet.property.nrqlQuery" id="cdktfprovidernewreliconedashboardpagewidgetbulletpropertynrqlquery"></a>

```typescript
public readonly nrqlQuery: IResolvable | OneDashboardPageWidgetBulletNrqlQuery[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.OneDashboardPageWidgetBulletNrqlQuery`](#@cdktf/provider-newrelic.OneDashboardPageWidgetBulletNrqlQuery)[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBullet.property.row" id="cdktfprovidernewreliconedashboardpagewidgetbulletpropertyrow"></a>

```typescript
public readonly row: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBullet.property.title" id="cdktfprovidernewreliconedashboardpagewidgetbulletpropertytitle"></a>

```typescript
public readonly title: string;
```

- *Type:* `string`

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `height`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBullet.property.height" id="cdktfprovidernewreliconedashboardpagewidgetbulletpropertyheight"></a>

```typescript
public readonly height: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `limit`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBullet.property.limit" id="cdktfprovidernewreliconedashboardpagewidgetbulletpropertylimit"></a>

```typescript
public readonly limit: number;
```

- *Type:* `number`

The maximum value for the visualization.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#limit OneDashboard#limit}

---

##### `width`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBullet.property.width" id="cdktfprovidernewreliconedashboardpagewidgetbulletpropertywidth"></a>

```typescript
public readonly width: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetBulletNrqlQuery <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBulletNrqlQuery" id="cdktfprovidernewreliconedashboardpagewidgetbulletnrqlquery"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OneDashboardPageWidgetBulletNrqlQuery } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetBulletNrqlQuery: OneDashboardPageWidgetBulletNrqlQuery = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`query`](#cdktfprovidernewreliconedashboardpagewidgetbulletnrqlquerypropertyquery)<span title="Required">*</span> | `string` | The NRQL query. |
| [`accountId`](#cdktfprovidernewreliconedashboardpagewidgetbulletnrqlquerypropertyaccountid) | `number` | The account id used for the NRQL query. |

---

##### `query`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBulletNrqlQuery.property.query" id="cdktfprovidernewreliconedashboardpagewidgetbulletnrqlquerypropertyquery"></a>

```typescript
public readonly query: string;
```

- *Type:* `string`

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBulletNrqlQuery.property.accountId" id="cdktfprovidernewreliconedashboardpagewidgetbulletnrqlquerypropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetFunnel <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetFunnel" id="cdktfprovidernewreliconedashboardpagewidgetfunnel"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OneDashboardPageWidgetFunnel } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetFunnel: OneDashboardPageWidgetFunnel = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`column`](#cdktfprovidernewreliconedashboardpagewidgetfunnelpropertycolumn)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| [`nrqlQuery`](#cdktfprovidernewreliconedashboardpagewidgetfunnelpropertynrqlquery)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.OneDashboardPageWidgetFunnelNrqlQuery`](#@cdktf/provider-newrelic.OneDashboardPageWidgetFunnelNrqlQuery)[] | nrql_query block. |
| [`row`](#cdktfprovidernewreliconedashboardpagewidgetfunnelpropertyrow)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| [`title`](#cdktfprovidernewreliconedashboardpagewidgetfunnelpropertytitle)<span title="Required">*</span> | `string` | A title for the widget. |
| [`height`](#cdktfprovidernewreliconedashboardpagewidgetfunnelpropertyheight) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| [`width`](#cdktfprovidernewreliconedashboardpagewidgetfunnelpropertywidth) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `column`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetFunnel.property.column" id="cdktfprovidernewreliconedashboardpagewidgetfunnelpropertycolumn"></a>

```typescript
public readonly column: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `nrqlQuery`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetFunnel.property.nrqlQuery" id="cdktfprovidernewreliconedashboardpagewidgetfunnelpropertynrqlquery"></a>

```typescript
public readonly nrqlQuery: IResolvable | OneDashboardPageWidgetFunnelNrqlQuery[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.OneDashboardPageWidgetFunnelNrqlQuery`](#@cdktf/provider-newrelic.OneDashboardPageWidgetFunnelNrqlQuery)[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetFunnel.property.row" id="cdktfprovidernewreliconedashboardpagewidgetfunnelpropertyrow"></a>

```typescript
public readonly row: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetFunnel.property.title" id="cdktfprovidernewreliconedashboardpagewidgetfunnelpropertytitle"></a>

```typescript
public readonly title: string;
```

- *Type:* `string`

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `height`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetFunnel.property.height" id="cdktfprovidernewreliconedashboardpagewidgetfunnelpropertyheight"></a>

```typescript
public readonly height: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `width`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetFunnel.property.width" id="cdktfprovidernewreliconedashboardpagewidgetfunnelpropertywidth"></a>

```typescript
public readonly width: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetFunnelNrqlQuery <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetFunnelNrqlQuery" id="cdktfprovidernewreliconedashboardpagewidgetfunnelnrqlquery"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OneDashboardPageWidgetFunnelNrqlQuery } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetFunnelNrqlQuery: OneDashboardPageWidgetFunnelNrqlQuery = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`query`](#cdktfprovidernewreliconedashboardpagewidgetfunnelnrqlquerypropertyquery)<span title="Required">*</span> | `string` | The NRQL query. |
| [`accountId`](#cdktfprovidernewreliconedashboardpagewidgetfunnelnrqlquerypropertyaccountid) | `number` | The account id used for the NRQL query. |

---

##### `query`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetFunnelNrqlQuery.property.query" id="cdktfprovidernewreliconedashboardpagewidgetfunnelnrqlquerypropertyquery"></a>

```typescript
public readonly query: string;
```

- *Type:* `string`

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetFunnelNrqlQuery.property.accountId" id="cdktfprovidernewreliconedashboardpagewidgetfunnelnrqlquerypropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetHeatmap <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHeatmap" id="cdktfprovidernewreliconedashboardpagewidgetheatmap"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OneDashboardPageWidgetHeatmap } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetHeatmap: OneDashboardPageWidgetHeatmap = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`column`](#cdktfprovidernewreliconedashboardpagewidgetheatmappropertycolumn)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| [`nrqlQuery`](#cdktfprovidernewreliconedashboardpagewidgetheatmappropertynrqlquery)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.OneDashboardPageWidgetHeatmapNrqlQuery`](#@cdktf/provider-newrelic.OneDashboardPageWidgetHeatmapNrqlQuery)[] | nrql_query block. |
| [`row`](#cdktfprovidernewreliconedashboardpagewidgetheatmappropertyrow)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| [`title`](#cdktfprovidernewreliconedashboardpagewidgetheatmappropertytitle)<span title="Required">*</span> | `string` | A title for the widget. |
| [`height`](#cdktfprovidernewreliconedashboardpagewidgetheatmappropertyheight) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| [`width`](#cdktfprovidernewreliconedashboardpagewidgetheatmappropertywidth) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `column`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHeatmap.property.column" id="cdktfprovidernewreliconedashboardpagewidgetheatmappropertycolumn"></a>

```typescript
public readonly column: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `nrqlQuery`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHeatmap.property.nrqlQuery" id="cdktfprovidernewreliconedashboardpagewidgetheatmappropertynrqlquery"></a>

```typescript
public readonly nrqlQuery: IResolvable | OneDashboardPageWidgetHeatmapNrqlQuery[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.OneDashboardPageWidgetHeatmapNrqlQuery`](#@cdktf/provider-newrelic.OneDashboardPageWidgetHeatmapNrqlQuery)[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHeatmap.property.row" id="cdktfprovidernewreliconedashboardpagewidgetheatmappropertyrow"></a>

```typescript
public readonly row: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHeatmap.property.title" id="cdktfprovidernewreliconedashboardpagewidgetheatmappropertytitle"></a>

```typescript
public readonly title: string;
```

- *Type:* `string`

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `height`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHeatmap.property.height" id="cdktfprovidernewreliconedashboardpagewidgetheatmappropertyheight"></a>

```typescript
public readonly height: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `width`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHeatmap.property.width" id="cdktfprovidernewreliconedashboardpagewidgetheatmappropertywidth"></a>

```typescript
public readonly width: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetHeatmapNrqlQuery <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHeatmapNrqlQuery" id="cdktfprovidernewreliconedashboardpagewidgetheatmapnrqlquery"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OneDashboardPageWidgetHeatmapNrqlQuery } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetHeatmapNrqlQuery: OneDashboardPageWidgetHeatmapNrqlQuery = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`query`](#cdktfprovidernewreliconedashboardpagewidgetheatmapnrqlquerypropertyquery)<span title="Required">*</span> | `string` | The NRQL query. |
| [`accountId`](#cdktfprovidernewreliconedashboardpagewidgetheatmapnrqlquerypropertyaccountid) | `number` | The account id used for the NRQL query. |

---

##### `query`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHeatmapNrqlQuery.property.query" id="cdktfprovidernewreliconedashboardpagewidgetheatmapnrqlquerypropertyquery"></a>

```typescript
public readonly query: string;
```

- *Type:* `string`

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHeatmapNrqlQuery.property.accountId" id="cdktfprovidernewreliconedashboardpagewidgetheatmapnrqlquerypropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetHistogram <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHistogram" id="cdktfprovidernewreliconedashboardpagewidgethistogram"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OneDashboardPageWidgetHistogram } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetHistogram: OneDashboardPageWidgetHistogram = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`column`](#cdktfprovidernewreliconedashboardpagewidgethistogrampropertycolumn)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| [`nrqlQuery`](#cdktfprovidernewreliconedashboardpagewidgethistogrampropertynrqlquery)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.OneDashboardPageWidgetHistogramNrqlQuery`](#@cdktf/provider-newrelic.OneDashboardPageWidgetHistogramNrqlQuery)[] | nrql_query block. |
| [`row`](#cdktfprovidernewreliconedashboardpagewidgethistogrampropertyrow)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| [`title`](#cdktfprovidernewreliconedashboardpagewidgethistogrampropertytitle)<span title="Required">*</span> | `string` | A title for the widget. |
| [`height`](#cdktfprovidernewreliconedashboardpagewidgethistogrampropertyheight) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| [`width`](#cdktfprovidernewreliconedashboardpagewidgethistogrampropertywidth) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `column`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHistogram.property.column" id="cdktfprovidernewreliconedashboardpagewidgethistogrampropertycolumn"></a>

```typescript
public readonly column: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `nrqlQuery`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHistogram.property.nrqlQuery" id="cdktfprovidernewreliconedashboardpagewidgethistogrampropertynrqlquery"></a>

```typescript
public readonly nrqlQuery: IResolvable | OneDashboardPageWidgetHistogramNrqlQuery[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.OneDashboardPageWidgetHistogramNrqlQuery`](#@cdktf/provider-newrelic.OneDashboardPageWidgetHistogramNrqlQuery)[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHistogram.property.row" id="cdktfprovidernewreliconedashboardpagewidgethistogrampropertyrow"></a>

```typescript
public readonly row: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHistogram.property.title" id="cdktfprovidernewreliconedashboardpagewidgethistogrampropertytitle"></a>

```typescript
public readonly title: string;
```

- *Type:* `string`

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `height`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHistogram.property.height" id="cdktfprovidernewreliconedashboardpagewidgethistogrampropertyheight"></a>

```typescript
public readonly height: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `width`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHistogram.property.width" id="cdktfprovidernewreliconedashboardpagewidgethistogrampropertywidth"></a>

```typescript
public readonly width: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetHistogramNrqlQuery <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHistogramNrqlQuery" id="cdktfprovidernewreliconedashboardpagewidgethistogramnrqlquery"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OneDashboardPageWidgetHistogramNrqlQuery } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetHistogramNrqlQuery: OneDashboardPageWidgetHistogramNrqlQuery = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`query`](#cdktfprovidernewreliconedashboardpagewidgethistogramnrqlquerypropertyquery)<span title="Required">*</span> | `string` | The NRQL query. |
| [`accountId`](#cdktfprovidernewreliconedashboardpagewidgethistogramnrqlquerypropertyaccountid) | `number` | The account id used for the NRQL query. |

---

##### `query`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHistogramNrqlQuery.property.query" id="cdktfprovidernewreliconedashboardpagewidgethistogramnrqlquerypropertyquery"></a>

```typescript
public readonly query: string;
```

- *Type:* `string`

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHistogramNrqlQuery.property.accountId" id="cdktfprovidernewreliconedashboardpagewidgethistogramnrqlquerypropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetJson <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetJson" id="cdktfprovidernewreliconedashboardpagewidgetjson"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OneDashboardPageWidgetJson } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetJson: OneDashboardPageWidgetJson = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`column`](#cdktfprovidernewreliconedashboardpagewidgetjsonpropertycolumn)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| [`nrqlQuery`](#cdktfprovidernewreliconedashboardpagewidgetjsonpropertynrqlquery)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.OneDashboardPageWidgetJsonNrqlQuery`](#@cdktf/provider-newrelic.OneDashboardPageWidgetJsonNrqlQuery)[] | nrql_query block. |
| [`row`](#cdktfprovidernewreliconedashboardpagewidgetjsonpropertyrow)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| [`title`](#cdktfprovidernewreliconedashboardpagewidgetjsonpropertytitle)<span title="Required">*</span> | `string` | A title for the widget. |
| [`height`](#cdktfprovidernewreliconedashboardpagewidgetjsonpropertyheight) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| [`width`](#cdktfprovidernewreliconedashboardpagewidgetjsonpropertywidth) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `column`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetJson.property.column" id="cdktfprovidernewreliconedashboardpagewidgetjsonpropertycolumn"></a>

```typescript
public readonly column: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `nrqlQuery`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetJson.property.nrqlQuery" id="cdktfprovidernewreliconedashboardpagewidgetjsonpropertynrqlquery"></a>

```typescript
public readonly nrqlQuery: IResolvable | OneDashboardPageWidgetJsonNrqlQuery[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.OneDashboardPageWidgetJsonNrqlQuery`](#@cdktf/provider-newrelic.OneDashboardPageWidgetJsonNrqlQuery)[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetJson.property.row" id="cdktfprovidernewreliconedashboardpagewidgetjsonpropertyrow"></a>

```typescript
public readonly row: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetJson.property.title" id="cdktfprovidernewreliconedashboardpagewidgetjsonpropertytitle"></a>

```typescript
public readonly title: string;
```

- *Type:* `string`

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `height`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetJson.property.height" id="cdktfprovidernewreliconedashboardpagewidgetjsonpropertyheight"></a>

```typescript
public readonly height: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `width`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetJson.property.width" id="cdktfprovidernewreliconedashboardpagewidgetjsonpropertywidth"></a>

```typescript
public readonly width: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetJsonNrqlQuery <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetJsonNrqlQuery" id="cdktfprovidernewreliconedashboardpagewidgetjsonnrqlquery"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OneDashboardPageWidgetJsonNrqlQuery } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetJsonNrqlQuery: OneDashboardPageWidgetJsonNrqlQuery = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`query`](#cdktfprovidernewreliconedashboardpagewidgetjsonnrqlquerypropertyquery)<span title="Required">*</span> | `string` | The NRQL query. |
| [`accountId`](#cdktfprovidernewreliconedashboardpagewidgetjsonnrqlquerypropertyaccountid) | `number` | The account id used for the NRQL query. |

---

##### `query`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetJsonNrqlQuery.property.query" id="cdktfprovidernewreliconedashboardpagewidgetjsonnrqlquerypropertyquery"></a>

```typescript
public readonly query: string;
```

- *Type:* `string`

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetJsonNrqlQuery.property.accountId" id="cdktfprovidernewreliconedashboardpagewidgetjsonnrqlquerypropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetLine <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetLine" id="cdktfprovidernewreliconedashboardpagewidgetline"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OneDashboardPageWidgetLine } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetLine: OneDashboardPageWidgetLine = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`column`](#cdktfprovidernewreliconedashboardpagewidgetlinepropertycolumn)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| [`nrqlQuery`](#cdktfprovidernewreliconedashboardpagewidgetlinepropertynrqlquery)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.OneDashboardPageWidgetLineNrqlQuery`](#@cdktf/provider-newrelic.OneDashboardPageWidgetLineNrqlQuery)[] | nrql_query block. |
| [`row`](#cdktfprovidernewreliconedashboardpagewidgetlinepropertyrow)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| [`title`](#cdktfprovidernewreliconedashboardpagewidgetlinepropertytitle)<span title="Required">*</span> | `string` | A title for the widget. |
| [`height`](#cdktfprovidernewreliconedashboardpagewidgetlinepropertyheight) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| [`width`](#cdktfprovidernewreliconedashboardpagewidgetlinepropertywidth) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `column`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetLine.property.column" id="cdktfprovidernewreliconedashboardpagewidgetlinepropertycolumn"></a>

```typescript
public readonly column: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `nrqlQuery`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetLine.property.nrqlQuery" id="cdktfprovidernewreliconedashboardpagewidgetlinepropertynrqlquery"></a>

```typescript
public readonly nrqlQuery: IResolvable | OneDashboardPageWidgetLineNrqlQuery[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.OneDashboardPageWidgetLineNrqlQuery`](#@cdktf/provider-newrelic.OneDashboardPageWidgetLineNrqlQuery)[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetLine.property.row" id="cdktfprovidernewreliconedashboardpagewidgetlinepropertyrow"></a>

```typescript
public readonly row: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetLine.property.title" id="cdktfprovidernewreliconedashboardpagewidgetlinepropertytitle"></a>

```typescript
public readonly title: string;
```

- *Type:* `string`

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `height`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetLine.property.height" id="cdktfprovidernewreliconedashboardpagewidgetlinepropertyheight"></a>

```typescript
public readonly height: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `width`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetLine.property.width" id="cdktfprovidernewreliconedashboardpagewidgetlinepropertywidth"></a>

```typescript
public readonly width: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetLineNrqlQuery <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetLineNrqlQuery" id="cdktfprovidernewreliconedashboardpagewidgetlinenrqlquery"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OneDashboardPageWidgetLineNrqlQuery } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetLineNrqlQuery: OneDashboardPageWidgetLineNrqlQuery = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`query`](#cdktfprovidernewreliconedashboardpagewidgetlinenrqlquerypropertyquery)<span title="Required">*</span> | `string` | The NRQL query. |
| [`accountId`](#cdktfprovidernewreliconedashboardpagewidgetlinenrqlquerypropertyaccountid) | `number` | The account id used for the NRQL query. |

---

##### `query`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetLineNrqlQuery.property.query" id="cdktfprovidernewreliconedashboardpagewidgetlinenrqlquerypropertyquery"></a>

```typescript
public readonly query: string;
```

- *Type:* `string`

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetLineNrqlQuery.property.accountId" id="cdktfprovidernewreliconedashboardpagewidgetlinenrqlquerypropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetMarkdown <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetMarkdown" id="cdktfprovidernewreliconedashboardpagewidgetmarkdown"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OneDashboardPageWidgetMarkdown } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetMarkdown: OneDashboardPageWidgetMarkdown = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`column`](#cdktfprovidernewreliconedashboardpagewidgetmarkdownpropertycolumn)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| [`row`](#cdktfprovidernewreliconedashboardpagewidgetmarkdownpropertyrow)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| [`title`](#cdktfprovidernewreliconedashboardpagewidgetmarkdownpropertytitle)<span title="Required">*</span> | `string` | A title for the widget. |
| [`height`](#cdktfprovidernewreliconedashboardpagewidgetmarkdownpropertyheight) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| [`text`](#cdktfprovidernewreliconedashboardpagewidgetmarkdownpropertytext) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#text OneDashboard#text}. |
| [`width`](#cdktfprovidernewreliconedashboardpagewidgetmarkdownpropertywidth) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `column`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetMarkdown.property.column" id="cdktfprovidernewreliconedashboardpagewidgetmarkdownpropertycolumn"></a>

```typescript
public readonly column: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `row`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetMarkdown.property.row" id="cdktfprovidernewreliconedashboardpagewidgetmarkdownpropertyrow"></a>

```typescript
public readonly row: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetMarkdown.property.title" id="cdktfprovidernewreliconedashboardpagewidgetmarkdownpropertytitle"></a>

```typescript
public readonly title: string;
```

- *Type:* `string`

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `height`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetMarkdown.property.height" id="cdktfprovidernewreliconedashboardpagewidgetmarkdownpropertyheight"></a>

```typescript
public readonly height: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `text`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetMarkdown.property.text" id="cdktfprovidernewreliconedashboardpagewidgetmarkdownpropertytext"></a>

```typescript
public readonly text: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#text OneDashboard#text}.

---

##### `width`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetMarkdown.property.width" id="cdktfprovidernewreliconedashboardpagewidgetmarkdownpropertywidth"></a>

```typescript
public readonly width: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetPie <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetPie" id="cdktfprovidernewreliconedashboardpagewidgetpie"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OneDashboardPageWidgetPie } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetPie: OneDashboardPageWidgetPie = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`column`](#cdktfprovidernewreliconedashboardpagewidgetpiepropertycolumn)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| [`nrqlQuery`](#cdktfprovidernewreliconedashboardpagewidgetpiepropertynrqlquery)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.OneDashboardPageWidgetPieNrqlQuery`](#@cdktf/provider-newrelic.OneDashboardPageWidgetPieNrqlQuery)[] | nrql_query block. |
| [`row`](#cdktfprovidernewreliconedashboardpagewidgetpiepropertyrow)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| [`title`](#cdktfprovidernewreliconedashboardpagewidgetpiepropertytitle)<span title="Required">*</span> | `string` | A title for the widget. |
| [`filterCurrentDashboard`](#cdktfprovidernewreliconedashboardpagewidgetpiepropertyfiltercurrentdashboard) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Use this item to filter the current dashboard. |
| [`height`](#cdktfprovidernewreliconedashboardpagewidgetpiepropertyheight) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| [`linkedEntityGuids`](#cdktfprovidernewreliconedashboardpagewidgetpiepropertylinkedentityguids) | `string`[] | Related entities. Currently only supports Dashboard entities, but may allow other cases in the future. |
| [`width`](#cdktfprovidernewreliconedashboardpagewidgetpiepropertywidth) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `column`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetPie.property.column" id="cdktfprovidernewreliconedashboardpagewidgetpiepropertycolumn"></a>

```typescript
public readonly column: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `nrqlQuery`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetPie.property.nrqlQuery" id="cdktfprovidernewreliconedashboardpagewidgetpiepropertynrqlquery"></a>

```typescript
public readonly nrqlQuery: IResolvable | OneDashboardPageWidgetPieNrqlQuery[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.OneDashboardPageWidgetPieNrqlQuery`](#@cdktf/provider-newrelic.OneDashboardPageWidgetPieNrqlQuery)[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetPie.property.row" id="cdktfprovidernewreliconedashboardpagewidgetpiepropertyrow"></a>

```typescript
public readonly row: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetPie.property.title" id="cdktfprovidernewreliconedashboardpagewidgetpiepropertytitle"></a>

```typescript
public readonly title: string;
```

- *Type:* `string`

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `filterCurrentDashboard`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetPie.property.filterCurrentDashboard" id="cdktfprovidernewreliconedashboardpagewidgetpiepropertyfiltercurrentdashboard"></a>

```typescript
public readonly filterCurrentDashboard: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Use this item to filter the current dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#filter_current_dashboard OneDashboard#filter_current_dashboard}

---

##### `height`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetPie.property.height" id="cdktfprovidernewreliconedashboardpagewidgetpiepropertyheight"></a>

```typescript
public readonly height: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `linkedEntityGuids`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetPie.property.linkedEntityGuids" id="cdktfprovidernewreliconedashboardpagewidgetpiepropertylinkedentityguids"></a>

```typescript
public readonly linkedEntityGuids: string[];
```

- *Type:* `string`[]

Related entities. Currently only supports Dashboard entities, but may allow other cases in the future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#linked_entity_guids OneDashboard#linked_entity_guids}

---

##### `width`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetPie.property.width" id="cdktfprovidernewreliconedashboardpagewidgetpiepropertywidth"></a>

```typescript
public readonly width: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetPieNrqlQuery <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetPieNrqlQuery" id="cdktfprovidernewreliconedashboardpagewidgetpienrqlquery"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OneDashboardPageWidgetPieNrqlQuery } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetPieNrqlQuery: OneDashboardPageWidgetPieNrqlQuery = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`query`](#cdktfprovidernewreliconedashboardpagewidgetpienrqlquerypropertyquery)<span title="Required">*</span> | `string` | The NRQL query. |
| [`accountId`](#cdktfprovidernewreliconedashboardpagewidgetpienrqlquerypropertyaccountid) | `number` | The account id used for the NRQL query. |

---

##### `query`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetPieNrqlQuery.property.query" id="cdktfprovidernewreliconedashboardpagewidgetpienrqlquerypropertyquery"></a>

```typescript
public readonly query: string;
```

- *Type:* `string`

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetPieNrqlQuery.property.accountId" id="cdktfprovidernewreliconedashboardpagewidgetpienrqlquerypropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetStackedBar <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetStackedBar" id="cdktfprovidernewreliconedashboardpagewidgetstackedbar"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OneDashboardPageWidgetStackedBar } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetStackedBar: OneDashboardPageWidgetStackedBar = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`column`](#cdktfprovidernewreliconedashboardpagewidgetstackedbarpropertycolumn)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| [`nrqlQuery`](#cdktfprovidernewreliconedashboardpagewidgetstackedbarpropertynrqlquery)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.OneDashboardPageWidgetStackedBarNrqlQuery`](#@cdktf/provider-newrelic.OneDashboardPageWidgetStackedBarNrqlQuery)[] | nrql_query block. |
| [`row`](#cdktfprovidernewreliconedashboardpagewidgetstackedbarpropertyrow)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| [`title`](#cdktfprovidernewreliconedashboardpagewidgetstackedbarpropertytitle)<span title="Required">*</span> | `string` | A title for the widget. |
| [`height`](#cdktfprovidernewreliconedashboardpagewidgetstackedbarpropertyheight) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| [`width`](#cdktfprovidernewreliconedashboardpagewidgetstackedbarpropertywidth) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `column`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetStackedBar.property.column" id="cdktfprovidernewreliconedashboardpagewidgetstackedbarpropertycolumn"></a>

```typescript
public readonly column: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `nrqlQuery`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetStackedBar.property.nrqlQuery" id="cdktfprovidernewreliconedashboardpagewidgetstackedbarpropertynrqlquery"></a>

```typescript
public readonly nrqlQuery: IResolvable | OneDashboardPageWidgetStackedBarNrqlQuery[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.OneDashboardPageWidgetStackedBarNrqlQuery`](#@cdktf/provider-newrelic.OneDashboardPageWidgetStackedBarNrqlQuery)[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetStackedBar.property.row" id="cdktfprovidernewreliconedashboardpagewidgetstackedbarpropertyrow"></a>

```typescript
public readonly row: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetStackedBar.property.title" id="cdktfprovidernewreliconedashboardpagewidgetstackedbarpropertytitle"></a>

```typescript
public readonly title: string;
```

- *Type:* `string`

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `height`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetStackedBar.property.height" id="cdktfprovidernewreliconedashboardpagewidgetstackedbarpropertyheight"></a>

```typescript
public readonly height: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `width`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetStackedBar.property.width" id="cdktfprovidernewreliconedashboardpagewidgetstackedbarpropertywidth"></a>

```typescript
public readonly width: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetStackedBarNrqlQuery <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetStackedBarNrqlQuery" id="cdktfprovidernewreliconedashboardpagewidgetstackedbarnrqlquery"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OneDashboardPageWidgetStackedBarNrqlQuery } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetStackedBarNrqlQuery: OneDashboardPageWidgetStackedBarNrqlQuery = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`query`](#cdktfprovidernewreliconedashboardpagewidgetstackedbarnrqlquerypropertyquery)<span title="Required">*</span> | `string` | The NRQL query. |
| [`accountId`](#cdktfprovidernewreliconedashboardpagewidgetstackedbarnrqlquerypropertyaccountid) | `number` | The account id used for the NRQL query. |

---

##### `query`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetStackedBarNrqlQuery.property.query" id="cdktfprovidernewreliconedashboardpagewidgetstackedbarnrqlquerypropertyquery"></a>

```typescript
public readonly query: string;
```

- *Type:* `string`

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetStackedBarNrqlQuery.property.accountId" id="cdktfprovidernewreliconedashboardpagewidgetstackedbarnrqlquerypropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetTable <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetTable" id="cdktfprovidernewreliconedashboardpagewidgettable"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OneDashboardPageWidgetTable } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetTable: OneDashboardPageWidgetTable = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`column`](#cdktfprovidernewreliconedashboardpagewidgettablepropertycolumn)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| [`nrqlQuery`](#cdktfprovidernewreliconedashboardpagewidgettablepropertynrqlquery)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.OneDashboardPageWidgetTableNrqlQuery`](#@cdktf/provider-newrelic.OneDashboardPageWidgetTableNrqlQuery)[] | nrql_query block. |
| [`row`](#cdktfprovidernewreliconedashboardpagewidgettablepropertyrow)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| [`title`](#cdktfprovidernewreliconedashboardpagewidgettablepropertytitle)<span title="Required">*</span> | `string` | A title for the widget. |
| [`filterCurrentDashboard`](#cdktfprovidernewreliconedashboardpagewidgettablepropertyfiltercurrentdashboard) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Use this item to filter the current dashboard. |
| [`height`](#cdktfprovidernewreliconedashboardpagewidgettablepropertyheight) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| [`linkedEntityGuids`](#cdktfprovidernewreliconedashboardpagewidgettablepropertylinkedentityguids) | `string`[] | Related entities. Currently only supports Dashboard entities, but may allow other cases in the future. |
| [`width`](#cdktfprovidernewreliconedashboardpagewidgettablepropertywidth) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `column`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetTable.property.column" id="cdktfprovidernewreliconedashboardpagewidgettablepropertycolumn"></a>

```typescript
public readonly column: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `nrqlQuery`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetTable.property.nrqlQuery" id="cdktfprovidernewreliconedashboardpagewidgettablepropertynrqlquery"></a>

```typescript
public readonly nrqlQuery: IResolvable | OneDashboardPageWidgetTableNrqlQuery[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.OneDashboardPageWidgetTableNrqlQuery`](#@cdktf/provider-newrelic.OneDashboardPageWidgetTableNrqlQuery)[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetTable.property.row" id="cdktfprovidernewreliconedashboardpagewidgettablepropertyrow"></a>

```typescript
public readonly row: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetTable.property.title" id="cdktfprovidernewreliconedashboardpagewidgettablepropertytitle"></a>

```typescript
public readonly title: string;
```

- *Type:* `string`

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `filterCurrentDashboard`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetTable.property.filterCurrentDashboard" id="cdktfprovidernewreliconedashboardpagewidgettablepropertyfiltercurrentdashboard"></a>

```typescript
public readonly filterCurrentDashboard: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Use this item to filter the current dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#filter_current_dashboard OneDashboard#filter_current_dashboard}

---

##### `height`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetTable.property.height" id="cdktfprovidernewreliconedashboardpagewidgettablepropertyheight"></a>

```typescript
public readonly height: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `linkedEntityGuids`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetTable.property.linkedEntityGuids" id="cdktfprovidernewreliconedashboardpagewidgettablepropertylinkedentityguids"></a>

```typescript
public readonly linkedEntityGuids: string[];
```

- *Type:* `string`[]

Related entities. Currently only supports Dashboard entities, but may allow other cases in the future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#linked_entity_guids OneDashboard#linked_entity_guids}

---

##### `width`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetTable.property.width" id="cdktfprovidernewreliconedashboardpagewidgettablepropertywidth"></a>

```typescript
public readonly width: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetTableNrqlQuery <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetTableNrqlQuery" id="cdktfprovidernewreliconedashboardpagewidgettablenrqlquery"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OneDashboardPageWidgetTableNrqlQuery } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetTableNrqlQuery: OneDashboardPageWidgetTableNrqlQuery = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`query`](#cdktfprovidernewreliconedashboardpagewidgettablenrqlquerypropertyquery)<span title="Required">*</span> | `string` | The NRQL query. |
| [`accountId`](#cdktfprovidernewreliconedashboardpagewidgettablenrqlquerypropertyaccountid) | `number` | The account id used for the NRQL query. |

---

##### `query`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetTableNrqlQuery.property.query" id="cdktfprovidernewreliconedashboardpagewidgettablenrqlquerypropertyquery"></a>

```typescript
public readonly query: string;
```

- *Type:* `string`

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetTableNrqlQuery.property.accountId" id="cdktfprovidernewreliconedashboardpagewidgettablenrqlquerypropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardRawConfig <a name="@cdktf/provider-newrelic.OneDashboardRawConfig" id="cdktfprovidernewreliconedashboardrawconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OneDashboardRawConfig } from '@cdktf/provider-newrelic'

const oneDashboardRawConfig: OneDashboardRawConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidernewreliconedashboardrawconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidernewreliconedashboardrawconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidernewreliconedashboardrawconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidernewreliconedashboardrawconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`name`](#cdktfprovidernewreliconedashboardrawconfigpropertyname)<span title="Required">*</span> | `string` | The dashboard's name. |
| [`page`](#cdktfprovidernewreliconedashboardrawconfigpropertypage)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.OneDashboardRawPage`](#@cdktf/provider-newrelic.OneDashboardRawPage)[] | page block. |
| [`accountId`](#cdktfprovidernewreliconedashboardrawconfigpropertyaccountid) | `number` | The New Relic account ID where you want to create the dashboard. |
| [`description`](#cdktfprovidernewreliconedashboardrawconfigpropertydescription) | `string` | The dashboard's description. |
| [`permissions`](#cdktfprovidernewreliconedashboardrawconfigpropertypermissions) | `string` | Determines who can see or edit the dashboard. Valid values are private, public_read_only, public_read_write. Defaults to public_read_only. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawConfig.property.count" id="cdktfprovidernewreliconedashboardrawconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawConfig.property.dependsOn" id="cdktfprovidernewreliconedashboardrawconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawConfig.property.lifecycle" id="cdktfprovidernewreliconedashboardrawconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawConfig.property.provider" id="cdktfprovidernewreliconedashboardrawconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawConfig.property.name" id="cdktfprovidernewreliconedashboardrawconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The dashboard's name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw#name OneDashboardRaw#name}

---

##### `page`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawConfig.property.page" id="cdktfprovidernewreliconedashboardrawconfigpropertypage"></a>

```typescript
public readonly page: IResolvable | OneDashboardRawPage[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.OneDashboardRawPage`](#@cdktf/provider-newrelic.OneDashboardRawPage)[]

page block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw#page OneDashboardRaw#page}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawConfig.property.accountId" id="cdktfprovidernewreliconedashboardrawconfigpropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The New Relic account ID where you want to create the dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw#account_id OneDashboardRaw#account_id}

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawConfig.property.description" id="cdktfprovidernewreliconedashboardrawconfigpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

The dashboard's description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw#description OneDashboardRaw#description}

---

##### `permissions`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawConfig.property.permissions" id="cdktfprovidernewreliconedashboardrawconfigpropertypermissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* `string`

Determines who can see or edit the dashboard. Valid values are private, public_read_only, public_read_write. Defaults to public_read_only.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw#permissions OneDashboardRaw#permissions}

---

### OneDashboardRawPage <a name="@cdktf/provider-newrelic.OneDashboardRawPage" id="cdktfprovidernewreliconedashboardrawpage"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OneDashboardRawPage } from '@cdktf/provider-newrelic'

const oneDashboardRawPage: OneDashboardRawPage = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`name`](#cdktfprovidernewreliconedashboardrawpagepropertyname)<span title="Required">*</span> | `string` | The dashboard page's name. |
| [`description`](#cdktfprovidernewreliconedashboardrawpagepropertydescription) | `string` | The dashboard page's description. |
| [`widget`](#cdktfprovidernewreliconedashboardrawpagepropertywidget) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.OneDashboardRawPageWidget`](#@cdktf/provider-newrelic.OneDashboardRawPageWidget)[] | widget block. |

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawPage.property.name" id="cdktfprovidernewreliconedashboardrawpagepropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The dashboard page's name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw#name OneDashboardRaw#name}

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawPage.property.description" id="cdktfprovidernewreliconedashboardrawpagepropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

The dashboard page's description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw#description OneDashboardRaw#description}

---

##### `widget`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawPage.property.widget" id="cdktfprovidernewreliconedashboardrawpagepropertywidget"></a>

```typescript
public readonly widget: IResolvable | OneDashboardRawPageWidget[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.OneDashboardRawPageWidget`](#@cdktf/provider-newrelic.OneDashboardRawPageWidget)[]

widget block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw#widget OneDashboardRaw#widget}

---

### OneDashboardRawPageWidget <a name="@cdktf/provider-newrelic.OneDashboardRawPageWidget" id="cdktfprovidernewreliconedashboardrawpagewidget"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OneDashboardRawPageWidget } from '@cdktf/provider-newrelic'

const oneDashboardRawPageWidget: OneDashboardRawPageWidget = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`column`](#cdktfprovidernewreliconedashboardrawpagewidgetpropertycolumn)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw#column OneDashboardRaw#column}. |
| [`configuration`](#cdktfprovidernewreliconedashboardrawpagewidgetpropertyconfiguration)<span title="Required">*</span> | `string` | The configuration of the widget. |
| [`row`](#cdktfprovidernewreliconedashboardrawpagewidgetpropertyrow)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw#row OneDashboardRaw#row}. |
| [`title`](#cdktfprovidernewreliconedashboardrawpagewidgetpropertytitle)<span title="Required">*</span> | `string` | A title for the widget. |
| [`visualizationId`](#cdktfprovidernewreliconedashboardrawpagewidgetpropertyvisualizationid)<span title="Required">*</span> | `string` | The visualization ID of the widget. |
| [`height`](#cdktfprovidernewreliconedashboardrawpagewidgetpropertyheight) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw#height OneDashboardRaw#height}. |
| [`linkedEntityGuids`](#cdktfprovidernewreliconedashboardrawpagewidgetpropertylinkedentityguids) | `string`[] | (Optional) Related entity GUIDs. Currently only supports Dashboard entity GUIDs. |
| [`width`](#cdktfprovidernewreliconedashboardrawpagewidgetpropertywidth) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw#width OneDashboardRaw#width}. |

---

##### `column`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawPageWidget.property.column" id="cdktfprovidernewreliconedashboardrawpagewidgetpropertycolumn"></a>

```typescript
public readonly column: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw#column OneDashboardRaw#column}.

---

##### `configuration`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawPageWidget.property.configuration" id="cdktfprovidernewreliconedashboardrawpagewidgetpropertyconfiguration"></a>

```typescript
public readonly configuration: string;
```

- *Type:* `string`

The configuration of the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw#configuration OneDashboardRaw#configuration}

---

##### `row`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawPageWidget.property.row" id="cdktfprovidernewreliconedashboardrawpagewidgetpropertyrow"></a>

```typescript
public readonly row: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw#row OneDashboardRaw#row}.

---

##### `title`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawPageWidget.property.title" id="cdktfprovidernewreliconedashboardrawpagewidgetpropertytitle"></a>

```typescript
public readonly title: string;
```

- *Type:* `string`

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw#title OneDashboardRaw#title}

---

##### `visualizationId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawPageWidget.property.visualizationId" id="cdktfprovidernewreliconedashboardrawpagewidgetpropertyvisualizationid"></a>

```typescript
public readonly visualizationId: string;
```

- *Type:* `string`

The visualization ID of the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw#visualization_id OneDashboardRaw#visualization_id}

---

##### `height`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawPageWidget.property.height" id="cdktfprovidernewreliconedashboardrawpagewidgetpropertyheight"></a>

```typescript
public readonly height: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw#height OneDashboardRaw#height}.

---

##### `linkedEntityGuids`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawPageWidget.property.linkedEntityGuids" id="cdktfprovidernewreliconedashboardrawpagewidgetpropertylinkedentityguids"></a>

```typescript
public readonly linkedEntityGuids: string[];
```

- *Type:* `string`[]

(Optional) Related entity GUIDs. Currently only supports Dashboard entity GUIDs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw#linked_entity_guids OneDashboardRaw#linked_entity_guids}

---

##### `width`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawPageWidget.property.width" id="cdktfprovidernewreliconedashboardrawpagewidgetpropertywidth"></a>

```typescript
public readonly width: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw#width OneDashboardRaw#width}.

---

### PluginsAlertConditionConfig <a name="@cdktf/provider-newrelic.PluginsAlertConditionConfig" id="cdktfprovidernewrelicpluginsalertconditionconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { PluginsAlertConditionConfig } from '@cdktf/provider-newrelic'

const pluginsAlertConditionConfig: PluginsAlertConditionConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidernewrelicpluginsalertconditionconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidernewrelicpluginsalertconditionconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidernewrelicpluginsalertconditionconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidernewrelicpluginsalertconditionconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`entities`](#cdktfprovidernewrelicpluginsalertconditionconfigpropertyentities)<span title="Required">*</span> | `number`[] | The plugin component IDs to target. |
| [`metric`](#cdktfprovidernewrelicpluginsalertconditionconfigpropertymetric)<span title="Required">*</span> | `string` | The plugin metric to evaluate. |
| [`metricDescription`](#cdktfprovidernewrelicpluginsalertconditionconfigpropertymetricdescription)<span title="Required">*</span> | `string` | The metric description. |
| [`name`](#cdktfprovidernewrelicpluginsalertconditionconfigpropertyname)<span title="Required">*</span> | `string` | The title of the condition. Must be between 1 and 64 characters, inclusive. |
| [`pluginGuid`](#cdktfprovidernewrelicpluginsalertconditionconfigpropertypluginguid)<span title="Required">*</span> | `string` | The GUID of the plugin which produces the metric. |
| [`pluginId`](#cdktfprovidernewrelicpluginsalertconditionconfigpropertypluginid)<span title="Required">*</span> | `string` | The ID of the installed plugin instance which produces the metric. |
| [`policyId`](#cdktfprovidernewrelicpluginsalertconditionconfigpropertypolicyid)<span title="Required">*</span> | `number` | The ID of the policy where this condition should be used. |
| [`term`](#cdktfprovidernewrelicpluginsalertconditionconfigpropertyterm)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.PluginsAlertConditionTerm`](#@cdktf/provider-newrelic.PluginsAlertConditionTerm)[] | term block. |
| [`valueFunction`](#cdktfprovidernewrelicpluginsalertconditionconfigpropertyvaluefunction)<span title="Required">*</span> | `string` | The value function to apply to the metric data.  One of `min`, `max`, `average`, `sample_size`, `total`, or `percent`. |
| [`enabled`](#cdktfprovidernewrelicpluginsalertconditionconfigpropertyenabled) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Whether or not this condition is enabled. |
| [`runbookUrl`](#cdktfprovidernewrelicpluginsalertconditionconfigpropertyrunbookurl) | `string` | Runbook URL to display in notifications. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionConfig.property.count" id="cdktfprovidernewrelicpluginsalertconditionconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionConfig.property.dependsOn" id="cdktfprovidernewrelicpluginsalertconditionconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionConfig.property.lifecycle" id="cdktfprovidernewrelicpluginsalertconditionconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionConfig.property.provider" id="cdktfprovidernewrelicpluginsalertconditionconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `entities`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionConfig.property.entities" id="cdktfprovidernewrelicpluginsalertconditionconfigpropertyentities"></a>

```typescript
public readonly entities: number[];
```

- *Type:* `number`[]

The plugin component IDs to target.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition#entities PluginsAlertCondition#entities}

---

##### `metric`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionConfig.property.metric" id="cdktfprovidernewrelicpluginsalertconditionconfigpropertymetric"></a>

```typescript
public readonly metric: string;
```

- *Type:* `string`

The plugin metric to evaluate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition#metric PluginsAlertCondition#metric}

---

##### `metricDescription`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionConfig.property.metricDescription" id="cdktfprovidernewrelicpluginsalertconditionconfigpropertymetricdescription"></a>

```typescript
public readonly metricDescription: string;
```

- *Type:* `string`

The metric description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition#metric_description PluginsAlertCondition#metric_description}

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionConfig.property.name" id="cdktfprovidernewrelicpluginsalertconditionconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The title of the condition. Must be between 1 and 64 characters, inclusive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition#name PluginsAlertCondition#name}

---

##### `pluginGuid`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionConfig.property.pluginGuid" id="cdktfprovidernewrelicpluginsalertconditionconfigpropertypluginguid"></a>

```typescript
public readonly pluginGuid: string;
```

- *Type:* `string`

The GUID of the plugin which produces the metric.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition#plugin_guid PluginsAlertCondition#plugin_guid}

---

##### `pluginId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionConfig.property.pluginId" id="cdktfprovidernewrelicpluginsalertconditionconfigpropertypluginid"></a>

```typescript
public readonly pluginId: string;
```

- *Type:* `string`

The ID of the installed plugin instance which produces the metric.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition#plugin_id PluginsAlertCondition#plugin_id}

---

##### `policyId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionConfig.property.policyId" id="cdktfprovidernewrelicpluginsalertconditionconfigpropertypolicyid"></a>

```typescript
public readonly policyId: number;
```

- *Type:* `number`

The ID of the policy where this condition should be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition#policy_id PluginsAlertCondition#policy_id}

---

##### `term`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionConfig.property.term" id="cdktfprovidernewrelicpluginsalertconditionconfigpropertyterm"></a>

```typescript
public readonly term: IResolvable | PluginsAlertConditionTerm[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.PluginsAlertConditionTerm`](#@cdktf/provider-newrelic.PluginsAlertConditionTerm)[]

term block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition#term PluginsAlertCondition#term}

---

##### `valueFunction`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionConfig.property.valueFunction" id="cdktfprovidernewrelicpluginsalertconditionconfigpropertyvaluefunction"></a>

```typescript
public readonly valueFunction: string;
```

- *Type:* `string`

The value function to apply to the metric data.  One of `min`, `max`, `average`, `sample_size`, `total`, or `percent`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition#value_function PluginsAlertCondition#value_function}

---

##### `enabled`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionConfig.property.enabled" id="cdktfprovidernewrelicpluginsalertconditionconfigpropertyenabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether or not this condition is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition#enabled PluginsAlertCondition#enabled}

---

##### `runbookUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionConfig.property.runbookUrl" id="cdktfprovidernewrelicpluginsalertconditionconfigpropertyrunbookurl"></a>

```typescript
public readonly runbookUrl: string;
```

- *Type:* `string`

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition#runbook_url PluginsAlertCondition#runbook_url}

---

### PluginsAlertConditionTerm <a name="@cdktf/provider-newrelic.PluginsAlertConditionTerm" id="cdktfprovidernewrelicpluginsalertconditionterm"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { PluginsAlertConditionTerm } from '@cdktf/provider-newrelic'

const pluginsAlertConditionTerm: PluginsAlertConditionTerm = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`duration`](#cdktfprovidernewrelicpluginsalertconditiontermpropertyduration)<span title="Required">*</span> | `number` | In minutes, must be in the range of 5 to 120, inclusive. |
| [`threshold`](#cdktfprovidernewrelicpluginsalertconditiontermpropertythreshold)<span title="Required">*</span> | `number` | Must be 0 or greater. |
| [`timeFunction`](#cdktfprovidernewrelicpluginsalertconditiontermpropertytimefunction)<span title="Required">*</span> | `string` | One of `all` or `any`. |
| [`operator`](#cdktfprovidernewrelicpluginsalertconditiontermpropertyoperator) | `string` | One of `above`, `below`, or `equal`. Defaults to equal. |
| [`priority`](#cdktfprovidernewrelicpluginsalertconditiontermpropertypriority) | `string` | One of `critical` or `warning`. Defaults to critical. |

---

##### `duration`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionTerm.property.duration" id="cdktfprovidernewrelicpluginsalertconditiontermpropertyduration"></a>

```typescript
public readonly duration: number;
```

- *Type:* `number`

In minutes, must be in the range of 5 to 120, inclusive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition#duration PluginsAlertCondition#duration}

---

##### `threshold`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionTerm.property.threshold" id="cdktfprovidernewrelicpluginsalertconditiontermpropertythreshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* `number`

Must be 0 or greater.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition#threshold PluginsAlertCondition#threshold}

---

##### `timeFunction`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionTerm.property.timeFunction" id="cdktfprovidernewrelicpluginsalertconditiontermpropertytimefunction"></a>

```typescript
public readonly timeFunction: string;
```

- *Type:* `string`

One of `all` or `any`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition#time_function PluginsAlertCondition#time_function}

---

##### `operator`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionTerm.property.operator" id="cdktfprovidernewrelicpluginsalertconditiontermpropertyoperator"></a>

```typescript
public readonly operator: string;
```

- *Type:* `string`

One of `above`, `below`, or `equal`. Defaults to equal.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition#operator PluginsAlertCondition#operator}

---

##### `priority`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionTerm.property.priority" id="cdktfprovidernewrelicpluginsalertconditiontermpropertypriority"></a>

```typescript
public readonly priority: string;
```

- *Type:* `string`

One of `critical` or `warning`. Defaults to critical.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition#priority PluginsAlertCondition#priority}

---

### ServiceLevelConfig <a name="@cdktf/provider-newrelic.ServiceLevelConfig" id="cdktfprovidernewrelicservicelevelconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ServiceLevelConfig } from '@cdktf/provider-newrelic'

const serviceLevelConfig: ServiceLevelConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidernewrelicservicelevelconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidernewrelicservicelevelconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidernewrelicservicelevelconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidernewrelicservicelevelconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`events`](#cdktfprovidernewrelicservicelevelconfigpropertyevents)<span title="Required">*</span> | [`@cdktf/provider-newrelic.ServiceLevelEvents`](#@cdktf/provider-newrelic.ServiceLevelEvents) | events block. |
| [`guid`](#cdktfprovidernewrelicservicelevelconfigpropertyguid)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#guid ServiceLevel#guid}. |
| [`name`](#cdktfprovidernewrelicservicelevelconfigpropertyname)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#name ServiceLevel#name}. |
| [`description`](#cdktfprovidernewrelicservicelevelconfigpropertydescription) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#description ServiceLevel#description}. |
| [`objective`](#cdktfprovidernewrelicservicelevelconfigpropertyobjective) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.ServiceLevelObjective`](#@cdktf/provider-newrelic.ServiceLevelObjective)[] | objective block. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelConfig.property.count" id="cdktfprovidernewrelicservicelevelconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelConfig.property.dependsOn" id="cdktfprovidernewrelicservicelevelconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelConfig.property.lifecycle" id="cdktfprovidernewrelicservicelevelconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelConfig.property.provider" id="cdktfprovidernewrelicservicelevelconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `events`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelConfig.property.events" id="cdktfprovidernewrelicservicelevelconfigpropertyevents"></a>

```typescript
public readonly events: ServiceLevelEvents;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelEvents`](#@cdktf/provider-newrelic.ServiceLevelEvents)

events block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#events ServiceLevel#events}

---

##### `guid`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelConfig.property.guid" id="cdktfprovidernewrelicservicelevelconfigpropertyguid"></a>

```typescript
public readonly guid: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#guid ServiceLevel#guid}.

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelConfig.property.name" id="cdktfprovidernewrelicservicelevelconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#name ServiceLevel#name}.

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelConfig.property.description" id="cdktfprovidernewrelicservicelevelconfigpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#description ServiceLevel#description}.

---

##### `objective`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelConfig.property.objective" id="cdktfprovidernewrelicservicelevelconfigpropertyobjective"></a>

```typescript
public readonly objective: IResolvable | ServiceLevelObjective[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.ServiceLevelObjective`](#@cdktf/provider-newrelic.ServiceLevelObjective)[]

objective block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#objective ServiceLevel#objective}

---

### ServiceLevelEvents <a name="@cdktf/provider-newrelic.ServiceLevelEvents" id="cdktfprovidernewrelicservicelevelevents"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ServiceLevelEvents } from '@cdktf/provider-newrelic'

const serviceLevelEvents: ServiceLevelEvents = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`accountId`](#cdktfprovidernewrelicserviceleveleventspropertyaccountid)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#account_id ServiceLevel#account_id}. |
| [`validEvents`](#cdktfprovidernewrelicserviceleveleventspropertyvalidevents)<span title="Required">*</span> | [`@cdktf/provider-newrelic.ServiceLevelEventsValidEvents`](#@cdktf/provider-newrelic.ServiceLevelEventsValidEvents) | valid_events block. |
| [`badEvents`](#cdktfprovidernewrelicserviceleveleventspropertybadevents) | [`@cdktf/provider-newrelic.ServiceLevelEventsBadEvents`](#@cdktf/provider-newrelic.ServiceLevelEventsBadEvents) | bad_events block. |
| [`goodEvents`](#cdktfprovidernewrelicserviceleveleventspropertygoodevents) | [`@cdktf/provider-newrelic.ServiceLevelEventsGoodEvents`](#@cdktf/provider-newrelic.ServiceLevelEventsGoodEvents) | good_events block. |

---

##### `accountId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEvents.property.accountId" id="cdktfprovidernewrelicserviceleveleventspropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#account_id ServiceLevel#account_id}.

---

##### `validEvents`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEvents.property.validEvents" id="cdktfprovidernewrelicserviceleveleventspropertyvalidevents"></a>

```typescript
public readonly validEvents: ServiceLevelEventsValidEvents;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelEventsValidEvents`](#@cdktf/provider-newrelic.ServiceLevelEventsValidEvents)

valid_events block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#valid_events ServiceLevel#valid_events}

---

##### `badEvents`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEvents.property.badEvents" id="cdktfprovidernewrelicserviceleveleventspropertybadevents"></a>

```typescript
public readonly badEvents: ServiceLevelEventsBadEvents;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelEventsBadEvents`](#@cdktf/provider-newrelic.ServiceLevelEventsBadEvents)

bad_events block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#bad_events ServiceLevel#bad_events}

---

##### `goodEvents`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEvents.property.goodEvents" id="cdktfprovidernewrelicserviceleveleventspropertygoodevents"></a>

```typescript
public readonly goodEvents: ServiceLevelEventsGoodEvents;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelEventsGoodEvents`](#@cdktf/provider-newrelic.ServiceLevelEventsGoodEvents)

good_events block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#good_events ServiceLevel#good_events}

---

### ServiceLevelEventsBadEvents <a name="@cdktf/provider-newrelic.ServiceLevelEventsBadEvents" id="cdktfprovidernewrelicserviceleveleventsbadevents"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ServiceLevelEventsBadEvents } from '@cdktf/provider-newrelic'

const serviceLevelEventsBadEvents: ServiceLevelEventsBadEvents = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`from`](#cdktfprovidernewrelicserviceleveleventsbadeventspropertyfrom)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#from ServiceLevel#from}. |
| [`where`](#cdktfprovidernewrelicserviceleveleventsbadeventspropertywhere) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#where ServiceLevel#where}. |

---

##### `from`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsBadEvents.property.from" id="cdktfprovidernewrelicserviceleveleventsbadeventspropertyfrom"></a>

```typescript
public readonly from: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#from ServiceLevel#from}.

---

##### `where`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsBadEvents.property.where" id="cdktfprovidernewrelicserviceleveleventsbadeventspropertywhere"></a>

```typescript
public readonly where: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#where ServiceLevel#where}.

---

### ServiceLevelEventsGoodEvents <a name="@cdktf/provider-newrelic.ServiceLevelEventsGoodEvents" id="cdktfprovidernewrelicserviceleveleventsgoodevents"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ServiceLevelEventsGoodEvents } from '@cdktf/provider-newrelic'

const serviceLevelEventsGoodEvents: ServiceLevelEventsGoodEvents = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`from`](#cdktfprovidernewrelicserviceleveleventsgoodeventspropertyfrom)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#from ServiceLevel#from}. |
| [`where`](#cdktfprovidernewrelicserviceleveleventsgoodeventspropertywhere) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#where ServiceLevel#where}. |

---

##### `from`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsGoodEvents.property.from" id="cdktfprovidernewrelicserviceleveleventsgoodeventspropertyfrom"></a>

```typescript
public readonly from: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#from ServiceLevel#from}.

---

##### `where`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsGoodEvents.property.where" id="cdktfprovidernewrelicserviceleveleventsgoodeventspropertywhere"></a>

```typescript
public readonly where: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#where ServiceLevel#where}.

---

### ServiceLevelEventsValidEvents <a name="@cdktf/provider-newrelic.ServiceLevelEventsValidEvents" id="cdktfprovidernewrelicserviceleveleventsvalidevents"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ServiceLevelEventsValidEvents } from '@cdktf/provider-newrelic'

const serviceLevelEventsValidEvents: ServiceLevelEventsValidEvents = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`from`](#cdktfprovidernewrelicserviceleveleventsvalideventspropertyfrom)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#from ServiceLevel#from}. |
| [`where`](#cdktfprovidernewrelicserviceleveleventsvalideventspropertywhere) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#where ServiceLevel#where}. |

---

##### `from`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsValidEvents.property.from" id="cdktfprovidernewrelicserviceleveleventsvalideventspropertyfrom"></a>

```typescript
public readonly from: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#from ServiceLevel#from}.

---

##### `where`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsValidEvents.property.where" id="cdktfprovidernewrelicserviceleveleventsvalideventspropertywhere"></a>

```typescript
public readonly where: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#where ServiceLevel#where}.

---

### ServiceLevelObjective <a name="@cdktf/provider-newrelic.ServiceLevelObjective" id="cdktfprovidernewrelicservicelevelobjective"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ServiceLevelObjective } from '@cdktf/provider-newrelic'

const serviceLevelObjective: ServiceLevelObjective = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`target`](#cdktfprovidernewrelicservicelevelobjectivepropertytarget)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#target ServiceLevel#target}. |
| [`timeWindow`](#cdktfprovidernewrelicservicelevelobjectivepropertytimewindow)<span title="Required">*</span> | [`@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindow`](#@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindow) | time_window block. |
| [`description`](#cdktfprovidernewrelicservicelevelobjectivepropertydescription) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#description ServiceLevel#description}. |
| [`name`](#cdktfprovidernewrelicservicelevelobjectivepropertyname) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#name ServiceLevel#name}. |

---

##### `target`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjective.property.target" id="cdktfprovidernewrelicservicelevelobjectivepropertytarget"></a>

```typescript
public readonly target: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#target ServiceLevel#target}.

---

##### `timeWindow`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjective.property.timeWindow" id="cdktfprovidernewrelicservicelevelobjectivepropertytimewindow"></a>

```typescript
public readonly timeWindow: ServiceLevelObjectiveTimeWindow;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindow`](#@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindow)

time_window block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#time_window ServiceLevel#time_window}

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjective.property.description" id="cdktfprovidernewrelicservicelevelobjectivepropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#description ServiceLevel#description}.

---

##### `name`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjective.property.name" id="cdktfprovidernewrelicservicelevelobjectivepropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#name ServiceLevel#name}.

---

### ServiceLevelObjectiveTimeWindow <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindow" id="cdktfprovidernewrelicservicelevelobjectivetimewindow"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ServiceLevelObjectiveTimeWindow } from '@cdktf/provider-newrelic'

const serviceLevelObjectiveTimeWindow: ServiceLevelObjectiveTimeWindow = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`rolling`](#cdktfprovidernewrelicservicelevelobjectivetimewindowpropertyrolling)<span title="Required">*</span> | [`@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRolling`](#@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRolling) | rolling block. |

---

##### `rolling`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindow.property.rolling" id="cdktfprovidernewrelicservicelevelobjectivetimewindowpropertyrolling"></a>

```typescript
public readonly rolling: ServiceLevelObjectiveTimeWindowRolling;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRolling`](#@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRolling)

rolling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#rolling ServiceLevel#rolling}

---

### ServiceLevelObjectiveTimeWindowRolling <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRolling" id="cdktfprovidernewrelicservicelevelobjectivetimewindowrolling"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ServiceLevelObjectiveTimeWindowRolling } from '@cdktf/provider-newrelic'

const serviceLevelObjectiveTimeWindowRolling: ServiceLevelObjectiveTimeWindowRolling = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidernewrelicservicelevelobjectivetimewindowrollingpropertycount)<span title="Required">*</span> | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#count ServiceLevel#count}. |
| [`unit`](#cdktfprovidernewrelicservicelevelobjectivetimewindowrollingpropertyunit)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#unit ServiceLevel#unit}. |

---

##### `count`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRolling.property.count" id="cdktfprovidernewrelicservicelevelobjectivetimewindowrollingpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#count ServiceLevel#count}.

---

##### `unit`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRolling.property.unit" id="cdktfprovidernewrelicservicelevelobjectivetimewindowrollingpropertyunit"></a>

```typescript
public readonly unit: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#unit ServiceLevel#unit}.

---

### SyntheticsAlertConditionConfig <a name="@cdktf/provider-newrelic.SyntheticsAlertConditionConfig" id="cdktfprovidernewrelicsyntheticsalertconditionconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { SyntheticsAlertConditionConfig } from '@cdktf/provider-newrelic'

const syntheticsAlertConditionConfig: SyntheticsAlertConditionConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidernewrelicsyntheticsalertconditionconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidernewrelicsyntheticsalertconditionconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidernewrelicsyntheticsalertconditionconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidernewrelicsyntheticsalertconditionconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`monitorId`](#cdktfprovidernewrelicsyntheticsalertconditionconfigpropertymonitorid)<span title="Required">*</span> | `string` | The ID of the Synthetics monitor to be referenced in the alert condition. |
| [`name`](#cdktfprovidernewrelicsyntheticsalertconditionconfigpropertyname)<span title="Required">*</span> | `string` | The title of this condition. |
| [`policyId`](#cdktfprovidernewrelicsyntheticsalertconditionconfigpropertypolicyid)<span title="Required">*</span> | `number` | The ID of the policy where this condition should be used. |
| [`enabled`](#cdktfprovidernewrelicsyntheticsalertconditionconfigpropertyenabled) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Set whether to enable the alert condition. Defaults to true. |
| [`runbookUrl`](#cdktfprovidernewrelicsyntheticsalertconditionconfigpropertyrunbookurl) | `string` | Runbook URL to display in notifications. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertConditionConfig.property.count" id="cdktfprovidernewrelicsyntheticsalertconditionconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertConditionConfig.property.dependsOn" id="cdktfprovidernewrelicsyntheticsalertconditionconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertConditionConfig.property.lifecycle" id="cdktfprovidernewrelicsyntheticsalertconditionconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertConditionConfig.property.provider" id="cdktfprovidernewrelicsyntheticsalertconditionconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `monitorId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertConditionConfig.property.monitorId" id="cdktfprovidernewrelicsyntheticsalertconditionconfigpropertymonitorid"></a>

```typescript
public readonly monitorId: string;
```

- *Type:* `string`

The ID of the Synthetics monitor to be referenced in the alert condition.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_alert_condition#monitor_id SyntheticsAlertCondition#monitor_id}

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertConditionConfig.property.name" id="cdktfprovidernewrelicsyntheticsalertconditionconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The title of this condition.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_alert_condition#name SyntheticsAlertCondition#name}

---

##### `policyId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertConditionConfig.property.policyId" id="cdktfprovidernewrelicsyntheticsalertconditionconfigpropertypolicyid"></a>

```typescript
public readonly policyId: number;
```

- *Type:* `number`

The ID of the policy where this condition should be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_alert_condition#policy_id SyntheticsAlertCondition#policy_id}

---

##### `enabled`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertConditionConfig.property.enabled" id="cdktfprovidernewrelicsyntheticsalertconditionconfigpropertyenabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Set whether to enable the alert condition. Defaults to true.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_alert_condition#enabled SyntheticsAlertCondition#enabled}

---

##### `runbookUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertConditionConfig.property.runbookUrl" id="cdktfprovidernewrelicsyntheticsalertconditionconfigpropertyrunbookurl"></a>

```typescript
public readonly runbookUrl: string;
```

- *Type:* `string`

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_alert_condition#runbook_url SyntheticsAlertCondition#runbook_url}

---

### SyntheticsMonitorConfig <a name="@cdktf/provider-newrelic.SyntheticsMonitorConfig" id="cdktfprovidernewrelicsyntheticsmonitorconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { SyntheticsMonitorConfig } from '@cdktf/provider-newrelic'

const syntheticsMonitorConfig: SyntheticsMonitorConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidernewrelicsyntheticsmonitorconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidernewrelicsyntheticsmonitorconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidernewrelicsyntheticsmonitorconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidernewrelicsyntheticsmonitorconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`frequency`](#cdktfprovidernewrelicsyntheticsmonitorconfigpropertyfrequency)<span title="Required">*</span> | `number` | The interval (in minutes) at which this monitor should run. |
| [`locations`](#cdktfprovidernewrelicsyntheticsmonitorconfigpropertylocations)<span title="Required">*</span> | `string`[] | The locations in which this monitor should be run. |
| [`name`](#cdktfprovidernewrelicsyntheticsmonitorconfigpropertyname)<span title="Required">*</span> | `string` | The title of this monitor. |
| [`status`](#cdktfprovidernewrelicsyntheticsmonitorconfigpropertystatus)<span title="Required">*</span> | `string` | The monitor status (i.e. ENABLED, MUTED, DISABLED). |
| [`type`](#cdktfprovidernewrelicsyntheticsmonitorconfigpropertytype)<span title="Required">*</span> | `string` | The monitor type. Valid values are SIMPLE, BROWSER, SCRIPT_BROWSER, and SCRIPT_API. |
| [`bypassHeadRequest`](#cdktfprovidernewrelicsyntheticsmonitorconfigpropertybypassheadrequest) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Bypass HEAD request. |
| [`slaThreshold`](#cdktfprovidernewrelicsyntheticsmonitorconfigpropertyslathreshold) | `number` | The base threshold (in seconds) to calculate the apdex score for use in the SLA report. (Default 7 seconds). |
| [`treatRedirectAsFailure`](#cdktfprovidernewrelicsyntheticsmonitorconfigpropertytreatredirectasfailure) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Fail the monitor check if redirected. |
| [`uri`](#cdktfprovidernewrelicsyntheticsmonitorconfigpropertyuri) | `string` | The URI for the monitor to hit. |
| [`validationString`](#cdktfprovidernewrelicsyntheticsmonitorconfigpropertyvalidationstring) | `string` | The string to validate against in the response. |
| [`verifySsl`](#cdktfprovidernewrelicsyntheticsmonitorconfigpropertyverifyssl) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Verify SSL. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorConfig.property.count" id="cdktfprovidernewrelicsyntheticsmonitorconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorConfig.property.dependsOn" id="cdktfprovidernewrelicsyntheticsmonitorconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorConfig.property.lifecycle" id="cdktfprovidernewrelicsyntheticsmonitorconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorConfig.property.provider" id="cdktfprovidernewrelicsyntheticsmonitorconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `frequency`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorConfig.property.frequency" id="cdktfprovidernewrelicsyntheticsmonitorconfigpropertyfrequency"></a>

```typescript
public readonly frequency: number;
```

- *Type:* `number`

The interval (in minutes) at which this monitor should run.

Valid values are 1, 5, 10, 15, 30, 60, 360, 720, or 1440.  Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor#frequency SyntheticsMonitor#frequency}

---

##### `locations`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorConfig.property.locations" id="cdktfprovidernewrelicsyntheticsmonitorconfigpropertylocations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* `string`[]

The locations in which this monitor should be run.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor#locations SyntheticsMonitor#locations}

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorConfig.property.name" id="cdktfprovidernewrelicsyntheticsmonitorconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The title of this monitor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor#name SyntheticsMonitor#name}

---

##### `status`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorConfig.property.status" id="cdktfprovidernewrelicsyntheticsmonitorconfigpropertystatus"></a>

```typescript
public readonly status: string;
```

- *Type:* `string`

The monitor status (i.e. ENABLED, MUTED, DISABLED).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor#status SyntheticsMonitor#status}

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorConfig.property.type" id="cdktfprovidernewrelicsyntheticsmonitorconfigpropertytype"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

The monitor type. Valid values are SIMPLE, BROWSER, SCRIPT_BROWSER, and SCRIPT_API.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor#type SyntheticsMonitor#type}

---

##### `bypassHeadRequest`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorConfig.property.bypassHeadRequest" id="cdktfprovidernewrelicsyntheticsmonitorconfigpropertybypassheadrequest"></a>

```typescript
public readonly bypassHeadRequest: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Bypass HEAD request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor#bypass_head_request SyntheticsMonitor#bypass_head_request}

---

##### `slaThreshold`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorConfig.property.slaThreshold" id="cdktfprovidernewrelicsyntheticsmonitorconfigpropertyslathreshold"></a>

```typescript
public readonly slaThreshold: number;
```

- *Type:* `number`

The base threshold (in seconds) to calculate the apdex score for use in the SLA report. (Default 7 seconds).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor#sla_threshold SyntheticsMonitor#sla_threshold}

---

##### `treatRedirectAsFailure`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorConfig.property.treatRedirectAsFailure" id="cdktfprovidernewrelicsyntheticsmonitorconfigpropertytreatredirectasfailure"></a>

```typescript
public readonly treatRedirectAsFailure: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Fail the monitor check if redirected.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor#treat_redirect_as_failure SyntheticsMonitor#treat_redirect_as_failure}

---

##### `uri`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorConfig.property.uri" id="cdktfprovidernewrelicsyntheticsmonitorconfigpropertyuri"></a>

```typescript
public readonly uri: string;
```

- *Type:* `string`

The URI for the monitor to hit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor#uri SyntheticsMonitor#uri}

---

##### `validationString`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorConfig.property.validationString" id="cdktfprovidernewrelicsyntheticsmonitorconfigpropertyvalidationstring"></a>

```typescript
public readonly validationString: string;
```

- *Type:* `string`

The string to validate against in the response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor#validation_string SyntheticsMonitor#validation_string}

---

##### `verifySsl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorConfig.property.verifySsl" id="cdktfprovidernewrelicsyntheticsmonitorconfigpropertyverifyssl"></a>

```typescript
public readonly verifySsl: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Verify SSL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor#verify_ssl SyntheticsMonitor#verify_ssl}

---

### SyntheticsMonitorScriptConfig <a name="@cdktf/provider-newrelic.SyntheticsMonitorScriptConfig" id="cdktfprovidernewrelicsyntheticsmonitorscriptconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { SyntheticsMonitorScriptConfig } from '@cdktf/provider-newrelic'

const syntheticsMonitorScriptConfig: SyntheticsMonitorScriptConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidernewrelicsyntheticsmonitorscriptconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidernewrelicsyntheticsmonitorscriptconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidernewrelicsyntheticsmonitorscriptconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidernewrelicsyntheticsmonitorscriptconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`monitorId`](#cdktfprovidernewrelicsyntheticsmonitorscriptconfigpropertymonitorid)<span title="Required">*</span> | `string` | The ID of the monitor to attach the script to. |
| [`text`](#cdktfprovidernewrelicsyntheticsmonitorscriptconfigpropertytext)<span title="Required">*</span> | `string` | The plaintext representing the monitor script. |
| [`location`](#cdktfprovidernewrelicsyntheticsmonitorscriptconfigpropertylocation) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.SyntheticsMonitorScriptLocation`](#@cdktf/provider-newrelic.SyntheticsMonitorScriptLocation)[] | location block. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScriptConfig.property.count" id="cdktfprovidernewrelicsyntheticsmonitorscriptconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScriptConfig.property.dependsOn" id="cdktfprovidernewrelicsyntheticsmonitorscriptconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScriptConfig.property.lifecycle" id="cdktfprovidernewrelicsyntheticsmonitorscriptconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScriptConfig.property.provider" id="cdktfprovidernewrelicsyntheticsmonitorscriptconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `monitorId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScriptConfig.property.monitorId" id="cdktfprovidernewrelicsyntheticsmonitorscriptconfigpropertymonitorid"></a>

```typescript
public readonly monitorId: string;
```

- *Type:* `string`

The ID of the monitor to attach the script to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor_script#monitor_id SyntheticsMonitorScript#monitor_id}

---

##### `text`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScriptConfig.property.text" id="cdktfprovidernewrelicsyntheticsmonitorscriptconfigpropertytext"></a>

```typescript
public readonly text: string;
```

- *Type:* `string`

The plaintext representing the monitor script.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor_script#text SyntheticsMonitorScript#text}

---

##### `location`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScriptConfig.property.location" id="cdktfprovidernewrelicsyntheticsmonitorscriptconfigpropertylocation"></a>

```typescript
public readonly location: IResolvable | SyntheticsMonitorScriptLocation[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.SyntheticsMonitorScriptLocation`](#@cdktf/provider-newrelic.SyntheticsMonitorScriptLocation)[]

location block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor_script#location SyntheticsMonitorScript#location}

---

### SyntheticsMonitorScriptLocation <a name="@cdktf/provider-newrelic.SyntheticsMonitorScriptLocation" id="cdktfprovidernewrelicsyntheticsmonitorscriptlocation"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { SyntheticsMonitorScriptLocation } from '@cdktf/provider-newrelic'

const syntheticsMonitorScriptLocation: SyntheticsMonitorScriptLocation = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`name`](#cdktfprovidernewrelicsyntheticsmonitorscriptlocationpropertyname)<span title="Required">*</span> | `string` | The monitor script location name. |
| [`hmac`](#cdktfprovidernewrelicsyntheticsmonitorscriptlocationpropertyhmac) | `string` | The HMAC for the monitor script location. Use only one of `hmac` or `vse_password.`. |
| [`vsePassword`](#cdktfprovidernewrelicsyntheticsmonitorscriptlocationpropertyvsepassword) | `string` | The password for the monitor script location used to calculate HMAC. Use only one of `vse_password` or `hmac.`. |

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScriptLocation.property.name" id="cdktfprovidernewrelicsyntheticsmonitorscriptlocationpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The monitor script location name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor_script#name SyntheticsMonitorScript#name}

---

##### `hmac`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScriptLocation.property.hmac" id="cdktfprovidernewrelicsyntheticsmonitorscriptlocationpropertyhmac"></a>

```typescript
public readonly hmac: string;
```

- *Type:* `string`

The HMAC for the monitor script location. Use only one of `hmac` or `vse_password.`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor_script#hmac SyntheticsMonitorScript#hmac}

---

##### `vsePassword`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScriptLocation.property.vsePassword" id="cdktfprovidernewrelicsyntheticsmonitorscriptlocationpropertyvsepassword"></a>

```typescript
public readonly vsePassword: string;
```

- *Type:* `string`

The password for the monitor script location used to calculate HMAC. Use only one of `vse_password` or `hmac.`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor_script#vse_password SyntheticsMonitorScript#vse_password}

---

### SyntheticsMultilocationAlertConditionConfig <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionConfig" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { SyntheticsMultilocationAlertConditionConfig } from '@cdktf/provider-newrelic'

const syntheticsMultilocationAlertConditionConfig: SyntheticsMultilocationAlertConditionConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`critical`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionconfigpropertycritical)<span title="Required">*</span> | [`@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCritical`](#@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCritical) | critical block. |
| [`entities`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionconfigpropertyentities)<span title="Required">*</span> | `string`[] | The GUIDs of the Synthetics monitors to alert on. |
| [`name`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionconfigpropertyname)<span title="Required">*</span> | `string` | The title of this condition. |
| [`policyId`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionconfigpropertypolicyid)<span title="Required">*</span> | `number` | The ID of the policy where this condition will be used. |
| [`violationTimeLimitSeconds`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionconfigpropertyviolationtimelimitseconds)<span title="Required">*</span> | `number` | The maximum number of seconds a violation can remain open before being closed by the system. |
| [`enabled`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionconfigpropertyenabled) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Set whether to enable the alert condition. Defaults to true. |
| [`runbookUrl`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionconfigpropertyrunbookurl) | `string` | Runbook URL to display in notifications. |
| [`warning`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionconfigpropertywarning) | [`@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarning`](#@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarning) | warning block. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionConfig.property.count" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionConfig.property.dependsOn" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionConfig.property.lifecycle" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionConfig.property.provider" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `critical`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionConfig.property.critical" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionconfigpropertycritical"></a>

```typescript
public readonly critical: SyntheticsMultilocationAlertConditionCritical;
```

- *Type:* [`@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCritical`](#@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCritical)

critical block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_multilocation_alert_condition#critical SyntheticsMultilocationAlertCondition#critical}

---

##### `entities`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionConfig.property.entities" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionconfigpropertyentities"></a>

```typescript
public readonly entities: string[];
```

- *Type:* `string`[]

The GUIDs of the Synthetics monitors to alert on.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_multilocation_alert_condition#entities SyntheticsMultilocationAlertCondition#entities}

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionConfig.property.name" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The title of this condition.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_multilocation_alert_condition#name SyntheticsMultilocationAlertCondition#name}

---

##### `policyId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionConfig.property.policyId" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionconfigpropertypolicyid"></a>

```typescript
public readonly policyId: number;
```

- *Type:* `number`

The ID of the policy where this condition will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_multilocation_alert_condition#policy_id SyntheticsMultilocationAlertCondition#policy_id}

---

##### `violationTimeLimitSeconds`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionConfig.property.violationTimeLimitSeconds" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionconfigpropertyviolationtimelimitseconds"></a>

```typescript
public readonly violationTimeLimitSeconds: number;
```

- *Type:* `number`

The maximum number of seconds a violation can remain open before being closed by the system.

Must be one of: 0, 3600, 7200, 14400, 28800, 43200, 86400  Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_multilocation_alert_condition#violation_time_limit_seconds SyntheticsMultilocationAlertCondition#violation_time_limit_seconds}

---

##### `enabled`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionConfig.property.enabled" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionconfigpropertyenabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Set whether to enable the alert condition. Defaults to true.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_multilocation_alert_condition#enabled SyntheticsMultilocationAlertCondition#enabled}

---

##### `runbookUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionConfig.property.runbookUrl" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionconfigpropertyrunbookurl"></a>

```typescript
public readonly runbookUrl: string;
```

- *Type:* `string`

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_multilocation_alert_condition#runbook_url SyntheticsMultilocationAlertCondition#runbook_url}

---

##### `warning`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionConfig.property.warning" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionconfigpropertywarning"></a>

```typescript
public readonly warning: SyntheticsMultilocationAlertConditionWarning;
```

- *Type:* [`@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarning`](#@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarning)

warning block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_multilocation_alert_condition#warning SyntheticsMultilocationAlertCondition#warning}

---

### SyntheticsMultilocationAlertConditionCritical <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCritical" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditioncritical"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { SyntheticsMultilocationAlertConditionCritical } from '@cdktf/provider-newrelic'

const syntheticsMultilocationAlertConditionCritical: SyntheticsMultilocationAlertConditionCritical = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`threshold`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditioncriticalpropertythreshold)<span title="Required">*</span> | `number` | The minimum number of monitor locations that must be concurrently failing before a violation is opened. |

---

##### `threshold`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCritical.property.threshold" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditioncriticalpropertythreshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* `number`

The minimum number of monitor locations that must be concurrently failing before a violation is opened.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_multilocation_alert_condition#threshold SyntheticsMultilocationAlertCondition#threshold}

---

### SyntheticsMultilocationAlertConditionWarning <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarning" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionwarning"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { SyntheticsMultilocationAlertConditionWarning } from '@cdktf/provider-newrelic'

const syntheticsMultilocationAlertConditionWarning: SyntheticsMultilocationAlertConditionWarning = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`threshold`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionwarningpropertythreshold)<span title="Required">*</span> | `number` | The minimum number of monitor locations that must be concurrently failing before a violation is opened. |

---

##### `threshold`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarning.property.threshold" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionwarningpropertythreshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* `number`

The minimum number of monitor locations that must be concurrently failing before a violation is opened.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_multilocation_alert_condition#threshold SyntheticsMultilocationAlertCondition#threshold}

---

### SyntheticsSecureCredentialConfig <a name="@cdktf/provider-newrelic.SyntheticsSecureCredentialConfig" id="cdktfprovidernewrelicsyntheticssecurecredentialconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { SyntheticsSecureCredentialConfig } from '@cdktf/provider-newrelic'

const syntheticsSecureCredentialConfig: SyntheticsSecureCredentialConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidernewrelicsyntheticssecurecredentialconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidernewrelicsyntheticssecurecredentialconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidernewrelicsyntheticssecurecredentialconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidernewrelicsyntheticssecurecredentialconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`key`](#cdktfprovidernewrelicsyntheticssecurecredentialconfigpropertykey)<span title="Required">*</span> | `string` | The secure credential's key name. |
| [`value`](#cdktfprovidernewrelicsyntheticssecurecredentialconfigpropertyvalue)<span title="Required">*</span> | `string` | The secure credential's value. |
| [`createdAt`](#cdktfprovidernewrelicsyntheticssecurecredentialconfigpropertycreatedat) | `string` | The time the secure credential was created. |
| [`description`](#cdktfprovidernewrelicsyntheticssecurecredentialconfigpropertydescription) | `string` | The secure credential's description. |
| [`lastUpdated`](#cdktfprovidernewrelicsyntheticssecurecredentialconfigpropertylastupdated) | `string` | The time the secure credential was last updated. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredentialConfig.property.count" id="cdktfprovidernewrelicsyntheticssecurecredentialconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredentialConfig.property.dependsOn" id="cdktfprovidernewrelicsyntheticssecurecredentialconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredentialConfig.property.lifecycle" id="cdktfprovidernewrelicsyntheticssecurecredentialconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredentialConfig.property.provider" id="cdktfprovidernewrelicsyntheticssecurecredentialconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `key`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredentialConfig.property.key" id="cdktfprovidernewrelicsyntheticssecurecredentialconfigpropertykey"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

The secure credential's key name.

Regardless of the case used in the configuration, the provider will provide an upcased key to the underlying API.  Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_secure_credential#key SyntheticsSecureCredential#key}

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredentialConfig.property.value" id="cdktfprovidernewrelicsyntheticssecurecredentialconfigpropertyvalue"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

The secure credential's value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_secure_credential#value SyntheticsSecureCredential#value}

---

##### `createdAt`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredentialConfig.property.createdAt" id="cdktfprovidernewrelicsyntheticssecurecredentialconfigpropertycreatedat"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* `string`

The time the secure credential was created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_secure_credential#created_at SyntheticsSecureCredential#created_at}

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredentialConfig.property.description" id="cdktfprovidernewrelicsyntheticssecurecredentialconfigpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

The secure credential's description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_secure_credential#description SyntheticsSecureCredential#description}

---

##### `lastUpdated`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredentialConfig.property.lastUpdated" id="cdktfprovidernewrelicsyntheticssecurecredentialconfigpropertylastupdated"></a>

```typescript
public readonly lastUpdated: string;
```

- *Type:* `string`

The time the secure credential was last updated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_secure_credential#last_updated SyntheticsSecureCredential#last_updated}

---

### WorkloadConfig <a name="@cdktf/provider-newrelic.WorkloadConfig" id="cdktfprovidernewrelicworkloadconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { WorkloadConfig } from '@cdktf/provider-newrelic'

const workloadConfig: WorkloadConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidernewrelicworkloadconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidernewrelicworkloadconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidernewrelicworkloadconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidernewrelicworkloadconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`name`](#cdktfprovidernewrelicworkloadconfigpropertyname)<span title="Required">*</span> | `string` | The workload's name. |
| [`accountId`](#cdktfprovidernewrelicworkloadconfigpropertyaccountid) | `number` | The New Relic account ID where you want to create the workload. |
| [`entityGuids`](#cdktfprovidernewrelicworkloadconfigpropertyentityguids) | `string`[] | A list of entity GUIDs manually assigned to this workload. |
| [`entitySearchQuery`](#cdktfprovidernewrelicworkloadconfigpropertyentitysearchquery) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-newrelic.WorkloadEntitySearchQuery`](#@cdktf/provider-newrelic.WorkloadEntitySearchQuery)[] | entity_search_query block. |
| [`scopeAccountIds`](#cdktfprovidernewrelicworkloadconfigpropertyscopeaccountids) | `number`[] | A list of account IDs that will be used to get entities from. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.WorkloadConfig.property.count" id="cdktfprovidernewrelicworkloadconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.WorkloadConfig.property.dependsOn" id="cdktfprovidernewrelicworkloadconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.WorkloadConfig.property.lifecycle" id="cdktfprovidernewrelicworkloadconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.WorkloadConfig.property.provider" id="cdktfprovidernewrelicworkloadconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.WorkloadConfig.property.name" id="cdktfprovidernewrelicworkloadconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The workload's name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/workload#name Workload#name}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.WorkloadConfig.property.accountId" id="cdktfprovidernewrelicworkloadconfigpropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The New Relic account ID where you want to create the workload.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/workload#account_id Workload#account_id}

---

##### `entityGuids`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.WorkloadConfig.property.entityGuids" id="cdktfprovidernewrelicworkloadconfigpropertyentityguids"></a>

```typescript
public readonly entityGuids: string[];
```

- *Type:* `string`[]

A list of entity GUIDs manually assigned to this workload.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/workload#entity_guids Workload#entity_guids}

---

##### `entitySearchQuery`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.WorkloadConfig.property.entitySearchQuery" id="cdktfprovidernewrelicworkloadconfigpropertyentitysearchquery"></a>

```typescript
public readonly entitySearchQuery: IResolvable | WorkloadEntitySearchQuery[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-newrelic.WorkloadEntitySearchQuery`](#@cdktf/provider-newrelic.WorkloadEntitySearchQuery)[]

entity_search_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/workload#entity_search_query Workload#entity_search_query}

---

##### `scopeAccountIds`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.WorkloadConfig.property.scopeAccountIds" id="cdktfprovidernewrelicworkloadconfigpropertyscopeaccountids"></a>

```typescript
public readonly scopeAccountIds: number[];
```

- *Type:* `number`[]

A list of account IDs that will be used to get entities from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/workload#scope_account_ids Workload#scope_account_ids}

---

### WorkloadEntitySearchQuery <a name="@cdktf/provider-newrelic.WorkloadEntitySearchQuery" id="cdktfprovidernewrelicworkloadentitysearchquery"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { WorkloadEntitySearchQuery } from '@cdktf/provider-newrelic'

const workloadEntitySearchQuery: WorkloadEntitySearchQuery = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`query`](#cdktfprovidernewrelicworkloadentitysearchquerypropertyquery)<span title="Required">*</span> | `string` | The query. |

---

##### `query`<sup>Required</sup> <a name="@cdktf/provider-newrelic.WorkloadEntitySearchQuery.property.query" id="cdktfprovidernewrelicworkloadentitysearchquerypropertyquery"></a>

```typescript
public readonly query: string;
```

- *Type:* `string`

The query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/workload#query Workload#query}

---

## Classes <a name="Classes" id="classes"></a>

### AlertChannelConfigAOutputReference <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference" id="cdktfprovidernewrelicalertchannelconfigaoutputreference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.Initializer" id="cdktfprovidernewrelicalertchannelconfigaoutputreferenceinitializer"></a>

```typescript
import { AlertChannelConfigAOutputReference } from '@cdktf/provider-newrelic'

new AlertChannelConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidernewrelicalertchannelconfigaoutputreferenceparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovidernewrelicalertchannelconfigaoutputreferenceparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |
| [`isSingleItem`](#cdktfprovidernewrelicalertchannelconfigaoutputreferenceparameterissingleitem)<span title="Required">*</span> | `boolean` | True if this is a block, false if it's a list. |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.parameter.terraformResource" id="cdktfprovidernewrelicalertchannelconfigaoutputreferenceparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.parameter.terraformAttribute" id="cdktfprovidernewrelicalertchannelconfigaoutputreferenceparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.parameter.isSingleItem" id="cdktfprovidernewrelicalertchannelconfigaoutputreferenceparameterissingleitem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetApiKey`](#cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetapikey) | *No description.* |
| [`resetAuthPassword`](#cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetauthpassword) | *No description.* |
| [`resetAuthType`](#cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetauthtype) | *No description.* |
| [`resetAuthUsername`](#cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetauthusername) | *No description.* |
| [`resetBaseUrl`](#cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetbaseurl) | *No description.* |
| [`resetChannel`](#cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetchannel) | *No description.* |
| [`resetHeaders`](#cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetheaders) | *No description.* |
| [`resetHeadersString`](#cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetheadersstring) | *No description.* |
| [`resetIncludeJsonAttachment`](#cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetincludejsonattachment) | *No description.* |
| [`resetKey`](#cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetkey) | *No description.* |
| [`resetPayload`](#cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetpayload) | *No description.* |
| [`resetPayloadString`](#cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetpayloadstring) | *No description.* |
| [`resetPayloadType`](#cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetpayloadtype) | *No description.* |
| [`resetRecipients`](#cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetrecipients) | *No description.* |
| [`resetRegion`](#cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetregion) | *No description.* |
| [`resetRouteKey`](#cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetroutekey) | *No description.* |
| [`resetServiceKey`](#cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetservicekey) | *No description.* |
| [`resetTags`](#cdktfprovidernewrelicalertchannelconfigaoutputreferenceresettags) | *No description.* |
| [`resetTeams`](#cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetteams) | *No description.* |
| [`resetUrl`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencereseturl) | *No description.* |
| [`resetUserId`](#cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetuserid) | *No description.* |

---

##### `resetApiKey` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetApiKey" id="cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetapikey"></a>

```typescript
public resetApiKey()
```

##### `resetAuthPassword` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetAuthPassword" id="cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetauthpassword"></a>

```typescript
public resetAuthPassword()
```

##### `resetAuthType` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetAuthType" id="cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetauthtype"></a>

```typescript
public resetAuthType()
```

##### `resetAuthUsername` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetAuthUsername" id="cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetauthusername"></a>

```typescript
public resetAuthUsername()
```

##### `resetBaseUrl` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetBaseUrl" id="cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetbaseurl"></a>

```typescript
public resetBaseUrl()
```

##### `resetChannel` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetChannel" id="cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetchannel"></a>

```typescript
public resetChannel()
```

##### `resetHeaders` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetHeaders" id="cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetheaders"></a>

```typescript
public resetHeaders()
```

##### `resetHeadersString` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetHeadersString" id="cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetheadersstring"></a>

```typescript
public resetHeadersString()
```

##### `resetIncludeJsonAttachment` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetIncludeJsonAttachment" id="cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetincludejsonattachment"></a>

```typescript
public resetIncludeJsonAttachment()
```

##### `resetKey` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetKey" id="cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetkey"></a>

```typescript
public resetKey()
```

##### `resetPayload` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetPayload" id="cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetpayload"></a>

```typescript
public resetPayload()
```

##### `resetPayloadString` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetPayloadString" id="cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetpayloadstring"></a>

```typescript
public resetPayloadString()
```

##### `resetPayloadType` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetPayloadType" id="cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetpayloadtype"></a>

```typescript
public resetPayloadType()
```

##### `resetRecipients` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetRecipients" id="cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetrecipients"></a>

```typescript
public resetRecipients()
```

##### `resetRegion` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetRegion" id="cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetregion"></a>

```typescript
public resetRegion()
```

##### `resetRouteKey` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetRouteKey" id="cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetroutekey"></a>

```typescript
public resetRouteKey()
```

##### `resetServiceKey` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetServiceKey" id="cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetservicekey"></a>

```typescript
public resetServiceKey()
```

##### `resetTags` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetTags" id="cdktfprovidernewrelicalertchannelconfigaoutputreferenceresettags"></a>

```typescript
public resetTags()
```

##### `resetTeams` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetTeams" id="cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetteams"></a>

```typescript
public resetTeams()
```

##### `resetUrl` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetUrl" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencereseturl"></a>

```typescript
public resetUrl()
```

##### `resetUserId` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetUserId" id="cdktfprovidernewrelicalertchannelconfigaoutputreferenceresetuserid"></a>

```typescript
public resetUserId()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`apiKeyInput`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyapikeyinput) | `string` | *No description.* |
| [`authPasswordInput`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyauthpasswordinput) | `string` | *No description.* |
| [`authTypeInput`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyauthtypeinput) | `string` | *No description.* |
| [`authUsernameInput`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyauthusernameinput) | `string` | *No description.* |
| [`baseUrlInput`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertybaseurlinput) | `string` | *No description.* |
| [`channelInput`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertychannelinput) | `string` | *No description.* |
| [`headersInput`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyheadersinput) | {[ key: string ]: `string`} | *No description.* |
| [`headersStringInput`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyheadersstringinput) | `string` | *No description.* |
| [`includeJsonAttachmentInput`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyincludejsonattachmentinput) | `string` | *No description.* |
| [`keyInput`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertykeyinput) | `string` | *No description.* |
| [`payloadInput`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertypayloadinput) | {[ key: string ]: `string`} | *No description.* |
| [`payloadStringInput`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertypayloadstringinput) | `string` | *No description.* |
| [`payloadTypeInput`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertypayloadtypeinput) | `string` | *No description.* |
| [`recipientsInput`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyrecipientsinput) | `string` | *No description.* |
| [`regionInput`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyregioninput) | `string` | *No description.* |
| [`routeKeyInput`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyroutekeyinput) | `string` | *No description.* |
| [`serviceKeyInput`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyservicekeyinput) | `string` | *No description.* |
| [`tagsInput`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertytagsinput) | `string` | *No description.* |
| [`teamsInput`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyteamsinput) | `string` | *No description.* |
| [`urlInput`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyurlinput) | `string` | *No description.* |
| [`userIdInput`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyuseridinput) | `string` | *No description.* |
| [`apiKey`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyapikey)<span title="Required">*</span> | `string` | *No description.* |
| [`authPassword`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyauthpassword)<span title="Required">*</span> | `string` | *No description.* |
| [`authType`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyauthtype)<span title="Required">*</span> | `string` | *No description.* |
| [`authUsername`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyauthusername)<span title="Required">*</span> | `string` | *No description.* |
| [`baseUrl`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertybaseurl)<span title="Required">*</span> | `string` | *No description.* |
| [`channel`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertychannel)<span title="Required">*</span> | `string` | *No description.* |
| [`headers`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyheaders)<span title="Required">*</span> | {[ key: string ]: `string`} | *No description.* |
| [`headersString`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyheadersstring)<span title="Required">*</span> | `string` | *No description.* |
| [`includeJsonAttachment`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyincludejsonattachment)<span title="Required">*</span> | `string` | *No description.* |
| [`key`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertykey)<span title="Required">*</span> | `string` | *No description.* |
| [`payload`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertypayload)<span title="Required">*</span> | {[ key: string ]: `string`} | *No description.* |
| [`payloadString`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertypayloadstring)<span title="Required">*</span> | `string` | *No description.* |
| [`payloadType`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertypayloadtype)<span title="Required">*</span> | `string` | *No description.* |
| [`recipients`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyrecipients)<span title="Required">*</span> | `string` | *No description.* |
| [`region`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyregion)<span title="Required">*</span> | `string` | *No description.* |
| [`routeKey`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyroutekey)<span title="Required">*</span> | `string` | *No description.* |
| [`serviceKey`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyservicekey)<span title="Required">*</span> | `string` | *No description.* |
| [`tags`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertytags)<span title="Required">*</span> | `string` | *No description.* |
| [`teams`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyteams)<span title="Required">*</span> | `string` | *No description.* |
| [`url`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyurl)<span title="Required">*</span> | `string` | *No description.* |
| [`userId`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyuserid)<span title="Required">*</span> | `string` | *No description.* |
| [`internalValue`](#cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyinternalvalue) | [`@cdktf/provider-newrelic.AlertChannelConfigA`](#@cdktf/provider-newrelic.AlertChannelConfigA) | *No description.* |

---

##### `apiKeyInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.apiKeyInput" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyapikeyinput"></a>

```typescript
public readonly apiKeyInput: string;
```

- *Type:* `string`

---

##### `authPasswordInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.authPasswordInput" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyauthpasswordinput"></a>

```typescript
public readonly authPasswordInput: string;
```

- *Type:* `string`

---

##### `authTypeInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.authTypeInput" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyauthtypeinput"></a>

```typescript
public readonly authTypeInput: string;
```

- *Type:* `string`

---

##### `authUsernameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.authUsernameInput" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyauthusernameinput"></a>

```typescript
public readonly authUsernameInput: string;
```

- *Type:* `string`

---

##### `baseUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.baseUrlInput" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertybaseurlinput"></a>

```typescript
public readonly baseUrlInput: string;
```

- *Type:* `string`

---

##### `channelInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.channelInput" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertychannelinput"></a>

```typescript
public readonly channelInput: string;
```

- *Type:* `string`

---

##### `headersInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.headersInput" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyheadersinput"></a>

```typescript
public readonly headersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `headersStringInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.headersStringInput" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyheadersstringinput"></a>

```typescript
public readonly headersStringInput: string;
```

- *Type:* `string`

---

##### `includeJsonAttachmentInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.includeJsonAttachmentInput" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyincludejsonattachmentinput"></a>

```typescript
public readonly includeJsonAttachmentInput: string;
```

- *Type:* `string`

---

##### `keyInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.keyInput" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertykeyinput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* `string`

---

##### `payloadInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.payloadInput" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertypayloadinput"></a>

```typescript
public readonly payloadInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `payloadStringInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.payloadStringInput" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertypayloadstringinput"></a>

```typescript
public readonly payloadStringInput: string;
```

- *Type:* `string`

---

##### `payloadTypeInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.payloadTypeInput" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertypayloadtypeinput"></a>

```typescript
public readonly payloadTypeInput: string;
```

- *Type:* `string`

---

##### `recipientsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.recipientsInput" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyrecipientsinput"></a>

```typescript
public readonly recipientsInput: string;
```

- *Type:* `string`

---

##### `regionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.regionInput" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyregioninput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* `string`

---

##### `routeKeyInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.routeKeyInput" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyroutekeyinput"></a>

```typescript
public readonly routeKeyInput: string;
```

- *Type:* `string`

---

##### `serviceKeyInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.serviceKeyInput" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyservicekeyinput"></a>

```typescript
public readonly serviceKeyInput: string;
```

- *Type:* `string`

---

##### `tagsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.tagsInput" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertytagsinput"></a>

```typescript
public readonly tagsInput: string;
```

- *Type:* `string`

---

##### `teamsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.teamsInput" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyteamsinput"></a>

```typescript
public readonly teamsInput: string;
```

- *Type:* `string`

---

##### `urlInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.urlInput" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyurlinput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* `string`

---

##### `userIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.userIdInput" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyuseridinput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* `string`

---

##### `apiKey`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.apiKey" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyapikey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* `string`

---

##### `authPassword`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.authPassword" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyauthpassword"></a>

```typescript
public readonly authPassword: string;
```

- *Type:* `string`

---

##### `authType`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.authType" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyauthtype"></a>

```typescript
public readonly authType: string;
```

- *Type:* `string`

---

##### `authUsername`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.authUsername" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyauthusername"></a>

```typescript
public readonly authUsername: string;
```

- *Type:* `string`

---

##### `baseUrl`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.baseUrl" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertybaseurl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* `string`

---

##### `channel`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.channel" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertychannel"></a>

```typescript
public readonly channel: string;
```

- *Type:* `string`

---

##### `headers`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.headers" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyheaders"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `headersString`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.headersString" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyheadersstring"></a>

```typescript
public readonly headersString: string;
```

- *Type:* `string`

---

##### `includeJsonAttachment`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.includeJsonAttachment" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyincludejsonattachment"></a>

```typescript
public readonly includeJsonAttachment: string;
```

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.key" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertykey"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

---

##### `payload`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.payload" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertypayload"></a>

```typescript
public readonly payload: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `payloadString`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.payloadString" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertypayloadstring"></a>

```typescript
public readonly payloadString: string;
```

- *Type:* `string`

---

##### `payloadType`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.payloadType" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertypayloadtype"></a>

```typescript
public readonly payloadType: string;
```

- *Type:* `string`

---

##### `recipients`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.recipients" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyrecipients"></a>

```typescript
public readonly recipients: string;
```

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.region" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyregion"></a>

```typescript
public readonly region: string;
```

- *Type:* `string`

---

##### `routeKey`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.routeKey" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyroutekey"></a>

```typescript
public readonly routeKey: string;
```

- *Type:* `string`

---

##### `serviceKey`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.serviceKey" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyservicekey"></a>

```typescript
public readonly serviceKey: string;
```

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.tags" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertytags"></a>

```typescript
public readonly tags: string;
```

- *Type:* `string`

---

##### `teams`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.teams" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyteams"></a>

```typescript
public readonly teams: string;
```

- *Type:* `string`

---

##### `url`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.url" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyurl"></a>

```typescript
public readonly url: string;
```

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.userId" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyuserid"></a>

```typescript
public readonly userId: string;
```

- *Type:* `string`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.internalValue" id="cdktfprovidernewrelicalertchannelconfigaoutputreferencepropertyinternalvalue"></a>

```typescript
public readonly internalValue: AlertChannelConfigA;
```

- *Type:* [`@cdktf/provider-newrelic.AlertChannelConfigA`](#@cdktf/provider-newrelic.AlertChannelConfigA)

---


### AlertMutingRuleConditionOutputReference <a name="@cdktf/provider-newrelic.AlertMutingRuleConditionOutputReference" id="cdktfprovidernewrelicalertmutingruleconditionoutputreference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.AlertMutingRuleConditionOutputReference.Initializer" id="cdktfprovidernewrelicalertmutingruleconditionoutputreferenceinitializer"></a>

```typescript
import { AlertMutingRuleConditionOutputReference } from '@cdktf/provider-newrelic'

new AlertMutingRuleConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidernewrelicalertmutingruleconditionoutputreferenceparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovidernewrelicalertmutingruleconditionoutputreferenceparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |
| [`isSingleItem`](#cdktfprovidernewrelicalertmutingruleconditionoutputreferenceparameterissingleitem)<span title="Required">*</span> | `boolean` | True if this is a block, false if it's a list. |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConditionOutputReference.parameter.terraformResource" id="cdktfprovidernewrelicalertmutingruleconditionoutputreferenceparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConditionOutputReference.parameter.terraformAttribute" id="cdktfprovidernewrelicalertmutingruleconditionoutputreferenceparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConditionOutputReference.parameter.isSingleItem" id="cdktfprovidernewrelicalertmutingruleconditionoutputreferenceparameterissingleitem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`conditionsInput`](#cdktfprovidernewrelicalertmutingruleconditionoutputreferencepropertyconditionsinput) | [`@cdktf/provider-newrelic.AlertMutingRuleConditionConditions`](#@cdktf/provider-newrelic.AlertMutingRuleConditionConditions)[] \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`operatorInput`](#cdktfprovidernewrelicalertmutingruleconditionoutputreferencepropertyoperatorinput) | `string` | *No description.* |
| [`conditions`](#cdktfprovidernewrelicalertmutingruleconditionoutputreferencepropertyconditions)<span title="Required">*</span> | [`@cdktf/provider-newrelic.AlertMutingRuleConditionConditions`](#@cdktf/provider-newrelic.AlertMutingRuleConditionConditions)[] \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`operator`](#cdktfprovidernewrelicalertmutingruleconditionoutputreferencepropertyoperator)<span title="Required">*</span> | `string` | *No description.* |
| [`internalValue`](#cdktfprovidernewrelicalertmutingruleconditionoutputreferencepropertyinternalvalue) | [`@cdktf/provider-newrelic.AlertMutingRuleCondition`](#@cdktf/provider-newrelic.AlertMutingRuleCondition) | *No description.* |

---

##### `conditionsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConditionOutputReference.property.conditionsInput" id="cdktfprovidernewrelicalertmutingruleconditionoutputreferencepropertyconditionsinput"></a>

```typescript
public readonly conditionsInput: AlertMutingRuleConditionConditions[] | IResolvable;
```

- *Type:* [`@cdktf/provider-newrelic.AlertMutingRuleConditionConditions`](#@cdktf/provider-newrelic.AlertMutingRuleConditionConditions)[] | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `operatorInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConditionOutputReference.property.operatorInput" id="cdktfprovidernewrelicalertmutingruleconditionoutputreferencepropertyoperatorinput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* `string`

---

##### `conditions`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConditionOutputReference.property.conditions" id="cdktfprovidernewrelicalertmutingruleconditionoutputreferencepropertyconditions"></a>

```typescript
public readonly conditions: AlertMutingRuleConditionConditions[] | IResolvable;
```

- *Type:* [`@cdktf/provider-newrelic.AlertMutingRuleConditionConditions`](#@cdktf/provider-newrelic.AlertMutingRuleConditionConditions)[] | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `operator`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConditionOutputReference.property.operator" id="cdktfprovidernewrelicalertmutingruleconditionoutputreferencepropertyoperator"></a>

```typescript
public readonly operator: string;
```

- *Type:* `string`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConditionOutputReference.property.internalValue" id="cdktfprovidernewrelicalertmutingruleconditionoutputreferencepropertyinternalvalue"></a>

```typescript
public readonly internalValue: AlertMutingRuleCondition;
```

- *Type:* [`@cdktf/provider-newrelic.AlertMutingRuleCondition`](#@cdktf/provider-newrelic.AlertMutingRuleCondition)

---


### AlertMutingRuleScheduleOutputReference <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference" id="cdktfprovidernewrelicalertmutingrulescheduleoutputreference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.Initializer" id="cdktfprovidernewrelicalertmutingrulescheduleoutputreferenceinitializer"></a>

```typescript
import { AlertMutingRuleScheduleOutputReference } from '@cdktf/provider-newrelic'

new AlertMutingRuleScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidernewrelicalertmutingrulescheduleoutputreferenceparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovidernewrelicalertmutingrulescheduleoutputreferenceparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |
| [`isSingleItem`](#cdktfprovidernewrelicalertmutingrulescheduleoutputreferenceparameterissingleitem)<span title="Required">*</span> | `boolean` | True if this is a block, false if it's a list. |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.parameter.terraformResource" id="cdktfprovidernewrelicalertmutingrulescheduleoutputreferenceparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.parameter.terraformAttribute" id="cdktfprovidernewrelicalertmutingrulescheduleoutputreferenceparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.parameter.isSingleItem" id="cdktfprovidernewrelicalertmutingrulescheduleoutputreferenceparameterissingleitem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetEndRepeat`](#cdktfprovidernewrelicalertmutingrulescheduleoutputreferenceresetendrepeat) | *No description.* |
| [`resetEndTime`](#cdktfprovidernewrelicalertmutingrulescheduleoutputreferenceresetendtime) | *No description.* |
| [`resetRepeat`](#cdktfprovidernewrelicalertmutingrulescheduleoutputreferenceresetrepeat) | *No description.* |
| [`resetRepeatCount`](#cdktfprovidernewrelicalertmutingrulescheduleoutputreferenceresetrepeatcount) | *No description.* |
| [`resetStartTime`](#cdktfprovidernewrelicalertmutingrulescheduleoutputreferenceresetstarttime) | *No description.* |
| [`resetWeeklyRepeatDays`](#cdktfprovidernewrelicalertmutingrulescheduleoutputreferenceresetweeklyrepeatdays) | *No description.* |

---

##### `resetEndRepeat` <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.resetEndRepeat" id="cdktfprovidernewrelicalertmutingrulescheduleoutputreferenceresetendrepeat"></a>

```typescript
public resetEndRepeat()
```

##### `resetEndTime` <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.resetEndTime" id="cdktfprovidernewrelicalertmutingrulescheduleoutputreferenceresetendtime"></a>

```typescript
public resetEndTime()
```

##### `resetRepeat` <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.resetRepeat" id="cdktfprovidernewrelicalertmutingrulescheduleoutputreferenceresetrepeat"></a>

```typescript
public resetRepeat()
```

##### `resetRepeatCount` <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.resetRepeatCount" id="cdktfprovidernewrelicalertmutingrulescheduleoutputreferenceresetrepeatcount"></a>

```typescript
public resetRepeatCount()
```

##### `resetStartTime` <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.resetStartTime" id="cdktfprovidernewrelicalertmutingrulescheduleoutputreferenceresetstarttime"></a>

```typescript
public resetStartTime()
```

##### `resetWeeklyRepeatDays` <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.resetWeeklyRepeatDays" id="cdktfprovidernewrelicalertmutingrulescheduleoutputreferenceresetweeklyrepeatdays"></a>

```typescript
public resetWeeklyRepeatDays()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`endRepeatInput`](#cdktfprovidernewrelicalertmutingrulescheduleoutputreferencepropertyendrepeatinput) | `string` | *No description.* |
| [`endTimeInput`](#cdktfprovidernewrelicalertmutingrulescheduleoutputreferencepropertyendtimeinput) | `string` | *No description.* |
| [`repeatCountInput`](#cdktfprovidernewrelicalertmutingrulescheduleoutputreferencepropertyrepeatcountinput) | `number` | *No description.* |
| [`repeatInput`](#cdktfprovidernewrelicalertmutingrulescheduleoutputreferencepropertyrepeatinput) | `string` | *No description.* |
| [`startTimeInput`](#cdktfprovidernewrelicalertmutingrulescheduleoutputreferencepropertystarttimeinput) | `string` | *No description.* |
| [`timeZoneInput`](#cdktfprovidernewrelicalertmutingrulescheduleoutputreferencepropertytimezoneinput) | `string` | *No description.* |
| [`weeklyRepeatDaysInput`](#cdktfprovidernewrelicalertmutingrulescheduleoutputreferencepropertyweeklyrepeatdaysinput) | `string`[] | *No description.* |
| [`endRepeat`](#cdktfprovidernewrelicalertmutingrulescheduleoutputreferencepropertyendrepeat)<span title="Required">*</span> | `string` | *No description.* |
| [`endTime`](#cdktfprovidernewrelicalertmutingrulescheduleoutputreferencepropertyendtime)<span title="Required">*</span> | `string` | *No description.* |
| [`repeat`](#cdktfprovidernewrelicalertmutingrulescheduleoutputreferencepropertyrepeat)<span title="Required">*</span> | `string` | *No description.* |
| [`repeatCount`](#cdktfprovidernewrelicalertmutingrulescheduleoutputreferencepropertyrepeatcount)<span title="Required">*</span> | `number` | *No description.* |
| [`startTime`](#cdktfprovidernewrelicalertmutingrulescheduleoutputreferencepropertystarttime)<span title="Required">*</span> | `string` | *No description.* |
| [`timeZone`](#cdktfprovidernewrelicalertmutingrulescheduleoutputreferencepropertytimezone)<span title="Required">*</span> | `string` | *No description.* |
| [`weeklyRepeatDays`](#cdktfprovidernewrelicalertmutingrulescheduleoutputreferencepropertyweeklyrepeatdays)<span title="Required">*</span> | `string`[] | *No description.* |
| [`internalValue`](#cdktfprovidernewrelicalertmutingrulescheduleoutputreferencepropertyinternalvalue) | [`@cdktf/provider-newrelic.AlertMutingRuleSchedule`](#@cdktf/provider-newrelic.AlertMutingRuleSchedule) | *No description.* |

---

##### `endRepeatInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.property.endRepeatInput" id="cdktfprovidernewrelicalertmutingrulescheduleoutputreferencepropertyendrepeatinput"></a>

```typescript
public readonly endRepeatInput: string;
```

- *Type:* `string`

---

##### `endTimeInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.property.endTimeInput" id="cdktfprovidernewrelicalertmutingrulescheduleoutputreferencepropertyendtimeinput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* `string`

---

##### `repeatCountInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.property.repeatCountInput" id="cdktfprovidernewrelicalertmutingrulescheduleoutputreferencepropertyrepeatcountinput"></a>

```typescript
public readonly repeatCountInput: number;
```

- *Type:* `number`

---

##### `repeatInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.property.repeatInput" id="cdktfprovidernewrelicalertmutingrulescheduleoutputreferencepropertyrepeatinput"></a>

```typescript
public readonly repeatInput: string;
```

- *Type:* `string`

---

##### `startTimeInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.property.startTimeInput" id="cdktfprovidernewrelicalertmutingrulescheduleoutputreferencepropertystarttimeinput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* `string`

---

##### `timeZoneInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.property.timeZoneInput" id="cdktfprovidernewrelicalertmutingrulescheduleoutputreferencepropertytimezoneinput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* `string`

---

##### `weeklyRepeatDaysInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.property.weeklyRepeatDaysInput" id="cdktfprovidernewrelicalertmutingrulescheduleoutputreferencepropertyweeklyrepeatdaysinput"></a>

```typescript
public readonly weeklyRepeatDaysInput: string[];
```

- *Type:* `string`[]

---

##### `endRepeat`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.property.endRepeat" id="cdktfprovidernewrelicalertmutingrulescheduleoutputreferencepropertyendrepeat"></a>

```typescript
public readonly endRepeat: string;
```

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.property.endTime" id="cdktfprovidernewrelicalertmutingrulescheduleoutputreferencepropertyendtime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* `string`

---

##### `repeat`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.property.repeat" id="cdktfprovidernewrelicalertmutingrulescheduleoutputreferencepropertyrepeat"></a>

```typescript
public readonly repeat: string;
```

- *Type:* `string`

---

##### `repeatCount`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.property.repeatCount" id="cdktfprovidernewrelicalertmutingrulescheduleoutputreferencepropertyrepeatcount"></a>

```typescript
public readonly repeatCount: number;
```

- *Type:* `number`

---

##### `startTime`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.property.startTime" id="cdktfprovidernewrelicalertmutingrulescheduleoutputreferencepropertystarttime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* `string`

---

##### `timeZone`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.property.timeZone" id="cdktfprovidernewrelicalertmutingrulescheduleoutputreferencepropertytimezone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* `string`

---

##### `weeklyRepeatDays`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.property.weeklyRepeatDays" id="cdktfprovidernewrelicalertmutingrulescheduleoutputreferencepropertyweeklyrepeatdays"></a>

```typescript
public readonly weeklyRepeatDays: string[];
```

- *Type:* `string`[]

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.property.internalValue" id="cdktfprovidernewrelicalertmutingrulescheduleoutputreferencepropertyinternalvalue"></a>

```typescript
public readonly internalValue: AlertMutingRuleSchedule;
```

- *Type:* [`@cdktf/provider-newrelic.AlertMutingRuleSchedule`](#@cdktf/provider-newrelic.AlertMutingRuleSchedule)

---


### DashboardFilterOutputReference <a name="@cdktf/provider-newrelic.DashboardFilterOutputReference" id="cdktfprovidernewrelicdashboardfilteroutputreference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.DashboardFilterOutputReference.Initializer" id="cdktfprovidernewrelicdashboardfilteroutputreferenceinitializer"></a>

```typescript
import { DashboardFilterOutputReference } from '@cdktf/provider-newrelic'

new DashboardFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidernewrelicdashboardfilteroutputreferenceparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovidernewrelicdashboardfilteroutputreferenceparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |
| [`isSingleItem`](#cdktfprovidernewrelicdashboardfilteroutputreferenceparameterissingleitem)<span title="Required">*</span> | `boolean` | True if this is a block, false if it's a list. |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardFilterOutputReference.parameter.terraformResource" id="cdktfprovidernewrelicdashboardfilteroutputreferenceparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardFilterOutputReference.parameter.terraformAttribute" id="cdktfprovidernewrelicdashboardfilteroutputreferenceparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardFilterOutputReference.parameter.isSingleItem" id="cdktfprovidernewrelicdashboardfilteroutputreferenceparameterissingleitem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetAttributes`](#cdktfprovidernewrelicdashboardfilteroutputreferenceresetattributes) | *No description.* |

---

##### `resetAttributes` <a name="@cdktf/provider-newrelic.DashboardFilterOutputReference.resetAttributes" id="cdktfprovidernewrelicdashboardfilteroutputreferenceresetattributes"></a>

```typescript
public resetAttributes()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`attributesInput`](#cdktfprovidernewrelicdashboardfilteroutputreferencepropertyattributesinput) | `string`[] | *No description.* |
| [`eventTypesInput`](#cdktfprovidernewrelicdashboardfilteroutputreferencepropertyeventtypesinput) | `string`[] | *No description.* |
| [`attributes`](#cdktfprovidernewrelicdashboardfilteroutputreferencepropertyattributes)<span title="Required">*</span> | `string`[] | *No description.* |
| [`eventTypes`](#cdktfprovidernewrelicdashboardfilteroutputreferencepropertyeventtypes)<span title="Required">*</span> | `string`[] | *No description.* |
| [`internalValue`](#cdktfprovidernewrelicdashboardfilteroutputreferencepropertyinternalvalue) | [`@cdktf/provider-newrelic.DashboardFilter`](#@cdktf/provider-newrelic.DashboardFilter) | *No description.* |

---

##### `attributesInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardFilterOutputReference.property.attributesInput" id="cdktfprovidernewrelicdashboardfilteroutputreferencepropertyattributesinput"></a>

```typescript
public readonly attributesInput: string[];
```

- *Type:* `string`[]

---

##### `eventTypesInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardFilterOutputReference.property.eventTypesInput" id="cdktfprovidernewrelicdashboardfilteroutputreferencepropertyeventtypesinput"></a>

```typescript
public readonly eventTypesInput: string[];
```

- *Type:* `string`[]

---

##### `attributes`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardFilterOutputReference.property.attributes" id="cdktfprovidernewrelicdashboardfilteroutputreferencepropertyattributes"></a>

```typescript
public readonly attributes: string[];
```

- *Type:* `string`[]

---

##### `eventTypes`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardFilterOutputReference.property.eventTypes" id="cdktfprovidernewrelicdashboardfilteroutputreferencepropertyeventtypes"></a>

```typescript
public readonly eventTypes: string[];
```

- *Type:* `string`[]

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardFilterOutputReference.property.internalValue" id="cdktfprovidernewrelicdashboardfilteroutputreferencepropertyinternalvalue"></a>

```typescript
public readonly internalValue: DashboardFilter;
```

- *Type:* [`@cdktf/provider-newrelic.DashboardFilter`](#@cdktf/provider-newrelic.DashboardFilter)

---


### DashboardWidgetCompareWithPresentationOutputReference <a name="@cdktf/provider-newrelic.DashboardWidgetCompareWithPresentationOutputReference" id="cdktfprovidernewrelicdashboardwidgetcomparewithpresentationoutputreference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.DashboardWidgetCompareWithPresentationOutputReference.Initializer" id="cdktfprovidernewrelicdashboardwidgetcomparewithpresentationoutputreferenceinitializer"></a>

```typescript
import { DashboardWidgetCompareWithPresentationOutputReference } from '@cdktf/provider-newrelic'

new DashboardWidgetCompareWithPresentationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidernewrelicdashboardwidgetcomparewithpresentationoutputreferenceparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovidernewrelicdashboardwidgetcomparewithpresentationoutputreferenceparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |
| [`isSingleItem`](#cdktfprovidernewrelicdashboardwidgetcomparewithpresentationoutputreferenceparameterissingleitem)<span title="Required">*</span> | `boolean` | True if this is a block, false if it's a list. |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardWidgetCompareWithPresentationOutputReference.parameter.terraformResource" id="cdktfprovidernewrelicdashboardwidgetcomparewithpresentationoutputreferenceparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardWidgetCompareWithPresentationOutputReference.parameter.terraformAttribute" id="cdktfprovidernewrelicdashboardwidgetcomparewithpresentationoutputreferenceparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardWidgetCompareWithPresentationOutputReference.parameter.isSingleItem" id="cdktfprovidernewrelicdashboardwidgetcomparewithpresentationoutputreferenceparameterissingleitem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`colorInput`](#cdktfprovidernewrelicdashboardwidgetcomparewithpresentationoutputreferencepropertycolorinput) | `string` | *No description.* |
| [`nameInput`](#cdktfprovidernewrelicdashboardwidgetcomparewithpresentationoutputreferencepropertynameinput) | `string` | *No description.* |
| [`color`](#cdktfprovidernewrelicdashboardwidgetcomparewithpresentationoutputreferencepropertycolor)<span title="Required">*</span> | `string` | *No description.* |
| [`name`](#cdktfprovidernewrelicdashboardwidgetcomparewithpresentationoutputreferencepropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`internalValue`](#cdktfprovidernewrelicdashboardwidgetcomparewithpresentationoutputreferencepropertyinternalvalue) | [`@cdktf/provider-newrelic.DashboardWidgetCompareWithPresentation`](#@cdktf/provider-newrelic.DashboardWidgetCompareWithPresentation) | *No description.* |

---

##### `colorInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidgetCompareWithPresentationOutputReference.property.colorInput" id="cdktfprovidernewrelicdashboardwidgetcomparewithpresentationoutputreferencepropertycolorinput"></a>

```typescript
public readonly colorInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidgetCompareWithPresentationOutputReference.property.nameInput" id="cdktfprovidernewrelicdashboardwidgetcomparewithpresentationoutputreferencepropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `color`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardWidgetCompareWithPresentationOutputReference.property.color" id="cdktfprovidernewrelicdashboardwidgetcomparewithpresentationoutputreferencepropertycolor"></a>

```typescript
public readonly color: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardWidgetCompareWithPresentationOutputReference.property.name" id="cdktfprovidernewrelicdashboardwidgetcomparewithpresentationoutputreferencepropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidgetCompareWithPresentationOutputReference.property.internalValue" id="cdktfprovidernewrelicdashboardwidgetcomparewithpresentationoutputreferencepropertyinternalvalue"></a>

```typescript
public readonly internalValue: DashboardWidgetCompareWithPresentation;
```

- *Type:* [`@cdktf/provider-newrelic.DashboardWidgetCompareWithPresentation`](#@cdktf/provider-newrelic.DashboardWidgetCompareWithPresentation)

---


### DataNewrelicAlertChannelConfigA <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA" id="cdktfprovidernewrelicdatanewrelicalertchannelconfiga"></a>

#### Initializers <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.Initializer" id="cdktfprovidernewrelicdatanewrelicalertchannelconfigainitializer"></a>

```typescript
import { DataNewrelicAlertChannelConfigA } from '@cdktf/provider-newrelic'

new DataNewrelicAlertChannelConfigA(terraformResource: IInterpolatingParent, terraformAttribute: string, complexComputedListIndex: string, wrapsSet?: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidernewrelicdatanewrelicalertchannelconfigaparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | *No description.* |
| [`terraformAttribute`](#cdktfprovidernewrelicdatanewrelicalertchannelconfigaparameterterraformattribute)<span title="Required">*</span> | `string` | *No description.* |
| [`complexComputedListIndex`](#cdktfprovidernewrelicdatanewrelicalertchannelconfigaparametercomplexcomputedlistindex)<span title="Required">*</span> | `string` | *No description.* |
| [`wrapsSet`](#cdktfprovidernewrelicdatanewrelicalertchannelconfigaparameterwrapsset) | `boolean` | *No description.* |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.parameter.terraformResource" id="cdktfprovidernewrelicdatanewrelicalertchannelconfigaparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.parameter.terraformAttribute" id="cdktfprovidernewrelicdatanewrelicalertchannelconfigaparameterterraformattribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.parameter.complexComputedListIndex" id="cdktfprovidernewrelicdatanewrelicalertchannelconfigaparametercomplexcomputedlistindex"></a>

- *Type:* `string`

---

##### `wrapsSet`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.parameter.wrapsSet" id="cdktfprovidernewrelicdatanewrelicalertchannelconfigaparameterwrapsset"></a>

- *Type:* `boolean`

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`apiKey`](#cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertyapikey)<span title="Required">*</span> | `string` | *No description.* |
| [`authPassword`](#cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertyauthpassword)<span title="Required">*</span> | `string` | *No description.* |
| [`authType`](#cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertyauthtype)<span title="Required">*</span> | `string` | *No description.* |
| [`authUsername`](#cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertyauthusername)<span title="Required">*</span> | `string` | *No description.* |
| [`baseUrl`](#cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertybaseurl)<span title="Required">*</span> | `string` | *No description.* |
| [`channel`](#cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertychannel)<span title="Required">*</span> | `string` | *No description.* |
| [`headers`](#cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertyheaders)<span title="Required">*</span> | {[ key: string ]: `string`} | *No description.* |
| [`includeJsonAttachment`](#cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertyincludejsonattachment)<span title="Required">*</span> | `string` | *No description.* |
| [`key`](#cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertykey)<span title="Required">*</span> | `string` | *No description.* |
| [`payload`](#cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertypayload)<span title="Required">*</span> | {[ key: string ]: `string`} | *No description.* |
| [`payloadType`](#cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertypayloadtype)<span title="Required">*</span> | `string` | *No description.* |
| [`recipients`](#cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertyrecipients)<span title="Required">*</span> | `string` | *No description.* |
| [`region`](#cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertyregion)<span title="Required">*</span> | `string` | *No description.* |
| [`routeKey`](#cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertyroutekey)<span title="Required">*</span> | `string` | *No description.* |
| [`serviceKey`](#cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertyservicekey)<span title="Required">*</span> | `string` | *No description.* |
| [`tags`](#cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertytags)<span title="Required">*</span> | `string` | *No description.* |
| [`teams`](#cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertyteams)<span title="Required">*</span> | `string` | *No description.* |
| [`url`](#cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertyurl)<span title="Required">*</span> | `string` | *No description.* |
| [`userId`](#cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertyuserid)<span title="Required">*</span> | `string` | *No description.* |

---

##### `apiKey`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.apiKey" id="cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertyapikey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* `string`

---

##### `authPassword`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.authPassword" id="cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertyauthpassword"></a>

```typescript
public readonly authPassword: string;
```

- *Type:* `string`

---

##### `authType`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.authType" id="cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertyauthtype"></a>

```typescript
public readonly authType: string;
```

- *Type:* `string`

---

##### `authUsername`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.authUsername" id="cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertyauthusername"></a>

```typescript
public readonly authUsername: string;
```

- *Type:* `string`

---

##### `baseUrl`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.baseUrl" id="cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertybaseurl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* `string`

---

##### `channel`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.channel" id="cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertychannel"></a>

```typescript
public readonly channel: string;
```

- *Type:* `string`

---

##### `headers`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.headers" id="cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertyheaders"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `includeJsonAttachment`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.includeJsonAttachment" id="cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertyincludejsonattachment"></a>

```typescript
public readonly includeJsonAttachment: string;
```

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.key" id="cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertykey"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

---

##### `payload`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.payload" id="cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertypayload"></a>

```typescript
public readonly payload: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `payloadType`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.payloadType" id="cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertypayloadtype"></a>

```typescript
public readonly payloadType: string;
```

- *Type:* `string`

---

##### `recipients`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.recipients" id="cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertyrecipients"></a>

```typescript
public readonly recipients: string;
```

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.region" id="cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertyregion"></a>

```typescript
public readonly region: string;
```

- *Type:* `string`

---

##### `routeKey`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.routeKey" id="cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertyroutekey"></a>

```typescript
public readonly routeKey: string;
```

- *Type:* `string`

---

##### `serviceKey`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.serviceKey" id="cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertyservicekey"></a>

```typescript
public readonly serviceKey: string;
```

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.tags" id="cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertytags"></a>

```typescript
public readonly tags: string;
```

- *Type:* `string`

---

##### `teams`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.teams" id="cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertyteams"></a>

```typescript
public readonly teams: string;
```

- *Type:* `string`

---

##### `url`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.url" id="cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertyurl"></a>

```typescript
public readonly url: string;
```

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.userId" id="cdktfprovidernewrelicdatanewrelicalertchannelconfigapropertyuserid"></a>

```typescript
public readonly userId: string;
```

- *Type:* `string`

---


### DataNewrelicEntityTagOutputReference <a name="@cdktf/provider-newrelic.DataNewrelicEntityTagOutputReference" id="cdktfprovidernewrelicdatanewrelicentitytagoutputreference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.DataNewrelicEntityTagOutputReference.Initializer" id="cdktfprovidernewrelicdatanewrelicentitytagoutputreferenceinitializer"></a>

```typescript
import { DataNewrelicEntityTagOutputReference } from '@cdktf/provider-newrelic'

new DataNewrelicEntityTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidernewrelicdatanewrelicentitytagoutputreferenceparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovidernewrelicdatanewrelicentitytagoutputreferenceparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |
| [`isSingleItem`](#cdktfprovidernewrelicdatanewrelicentitytagoutputreferenceparameterissingleitem)<span title="Required">*</span> | `boolean` | True if this is a block, false if it's a list. |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityTagOutputReference.parameter.terraformResource" id="cdktfprovidernewrelicdatanewrelicentitytagoutputreferenceparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityTagOutputReference.parameter.terraformAttribute" id="cdktfprovidernewrelicdatanewrelicentitytagoutputreferenceparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityTagOutputReference.parameter.isSingleItem" id="cdktfprovidernewrelicdatanewrelicentitytagoutputreferenceparameterissingleitem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`keyInput`](#cdktfprovidernewrelicdatanewrelicentitytagoutputreferencepropertykeyinput) | `string` | *No description.* |
| [`valueInput`](#cdktfprovidernewrelicdatanewrelicentitytagoutputreferencepropertyvalueinput) | `string` | *No description.* |
| [`key`](#cdktfprovidernewrelicdatanewrelicentitytagoutputreferencepropertykey)<span title="Required">*</span> | `string` | *No description.* |
| [`value`](#cdktfprovidernewrelicdatanewrelicentitytagoutputreferencepropertyvalue)<span title="Required">*</span> | `string` | *No description.* |
| [`internalValue`](#cdktfprovidernewrelicdatanewrelicentitytagoutputreferencepropertyinternalvalue) | [`@cdktf/provider-newrelic.DataNewrelicEntityTag`](#@cdktf/provider-newrelic.DataNewrelicEntityTag) | *No description.* |

---

##### `keyInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityTagOutputReference.property.keyInput" id="cdktfprovidernewrelicdatanewrelicentitytagoutputreferencepropertykeyinput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* `string`

---

##### `valueInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityTagOutputReference.property.valueInput" id="cdktfprovidernewrelicdatanewrelicentitytagoutputreferencepropertyvalueinput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityTagOutputReference.property.key" id="cdktfprovidernewrelicdatanewrelicentitytagoutputreferencepropertykey"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityTagOutputReference.property.value" id="cdktfprovidernewrelicdatanewrelicentitytagoutputreferencepropertyvalue"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityTagOutputReference.property.internalValue" id="cdktfprovidernewrelicdatanewrelicentitytagoutputreferencepropertyinternalvalue"></a>

```typescript
public readonly internalValue: DataNewrelicEntityTag;
```

- *Type:* [`@cdktf/provider-newrelic.DataNewrelicEntityTag`](#@cdktf/provider-newrelic.DataNewrelicEntityTag)

---


### EntityTagsTimeoutsOutputReference <a name="@cdktf/provider-newrelic.EntityTagsTimeoutsOutputReference" id="cdktfprovidernewrelicentitytagstimeoutsoutputreference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.EntityTagsTimeoutsOutputReference.Initializer" id="cdktfprovidernewrelicentitytagstimeoutsoutputreferenceinitializer"></a>

```typescript
import { EntityTagsTimeoutsOutputReference } from '@cdktf/provider-newrelic'

new EntityTagsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidernewrelicentitytagstimeoutsoutputreferenceparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovidernewrelicentitytagstimeoutsoutputreferenceparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |
| [`isSingleItem`](#cdktfprovidernewrelicentitytagstimeoutsoutputreferenceparameterissingleitem)<span title="Required">*</span> | `boolean` | True if this is a block, false if it's a list. |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EntityTagsTimeoutsOutputReference.parameter.terraformResource" id="cdktfprovidernewrelicentitytagstimeoutsoutputreferenceparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EntityTagsTimeoutsOutputReference.parameter.terraformAttribute" id="cdktfprovidernewrelicentitytagstimeoutsoutputreferenceparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EntityTagsTimeoutsOutputReference.parameter.isSingleItem" id="cdktfprovidernewrelicentitytagstimeoutsoutputreferenceparameterissingleitem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetCreate`](#cdktfprovidernewrelicentitytagstimeoutsoutputreferenceresetcreate) | *No description.* |

---

##### `resetCreate` <a name="@cdktf/provider-newrelic.EntityTagsTimeoutsOutputReference.resetCreate" id="cdktfprovidernewrelicentitytagstimeoutsoutputreferenceresetcreate"></a>

```typescript
public resetCreate()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`createInput`](#cdktfprovidernewrelicentitytagstimeoutsoutputreferencepropertycreateinput) | `string` | *No description.* |
| [`create`](#cdktfprovidernewrelicentitytagstimeoutsoutputreferencepropertycreate)<span title="Required">*</span> | `string` | *No description.* |
| [`internalValue`](#cdktfprovidernewrelicentitytagstimeoutsoutputreferencepropertyinternalvalue) | [`@cdktf/provider-newrelic.EntityTagsTimeouts`](#@cdktf/provider-newrelic.EntityTagsTimeouts) | *No description.* |

---

##### `createInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EntityTagsTimeoutsOutputReference.property.createInput" id="cdktfprovidernewrelicentitytagstimeoutsoutputreferencepropertycreateinput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* `string`

---

##### `create`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EntityTagsTimeoutsOutputReference.property.create" id="cdktfprovidernewrelicentitytagstimeoutsoutputreferencepropertycreate"></a>

```typescript
public readonly create: string;
```

- *Type:* `string`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EntityTagsTimeoutsOutputReference.property.internalValue" id="cdktfprovidernewrelicentitytagstimeoutsoutputreferencepropertyinternalvalue"></a>

```typescript
public readonly internalValue: EntityTagsTimeouts;
```

- *Type:* [`@cdktf/provider-newrelic.EntityTagsTimeouts`](#@cdktf/provider-newrelic.EntityTagsTimeouts)

---


### InfraAlertConditionCriticalOutputReference <a name="@cdktf/provider-newrelic.InfraAlertConditionCriticalOutputReference" id="cdktfprovidernewrelicinfraalertconditioncriticaloutputreference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.InfraAlertConditionCriticalOutputReference.Initializer" id="cdktfprovidernewrelicinfraalertconditioncriticaloutputreferenceinitializer"></a>

```typescript
import { InfraAlertConditionCriticalOutputReference } from '@cdktf/provider-newrelic'

new InfraAlertConditionCriticalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidernewrelicinfraalertconditioncriticaloutputreferenceparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovidernewrelicinfraalertconditioncriticaloutputreferenceparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |
| [`isSingleItem`](#cdktfprovidernewrelicinfraalertconditioncriticaloutputreferenceparameterissingleitem)<span title="Required">*</span> | `boolean` | True if this is a block, false if it's a list. |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionCriticalOutputReference.parameter.terraformResource" id="cdktfprovidernewrelicinfraalertconditioncriticaloutputreferenceparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionCriticalOutputReference.parameter.terraformAttribute" id="cdktfprovidernewrelicinfraalertconditioncriticaloutputreferenceparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionCriticalOutputReference.parameter.isSingleItem" id="cdktfprovidernewrelicinfraalertconditioncriticaloutputreferenceparameterissingleitem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetTimeFunction`](#cdktfprovidernewrelicinfraalertconditioncriticaloutputreferenceresettimefunction) | *No description.* |
| [`resetValue`](#cdktfprovidernewrelicinfraalertconditioncriticaloutputreferenceresetvalue) | *No description.* |

---

##### `resetTimeFunction` <a name="@cdktf/provider-newrelic.InfraAlertConditionCriticalOutputReference.resetTimeFunction" id="cdktfprovidernewrelicinfraalertconditioncriticaloutputreferenceresettimefunction"></a>

```typescript
public resetTimeFunction()
```

##### `resetValue` <a name="@cdktf/provider-newrelic.InfraAlertConditionCriticalOutputReference.resetValue" id="cdktfprovidernewrelicinfraalertconditioncriticaloutputreferenceresetvalue"></a>

```typescript
public resetValue()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`durationInput`](#cdktfprovidernewrelicinfraalertconditioncriticaloutputreferencepropertydurationinput) | `number` | *No description.* |
| [`timeFunctionInput`](#cdktfprovidernewrelicinfraalertconditioncriticaloutputreferencepropertytimefunctioninput) | `string` | *No description.* |
| [`valueInput`](#cdktfprovidernewrelicinfraalertconditioncriticaloutputreferencepropertyvalueinput) | `number` | *No description.* |
| [`duration`](#cdktfprovidernewrelicinfraalertconditioncriticaloutputreferencepropertyduration)<span title="Required">*</span> | `number` | *No description.* |
| [`timeFunction`](#cdktfprovidernewrelicinfraalertconditioncriticaloutputreferencepropertytimefunction)<span title="Required">*</span> | `string` | *No description.* |
| [`value`](#cdktfprovidernewrelicinfraalertconditioncriticaloutputreferencepropertyvalue)<span title="Required">*</span> | `number` | *No description.* |
| [`internalValue`](#cdktfprovidernewrelicinfraalertconditioncriticaloutputreferencepropertyinternalvalue) | [`@cdktf/provider-newrelic.InfraAlertConditionCritical`](#@cdktf/provider-newrelic.InfraAlertConditionCritical) | *No description.* |

---

##### `durationInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionCriticalOutputReference.property.durationInput" id="cdktfprovidernewrelicinfraalertconditioncriticaloutputreferencepropertydurationinput"></a>

```typescript
public readonly durationInput: number;
```

- *Type:* `number`

---

##### `timeFunctionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionCriticalOutputReference.property.timeFunctionInput" id="cdktfprovidernewrelicinfraalertconditioncriticaloutputreferencepropertytimefunctioninput"></a>

```typescript
public readonly timeFunctionInput: string;
```

- *Type:* `string`

---

##### `valueInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionCriticalOutputReference.property.valueInput" id="cdktfprovidernewrelicinfraalertconditioncriticaloutputreferencepropertyvalueinput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* `number`

---

##### `duration`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionCriticalOutputReference.property.duration" id="cdktfprovidernewrelicinfraalertconditioncriticaloutputreferencepropertyduration"></a>

```typescript
public readonly duration: number;
```

- *Type:* `number`

---

##### `timeFunction`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionCriticalOutputReference.property.timeFunction" id="cdktfprovidernewrelicinfraalertconditioncriticaloutputreferencepropertytimefunction"></a>

```typescript
public readonly timeFunction: string;
```

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionCriticalOutputReference.property.value" id="cdktfprovidernewrelicinfraalertconditioncriticaloutputreferencepropertyvalue"></a>

```typescript
public readonly value: number;
```

- *Type:* `number`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionCriticalOutputReference.property.internalValue" id="cdktfprovidernewrelicinfraalertconditioncriticaloutputreferencepropertyinternalvalue"></a>

```typescript
public readonly internalValue: InfraAlertConditionCritical;
```

- *Type:* [`@cdktf/provider-newrelic.InfraAlertConditionCritical`](#@cdktf/provider-newrelic.InfraAlertConditionCritical)

---


### InfraAlertConditionWarningOutputReference <a name="@cdktf/provider-newrelic.InfraAlertConditionWarningOutputReference" id="cdktfprovidernewrelicinfraalertconditionwarningoutputreference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.InfraAlertConditionWarningOutputReference.Initializer" id="cdktfprovidernewrelicinfraalertconditionwarningoutputreferenceinitializer"></a>

```typescript
import { InfraAlertConditionWarningOutputReference } from '@cdktf/provider-newrelic'

new InfraAlertConditionWarningOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidernewrelicinfraalertconditionwarningoutputreferenceparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovidernewrelicinfraalertconditionwarningoutputreferenceparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |
| [`isSingleItem`](#cdktfprovidernewrelicinfraalertconditionwarningoutputreferenceparameterissingleitem)<span title="Required">*</span> | `boolean` | True if this is a block, false if it's a list. |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionWarningOutputReference.parameter.terraformResource" id="cdktfprovidernewrelicinfraalertconditionwarningoutputreferenceparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionWarningOutputReference.parameter.terraformAttribute" id="cdktfprovidernewrelicinfraalertconditionwarningoutputreferenceparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionWarningOutputReference.parameter.isSingleItem" id="cdktfprovidernewrelicinfraalertconditionwarningoutputreferenceparameterissingleitem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetTimeFunction`](#cdktfprovidernewrelicinfraalertconditionwarningoutputreferenceresettimefunction) | *No description.* |
| [`resetValue`](#cdktfprovidernewrelicinfraalertconditionwarningoutputreferenceresetvalue) | *No description.* |

---

##### `resetTimeFunction` <a name="@cdktf/provider-newrelic.InfraAlertConditionWarningOutputReference.resetTimeFunction" id="cdktfprovidernewrelicinfraalertconditionwarningoutputreferenceresettimefunction"></a>

```typescript
public resetTimeFunction()
```

##### `resetValue` <a name="@cdktf/provider-newrelic.InfraAlertConditionWarningOutputReference.resetValue" id="cdktfprovidernewrelicinfraalertconditionwarningoutputreferenceresetvalue"></a>

```typescript
public resetValue()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`durationInput`](#cdktfprovidernewrelicinfraalertconditionwarningoutputreferencepropertydurationinput) | `number` | *No description.* |
| [`timeFunctionInput`](#cdktfprovidernewrelicinfraalertconditionwarningoutputreferencepropertytimefunctioninput) | `string` | *No description.* |
| [`valueInput`](#cdktfprovidernewrelicinfraalertconditionwarningoutputreferencepropertyvalueinput) | `number` | *No description.* |
| [`duration`](#cdktfprovidernewrelicinfraalertconditionwarningoutputreferencepropertyduration)<span title="Required">*</span> | `number` | *No description.* |
| [`timeFunction`](#cdktfprovidernewrelicinfraalertconditionwarningoutputreferencepropertytimefunction)<span title="Required">*</span> | `string` | *No description.* |
| [`value`](#cdktfprovidernewrelicinfraalertconditionwarningoutputreferencepropertyvalue)<span title="Required">*</span> | `number` | *No description.* |
| [`internalValue`](#cdktfprovidernewrelicinfraalertconditionwarningoutputreferencepropertyinternalvalue) | [`@cdktf/provider-newrelic.InfraAlertConditionWarning`](#@cdktf/provider-newrelic.InfraAlertConditionWarning) | *No description.* |

---

##### `durationInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionWarningOutputReference.property.durationInput" id="cdktfprovidernewrelicinfraalertconditionwarningoutputreferencepropertydurationinput"></a>

```typescript
public readonly durationInput: number;
```

- *Type:* `number`

---

##### `timeFunctionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionWarningOutputReference.property.timeFunctionInput" id="cdktfprovidernewrelicinfraalertconditionwarningoutputreferencepropertytimefunctioninput"></a>

```typescript
public readonly timeFunctionInput: string;
```

- *Type:* `string`

---

##### `valueInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionWarningOutputReference.property.valueInput" id="cdktfprovidernewrelicinfraalertconditionwarningoutputreferencepropertyvalueinput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* `number`

---

##### `duration`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionWarningOutputReference.property.duration" id="cdktfprovidernewrelicinfraalertconditionwarningoutputreferencepropertyduration"></a>

```typescript
public readonly duration: number;
```

- *Type:* `number`

---

##### `timeFunction`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionWarningOutputReference.property.timeFunction" id="cdktfprovidernewrelicinfraalertconditionwarningoutputreferencepropertytimefunction"></a>

```typescript
public readonly timeFunction: string;
```

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionWarningOutputReference.property.value" id="cdktfprovidernewrelicinfraalertconditionwarningoutputreferencepropertyvalue"></a>

```typescript
public readonly value: number;
```

- *Type:* `number`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionWarningOutputReference.property.internalValue" id="cdktfprovidernewrelicinfraalertconditionwarningoutputreferencepropertyinternalvalue"></a>

```typescript
public readonly internalValue: InfraAlertConditionWarning;
```

- *Type:* [`@cdktf/provider-newrelic.InfraAlertConditionWarning`](#@cdktf/provider-newrelic.InfraAlertConditionWarning)

---


### NrqlAlertConditionCriticalOutputReference <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference" id="cdktfprovidernewrelicnrqlalertconditioncriticaloutputreference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.Initializer" id="cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferenceinitializer"></a>

```typescript
import { NrqlAlertConditionCriticalOutputReference } from '@cdktf/provider-newrelic'

new NrqlAlertConditionCriticalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferenceparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferenceparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |
| [`isSingleItem`](#cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferenceparameterissingleitem)<span title="Required">*</span> | `boolean` | True if this is a block, false if it's a list. |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.parameter.terraformResource" id="cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferenceparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.parameter.terraformAttribute" id="cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferenceparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.parameter.isSingleItem" id="cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferenceparameterissingleitem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetDuration`](#cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferenceresetduration) | *No description.* |
| [`resetOperator`](#cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferenceresetoperator) | *No description.* |
| [`resetThresholdDuration`](#cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferenceresetthresholdduration) | *No description.* |
| [`resetThresholdOccurrences`](#cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferenceresetthresholdoccurrences) | *No description.* |
| [`resetTimeFunction`](#cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferenceresettimefunction) | *No description.* |

---

##### `resetDuration` <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.resetDuration" id="cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferenceresetduration"></a>

```typescript
public resetDuration()
```

##### `resetOperator` <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.resetOperator" id="cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferenceresetoperator"></a>

```typescript
public resetOperator()
```

##### `resetThresholdDuration` <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.resetThresholdDuration" id="cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferenceresetthresholdduration"></a>

```typescript
public resetThresholdDuration()
```

##### `resetThresholdOccurrences` <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.resetThresholdOccurrences" id="cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferenceresetthresholdoccurrences"></a>

```typescript
public resetThresholdOccurrences()
```

##### `resetTimeFunction` <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.resetTimeFunction" id="cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferenceresettimefunction"></a>

```typescript
public resetTimeFunction()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`durationInput`](#cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferencepropertydurationinput) | `number` | *No description.* |
| [`operatorInput`](#cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferencepropertyoperatorinput) | `string` | *No description.* |
| [`thresholdDurationInput`](#cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferencepropertythresholddurationinput) | `number` | *No description.* |
| [`thresholdInput`](#cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferencepropertythresholdinput) | `number` | *No description.* |
| [`thresholdOccurrencesInput`](#cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferencepropertythresholdoccurrencesinput) | `string` | *No description.* |
| [`timeFunctionInput`](#cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferencepropertytimefunctioninput) | `string` | *No description.* |
| [`duration`](#cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferencepropertyduration)<span title="Required">*</span> | `number` | *No description.* |
| [`operator`](#cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferencepropertyoperator)<span title="Required">*</span> | `string` | *No description.* |
| [`threshold`](#cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferencepropertythreshold)<span title="Required">*</span> | `number` | *No description.* |
| [`thresholdDuration`](#cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferencepropertythresholdduration)<span title="Required">*</span> | `number` | *No description.* |
| [`thresholdOccurrences`](#cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferencepropertythresholdoccurrences)<span title="Required">*</span> | `string` | *No description.* |
| [`timeFunction`](#cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferencepropertytimefunction)<span title="Required">*</span> | `string` | *No description.* |
| [`internalValue`](#cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferencepropertyinternalvalue) | [`@cdktf/provider-newrelic.NrqlAlertConditionCritical`](#@cdktf/provider-newrelic.NrqlAlertConditionCritical) | *No description.* |

---

##### `durationInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.property.durationInput" id="cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferencepropertydurationinput"></a>

```typescript
public readonly durationInput: number;
```

- *Type:* `number`

---

##### `operatorInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.property.operatorInput" id="cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferencepropertyoperatorinput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* `string`

---

##### `thresholdDurationInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.property.thresholdDurationInput" id="cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferencepropertythresholddurationinput"></a>

```typescript
public readonly thresholdDurationInput: number;
```

- *Type:* `number`

---

##### `thresholdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.property.thresholdInput" id="cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferencepropertythresholdinput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* `number`

---

##### `thresholdOccurrencesInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.property.thresholdOccurrencesInput" id="cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferencepropertythresholdoccurrencesinput"></a>

```typescript
public readonly thresholdOccurrencesInput: string;
```

- *Type:* `string`

---

##### `timeFunctionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.property.timeFunctionInput" id="cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferencepropertytimefunctioninput"></a>

```typescript
public readonly timeFunctionInput: string;
```

- *Type:* `string`

---

##### `duration`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.property.duration" id="cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferencepropertyduration"></a>

```typescript
public readonly duration: number;
```

- *Type:* `number`

---

##### `operator`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.property.operator" id="cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferencepropertyoperator"></a>

```typescript
public readonly operator: string;
```

- *Type:* `string`

---

##### `threshold`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.property.threshold" id="cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferencepropertythreshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* `number`

---

##### `thresholdDuration`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.property.thresholdDuration" id="cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferencepropertythresholdduration"></a>

```typescript
public readonly thresholdDuration: number;
```

- *Type:* `number`

---

##### `thresholdOccurrences`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.property.thresholdOccurrences" id="cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferencepropertythresholdoccurrences"></a>

```typescript
public readonly thresholdOccurrences: string;
```

- *Type:* `string`

---

##### `timeFunction`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.property.timeFunction" id="cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferencepropertytimefunction"></a>

```typescript
public readonly timeFunction: string;
```

- *Type:* `string`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.property.internalValue" id="cdktfprovidernewrelicnrqlalertconditioncriticaloutputreferencepropertyinternalvalue"></a>

```typescript
public readonly internalValue: NrqlAlertConditionCritical;
```

- *Type:* [`@cdktf/provider-newrelic.NrqlAlertConditionCritical`](#@cdktf/provider-newrelic.NrqlAlertConditionCritical)

---


### NrqlAlertConditionNrqlOutputReference <a name="@cdktf/provider-newrelic.NrqlAlertConditionNrqlOutputReference" id="cdktfprovidernewrelicnrqlalertconditionnrqloutputreference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.NrqlAlertConditionNrqlOutputReference.Initializer" id="cdktfprovidernewrelicnrqlalertconditionnrqloutputreferenceinitializer"></a>

```typescript
import { NrqlAlertConditionNrqlOutputReference } from '@cdktf/provider-newrelic'

new NrqlAlertConditionNrqlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidernewrelicnrqlalertconditionnrqloutputreferenceparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovidernewrelicnrqlalertconditionnrqloutputreferenceparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |
| [`isSingleItem`](#cdktfprovidernewrelicnrqlalertconditionnrqloutputreferenceparameterissingleitem)<span title="Required">*</span> | `boolean` | True if this is a block, false if it's a list. |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionNrqlOutputReference.parameter.terraformResource" id="cdktfprovidernewrelicnrqlalertconditionnrqloutputreferenceparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionNrqlOutputReference.parameter.terraformAttribute" id="cdktfprovidernewrelicnrqlalertconditionnrqloutputreferenceparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionNrqlOutputReference.parameter.isSingleItem" id="cdktfprovidernewrelicnrqlalertconditionnrqloutputreferenceparameterissingleitem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetEvaluationOffset`](#cdktfprovidernewrelicnrqlalertconditionnrqloutputreferenceresetevaluationoffset) | *No description.* |
| [`resetSinceValue`](#cdktfprovidernewrelicnrqlalertconditionnrqloutputreferenceresetsincevalue) | *No description.* |

---

##### `resetEvaluationOffset` <a name="@cdktf/provider-newrelic.NrqlAlertConditionNrqlOutputReference.resetEvaluationOffset" id="cdktfprovidernewrelicnrqlalertconditionnrqloutputreferenceresetevaluationoffset"></a>

```typescript
public resetEvaluationOffset()
```

##### `resetSinceValue` <a name="@cdktf/provider-newrelic.NrqlAlertConditionNrqlOutputReference.resetSinceValue" id="cdktfprovidernewrelicnrqlalertconditionnrqloutputreferenceresetsincevalue"></a>

```typescript
public resetSinceValue()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`evaluationOffsetInput`](#cdktfprovidernewrelicnrqlalertconditionnrqloutputreferencepropertyevaluationoffsetinput) | `number` | *No description.* |
| [`queryInput`](#cdktfprovidernewrelicnrqlalertconditionnrqloutputreferencepropertyqueryinput) | `string` | *No description.* |
| [`sinceValueInput`](#cdktfprovidernewrelicnrqlalertconditionnrqloutputreferencepropertysincevalueinput) | `string` | *No description.* |
| [`evaluationOffset`](#cdktfprovidernewrelicnrqlalertconditionnrqloutputreferencepropertyevaluationoffset)<span title="Required">*</span> | `number` | *No description.* |
| [`query`](#cdktfprovidernewrelicnrqlalertconditionnrqloutputreferencepropertyquery)<span title="Required">*</span> | `string` | *No description.* |
| [`sinceValue`](#cdktfprovidernewrelicnrqlalertconditionnrqloutputreferencepropertysincevalue)<span title="Required">*</span> | `string` | *No description.* |
| [`internalValue`](#cdktfprovidernewrelicnrqlalertconditionnrqloutputreferencepropertyinternalvalue) | [`@cdktf/provider-newrelic.NrqlAlertConditionNrql`](#@cdktf/provider-newrelic.NrqlAlertConditionNrql) | *No description.* |

---

##### `evaluationOffsetInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionNrqlOutputReference.property.evaluationOffsetInput" id="cdktfprovidernewrelicnrqlalertconditionnrqloutputreferencepropertyevaluationoffsetinput"></a>

```typescript
public readonly evaluationOffsetInput: number;
```

- *Type:* `number`

---

##### `queryInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionNrqlOutputReference.property.queryInput" id="cdktfprovidernewrelicnrqlalertconditionnrqloutputreferencepropertyqueryinput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* `string`

---

##### `sinceValueInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionNrqlOutputReference.property.sinceValueInput" id="cdktfprovidernewrelicnrqlalertconditionnrqloutputreferencepropertysincevalueinput"></a>

```typescript
public readonly sinceValueInput: string;
```

- *Type:* `string`

---

##### `evaluationOffset`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionNrqlOutputReference.property.evaluationOffset" id="cdktfprovidernewrelicnrqlalertconditionnrqloutputreferencepropertyevaluationoffset"></a>

```typescript
public readonly evaluationOffset: number;
```

- *Type:* `number`

---

##### `query`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionNrqlOutputReference.property.query" id="cdktfprovidernewrelicnrqlalertconditionnrqloutputreferencepropertyquery"></a>

```typescript
public readonly query: string;
```

- *Type:* `string`

---

##### `sinceValue`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionNrqlOutputReference.property.sinceValue" id="cdktfprovidernewrelicnrqlalertconditionnrqloutputreferencepropertysincevalue"></a>

```typescript
public readonly sinceValue: string;
```

- *Type:* `string`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionNrqlOutputReference.property.internalValue" id="cdktfprovidernewrelicnrqlalertconditionnrqloutputreferencepropertyinternalvalue"></a>

```typescript
public readonly internalValue: NrqlAlertConditionNrql;
```

- *Type:* [`@cdktf/provider-newrelic.NrqlAlertConditionNrql`](#@cdktf/provider-newrelic.NrqlAlertConditionNrql)

---


### NrqlAlertConditionWarningOutputReference <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference" id="cdktfprovidernewrelicnrqlalertconditionwarningoutputreference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.Initializer" id="cdktfprovidernewrelicnrqlalertconditionwarningoutputreferenceinitializer"></a>

```typescript
import { NrqlAlertConditionWarningOutputReference } from '@cdktf/provider-newrelic'

new NrqlAlertConditionWarningOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidernewrelicnrqlalertconditionwarningoutputreferenceparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovidernewrelicnrqlalertconditionwarningoutputreferenceparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |
| [`isSingleItem`](#cdktfprovidernewrelicnrqlalertconditionwarningoutputreferenceparameterissingleitem)<span title="Required">*</span> | `boolean` | True if this is a block, false if it's a list. |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.parameter.terraformResource" id="cdktfprovidernewrelicnrqlalertconditionwarningoutputreferenceparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.parameter.terraformAttribute" id="cdktfprovidernewrelicnrqlalertconditionwarningoutputreferenceparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.parameter.isSingleItem" id="cdktfprovidernewrelicnrqlalertconditionwarningoutputreferenceparameterissingleitem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetDuration`](#cdktfprovidernewrelicnrqlalertconditionwarningoutputreferenceresetduration) | *No description.* |
| [`resetOperator`](#cdktfprovidernewrelicnrqlalertconditionwarningoutputreferenceresetoperator) | *No description.* |
| [`resetThresholdDuration`](#cdktfprovidernewrelicnrqlalertconditionwarningoutputreferenceresetthresholdduration) | *No description.* |
| [`resetThresholdOccurrences`](#cdktfprovidernewrelicnrqlalertconditionwarningoutputreferenceresetthresholdoccurrences) | *No description.* |
| [`resetTimeFunction`](#cdktfprovidernewrelicnrqlalertconditionwarningoutputreferenceresettimefunction) | *No description.* |

---

##### `resetDuration` <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.resetDuration" id="cdktfprovidernewrelicnrqlalertconditionwarningoutputreferenceresetduration"></a>

```typescript
public resetDuration()
```

##### `resetOperator` <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.resetOperator" id="cdktfprovidernewrelicnrqlalertconditionwarningoutputreferenceresetoperator"></a>

```typescript
public resetOperator()
```

##### `resetThresholdDuration` <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.resetThresholdDuration" id="cdktfprovidernewrelicnrqlalertconditionwarningoutputreferenceresetthresholdduration"></a>

```typescript
public resetThresholdDuration()
```

##### `resetThresholdOccurrences` <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.resetThresholdOccurrences" id="cdktfprovidernewrelicnrqlalertconditionwarningoutputreferenceresetthresholdoccurrences"></a>

```typescript
public resetThresholdOccurrences()
```

##### `resetTimeFunction` <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.resetTimeFunction" id="cdktfprovidernewrelicnrqlalertconditionwarningoutputreferenceresettimefunction"></a>

```typescript
public resetTimeFunction()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`durationInput`](#cdktfprovidernewrelicnrqlalertconditionwarningoutputreferencepropertydurationinput) | `number` | *No description.* |
| [`operatorInput`](#cdktfprovidernewrelicnrqlalertconditionwarningoutputreferencepropertyoperatorinput) | `string` | *No description.* |
| [`thresholdDurationInput`](#cdktfprovidernewrelicnrqlalertconditionwarningoutputreferencepropertythresholddurationinput) | `number` | *No description.* |
| [`thresholdInput`](#cdktfprovidernewrelicnrqlalertconditionwarningoutputreferencepropertythresholdinput) | `number` | *No description.* |
| [`thresholdOccurrencesInput`](#cdktfprovidernewrelicnrqlalertconditionwarningoutputreferencepropertythresholdoccurrencesinput) | `string` | *No description.* |
| [`timeFunctionInput`](#cdktfprovidernewrelicnrqlalertconditionwarningoutputreferencepropertytimefunctioninput) | `string` | *No description.* |
| [`duration`](#cdktfprovidernewrelicnrqlalertconditionwarningoutputreferencepropertyduration)<span title="Required">*</span> | `number` | *No description.* |
| [`operator`](#cdktfprovidernewrelicnrqlalertconditionwarningoutputreferencepropertyoperator)<span title="Required">*</span> | `string` | *No description.* |
| [`threshold`](#cdktfprovidernewrelicnrqlalertconditionwarningoutputreferencepropertythreshold)<span title="Required">*</span> | `number` | *No description.* |
| [`thresholdDuration`](#cdktfprovidernewrelicnrqlalertconditionwarningoutputreferencepropertythresholdduration)<span title="Required">*</span> | `number` | *No description.* |
| [`thresholdOccurrences`](#cdktfprovidernewrelicnrqlalertconditionwarningoutputreferencepropertythresholdoccurrences)<span title="Required">*</span> | `string` | *No description.* |
| [`timeFunction`](#cdktfprovidernewrelicnrqlalertconditionwarningoutputreferencepropertytimefunction)<span title="Required">*</span> | `string` | *No description.* |
| [`internalValue`](#cdktfprovidernewrelicnrqlalertconditionwarningoutputreferencepropertyinternalvalue) | [`@cdktf/provider-newrelic.NrqlAlertConditionWarning`](#@cdktf/provider-newrelic.NrqlAlertConditionWarning) | *No description.* |

---

##### `durationInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.property.durationInput" id="cdktfprovidernewrelicnrqlalertconditionwarningoutputreferencepropertydurationinput"></a>

```typescript
public readonly durationInput: number;
```

- *Type:* `number`

---

##### `operatorInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.property.operatorInput" id="cdktfprovidernewrelicnrqlalertconditionwarningoutputreferencepropertyoperatorinput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* `string`

---

##### `thresholdDurationInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.property.thresholdDurationInput" id="cdktfprovidernewrelicnrqlalertconditionwarningoutputreferencepropertythresholddurationinput"></a>

```typescript
public readonly thresholdDurationInput: number;
```

- *Type:* `number`

---

##### `thresholdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.property.thresholdInput" id="cdktfprovidernewrelicnrqlalertconditionwarningoutputreferencepropertythresholdinput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* `number`

---

##### `thresholdOccurrencesInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.property.thresholdOccurrencesInput" id="cdktfprovidernewrelicnrqlalertconditionwarningoutputreferencepropertythresholdoccurrencesinput"></a>

```typescript
public readonly thresholdOccurrencesInput: string;
```

- *Type:* `string`

---

##### `timeFunctionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.property.timeFunctionInput" id="cdktfprovidernewrelicnrqlalertconditionwarningoutputreferencepropertytimefunctioninput"></a>

```typescript
public readonly timeFunctionInput: string;
```

- *Type:* `string`

---

##### `duration`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.property.duration" id="cdktfprovidernewrelicnrqlalertconditionwarningoutputreferencepropertyduration"></a>

```typescript
public readonly duration: number;
```

- *Type:* `number`

---

##### `operator`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.property.operator" id="cdktfprovidernewrelicnrqlalertconditionwarningoutputreferencepropertyoperator"></a>

```typescript
public readonly operator: string;
```

- *Type:* `string`

---

##### `threshold`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.property.threshold" id="cdktfprovidernewrelicnrqlalertconditionwarningoutputreferencepropertythreshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* `number`

---

##### `thresholdDuration`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.property.thresholdDuration" id="cdktfprovidernewrelicnrqlalertconditionwarningoutputreferencepropertythresholdduration"></a>

```typescript
public readonly thresholdDuration: number;
```

- *Type:* `number`

---

##### `thresholdOccurrences`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.property.thresholdOccurrences" id="cdktfprovidernewrelicnrqlalertconditionwarningoutputreferencepropertythresholdoccurrences"></a>

```typescript
public readonly thresholdOccurrences: string;
```

- *Type:* `string`

---

##### `timeFunction`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.property.timeFunction" id="cdktfprovidernewrelicnrqlalertconditionwarningoutputreferencepropertytimefunction"></a>

```typescript
public readonly timeFunction: string;
```

- *Type:* `string`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.property.internalValue" id="cdktfprovidernewrelicnrqlalertconditionwarningoutputreferencepropertyinternalvalue"></a>

```typescript
public readonly internalValue: NrqlAlertConditionWarning;
```

- *Type:* [`@cdktf/provider-newrelic.NrqlAlertConditionWarning`](#@cdktf/provider-newrelic.NrqlAlertConditionWarning)

---


### ServiceLevelEventsBadEventsOutputReference <a name="@cdktf/provider-newrelic.ServiceLevelEventsBadEventsOutputReference" id="cdktfprovidernewrelicserviceleveleventsbadeventsoutputreference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.ServiceLevelEventsBadEventsOutputReference.Initializer" id="cdktfprovidernewrelicserviceleveleventsbadeventsoutputreferenceinitializer"></a>

```typescript
import { ServiceLevelEventsBadEventsOutputReference } from '@cdktf/provider-newrelic'

new ServiceLevelEventsBadEventsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidernewrelicserviceleveleventsbadeventsoutputreferenceparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovidernewrelicserviceleveleventsbadeventsoutputreferenceparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |
| [`isSingleItem`](#cdktfprovidernewrelicserviceleveleventsbadeventsoutputreferenceparameterissingleitem)<span title="Required">*</span> | `boolean` | True if this is a block, false if it's a list. |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsBadEventsOutputReference.parameter.terraformResource" id="cdktfprovidernewrelicserviceleveleventsbadeventsoutputreferenceparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsBadEventsOutputReference.parameter.terraformAttribute" id="cdktfprovidernewrelicserviceleveleventsbadeventsoutputreferenceparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsBadEventsOutputReference.parameter.isSingleItem" id="cdktfprovidernewrelicserviceleveleventsbadeventsoutputreferenceparameterissingleitem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetWhere`](#cdktfprovidernewrelicserviceleveleventsbadeventsoutputreferenceresetwhere) | *No description.* |

---

##### `resetWhere` <a name="@cdktf/provider-newrelic.ServiceLevelEventsBadEventsOutputReference.resetWhere" id="cdktfprovidernewrelicserviceleveleventsbadeventsoutputreferenceresetwhere"></a>

```typescript
public resetWhere()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`fromInput`](#cdktfprovidernewrelicserviceleveleventsbadeventsoutputreferencepropertyfrominput) | `string` | *No description.* |
| [`whereInput`](#cdktfprovidernewrelicserviceleveleventsbadeventsoutputreferencepropertywhereinput) | `string` | *No description.* |
| [`from`](#cdktfprovidernewrelicserviceleveleventsbadeventsoutputreferencepropertyfrom)<span title="Required">*</span> | `string` | *No description.* |
| [`where`](#cdktfprovidernewrelicserviceleveleventsbadeventsoutputreferencepropertywhere)<span title="Required">*</span> | `string` | *No description.* |
| [`internalValue`](#cdktfprovidernewrelicserviceleveleventsbadeventsoutputreferencepropertyinternalvalue) | [`@cdktf/provider-newrelic.ServiceLevelEventsBadEvents`](#@cdktf/provider-newrelic.ServiceLevelEventsBadEvents) | *No description.* |

---

##### `fromInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsBadEventsOutputReference.property.fromInput" id="cdktfprovidernewrelicserviceleveleventsbadeventsoutputreferencepropertyfrominput"></a>

```typescript
public readonly fromInput: string;
```

- *Type:* `string`

---

##### `whereInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsBadEventsOutputReference.property.whereInput" id="cdktfprovidernewrelicserviceleveleventsbadeventsoutputreferencepropertywhereinput"></a>

```typescript
public readonly whereInput: string;
```

- *Type:* `string`

---

##### `from`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsBadEventsOutputReference.property.from" id="cdktfprovidernewrelicserviceleveleventsbadeventsoutputreferencepropertyfrom"></a>

```typescript
public readonly from: string;
```

- *Type:* `string`

---

##### `where`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsBadEventsOutputReference.property.where" id="cdktfprovidernewrelicserviceleveleventsbadeventsoutputreferencepropertywhere"></a>

```typescript
public readonly where: string;
```

- *Type:* `string`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsBadEventsOutputReference.property.internalValue" id="cdktfprovidernewrelicserviceleveleventsbadeventsoutputreferencepropertyinternalvalue"></a>

```typescript
public readonly internalValue: ServiceLevelEventsBadEvents;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelEventsBadEvents`](#@cdktf/provider-newrelic.ServiceLevelEventsBadEvents)

---


### ServiceLevelEventsGoodEventsOutputReference <a name="@cdktf/provider-newrelic.ServiceLevelEventsGoodEventsOutputReference" id="cdktfprovidernewrelicserviceleveleventsgoodeventsoutputreference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.ServiceLevelEventsGoodEventsOutputReference.Initializer" id="cdktfprovidernewrelicserviceleveleventsgoodeventsoutputreferenceinitializer"></a>

```typescript
import { ServiceLevelEventsGoodEventsOutputReference } from '@cdktf/provider-newrelic'

new ServiceLevelEventsGoodEventsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidernewrelicserviceleveleventsgoodeventsoutputreferenceparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovidernewrelicserviceleveleventsgoodeventsoutputreferenceparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |
| [`isSingleItem`](#cdktfprovidernewrelicserviceleveleventsgoodeventsoutputreferenceparameterissingleitem)<span title="Required">*</span> | `boolean` | True if this is a block, false if it's a list. |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsGoodEventsOutputReference.parameter.terraformResource" id="cdktfprovidernewrelicserviceleveleventsgoodeventsoutputreferenceparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsGoodEventsOutputReference.parameter.terraformAttribute" id="cdktfprovidernewrelicserviceleveleventsgoodeventsoutputreferenceparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsGoodEventsOutputReference.parameter.isSingleItem" id="cdktfprovidernewrelicserviceleveleventsgoodeventsoutputreferenceparameterissingleitem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetWhere`](#cdktfprovidernewrelicserviceleveleventsgoodeventsoutputreferenceresetwhere) | *No description.* |

---

##### `resetWhere` <a name="@cdktf/provider-newrelic.ServiceLevelEventsGoodEventsOutputReference.resetWhere" id="cdktfprovidernewrelicserviceleveleventsgoodeventsoutputreferenceresetwhere"></a>

```typescript
public resetWhere()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`fromInput`](#cdktfprovidernewrelicserviceleveleventsgoodeventsoutputreferencepropertyfrominput) | `string` | *No description.* |
| [`whereInput`](#cdktfprovidernewrelicserviceleveleventsgoodeventsoutputreferencepropertywhereinput) | `string` | *No description.* |
| [`from`](#cdktfprovidernewrelicserviceleveleventsgoodeventsoutputreferencepropertyfrom)<span title="Required">*</span> | `string` | *No description.* |
| [`where`](#cdktfprovidernewrelicserviceleveleventsgoodeventsoutputreferencepropertywhere)<span title="Required">*</span> | `string` | *No description.* |
| [`internalValue`](#cdktfprovidernewrelicserviceleveleventsgoodeventsoutputreferencepropertyinternalvalue) | [`@cdktf/provider-newrelic.ServiceLevelEventsGoodEvents`](#@cdktf/provider-newrelic.ServiceLevelEventsGoodEvents) | *No description.* |

---

##### `fromInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsGoodEventsOutputReference.property.fromInput" id="cdktfprovidernewrelicserviceleveleventsgoodeventsoutputreferencepropertyfrominput"></a>

```typescript
public readonly fromInput: string;
```

- *Type:* `string`

---

##### `whereInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsGoodEventsOutputReference.property.whereInput" id="cdktfprovidernewrelicserviceleveleventsgoodeventsoutputreferencepropertywhereinput"></a>

```typescript
public readonly whereInput: string;
```

- *Type:* `string`

---

##### `from`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsGoodEventsOutputReference.property.from" id="cdktfprovidernewrelicserviceleveleventsgoodeventsoutputreferencepropertyfrom"></a>

```typescript
public readonly from: string;
```

- *Type:* `string`

---

##### `where`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsGoodEventsOutputReference.property.where" id="cdktfprovidernewrelicserviceleveleventsgoodeventsoutputreferencepropertywhere"></a>

```typescript
public readonly where: string;
```

- *Type:* `string`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsGoodEventsOutputReference.property.internalValue" id="cdktfprovidernewrelicserviceleveleventsgoodeventsoutputreferencepropertyinternalvalue"></a>

```typescript
public readonly internalValue: ServiceLevelEventsGoodEvents;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelEventsGoodEvents`](#@cdktf/provider-newrelic.ServiceLevelEventsGoodEvents)

---


### ServiceLevelEventsOutputReference <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference" id="cdktfprovidernewrelicserviceleveleventsoutputreference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.Initializer" id="cdktfprovidernewrelicserviceleveleventsoutputreferenceinitializer"></a>

```typescript
import { ServiceLevelEventsOutputReference } from '@cdktf/provider-newrelic'

new ServiceLevelEventsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidernewrelicserviceleveleventsoutputreferenceparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovidernewrelicserviceleveleventsoutputreferenceparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |
| [`isSingleItem`](#cdktfprovidernewrelicserviceleveleventsoutputreferenceparameterissingleitem)<span title="Required">*</span> | `boolean` | True if this is a block, false if it's a list. |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.parameter.terraformResource" id="cdktfprovidernewrelicserviceleveleventsoutputreferenceparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.parameter.terraformAttribute" id="cdktfprovidernewrelicserviceleveleventsoutputreferenceparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.parameter.isSingleItem" id="cdktfprovidernewrelicserviceleveleventsoutputreferenceparameterissingleitem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`putBadEvents`](#cdktfprovidernewrelicserviceleveleventsoutputreferenceputbadevents) | *No description.* |
| [`putGoodEvents`](#cdktfprovidernewrelicserviceleveleventsoutputreferenceputgoodevents) | *No description.* |
| [`putValidEvents`](#cdktfprovidernewrelicserviceleveleventsoutputreferenceputvalidevents) | *No description.* |
| [`resetBadEvents`](#cdktfprovidernewrelicserviceleveleventsoutputreferenceresetbadevents) | *No description.* |
| [`resetGoodEvents`](#cdktfprovidernewrelicserviceleveleventsoutputreferenceresetgoodevents) | *No description.* |

---

##### `putBadEvents` <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.putBadEvents" id="cdktfprovidernewrelicserviceleveleventsoutputreferenceputbadevents"></a>

```typescript
public putBadEvents(value: ServiceLevelEventsBadEvents)
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.parameter.value" id="cdktfprovidernewrelicserviceleveleventsoutputreferenceparametervalue"></a>

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelEventsBadEvents`](#@cdktf/provider-newrelic.ServiceLevelEventsBadEvents)

---

##### `putGoodEvents` <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.putGoodEvents" id="cdktfprovidernewrelicserviceleveleventsoutputreferenceputgoodevents"></a>

```typescript
public putGoodEvents(value: ServiceLevelEventsGoodEvents)
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.parameter.value" id="cdktfprovidernewrelicserviceleveleventsoutputreferenceparametervalue"></a>

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelEventsGoodEvents`](#@cdktf/provider-newrelic.ServiceLevelEventsGoodEvents)

---

##### `putValidEvents` <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.putValidEvents" id="cdktfprovidernewrelicserviceleveleventsoutputreferenceputvalidevents"></a>

```typescript
public putValidEvents(value: ServiceLevelEventsValidEvents)
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.parameter.value" id="cdktfprovidernewrelicserviceleveleventsoutputreferenceparametervalue"></a>

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelEventsValidEvents`](#@cdktf/provider-newrelic.ServiceLevelEventsValidEvents)

---

##### `resetBadEvents` <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.resetBadEvents" id="cdktfprovidernewrelicserviceleveleventsoutputreferenceresetbadevents"></a>

```typescript
public resetBadEvents()
```

##### `resetGoodEvents` <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.resetGoodEvents" id="cdktfprovidernewrelicserviceleveleventsoutputreferenceresetgoodevents"></a>

```typescript
public resetGoodEvents()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`badEvents`](#cdktfprovidernewrelicserviceleveleventsoutputreferencepropertybadevents)<span title="Required">*</span> | [`@cdktf/provider-newrelic.ServiceLevelEventsBadEventsOutputReference`](#@cdktf/provider-newrelic.ServiceLevelEventsBadEventsOutputReference) | *No description.* |
| [`goodEvents`](#cdktfprovidernewrelicserviceleveleventsoutputreferencepropertygoodevents)<span title="Required">*</span> | [`@cdktf/provider-newrelic.ServiceLevelEventsGoodEventsOutputReference`](#@cdktf/provider-newrelic.ServiceLevelEventsGoodEventsOutputReference) | *No description.* |
| [`validEvents`](#cdktfprovidernewrelicserviceleveleventsoutputreferencepropertyvalidevents)<span title="Required">*</span> | [`@cdktf/provider-newrelic.ServiceLevelEventsValidEventsOutputReference`](#@cdktf/provider-newrelic.ServiceLevelEventsValidEventsOutputReference) | *No description.* |
| [`accountIdInput`](#cdktfprovidernewrelicserviceleveleventsoutputreferencepropertyaccountidinput) | `number` | *No description.* |
| [`badEventsInput`](#cdktfprovidernewrelicserviceleveleventsoutputreferencepropertybadeventsinput) | [`@cdktf/provider-newrelic.ServiceLevelEventsBadEvents`](#@cdktf/provider-newrelic.ServiceLevelEventsBadEvents) | *No description.* |
| [`goodEventsInput`](#cdktfprovidernewrelicserviceleveleventsoutputreferencepropertygoodeventsinput) | [`@cdktf/provider-newrelic.ServiceLevelEventsGoodEvents`](#@cdktf/provider-newrelic.ServiceLevelEventsGoodEvents) | *No description.* |
| [`validEventsInput`](#cdktfprovidernewrelicserviceleveleventsoutputreferencepropertyvalideventsinput) | [`@cdktf/provider-newrelic.ServiceLevelEventsValidEvents`](#@cdktf/provider-newrelic.ServiceLevelEventsValidEvents) | *No description.* |
| [`accountId`](#cdktfprovidernewrelicserviceleveleventsoutputreferencepropertyaccountid)<span title="Required">*</span> | `number` | *No description.* |
| [`internalValue`](#cdktfprovidernewrelicserviceleveleventsoutputreferencepropertyinternalvalue) | [`@cdktf/provider-newrelic.ServiceLevelEvents`](#@cdktf/provider-newrelic.ServiceLevelEvents) | *No description.* |

---

##### `badEvents`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.property.badEvents" id="cdktfprovidernewrelicserviceleveleventsoutputreferencepropertybadevents"></a>

```typescript
public readonly badEvents: ServiceLevelEventsBadEventsOutputReference;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelEventsBadEventsOutputReference`](#@cdktf/provider-newrelic.ServiceLevelEventsBadEventsOutputReference)

---

##### `goodEvents`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.property.goodEvents" id="cdktfprovidernewrelicserviceleveleventsoutputreferencepropertygoodevents"></a>

```typescript
public readonly goodEvents: ServiceLevelEventsGoodEventsOutputReference;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelEventsGoodEventsOutputReference`](#@cdktf/provider-newrelic.ServiceLevelEventsGoodEventsOutputReference)

---

##### `validEvents`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.property.validEvents" id="cdktfprovidernewrelicserviceleveleventsoutputreferencepropertyvalidevents"></a>

```typescript
public readonly validEvents: ServiceLevelEventsValidEventsOutputReference;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelEventsValidEventsOutputReference`](#@cdktf/provider-newrelic.ServiceLevelEventsValidEventsOutputReference)

---

##### `accountIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.property.accountIdInput" id="cdktfprovidernewrelicserviceleveleventsoutputreferencepropertyaccountidinput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* `number`

---

##### `badEventsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.property.badEventsInput" id="cdktfprovidernewrelicserviceleveleventsoutputreferencepropertybadeventsinput"></a>

```typescript
public readonly badEventsInput: ServiceLevelEventsBadEvents;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelEventsBadEvents`](#@cdktf/provider-newrelic.ServiceLevelEventsBadEvents)

---

##### `goodEventsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.property.goodEventsInput" id="cdktfprovidernewrelicserviceleveleventsoutputreferencepropertygoodeventsinput"></a>

```typescript
public readonly goodEventsInput: ServiceLevelEventsGoodEvents;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelEventsGoodEvents`](#@cdktf/provider-newrelic.ServiceLevelEventsGoodEvents)

---

##### `validEventsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.property.validEventsInput" id="cdktfprovidernewrelicserviceleveleventsoutputreferencepropertyvalideventsinput"></a>

```typescript
public readonly validEventsInput: ServiceLevelEventsValidEvents;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelEventsValidEvents`](#@cdktf/provider-newrelic.ServiceLevelEventsValidEvents)

---

##### `accountId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.property.accountId" id="cdktfprovidernewrelicserviceleveleventsoutputreferencepropertyaccountid"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.property.internalValue" id="cdktfprovidernewrelicserviceleveleventsoutputreferencepropertyinternalvalue"></a>

```typescript
public readonly internalValue: ServiceLevelEvents;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelEvents`](#@cdktf/provider-newrelic.ServiceLevelEvents)

---


### ServiceLevelEventsValidEventsOutputReference <a name="@cdktf/provider-newrelic.ServiceLevelEventsValidEventsOutputReference" id="cdktfprovidernewrelicserviceleveleventsvalideventsoutputreference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.ServiceLevelEventsValidEventsOutputReference.Initializer" id="cdktfprovidernewrelicserviceleveleventsvalideventsoutputreferenceinitializer"></a>

```typescript
import { ServiceLevelEventsValidEventsOutputReference } from '@cdktf/provider-newrelic'

new ServiceLevelEventsValidEventsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidernewrelicserviceleveleventsvalideventsoutputreferenceparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovidernewrelicserviceleveleventsvalideventsoutputreferenceparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |
| [`isSingleItem`](#cdktfprovidernewrelicserviceleveleventsvalideventsoutputreferenceparameterissingleitem)<span title="Required">*</span> | `boolean` | True if this is a block, false if it's a list. |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsValidEventsOutputReference.parameter.terraformResource" id="cdktfprovidernewrelicserviceleveleventsvalideventsoutputreferenceparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsValidEventsOutputReference.parameter.terraformAttribute" id="cdktfprovidernewrelicserviceleveleventsvalideventsoutputreferenceparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsValidEventsOutputReference.parameter.isSingleItem" id="cdktfprovidernewrelicserviceleveleventsvalideventsoutputreferenceparameterissingleitem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetWhere`](#cdktfprovidernewrelicserviceleveleventsvalideventsoutputreferenceresetwhere) | *No description.* |

---

##### `resetWhere` <a name="@cdktf/provider-newrelic.ServiceLevelEventsValidEventsOutputReference.resetWhere" id="cdktfprovidernewrelicserviceleveleventsvalideventsoutputreferenceresetwhere"></a>

```typescript
public resetWhere()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`fromInput`](#cdktfprovidernewrelicserviceleveleventsvalideventsoutputreferencepropertyfrominput) | `string` | *No description.* |
| [`whereInput`](#cdktfprovidernewrelicserviceleveleventsvalideventsoutputreferencepropertywhereinput) | `string` | *No description.* |
| [`from`](#cdktfprovidernewrelicserviceleveleventsvalideventsoutputreferencepropertyfrom)<span title="Required">*</span> | `string` | *No description.* |
| [`where`](#cdktfprovidernewrelicserviceleveleventsvalideventsoutputreferencepropertywhere)<span title="Required">*</span> | `string` | *No description.* |
| [`internalValue`](#cdktfprovidernewrelicserviceleveleventsvalideventsoutputreferencepropertyinternalvalue) | [`@cdktf/provider-newrelic.ServiceLevelEventsValidEvents`](#@cdktf/provider-newrelic.ServiceLevelEventsValidEvents) | *No description.* |

---

##### `fromInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsValidEventsOutputReference.property.fromInput" id="cdktfprovidernewrelicserviceleveleventsvalideventsoutputreferencepropertyfrominput"></a>

```typescript
public readonly fromInput: string;
```

- *Type:* `string`

---

##### `whereInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsValidEventsOutputReference.property.whereInput" id="cdktfprovidernewrelicserviceleveleventsvalideventsoutputreferencepropertywhereinput"></a>

```typescript
public readonly whereInput: string;
```

- *Type:* `string`

---

##### `from`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsValidEventsOutputReference.property.from" id="cdktfprovidernewrelicserviceleveleventsvalideventsoutputreferencepropertyfrom"></a>

```typescript
public readonly from: string;
```

- *Type:* `string`

---

##### `where`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsValidEventsOutputReference.property.where" id="cdktfprovidernewrelicserviceleveleventsvalideventsoutputreferencepropertywhere"></a>

```typescript
public readonly where: string;
```

- *Type:* `string`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsValidEventsOutputReference.property.internalValue" id="cdktfprovidernewrelicserviceleveleventsvalideventsoutputreferencepropertyinternalvalue"></a>

```typescript
public readonly internalValue: ServiceLevelEventsValidEvents;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelEventsValidEvents`](#@cdktf/provider-newrelic.ServiceLevelEventsValidEvents)

---


### ServiceLevelObjectiveTimeWindowOutputReference <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowOutputReference" id="cdktfprovidernewrelicservicelevelobjectivetimewindowoutputreference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowOutputReference.Initializer" id="cdktfprovidernewrelicservicelevelobjectivetimewindowoutputreferenceinitializer"></a>

```typescript
import { ServiceLevelObjectiveTimeWindowOutputReference } from '@cdktf/provider-newrelic'

new ServiceLevelObjectiveTimeWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidernewrelicservicelevelobjectivetimewindowoutputreferenceparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovidernewrelicservicelevelobjectivetimewindowoutputreferenceparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |
| [`isSingleItem`](#cdktfprovidernewrelicservicelevelobjectivetimewindowoutputreferenceparameterissingleitem)<span title="Required">*</span> | `boolean` | True if this is a block, false if it's a list. |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowOutputReference.parameter.terraformResource" id="cdktfprovidernewrelicservicelevelobjectivetimewindowoutputreferenceparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowOutputReference.parameter.terraformAttribute" id="cdktfprovidernewrelicservicelevelobjectivetimewindowoutputreferenceparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowOutputReference.parameter.isSingleItem" id="cdktfprovidernewrelicservicelevelobjectivetimewindowoutputreferenceparameterissingleitem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`putRolling`](#cdktfprovidernewrelicservicelevelobjectivetimewindowoutputreferenceputrolling) | *No description.* |

---

##### `putRolling` <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowOutputReference.putRolling" id="cdktfprovidernewrelicservicelevelobjectivetimewindowoutputreferenceputrolling"></a>

```typescript
public putRolling(value: ServiceLevelObjectiveTimeWindowRolling)
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowOutputReference.parameter.value" id="cdktfprovidernewrelicservicelevelobjectivetimewindowoutputreferenceparametervalue"></a>

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRolling`](#@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRolling)

---


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`rolling`](#cdktfprovidernewrelicservicelevelobjectivetimewindowoutputreferencepropertyrolling)<span title="Required">*</span> | [`@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRollingOutputReference`](#@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRollingOutputReference) | *No description.* |
| [`rollingInput`](#cdktfprovidernewrelicservicelevelobjectivetimewindowoutputreferencepropertyrollinginput) | [`@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRolling`](#@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRolling) | *No description.* |
| [`internalValue`](#cdktfprovidernewrelicservicelevelobjectivetimewindowoutputreferencepropertyinternalvalue) | [`@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindow`](#@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindow) | *No description.* |

---

##### `rolling`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowOutputReference.property.rolling" id="cdktfprovidernewrelicservicelevelobjectivetimewindowoutputreferencepropertyrolling"></a>

```typescript
public readonly rolling: ServiceLevelObjectiveTimeWindowRollingOutputReference;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRollingOutputReference`](#@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRollingOutputReference)

---

##### `rollingInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowOutputReference.property.rollingInput" id="cdktfprovidernewrelicservicelevelobjectivetimewindowoutputreferencepropertyrollinginput"></a>

```typescript
public readonly rollingInput: ServiceLevelObjectiveTimeWindowRolling;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRolling`](#@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRolling)

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowOutputReference.property.internalValue" id="cdktfprovidernewrelicservicelevelobjectivetimewindowoutputreferencepropertyinternalvalue"></a>

```typescript
public readonly internalValue: ServiceLevelObjectiveTimeWindow;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindow`](#@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindow)

---


### ServiceLevelObjectiveTimeWindowRollingOutputReference <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRollingOutputReference" id="cdktfprovidernewrelicservicelevelobjectivetimewindowrollingoutputreference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRollingOutputReference.Initializer" id="cdktfprovidernewrelicservicelevelobjectivetimewindowrollingoutputreferenceinitializer"></a>

```typescript
import { ServiceLevelObjectiveTimeWindowRollingOutputReference } from '@cdktf/provider-newrelic'

new ServiceLevelObjectiveTimeWindowRollingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidernewrelicservicelevelobjectivetimewindowrollingoutputreferenceparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovidernewrelicservicelevelobjectivetimewindowrollingoutputreferenceparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |
| [`isSingleItem`](#cdktfprovidernewrelicservicelevelobjectivetimewindowrollingoutputreferenceparameterissingleitem)<span title="Required">*</span> | `boolean` | True if this is a block, false if it's a list. |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRollingOutputReference.parameter.terraformResource" id="cdktfprovidernewrelicservicelevelobjectivetimewindowrollingoutputreferenceparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRollingOutputReference.parameter.terraformAttribute" id="cdktfprovidernewrelicservicelevelobjectivetimewindowrollingoutputreferenceparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRollingOutputReference.parameter.isSingleItem" id="cdktfprovidernewrelicservicelevelobjectivetimewindowrollingoutputreferenceparameterissingleitem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`countInput`](#cdktfprovidernewrelicservicelevelobjectivetimewindowrollingoutputreferencepropertycountinput) | `number` | *No description.* |
| [`unitInput`](#cdktfprovidernewrelicservicelevelobjectivetimewindowrollingoutputreferencepropertyunitinput) | `string` | *No description.* |
| [`count`](#cdktfprovidernewrelicservicelevelobjectivetimewindowrollingoutputreferencepropertycount)<span title="Required">*</span> | `number` | *No description.* |
| [`unit`](#cdktfprovidernewrelicservicelevelobjectivetimewindowrollingoutputreferencepropertyunit)<span title="Required">*</span> | `string` | *No description.* |
| [`internalValue`](#cdktfprovidernewrelicservicelevelobjectivetimewindowrollingoutputreferencepropertyinternalvalue) | [`@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRolling`](#@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRolling) | *No description.* |

---

##### `countInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.countInput" id="cdktfprovidernewrelicservicelevelobjectivetimewindowrollingoutputreferencepropertycountinput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* `number`

---

##### `unitInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.unitInput" id="cdktfprovidernewrelicservicelevelobjectivetimewindowrollingoutputreferencepropertyunitinput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* `string`

---

##### `count`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.count" id="cdktfprovidernewrelicservicelevelobjectivetimewindowrollingoutputreferencepropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `unit`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.unit" id="cdktfprovidernewrelicservicelevelobjectivetimewindowrollingoutputreferencepropertyunit"></a>

```typescript
public readonly unit: string;
```

- *Type:* `string`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.internalValue" id="cdktfprovidernewrelicservicelevelobjectivetimewindowrollingoutputreferencepropertyinternalvalue"></a>

```typescript
public readonly internalValue: ServiceLevelObjectiveTimeWindowRolling;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRolling`](#@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRolling)

---


### SyntheticsMultilocationAlertConditionCriticalOutputReference <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCriticalOutputReference" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditioncriticaloutputreference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCriticalOutputReference.Initializer" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditioncriticaloutputreferenceinitializer"></a>

```typescript
import { SyntheticsMultilocationAlertConditionCriticalOutputReference } from '@cdktf/provider-newrelic'

new SyntheticsMultilocationAlertConditionCriticalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditioncriticaloutputreferenceparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditioncriticaloutputreferenceparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |
| [`isSingleItem`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditioncriticaloutputreferenceparameterissingleitem)<span title="Required">*</span> | `boolean` | True if this is a block, false if it's a list. |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCriticalOutputReference.parameter.terraformResource" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditioncriticaloutputreferenceparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCriticalOutputReference.parameter.terraformAttribute" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditioncriticaloutputreferenceparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCriticalOutputReference.parameter.isSingleItem" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditioncriticaloutputreferenceparameterissingleitem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`thresholdInput`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditioncriticaloutputreferencepropertythresholdinput) | `number` | *No description.* |
| [`threshold`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditioncriticaloutputreferencepropertythreshold)<span title="Required">*</span> | `number` | *No description.* |
| [`internalValue`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditioncriticaloutputreferencepropertyinternalvalue) | [`@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCritical`](#@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCritical) | *No description.* |

---

##### `thresholdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.thresholdInput" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditioncriticaloutputreferencepropertythresholdinput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* `number`

---

##### `threshold`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.threshold" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditioncriticaloutputreferencepropertythreshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* `number`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.internalValue" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditioncriticaloutputreferencepropertyinternalvalue"></a>

```typescript
public readonly internalValue: SyntheticsMultilocationAlertConditionCritical;
```

- *Type:* [`@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCritical`](#@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCritical)

---


### SyntheticsMultilocationAlertConditionWarningOutputReference <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarningOutputReference" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionwarningoutputreference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarningOutputReference.Initializer" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionwarningoutputreferenceinitializer"></a>

```typescript
import { SyntheticsMultilocationAlertConditionWarningOutputReference } from '@cdktf/provider-newrelic'

new SyntheticsMultilocationAlertConditionWarningOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionwarningoutputreferenceparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionwarningoutputreferenceparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |
| [`isSingleItem`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionwarningoutputreferenceparameterissingleitem)<span title="Required">*</span> | `boolean` | True if this is a block, false if it's a list. |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarningOutputReference.parameter.terraformResource" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionwarningoutputreferenceparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarningOutputReference.parameter.terraformAttribute" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionwarningoutputreferenceparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarningOutputReference.parameter.isSingleItem" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionwarningoutputreferenceparameterissingleitem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`thresholdInput`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionwarningoutputreferencepropertythresholdinput) | `number` | *No description.* |
| [`threshold`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionwarningoutputreferencepropertythreshold)<span title="Required">*</span> | `number` | *No description.* |
| [`internalValue`](#cdktfprovidernewrelicsyntheticsmultilocationalertconditionwarningoutputreferencepropertyinternalvalue) | [`@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarning`](#@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarning) | *No description.* |

---

##### `thresholdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarningOutputReference.property.thresholdInput" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionwarningoutputreferencepropertythresholdinput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* `number`

---

##### `threshold`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarningOutputReference.property.threshold" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionwarningoutputreferencepropertythreshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* `number`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarningOutputReference.property.internalValue" id="cdktfprovidernewrelicsyntheticsmultilocationalertconditionwarningoutputreferencepropertyinternalvalue"></a>

```typescript
public readonly internalValue: SyntheticsMultilocationAlertConditionWarning;
```

- *Type:* [`@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarning`](#@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarning)

---



