# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### AlertChannel <a name="@cdktf/provider-newrelic.AlertChannel"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html newrelic_alert_channel}.

#### Initializers <a name="@cdktf/provider-newrelic.AlertChannel.Initializer"></a>

```typescript
import { AlertChannel } from '@cdktf/provider-newrelic'

new AlertChannel(scope: Construct, id: string, config: AlertChannelConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannel.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannel.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannel.parameter.config"></a>

- *Type:* [`@cdktf/provider-newrelic.AlertChannelConfig`](#@cdktf/provider-newrelic.AlertChannelConfig)

---

#### Methods <a name="Methods"></a>

##### `putConfig` <a name="@cdktf/provider-newrelic.AlertChannel.putConfig"></a>

```typescript
public putConfig(value?: AlertChannelConfigA)
```

###### `value`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannel.parameter.value"></a>

- *Type:* [`@cdktf/provider-newrelic.AlertChannelConfigA`](#@cdktf/provider-newrelic.AlertChannelConfigA)

---

##### `resetConfig` <a name="@cdktf/provider-newrelic.AlertChannel.resetConfig"></a>

```typescript
public resetConfig()
```


#### Properties <a name="Properties"></a>

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannel.property.config"></a>

```typescript
public readonly config: AlertChannelConfigAOutputReference;
```

- *Type:* [`@cdktf/provider-newrelic.AlertChannelConfigAOutputReference`](#@cdktf/provider-newrelic.AlertChannelConfigAOutputReference)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `configInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannel.property.configInput"></a>

```typescript
public readonly configInput: AlertChannelConfigA;
```

- *Type:* [`@cdktf/provider-newrelic.AlertChannelConfigA`](#@cdktf/provider-newrelic.AlertChannelConfigA)

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannel.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `typeInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannel.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannel.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-newrelic.AlertChannel.property.tfResourceType"></a>

- *Type:* `string`

---

### AlertCondition <a name="@cdktf/provider-newrelic.AlertCondition"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition.html newrelic_alert_condition}.

#### Initializers <a name="@cdktf/provider-newrelic.AlertCondition.Initializer"></a>

```typescript
import { AlertCondition } from '@cdktf/provider-newrelic'

new AlertCondition(scope: Construct, id: string, config: AlertConditionConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertCondition.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertCondition.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertCondition.parameter.config"></a>

- *Type:* [`@cdktf/provider-newrelic.AlertConditionConfig`](#@cdktf/provider-newrelic.AlertConditionConfig)

---

#### Methods <a name="Methods"></a>

##### `resetConditionScope` <a name="@cdktf/provider-newrelic.AlertCondition.resetConditionScope"></a>

```typescript
public resetConditionScope()
```

##### `resetEnabled` <a name="@cdktf/provider-newrelic.AlertCondition.resetEnabled"></a>

```typescript
public resetEnabled()
```

##### `resetGcMetric` <a name="@cdktf/provider-newrelic.AlertCondition.resetGcMetric"></a>

```typescript
public resetGcMetric()
```

##### `resetRunbookUrl` <a name="@cdktf/provider-newrelic.AlertCondition.resetRunbookUrl"></a>

```typescript
public resetRunbookUrl()
```

##### `resetUserDefinedMetric` <a name="@cdktf/provider-newrelic.AlertCondition.resetUserDefinedMetric"></a>

```typescript
public resetUserDefinedMetric()
```

##### `resetUserDefinedValueFunction` <a name="@cdktf/provider-newrelic.AlertCondition.resetUserDefinedValueFunction"></a>

```typescript
public resetUserDefinedValueFunction()
```

##### `resetViolationCloseTimer` <a name="@cdktf/provider-newrelic.AlertCondition.resetViolationCloseTimer"></a>

```typescript
public resetViolationCloseTimer()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `conditionScopeInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.conditionScopeInput"></a>

```typescript
public readonly conditionScopeInput: string;
```

- *Type:* `string`

---

##### `enabledInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `entitiesInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.entitiesInput"></a>

```typescript
public readonly entitiesInput: number[];
```

- *Type:* `number`[]

---

##### `gcMetricInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.gcMetricInput"></a>

```typescript
public readonly gcMetricInput: string;
```

- *Type:* `string`

---

##### `metricInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.metricInput"></a>

```typescript
public readonly metricInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `policyIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: number;
```

- *Type:* `number`

---

##### `runbookUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.runbookUrlInput"></a>

```typescript
public readonly runbookUrlInput: string;
```

- *Type:* `string`

---

##### `termInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.termInput"></a>

```typescript
public readonly termInput: AlertConditionTerm[];
```

- *Type:* [`@cdktf/provider-newrelic.AlertConditionTerm`](#@cdktf/provider-newrelic.AlertConditionTerm)[]

---

##### `typeInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* `string`

---

##### `userDefinedMetricInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.userDefinedMetricInput"></a>

```typescript
public readonly userDefinedMetricInput: string;
```

- *Type:* `string`

---

##### `userDefinedValueFunctionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.userDefinedValueFunctionInput"></a>

```typescript
public readonly userDefinedValueFunctionInput: string;
```

- *Type:* `string`

---

##### `violationCloseTimerInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.violationCloseTimerInput"></a>

```typescript
public readonly violationCloseTimerInput: number;
```

- *Type:* `number`

---

##### `entities`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.entities"></a>

```typescript
public readonly entities: number[];
```

- *Type:* `number`[]

---

##### `metric`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `policyId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.policyId"></a>

```typescript
public readonly policyId: number;
```

- *Type:* `number`

---

##### `term`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.term"></a>

```typescript
public readonly term: AlertConditionTerm[];
```

- *Type:* [`@cdktf/provider-newrelic.AlertConditionTerm`](#@cdktf/provider-newrelic.AlertConditionTerm)[]

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

##### `conditionScope`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.conditionScope"></a>

```typescript
public readonly conditionScope: string;
```

- *Type:* `string`

---

##### `enabled`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `gcMetric`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.gcMetric"></a>

```typescript
public readonly gcMetric: string;
```

- *Type:* `string`

---

##### `runbookUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.runbookUrl"></a>

```typescript
public readonly runbookUrl: string;
```

- *Type:* `string`

---

##### `userDefinedMetric`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.userDefinedMetric"></a>

```typescript
public readonly userDefinedMetric: string;
```

- *Type:* `string`

---

##### `userDefinedValueFunction`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.userDefinedValueFunction"></a>

```typescript
public readonly userDefinedValueFunction: string;
```

- *Type:* `string`

---

##### `violationCloseTimer`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertCondition.property.violationCloseTimer"></a>

```typescript
public readonly violationCloseTimer: number;
```

- *Type:* `number`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-newrelic.AlertCondition.property.tfResourceType"></a>

- *Type:* `string`

---

### AlertMutingRule <a name="@cdktf/provider-newrelic.AlertMutingRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html newrelic_alert_muting_rule}.

#### Initializers <a name="@cdktf/provider-newrelic.AlertMutingRule.Initializer"></a>

```typescript
import { AlertMutingRule } from '@cdktf/provider-newrelic'

new AlertMutingRule(scope: Construct, id: string, config: AlertMutingRuleConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRule.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRule.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRule.parameter.config"></a>

- *Type:* [`@cdktf/provider-newrelic.AlertMutingRuleConfig`](#@cdktf/provider-newrelic.AlertMutingRuleConfig)

---

#### Methods <a name="Methods"></a>

##### `putCondition` <a name="@cdktf/provider-newrelic.AlertMutingRule.putCondition"></a>

```typescript
public putCondition(value: AlertMutingRuleCondition)
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRule.parameter.value"></a>

- *Type:* [`@cdktf/provider-newrelic.AlertMutingRuleCondition`](#@cdktf/provider-newrelic.AlertMutingRuleCondition)

---

##### `putSchedule` <a name="@cdktf/provider-newrelic.AlertMutingRule.putSchedule"></a>

```typescript
public putSchedule(value?: AlertMutingRuleSchedule)
```

###### `value`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRule.parameter.value"></a>

- *Type:* [`@cdktf/provider-newrelic.AlertMutingRuleSchedule`](#@cdktf/provider-newrelic.AlertMutingRuleSchedule)

---

##### `resetAccountId` <a name="@cdktf/provider-newrelic.AlertMutingRule.resetAccountId"></a>

```typescript
public resetAccountId()
```

##### `resetDescription` <a name="@cdktf/provider-newrelic.AlertMutingRule.resetDescription"></a>

```typescript
public resetDescription()
```

##### `resetSchedule` <a name="@cdktf/provider-newrelic.AlertMutingRule.resetSchedule"></a>

```typescript
public resetSchedule()
```


#### Properties <a name="Properties"></a>

##### `condition`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRule.property.condition"></a>

```typescript
public readonly condition: AlertMutingRuleConditionOutputReference;
```

- *Type:* [`@cdktf/provider-newrelic.AlertMutingRuleConditionOutputReference`](#@cdktf/provider-newrelic.AlertMutingRuleConditionOutputReference)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `schedule`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRule.property.schedule"></a>

```typescript
public readonly schedule: AlertMutingRuleScheduleOutputReference;
```

- *Type:* [`@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference`](#@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference)

---

##### `accountIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRule.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* `number`

---

##### `conditionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRule.property.conditionInput"></a>

```typescript
public readonly conditionInput: AlertMutingRuleCondition;
```

- *Type:* [`@cdktf/provider-newrelic.AlertMutingRuleCondition`](#@cdktf/provider-newrelic.AlertMutingRuleCondition)

---

##### `descriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* `string`

---

##### `enabledInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRule.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `scheduleInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRule.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: AlertMutingRuleSchedule;
```

- *Type:* [`@cdktf/provider-newrelic.AlertMutingRuleSchedule`](#@cdktf/provider-newrelic.AlertMutingRuleSchedule)

---

##### `enabled`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRule.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-newrelic.AlertMutingRule.property.tfResourceType"></a>

- *Type:* `string`

---

### AlertPolicy <a name="@cdktf/provider-newrelic.AlertPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/alert_policy.html newrelic_alert_policy}.

#### Initializers <a name="@cdktf/provider-newrelic.AlertPolicy.Initializer"></a>

```typescript
import { AlertPolicy } from '@cdktf/provider-newrelic'

new AlertPolicy(scope: Construct, id: string, config: AlertPolicyConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertPolicy.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertPolicy.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertPolicy.parameter.config"></a>

- *Type:* [`@cdktf/provider-newrelic.AlertPolicyConfig`](#@cdktf/provider-newrelic.AlertPolicyConfig)

---

#### Methods <a name="Methods"></a>

##### `resetAccountId` <a name="@cdktf/provider-newrelic.AlertPolicy.resetAccountId"></a>

```typescript
public resetAccountId()
```

##### `resetChannelIds` <a name="@cdktf/provider-newrelic.AlertPolicy.resetChannelIds"></a>

```typescript
public resetChannelIds()
```

##### `resetIncidentPreference` <a name="@cdktf/provider-newrelic.AlertPolicy.resetIncidentPreference"></a>

```typescript
public resetIncidentPreference()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `accountIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicy.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* `number`

---

##### `channelIdsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicy.property.channelIdsInput"></a>

```typescript
public readonly channelIdsInput: number[];
```

- *Type:* `number`[]

---

##### `incidentPreferenceInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicy.property.incidentPreferenceInput"></a>

```typescript
public readonly incidentPreferenceInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicy.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

---

##### `channelIds`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicy.property.channelIds"></a>

```typescript
public readonly channelIds: number[];
```

- *Type:* `number`[]

---

##### `incidentPreference`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicy.property.incidentPreference"></a>

```typescript
public readonly incidentPreference: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-newrelic.AlertPolicy.property.tfResourceType"></a>

- *Type:* `string`

---

### AlertPolicyChannel <a name="@cdktf/provider-newrelic.AlertPolicyChannel"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/alert_policy_channel.html newrelic_alert_policy_channel}.

#### Initializers <a name="@cdktf/provider-newrelic.AlertPolicyChannel.Initializer"></a>

```typescript
import { AlertPolicyChannel } from '@cdktf/provider-newrelic'

new AlertPolicyChannel(scope: Construct, id: string, config: AlertPolicyChannelConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertPolicyChannel.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertPolicyChannel.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertPolicyChannel.parameter.config"></a>

- *Type:* [`@cdktf/provider-newrelic.AlertPolicyChannelConfig`](#@cdktf/provider-newrelic.AlertPolicyChannelConfig)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertPolicyChannel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `channelIdsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicyChannel.property.channelIdsInput"></a>

```typescript
public readonly channelIdsInput: number[];
```

- *Type:* `number`[]

---

##### `policyIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicyChannel.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: number;
```

- *Type:* `number`

---

##### `channelIds`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertPolicyChannel.property.channelIds"></a>

```typescript
public readonly channelIds: number[];
```

- *Type:* `number`[]

---

##### `policyId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertPolicyChannel.property.policyId"></a>

```typescript
public readonly policyId: number;
```

- *Type:* `number`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-newrelic.AlertPolicyChannel.property.tfResourceType"></a>

- *Type:* `string`

---

### ApiAccessKey <a name="@cdktf/provider-newrelic.ApiAccessKey"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/api_access_key.html newrelic_api_access_key}.

#### Initializers <a name="@cdktf/provider-newrelic.ApiAccessKey.Initializer"></a>

```typescript
import { ApiAccessKey } from '@cdktf/provider-newrelic'

new ApiAccessKey(scope: Construct, id: string, config: ApiAccessKeyConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApiAccessKey.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApiAccessKey.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApiAccessKey.parameter.config"></a>

- *Type:* [`@cdktf/provider-newrelic.ApiAccessKeyConfig`](#@cdktf/provider-newrelic.ApiAccessKeyConfig)

---

#### Methods <a name="Methods"></a>

##### `resetIngestType` <a name="@cdktf/provider-newrelic.ApiAccessKey.resetIngestType"></a>

```typescript
public resetIngestType()
```

##### `resetName` <a name="@cdktf/provider-newrelic.ApiAccessKey.resetName"></a>

```typescript
public resetName()
```

##### `resetNotes` <a name="@cdktf/provider-newrelic.ApiAccessKey.resetNotes"></a>

```typescript
public resetNotes()
```

##### `resetUserId` <a name="@cdktf/provider-newrelic.ApiAccessKey.resetUserId"></a>

```typescript
public resetUserId()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApiAccessKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApiAccessKey.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

---

##### `accountIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApiAccessKey.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* `number`

---

##### `ingestTypeInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApiAccessKey.property.ingestTypeInput"></a>

```typescript
public readonly ingestTypeInput: string;
```

- *Type:* `string`

---

##### `keyTypeInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApiAccessKey.property.keyTypeInput"></a>

```typescript
public readonly keyTypeInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApiAccessKey.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `notesInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApiAccessKey.property.notesInput"></a>

```typescript
public readonly notesInput: string;
```

- *Type:* `string`

---

##### `userIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApiAccessKey.property.userIdInput"></a>

```typescript
public readonly userIdInput: number;
```

- *Type:* `number`

---

##### `accountId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApiAccessKey.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

---

##### `keyType`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApiAccessKey.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* `string`

---

##### `ingestType`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApiAccessKey.property.ingestType"></a>

```typescript
public readonly ingestType: string;
```

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApiAccessKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `notes`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApiAccessKey.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* `string`

---

##### `userId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApiAccessKey.property.userId"></a>

```typescript
public readonly userId: number;
```

- *Type:* `number`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-newrelic.ApiAccessKey.property.tfResourceType"></a>

- *Type:* `string`

---

### ApplicationSettings <a name="@cdktf/provider-newrelic.ApplicationSettings"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/application_settings.html newrelic_application_settings}.

#### Initializers <a name="@cdktf/provider-newrelic.ApplicationSettings.Initializer"></a>

```typescript
import { ApplicationSettings } from '@cdktf/provider-newrelic'

new ApplicationSettings(scope: Construct, id: string, config: ApplicationSettingsConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApplicationSettings.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApplicationSettings.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApplicationSettings.parameter.config"></a>

- *Type:* [`@cdktf/provider-newrelic.ApplicationSettingsConfig`](#@cdktf/provider-newrelic.ApplicationSettingsConfig)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApplicationSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `appApdexThresholdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApplicationSettings.property.appApdexThresholdInput"></a>

```typescript
public readonly appApdexThresholdInput: number;
```

- *Type:* `number`

---

##### `enableRealUserMonitoringInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApplicationSettings.property.enableRealUserMonitoringInput"></a>

```typescript
public readonly enableRealUserMonitoringInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `endUserApdexThresholdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApplicationSettings.property.endUserApdexThresholdInput"></a>

```typescript
public readonly endUserApdexThresholdInput: number;
```

- *Type:* `number`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApplicationSettings.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `appApdexThreshold`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApplicationSettings.property.appApdexThreshold"></a>

```typescript
public readonly appApdexThreshold: number;
```

- *Type:* `number`

---

##### `enableRealUserMonitoring`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApplicationSettings.property.enableRealUserMonitoring"></a>

```typescript
public readonly enableRealUserMonitoring: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `endUserApdexThreshold`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApplicationSettings.property.endUserApdexThreshold"></a>

```typescript
public readonly endUserApdexThreshold: number;
```

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApplicationSettings.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-newrelic.ApplicationSettings.property.tfResourceType"></a>

- *Type:* `string`

---

### Dashboard <a name="@cdktf/provider-newrelic.Dashboard"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html newrelic_dashboard}.

#### Initializers <a name="@cdktf/provider-newrelic.Dashboard.Initializer"></a>

```typescript
import { Dashboard } from '@cdktf/provider-newrelic'

new Dashboard(scope: Construct, id: string, config: DashboardConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Dashboard.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Dashboard.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Dashboard.parameter.config"></a>

- *Type:* [`@cdktf/provider-newrelic.DashboardConfig`](#@cdktf/provider-newrelic.DashboardConfig)

---

#### Methods <a name="Methods"></a>

##### `putFilter` <a name="@cdktf/provider-newrelic.Dashboard.putFilter"></a>

```typescript
public putFilter(value?: DashboardFilter)
```

###### `value`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.Dashboard.parameter.value"></a>

- *Type:* [`@cdktf/provider-newrelic.DashboardFilter`](#@cdktf/provider-newrelic.DashboardFilter)

---

##### `resetEditable` <a name="@cdktf/provider-newrelic.Dashboard.resetEditable"></a>

```typescript
public resetEditable()
```

##### `resetFilter` <a name="@cdktf/provider-newrelic.Dashboard.resetFilter"></a>

```typescript
public resetFilter()
```

##### `resetGridColumnCount` <a name="@cdktf/provider-newrelic.Dashboard.resetGridColumnCount"></a>

```typescript
public resetGridColumnCount()
```

##### `resetIcon` <a name="@cdktf/provider-newrelic.Dashboard.resetIcon"></a>

```typescript
public resetIcon()
```

##### `resetVisibility` <a name="@cdktf/provider-newrelic.Dashboard.resetVisibility"></a>

```typescript
public resetVisibility()
```

##### `resetWidget` <a name="@cdktf/provider-newrelic.Dashboard.resetWidget"></a>

```typescript
public resetWidget()
```


#### Properties <a name="Properties"></a>

##### `dashboardUrl`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Dashboard.property.dashboardUrl"></a>

```typescript
public readonly dashboardUrl: string;
```

- *Type:* `string`

---

##### `filter`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Dashboard.property.filter"></a>

```typescript
public readonly filter: DashboardFilterOutputReference;
```

- *Type:* [`@cdktf/provider-newrelic.DashboardFilterOutputReference`](#@cdktf/provider-newrelic.DashboardFilterOutputReference)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Dashboard.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `editableInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.Dashboard.property.editableInput"></a>

```typescript
public readonly editableInput: string;
```

- *Type:* `string`

---

##### `filterInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.Dashboard.property.filterInput"></a>

```typescript
public readonly filterInput: DashboardFilter;
```

- *Type:* [`@cdktf/provider-newrelic.DashboardFilter`](#@cdktf/provider-newrelic.DashboardFilter)

---

##### `gridColumnCountInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.Dashboard.property.gridColumnCountInput"></a>

```typescript
public readonly gridColumnCountInput: number;
```

- *Type:* `number`

---

##### `iconInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.Dashboard.property.iconInput"></a>

```typescript
public readonly iconInput: string;
```

- *Type:* `string`

---

##### `titleInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.Dashboard.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* `string`

---

##### `visibilityInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.Dashboard.property.visibilityInput"></a>

```typescript
public readonly visibilityInput: string;
```

- *Type:* `string`

---

##### `widgetInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.Dashboard.property.widgetInput"></a>

```typescript
public readonly widgetInput: DashboardWidget[];
```

- *Type:* [`@cdktf/provider-newrelic.DashboardWidget`](#@cdktf/provider-newrelic.DashboardWidget)[]

---

##### `title`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Dashboard.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* `string`

---

##### `editable`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.Dashboard.property.editable"></a>

```typescript
public readonly editable: string;
```

- *Type:* `string`

---

##### `gridColumnCount`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.Dashboard.property.gridColumnCount"></a>

```typescript
public readonly gridColumnCount: number;
```

- *Type:* `number`

---

##### `icon`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.Dashboard.property.icon"></a>

```typescript
public readonly icon: string;
```

- *Type:* `string`

---

##### `visibility`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.Dashboard.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* `string`

---

##### `widget`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.Dashboard.property.widget"></a>

```typescript
public readonly widget: DashboardWidget[];
```

- *Type:* [`@cdktf/provider-newrelic.DashboardWidget`](#@cdktf/provider-newrelic.DashboardWidget)[]

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-newrelic.Dashboard.property.tfResourceType"></a>

- *Type:* `string`

---

### DataNewrelicAccount <a name="@cdktf/provider-newrelic.DataNewrelicAccount"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/d/account.html newrelic_account}.

#### Initializers <a name="@cdktf/provider-newrelic.DataNewrelicAccount.Initializer"></a>

```typescript
import { DataNewrelicAccount } from '@cdktf/provider-newrelic'

new DataNewrelicAccount(scope: Construct, id: string, config?: DataNewrelicAccountConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAccount.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAccount.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAccount.parameter.config"></a>

- *Type:* [`@cdktf/provider-newrelic.DataNewrelicAccountConfig`](#@cdktf/provider-newrelic.DataNewrelicAccountConfig)

---

#### Methods <a name="Methods"></a>

##### `resetAccountId` <a name="@cdktf/provider-newrelic.DataNewrelicAccount.resetAccountId"></a>

```typescript
public resetAccountId()
```

##### `resetName` <a name="@cdktf/provider-newrelic.DataNewrelicAccount.resetName"></a>

```typescript
public resetName()
```

##### `resetScope` <a name="@cdktf/provider-newrelic.DataNewrelicAccount.resetScope"></a>

```typescript
public resetScope()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `accountIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAccount.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* `number`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAccount.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `scopeInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAccount.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* `string`

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAccount.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAccount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `scope`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAccount.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-newrelic.DataNewrelicAccount.property.tfResourceType"></a>

- *Type:* `string`

---

### DataNewrelicAlertChannel <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannel"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/d/alert_channel.html newrelic_alert_channel}.

#### Initializers <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannel.Initializer"></a>

```typescript
import { DataNewrelicAlertChannel } from '@cdktf/provider-newrelic'

new DataNewrelicAlertChannel(scope: Construct, id: string, config: DataNewrelicAlertChannelConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannel.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannel.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannel.parameter.config"></a>

- *Type:* [`@cdktf/provider-newrelic.DataNewrelicAlertChannelConfig`](#@cdktf/provider-newrelic.DataNewrelicAlertChannelConfig)

---

#### Methods <a name="Methods"></a>

##### `config` <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannel.config"></a>

```typescript
public config(index: string)
```

###### `index`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannel.parameter.index"></a>

- *Type:* `string`

---


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `policyIds`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannel.property.policyIds"></a>

```typescript
public readonly policyIds: any;
```

- *Type:* `any`

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannel.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannel.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannel.property.tfResourceType"></a>

- *Type:* `string`

---

### DataNewrelicAlertPolicy <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/d/alert_policy.html newrelic_alert_policy}.

#### Initializers <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicy.Initializer"></a>

```typescript
import { DataNewrelicAlertPolicy } from '@cdktf/provider-newrelic'

new DataNewrelicAlertPolicy(scope: Construct, id: string, config: DataNewrelicAlertPolicyConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicy.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicy.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicy.parameter.config"></a>

- *Type:* [`@cdktf/provider-newrelic.DataNewrelicAlertPolicyConfig`](#@cdktf/provider-newrelic.DataNewrelicAlertPolicyConfig)

---

#### Methods <a name="Methods"></a>

##### `resetAccountId` <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicy.resetAccountId"></a>

```typescript
public resetAccountId()
```

##### `resetIncidentPreference` <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicy.resetIncidentPreference"></a>

```typescript
public resetIncidentPreference()
```


#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicy.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicy.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* `string`

---

##### `accountIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicy.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* `number`

---

##### `incidentPreferenceInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicy.property.incidentPreferenceInput"></a>

```typescript
public readonly incidentPreferenceInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicy.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

---

##### `incidentPreference`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicy.property.incidentPreference"></a>

```typescript
public readonly incidentPreference: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicy.property.tfResourceType"></a>

- *Type:* `string`

---

### DataNewrelicApplication <a name="@cdktf/provider-newrelic.DataNewrelicApplication"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/d/application.html newrelic_application}.

#### Initializers <a name="@cdktf/provider-newrelic.DataNewrelicApplication.Initializer"></a>

```typescript
import { DataNewrelicApplication } from '@cdktf/provider-newrelic'

new DataNewrelicApplication(scope: Construct, id: string, config: DataNewrelicApplicationConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicApplication.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicApplication.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicApplication.parameter.config"></a>

- *Type:* [`@cdktf/provider-newrelic.DataNewrelicApplicationConfig`](#@cdktf/provider-newrelic.DataNewrelicApplicationConfig)

---



#### Properties <a name="Properties"></a>

##### `hostIds`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicApplication.property.hostIds"></a>

```typescript
public readonly hostIds: any;
```

- *Type:* `any`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicApplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `instanceIds`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicApplication.property.instanceIds"></a>

```typescript
public readonly instanceIds: any;
```

- *Type:* `any`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicApplication.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicApplication.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-newrelic.DataNewrelicApplication.property.tfResourceType"></a>

- *Type:* `string`

---

### DataNewrelicEntity <a name="@cdktf/provider-newrelic.DataNewrelicEntity"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/d/entity.html newrelic_entity}.

#### Initializers <a name="@cdktf/provider-newrelic.DataNewrelicEntity.Initializer"></a>

```typescript
import { DataNewrelicEntity } from '@cdktf/provider-newrelic'

new DataNewrelicEntity(scope: Construct, id: string, config: DataNewrelicEntityConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.parameter.config"></a>

- *Type:* [`@cdktf/provider-newrelic.DataNewrelicEntityConfig`](#@cdktf/provider-newrelic.DataNewrelicEntityConfig)

---

#### Methods <a name="Methods"></a>

##### `putTag` <a name="@cdktf/provider-newrelic.DataNewrelicEntity.putTag"></a>

```typescript
public putTag(value?: DataNewrelicEntityTag)
```

###### `value`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.parameter.value"></a>

- *Type:* [`@cdktf/provider-newrelic.DataNewrelicEntityTag`](#@cdktf/provider-newrelic.DataNewrelicEntityTag)

---

##### `resetDomain` <a name="@cdktf/provider-newrelic.DataNewrelicEntity.resetDomain"></a>

```typescript
public resetDomain()
```

##### `resetIgnoreCase` <a name="@cdktf/provider-newrelic.DataNewrelicEntity.resetIgnoreCase"></a>

```typescript
public resetIgnoreCase()
```

##### `resetTag` <a name="@cdktf/provider-newrelic.DataNewrelicEntity.resetTag"></a>

```typescript
public resetTag()
```

##### `resetType` <a name="@cdktf/provider-newrelic.DataNewrelicEntity.resetType"></a>

```typescript
public resetType()
```


#### Properties <a name="Properties"></a>

##### `accountId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

---

##### `applicationId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.property.applicationId"></a>

```typescript
public readonly applicationId: number;
```

- *Type:* `number`

---

##### `guid`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `servingApmApplicationId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.property.servingApmApplicationId"></a>

```typescript
public readonly servingApmApplicationId: number;
```

- *Type:* `number`

---

##### `tag`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.property.tag"></a>

```typescript
public readonly tag: DataNewrelicEntityTagOutputReference;
```

- *Type:* [`@cdktf/provider-newrelic.DataNewrelicEntityTagOutputReference`](#@cdktf/provider-newrelic.DataNewrelicEntityTagOutputReference)

---

##### `domainInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* `string`

---

##### `ignoreCaseInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.property.ignoreCaseInput"></a>

```typescript
public readonly ignoreCaseInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `tagInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.property.tagInput"></a>

```typescript
public readonly tagInput: DataNewrelicEntityTag;
```

- *Type:* [`@cdktf/provider-newrelic.DataNewrelicEntityTag`](#@cdktf/provider-newrelic.DataNewrelicEntityTag)

---

##### `typeInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `domain`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* `string`

---

##### `ignoreCase`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.property.ignoreCase"></a>

```typescript
public readonly ignoreCase: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-newrelic.DataNewrelicEntity.property.tfResourceType"></a>

- *Type:* `string`

---

### DataNewrelicKeyTransaction <a name="@cdktf/provider-newrelic.DataNewrelicKeyTransaction"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/d/key_transaction.html newrelic_key_transaction}.

#### Initializers <a name="@cdktf/provider-newrelic.DataNewrelicKeyTransaction.Initializer"></a>

```typescript
import { DataNewrelicKeyTransaction } from '@cdktf/provider-newrelic'

new DataNewrelicKeyTransaction(scope: Construct, id: string, config: DataNewrelicKeyTransactionConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicKeyTransaction.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicKeyTransaction.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicKeyTransaction.parameter.config"></a>

- *Type:* [`@cdktf/provider-newrelic.DataNewrelicKeyTransactionConfig`](#@cdktf/provider-newrelic.DataNewrelicKeyTransactionConfig)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicKeyTransaction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicKeyTransaction.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicKeyTransaction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-newrelic.DataNewrelicKeyTransaction.property.tfResourceType"></a>

- *Type:* `string`

---

### DataNewrelicPlugin <a name="@cdktf/provider-newrelic.DataNewrelicPlugin"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/d/plugin.html newrelic_plugin}.

#### Initializers <a name="@cdktf/provider-newrelic.DataNewrelicPlugin.Initializer"></a>

```typescript
import { DataNewrelicPlugin } from '@cdktf/provider-newrelic'

new DataNewrelicPlugin(scope: Construct, id: string, config: DataNewrelicPluginConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPlugin.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPlugin.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPlugin.parameter.config"></a>

- *Type:* [`@cdktf/provider-newrelic.DataNewrelicPluginConfig`](#@cdktf/provider-newrelic.DataNewrelicPluginConfig)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPlugin.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `guidInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPlugin.property.guidInput"></a>

```typescript
public readonly guidInput: string;
```

- *Type:* `string`

---

##### `guid`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPlugin.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-newrelic.DataNewrelicPlugin.property.tfResourceType"></a>

- *Type:* `string`

---

### DataNewrelicPluginComponent <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponent"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/d/plugin_component.html newrelic_plugin_component}.

#### Initializers <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponent.Initializer"></a>

```typescript
import { DataNewrelicPluginComponent } from '@cdktf/provider-newrelic'

new DataNewrelicPluginComponent(scope: Construct, id: string, config: DataNewrelicPluginComponentConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponent.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponent.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponent.parameter.config"></a>

- *Type:* [`@cdktf/provider-newrelic.DataNewrelicPluginComponentConfig`](#@cdktf/provider-newrelic.DataNewrelicPluginComponentConfig)

---



#### Properties <a name="Properties"></a>

##### `healthStatus`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponent.property.healthStatus"></a>

```typescript
public readonly healthStatus: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponent.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `pluginIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponent.property.pluginIdInput"></a>

```typescript
public readonly pluginIdInput: number;
```

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponent.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `pluginId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponent.property.pluginId"></a>

```typescript
public readonly pluginId: number;
```

- *Type:* `number`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponent.property.tfResourceType"></a>

- *Type:* `string`

---

### DataNewrelicSyntheticsMonitor <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitor"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/d/synthetics_monitor.html newrelic_synthetics_monitor}.

#### Initializers <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitor.Initializer"></a>

```typescript
import { DataNewrelicSyntheticsMonitor } from '@cdktf/provider-newrelic'

new DataNewrelicSyntheticsMonitor(scope: Construct, id: string, config: DataNewrelicSyntheticsMonitorConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitor.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitor.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitor.parameter.config"></a>

- *Type:* [`@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorConfig`](#@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorConfig)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitor.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `monitorId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitor.property.monitorId"></a>

```typescript
public readonly monitorId: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitor.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitor.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitor.property.tfResourceType"></a>

- *Type:* `string`

---

### DataNewrelicSyntheticsMonitorLocation <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocation"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/d/synthetics_monitor_location.html newrelic_synthetics_monitor_location}.

#### Initializers <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocation.Initializer"></a>

```typescript
import { DataNewrelicSyntheticsMonitorLocation } from '@cdktf/provider-newrelic'

new DataNewrelicSyntheticsMonitorLocation(scope: Construct, id: string, config: DataNewrelicSyntheticsMonitorLocationConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocation.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocation.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocation.parameter.config"></a>

- *Type:* [`@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocationConfig`](#@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocationConfig)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocation.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `highSecurityMode`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocation.property.highSecurityMode"></a>

```typescript
public readonly highSecurityMode: any;
```

- *Type:* `any`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `private`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocation.property.private"></a>

```typescript
public readonly private: any;
```

- *Type:* `any`

---

##### `labelInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocation.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* `string`

---

##### `label`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocation.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocation.property.tfResourceType"></a>

- *Type:* `string`

---

### DataNewrelicSyntheticsSecureCredential <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredential"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/d/synthetics_secure_credential.html newrelic_synthetics_secure_credential}.

#### Initializers <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredential.Initializer"></a>

```typescript
import { DataNewrelicSyntheticsSecureCredential } from '@cdktf/provider-newrelic'

new DataNewrelicSyntheticsSecureCredential(scope: Construct, id: string, config: DataNewrelicSyntheticsSecureCredentialConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredential.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredential.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredential.parameter.config"></a>

- *Type:* [`@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredentialConfig`](#@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredentialConfig)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredential.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredential.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredential.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `lastUpdated`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredential.property.lastUpdated"></a>

```typescript
public readonly lastUpdated: string;
```

- *Type:* `string`

---

##### `keyInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredential.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredential.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredential.property.tfResourceType"></a>

- *Type:* `string`

---

### EntityTags <a name="@cdktf/provider-newrelic.EntityTags"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/entity_tags.html newrelic_entity_tags}.

#### Initializers <a name="@cdktf/provider-newrelic.EntityTags.Initializer"></a>

```typescript
import { EntityTags } from '@cdktf/provider-newrelic'

new EntityTags(scope: Construct, id: string, config: EntityTagsConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EntityTags.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EntityTags.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EntityTags.parameter.config"></a>

- *Type:* [`@cdktf/provider-newrelic.EntityTagsConfig`](#@cdktf/provider-newrelic.EntityTagsConfig)

---

#### Methods <a name="Methods"></a>

##### `putTimeouts` <a name="@cdktf/provider-newrelic.EntityTags.putTimeouts"></a>

```typescript
public putTimeouts(value?: EntityTagsTimeouts)
```

###### `value`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EntityTags.parameter.value"></a>

- *Type:* [`@cdktf/provider-newrelic.EntityTagsTimeouts`](#@cdktf/provider-newrelic.EntityTagsTimeouts)

---

##### `resetTimeouts` <a name="@cdktf/provider-newrelic.EntityTags.resetTimeouts"></a>

```typescript
public resetTimeouts()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EntityTags.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `timeouts`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EntityTags.property.timeouts"></a>

```typescript
public readonly timeouts: EntityTagsTimeoutsOutputReference;
```

- *Type:* [`@cdktf/provider-newrelic.EntityTagsTimeoutsOutputReference`](#@cdktf/provider-newrelic.EntityTagsTimeoutsOutputReference)

---

##### `guidInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EntityTags.property.guidInput"></a>

```typescript
public readonly guidInput: string;
```

- *Type:* `string`

---

##### `tagInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EntityTags.property.tagInput"></a>

```typescript
public readonly tagInput: EntityTagsTag[];
```

- *Type:* [`@cdktf/provider-newrelic.EntityTagsTag`](#@cdktf/provider-newrelic.EntityTagsTag)[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EntityTags.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: EntityTagsTimeouts;
```

- *Type:* [`@cdktf/provider-newrelic.EntityTagsTimeouts`](#@cdktf/provider-newrelic.EntityTagsTimeouts)

---

##### `guid`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EntityTags.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* `string`

---

##### `tag`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EntityTags.property.tag"></a>

```typescript
public readonly tag: EntityTagsTag[];
```

- *Type:* [`@cdktf/provider-newrelic.EntityTagsTag`](#@cdktf/provider-newrelic.EntityTagsTag)[]

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-newrelic.EntityTags.property.tfResourceType"></a>

- *Type:* `string`

---

### EventsToMetricsRule <a name="@cdktf/provider-newrelic.EventsToMetricsRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/events_to_metrics_rule.html newrelic_events_to_metrics_rule}.

#### Initializers <a name="@cdktf/provider-newrelic.EventsToMetricsRule.Initializer"></a>

```typescript
import { EventsToMetricsRule } from '@cdktf/provider-newrelic'

new EventsToMetricsRule(scope: Construct, id: string, config: EventsToMetricsRuleConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRule.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRule.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRule.parameter.config"></a>

- *Type:* [`@cdktf/provider-newrelic.EventsToMetricsRuleConfig`](#@cdktf/provider-newrelic.EventsToMetricsRuleConfig)

---

#### Methods <a name="Methods"></a>

##### `resetAccountId` <a name="@cdktf/provider-newrelic.EventsToMetricsRule.resetAccountId"></a>

```typescript
public resetAccountId()
```

##### `resetDescription` <a name="@cdktf/provider-newrelic.EventsToMetricsRule.resetDescription"></a>

```typescript
public resetDescription()
```

##### `resetEnabled` <a name="@cdktf/provider-newrelic.EventsToMetricsRule.resetEnabled"></a>

```typescript
public resetEnabled()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `ruleId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRule.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* `string`

---

##### `accountIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRule.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* `number`

---

##### `descriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* `string`

---

##### `enabledInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRule.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `nrqlInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRule.property.nrqlInput"></a>

```typescript
public readonly nrqlInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `nrql`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRule.property.nrql"></a>

```typescript
public readonly nrql: string;
```

- *Type:* `string`

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRule.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `enabled`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-newrelic.EventsToMetricsRule.property.tfResourceType"></a>

- *Type:* `string`

---

### InfraAlertCondition <a name="@cdktf/provider-newrelic.InfraAlertCondition"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html newrelic_infra_alert_condition}.

#### Initializers <a name="@cdktf/provider-newrelic.InfraAlertCondition.Initializer"></a>

```typescript
import { InfraAlertCondition } from '@cdktf/provider-newrelic'

new InfraAlertCondition(scope: Construct, id: string, config: InfraAlertConditionConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.parameter.config"></a>

- *Type:* [`@cdktf/provider-newrelic.InfraAlertConditionConfig`](#@cdktf/provider-newrelic.InfraAlertConditionConfig)

---

#### Methods <a name="Methods"></a>

##### `putCritical` <a name="@cdktf/provider-newrelic.InfraAlertCondition.putCritical"></a>

```typescript
public putCritical(value?: InfraAlertConditionCritical)
```

###### `value`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.parameter.value"></a>

- *Type:* [`@cdktf/provider-newrelic.InfraAlertConditionCritical`](#@cdktf/provider-newrelic.InfraAlertConditionCritical)

---

##### `putWarning` <a name="@cdktf/provider-newrelic.InfraAlertCondition.putWarning"></a>

```typescript
public putWarning(value?: InfraAlertConditionWarning)
```

###### `value`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.parameter.value"></a>

- *Type:* [`@cdktf/provider-newrelic.InfraAlertConditionWarning`](#@cdktf/provider-newrelic.InfraAlertConditionWarning)

---

##### `resetComparison` <a name="@cdktf/provider-newrelic.InfraAlertCondition.resetComparison"></a>

```typescript
public resetComparison()
```

##### `resetCritical` <a name="@cdktf/provider-newrelic.InfraAlertCondition.resetCritical"></a>

```typescript
public resetCritical()
```

##### `resetDescription` <a name="@cdktf/provider-newrelic.InfraAlertCondition.resetDescription"></a>

```typescript
public resetDescription()
```

##### `resetEnabled` <a name="@cdktf/provider-newrelic.InfraAlertCondition.resetEnabled"></a>

```typescript
public resetEnabled()
```

##### `resetEvent` <a name="@cdktf/provider-newrelic.InfraAlertCondition.resetEvent"></a>

```typescript
public resetEvent()
```

##### `resetIntegrationProvider` <a name="@cdktf/provider-newrelic.InfraAlertCondition.resetIntegrationProvider"></a>

```typescript
public resetIntegrationProvider()
```

##### `resetProcessWhere` <a name="@cdktf/provider-newrelic.InfraAlertCondition.resetProcessWhere"></a>

```typescript
public resetProcessWhere()
```

##### `resetRunbookUrl` <a name="@cdktf/provider-newrelic.InfraAlertCondition.resetRunbookUrl"></a>

```typescript
public resetRunbookUrl()
```

##### `resetSelect` <a name="@cdktf/provider-newrelic.InfraAlertCondition.resetSelect"></a>

```typescript
public resetSelect()
```

##### `resetViolationCloseTimer` <a name="@cdktf/provider-newrelic.InfraAlertCondition.resetViolationCloseTimer"></a>

```typescript
public resetViolationCloseTimer()
```

##### `resetWarning` <a name="@cdktf/provider-newrelic.InfraAlertCondition.resetWarning"></a>

```typescript
public resetWarning()
```

##### `resetWhere` <a name="@cdktf/provider-newrelic.InfraAlertCondition.resetWhere"></a>

```typescript
public resetWhere()
```


#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.createdAt"></a>

```typescript
public readonly createdAt: number;
```

- *Type:* `number`

---

##### `critical`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.critical"></a>

```typescript
public readonly critical: InfraAlertConditionCriticalOutputReference;
```

- *Type:* [`@cdktf/provider-newrelic.InfraAlertConditionCriticalOutputReference`](#@cdktf/provider-newrelic.InfraAlertConditionCriticalOutputReference)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.updatedAt"></a>

```typescript
public readonly updatedAt: number;
```

- *Type:* `number`

---

##### `warning`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.warning"></a>

```typescript
public readonly warning: InfraAlertConditionWarningOutputReference;
```

- *Type:* [`@cdktf/provider-newrelic.InfraAlertConditionWarningOutputReference`](#@cdktf/provider-newrelic.InfraAlertConditionWarningOutputReference)

---

##### `comparisonInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.comparisonInput"></a>

```typescript
public readonly comparisonInput: string;
```

- *Type:* `string`

---

##### `criticalInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.criticalInput"></a>

```typescript
public readonly criticalInput: InfraAlertConditionCritical;
```

- *Type:* [`@cdktf/provider-newrelic.InfraAlertConditionCritical`](#@cdktf/provider-newrelic.InfraAlertConditionCritical)

---

##### `descriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* `string`

---

##### `enabledInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `eventInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.eventInput"></a>

```typescript
public readonly eventInput: string;
```

- *Type:* `string`

---

##### `integrationProviderInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.integrationProviderInput"></a>

```typescript
public readonly integrationProviderInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `policyIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: number;
```

- *Type:* `number`

---

##### `processWhereInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.processWhereInput"></a>

```typescript
public readonly processWhereInput: string;
```

- *Type:* `string`

---

##### `runbookUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.runbookUrlInput"></a>

```typescript
public readonly runbookUrlInput: string;
```

- *Type:* `string`

---

##### `selectInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.selectInput"></a>

```typescript
public readonly selectInput: string;
```

- *Type:* `string`

---

##### `typeInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* `string`

---

##### `violationCloseTimerInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.violationCloseTimerInput"></a>

```typescript
public readonly violationCloseTimerInput: number;
```

- *Type:* `number`

---

##### `warningInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.warningInput"></a>

```typescript
public readonly warningInput: InfraAlertConditionWarning;
```

- *Type:* [`@cdktf/provider-newrelic.InfraAlertConditionWarning`](#@cdktf/provider-newrelic.InfraAlertConditionWarning)

---

##### `whereInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.whereInput"></a>

```typescript
public readonly whereInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `policyId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.policyId"></a>

```typescript
public readonly policyId: number;
```

- *Type:* `number`

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

##### `comparison`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `enabled`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `event`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.event"></a>

```typescript
public readonly event: string;
```

- *Type:* `string`

---

##### `integrationProvider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.integrationProvider"></a>

```typescript
public readonly integrationProvider: string;
```

- *Type:* `string`

---

##### `processWhere`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.processWhere"></a>

```typescript
public readonly processWhere: string;
```

- *Type:* `string`

---

##### `runbookUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.runbookUrl"></a>

```typescript
public readonly runbookUrl: string;
```

- *Type:* `string`

---

##### `select`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.select"></a>

```typescript
public readonly select: string;
```

- *Type:* `string`

---

##### `violationCloseTimer`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.violationCloseTimer"></a>

```typescript
public readonly violationCloseTimer: number;
```

- *Type:* `number`

---

##### `where`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.where"></a>

```typescript
public readonly where: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-newrelic.InfraAlertCondition.property.tfResourceType"></a>

- *Type:* `string`

---

### InsightsEvent <a name="@cdktf/provider-newrelic.InsightsEvent"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/insights_event.html newrelic_insights_event}.

#### Initializers <a name="@cdktf/provider-newrelic.InsightsEvent.Initializer"></a>

```typescript
import { InsightsEvent } from '@cdktf/provider-newrelic'

new InsightsEvent(scope: Construct, id: string, config: InsightsEventConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InsightsEvent.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InsightsEvent.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InsightsEvent.parameter.config"></a>

- *Type:* [`@cdktf/provider-newrelic.InsightsEventConfig`](#@cdktf/provider-newrelic.InsightsEventConfig)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InsightsEvent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `eventInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InsightsEvent.property.eventInput"></a>

```typescript
public readonly eventInput: InsightsEventEvent[];
```

- *Type:* [`@cdktf/provider-newrelic.InsightsEventEvent`](#@cdktf/provider-newrelic.InsightsEventEvent)[]

---

##### `event`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InsightsEvent.property.event"></a>

```typescript
public readonly event: InsightsEventEvent[];
```

- *Type:* [`@cdktf/provider-newrelic.InsightsEventEvent`](#@cdktf/provider-newrelic.InsightsEventEvent)[]

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-newrelic.InsightsEvent.property.tfResourceType"></a>

- *Type:* `string`

---

### NewrelicProvider <a name="@cdktf/provider-newrelic.NewrelicProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic newrelic}.

#### Initializers <a name="@cdktf/provider-newrelic.NewrelicProvider.Initializer"></a>

```typescript
import { NewrelicProvider } from '@cdktf/provider-newrelic'

new NewrelicProvider(scope: Construct, id: string, config: NewrelicProviderConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.parameter.config"></a>

- *Type:* [`@cdktf/provider-newrelic.NewrelicProviderConfig`](#@cdktf/provider-newrelic.NewrelicProviderConfig)

---

#### Methods <a name="Methods"></a>

##### `resetAdminApiKey` <a name="@cdktf/provider-newrelic.NewrelicProvider.resetAdminApiKey"></a>

```typescript
public resetAdminApiKey()
```

##### `resetAlias` <a name="@cdktf/provider-newrelic.NewrelicProvider.resetAlias"></a>

```typescript
public resetAlias()
```

##### `resetApiKey` <a name="@cdktf/provider-newrelic.NewrelicProvider.resetApiKey"></a>

```typescript
public resetApiKey()
```

##### `resetApiUrl` <a name="@cdktf/provider-newrelic.NewrelicProvider.resetApiUrl"></a>

```typescript
public resetApiUrl()
```

##### `resetCacertFile` <a name="@cdktf/provider-newrelic.NewrelicProvider.resetCacertFile"></a>

```typescript
public resetCacertFile()
```

##### `resetInfrastructureApiUrl` <a name="@cdktf/provider-newrelic.NewrelicProvider.resetInfrastructureApiUrl"></a>

```typescript
public resetInfrastructureApiUrl()
```

##### `resetInsecureSkipVerify` <a name="@cdktf/provider-newrelic.NewrelicProvider.resetInsecureSkipVerify"></a>

```typescript
public resetInsecureSkipVerify()
```

##### `resetInsightsInsertKey` <a name="@cdktf/provider-newrelic.NewrelicProvider.resetInsightsInsertKey"></a>

```typescript
public resetInsightsInsertKey()
```

##### `resetInsightsInsertUrl` <a name="@cdktf/provider-newrelic.NewrelicProvider.resetInsightsInsertUrl"></a>

```typescript
public resetInsightsInsertUrl()
```

##### `resetInsightsQueryUrl` <a name="@cdktf/provider-newrelic.NewrelicProvider.resetInsightsQueryUrl"></a>

```typescript
public resetInsightsQueryUrl()
```

##### `resetNerdgraphApiUrl` <a name="@cdktf/provider-newrelic.NewrelicProvider.resetNerdgraphApiUrl"></a>

```typescript
public resetNerdgraphApiUrl()
```

##### `resetRegion` <a name="@cdktf/provider-newrelic.NewrelicProvider.resetRegion"></a>

```typescript
public resetRegion()
```

##### `resetSyntheticsApiUrl` <a name="@cdktf/provider-newrelic.NewrelicProvider.resetSyntheticsApiUrl"></a>

```typescript
public resetSyntheticsApiUrl()
```


#### Properties <a name="Properties"></a>

##### `accountIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* `number`

---

##### `adminApiKeyInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.adminApiKeyInput"></a>

```typescript
public readonly adminApiKeyInput: string;
```

- *Type:* `string`

---

##### `aliasInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* `string`

---

##### `apiKeyInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.apiKeyInput"></a>

```typescript
public readonly apiKeyInput: string;
```

- *Type:* `string`

---

##### `apiUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.apiUrlInput"></a>

```typescript
public readonly apiUrlInput: string;
```

- *Type:* `string`

---

##### `cacertFileInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.cacertFileInput"></a>

```typescript
public readonly cacertFileInput: string;
```

- *Type:* `string`

---

##### `infrastructureApiUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.infrastructureApiUrlInput"></a>

```typescript
public readonly infrastructureApiUrlInput: string;
```

- *Type:* `string`

---

##### `insecureSkipVerifyInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.insecureSkipVerifyInput"></a>

```typescript
public readonly insecureSkipVerifyInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `insightsInsertKeyInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.insightsInsertKeyInput"></a>

```typescript
public readonly insightsInsertKeyInput: string;
```

- *Type:* `string`

---

##### `insightsInsertUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.insightsInsertUrlInput"></a>

```typescript
public readonly insightsInsertUrlInput: string;
```

- *Type:* `string`

---

##### `insightsQueryUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.insightsQueryUrlInput"></a>

```typescript
public readonly insightsQueryUrlInput: string;
```

- *Type:* `string`

---

##### `nerdgraphApiUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.nerdgraphApiUrlInput"></a>

```typescript
public readonly nerdgraphApiUrlInput: string;
```

- *Type:* `string`

---

##### `regionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* `string`

---

##### `syntheticsApiUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.syntheticsApiUrlInput"></a>

```typescript
public readonly syntheticsApiUrlInput: string;
```

- *Type:* `string`

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

---

##### `adminApiKey`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.adminApiKey"></a>

```typescript
public readonly adminApiKey: string;
```

- *Type:* `string`

---

##### `alias`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* `string`

---

##### `apiKey`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* `string`

---

##### `apiUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.apiUrl"></a>

```typescript
public readonly apiUrl: string;
```

- *Type:* `string`

---

##### `cacertFile`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.cacertFile"></a>

```typescript
public readonly cacertFile: string;
```

- *Type:* `string`

---

##### `infrastructureApiUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.infrastructureApiUrl"></a>

```typescript
public readonly infrastructureApiUrl: string;
```

- *Type:* `string`

---

##### `insecureSkipVerify`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.insecureSkipVerify"></a>

```typescript
public readonly insecureSkipVerify: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `insightsInsertKey`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.insightsInsertKey"></a>

```typescript
public readonly insightsInsertKey: string;
```

- *Type:* `string`

---

##### `insightsInsertUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.insightsInsertUrl"></a>

```typescript
public readonly insightsInsertUrl: string;
```

- *Type:* `string`

---

##### `insightsQueryUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.insightsQueryUrl"></a>

```typescript
public readonly insightsQueryUrl: string;
```

- *Type:* `string`

---

##### `nerdgraphApiUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.nerdgraphApiUrl"></a>

```typescript
public readonly nerdgraphApiUrl: string;
```

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* `string`

---

##### `syntheticsApiUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProvider.property.syntheticsApiUrl"></a>

```typescript
public readonly syntheticsApiUrl: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-newrelic.NewrelicProvider.property.tfResourceType"></a>

- *Type:* `string`

---

### NrqlAlertCondition <a name="@cdktf/provider-newrelic.NrqlAlertCondition"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html newrelic_nrql_alert_condition}.

#### Initializers <a name="@cdktf/provider-newrelic.NrqlAlertCondition.Initializer"></a>

```typescript
import { NrqlAlertCondition } from '@cdktf/provider-newrelic'

new NrqlAlertCondition(scope: Construct, id: string, config: NrqlAlertConditionConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.parameter.config"></a>

- *Type:* [`@cdktf/provider-newrelic.NrqlAlertConditionConfig`](#@cdktf/provider-newrelic.NrqlAlertConditionConfig)

---

#### Methods <a name="Methods"></a>

##### `putCritical` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.putCritical"></a>

```typescript
public putCritical(value?: NrqlAlertConditionCritical)
```

###### `value`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.parameter.value"></a>

- *Type:* [`@cdktf/provider-newrelic.NrqlAlertConditionCritical`](#@cdktf/provider-newrelic.NrqlAlertConditionCritical)

---

##### `putNrql` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.putNrql"></a>

```typescript
public putNrql(value: NrqlAlertConditionNrql)
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.parameter.value"></a>

- *Type:* [`@cdktf/provider-newrelic.NrqlAlertConditionNrql`](#@cdktf/provider-newrelic.NrqlAlertConditionNrql)

---

##### `putWarning` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.putWarning"></a>

```typescript
public putWarning(value?: NrqlAlertConditionWarning)
```

###### `value`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.parameter.value"></a>

- *Type:* [`@cdktf/provider-newrelic.NrqlAlertConditionWarning`](#@cdktf/provider-newrelic.NrqlAlertConditionWarning)

---

##### `resetAccountId` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetAccountId"></a>

```typescript
public resetAccountId()
```

##### `resetAggregationDelay` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetAggregationDelay"></a>

```typescript
public resetAggregationDelay()
```

##### `resetAggregationMethod` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetAggregationMethod"></a>

```typescript
public resetAggregationMethod()
```

##### `resetAggregationTimer` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetAggregationTimer"></a>

```typescript
public resetAggregationTimer()
```

##### `resetAggregationWindow` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetAggregationWindow"></a>

```typescript
public resetAggregationWindow()
```

##### `resetBaselineDirection` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetBaselineDirection"></a>

```typescript
public resetBaselineDirection()
```

##### `resetCloseViolationsOnExpiration` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetCloseViolationsOnExpiration"></a>

```typescript
public resetCloseViolationsOnExpiration()
```

##### `resetCritical` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetCritical"></a>

```typescript
public resetCritical()
```

##### `resetDescription` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetDescription"></a>

```typescript
public resetDescription()
```

##### `resetEnabled` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetEnabled"></a>

```typescript
public resetEnabled()
```

##### `resetExpectedGroups` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetExpectedGroups"></a>

```typescript
public resetExpectedGroups()
```

##### `resetExpirationDuration` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetExpirationDuration"></a>

```typescript
public resetExpirationDuration()
```

##### `resetFillOption` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetFillOption"></a>

```typescript
public resetFillOption()
```

##### `resetFillValue` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetFillValue"></a>

```typescript
public resetFillValue()
```

##### `resetIgnoreOverlap` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetIgnoreOverlap"></a>

```typescript
public resetIgnoreOverlap()
```

##### `resetOpenViolationOnExpiration` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetOpenViolationOnExpiration"></a>

```typescript
public resetOpenViolationOnExpiration()
```

##### `resetOpenViolationOnGroupOverlap` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetOpenViolationOnGroupOverlap"></a>

```typescript
public resetOpenViolationOnGroupOverlap()
```

##### `resetRunbookUrl` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetRunbookUrl"></a>

```typescript
public resetRunbookUrl()
```

##### `resetTerm` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetTerm"></a>

```typescript
public resetTerm()
```

##### `resetType` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetType"></a>

```typescript
public resetType()
```

##### `resetValueFunction` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetValueFunction"></a>

```typescript
public resetValueFunction()
```

##### `resetViolationTimeLimit` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetViolationTimeLimit"></a>

```typescript
public resetViolationTimeLimit()
```

##### `resetViolationTimeLimitSeconds` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetViolationTimeLimitSeconds"></a>

```typescript
public resetViolationTimeLimitSeconds()
```

##### `resetWarning` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.resetWarning"></a>

```typescript
public resetWarning()
```


#### Properties <a name="Properties"></a>

##### `critical`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.critical"></a>

```typescript
public readonly critical: NrqlAlertConditionCriticalOutputReference;
```

- *Type:* [`@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference`](#@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `nrql`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.nrql"></a>

```typescript
public readonly nrql: NrqlAlertConditionNrqlOutputReference;
```

- *Type:* [`@cdktf/provider-newrelic.NrqlAlertConditionNrqlOutputReference`](#@cdktf/provider-newrelic.NrqlAlertConditionNrqlOutputReference)

---

##### `warning`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.warning"></a>

```typescript
public readonly warning: NrqlAlertConditionWarningOutputReference;
```

- *Type:* [`@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference`](#@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference)

---

##### `accountIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* `number`

---

##### `aggregationDelayInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.aggregationDelayInput"></a>

```typescript
public readonly aggregationDelayInput: number;
```

- *Type:* `number`

---

##### `aggregationMethodInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.aggregationMethodInput"></a>

```typescript
public readonly aggregationMethodInput: string;
```

- *Type:* `string`

---

##### `aggregationTimerInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.aggregationTimerInput"></a>

```typescript
public readonly aggregationTimerInput: number;
```

- *Type:* `number`

---

##### `aggregationWindowInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.aggregationWindowInput"></a>

```typescript
public readonly aggregationWindowInput: number;
```

- *Type:* `number`

---

##### `baselineDirectionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.baselineDirectionInput"></a>

```typescript
public readonly baselineDirectionInput: string;
```

- *Type:* `string`

---

##### `closeViolationsOnExpirationInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.closeViolationsOnExpirationInput"></a>

```typescript
public readonly closeViolationsOnExpirationInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `criticalInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.criticalInput"></a>

```typescript
public readonly criticalInput: NrqlAlertConditionCritical;
```

- *Type:* [`@cdktf/provider-newrelic.NrqlAlertConditionCritical`](#@cdktf/provider-newrelic.NrqlAlertConditionCritical)

---

##### `descriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* `string`

---

##### `enabledInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `expectedGroupsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.expectedGroupsInput"></a>

```typescript
public readonly expectedGroupsInput: number;
```

- *Type:* `number`

---

##### `expirationDurationInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.expirationDurationInput"></a>

```typescript
public readonly expirationDurationInput: number;
```

- *Type:* `number`

---

##### `fillOptionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.fillOptionInput"></a>

```typescript
public readonly fillOptionInput: string;
```

- *Type:* `string`

---

##### `fillValueInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.fillValueInput"></a>

```typescript
public readonly fillValueInput: number;
```

- *Type:* `number`

---

##### `ignoreOverlapInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.ignoreOverlapInput"></a>

```typescript
public readonly ignoreOverlapInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `nrqlInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.nrqlInput"></a>

```typescript
public readonly nrqlInput: NrqlAlertConditionNrql;
```

- *Type:* [`@cdktf/provider-newrelic.NrqlAlertConditionNrql`](#@cdktf/provider-newrelic.NrqlAlertConditionNrql)

---

##### `openViolationOnExpirationInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.openViolationOnExpirationInput"></a>

```typescript
public readonly openViolationOnExpirationInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `openViolationOnGroupOverlapInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.openViolationOnGroupOverlapInput"></a>

```typescript
public readonly openViolationOnGroupOverlapInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `policyIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: number;
```

- *Type:* `number`

---

##### `runbookUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.runbookUrlInput"></a>

```typescript
public readonly runbookUrlInput: string;
```

- *Type:* `string`

---

##### `termInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.termInput"></a>

```typescript
public readonly termInput: NrqlAlertConditionTerm[];
```

- *Type:* [`@cdktf/provider-newrelic.NrqlAlertConditionTerm`](#@cdktf/provider-newrelic.NrqlAlertConditionTerm)[]

---

##### `typeInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* `string`

---

##### `valueFunctionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.valueFunctionInput"></a>

```typescript
public readonly valueFunctionInput: string;
```

- *Type:* `string`

---

##### `violationTimeLimitInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.violationTimeLimitInput"></a>

```typescript
public readonly violationTimeLimitInput: string;
```

- *Type:* `string`

---

##### `violationTimeLimitSecondsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.violationTimeLimitSecondsInput"></a>

```typescript
public readonly violationTimeLimitSecondsInput: number;
```

- *Type:* `number`

---

##### `warningInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.warningInput"></a>

```typescript
public readonly warningInput: NrqlAlertConditionWarning;
```

- *Type:* [`@cdktf/provider-newrelic.NrqlAlertConditionWarning`](#@cdktf/provider-newrelic.NrqlAlertConditionWarning)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `policyId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.policyId"></a>

```typescript
public readonly policyId: number;
```

- *Type:* `number`

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

---

##### `aggregationDelay`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.aggregationDelay"></a>

```typescript
public readonly aggregationDelay: number;
```

- *Type:* `number`

---

##### `aggregationMethod`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.aggregationMethod"></a>

```typescript
public readonly aggregationMethod: string;
```

- *Type:* `string`

---

##### `aggregationTimer`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.aggregationTimer"></a>

```typescript
public readonly aggregationTimer: number;
```

- *Type:* `number`

---

##### `aggregationWindow`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.aggregationWindow"></a>

```typescript
public readonly aggregationWindow: number;
```

- *Type:* `number`

---

##### `baselineDirection`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.baselineDirection"></a>

```typescript
public readonly baselineDirection: string;
```

- *Type:* `string`

---

##### `closeViolationsOnExpiration`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.closeViolationsOnExpiration"></a>

```typescript
public readonly closeViolationsOnExpiration: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `enabled`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `expectedGroups`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.expectedGroups"></a>

```typescript
public readonly expectedGroups: number;
```

- *Type:* `number`

---

##### `expirationDuration`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.expirationDuration"></a>

```typescript
public readonly expirationDuration: number;
```

- *Type:* `number`

---

##### `fillOption`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.fillOption"></a>

```typescript
public readonly fillOption: string;
```

- *Type:* `string`

---

##### `fillValue`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.fillValue"></a>

```typescript
public readonly fillValue: number;
```

- *Type:* `number`

---

##### `ignoreOverlap`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.ignoreOverlap"></a>

```typescript
public readonly ignoreOverlap: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `openViolationOnExpiration`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.openViolationOnExpiration"></a>

```typescript
public readonly openViolationOnExpiration: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `openViolationOnGroupOverlap`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.openViolationOnGroupOverlap"></a>

```typescript
public readonly openViolationOnGroupOverlap: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `runbookUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.runbookUrl"></a>

```typescript
public readonly runbookUrl: string;
```

- *Type:* `string`

---

##### `term`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.term"></a>

```typescript
public readonly term: NrqlAlertConditionTerm[];
```

- *Type:* [`@cdktf/provider-newrelic.NrqlAlertConditionTerm`](#@cdktf/provider-newrelic.NrqlAlertConditionTerm)[]

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

##### `valueFunction`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.valueFunction"></a>

```typescript
public readonly valueFunction: string;
```

- *Type:* `string`

---

##### `violationTimeLimit`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.violationTimeLimit"></a>

```typescript
public readonly violationTimeLimit: string;
```

- *Type:* `string`

---

##### `violationTimeLimitSeconds`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.violationTimeLimitSeconds"></a>

```typescript
public readonly violationTimeLimitSeconds: number;
```

- *Type:* `number`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-newrelic.NrqlAlertCondition.property.tfResourceType"></a>

- *Type:* `string`

---

### NrqlDropRule <a name="@cdktf/provider-newrelic.NrqlDropRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_drop_rule.html newrelic_nrql_drop_rule}.

#### Initializers <a name="@cdktf/provider-newrelic.NrqlDropRule.Initializer"></a>

```typescript
import { NrqlDropRule } from '@cdktf/provider-newrelic'

new NrqlDropRule(scope: Construct, id: string, config: NrqlDropRuleConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlDropRule.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlDropRule.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlDropRule.parameter.config"></a>

- *Type:* [`@cdktf/provider-newrelic.NrqlDropRuleConfig`](#@cdktf/provider-newrelic.NrqlDropRuleConfig)

---

#### Methods <a name="Methods"></a>

##### `resetAccountId` <a name="@cdktf/provider-newrelic.NrqlDropRule.resetAccountId"></a>

```typescript
public resetAccountId()
```

##### `resetDescription` <a name="@cdktf/provider-newrelic.NrqlDropRule.resetDescription"></a>

```typescript
public resetDescription()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlDropRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `ruleId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlDropRule.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* `string`

---

##### `accountIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlDropRule.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* `number`

---

##### `actionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlDropRule.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* `string`

---

##### `descriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlDropRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* `string`

---

##### `nrqlInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlDropRule.property.nrqlInput"></a>

```typescript
public readonly nrqlInput: string;
```

- *Type:* `string`

---

##### `action`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlDropRule.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* `string`

---

##### `nrql`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlDropRule.property.nrql"></a>

```typescript
public readonly nrql: string;
```

- *Type:* `string`

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlDropRule.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlDropRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-newrelic.NrqlDropRule.property.tfResourceType"></a>

- *Type:* `string`

---

### OneDashboard <a name="@cdktf/provider-newrelic.OneDashboard"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html newrelic_one_dashboard}.

#### Initializers <a name="@cdktf/provider-newrelic.OneDashboard.Initializer"></a>

```typescript
import { OneDashboard } from '@cdktf/provider-newrelic'

new OneDashboard(scope: Construct, id: string, config: OneDashboardConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboard.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboard.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboard.parameter.config"></a>

- *Type:* [`@cdktf/provider-newrelic.OneDashboardConfig`](#@cdktf/provider-newrelic.OneDashboardConfig)

---

#### Methods <a name="Methods"></a>

##### `resetAccountId` <a name="@cdktf/provider-newrelic.OneDashboard.resetAccountId"></a>

```typescript
public resetAccountId()
```

##### `resetDescription` <a name="@cdktf/provider-newrelic.OneDashboard.resetDescription"></a>

```typescript
public resetDescription()
```

##### `resetPermissions` <a name="@cdktf/provider-newrelic.OneDashboard.resetPermissions"></a>

```typescript
public resetPermissions()
```


#### Properties <a name="Properties"></a>

##### `guid`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboard.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboard.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `permalink`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboard.property.permalink"></a>

```typescript
public readonly permalink: string;
```

- *Type:* `string`

---

##### `accountIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboard.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* `number`

---

##### `descriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboard.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboard.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `pageInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboard.property.pageInput"></a>

```typescript
public readonly pageInput: OneDashboardPage[];
```

- *Type:* [`@cdktf/provider-newrelic.OneDashboardPage`](#@cdktf/provider-newrelic.OneDashboardPage)[]

---

##### `permissionsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboard.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboard.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `page`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboard.property.page"></a>

```typescript
public readonly page: OneDashboardPage[];
```

- *Type:* [`@cdktf/provider-newrelic.OneDashboardPage`](#@cdktf/provider-newrelic.OneDashboardPage)[]

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboard.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboard.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `permissions`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboard.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-newrelic.OneDashboard.property.tfResourceType"></a>

- *Type:* `string`

---

### OneDashboardRaw <a name="@cdktf/provider-newrelic.OneDashboardRaw"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw.html newrelic_one_dashboard_raw}.

#### Initializers <a name="@cdktf/provider-newrelic.OneDashboardRaw.Initializer"></a>

```typescript
import { OneDashboardRaw } from '@cdktf/provider-newrelic'

new OneDashboardRaw(scope: Construct, id: string, config: OneDashboardRawConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardRaw.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardRaw.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardRaw.parameter.config"></a>

- *Type:* [`@cdktf/provider-newrelic.OneDashboardRawConfig`](#@cdktf/provider-newrelic.OneDashboardRawConfig)

---

#### Methods <a name="Methods"></a>

##### `resetAccountId` <a name="@cdktf/provider-newrelic.OneDashboardRaw.resetAccountId"></a>

```typescript
public resetAccountId()
```

##### `resetDescription` <a name="@cdktf/provider-newrelic.OneDashboardRaw.resetDescription"></a>

```typescript
public resetDescription()
```

##### `resetPermissions` <a name="@cdktf/provider-newrelic.OneDashboardRaw.resetPermissions"></a>

```typescript
public resetPermissions()
```


#### Properties <a name="Properties"></a>

##### `guid`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardRaw.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardRaw.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `permalink`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardRaw.property.permalink"></a>

```typescript
public readonly permalink: string;
```

- *Type:* `string`

---

##### `accountIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRaw.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* `number`

---

##### `descriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRaw.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRaw.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `pageInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRaw.property.pageInput"></a>

```typescript
public readonly pageInput: OneDashboardRawPage[];
```

- *Type:* [`@cdktf/provider-newrelic.OneDashboardRawPage`](#@cdktf/provider-newrelic.OneDashboardRawPage)[]

---

##### `permissionsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRaw.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardRaw.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `page`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardRaw.property.page"></a>

```typescript
public readonly page: OneDashboardRawPage[];
```

- *Type:* [`@cdktf/provider-newrelic.OneDashboardRawPage`](#@cdktf/provider-newrelic.OneDashboardRawPage)[]

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRaw.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRaw.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `permissions`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRaw.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-newrelic.OneDashboardRaw.property.tfResourceType"></a>

- *Type:* `string`

---

### PluginsAlertCondition <a name="@cdktf/provider-newrelic.PluginsAlertCondition"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition.html newrelic_plugins_alert_condition}.

#### Initializers <a name="@cdktf/provider-newrelic.PluginsAlertCondition.Initializer"></a>

```typescript
import { PluginsAlertCondition } from '@cdktf/provider-newrelic'

new PluginsAlertCondition(scope: Construct, id: string, config: PluginsAlertConditionConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.parameter.config"></a>

- *Type:* [`@cdktf/provider-newrelic.PluginsAlertConditionConfig`](#@cdktf/provider-newrelic.PluginsAlertConditionConfig)

---

#### Methods <a name="Methods"></a>

##### `resetEnabled` <a name="@cdktf/provider-newrelic.PluginsAlertCondition.resetEnabled"></a>

```typescript
public resetEnabled()
```

##### `resetRunbookUrl` <a name="@cdktf/provider-newrelic.PluginsAlertCondition.resetRunbookUrl"></a>

```typescript
public resetRunbookUrl()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `enabledInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `entitiesInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.entitiesInput"></a>

```typescript
public readonly entitiesInput: number[];
```

- *Type:* `number`[]

---

##### `metricDescriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.metricDescriptionInput"></a>

```typescript
public readonly metricDescriptionInput: string;
```

- *Type:* `string`

---

##### `metricInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.metricInput"></a>

```typescript
public readonly metricInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `pluginGuidInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.pluginGuidInput"></a>

```typescript
public readonly pluginGuidInput: string;
```

- *Type:* `string`

---

##### `pluginIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.pluginIdInput"></a>

```typescript
public readonly pluginIdInput: string;
```

- *Type:* `string`

---

##### `policyIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: number;
```

- *Type:* `number`

---

##### `runbookUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.runbookUrlInput"></a>

```typescript
public readonly runbookUrlInput: string;
```

- *Type:* `string`

---

##### `termInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.termInput"></a>

```typescript
public readonly termInput: PluginsAlertConditionTerm[];
```

- *Type:* [`@cdktf/provider-newrelic.PluginsAlertConditionTerm`](#@cdktf/provider-newrelic.PluginsAlertConditionTerm)[]

---

##### `valueFunctionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.valueFunctionInput"></a>

```typescript
public readonly valueFunctionInput: string;
```

- *Type:* `string`

---

##### `entities`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.entities"></a>

```typescript
public readonly entities: number[];
```

- *Type:* `number`[]

---

##### `metric`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* `string`

---

##### `metricDescription`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.metricDescription"></a>

```typescript
public readonly metricDescription: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `pluginGuid`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.pluginGuid"></a>

```typescript
public readonly pluginGuid: string;
```

- *Type:* `string`

---

##### `pluginId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.pluginId"></a>

```typescript
public readonly pluginId: string;
```

- *Type:* `string`

---

##### `policyId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.policyId"></a>

```typescript
public readonly policyId: number;
```

- *Type:* `number`

---

##### `term`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.term"></a>

```typescript
public readonly term: PluginsAlertConditionTerm[];
```

- *Type:* [`@cdktf/provider-newrelic.PluginsAlertConditionTerm`](#@cdktf/provider-newrelic.PluginsAlertConditionTerm)[]

---

##### `valueFunction`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.valueFunction"></a>

```typescript
public readonly valueFunction: string;
```

- *Type:* `string`

---

##### `enabled`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `runbookUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.runbookUrl"></a>

```typescript
public readonly runbookUrl: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-newrelic.PluginsAlertCondition.property.tfResourceType"></a>

- *Type:* `string`

---

### ServiceLevel <a name="@cdktf/provider-newrelic.ServiceLevel"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html newrelic_service_level}.

#### Initializers <a name="@cdktf/provider-newrelic.ServiceLevel.Initializer"></a>

```typescript
import { ServiceLevel } from '@cdktf/provider-newrelic'

new ServiceLevel(scope: Construct, id: string, config: ServiceLevelConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevel.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevel.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevel.parameter.config"></a>

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelConfig`](#@cdktf/provider-newrelic.ServiceLevelConfig)

---

#### Methods <a name="Methods"></a>

##### `putEvents` <a name="@cdktf/provider-newrelic.ServiceLevel.putEvents"></a>

```typescript
public putEvents(value: ServiceLevelEvents)
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevel.parameter.value"></a>

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelEvents`](#@cdktf/provider-newrelic.ServiceLevelEvents)

---

##### `resetDescription` <a name="@cdktf/provider-newrelic.ServiceLevel.resetDescription"></a>

```typescript
public resetDescription()
```

##### `resetObjective` <a name="@cdktf/provider-newrelic.ServiceLevel.resetObjective"></a>

```typescript
public resetObjective()
```


#### Properties <a name="Properties"></a>

##### `events`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevel.property.events"></a>

```typescript
public readonly events: ServiceLevelEventsOutputReference;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelEventsOutputReference`](#@cdktf/provider-newrelic.ServiceLevelEventsOutputReference)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `sliId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevel.property.sliId"></a>

```typescript
public readonly sliId: string;
```

- *Type:* `string`

---

##### `descriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevel.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* `string`

---

##### `eventsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevel.property.eventsInput"></a>

```typescript
public readonly eventsInput: ServiceLevelEvents;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelEvents`](#@cdktf/provider-newrelic.ServiceLevelEvents)

---

##### `guidInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevel.property.guidInput"></a>

```typescript
public readonly guidInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevel.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `objectiveInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevel.property.objectiveInput"></a>

```typescript
public readonly objectiveInput: ServiceLevelObjective[];
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelObjective`](#@cdktf/provider-newrelic.ServiceLevelObjective)[]

---

##### `guid`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevel.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevel.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `objective`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevel.property.objective"></a>

```typescript
public readonly objective: ServiceLevelObjective[];
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelObjective`](#@cdktf/provider-newrelic.ServiceLevelObjective)[]

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-newrelic.ServiceLevel.property.tfResourceType"></a>

- *Type:* `string`

---

### SyntheticsAlertCondition <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_alert_condition.html newrelic_synthetics_alert_condition}.

#### Initializers <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition.Initializer"></a>

```typescript
import { SyntheticsAlertCondition } from '@cdktf/provider-newrelic'

new SyntheticsAlertCondition(scope: Construct, id: string, config: SyntheticsAlertConditionConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition.parameter.config"></a>

- *Type:* [`@cdktf/provider-newrelic.SyntheticsAlertConditionConfig`](#@cdktf/provider-newrelic.SyntheticsAlertConditionConfig)

---

#### Methods <a name="Methods"></a>

##### `resetEnabled` <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition.resetEnabled"></a>

```typescript
public resetEnabled()
```

##### `resetRunbookUrl` <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition.resetRunbookUrl"></a>

```typescript
public resetRunbookUrl()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `enabledInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `monitorIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition.property.monitorIdInput"></a>

```typescript
public readonly monitorIdInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `policyIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: number;
```

- *Type:* `number`

---

##### `runbookUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition.property.runbookUrlInput"></a>

```typescript
public readonly runbookUrlInput: string;
```

- *Type:* `string`

---

##### `monitorId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition.property.monitorId"></a>

```typescript
public readonly monitorId: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `policyId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition.property.policyId"></a>

```typescript
public readonly policyId: number;
```

- *Type:* `number`

---

##### `enabled`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `runbookUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition.property.runbookUrl"></a>

```typescript
public readonly runbookUrl: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-newrelic.SyntheticsAlertCondition.property.tfResourceType"></a>

- *Type:* `string`

---

### SyntheticsMonitor <a name="@cdktf/provider-newrelic.SyntheticsMonitor"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor.html newrelic_synthetics_monitor}.

#### Initializers <a name="@cdktf/provider-newrelic.SyntheticsMonitor.Initializer"></a>

```typescript
import { SyntheticsMonitor } from '@cdktf/provider-newrelic'

new SyntheticsMonitor(scope: Construct, id: string, config: SyntheticsMonitorConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.parameter.config"></a>

- *Type:* [`@cdktf/provider-newrelic.SyntheticsMonitorConfig`](#@cdktf/provider-newrelic.SyntheticsMonitorConfig)

---

#### Methods <a name="Methods"></a>

##### `resetBypassHeadRequest` <a name="@cdktf/provider-newrelic.SyntheticsMonitor.resetBypassHeadRequest"></a>

```typescript
public resetBypassHeadRequest()
```

##### `resetSlaThreshold` <a name="@cdktf/provider-newrelic.SyntheticsMonitor.resetSlaThreshold"></a>

```typescript
public resetSlaThreshold()
```

##### `resetTreatRedirectAsFailure` <a name="@cdktf/provider-newrelic.SyntheticsMonitor.resetTreatRedirectAsFailure"></a>

```typescript
public resetTreatRedirectAsFailure()
```

##### `resetUri` <a name="@cdktf/provider-newrelic.SyntheticsMonitor.resetUri"></a>

```typescript
public resetUri()
```

##### `resetValidationString` <a name="@cdktf/provider-newrelic.SyntheticsMonitor.resetValidationString"></a>

```typescript
public resetValidationString()
```

##### `resetVerifySsl` <a name="@cdktf/provider-newrelic.SyntheticsMonitor.resetVerifySsl"></a>

```typescript
public resetVerifySsl()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `bypassHeadRequestInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.bypassHeadRequestInput"></a>

```typescript
public readonly bypassHeadRequestInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `frequencyInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.frequencyInput"></a>

```typescript
public readonly frequencyInput: number;
```

- *Type:* `number`

---

##### `locationsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.locationsInput"></a>

```typescript
public readonly locationsInput: string[];
```

- *Type:* `string`[]

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `slaThresholdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.slaThresholdInput"></a>

```typescript
public readonly slaThresholdInput: number;
```

- *Type:* `number`

---

##### `statusInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* `string`

---

##### `treatRedirectAsFailureInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.treatRedirectAsFailureInput"></a>

```typescript
public readonly treatRedirectAsFailureInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `typeInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* `string`

---

##### `uriInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* `string`

---

##### `validationStringInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.validationStringInput"></a>

```typescript
public readonly validationStringInput: string;
```

- *Type:* `string`

---

##### `verifySslInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.verifySslInput"></a>

```typescript
public readonly verifySslInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `frequency`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.frequency"></a>

```typescript
public readonly frequency: number;
```

- *Type:* `number`

---

##### `locations`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* `string`[]

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

##### `bypassHeadRequest`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.bypassHeadRequest"></a>

```typescript
public readonly bypassHeadRequest: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `slaThreshold`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.slaThreshold"></a>

```typescript
public readonly slaThreshold: number;
```

- *Type:* `number`

---

##### `treatRedirectAsFailure`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.treatRedirectAsFailure"></a>

```typescript
public readonly treatRedirectAsFailure: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `uri`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* `string`

---

##### `validationString`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.validationString"></a>

```typescript
public readonly validationString: string;
```

- *Type:* `string`

---

##### `verifySsl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.verifySsl"></a>

```typescript
public readonly verifySsl: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-newrelic.SyntheticsMonitor.property.tfResourceType"></a>

- *Type:* `string`

---

### SyntheticsMonitorScript <a name="@cdktf/provider-newrelic.SyntheticsMonitorScript"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor_script.html newrelic_synthetics_monitor_script}.

#### Initializers <a name="@cdktf/provider-newrelic.SyntheticsMonitorScript.Initializer"></a>

```typescript
import { SyntheticsMonitorScript } from '@cdktf/provider-newrelic'

new SyntheticsMonitorScript(scope: Construct, id: string, config: SyntheticsMonitorScriptConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScript.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScript.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScript.parameter.config"></a>

- *Type:* [`@cdktf/provider-newrelic.SyntheticsMonitorScriptConfig`](#@cdktf/provider-newrelic.SyntheticsMonitorScriptConfig)

---

#### Methods <a name="Methods"></a>

##### `resetLocation` <a name="@cdktf/provider-newrelic.SyntheticsMonitorScript.resetLocation"></a>

```typescript
public resetLocation()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScript.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `locationInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScript.property.locationInput"></a>

```typescript
public readonly locationInput: SyntheticsMonitorScriptLocation[];
```

- *Type:* [`@cdktf/provider-newrelic.SyntheticsMonitorScriptLocation`](#@cdktf/provider-newrelic.SyntheticsMonitorScriptLocation)[]

---

##### `monitorIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScript.property.monitorIdInput"></a>

```typescript
public readonly monitorIdInput: string;
```

- *Type:* `string`

---

##### `textInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScript.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* `string`

---

##### `monitorId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScript.property.monitorId"></a>

```typescript
public readonly monitorId: string;
```

- *Type:* `string`

---

##### `text`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScript.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* `string`

---

##### `location`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScript.property.location"></a>

```typescript
public readonly location: SyntheticsMonitorScriptLocation[];
```

- *Type:* [`@cdktf/provider-newrelic.SyntheticsMonitorScriptLocation`](#@cdktf/provider-newrelic.SyntheticsMonitorScriptLocation)[]

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-newrelic.SyntheticsMonitorScript.property.tfResourceType"></a>

- *Type:* `string`

---

### SyntheticsMultilocationAlertCondition <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_multilocation_alert_condition.html newrelic_synthetics_multilocation_alert_condition}.

#### Initializers <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.Initializer"></a>

```typescript
import { SyntheticsMultilocationAlertCondition } from '@cdktf/provider-newrelic'

new SyntheticsMultilocationAlertCondition(scope: Construct, id: string, config: SyntheticsMultilocationAlertConditionConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.parameter.config"></a>

- *Type:* [`@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionConfig`](#@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionConfig)

---

#### Methods <a name="Methods"></a>

##### `putCritical` <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.putCritical"></a>

```typescript
public putCritical(value: SyntheticsMultilocationAlertConditionCritical)
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.parameter.value"></a>

- *Type:* [`@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCritical`](#@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCritical)

---

##### `putWarning` <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.putWarning"></a>

```typescript
public putWarning(value?: SyntheticsMultilocationAlertConditionWarning)
```

###### `value`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.parameter.value"></a>

- *Type:* [`@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarning`](#@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarning)

---

##### `resetEnabled` <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.resetEnabled"></a>

```typescript
public resetEnabled()
```

##### `resetRunbookUrl` <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.resetRunbookUrl"></a>

```typescript
public resetRunbookUrl()
```

##### `resetWarning` <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.resetWarning"></a>

```typescript
public resetWarning()
```


#### Properties <a name="Properties"></a>

##### `critical`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.property.critical"></a>

```typescript
public readonly critical: SyntheticsMultilocationAlertConditionCriticalOutputReference;
```

- *Type:* [`@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCriticalOutputReference`](#@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCriticalOutputReference)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `warning`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.property.warning"></a>

```typescript
public readonly warning: SyntheticsMultilocationAlertConditionWarningOutputReference;
```

- *Type:* [`@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarningOutputReference`](#@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarningOutputReference)

---

##### `criticalInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.property.criticalInput"></a>

```typescript
public readonly criticalInput: SyntheticsMultilocationAlertConditionCritical;
```

- *Type:* [`@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCritical`](#@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCritical)

---

##### `enabledInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `entitiesInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.property.entitiesInput"></a>

```typescript
public readonly entitiesInput: string[];
```

- *Type:* `string`[]

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `policyIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: number;
```

- *Type:* `number`

---

##### `runbookUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.property.runbookUrlInput"></a>

```typescript
public readonly runbookUrlInput: string;
```

- *Type:* `string`

---

##### `violationTimeLimitSecondsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.property.violationTimeLimitSecondsInput"></a>

```typescript
public readonly violationTimeLimitSecondsInput: number;
```

- *Type:* `number`

---

##### `warningInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.property.warningInput"></a>

```typescript
public readonly warningInput: SyntheticsMultilocationAlertConditionWarning;
```

- *Type:* [`@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarning`](#@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarning)

---

##### `entities`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.property.entities"></a>

```typescript
public readonly entities: string[];
```

- *Type:* `string`[]

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `policyId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.property.policyId"></a>

```typescript
public readonly policyId: number;
```

- *Type:* `number`

---

##### `violationTimeLimitSeconds`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.property.violationTimeLimitSeconds"></a>

```typescript
public readonly violationTimeLimitSeconds: number;
```

- *Type:* `number`

---

##### `enabled`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `runbookUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.property.runbookUrl"></a>

```typescript
public readonly runbookUrl: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertCondition.property.tfResourceType"></a>

- *Type:* `string`

---

### SyntheticsSecureCredential <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_secure_credential.html newrelic_synthetics_secure_credential}.

#### Initializers <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.Initializer"></a>

```typescript
import { SyntheticsSecureCredential } from '@cdktf/provider-newrelic'

new SyntheticsSecureCredential(scope: Construct, id: string, config: SyntheticsSecureCredentialConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.parameter.config"></a>

- *Type:* [`@cdktf/provider-newrelic.SyntheticsSecureCredentialConfig`](#@cdktf/provider-newrelic.SyntheticsSecureCredentialConfig)

---

#### Methods <a name="Methods"></a>

##### `resetCreatedAt` <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.resetCreatedAt"></a>

```typescript
public resetCreatedAt()
```

##### `resetDescription` <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.resetDescription"></a>

```typescript
public resetDescription()
```

##### `resetLastUpdated` <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.resetLastUpdated"></a>

```typescript
public resetLastUpdated()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `createdAtInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.property.createdAtInput"></a>

```typescript
public readonly createdAtInput: string;
```

- *Type:* `string`

---

##### `descriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* `string`

---

##### `keyInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* `string`

---

##### `lastUpdatedInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.property.lastUpdatedInput"></a>

```typescript
public readonly lastUpdatedInput: string;
```

- *Type:* `string`

---

##### `valueInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `lastUpdated`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.property.lastUpdated"></a>

```typescript
public readonly lastUpdated: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-newrelic.SyntheticsSecureCredential.property.tfResourceType"></a>

- *Type:* `string`

---

### Workload <a name="@cdktf/provider-newrelic.Workload"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/workload.html newrelic_workload}.

#### Initializers <a name="@cdktf/provider-newrelic.Workload.Initializer"></a>

```typescript
import { Workload } from '@cdktf/provider-newrelic'

new Workload(scope: Construct, id: string, config: WorkloadConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Workload.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Workload.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Workload.parameter.config"></a>

- *Type:* [`@cdktf/provider-newrelic.WorkloadConfig`](#@cdktf/provider-newrelic.WorkloadConfig)

---

#### Methods <a name="Methods"></a>

##### `resetAccountId` <a name="@cdktf/provider-newrelic.Workload.resetAccountId"></a>

```typescript
public resetAccountId()
```

##### `resetEntityGuids` <a name="@cdktf/provider-newrelic.Workload.resetEntityGuids"></a>

```typescript
public resetEntityGuids()
```

##### `resetEntitySearchQuery` <a name="@cdktf/provider-newrelic.Workload.resetEntitySearchQuery"></a>

```typescript
public resetEntitySearchQuery()
```

##### `resetScopeAccountIds` <a name="@cdktf/provider-newrelic.Workload.resetScopeAccountIds"></a>

```typescript
public resetScopeAccountIds()
```


#### Properties <a name="Properties"></a>

##### `compositeEntitySearchQuery`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Workload.property.compositeEntitySearchQuery"></a>

```typescript
public readonly compositeEntitySearchQuery: string;
```

- *Type:* `string`

---

##### `guid`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Workload.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Workload.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `permalink`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Workload.property.permalink"></a>

```typescript
public readonly permalink: string;
```

- *Type:* `string`

---

##### `workloadId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Workload.property.workloadId"></a>

```typescript
public readonly workloadId: number;
```

- *Type:* `number`

---

##### `accountIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.Workload.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* `number`

---

##### `entityGuidsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.Workload.property.entityGuidsInput"></a>

```typescript
public readonly entityGuidsInput: string[];
```

- *Type:* `string`[]

---

##### `entitySearchQueryInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.Workload.property.entitySearchQueryInput"></a>

```typescript
public readonly entitySearchQueryInput: WorkloadEntitySearchQuery[];
```

- *Type:* [`@cdktf/provider-newrelic.WorkloadEntitySearchQuery`](#@cdktf/provider-newrelic.WorkloadEntitySearchQuery)[]

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.Workload.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `scopeAccountIdsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.Workload.property.scopeAccountIdsInput"></a>

```typescript
public readonly scopeAccountIdsInput: number[];
```

- *Type:* `number`[]

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.Workload.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.Workload.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

---

##### `entityGuids`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.Workload.property.entityGuids"></a>

```typescript
public readonly entityGuids: string[];
```

- *Type:* `string`[]

---

##### `entitySearchQuery`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.Workload.property.entitySearchQuery"></a>

```typescript
public readonly entitySearchQuery: WorkloadEntitySearchQuery[];
```

- *Type:* [`@cdktf/provider-newrelic.WorkloadEntitySearchQuery`](#@cdktf/provider-newrelic.WorkloadEntitySearchQuery)[]

---

##### `scopeAccountIds`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.Workload.property.scopeAccountIds"></a>

```typescript
public readonly scopeAccountIds: number[];
```

- *Type:* `number`[]

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-newrelic.Workload.property.tfResourceType"></a>

- *Type:* `string`

---

## Structs <a name="Structs"></a>

### AlertChannelConfig <a name="@cdktf/provider-newrelic.AlertChannelConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { AlertChannelConfig } from '@cdktf/provider-newrelic'

const alertChannelConfig: AlertChannelConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

(Required) The name of the channel.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#name AlertChannel#name}

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

(Required) The type of channel. One of: (webhook, email, opsgenie, pagerduty, slack, user, victorops).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#type AlertChannel#type}

---

##### `config`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfig.property.config"></a>

```typescript
public readonly config: AlertChannelConfigA;
```

- *Type:* [`@cdktf/provider-newrelic.AlertChannelConfigA`](#@cdktf/provider-newrelic.AlertChannelConfigA)

config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#config AlertChannel#config}

---

### AlertChannelConfigA <a name="@cdktf/provider-newrelic.AlertChannelConfigA"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { AlertChannelConfigA } from '@cdktf/provider-newrelic'

const alertChannelConfigA: AlertChannelConfigA = { ... }
```

##### `apiKey`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* `string`

The API key for integrating with OpsGenie.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#api_key AlertChannel#api_key}

---

##### `authPassword`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.authPassword"></a>

```typescript
public readonly authPassword: string;
```

- *Type:* `string`

Specifies an authentication password for use with a channel. Supported by the webhook channel type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#auth_password AlertChannel#auth_password}

---

##### `authType`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* `string`

Specifies an authentication method for use with a channel.

Supported by the webhook channel type. Only HTTP basic authentication is currently supported via the value BASIC.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#auth_type AlertChannel#auth_type}

---

##### `authUsername`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.authUsername"></a>

```typescript
public readonly authUsername: string;
```

- *Type:* `string`

Specifies an authentication username for use with a channel. Supported by the webhook channel type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#auth_username AlertChannel#auth_username}

---

##### `baseUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* `string`

The base URL of the webhook destination.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#base_url AlertChannel#base_url}

---

##### `channel`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* `string`

The Slack channel to send notifications to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#channel AlertChannel#channel}

---

##### `headers`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.headers"></a>

```typescript
public readonly headers: IResolvable | {[ key: string ]: string};
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

A map of key/value pairs that represents extra HTTP headers to be sent along with the webhook payload.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#headers AlertChannel#headers}

---

##### `headersString`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.headersString"></a>

```typescript
public readonly headersString: string;
```

- *Type:* `string`

Use instead of headers if the desired payload is more complex than a list of key/value pairs (e.g. a set of headers that makes use of nested objects). The value provided should be a valid JSON string with escaped double quotes. Conflicts with headers.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#headers_string AlertChannel#headers_string}

---

##### `includeJsonAttachment`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.includeJsonAttachment"></a>

```typescript
public readonly includeJsonAttachment: string;
```

- *Type:* `string`

true or false.

Flag for whether or not to attach a JSON document containing information about the associated alert to the email that is sent to recipients.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#include_json_attachment AlertChannel#include_json_attachment}

---

##### `key`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

The key for integrating with VictorOps.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#key AlertChannel#key}

---

##### `payload`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.payload"></a>

```typescript
public readonly payload: IResolvable | {[ key: string ]: string};
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

A map of key/value pairs that represents the webhook payload. Must provide payload_type if setting this argument.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#payload AlertChannel#payload}

---

##### `payloadString`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.payloadString"></a>

```typescript
public readonly payloadString: string;
```

- *Type:* `string`

Use instead of payload if the desired payload is more complex than a list of key/value pairs (e.g. a payload that makes use of nested objects). The value provided should be a valid JSON string with escaped double quotes. Conflicts with payload.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#payload_string AlertChannel#payload_string}

---

##### `payloadType`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.payloadType"></a>

```typescript
public readonly payloadType: string;
```

- *Type:* `string`

Can either be application/json or application/x-www-form-urlencoded. The payload_type argument is required if payload is set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#payload_type AlertChannel#payload_type}

---

##### `recipients`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.recipients"></a>

```typescript
public readonly recipients: string;
```

- *Type:* `string`

A set of recipients for targeting notifications. Multiple values are comma separated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#recipients AlertChannel#recipients}

---

##### `region`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* `string`

The data center region to store your data. Valid values are US and EU. Default is US.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#region AlertChannel#region}

---

##### `routeKey`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.routeKey"></a>

```typescript
public readonly routeKey: string;
```

- *Type:* `string`

The route key for integrating with VictorOps.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#route_key AlertChannel#route_key}

---

##### `serviceKey`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.serviceKey"></a>

```typescript
public readonly serviceKey: string;
```

- *Type:* `string`

Specifies the service key for integrating with Pagerduty.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#service_key AlertChannel#service_key}

---

##### `tags`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.tags"></a>

```typescript
public readonly tags: string;
```

- *Type:* `string`

A set of tags for targeting notifications. Multiple values are comma separated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#tags AlertChannel#tags}

---

##### `teams`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.teams"></a>

```typescript
public readonly teams: string;
```

- *Type:* `string`

A set of teams for targeting notifications. Multiple values are comma separated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#teams AlertChannel#teams}

---

##### `url`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* `string`

Your organization's Slack URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#url AlertChannel#url}

---

##### `userId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigA.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* `string`

The user ID for use with the user channel type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#user_id AlertChannel#user_id}

---

### AlertConditionConfig <a name="@cdktf/provider-newrelic.AlertConditionConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { AlertConditionConfig } from '@cdktf/provider-newrelic'

const alertConditionConfig: AlertConditionConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertConditionConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertConditionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertConditionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertConditionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `entities`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertConditionConfig.property.entities"></a>

```typescript
public readonly entities: number[];
```

- *Type:* `number`[]

The instance IDs associated with this condition.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition.html#entities AlertCondition#entities}

---

##### `metric`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertConditionConfig.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* `string`

The metric field accepts parameters based on the type set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition.html#metric AlertCondition#metric}

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertConditionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The title of the condition. Must be between 1 and 128 characters, inclusive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition.html#name AlertCondition#name}

---

##### `policyId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertConditionConfig.property.policyId"></a>

```typescript
public readonly policyId: number;
```

- *Type:* `number`

The ID of the policy where this condition should be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition.html#policy_id AlertCondition#policy_id}

---

##### `term`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertConditionConfig.property.term"></a>

```typescript
public readonly term: AlertConditionTerm[];
```

- *Type:* [`@cdktf/provider-newrelic.AlertConditionTerm`](#@cdktf/provider-newrelic.AlertConditionTerm)[]

term block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition.html#term AlertCondition#term}

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertConditionConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

The type of condition. One of: (apm_app_metric, apm_jvm_metric, apm_kt_metric, browser_metric, mobile_metric, servers_metric).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition.html#type AlertCondition#type}

---

##### `conditionScope`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertConditionConfig.property.conditionScope"></a>

```typescript
public readonly conditionScope: string;
```

- *Type:* `string`

One of (application, instance).

Choose application for most scenarios. If you are using the JVM plugin in New Relic, the instance setting allows your condition to trigger for specific app instances.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition.html#condition_scope AlertCondition#condition_scope}

---

##### `enabled`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertConditionConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether the condition is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition.html#enabled AlertCondition#enabled}

---

##### `gcMetric`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertConditionConfig.property.gcMetric"></a>

```typescript
public readonly gcMetric: string;
```

- *Type:* `string`

A valid Garbage Collection metric e.g. GC/G1 Young Generation. This is required if you are using apm_jvm_metric with gc_cpu_time condition type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition.html#gc_metric AlertCondition#gc_metric}

---

##### `runbookUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertConditionConfig.property.runbookUrl"></a>

```typescript
public readonly runbookUrl: string;
```

- *Type:* `string`

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition.html#runbook_url AlertCondition#runbook_url}

---

##### `userDefinedMetric`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertConditionConfig.property.userDefinedMetric"></a>

```typescript
public readonly userDefinedMetric: string;
```

- *Type:* `string`

A custom metric to be evaluated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition.html#user_defined_metric AlertCondition#user_defined_metric}

---

##### `userDefinedValueFunction`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertConditionConfig.property.userDefinedValueFunction"></a>

```typescript
public readonly userDefinedValueFunction: string;
```

- *Type:* `string`

One of: (average, min, max, total, sample_size).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition.html#user_defined_value_function AlertCondition#user_defined_value_function}

---

##### `violationCloseTimer`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertConditionConfig.property.violationCloseTimer"></a>

```typescript
public readonly violationCloseTimer: number;
```

- *Type:* `number`

Automatically close instance-based violations, including JVM health metric violations, after the number of hours specified.

Must be: 1, 2, 4, 8, 12 or 24.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition.html#violation_close_timer AlertCondition#violation_close_timer}

---

### AlertConditionTerm <a name="@cdktf/provider-newrelic.AlertConditionTerm"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { AlertConditionTerm } from '@cdktf/provider-newrelic'

const alertConditionTerm: AlertConditionTerm = { ... }
```

##### `duration`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertConditionTerm.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* `number`

In minutes, must be in the range of 5 to 120, inclusive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition.html#duration AlertCondition#duration}

---

##### `threshold`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertConditionTerm.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* `number`

Must be 0 or greater.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition.html#threshold AlertCondition#threshold}

---

##### `timeFunction`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertConditionTerm.property.timeFunction"></a>

```typescript
public readonly timeFunction: string;
```

- *Type:* `string`

One of (all, any).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition.html#time_function AlertCondition#time_function}

---

##### `operator`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertConditionTerm.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* `string`

One of (above, below, equal). Defaults to equal.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition.html#operator AlertCondition#operator}

---

##### `priority`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertConditionTerm.property.priority"></a>

```typescript
public readonly priority: string;
```

- *Type:* `string`

One of (critical, warning). Defaults to critical.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition.html#priority AlertCondition#priority}

---

### AlertMutingRuleCondition <a name="@cdktf/provider-newrelic.AlertMutingRuleCondition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { AlertMutingRuleCondition } from '@cdktf/provider-newrelic'

const alertMutingRuleCondition: AlertMutingRuleCondition = { ... }
```

##### `conditions`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleCondition.property.conditions"></a>

```typescript
public readonly conditions: AlertMutingRuleConditionConditions[];
```

- *Type:* [`@cdktf/provider-newrelic.AlertMutingRuleConditionConditions`](#@cdktf/provider-newrelic.AlertMutingRuleConditionConditions)[]

conditions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html#conditions AlertMutingRule#conditions}

---

##### `operator`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleCondition.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* `string`

The operator used to combine all the MutingRuleConditions within the group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html#operator AlertMutingRule#operator}

---

### AlertMutingRuleConditionConditions <a name="@cdktf/provider-newrelic.AlertMutingRuleConditionConditions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { AlertMutingRuleConditionConditions } from '@cdktf/provider-newrelic'

const alertMutingRuleConditionConditions: AlertMutingRuleConditionConditions = { ... }
```

##### `attribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConditionConditions.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* `string`

The attribute on a violation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html#attribute AlertMutingRule#attribute}

---

##### `operator`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConditionConditions.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* `string`

The operator used to compare the attribute's value with the supplied value(s).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html#operator AlertMutingRule#operator}

---

##### `values`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConditionConditions.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* `string`[]

The value(s) to compare against the attribute's value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html#values AlertMutingRule#values}

---

### AlertMutingRuleConfig <a name="@cdktf/provider-newrelic.AlertMutingRuleConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { AlertMutingRuleConfig } from '@cdktf/provider-newrelic'

const alertMutingRuleConfig: AlertMutingRuleConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `condition`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConfig.property.condition"></a>

```typescript
public readonly condition: AlertMutingRuleCondition;
```

- *Type:* [`@cdktf/provider-newrelic.AlertMutingRuleCondition`](#@cdktf/provider-newrelic.AlertMutingRuleCondition)

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html#condition AlertMutingRule#condition}

---

##### `enabled`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether the MutingRule is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html#enabled AlertMutingRule#enabled}

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the MutingRule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html#name AlertMutingRule#name}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The account id of the MutingRule..

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html#account_id AlertMutingRule#account_id}

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

The description of the MutingRule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html#description AlertMutingRule#description}

---

##### `schedule`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConfig.property.schedule"></a>

```typescript
public readonly schedule: AlertMutingRuleSchedule;
```

- *Type:* [`@cdktf/provider-newrelic.AlertMutingRuleSchedule`](#@cdktf/provider-newrelic.AlertMutingRuleSchedule)

schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html#schedule AlertMutingRule#schedule}

---

### AlertMutingRuleSchedule <a name="@cdktf/provider-newrelic.AlertMutingRuleSchedule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { AlertMutingRuleSchedule } from '@cdktf/provider-newrelic'

const alertMutingRuleSchedule: AlertMutingRuleSchedule = { ... }
```

##### `timeZone`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleSchedule.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* `string`

The time zone that applies to the MutingRule schedule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html#time_zone AlertMutingRule#time_zone}

---

##### `endRepeat`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleSchedule.property.endRepeat"></a>

```typescript
public readonly endRepeat: string;
```

- *Type:* `string`

The datetime stamp when the MutingRule schedule should stop repeating.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html#end_repeat AlertMutingRule#end_repeat}

---

##### `endTime`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleSchedule.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* `string`

The datetime stamp representing when the MutingRule should end.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html#end_time AlertMutingRule#end_time}

---

##### `repeat`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleSchedule.property.repeat"></a>

```typescript
public readonly repeat: string;
```

- *Type:* `string`

The frequency the MutingRule schedule repeats. One of [DAILY, WEEKLY, MONTHLY].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html#repeat AlertMutingRule#repeat}

---

##### `repeatCount`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleSchedule.property.repeatCount"></a>

```typescript
public readonly repeatCount: number;
```

- *Type:* `number`

The number of times the MutingRule schedule should repeat.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html#repeat_count AlertMutingRule#repeat_count}

---

##### `startTime`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleSchedule.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* `string`

The datetime stamp representing when the MutingRule should start.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html#start_time AlertMutingRule#start_time}

---

##### `weeklyRepeatDays`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleSchedule.property.weeklyRepeatDays"></a>

```typescript
public readonly weeklyRepeatDays: string[];
```

- *Type:* `string`[]

The day(s) of the week that a MutingRule should repeat when the repeat field is set to WEEKLY.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html#weekly_repeat_days AlertMutingRule#weekly_repeat_days}

---

### AlertPolicyChannelConfig <a name="@cdktf/provider-newrelic.AlertPolicyChannelConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { AlertPolicyChannelConfig } from '@cdktf/provider-newrelic'

const alertPolicyChannelConfig: AlertPolicyChannelConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicyChannelConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicyChannelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicyChannelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicyChannelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `channelIds`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertPolicyChannelConfig.property.channelIds"></a>

```typescript
public readonly channelIds: number[];
```

- *Type:* `number`[]

Array of channel IDs to apply to the specified policy.

We recommended sorting channel IDs in ascending order to avoid drift your Terraform state.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_policy_channel.html#channel_ids AlertPolicyChannel#channel_ids}

---

##### `policyId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertPolicyChannelConfig.property.policyId"></a>

```typescript
public readonly policyId: number;
```

- *Type:* `number`

The ID of the policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_policy_channel.html#policy_id AlertPolicyChannel#policy_id}

---

### AlertPolicyConfig <a name="@cdktf/provider-newrelic.AlertPolicyConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { AlertPolicyConfig } from '@cdktf/provider-newrelic'

const alertPolicyConfig: AlertPolicyConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicyConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_policy.html#name AlertPolicy#name}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicyConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The New Relic account ID to operate on.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_policy.html#account_id AlertPolicy#account_id}

---

##### `channelIds`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicyConfig.property.channelIds"></a>

```typescript
public readonly channelIds: number[];
```

- *Type:* `number`[]

An array of channel IDs (integers) to assign to the policy.

Adding or removing channel IDs from this array will result in a new alert policy resource being created and the old one being destroyed. Also note that channel IDs cannot be imported via terraform import.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_policy.html#channel_ids AlertPolicy#channel_ids}

---

##### `incidentPreference`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertPolicyConfig.property.incidentPreference"></a>

```typescript
public readonly incidentPreference: string;
```

- *Type:* `string`

The rollup strategy for the policy. Options include: PER_POLICY, PER_CONDITION, or PER_CONDITION_AND_TARGET. The default is PER_POLICY.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_policy.html#incident_preference AlertPolicy#incident_preference}

---

### ApiAccessKeyConfig <a name="@cdktf/provider-newrelic.ApiAccessKeyConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ApiAccessKeyConfig } from '@cdktf/provider-newrelic'

const apiAccessKeyConfig: ApiAccessKeyConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApiAccessKeyConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApiAccessKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApiAccessKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApiAccessKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `accountId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApiAccessKeyConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/api_access_key.html#account_id ApiAccessKey#account_id}.

---

##### `keyType`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApiAccessKeyConfig.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/api_access_key.html#key_type ApiAccessKey#key_type}.

---

##### `ingestType`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApiAccessKeyConfig.property.ingestType"></a>

```typescript
public readonly ingestType: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/api_access_key.html#ingest_type ApiAccessKey#ingest_type}.

---

##### `name`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApiAccessKeyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/api_access_key.html#name ApiAccessKey#name}.

---

##### `notes`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApiAccessKeyConfig.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/api_access_key.html#notes ApiAccessKey#notes}.

---

##### `userId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApiAccessKeyConfig.property.userId"></a>

```typescript
public readonly userId: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/api_access_key.html#user_id ApiAccessKey#user_id}.

---

### ApplicationSettingsConfig <a name="@cdktf/provider-newrelic.ApplicationSettingsConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ApplicationSettingsConfig } from '@cdktf/provider-newrelic'

const applicationSettingsConfig: ApplicationSettingsConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApplicationSettingsConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApplicationSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApplicationSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ApplicationSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `appApdexThreshold`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApplicationSettingsConfig.property.appApdexThreshold"></a>

```typescript
public readonly appApdexThreshold: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/application_settings.html#app_apdex_threshold ApplicationSettings#app_apdex_threshold}.

---

##### `enableRealUserMonitoring`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApplicationSettingsConfig.property.enableRealUserMonitoring"></a>

```typescript
public readonly enableRealUserMonitoring: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/application_settings.html#enable_real_user_monitoring ApplicationSettings#enable_real_user_monitoring}.

---

##### `endUserApdexThreshold`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApplicationSettingsConfig.property.endUserApdexThreshold"></a>

```typescript
public readonly endUserApdexThreshold: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/application_settings.html#end_user_apdex_threshold ApplicationSettings#end_user_apdex_threshold}.

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ApplicationSettingsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/application_settings.html#name ApplicationSettings#name}.

---

### DashboardConfig <a name="@cdktf/provider-newrelic.DashboardConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DashboardConfig } from '@cdktf/provider-newrelic'

const dashboardConfig: DashboardConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `title`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* `string`

The title of the dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#title Dashboard#title}

---

##### `editable`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardConfig.property.editable"></a>

```typescript
public readonly editable: string;
```

- *Type:* `string`

Determines who can edit the dashboard in an account.

Valid values are all, editable_by_all, editable_by_owner, or read_only. Defaults to editable_by_all.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#editable Dashboard#editable}

---

##### `filter`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardConfig.property.filter"></a>

```typescript
public readonly filter: DashboardFilter;
```

- *Type:* [`@cdktf/provider-newrelic.DashboardFilter`](#@cdktf/provider-newrelic.DashboardFilter)

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#filter Dashboard#filter}

---

##### `gridColumnCount`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardConfig.property.gridColumnCount"></a>

```typescript
public readonly gridColumnCount: number;
```

- *Type:* `number`

New Relic One supports a 3 column grid or a 12 column grid.

New Relic Insights supports a 3 column grid.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#grid_column_count Dashboard#grid_column_count}

---

##### `icon`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardConfig.property.icon"></a>

```typescript
public readonly icon: string;
```

- *Type:* `string`

The icon for the dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#icon Dashboard#icon}

---

##### `visibility`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardConfig.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* `string`

Determines who can see the dashboard in an account. Valid values are all or owner. Defaults to all.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#visibility Dashboard#visibility}

---

##### `widget`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardConfig.property.widget"></a>

```typescript
public readonly widget: DashboardWidget[];
```

- *Type:* [`@cdktf/provider-newrelic.DashboardWidget`](#@cdktf/provider-newrelic.DashboardWidget)[]

widget block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#widget Dashboard#widget}

---

### DashboardFilter <a name="@cdktf/provider-newrelic.DashboardFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DashboardFilter } from '@cdktf/provider-newrelic'

const dashboardFilter: DashboardFilter = { ... }
```

##### `eventTypes`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardFilter.property.eventTypes"></a>

```typescript
public readonly eventTypes: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#event_types Dashboard#event_types}.

---

##### `attributes`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardFilter.property.attributes"></a>

```typescript
public readonly attributes: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#attributes Dashboard#attributes}.

---

### DashboardWidget <a name="@cdktf/provider-newrelic.DashboardWidget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DashboardWidget } from '@cdktf/provider-newrelic'

const dashboardWidget: DashboardWidget = { ... }
```

##### `column`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* `number`

Column position of widget from top left, starting at 1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#column Dashboard#column}

---

##### `row`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* `number`

Row position of widget from top left, starting at 1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#row Dashboard#row}

---

##### `title`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* `string`

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#title Dashboard#title}

---

##### `visualization`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.visualization"></a>

```typescript
public readonly visualization: string;
```

- *Type:* `string`

How the widget visualizes data.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#visualization Dashboard#visualization}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The target account ID to fetch data from, if not the current account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#account_id Dashboard#account_id}

---

##### `compareWith`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.compareWith"></a>

```typescript
public readonly compareWith: DashboardWidgetCompareWith[];
```

- *Type:* [`@cdktf/provider-newrelic.DashboardWidgetCompareWith`](#@cdktf/provider-newrelic.DashboardWidgetCompareWith)[]

compare_with block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#compare_with Dashboard#compare_with}

---

##### `drilldownDashboardId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.drilldownDashboardId"></a>

```typescript
public readonly drilldownDashboardId: number;
```

- *Type:* `number`

The ID of a dashboard to link to from the widget's facets.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#drilldown_dashboard_id Dashboard#drilldown_dashboard_id}

---

##### `duration`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#duration Dashboard#duration}.

---

##### `endTime`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.endTime"></a>

```typescript
public readonly endTime: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#end_time Dashboard#end_time}.

---

##### `entityIds`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.entityIds"></a>

```typescript
public readonly entityIds: number[];
```

- *Type:* `number`[]

A collection of entity ids to display data for. These are typically application IDs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#entity_ids Dashboard#entity_ids}

---

##### `facet`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.facet"></a>

```typescript
public readonly facet: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#facet Dashboard#facet}.

---

##### `height`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* `number`

Height of the widget. Valid values are 1 to 3 inclusive. Defaults to 1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#height Dashboard#height}

---

##### `limit`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* `number`

The limit of distinct data series to display.  Requires `order_by` to be set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#limit Dashboard#limit}

---

##### `metric`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.metric"></a>

```typescript
public readonly metric: DashboardWidgetMetric[];
```

- *Type:* [`@cdktf/provider-newrelic.DashboardWidgetMetric`](#@cdktf/provider-newrelic.DashboardWidgetMetric)[]

metric block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#metric Dashboard#metric}

---

##### `notes`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* `string`

Description of the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#notes Dashboard#notes}

---

##### `nrql`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.nrql"></a>

```typescript
public readonly nrql: string;
```

- *Type:* `string`

Valid NRQL query string.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#nrql Dashboard#nrql}

---

##### `orderBy`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.orderBy"></a>

```typescript
public readonly orderBy: string;
```

- *Type:* `string`

Set the order of result series.  Required when using `limit`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#order_by Dashboard#order_by}

---

##### `source`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* `string`

The markdown source to be rendered in the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#source Dashboard#source}

---

##### `thresholdRed`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.thresholdRed"></a>

```typescript
public readonly thresholdRed: number;
```

- *Type:* `number`

Threshold above which the displayed value will be styled with a red color.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#threshold_red Dashboard#threshold_red}

---

##### `thresholdYellow`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.thresholdYellow"></a>

```typescript
public readonly thresholdYellow: number;
```

- *Type:* `number`

Threshold above which the displayed value will be styled with a yellow color.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#threshold_yellow Dashboard#threshold_yellow}

---

##### `width`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidget.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* `number`

Width of the widget. Valid values are 1 to 3 inclusive. Defaults to 1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#width Dashboard#width}

---

### DashboardWidgetCompareWith <a name="@cdktf/provider-newrelic.DashboardWidgetCompareWith"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DashboardWidgetCompareWith } from '@cdktf/provider-newrelic'

const dashboardWidgetCompareWith: DashboardWidgetCompareWith = { ... }
```

##### `offsetDuration`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardWidgetCompareWith.property.offsetDuration"></a>

```typescript
public readonly offsetDuration: string;
```

- *Type:* `string`

The offset duration for the COMPARE WITH clause.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#offset_duration Dashboard#offset_duration}

---

##### `presentation`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardWidgetCompareWith.property.presentation"></a>

```typescript
public readonly presentation: DashboardWidgetCompareWithPresentation;
```

- *Type:* [`@cdktf/provider-newrelic.DashboardWidgetCompareWithPresentation`](#@cdktf/provider-newrelic.DashboardWidgetCompareWithPresentation)

presentation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#presentation Dashboard#presentation}

---

### DashboardWidgetCompareWithPresentation <a name="@cdktf/provider-newrelic.DashboardWidgetCompareWithPresentation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DashboardWidgetCompareWithPresentation } from '@cdktf/provider-newrelic'

const dashboardWidgetCompareWithPresentation: DashboardWidgetCompareWithPresentation = { ... }
```

##### `color`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardWidgetCompareWithPresentation.property.color"></a>

```typescript
public readonly color: string;
```

- *Type:* `string`

The color for the rendered data.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#color Dashboard#color}

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardWidgetCompareWithPresentation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name for the rendered data.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#name Dashboard#name}

---

### DashboardWidgetMetric <a name="@cdktf/provider-newrelic.DashboardWidgetMetric"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DashboardWidgetMetric } from '@cdktf/provider-newrelic'

const dashboardWidgetMetric: DashboardWidgetMetric = { ... }
```

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardWidgetMetric.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The metric name to display.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#name Dashboard#name}

---

##### `scope`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidgetMetric.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* `string`

The metric scope.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#scope Dashboard#scope}

---

##### `units`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidgetMetric.property.units"></a>

```typescript
public readonly units: string;
```

- *Type:* `string`

The metric units.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#units Dashboard#units}

---

##### `values`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidgetMetric.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* `string`[]

The metric values to display.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#values Dashboard#values}

---

### DataNewrelicAccountConfig <a name="@cdktf/provider-newrelic.DataNewrelicAccountConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataNewrelicAccountConfig } from '@cdktf/provider-newrelic'

const dataNewrelicAccountConfig: DataNewrelicAccountConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAccountConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAccountConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The ID of the account in New Relic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/account.html#account_id DataNewrelicAccount#account_id}

---

##### `name`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAccountConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the account in New Relic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/account.html#name DataNewrelicAccount#name}

---

##### `scope`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAccountConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* `string`

The scope of the account in New Relic.  Valid values are "global" and "in_region".  Defaults to "in_region".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/account.html#scope DataNewrelicAccount#scope}

---

### DataNewrelicAlertChannelConfig <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataNewrelicAlertChannelConfig } from '@cdktf/provider-newrelic'

const dataNewrelicAlertChannelConfig: DataNewrelicAlertChannelConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the alert channel in New Relic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/alert_channel.html#name DataNewrelicAlertChannel#name}

---

### DataNewrelicAlertPolicyConfig <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicyConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataNewrelicAlertPolicyConfig } from '@cdktf/provider-newrelic'

const dataNewrelicAlertPolicyConfig: DataNewrelicAlertPolicyConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicyConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the alert policy in New Relic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/alert_policy.html#name DataNewrelicAlertPolicy#name}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicyConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The New Relic account ID to operate on.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/alert_policy.html#account_id DataNewrelicAlertPolicy#account_id}

---

##### `incidentPreference`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertPolicyConfig.property.incidentPreference"></a>

```typescript
public readonly incidentPreference: string;
```

- *Type:* `string`

The rollup strategy for the policy. Options include: `PER_POLICY`, `PER_CONDITION`, or `PER_CONDITION_AND_TARGET`. The default is `PER_POLICY`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/alert_policy.html#incident_preference DataNewrelicAlertPolicy#incident_preference}

---

### DataNewrelicApplicationConfig <a name="@cdktf/provider-newrelic.DataNewrelicApplicationConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataNewrelicApplicationConfig } from '@cdktf/provider-newrelic'

const dataNewrelicApplicationConfig: DataNewrelicApplicationConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicApplicationConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicApplicationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the application in New Relic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/application.html#name DataNewrelicApplication#name}

---

### DataNewrelicEntityConfig <a name="@cdktf/provider-newrelic.DataNewrelicEntityConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataNewrelicEntityConfig } from '@cdktf/provider-newrelic'

const dataNewrelicEntityConfig: DataNewrelicEntityConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the entity in New Relic One.

The first entity matching this name for the given search parameters will be returned.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/entity.html#name DataNewrelicEntity#name}

---

##### `domain`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* `string`

The entity's domain.

Valid values are APM, BROWSER, INFRA, MOBILE, SYNTH, and VIZ. If not specified, all domains are searched.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/entity.html#domain DataNewrelicEntity#domain}

---

##### `ignoreCase`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityConfig.property.ignoreCase"></a>

```typescript
public readonly ignoreCase: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Ignore case when searching the entity name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/entity.html#ignore_case DataNewrelicEntity#ignore_case}

---

##### `tag`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityConfig.property.tag"></a>

```typescript
public readonly tag: DataNewrelicEntityTag;
```

- *Type:* [`@cdktf/provider-newrelic.DataNewrelicEntityTag`](#@cdktf/provider-newrelic.DataNewrelicEntityTag)

tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/entity.html#tag DataNewrelicEntity#tag}

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

The entity's type. Valid values are APPLICATION, DASHBOARD, HOST, MONITOR, and WORKLOAD.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/entity.html#type DataNewrelicEntity#type}

---

### DataNewrelicEntityTag <a name="@cdktf/provider-newrelic.DataNewrelicEntityTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataNewrelicEntityTag } from '@cdktf/provider-newrelic'

const dataNewrelicEntityTag: DataNewrelicEntityTag = { ... }
```

##### `key`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityTag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

The tag key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/entity.html#key DataNewrelicEntity#key}

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityTag.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

The tag value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/entity.html#value DataNewrelicEntity#value}

---

### DataNewrelicKeyTransactionConfig <a name="@cdktf/provider-newrelic.DataNewrelicKeyTransactionConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataNewrelicKeyTransactionConfig } from '@cdktf/provider-newrelic'

const dataNewrelicKeyTransactionConfig: DataNewrelicKeyTransactionConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicKeyTransactionConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicKeyTransactionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicKeyTransactionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicKeyTransactionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicKeyTransactionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the key transaction in New Relic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/key_transaction.html#name DataNewrelicKeyTransaction#name}

---

### DataNewrelicPluginComponentConfig <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponentConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataNewrelicPluginComponentConfig } from '@cdktf/provider-newrelic'

const dataNewrelicPluginComponentConfig: DataNewrelicPluginComponentConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponentConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the plugin component.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/plugin_component.html#name DataNewrelicPluginComponent#name}

---

##### `pluginId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginComponentConfig.property.pluginId"></a>

```typescript
public readonly pluginId: number;
```

- *Type:* `number`

The ID of the plugin instance this component belongs to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/plugin_component.html#plugin_id DataNewrelicPluginComponent#plugin_id}

---

### DataNewrelicPluginConfig <a name="@cdktf/provider-newrelic.DataNewrelicPluginConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataNewrelicPluginConfig } from '@cdktf/provider-newrelic'

const dataNewrelicPluginConfig: DataNewrelicPluginConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `guid`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicPluginConfig.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* `string`

The GUID of the plugin in New Relic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/plugin.html#guid DataNewrelicPlugin#guid}

---

### DataNewrelicSyntheticsMonitorConfig <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataNewrelicSyntheticsMonitorConfig } from '@cdktf/provider-newrelic'

const dataNewrelicSyntheticsMonitorConfig: DataNewrelicSyntheticsMonitorConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the synthetics monitor in New Relic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/synthetics_monitor.html#name DataNewrelicSyntheticsMonitor#name}

---

### DataNewrelicSyntheticsMonitorLocationConfig <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocationConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataNewrelicSyntheticsMonitorLocationConfig } from '@cdktf/provider-newrelic'

const dataNewrelicSyntheticsMonitorLocationConfig: DataNewrelicSyntheticsMonitorLocationConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocationConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `label`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsMonitorLocationConfig.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* `string`

The label of the Synthetics monitor location.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/synthetics_monitor_location.html#label DataNewrelicSyntheticsMonitorLocation#label}

---

### DataNewrelicSyntheticsSecureCredentialConfig <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredentialConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataNewrelicSyntheticsSecureCredentialConfig } from '@cdktf/provider-newrelic'

const dataNewrelicSyntheticsSecureCredentialConfig: DataNewrelicSyntheticsSecureCredentialConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredentialConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredentialConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredentialConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredentialConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `key`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicSyntheticsSecureCredentialConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

The secure credential's key name.

Regardless of the case used in the configuration, the provider will provide an upcased key to the underlying API.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/synthetics_secure_credential.html#key DataNewrelicSyntheticsSecureCredential#key}

---

### EntityTagsConfig <a name="@cdktf/provider-newrelic.EntityTagsConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { EntityTagsConfig } from '@cdktf/provider-newrelic'

const entityTagsConfig: EntityTagsConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EntityTagsConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EntityTagsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EntityTagsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EntityTagsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `guid`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EntityTagsConfig.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* `string`

The guid of the entity to tag.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/entity_tags.html#guid EntityTags#guid}

---

##### `tag`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EntityTagsConfig.property.tag"></a>

```typescript
public readonly tag: EntityTagsTag[];
```

- *Type:* [`@cdktf/provider-newrelic.EntityTagsTag`](#@cdktf/provider-newrelic.EntityTagsTag)[]

tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/entity_tags.html#tag EntityTags#tag}

---

##### `timeouts`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EntityTagsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: EntityTagsTimeouts;
```

- *Type:* [`@cdktf/provider-newrelic.EntityTagsTimeouts`](#@cdktf/provider-newrelic.EntityTagsTimeouts)

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/entity_tags.html#timeouts EntityTags#timeouts}

---

### EntityTagsTag <a name="@cdktf/provider-newrelic.EntityTagsTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { EntityTagsTag } from '@cdktf/provider-newrelic'

const entityTagsTag: EntityTagsTag = { ... }
```

##### `key`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EntityTagsTag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

The tag key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/entity_tags.html#key EntityTags#key}

---

##### `values`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EntityTagsTag.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* `string`[]

The tag values.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/entity_tags.html#values EntityTags#values}

---

### EntityTagsTimeouts <a name="@cdktf/provider-newrelic.EntityTagsTimeouts"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { EntityTagsTimeouts } from '@cdktf/provider-newrelic'

const entityTagsTimeouts: EntityTagsTimeouts = { ... }
```

##### `create`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EntityTagsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/entity_tags.html#create EntityTags#create}.

---

### EventsToMetricsRuleConfig <a name="@cdktf/provider-newrelic.EventsToMetricsRuleConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { EventsToMetricsRuleConfig } from '@cdktf/provider-newrelic'

const eventsToMetricsRuleConfig: EventsToMetricsRuleConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRuleConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the rule. This must be unique within an account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/events_to_metrics_rule.html#name EventsToMetricsRule#name}

---

##### `nrql`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRuleConfig.property.nrql"></a>

```typescript
public readonly nrql: string;
```

- *Type:* `string`

Explains how to create metrics from events.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/events_to_metrics_rule.html#nrql EventsToMetricsRule#nrql}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRuleConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

Account with the event and where the metrics will be put.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/events_to_metrics_rule.html#account_id EventsToMetricsRule#account_id}

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

Provides additional information about the rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/events_to_metrics_rule.html#description EventsToMetricsRule#description}

---

##### `enabled`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EventsToMetricsRuleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

True means this rule is enabled. False means the rule is currently not creating metrics.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/events_to_metrics_rule.html#enabled EventsToMetricsRule#enabled}

---

### InfraAlertConditionConfig <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { InfraAlertConditionConfig } from '@cdktf/provider-newrelic'

const infraAlertConditionConfig: InfraAlertConditionConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The Infrastructure alert condition's name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#name InfraAlertCondition#name}

---

##### `policyId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.policyId"></a>

```typescript
public readonly policyId: number;
```

- *Type:* `number`

The ID of the alert policy where this condition should be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#policy_id InfraAlertCondition#policy_id}

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

The type of Infrastructure alert condition. Valid values are infra_process_running, infra_metric, and infra_host_not_reporting.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#type InfraAlertCondition#type}

---

##### `comparison`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* `string`

The operator used to evaluate the threshold value.

Valid values are above, below, and equal. Supported by the infra_metric and infra_process_running condition types.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#comparison InfraAlertCondition#comparison}

---

##### `critical`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.critical"></a>

```typescript
public readonly critical: InfraAlertConditionCritical;
```

- *Type:* [`@cdktf/provider-newrelic.InfraAlertConditionCritical`](#@cdktf/provider-newrelic.InfraAlertConditionCritical)

critical block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#critical InfraAlertCondition#critical}

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

The description of the Infrastructure alert condition.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#description InfraAlertCondition#description}

---

##### `enabled`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether the condition is turned on or off. Valid values are true and false. Defaults to true.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#enabled InfraAlertCondition#enabled}

---

##### `event`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.event"></a>

```typescript
public readonly event: string;
```

- *Type:* `string`

The metric event; for example, SystemSample or StorageSample. Supported by the infra_metric condition type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#event InfraAlertCondition#event}

---

##### `integrationProvider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.integrationProvider"></a>

```typescript
public readonly integrationProvider: string;
```

- *Type:* `string`

For alerts on integrations, use this instead of event. Supported by the infra_metric condition type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#integration_provider InfraAlertCondition#integration_provider}

---

##### `processWhere`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.processWhere"></a>

```typescript
public readonly processWhere: string;
```

- *Type:* `string`

Any filters applied to processes; for example: commandName = 'java'. Supported by the infra_process_running condition type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#process_where InfraAlertCondition#process_where}

---

##### `runbookUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.runbookUrl"></a>

```typescript
public readonly runbookUrl: string;
```

- *Type:* `string`

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#runbook_url InfraAlertCondition#runbook_url}

---

##### `select`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.select"></a>

```typescript
public readonly select: string;
```

- *Type:* `string`

The attribute name to identify the metric being targeted;

for example, cpuPercent, diskFreePercent, or memoryResidentSizeBytes. The underlying API will automatically populate this value for Infrastructure integrations (for example diskFreePercent), so make sure to explicitly include this value to avoid diff issues. Supported by the infra_metric condition type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#select InfraAlertCondition#select}

---

##### `violationCloseTimer`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.violationCloseTimer"></a>

```typescript
public readonly violationCloseTimer: number;
```

- *Type:* `number`

Determines how much time, in hours, will pass before a violation is automatically closed.

Valid values are 1, 2, 4, 8, 12, 24, 48, or 72

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#violation_close_timer InfraAlertCondition#violation_close_timer}

---

##### `warning`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.warning"></a>

```typescript
public readonly warning: InfraAlertConditionWarning;
```

- *Type:* [`@cdktf/provider-newrelic.InfraAlertConditionWarning`](#@cdktf/provider-newrelic.InfraAlertConditionWarning)

warning block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#warning InfraAlertCondition#warning}

---

##### `where`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionConfig.property.where"></a>

```typescript
public readonly where: string;
```

- *Type:* `string`

If applicable, this identifies any Infrastructure host filters used; for example: hostname LIKE '%cassandra%'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#where InfraAlertCondition#where}

---

### InfraAlertConditionCritical <a name="@cdktf/provider-newrelic.InfraAlertConditionCritical"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { InfraAlertConditionCritical } from '@cdktf/provider-newrelic'

const infraAlertConditionCritical: InfraAlertConditionCritical = { ... }
```

##### `duration`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionCritical.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#duration InfraAlertCondition#duration}.

---

##### `timeFunction`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionCritical.property.timeFunction"></a>

```typescript
public readonly timeFunction: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#time_function InfraAlertCondition#time_function}.

---

##### `value`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionCritical.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#value InfraAlertCondition#value}.

---

### InfraAlertConditionWarning <a name="@cdktf/provider-newrelic.InfraAlertConditionWarning"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { InfraAlertConditionWarning } from '@cdktf/provider-newrelic'

const infraAlertConditionWarning: InfraAlertConditionWarning = { ... }
```

##### `duration`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionWarning.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#duration InfraAlertCondition#duration}.

---

##### `timeFunction`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionWarning.property.timeFunction"></a>

```typescript
public readonly timeFunction: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#time_function InfraAlertCondition#time_function}.

---

##### `value`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionWarning.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#value InfraAlertCondition#value}.

---

### InsightsEventConfig <a name="@cdktf/provider-newrelic.InsightsEventConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { InsightsEventConfig } from '@cdktf/provider-newrelic'

const insightsEventConfig: InsightsEventConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InsightsEventConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InsightsEventConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InsightsEventConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InsightsEventConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `event`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InsightsEventConfig.property.event"></a>

```typescript
public readonly event: InsightsEventEvent[];
```

- *Type:* [`@cdktf/provider-newrelic.InsightsEventEvent`](#@cdktf/provider-newrelic.InsightsEventEvent)[]

event block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/insights_event.html#event InsightsEvent#event}

---

### InsightsEventEvent <a name="@cdktf/provider-newrelic.InsightsEventEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { InsightsEventEvent } from '@cdktf/provider-newrelic'

const insightsEventEvent: InsightsEventEvent = { ... }
```

##### `attribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InsightsEventEvent.property.attribute"></a>

```typescript
public readonly attribute: InsightsEventEventAttribute[];
```

- *Type:* [`@cdktf/provider-newrelic.InsightsEventEventAttribute`](#@cdktf/provider-newrelic.InsightsEventEventAttribute)[]

attribute block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/insights_event.html#attribute InsightsEvent#attribute}

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InsightsEventEvent.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

The event's name. Can be a combination of alphanumeric characters, underscores, and colons.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/insights_event.html#type InsightsEvent#type}

---

##### `timestamp`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InsightsEventEvent.property.timestamp"></a>

```typescript
public readonly timestamp: number;
```

- *Type:* `number`

Must be a Unix epoch timestamp. You can define timestamps either in seconds or in milliseconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/insights_event.html#timestamp InsightsEvent#timestamp}

---

### InsightsEventEventAttribute <a name="@cdktf/provider-newrelic.InsightsEventEventAttribute"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { InsightsEventEventAttribute } from '@cdktf/provider-newrelic'

const insightsEventEventAttribute: InsightsEventEventAttribute = { ... }
```

##### `key`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InsightsEventEventAttribute.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

The name of the attribute.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/insights_event.html#key InsightsEvent#key}

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InsightsEventEventAttribute.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

The value of the attribute.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/insights_event.html#value InsightsEvent#value}

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InsightsEventEventAttribute.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

Specify the type for the attribute value.

This is useful when passing integer or float values to Insights. Allowed values are string, int, or float. Defaults to string.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/insights_event.html#type InsightsEvent#type}

---

### NewrelicProviderConfig <a name="@cdktf/provider-newrelic.NewrelicProviderConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { NewrelicProviderConfig } from '@cdktf/provider-newrelic'

const newrelicProviderConfig: NewrelicProviderConfig = { ... }
```

##### `accountId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NewrelicProviderConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#account_id NewrelicProvider#account_id}.

---

##### `adminApiKey`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProviderConfig.property.adminApiKey"></a>

```typescript
public readonly adminApiKey: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#admin_api_key NewrelicProvider#admin_api_key}.

---

##### `alias`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* `string`

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#alias NewrelicProvider#alias}

---

##### `apiKey`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProviderConfig.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#api_key NewrelicProvider#api_key}.

---

##### `apiUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProviderConfig.property.apiUrl"></a>

```typescript
public readonly apiUrl: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#api_url NewrelicProvider#api_url}.

---

##### `cacertFile`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProviderConfig.property.cacertFile"></a>

```typescript
public readonly cacertFile: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#cacert_file NewrelicProvider#cacert_file}.

---

##### `infrastructureApiUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProviderConfig.property.infrastructureApiUrl"></a>

```typescript
public readonly infrastructureApiUrl: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#infrastructure_api_url NewrelicProvider#infrastructure_api_url}.

---

##### `insecureSkipVerify`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProviderConfig.property.insecureSkipVerify"></a>

```typescript
public readonly insecureSkipVerify: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#insecure_skip_verify NewrelicProvider#insecure_skip_verify}.

---

##### `insightsInsertKey`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProviderConfig.property.insightsInsertKey"></a>

```typescript
public readonly insightsInsertKey: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#insights_insert_key NewrelicProvider#insights_insert_key}.

---

##### `insightsInsertUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProviderConfig.property.insightsInsertUrl"></a>

```typescript
public readonly insightsInsertUrl: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#insights_insert_url NewrelicProvider#insights_insert_url}.

---

##### `insightsQueryUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProviderConfig.property.insightsQueryUrl"></a>

```typescript
public readonly insightsQueryUrl: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#insights_query_url NewrelicProvider#insights_query_url}.

---

##### `nerdgraphApiUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProviderConfig.property.nerdgraphApiUrl"></a>

```typescript
public readonly nerdgraphApiUrl: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#nerdgraph_api_url NewrelicProvider#nerdgraph_api_url}.

---

##### `region`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProviderConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* `string`

The data center for which your New Relic account is configured. Only one region per provider block is permitted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#region NewrelicProvider#region}

---

##### `syntheticsApiUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NewrelicProviderConfig.property.syntheticsApiUrl"></a>

```typescript
public readonly syntheticsApiUrl: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic#synthetics_api_url NewrelicProvider#synthetics_api_url}.

---

### NrqlAlertConditionConfig <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { NrqlAlertConditionConfig } from '@cdktf/provider-newrelic'

const nrqlAlertConditionConfig: NrqlAlertConditionConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The title of the condition.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#name NrqlAlertCondition#name}

---

##### `nrql`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.nrql"></a>

```typescript
public readonly nrql: NrqlAlertConditionNrql;
```

- *Type:* [`@cdktf/provider-newrelic.NrqlAlertConditionNrql`](#@cdktf/provider-newrelic.NrqlAlertConditionNrql)

nrql block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#nrql NrqlAlertCondition#nrql}

---

##### `policyId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.policyId"></a>

```typescript
public readonly policyId: number;
```

- *Type:* `number`

The ID of the policy where this condition should be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#policy_id NrqlAlertCondition#policy_id}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The New Relic account ID for managing your NRQL alert conditions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#account_id NrqlAlertCondition#account_id}

---

##### `aggregationDelay`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.aggregationDelay"></a>

```typescript
public readonly aggregationDelay: number;
```

- *Type:* `number`

How long we wait for data that belongs in each aggregation window.

Depending on your data, a longer delay may increase accuracy but delay notifications. Use aggregationDelay with the EVENT_FLOW and CADENCE aggregation methods.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#aggregation_delay NrqlAlertCondition#aggregation_delay}

---

##### `aggregationMethod`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.aggregationMethod"></a>

```typescript
public readonly aggregationMethod: string;
```

- *Type:* `string`

The method that determines when we consider an aggregation window to be complete so that we can evaluate the signal for violations.

Default is CADENCE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#aggregation_method NrqlAlertCondition#aggregation_method}

---

##### `aggregationTimer`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.aggregationTimer"></a>

```typescript
public readonly aggregationTimer: number;
```

- *Type:* `number`

How long we wait after each data point arrives to make sure we've processed the whole batch.

Use aggregationTimer with the EVENT_TIMER aggregation method.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#aggregation_timer NrqlAlertCondition#aggregation_timer}

---

##### `aggregationWindow`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.aggregationWindow"></a>

```typescript
public readonly aggregationWindow: number;
```

- *Type:* `number`

The duration of the time window used to evaluate the NRQL query, in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#aggregation_window NrqlAlertCondition#aggregation_window}

---

##### `baselineDirection`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.baselineDirection"></a>

```typescript
public readonly baselineDirection: string;
```

- *Type:* `string`

The baseline direction of a baseline NRQL alert condition. Valid values are: 'LOWER_ONLY', 'UPPER_AND_LOWER', 'UPPER_ONLY' (case insensitive).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#baseline_direction NrqlAlertCondition#baseline_direction}

---

##### `closeViolationsOnExpiration`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.closeViolationsOnExpiration"></a>

```typescript
public readonly closeViolationsOnExpiration: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether to close all open violations when the signal expires.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#close_violations_on_expiration NrqlAlertCondition#close_violations_on_expiration}

---

##### `critical`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.critical"></a>

```typescript
public readonly critical: NrqlAlertConditionCritical;
```

- *Type:* [`@cdktf/provider-newrelic.NrqlAlertConditionCritical`](#@cdktf/provider-newrelic.NrqlAlertConditionCritical)

critical block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#critical NrqlAlertCondition#critical}

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

The description of the NRQL alert condition.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#description NrqlAlertCondition#description}

---

##### `enabled`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether or not to enable the alert condition.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#enabled NrqlAlertCondition#enabled}

---

##### `expectedGroups`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.expectedGroups"></a>

```typescript
public readonly expectedGroups: number;
```

- *Type:* `number`

Number of expected groups when using outlier detection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#expected_groups NrqlAlertCondition#expected_groups}

---

##### `expirationDuration`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.expirationDuration"></a>

```typescript
public readonly expirationDuration: number;
```

- *Type:* `number`

The amount of time (in seconds) to wait before considering the signal expired.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#expiration_duration NrqlAlertCondition#expiration_duration}

---

##### `fillOption`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.fillOption"></a>

```typescript
public readonly fillOption: string;
```

- *Type:* `string`

Which strategy to use when filling gaps in the signal.

If static, the 'fill value' will be used for filling gaps in the signal. Valid values are: 'NONE', 'LAST_VALUE', or 'STATIC' (case insensitive).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#fill_option NrqlAlertCondition#fill_option}

---

##### `fillValue`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.fillValue"></a>

```typescript
public readonly fillValue: number;
```

- *Type:* `number`

If using the 'static' fill option, this value will be used for filling gaps in the signal.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#fill_value NrqlAlertCondition#fill_value}

---

##### `ignoreOverlap`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.ignoreOverlap"></a>

```typescript
public readonly ignoreOverlap: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether to look for a convergence of groups when using outlier detection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#ignore_overlap NrqlAlertCondition#ignore_overlap}

---

##### `openViolationOnExpiration`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.openViolationOnExpiration"></a>

```typescript
public readonly openViolationOnExpiration: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether to create a new violation to capture that the signal expired.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#open_violation_on_expiration NrqlAlertCondition#open_violation_on_expiration}

---

##### `openViolationOnGroupOverlap`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.openViolationOnGroupOverlap"></a>

```typescript
public readonly openViolationOnGroupOverlap: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether overlapping groups should produce a violation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#open_violation_on_group_overlap NrqlAlertCondition#open_violation_on_group_overlap}

---

##### `runbookUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.runbookUrl"></a>

```typescript
public readonly runbookUrl: string;
```

- *Type:* `string`

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#runbook_url NrqlAlertCondition#runbook_url}

---

##### `term`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.term"></a>

```typescript
public readonly term: NrqlAlertConditionTerm[];
```

- *Type:* [`@cdktf/provider-newrelic.NrqlAlertConditionTerm`](#@cdktf/provider-newrelic.NrqlAlertConditionTerm)[]

term block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#term NrqlAlertCondition#term}

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

The type of NRQL alert condition to create. Valid values are: 'static', 'baseline', 'outlier' (deprecated).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#type NrqlAlertCondition#type}

---

##### `valueFunction`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.valueFunction"></a>

```typescript
public readonly valueFunction: string;
```

- *Type:* `string`

Valid values are: 'single_value' or 'sum'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#value_function NrqlAlertCondition#value_function}

---

##### `violationTimeLimit`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.violationTimeLimit"></a>

```typescript
public readonly violationTimeLimit: string;
```

- *Type:* `string`

Sets a time limit, in hours, that will automatically force-close a long-lasting violation after the time limit you select.

Possible values are 'ONE_HOUR', 'TWO_HOURS', 'FOUR_HOURS', 'EIGHT_HOURS', 'TWELVE_HOURS', 'TWENTY_FOUR_HOURS', 'THIRTY_DAYS' (case insensitive).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#violation_time_limit NrqlAlertCondition#violation_time_limit}

---

##### `violationTimeLimitSeconds`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.violationTimeLimitSeconds"></a>

```typescript
public readonly violationTimeLimitSeconds: number;
```

- *Type:* `number`

Sets a time limit, in seconds, that will automatically force-close a long-lasting violation after the time limit you select.

Must be in the range of 300 to 2592000 (inclusive)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#violation_time_limit_seconds NrqlAlertCondition#violation_time_limit_seconds}

---

##### `warning`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionConfig.property.warning"></a>

```typescript
public readonly warning: NrqlAlertConditionWarning;
```

- *Type:* [`@cdktf/provider-newrelic.NrqlAlertConditionWarning`](#@cdktf/provider-newrelic.NrqlAlertConditionWarning)

warning block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#warning NrqlAlertCondition#warning}

---

### NrqlAlertConditionCritical <a name="@cdktf/provider-newrelic.NrqlAlertConditionCritical"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { NrqlAlertConditionCritical } from '@cdktf/provider-newrelic'

const nrqlAlertConditionCritical: NrqlAlertConditionCritical = { ... }
```

##### `threshold`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCritical.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* `number`

Must be 0 or greater. For baseline conditions must be in range [1, 1000].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#threshold NrqlAlertCondition#threshold}

---

##### `duration`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCritical.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* `number`

In minutes, must be in the range of 1 to 120 (inclusive).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#duration NrqlAlertCondition#duration}

---

##### `operator`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCritical.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* `string`

One of (above, below, equals). Defaults to 'equals'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#operator NrqlAlertCondition#operator}

---

##### `thresholdDuration`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCritical.property.thresholdDuration"></a>

```typescript
public readonly thresholdDuration: number;
```

- *Type:* `number`

The duration, in seconds, that the threshold must violate in order to create a violation.

Value must be a multiple of the 'aggregation_window' (which has a default of 60 seconds). Value must be within 120-3600 seconds for baseline and outlier conditions, within 120-7200 seconds for static conditions with the sum value function, and within 60-7200 seconds for static conditions with the single_value value function.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#threshold_duration NrqlAlertCondition#threshold_duration}

---

##### `thresholdOccurrences`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCritical.property.thresholdOccurrences"></a>

```typescript
public readonly thresholdOccurrences: string;
```

- *Type:* `string`

The criteria for how many data points must be in violation for the specified threshold duration.

Valid values are: 'ALL' or 'AT_LEAST_ONCE' (case insensitive).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#threshold_occurrences NrqlAlertCondition#threshold_occurrences}

---

##### `timeFunction`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCritical.property.timeFunction"></a>

```typescript
public readonly timeFunction: string;
```

- *Type:* `string`

Valid values are: 'all' or 'any'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#time_function NrqlAlertCondition#time_function}

---

### NrqlAlertConditionNrql <a name="@cdktf/provider-newrelic.NrqlAlertConditionNrql"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { NrqlAlertConditionNrql } from '@cdktf/provider-newrelic'

const nrqlAlertConditionNrql: NrqlAlertConditionNrql = { ... }
```

##### `query`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionNrql.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#query NrqlAlertCondition#query}.

---

##### `evaluationOffset`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionNrql.property.evaluationOffset"></a>

```typescript
public readonly evaluationOffset: number;
```

- *Type:* `number`

NRQL queries are evaluated in one-minute time windows.

The start time depends on the value you provide in the NRQL condition's `evaluation_offset`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#evaluation_offset NrqlAlertCondition#evaluation_offset}

---

##### `sinceValue`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionNrql.property.sinceValue"></a>

```typescript
public readonly sinceValue: string;
```

- *Type:* `string`

NRQL queries are evaluated in one-minute time windows.

The start time depends on the value you provide in the NRQL condition's `since_value`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#since_value NrqlAlertCondition#since_value}

---

### NrqlAlertConditionTerm <a name="@cdktf/provider-newrelic.NrqlAlertConditionTerm"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { NrqlAlertConditionTerm } from '@cdktf/provider-newrelic'

const nrqlAlertConditionTerm: NrqlAlertConditionTerm = { ... }
```

##### `threshold`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionTerm.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* `number`

Must be 0 or greater. For baseline conditions must be in range [1, 1000].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#threshold NrqlAlertCondition#threshold}

---

##### `duration`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionTerm.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* `number`

In minutes, must be in the range of 1 to 120 (inclusive).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#duration NrqlAlertCondition#duration}

---

##### `operator`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionTerm.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* `string`

One of (above, below, equals). Defaults to 'equals'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#operator NrqlAlertCondition#operator}

---

##### `priority`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionTerm.property.priority"></a>

```typescript
public readonly priority: string;
```

- *Type:* `string`

One of (critical, warning). Defaults to 'critical'. At least one condition term must have priority set to 'critical'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#priority NrqlAlertCondition#priority}

---

##### `thresholdDuration`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionTerm.property.thresholdDuration"></a>

```typescript
public readonly thresholdDuration: number;
```

- *Type:* `number`

The duration, in seconds, that the threshold must violate in order to create a violation.

Value must be a multiple of the 'aggregation_window' (which has a default of 60 seconds). Value must be within 120-3600 seconds for baseline and outlier conditions, within 120-7200 seconds for static conditions with the sum value function, and within 60-7200 seconds for static conditions with the single_value value function.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#threshold_duration NrqlAlertCondition#threshold_duration}

---

##### `thresholdOccurrences`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionTerm.property.thresholdOccurrences"></a>

```typescript
public readonly thresholdOccurrences: string;
```

- *Type:* `string`

The criteria for how many data points must be in violation for the specified threshold duration.

Valid values are: 'ALL' or 'AT_LEAST_ONCE' (case insensitive).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#threshold_occurrences NrqlAlertCondition#threshold_occurrences}

---

##### `timeFunction`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionTerm.property.timeFunction"></a>

```typescript
public readonly timeFunction: string;
```

- *Type:* `string`

Valid values are: 'all' or 'any'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#time_function NrqlAlertCondition#time_function}

---

### NrqlAlertConditionWarning <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarning"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { NrqlAlertConditionWarning } from '@cdktf/provider-newrelic'

const nrqlAlertConditionWarning: NrqlAlertConditionWarning = { ... }
```

##### `threshold`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarning.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* `number`

Must be 0 or greater. For baseline conditions must be in range [1, 1000].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#threshold NrqlAlertCondition#threshold}

---

##### `duration`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarning.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* `number`

In minutes, must be in the range of 1 to 120 (inclusive).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#duration NrqlAlertCondition#duration}

---

##### `operator`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarning.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* `string`

One of (above, below, equals). Defaults to 'equals'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#operator NrqlAlertCondition#operator}

---

##### `thresholdDuration`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarning.property.thresholdDuration"></a>

```typescript
public readonly thresholdDuration: number;
```

- *Type:* `number`

The duration, in seconds, that the threshold must violate in order to create a violation.

Value must be a multiple of the 'aggregation_window' (which has a default of 60 seconds). Value must be within 120-3600 seconds for baseline and outlier conditions, within 120-7200 seconds for static conditions with the sum value function, and within 60-7200 seconds for static conditions with the single_value value function.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#threshold_duration NrqlAlertCondition#threshold_duration}

---

##### `thresholdOccurrences`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarning.property.thresholdOccurrences"></a>

```typescript
public readonly thresholdOccurrences: string;
```

- *Type:* `string`

The criteria for how many data points must be in violation for the specified threshold duration.

Valid values are: 'ALL' or 'AT_LEAST_ONCE' (case insensitive).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#threshold_occurrences NrqlAlertCondition#threshold_occurrences}

---

##### `timeFunction`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarning.property.timeFunction"></a>

```typescript
public readonly timeFunction: string;
```

- *Type:* `string`

Valid values are: 'all' or 'any'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#time_function NrqlAlertCondition#time_function}

---

### NrqlDropRuleConfig <a name="@cdktf/provider-newrelic.NrqlDropRuleConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { NrqlDropRuleConfig } from '@cdktf/provider-newrelic'

const nrqlDropRuleConfig: NrqlDropRuleConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlDropRuleConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlDropRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlDropRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlDropRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `action`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlDropRuleConfig.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* `string`

The drop rule action (drop_data or drop_attributes).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_drop_rule.html#action NrqlDropRule#action}

---

##### `nrql`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlDropRuleConfig.property.nrql"></a>

```typescript
public readonly nrql: string;
```

- *Type:* `string`

Explains which data to apply the drop rule to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_drop_rule.html#nrql NrqlDropRule#nrql}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlDropRuleConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

Account with the NRQL drop rule will be put.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_drop_rule.html#account_id NrqlDropRule#account_id}

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlDropRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

Provides additional information about the rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_drop_rule.html#description NrqlDropRule#description}

---

### OneDashboardConfig <a name="@cdktf/provider-newrelic.OneDashboardConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OneDashboardConfig } from '@cdktf/provider-newrelic'

const oneDashboardConfig: OneDashboardConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The dashboard's name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#name OneDashboard#name}

---

##### `page`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardConfig.property.page"></a>

```typescript
public readonly page: OneDashboardPage[];
```

- *Type:* [`@cdktf/provider-newrelic.OneDashboardPage`](#@cdktf/provider-newrelic.OneDashboardPage)[]

page block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#page OneDashboard#page}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The New Relic account ID where you want to create the dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#account_id OneDashboard#account_id}

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

The dashboard's description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#description OneDashboard#description}

---

##### `permissions`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardConfig.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* `string`

Determines who can see or edit the dashboard. Valid values are private, public_read_only, public_read_write. Defaults to public_read_only.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#permissions OneDashboard#permissions}

---

### OneDashboardPage <a name="@cdktf/provider-newrelic.OneDashboardPage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OneDashboardPage } from '@cdktf/provider-newrelic'

const oneDashboardPage: OneDashboardPage = { ... }
```

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The dashboard page's name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#name OneDashboard#name}

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPage.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

The dashboard page's description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#description OneDashboard#description}

---

##### `widgetArea`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPage.property.widgetArea"></a>

```typescript
public readonly widgetArea: OneDashboardPageWidgetArea[];
```

- *Type:* [`@cdktf/provider-newrelic.OneDashboardPageWidgetArea`](#@cdktf/provider-newrelic.OneDashboardPageWidgetArea)[]

widget_area block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#widget_area OneDashboard#widget_area}

---

##### `widgetBar`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPage.property.widgetBar"></a>

```typescript
public readonly widgetBar: OneDashboardPageWidgetBar[];
```

- *Type:* [`@cdktf/provider-newrelic.OneDashboardPageWidgetBar`](#@cdktf/provider-newrelic.OneDashboardPageWidgetBar)[]

widget_bar block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#widget_bar OneDashboard#widget_bar}

---

##### `widgetBillboard`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPage.property.widgetBillboard"></a>

```typescript
public readonly widgetBillboard: OneDashboardPageWidgetBillboard[];
```

- *Type:* [`@cdktf/provider-newrelic.OneDashboardPageWidgetBillboard`](#@cdktf/provider-newrelic.OneDashboardPageWidgetBillboard)[]

widget_billboard block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#widget_billboard OneDashboard#widget_billboard}

---

##### `widgetBullet`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPage.property.widgetBullet"></a>

```typescript
public readonly widgetBullet: OneDashboardPageWidgetBullet[];
```

- *Type:* [`@cdktf/provider-newrelic.OneDashboardPageWidgetBullet`](#@cdktf/provider-newrelic.OneDashboardPageWidgetBullet)[]

widget_bullet block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#widget_bullet OneDashboard#widget_bullet}

---

##### `widgetFunnel`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPage.property.widgetFunnel"></a>

```typescript
public readonly widgetFunnel: OneDashboardPageWidgetFunnel[];
```

- *Type:* [`@cdktf/provider-newrelic.OneDashboardPageWidgetFunnel`](#@cdktf/provider-newrelic.OneDashboardPageWidgetFunnel)[]

widget_funnel block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#widget_funnel OneDashboard#widget_funnel}

---

##### `widgetHeatmap`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPage.property.widgetHeatmap"></a>

```typescript
public readonly widgetHeatmap: OneDashboardPageWidgetHeatmap[];
```

- *Type:* [`@cdktf/provider-newrelic.OneDashboardPageWidgetHeatmap`](#@cdktf/provider-newrelic.OneDashboardPageWidgetHeatmap)[]

widget_heatmap block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#widget_heatmap OneDashboard#widget_heatmap}

---

##### `widgetHistogram`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPage.property.widgetHistogram"></a>

```typescript
public readonly widgetHistogram: OneDashboardPageWidgetHistogram[];
```

- *Type:* [`@cdktf/provider-newrelic.OneDashboardPageWidgetHistogram`](#@cdktf/provider-newrelic.OneDashboardPageWidgetHistogram)[]

widget_histogram block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#widget_histogram OneDashboard#widget_histogram}

---

##### `widgetJson`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPage.property.widgetJson"></a>

```typescript
public readonly widgetJson: OneDashboardPageWidgetJson[];
```

- *Type:* [`@cdktf/provider-newrelic.OneDashboardPageWidgetJson`](#@cdktf/provider-newrelic.OneDashboardPageWidgetJson)[]

widget_json block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#widget_json OneDashboard#widget_json}

---

##### `widgetLine`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPage.property.widgetLine"></a>

```typescript
public readonly widgetLine: OneDashboardPageWidgetLine[];
```

- *Type:* [`@cdktf/provider-newrelic.OneDashboardPageWidgetLine`](#@cdktf/provider-newrelic.OneDashboardPageWidgetLine)[]

widget_line block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#widget_line OneDashboard#widget_line}

---

##### `widgetMarkdown`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPage.property.widgetMarkdown"></a>

```typescript
public readonly widgetMarkdown: OneDashboardPageWidgetMarkdown[];
```

- *Type:* [`@cdktf/provider-newrelic.OneDashboardPageWidgetMarkdown`](#@cdktf/provider-newrelic.OneDashboardPageWidgetMarkdown)[]

widget_markdown block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#widget_markdown OneDashboard#widget_markdown}

---

##### `widgetPie`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPage.property.widgetPie"></a>

```typescript
public readonly widgetPie: OneDashboardPageWidgetPie[];
```

- *Type:* [`@cdktf/provider-newrelic.OneDashboardPageWidgetPie`](#@cdktf/provider-newrelic.OneDashboardPageWidgetPie)[]

widget_pie block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#widget_pie OneDashboard#widget_pie}

---

##### `widgetStackedBar`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPage.property.widgetStackedBar"></a>

```typescript
public readonly widgetStackedBar: OneDashboardPageWidgetStackedBar[];
```

- *Type:* [`@cdktf/provider-newrelic.OneDashboardPageWidgetStackedBar`](#@cdktf/provider-newrelic.OneDashboardPageWidgetStackedBar)[]

widget_stacked_bar block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#widget_stacked_bar OneDashboard#widget_stacked_bar}

---

##### `widgetTable`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPage.property.widgetTable"></a>

```typescript
public readonly widgetTable: OneDashboardPageWidgetTable[];
```

- *Type:* [`@cdktf/provider-newrelic.OneDashboardPageWidgetTable`](#@cdktf/provider-newrelic.OneDashboardPageWidgetTable)[]

widget_table block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#widget_table OneDashboard#widget_table}

---

### OneDashboardPageWidgetArea <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetArea"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OneDashboardPageWidgetArea } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetArea: OneDashboardPageWidgetArea = { ... }
```

##### `column`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetArea.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#column OneDashboard#column}.

---

##### `nrqlQuery`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetArea.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: OneDashboardPageWidgetAreaNrqlQuery[];
```

- *Type:* [`@cdktf/provider-newrelic.OneDashboardPageWidgetAreaNrqlQuery`](#@cdktf/provider-newrelic.OneDashboardPageWidgetAreaNrqlQuery)[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetArea.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetArea.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* `string`

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#title OneDashboard#title}

---

##### `height`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetArea.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#height OneDashboard#height}.

---

##### `width`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetArea.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#width OneDashboard#width}.

---

### OneDashboardPageWidgetAreaNrqlQuery <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetAreaNrqlQuery"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OneDashboardPageWidgetAreaNrqlQuery } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetAreaNrqlQuery: OneDashboardPageWidgetAreaNrqlQuery = { ... }
```

##### `query`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetAreaNrqlQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* `string`

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetAreaNrqlQuery.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetBar <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBar"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OneDashboardPageWidgetBar } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetBar: OneDashboardPageWidgetBar = { ... }
```

##### `column`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBar.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#column OneDashboard#column}.

---

##### `nrqlQuery`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBar.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: OneDashboardPageWidgetBarNrqlQuery[];
```

- *Type:* [`@cdktf/provider-newrelic.OneDashboardPageWidgetBarNrqlQuery`](#@cdktf/provider-newrelic.OneDashboardPageWidgetBarNrqlQuery)[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBar.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBar.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* `string`

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#title OneDashboard#title}

---

##### `filterCurrentDashboard`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBar.property.filterCurrentDashboard"></a>

```typescript
public readonly filterCurrentDashboard: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Use this item to filter the current dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#filter_current_dashboard OneDashboard#filter_current_dashboard}

---

##### `height`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBar.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#height OneDashboard#height}.

---

##### `linkedEntityGuids`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBar.property.linkedEntityGuids"></a>

```typescript
public readonly linkedEntityGuids: string[];
```

- *Type:* `string`[]

Related entities. Currently only supports Dashboard entities, but may allow other cases in the future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#linked_entity_guids OneDashboard#linked_entity_guids}

---

##### `width`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBar.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#width OneDashboard#width}.

---

### OneDashboardPageWidgetBarNrqlQuery <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBarNrqlQuery"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OneDashboardPageWidgetBarNrqlQuery } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetBarNrqlQuery: OneDashboardPageWidgetBarNrqlQuery = { ... }
```

##### `query`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBarNrqlQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* `string`

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBarNrqlQuery.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetBillboard <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBillboard"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OneDashboardPageWidgetBillboard } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetBillboard: OneDashboardPageWidgetBillboard = { ... }
```

##### `column`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBillboard.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#column OneDashboard#column}.

---

##### `nrqlQuery`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBillboard.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: OneDashboardPageWidgetBillboardNrqlQuery[];
```

- *Type:* [`@cdktf/provider-newrelic.OneDashboardPageWidgetBillboardNrqlQuery`](#@cdktf/provider-newrelic.OneDashboardPageWidgetBillboardNrqlQuery)[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBillboard.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBillboard.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* `string`

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#title OneDashboard#title}

---

##### `critical`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBillboard.property.critical"></a>

```typescript
public readonly critical: number;
```

- *Type:* `number`

The critical threshold value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#critical OneDashboard#critical}

---

##### `height`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBillboard.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#height OneDashboard#height}.

---

##### `warning`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBillboard.property.warning"></a>

```typescript
public readonly warning: number;
```

- *Type:* `number`

The warning threshold value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#warning OneDashboard#warning}

---

##### `width`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBillboard.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#width OneDashboard#width}.

---

### OneDashboardPageWidgetBillboardNrqlQuery <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBillboardNrqlQuery"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OneDashboardPageWidgetBillboardNrqlQuery } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetBillboardNrqlQuery: OneDashboardPageWidgetBillboardNrqlQuery = { ... }
```

##### `query`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBillboardNrqlQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* `string`

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBillboardNrqlQuery.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetBullet <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBullet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OneDashboardPageWidgetBullet } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetBullet: OneDashboardPageWidgetBullet = { ... }
```

##### `column`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBullet.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#column OneDashboard#column}.

---

##### `nrqlQuery`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBullet.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: OneDashboardPageWidgetBulletNrqlQuery[];
```

- *Type:* [`@cdktf/provider-newrelic.OneDashboardPageWidgetBulletNrqlQuery`](#@cdktf/provider-newrelic.OneDashboardPageWidgetBulletNrqlQuery)[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBullet.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBullet.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* `string`

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#title OneDashboard#title}

---

##### `height`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBullet.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#height OneDashboard#height}.

---

##### `limit`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBullet.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* `number`

The maximum value for the visualization.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#limit OneDashboard#limit}

---

##### `width`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBullet.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#width OneDashboard#width}.

---

### OneDashboardPageWidgetBulletNrqlQuery <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBulletNrqlQuery"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OneDashboardPageWidgetBulletNrqlQuery } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetBulletNrqlQuery: OneDashboardPageWidgetBulletNrqlQuery = { ... }
```

##### `query`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBulletNrqlQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* `string`

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetBulletNrqlQuery.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetFunnel <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetFunnel"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OneDashboardPageWidgetFunnel } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetFunnel: OneDashboardPageWidgetFunnel = { ... }
```

##### `column`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetFunnel.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#column OneDashboard#column}.

---

##### `nrqlQuery`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetFunnel.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: OneDashboardPageWidgetFunnelNrqlQuery[];
```

- *Type:* [`@cdktf/provider-newrelic.OneDashboardPageWidgetFunnelNrqlQuery`](#@cdktf/provider-newrelic.OneDashboardPageWidgetFunnelNrqlQuery)[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetFunnel.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetFunnel.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* `string`

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#title OneDashboard#title}

---

##### `height`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetFunnel.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#height OneDashboard#height}.

---

##### `width`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetFunnel.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#width OneDashboard#width}.

---

### OneDashboardPageWidgetFunnelNrqlQuery <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetFunnelNrqlQuery"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OneDashboardPageWidgetFunnelNrqlQuery } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetFunnelNrqlQuery: OneDashboardPageWidgetFunnelNrqlQuery = { ... }
```

##### `query`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetFunnelNrqlQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* `string`

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetFunnelNrqlQuery.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetHeatmap <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHeatmap"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OneDashboardPageWidgetHeatmap } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetHeatmap: OneDashboardPageWidgetHeatmap = { ... }
```

##### `column`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHeatmap.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#column OneDashboard#column}.

---

##### `nrqlQuery`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHeatmap.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: OneDashboardPageWidgetHeatmapNrqlQuery[];
```

- *Type:* [`@cdktf/provider-newrelic.OneDashboardPageWidgetHeatmapNrqlQuery`](#@cdktf/provider-newrelic.OneDashboardPageWidgetHeatmapNrqlQuery)[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHeatmap.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHeatmap.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* `string`

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#title OneDashboard#title}

---

##### `height`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHeatmap.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#height OneDashboard#height}.

---

##### `width`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHeatmap.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#width OneDashboard#width}.

---

### OneDashboardPageWidgetHeatmapNrqlQuery <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHeatmapNrqlQuery"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OneDashboardPageWidgetHeatmapNrqlQuery } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetHeatmapNrqlQuery: OneDashboardPageWidgetHeatmapNrqlQuery = { ... }
```

##### `query`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHeatmapNrqlQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* `string`

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHeatmapNrqlQuery.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetHistogram <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHistogram"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OneDashboardPageWidgetHistogram } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetHistogram: OneDashboardPageWidgetHistogram = { ... }
```

##### `column`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHistogram.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#column OneDashboard#column}.

---

##### `nrqlQuery`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHistogram.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: OneDashboardPageWidgetHistogramNrqlQuery[];
```

- *Type:* [`@cdktf/provider-newrelic.OneDashboardPageWidgetHistogramNrqlQuery`](#@cdktf/provider-newrelic.OneDashboardPageWidgetHistogramNrqlQuery)[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHistogram.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHistogram.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* `string`

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#title OneDashboard#title}

---

##### `height`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHistogram.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#height OneDashboard#height}.

---

##### `width`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHistogram.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#width OneDashboard#width}.

---

### OneDashboardPageWidgetHistogramNrqlQuery <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHistogramNrqlQuery"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OneDashboardPageWidgetHistogramNrqlQuery } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetHistogramNrqlQuery: OneDashboardPageWidgetHistogramNrqlQuery = { ... }
```

##### `query`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHistogramNrqlQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* `string`

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetHistogramNrqlQuery.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetJson <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetJson"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OneDashboardPageWidgetJson } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetJson: OneDashboardPageWidgetJson = { ... }
```

##### `column`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetJson.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#column OneDashboard#column}.

---

##### `nrqlQuery`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetJson.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: OneDashboardPageWidgetJsonNrqlQuery[];
```

- *Type:* [`@cdktf/provider-newrelic.OneDashboardPageWidgetJsonNrqlQuery`](#@cdktf/provider-newrelic.OneDashboardPageWidgetJsonNrqlQuery)[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetJson.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetJson.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* `string`

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#title OneDashboard#title}

---

##### `height`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetJson.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#height OneDashboard#height}.

---

##### `width`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetJson.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#width OneDashboard#width}.

---

### OneDashboardPageWidgetJsonNrqlQuery <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetJsonNrqlQuery"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OneDashboardPageWidgetJsonNrqlQuery } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetJsonNrqlQuery: OneDashboardPageWidgetJsonNrqlQuery = { ... }
```

##### `query`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetJsonNrqlQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* `string`

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetJsonNrqlQuery.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetLine <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetLine"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OneDashboardPageWidgetLine } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetLine: OneDashboardPageWidgetLine = { ... }
```

##### `column`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetLine.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#column OneDashboard#column}.

---

##### `nrqlQuery`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetLine.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: OneDashboardPageWidgetLineNrqlQuery[];
```

- *Type:* [`@cdktf/provider-newrelic.OneDashboardPageWidgetLineNrqlQuery`](#@cdktf/provider-newrelic.OneDashboardPageWidgetLineNrqlQuery)[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetLine.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetLine.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* `string`

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#title OneDashboard#title}

---

##### `height`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetLine.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#height OneDashboard#height}.

---

##### `width`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetLine.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#width OneDashboard#width}.

---

### OneDashboardPageWidgetLineNrqlQuery <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetLineNrqlQuery"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OneDashboardPageWidgetLineNrqlQuery } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetLineNrqlQuery: OneDashboardPageWidgetLineNrqlQuery = { ... }
```

##### `query`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetLineNrqlQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* `string`

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetLineNrqlQuery.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetMarkdown <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetMarkdown"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OneDashboardPageWidgetMarkdown } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetMarkdown: OneDashboardPageWidgetMarkdown = { ... }
```

##### `column`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetMarkdown.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#column OneDashboard#column}.

---

##### `row`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetMarkdown.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetMarkdown.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* `string`

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#title OneDashboard#title}

---

##### `height`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetMarkdown.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#height OneDashboard#height}.

---

##### `text`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetMarkdown.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#text OneDashboard#text}.

---

##### `width`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetMarkdown.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#width OneDashboard#width}.

---

### OneDashboardPageWidgetPie <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetPie"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OneDashboardPageWidgetPie } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetPie: OneDashboardPageWidgetPie = { ... }
```

##### `column`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetPie.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#column OneDashboard#column}.

---

##### `nrqlQuery`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetPie.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: OneDashboardPageWidgetPieNrqlQuery[];
```

- *Type:* [`@cdktf/provider-newrelic.OneDashboardPageWidgetPieNrqlQuery`](#@cdktf/provider-newrelic.OneDashboardPageWidgetPieNrqlQuery)[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetPie.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetPie.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* `string`

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#title OneDashboard#title}

---

##### `filterCurrentDashboard`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetPie.property.filterCurrentDashboard"></a>

```typescript
public readonly filterCurrentDashboard: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Use this item to filter the current dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#filter_current_dashboard OneDashboard#filter_current_dashboard}

---

##### `height`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetPie.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#height OneDashboard#height}.

---

##### `linkedEntityGuids`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetPie.property.linkedEntityGuids"></a>

```typescript
public readonly linkedEntityGuids: string[];
```

- *Type:* `string`[]

Related entities. Currently only supports Dashboard entities, but may allow other cases in the future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#linked_entity_guids OneDashboard#linked_entity_guids}

---

##### `width`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetPie.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#width OneDashboard#width}.

---

### OneDashboardPageWidgetPieNrqlQuery <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetPieNrqlQuery"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OneDashboardPageWidgetPieNrqlQuery } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetPieNrqlQuery: OneDashboardPageWidgetPieNrqlQuery = { ... }
```

##### `query`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetPieNrqlQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* `string`

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetPieNrqlQuery.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetStackedBar <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetStackedBar"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OneDashboardPageWidgetStackedBar } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetStackedBar: OneDashboardPageWidgetStackedBar = { ... }
```

##### `column`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetStackedBar.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#column OneDashboard#column}.

---

##### `nrqlQuery`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetStackedBar.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: OneDashboardPageWidgetStackedBarNrqlQuery[];
```

- *Type:* [`@cdktf/provider-newrelic.OneDashboardPageWidgetStackedBarNrqlQuery`](#@cdktf/provider-newrelic.OneDashboardPageWidgetStackedBarNrqlQuery)[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetStackedBar.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetStackedBar.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* `string`

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#title OneDashboard#title}

---

##### `height`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetStackedBar.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#height OneDashboard#height}.

---

##### `width`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetStackedBar.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#width OneDashboard#width}.

---

### OneDashboardPageWidgetStackedBarNrqlQuery <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetStackedBarNrqlQuery"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OneDashboardPageWidgetStackedBarNrqlQuery } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetStackedBarNrqlQuery: OneDashboardPageWidgetStackedBarNrqlQuery = { ... }
```

##### `query`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetStackedBarNrqlQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* `string`

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetStackedBarNrqlQuery.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetTable <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetTable"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OneDashboardPageWidgetTable } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetTable: OneDashboardPageWidgetTable = { ... }
```

##### `column`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetTable.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#column OneDashboard#column}.

---

##### `nrqlQuery`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetTable.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: OneDashboardPageWidgetTableNrqlQuery[];
```

- *Type:* [`@cdktf/provider-newrelic.OneDashboardPageWidgetTableNrqlQuery`](#@cdktf/provider-newrelic.OneDashboardPageWidgetTableNrqlQuery)[]

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#nrql_query OneDashboard#nrql_query}

---

##### `row`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetTable.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#row OneDashboard#row}.

---

##### `title`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetTable.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* `string`

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#title OneDashboard#title}

---

##### `filterCurrentDashboard`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetTable.property.filterCurrentDashboard"></a>

```typescript
public readonly filterCurrentDashboard: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Use this item to filter the current dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#filter_current_dashboard OneDashboard#filter_current_dashboard}

---

##### `height`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetTable.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#height OneDashboard#height}.

---

##### `linkedEntityGuids`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetTable.property.linkedEntityGuids"></a>

```typescript
public readonly linkedEntityGuids: string[];
```

- *Type:* `string`[]

Related entities. Currently only supports Dashboard entities, but may allow other cases in the future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#linked_entity_guids OneDashboard#linked_entity_guids}

---

##### `width`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetTable.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#width OneDashboard#width}.

---

### OneDashboardPageWidgetTableNrqlQuery <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetTableNrqlQuery"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OneDashboardPageWidgetTableNrqlQuery } from '@cdktf/provider-newrelic'

const oneDashboardPageWidgetTableNrqlQuery: OneDashboardPageWidgetTableNrqlQuery = { ... }
```

##### `query`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetTableNrqlQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* `string`

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#query OneDashboard#query}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardPageWidgetTableNrqlQuery.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#account_id OneDashboard#account_id}

---

### OneDashboardRawConfig <a name="@cdktf/provider-newrelic.OneDashboardRawConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OneDashboardRawConfig } from '@cdktf/provider-newrelic'

const oneDashboardRawConfig: OneDashboardRawConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The dashboard's name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw.html#name OneDashboardRaw#name}

---

##### `page`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawConfig.property.page"></a>

```typescript
public readonly page: OneDashboardRawPage[];
```

- *Type:* [`@cdktf/provider-newrelic.OneDashboardRawPage`](#@cdktf/provider-newrelic.OneDashboardRawPage)[]

page block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw.html#page OneDashboardRaw#page}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The New Relic account ID where you want to create the dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw.html#account_id OneDashboardRaw#account_id}

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

The dashboard's description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw.html#description OneDashboardRaw#description}

---

##### `permissions`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawConfig.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* `string`

Determines who can see or edit the dashboard. Valid values are private, public_read_only, public_read_write. Defaults to public_read_only.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw.html#permissions OneDashboardRaw#permissions}

---

### OneDashboardRawPage <a name="@cdktf/provider-newrelic.OneDashboardRawPage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OneDashboardRawPage } from '@cdktf/provider-newrelic'

const oneDashboardRawPage: OneDashboardRawPage = { ... }
```

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawPage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The dashboard page's name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw.html#name OneDashboardRaw#name}

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawPage.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

The dashboard page's description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw.html#description OneDashboardRaw#description}

---

##### `widget`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawPage.property.widget"></a>

```typescript
public readonly widget: OneDashboardRawPageWidget[];
```

- *Type:* [`@cdktf/provider-newrelic.OneDashboardRawPageWidget`](#@cdktf/provider-newrelic.OneDashboardRawPageWidget)[]

widget block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw.html#widget OneDashboardRaw#widget}

---

### OneDashboardRawPageWidget <a name="@cdktf/provider-newrelic.OneDashboardRawPageWidget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OneDashboardRawPageWidget } from '@cdktf/provider-newrelic'

const oneDashboardRawPageWidget: OneDashboardRawPageWidget = { ... }
```

##### `column`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawPageWidget.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw.html#column OneDashboardRaw#column}.

---

##### `configuration`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawPageWidget.property.configuration"></a>

```typescript
public readonly configuration: string;
```

- *Type:* `string`

The configuration of the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw.html#configuration OneDashboardRaw#configuration}

---

##### `row`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawPageWidget.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw.html#row OneDashboardRaw#row}.

---

##### `title`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawPageWidget.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* `string`

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw.html#title OneDashboardRaw#title}

---

##### `visualizationId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawPageWidget.property.visualizationId"></a>

```typescript
public readonly visualizationId: string;
```

- *Type:* `string`

The visualization ID of the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw.html#visualization_id OneDashboardRaw#visualization_id}

---

##### `height`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawPageWidget.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw.html#height OneDashboardRaw#height}.

---

##### `linkedEntityGuids`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawPageWidget.property.linkedEntityGuids"></a>

```typescript
public readonly linkedEntityGuids: string[];
```

- *Type:* `string`[]

(Optional) Related entity GUIDs. Currently only supports Dashboard entity GUIDs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw.html#linked_entity_guids OneDashboardRaw#linked_entity_guids}

---

##### `width`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.OneDashboardRawPageWidget.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw.html#width OneDashboardRaw#width}.

---

### PluginsAlertConditionConfig <a name="@cdktf/provider-newrelic.PluginsAlertConditionConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { PluginsAlertConditionConfig } from '@cdktf/provider-newrelic'

const pluginsAlertConditionConfig: PluginsAlertConditionConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `entities`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionConfig.property.entities"></a>

```typescript
public readonly entities: number[];
```

- *Type:* `number`[]

The plugin component IDs to target.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition.html#entities PluginsAlertCondition#entities}

---

##### `metric`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionConfig.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* `string`

The plugin metric to evaluate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition.html#metric PluginsAlertCondition#metric}

---

##### `metricDescription`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionConfig.property.metricDescription"></a>

```typescript
public readonly metricDescription: string;
```

- *Type:* `string`

The metric description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition.html#metric_description PluginsAlertCondition#metric_description}

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The title of the condition. Must be between 1 and 64 characters, inclusive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition.html#name PluginsAlertCondition#name}

---

##### `pluginGuid`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionConfig.property.pluginGuid"></a>

```typescript
public readonly pluginGuid: string;
```

- *Type:* `string`

The GUID of the plugin which produces the metric.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition.html#plugin_guid PluginsAlertCondition#plugin_guid}

---

##### `pluginId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionConfig.property.pluginId"></a>

```typescript
public readonly pluginId: string;
```

- *Type:* `string`

The ID of the installed plugin instance which produces the metric.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition.html#plugin_id PluginsAlertCondition#plugin_id}

---

##### `policyId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionConfig.property.policyId"></a>

```typescript
public readonly policyId: number;
```

- *Type:* `number`

The ID of the policy where this condition should be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition.html#policy_id PluginsAlertCondition#policy_id}

---

##### `term`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionConfig.property.term"></a>

```typescript
public readonly term: PluginsAlertConditionTerm[];
```

- *Type:* [`@cdktf/provider-newrelic.PluginsAlertConditionTerm`](#@cdktf/provider-newrelic.PluginsAlertConditionTerm)[]

term block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition.html#term PluginsAlertCondition#term}

---

##### `valueFunction`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionConfig.property.valueFunction"></a>

```typescript
public readonly valueFunction: string;
```

- *Type:* `string`

The value function to apply to the metric data.  One of `min`, `max`, `average`, `sample_size`, `total`, or `percent`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition.html#value_function PluginsAlertCondition#value_function}

---

##### `enabled`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether or not this condition is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition.html#enabled PluginsAlertCondition#enabled}

---

##### `runbookUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionConfig.property.runbookUrl"></a>

```typescript
public readonly runbookUrl: string;
```

- *Type:* `string`

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition.html#runbook_url PluginsAlertCondition#runbook_url}

---

### PluginsAlertConditionTerm <a name="@cdktf/provider-newrelic.PluginsAlertConditionTerm"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { PluginsAlertConditionTerm } from '@cdktf/provider-newrelic'

const pluginsAlertConditionTerm: PluginsAlertConditionTerm = { ... }
```

##### `duration`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionTerm.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* `number`

In minutes, must be in the range of 5 to 120, inclusive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition.html#duration PluginsAlertCondition#duration}

---

##### `threshold`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionTerm.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* `number`

Must be 0 or greater.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition.html#threshold PluginsAlertCondition#threshold}

---

##### `timeFunction`<sup>Required</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionTerm.property.timeFunction"></a>

```typescript
public readonly timeFunction: string;
```

- *Type:* `string`

One of `all` or `any`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition.html#time_function PluginsAlertCondition#time_function}

---

##### `operator`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionTerm.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* `string`

One of `above`, `below`, or `equal`. Defaults to equal.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition.html#operator PluginsAlertCondition#operator}

---

##### `priority`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.PluginsAlertConditionTerm.property.priority"></a>

```typescript
public readonly priority: string;
```

- *Type:* `string`

One of `critical` or `warning`. Defaults to critical.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition.html#priority PluginsAlertCondition#priority}

---

### ServiceLevelConfig <a name="@cdktf/provider-newrelic.ServiceLevelConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceLevelConfig } from '@cdktf/provider-newrelic'

const serviceLevelConfig: ServiceLevelConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `events`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelConfig.property.events"></a>

```typescript
public readonly events: ServiceLevelEvents;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelEvents`](#@cdktf/provider-newrelic.ServiceLevelEvents)

events block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#events ServiceLevel#events}

---

##### `guid`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelConfig.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#guid ServiceLevel#guid}.

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#name ServiceLevel#name}.

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#description ServiceLevel#description}.

---

##### `objective`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelConfig.property.objective"></a>

```typescript
public readonly objective: ServiceLevelObjective[];
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelObjective`](#@cdktf/provider-newrelic.ServiceLevelObjective)[]

objective block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#objective ServiceLevel#objective}

---

### ServiceLevelEvents <a name="@cdktf/provider-newrelic.ServiceLevelEvents"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceLevelEvents } from '@cdktf/provider-newrelic'

const serviceLevelEvents: ServiceLevelEvents = { ... }
```

##### `accountId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEvents.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#account_id ServiceLevel#account_id}.

---

##### `validEvents`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEvents.property.validEvents"></a>

```typescript
public readonly validEvents: ServiceLevelEventsValidEvents;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelEventsValidEvents`](#@cdktf/provider-newrelic.ServiceLevelEventsValidEvents)

valid_events block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#valid_events ServiceLevel#valid_events}

---

##### `badEvents`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEvents.property.badEvents"></a>

```typescript
public readonly badEvents: ServiceLevelEventsBadEvents;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelEventsBadEvents`](#@cdktf/provider-newrelic.ServiceLevelEventsBadEvents)

bad_events block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#bad_events ServiceLevel#bad_events}

---

##### `goodEvents`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEvents.property.goodEvents"></a>

```typescript
public readonly goodEvents: ServiceLevelEventsGoodEvents;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelEventsGoodEvents`](#@cdktf/provider-newrelic.ServiceLevelEventsGoodEvents)

good_events block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#good_events ServiceLevel#good_events}

---

### ServiceLevelEventsBadEvents <a name="@cdktf/provider-newrelic.ServiceLevelEventsBadEvents"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceLevelEventsBadEvents } from '@cdktf/provider-newrelic'

const serviceLevelEventsBadEvents: ServiceLevelEventsBadEvents = { ... }
```

##### `from`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsBadEvents.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#from ServiceLevel#from}.

---

##### `where`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsBadEvents.property.where"></a>

```typescript
public readonly where: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#where ServiceLevel#where}.

---

### ServiceLevelEventsGoodEvents <a name="@cdktf/provider-newrelic.ServiceLevelEventsGoodEvents"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceLevelEventsGoodEvents } from '@cdktf/provider-newrelic'

const serviceLevelEventsGoodEvents: ServiceLevelEventsGoodEvents = { ... }
```

##### `from`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsGoodEvents.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#from ServiceLevel#from}.

---

##### `where`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsGoodEvents.property.where"></a>

```typescript
public readonly where: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#where ServiceLevel#where}.

---

### ServiceLevelEventsValidEvents <a name="@cdktf/provider-newrelic.ServiceLevelEventsValidEvents"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceLevelEventsValidEvents } from '@cdktf/provider-newrelic'

const serviceLevelEventsValidEvents: ServiceLevelEventsValidEvents = { ... }
```

##### `from`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsValidEvents.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#from ServiceLevel#from}.

---

##### `where`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsValidEvents.property.where"></a>

```typescript
public readonly where: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#where ServiceLevel#where}.

---

### ServiceLevelObjective <a name="@cdktf/provider-newrelic.ServiceLevelObjective"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceLevelObjective } from '@cdktf/provider-newrelic'

const serviceLevelObjective: ServiceLevelObjective = { ... }
```

##### `target`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjective.property.target"></a>

```typescript
public readonly target: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#target ServiceLevel#target}.

---

##### `timeWindow`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjective.property.timeWindow"></a>

```typescript
public readonly timeWindow: ServiceLevelObjectiveTimeWindow;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindow`](#@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindow)

time_window block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#time_window ServiceLevel#time_window}

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjective.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#description ServiceLevel#description}.

---

##### `name`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjective.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#name ServiceLevel#name}.

---

### ServiceLevelObjectiveTimeWindow <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindow"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceLevelObjectiveTimeWindow } from '@cdktf/provider-newrelic'

const serviceLevelObjectiveTimeWindow: ServiceLevelObjectiveTimeWindow = { ... }
```

##### `rolling`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindow.property.rolling"></a>

```typescript
public readonly rolling: ServiceLevelObjectiveTimeWindowRolling;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRolling`](#@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRolling)

rolling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#rolling ServiceLevel#rolling}

---

### ServiceLevelObjectiveTimeWindowRolling <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRolling"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceLevelObjectiveTimeWindowRolling } from '@cdktf/provider-newrelic'

const serviceLevelObjectiveTimeWindowRolling: ServiceLevelObjectiveTimeWindowRolling = { ... }
```

##### `count`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRolling.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#count ServiceLevel#count}.

---

##### `unit`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRolling.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#unit ServiceLevel#unit}.

---

### SyntheticsAlertConditionConfig <a name="@cdktf/provider-newrelic.SyntheticsAlertConditionConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { SyntheticsAlertConditionConfig } from '@cdktf/provider-newrelic'

const syntheticsAlertConditionConfig: SyntheticsAlertConditionConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertConditionConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertConditionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertConditionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertConditionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `monitorId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertConditionConfig.property.monitorId"></a>

```typescript
public readonly monitorId: string;
```

- *Type:* `string`

The ID of the Synthetics monitor to be referenced in the alert condition.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_alert_condition.html#monitor_id SyntheticsAlertCondition#monitor_id}

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertConditionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The title of this condition.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_alert_condition.html#name SyntheticsAlertCondition#name}

---

##### `policyId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertConditionConfig.property.policyId"></a>

```typescript
public readonly policyId: number;
```

- *Type:* `number`

The ID of the policy where this condition should be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_alert_condition.html#policy_id SyntheticsAlertCondition#policy_id}

---

##### `enabled`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertConditionConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Set whether to enable the alert condition. Defaults to true.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_alert_condition.html#enabled SyntheticsAlertCondition#enabled}

---

##### `runbookUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsAlertConditionConfig.property.runbookUrl"></a>

```typescript
public readonly runbookUrl: string;
```

- *Type:* `string`

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_alert_condition.html#runbook_url SyntheticsAlertCondition#runbook_url}

---

### SyntheticsMonitorConfig <a name="@cdktf/provider-newrelic.SyntheticsMonitorConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { SyntheticsMonitorConfig } from '@cdktf/provider-newrelic'

const syntheticsMonitorConfig: SyntheticsMonitorConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `frequency`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorConfig.property.frequency"></a>

```typescript
public readonly frequency: number;
```

- *Type:* `number`

The interval (in minutes) at which this monitor should run.

Valid values are 1, 5, 10, 15, 30, 60, 360, 720, or 1440.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor.html#frequency SyntheticsMonitor#frequency}

---

##### `locations`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorConfig.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* `string`[]

The locations in which this monitor should be run.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor.html#locations SyntheticsMonitor#locations}

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The title of this monitor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor.html#name SyntheticsMonitor#name}

---

##### `status`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* `string`

The monitor status (i.e. ENABLED, MUTED, DISABLED).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor.html#status SyntheticsMonitor#status}

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

The monitor type. Valid values are SIMPLE, BROWSER, SCRIPT_BROWSER, and SCRIPT_API.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor.html#type SyntheticsMonitor#type}

---

##### `bypassHeadRequest`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorConfig.property.bypassHeadRequest"></a>

```typescript
public readonly bypassHeadRequest: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Bypass HEAD request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor.html#bypass_head_request SyntheticsMonitor#bypass_head_request}

---

##### `slaThreshold`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorConfig.property.slaThreshold"></a>

```typescript
public readonly slaThreshold: number;
```

- *Type:* `number`

The base threshold for the SLA report.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor.html#sla_threshold SyntheticsMonitor#sla_threshold}

---

##### `treatRedirectAsFailure`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorConfig.property.treatRedirectAsFailure"></a>

```typescript
public readonly treatRedirectAsFailure: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Fail the monitor check if redirected.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor.html#treat_redirect_as_failure SyntheticsMonitor#treat_redirect_as_failure}

---

##### `uri`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorConfig.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* `string`

The URI for the monitor to hit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor.html#uri SyntheticsMonitor#uri}

---

##### `validationString`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorConfig.property.validationString"></a>

```typescript
public readonly validationString: string;
```

- *Type:* `string`

The string to validate against in the response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor.html#validation_string SyntheticsMonitor#validation_string}

---

##### `verifySsl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorConfig.property.verifySsl"></a>

```typescript
public readonly verifySsl: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Verify SSL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor.html#verify_ssl SyntheticsMonitor#verify_ssl}

---

### SyntheticsMonitorScriptConfig <a name="@cdktf/provider-newrelic.SyntheticsMonitorScriptConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { SyntheticsMonitorScriptConfig } from '@cdktf/provider-newrelic'

const syntheticsMonitorScriptConfig: SyntheticsMonitorScriptConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScriptConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScriptConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScriptConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScriptConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `monitorId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScriptConfig.property.monitorId"></a>

```typescript
public readonly monitorId: string;
```

- *Type:* `string`

The ID of the monitor to attach the script to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor_script.html#monitor_id SyntheticsMonitorScript#monitor_id}

---

##### `text`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScriptConfig.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* `string`

The plaintext representing the monitor script.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor_script.html#text SyntheticsMonitorScript#text}

---

##### `location`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScriptConfig.property.location"></a>

```typescript
public readonly location: SyntheticsMonitorScriptLocation[];
```

- *Type:* [`@cdktf/provider-newrelic.SyntheticsMonitorScriptLocation`](#@cdktf/provider-newrelic.SyntheticsMonitorScriptLocation)[]

location block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor_script.html#location SyntheticsMonitorScript#location}

---

### SyntheticsMonitorScriptLocation <a name="@cdktf/provider-newrelic.SyntheticsMonitorScriptLocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { SyntheticsMonitorScriptLocation } from '@cdktf/provider-newrelic'

const syntheticsMonitorScriptLocation: SyntheticsMonitorScriptLocation = { ... }
```

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScriptLocation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The monitor script location name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor_script.html#name SyntheticsMonitorScript#name}

---

##### `hmac`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMonitorScriptLocation.property.hmac"></a>

```typescript
public readonly hmac: string;
```

- *Type:* `string`

The monitor script authentication code for the location.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor_script.html#hmac SyntheticsMonitorScript#hmac}

---

### SyntheticsMultilocationAlertConditionConfig <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { SyntheticsMultilocationAlertConditionConfig } from '@cdktf/provider-newrelic'

const syntheticsMultilocationAlertConditionConfig: SyntheticsMultilocationAlertConditionConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `critical`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionConfig.property.critical"></a>

```typescript
public readonly critical: SyntheticsMultilocationAlertConditionCritical;
```

- *Type:* [`@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCritical`](#@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCritical)

critical block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_multilocation_alert_condition.html#critical SyntheticsMultilocationAlertCondition#critical}

---

##### `entities`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionConfig.property.entities"></a>

```typescript
public readonly entities: string[];
```

- *Type:* `string`[]

The GUIDs of the Synthetics monitors to alert on.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_multilocation_alert_condition.html#entities SyntheticsMultilocationAlertCondition#entities}

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The title of this condition.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_multilocation_alert_condition.html#name SyntheticsMultilocationAlertCondition#name}

---

##### `policyId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionConfig.property.policyId"></a>

```typescript
public readonly policyId: number;
```

- *Type:* `number`

The ID of the policy where this condition will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_multilocation_alert_condition.html#policy_id SyntheticsMultilocationAlertCondition#policy_id}

---

##### `violationTimeLimitSeconds`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionConfig.property.violationTimeLimitSeconds"></a>

```typescript
public readonly violationTimeLimitSeconds: number;
```

- *Type:* `number`

The maximum number of seconds a violation can remain open before being closed by the system.

Must be one of: 0, 3600, 7200, 14400, 28800, 43200, 86400

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_multilocation_alert_condition.html#violation_time_limit_seconds SyntheticsMultilocationAlertCondition#violation_time_limit_seconds}

---

##### `enabled`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Set whether to enable the alert condition. Defaults to true.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_multilocation_alert_condition.html#enabled SyntheticsMultilocationAlertCondition#enabled}

---

##### `runbookUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionConfig.property.runbookUrl"></a>

```typescript
public readonly runbookUrl: string;
```

- *Type:* `string`

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_multilocation_alert_condition.html#runbook_url SyntheticsMultilocationAlertCondition#runbook_url}

---

##### `warning`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionConfig.property.warning"></a>

```typescript
public readonly warning: SyntheticsMultilocationAlertConditionWarning;
```

- *Type:* [`@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarning`](#@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarning)

warning block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_multilocation_alert_condition.html#warning SyntheticsMultilocationAlertCondition#warning}

---

### SyntheticsMultilocationAlertConditionCritical <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCritical"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { SyntheticsMultilocationAlertConditionCritical } from '@cdktf/provider-newrelic'

const syntheticsMultilocationAlertConditionCritical: SyntheticsMultilocationAlertConditionCritical = { ... }
```

##### `threshold`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCritical.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* `number`

The minimum number of monitor locations that must be concurrently failing before a violation is opened.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_multilocation_alert_condition.html#threshold SyntheticsMultilocationAlertCondition#threshold}

---

### SyntheticsMultilocationAlertConditionWarning <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarning"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { SyntheticsMultilocationAlertConditionWarning } from '@cdktf/provider-newrelic'

const syntheticsMultilocationAlertConditionWarning: SyntheticsMultilocationAlertConditionWarning = { ... }
```

##### `threshold`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarning.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* `number`

The minimum number of monitor locations that must be concurrently failing before a violation is opened.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_multilocation_alert_condition.html#threshold SyntheticsMultilocationAlertCondition#threshold}

---

### SyntheticsSecureCredentialConfig <a name="@cdktf/provider-newrelic.SyntheticsSecureCredentialConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { SyntheticsSecureCredentialConfig } from '@cdktf/provider-newrelic'

const syntheticsSecureCredentialConfig: SyntheticsSecureCredentialConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredentialConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredentialConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredentialConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredentialConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `key`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredentialConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

The secure credential's key name.

Regardless of the case used in the configuration, the provider will provide an upcased key to the underlying API.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_secure_credential.html#key SyntheticsSecureCredential#key}

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredentialConfig.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

The secure credential's value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_secure_credential.html#value SyntheticsSecureCredential#value}

---

##### `createdAt`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredentialConfig.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* `string`

The time the secure credential was created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_secure_credential.html#created_at SyntheticsSecureCredential#created_at}

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredentialConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

The secure credential's description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_secure_credential.html#description SyntheticsSecureCredential#description}

---

##### `lastUpdated`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsSecureCredentialConfig.property.lastUpdated"></a>

```typescript
public readonly lastUpdated: string;
```

- *Type:* `string`

The time the secure credential was last updated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_secure_credential.html#last_updated SyntheticsSecureCredential#last_updated}

---

### WorkloadConfig <a name="@cdktf/provider-newrelic.WorkloadConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { WorkloadConfig } from '@cdktf/provider-newrelic'

const workloadConfig: WorkloadConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.WorkloadConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.WorkloadConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.WorkloadConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.WorkloadConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.WorkloadConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The workload's name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/workload.html#name Workload#name}

---

##### `accountId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.WorkloadConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

The New Relic account ID where you want to create the workload.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/workload.html#account_id Workload#account_id}

---

##### `entityGuids`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.WorkloadConfig.property.entityGuids"></a>

```typescript
public readonly entityGuids: string[];
```

- *Type:* `string`[]

A list of entity GUIDs manually assigned to this workload.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/workload.html#entity_guids Workload#entity_guids}

---

##### `entitySearchQuery`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.WorkloadConfig.property.entitySearchQuery"></a>

```typescript
public readonly entitySearchQuery: WorkloadEntitySearchQuery[];
```

- *Type:* [`@cdktf/provider-newrelic.WorkloadEntitySearchQuery`](#@cdktf/provider-newrelic.WorkloadEntitySearchQuery)[]

entity_search_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/workload.html#entity_search_query Workload#entity_search_query}

---

##### `scopeAccountIds`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.WorkloadConfig.property.scopeAccountIds"></a>

```typescript
public readonly scopeAccountIds: number[];
```

- *Type:* `number`[]

A list of account IDs that will be used to get entities from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/workload.html#scope_account_ids Workload#scope_account_ids}

---

### WorkloadEntitySearchQuery <a name="@cdktf/provider-newrelic.WorkloadEntitySearchQuery"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { WorkloadEntitySearchQuery } from '@cdktf/provider-newrelic'

const workloadEntitySearchQuery: WorkloadEntitySearchQuery = { ... }
```

##### `query`<sup>Required</sup> <a name="@cdktf/provider-newrelic.WorkloadEntitySearchQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* `string`

The query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/workload.html#query Workload#query}

---

## Classes <a name="Classes"></a>

### AlertChannelConfigAOutputReference <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.Initializer"></a>

```typescript
import { AlertChannelConfigAOutputReference } from '@cdktf/provider-newrelic'

new AlertChannelConfigAOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods"></a>

##### `resetApiKey` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetApiKey"></a>

```typescript
public resetApiKey()
```

##### `resetAuthPassword` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetAuthPassword"></a>

```typescript
public resetAuthPassword()
```

##### `resetAuthType` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetAuthType"></a>

```typescript
public resetAuthType()
```

##### `resetAuthUsername` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetAuthUsername"></a>

```typescript
public resetAuthUsername()
```

##### `resetBaseUrl` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetBaseUrl"></a>

```typescript
public resetBaseUrl()
```

##### `resetChannel` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetChannel"></a>

```typescript
public resetChannel()
```

##### `resetHeaders` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetHeaders"></a>

```typescript
public resetHeaders()
```

##### `resetHeadersString` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetHeadersString"></a>

```typescript
public resetHeadersString()
```

##### `resetIncludeJsonAttachment` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetIncludeJsonAttachment"></a>

```typescript
public resetIncludeJsonAttachment()
```

##### `resetKey` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetKey"></a>

```typescript
public resetKey()
```

##### `resetPayload` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetPayload"></a>

```typescript
public resetPayload()
```

##### `resetPayloadString` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetPayloadString"></a>

```typescript
public resetPayloadString()
```

##### `resetPayloadType` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetPayloadType"></a>

```typescript
public resetPayloadType()
```

##### `resetRecipients` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetRecipients"></a>

```typescript
public resetRecipients()
```

##### `resetRegion` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetRegion"></a>

```typescript
public resetRegion()
```

##### `resetRouteKey` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetRouteKey"></a>

```typescript
public resetRouteKey()
```

##### `resetServiceKey` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetServiceKey"></a>

```typescript
public resetServiceKey()
```

##### `resetTags` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetTags"></a>

```typescript
public resetTags()
```

##### `resetTeams` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetTeams"></a>

```typescript
public resetTeams()
```

##### `resetUrl` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetUrl"></a>

```typescript
public resetUrl()
```

##### `resetUserId` <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.resetUserId"></a>

```typescript
public resetUserId()
```


#### Properties <a name="Properties"></a>

##### `apiKeyInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.apiKeyInput"></a>

```typescript
public readonly apiKeyInput: string;
```

- *Type:* `string`

---

##### `authPasswordInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.authPasswordInput"></a>

```typescript
public readonly authPasswordInput: string;
```

- *Type:* `string`

---

##### `authTypeInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.authTypeInput"></a>

```typescript
public readonly authTypeInput: string;
```

- *Type:* `string`

---

##### `authUsernameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.authUsernameInput"></a>

```typescript
public readonly authUsernameInput: string;
```

- *Type:* `string`

---

##### `baseUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.baseUrlInput"></a>

```typescript
public readonly baseUrlInput: string;
```

- *Type:* `string`

---

##### `channelInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.channelInput"></a>

```typescript
public readonly channelInput: string;
```

- *Type:* `string`

---

##### `headersInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: IResolvable | {[ key: string ]: string};
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

---

##### `headersStringInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.headersStringInput"></a>

```typescript
public readonly headersStringInput: string;
```

- *Type:* `string`

---

##### `includeJsonAttachmentInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.includeJsonAttachmentInput"></a>

```typescript
public readonly includeJsonAttachmentInput: string;
```

- *Type:* `string`

---

##### `keyInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* `string`

---

##### `payloadInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.payloadInput"></a>

```typescript
public readonly payloadInput: IResolvable | {[ key: string ]: string};
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

---

##### `payloadStringInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.payloadStringInput"></a>

```typescript
public readonly payloadStringInput: string;
```

- *Type:* `string`

---

##### `payloadTypeInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.payloadTypeInput"></a>

```typescript
public readonly payloadTypeInput: string;
```

- *Type:* `string`

---

##### `recipientsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.recipientsInput"></a>

```typescript
public readonly recipientsInput: string;
```

- *Type:* `string`

---

##### `regionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* `string`

---

##### `routeKeyInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.routeKeyInput"></a>

```typescript
public readonly routeKeyInput: string;
```

- *Type:* `string`

---

##### `serviceKeyInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.serviceKeyInput"></a>

```typescript
public readonly serviceKeyInput: string;
```

- *Type:* `string`

---

##### `tagsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: string;
```

- *Type:* `string`

---

##### `teamsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.teamsInput"></a>

```typescript
public readonly teamsInput: string;
```

- *Type:* `string`

---

##### `urlInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* `string`

---

##### `userIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* `string`

---

##### `apiKey`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* `string`

---

##### `authPassword`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.authPassword"></a>

```typescript
public readonly authPassword: string;
```

- *Type:* `string`

---

##### `authType`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* `string`

---

##### `authUsername`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.authUsername"></a>

```typescript
public readonly authUsername: string;
```

- *Type:* `string`

---

##### `baseUrl`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* `string`

---

##### `channel`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* `string`

---

##### `headers`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.headers"></a>

```typescript
public readonly headers: IResolvable | {[ key: string ]: string};
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

---

##### `headersString`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.headersString"></a>

```typescript
public readonly headersString: string;
```

- *Type:* `string`

---

##### `includeJsonAttachment`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.includeJsonAttachment"></a>

```typescript
public readonly includeJsonAttachment: string;
```

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

---

##### `payload`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.payload"></a>

```typescript
public readonly payload: IResolvable | {[ key: string ]: string};
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

---

##### `payloadString`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.payloadString"></a>

```typescript
public readonly payloadString: string;
```

- *Type:* `string`

---

##### `payloadType`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.payloadType"></a>

```typescript
public readonly payloadType: string;
```

- *Type:* `string`

---

##### `recipients`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.recipients"></a>

```typescript
public readonly recipients: string;
```

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* `string`

---

##### `routeKey`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.routeKey"></a>

```typescript
public readonly routeKey: string;
```

- *Type:* `string`

---

##### `serviceKey`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.serviceKey"></a>

```typescript
public readonly serviceKey: string;
```

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.tags"></a>

```typescript
public readonly tags: string;
```

- *Type:* `string`

---

##### `teams`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.teams"></a>

```typescript
public readonly teams: string;
```

- *Type:* `string`

---

##### `url`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* `string`

---

##### `userId`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertChannelConfigAOutputReference.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* `string`

---


### AlertMutingRuleConditionOutputReference <a name="@cdktf/provider-newrelic.AlertMutingRuleConditionOutputReference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.AlertMutingRuleConditionOutputReference.Initializer"></a>

```typescript
import { AlertMutingRuleConditionOutputReference } from '@cdktf/provider-newrelic'

new AlertMutingRuleConditionOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConditionOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConditionOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConditionOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---



#### Properties <a name="Properties"></a>

##### `conditionsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConditionOutputReference.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: AlertMutingRuleConditionConditions[];
```

- *Type:* [`@cdktf/provider-newrelic.AlertMutingRuleConditionConditions`](#@cdktf/provider-newrelic.AlertMutingRuleConditionConditions)[]

---

##### `operatorInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConditionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* `string`

---

##### `conditions`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConditionOutputReference.property.conditions"></a>

```typescript
public readonly conditions: AlertMutingRuleConditionConditions[];
```

- *Type:* [`@cdktf/provider-newrelic.AlertMutingRuleConditionConditions`](#@cdktf/provider-newrelic.AlertMutingRuleConditionConditions)[]

---

##### `operator`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleConditionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* `string`

---


### AlertMutingRuleScheduleOutputReference <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.Initializer"></a>

```typescript
import { AlertMutingRuleScheduleOutputReference } from '@cdktf/provider-newrelic'

new AlertMutingRuleScheduleOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods"></a>

##### `resetEndRepeat` <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.resetEndRepeat"></a>

```typescript
public resetEndRepeat()
```

##### `resetEndTime` <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.resetEndTime"></a>

```typescript
public resetEndTime()
```

##### `resetRepeat` <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.resetRepeat"></a>

```typescript
public resetRepeat()
```

##### `resetRepeatCount` <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.resetRepeatCount"></a>

```typescript
public resetRepeatCount()
```

##### `resetStartTime` <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.resetStartTime"></a>

```typescript
public resetStartTime()
```

##### `resetWeeklyRepeatDays` <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.resetWeeklyRepeatDays"></a>

```typescript
public resetWeeklyRepeatDays()
```


#### Properties <a name="Properties"></a>

##### `endRepeatInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.property.endRepeatInput"></a>

```typescript
public readonly endRepeatInput: string;
```

- *Type:* `string`

---

##### `endTimeInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* `string`

---

##### `repeatCountInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.property.repeatCountInput"></a>

```typescript
public readonly repeatCountInput: number;
```

- *Type:* `number`

---

##### `repeatInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.property.repeatInput"></a>

```typescript
public readonly repeatInput: string;
```

- *Type:* `string`

---

##### `startTimeInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* `string`

---

##### `timeZoneInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* `string`

---

##### `weeklyRepeatDaysInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.property.weeklyRepeatDaysInput"></a>

```typescript
public readonly weeklyRepeatDaysInput: string[];
```

- *Type:* `string`[]

---

##### `timeZone`<sup>Required</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* `string`

---

##### `endRepeat`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.property.endRepeat"></a>

```typescript
public readonly endRepeat: string;
```

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* `string`

---

##### `repeat`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.property.repeat"></a>

```typescript
public readonly repeat: string;
```

- *Type:* `string`

---

##### `repeatCount`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.property.repeatCount"></a>

```typescript
public readonly repeatCount: number;
```

- *Type:* `number`

---

##### `startTime`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* `string`

---

##### `weeklyRepeatDays`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.AlertMutingRuleScheduleOutputReference.property.weeklyRepeatDays"></a>

```typescript
public readonly weeklyRepeatDays: string[];
```

- *Type:* `string`[]

---


### DashboardFilterOutputReference <a name="@cdktf/provider-newrelic.DashboardFilterOutputReference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.DashboardFilterOutputReference.Initializer"></a>

```typescript
import { DashboardFilterOutputReference } from '@cdktf/provider-newrelic'

new DashboardFilterOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardFilterOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardFilterOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardFilterOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods"></a>

##### `resetAttributes` <a name="@cdktf/provider-newrelic.DashboardFilterOutputReference.resetAttributes"></a>

```typescript
public resetAttributes()
```


#### Properties <a name="Properties"></a>

##### `attributesInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardFilterOutputReference.property.attributesInput"></a>

```typescript
public readonly attributesInput: string[];
```

- *Type:* `string`[]

---

##### `eventTypesInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardFilterOutputReference.property.eventTypesInput"></a>

```typescript
public readonly eventTypesInput: string[];
```

- *Type:* `string`[]

---

##### `eventTypes`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardFilterOutputReference.property.eventTypes"></a>

```typescript
public readonly eventTypes: string[];
```

- *Type:* `string`[]

---

##### `attributes`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardFilterOutputReference.property.attributes"></a>

```typescript
public readonly attributes: string[];
```

- *Type:* `string`[]

---


### DashboardWidgetCompareWithPresentationOutputReference <a name="@cdktf/provider-newrelic.DashboardWidgetCompareWithPresentationOutputReference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.DashboardWidgetCompareWithPresentationOutputReference.Initializer"></a>

```typescript
import { DashboardWidgetCompareWithPresentationOutputReference } from '@cdktf/provider-newrelic'

new DashboardWidgetCompareWithPresentationOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardWidgetCompareWithPresentationOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardWidgetCompareWithPresentationOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardWidgetCompareWithPresentationOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---



#### Properties <a name="Properties"></a>

##### `colorInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidgetCompareWithPresentationOutputReference.property.colorInput"></a>

```typescript
public readonly colorInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DashboardWidgetCompareWithPresentationOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `color`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardWidgetCompareWithPresentationOutputReference.property.color"></a>

```typescript
public readonly color: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DashboardWidgetCompareWithPresentationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---


### DataNewrelicAlertChannelConfigA <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA"></a>

#### Initializers <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.Initializer"></a>

```typescript
import { DataNewrelicAlertChannelConfigA } from '@cdktf/provider-newrelic'

new DataNewrelicAlertChannelConfigA(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `apiKey`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* `string`

---

##### `authPassword`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.authPassword"></a>

```typescript
public readonly authPassword: string;
```

- *Type:* `string`

---

##### `authType`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* `string`

---

##### `authUsername`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.authUsername"></a>

```typescript
public readonly authUsername: string;
```

- *Type:* `string`

---

##### `baseUrl`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* `string`

---

##### `channel`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* `string`

---

##### `headers`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.headers"></a>

```typescript
public readonly headers: any;
```

- *Type:* `any`

---

##### `includeJsonAttachment`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.includeJsonAttachment"></a>

```typescript
public readonly includeJsonAttachment: string;
```

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

---

##### `payload`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.payload"></a>

```typescript
public readonly payload: any;
```

- *Type:* `any`

---

##### `payloadType`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.payloadType"></a>

```typescript
public readonly payloadType: string;
```

- *Type:* `string`

---

##### `recipients`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.recipients"></a>

```typescript
public readonly recipients: string;
```

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* `string`

---

##### `routeKey`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.routeKey"></a>

```typescript
public readonly routeKey: string;
```

- *Type:* `string`

---

##### `serviceKey`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.serviceKey"></a>

```typescript
public readonly serviceKey: string;
```

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.tags"></a>

```typescript
public readonly tags: string;
```

- *Type:* `string`

---

##### `teams`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.teams"></a>

```typescript
public readonly teams: string;
```

- *Type:* `string`

---

##### `url`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicAlertChannelConfigA.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* `string`

---


### DataNewrelicEntityTagOutputReference <a name="@cdktf/provider-newrelic.DataNewrelicEntityTagOutputReference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.DataNewrelicEntityTagOutputReference.Initializer"></a>

```typescript
import { DataNewrelicEntityTagOutputReference } from '@cdktf/provider-newrelic'

new DataNewrelicEntityTagOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityTagOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityTagOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityTagOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---



#### Properties <a name="Properties"></a>

##### `keyInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityTagOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* `string`

---

##### `valueInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityTagOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityTagOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-newrelic.DataNewrelicEntityTagOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

---


### EntityTagsTimeoutsOutputReference <a name="@cdktf/provider-newrelic.EntityTagsTimeoutsOutputReference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.EntityTagsTimeoutsOutputReference.Initializer"></a>

```typescript
import { EntityTagsTimeoutsOutputReference } from '@cdktf/provider-newrelic'

new EntityTagsTimeoutsOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EntityTagsTimeoutsOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EntityTagsTimeoutsOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.EntityTagsTimeoutsOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods"></a>

##### `resetCreate` <a name="@cdktf/provider-newrelic.EntityTagsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate()
```


#### Properties <a name="Properties"></a>

##### `createInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EntityTagsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* `string`

---

##### `create`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.EntityTagsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* `string`

---


### InfraAlertConditionCriticalOutputReference <a name="@cdktf/provider-newrelic.InfraAlertConditionCriticalOutputReference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.InfraAlertConditionCriticalOutputReference.Initializer"></a>

```typescript
import { InfraAlertConditionCriticalOutputReference } from '@cdktf/provider-newrelic'

new InfraAlertConditionCriticalOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionCriticalOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionCriticalOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionCriticalOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods"></a>

##### `resetTimeFunction` <a name="@cdktf/provider-newrelic.InfraAlertConditionCriticalOutputReference.resetTimeFunction"></a>

```typescript
public resetTimeFunction()
```

##### `resetValue` <a name="@cdktf/provider-newrelic.InfraAlertConditionCriticalOutputReference.resetValue"></a>

```typescript
public resetValue()
```


#### Properties <a name="Properties"></a>

##### `durationInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionCriticalOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: number;
```

- *Type:* `number`

---

##### `timeFunctionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionCriticalOutputReference.property.timeFunctionInput"></a>

```typescript
public readonly timeFunctionInput: string;
```

- *Type:* `string`

---

##### `valueInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionCriticalOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* `number`

---

##### `duration`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionCriticalOutputReference.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* `number`

---

##### `timeFunction`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionCriticalOutputReference.property.timeFunction"></a>

```typescript
public readonly timeFunction: string;
```

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionCriticalOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* `number`

---


### InfraAlertConditionWarningOutputReference <a name="@cdktf/provider-newrelic.InfraAlertConditionWarningOutputReference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.InfraAlertConditionWarningOutputReference.Initializer"></a>

```typescript
import { InfraAlertConditionWarningOutputReference } from '@cdktf/provider-newrelic'

new InfraAlertConditionWarningOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionWarningOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionWarningOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionWarningOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods"></a>

##### `resetTimeFunction` <a name="@cdktf/provider-newrelic.InfraAlertConditionWarningOutputReference.resetTimeFunction"></a>

```typescript
public resetTimeFunction()
```

##### `resetValue` <a name="@cdktf/provider-newrelic.InfraAlertConditionWarningOutputReference.resetValue"></a>

```typescript
public resetValue()
```


#### Properties <a name="Properties"></a>

##### `durationInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionWarningOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: number;
```

- *Type:* `number`

---

##### `timeFunctionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionWarningOutputReference.property.timeFunctionInput"></a>

```typescript
public readonly timeFunctionInput: string;
```

- *Type:* `string`

---

##### `valueInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionWarningOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* `number`

---

##### `duration`<sup>Required</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionWarningOutputReference.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* `number`

---

##### `timeFunction`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionWarningOutputReference.property.timeFunction"></a>

```typescript
public readonly timeFunction: string;
```

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.InfraAlertConditionWarningOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* `number`

---


### NrqlAlertConditionCriticalOutputReference <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.Initializer"></a>

```typescript
import { NrqlAlertConditionCriticalOutputReference } from '@cdktf/provider-newrelic'

new NrqlAlertConditionCriticalOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods"></a>

##### `resetDuration` <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.resetDuration"></a>

```typescript
public resetDuration()
```

##### `resetOperator` <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.resetOperator"></a>

```typescript
public resetOperator()
```

##### `resetThresholdDuration` <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.resetThresholdDuration"></a>

```typescript
public resetThresholdDuration()
```

##### `resetThresholdOccurrences` <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.resetThresholdOccurrences"></a>

```typescript
public resetThresholdOccurrences()
```

##### `resetTimeFunction` <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.resetTimeFunction"></a>

```typescript
public resetTimeFunction()
```


#### Properties <a name="Properties"></a>

##### `durationInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: number;
```

- *Type:* `number`

---

##### `operatorInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* `string`

---

##### `thresholdDurationInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.property.thresholdDurationInput"></a>

```typescript
public readonly thresholdDurationInput: number;
```

- *Type:* `number`

---

##### `thresholdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* `number`

---

##### `thresholdOccurrencesInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.property.thresholdOccurrencesInput"></a>

```typescript
public readonly thresholdOccurrencesInput: string;
```

- *Type:* `string`

---

##### `timeFunctionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.property.timeFunctionInput"></a>

```typescript
public readonly timeFunctionInput: string;
```

- *Type:* `string`

---

##### `threshold`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* `number`

---

##### `duration`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* `number`

---

##### `operator`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* `string`

---

##### `thresholdDuration`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.property.thresholdDuration"></a>

```typescript
public readonly thresholdDuration: number;
```

- *Type:* `number`

---

##### `thresholdOccurrences`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.property.thresholdOccurrences"></a>

```typescript
public readonly thresholdOccurrences: string;
```

- *Type:* `string`

---

##### `timeFunction`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionCriticalOutputReference.property.timeFunction"></a>

```typescript
public readonly timeFunction: string;
```

- *Type:* `string`

---


### NrqlAlertConditionNrqlOutputReference <a name="@cdktf/provider-newrelic.NrqlAlertConditionNrqlOutputReference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.NrqlAlertConditionNrqlOutputReference.Initializer"></a>

```typescript
import { NrqlAlertConditionNrqlOutputReference } from '@cdktf/provider-newrelic'

new NrqlAlertConditionNrqlOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionNrqlOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionNrqlOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionNrqlOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods"></a>

##### `resetEvaluationOffset` <a name="@cdktf/provider-newrelic.NrqlAlertConditionNrqlOutputReference.resetEvaluationOffset"></a>

```typescript
public resetEvaluationOffset()
```

##### `resetSinceValue` <a name="@cdktf/provider-newrelic.NrqlAlertConditionNrqlOutputReference.resetSinceValue"></a>

```typescript
public resetSinceValue()
```


#### Properties <a name="Properties"></a>

##### `evaluationOffsetInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionNrqlOutputReference.property.evaluationOffsetInput"></a>

```typescript
public readonly evaluationOffsetInput: number;
```

- *Type:* `number`

---

##### `queryInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionNrqlOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* `string`

---

##### `sinceValueInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionNrqlOutputReference.property.sinceValueInput"></a>

```typescript
public readonly sinceValueInput: string;
```

- *Type:* `string`

---

##### `query`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionNrqlOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* `string`

---

##### `evaluationOffset`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionNrqlOutputReference.property.evaluationOffset"></a>

```typescript
public readonly evaluationOffset: number;
```

- *Type:* `number`

---

##### `sinceValue`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionNrqlOutputReference.property.sinceValue"></a>

```typescript
public readonly sinceValue: string;
```

- *Type:* `string`

---


### NrqlAlertConditionWarningOutputReference <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.Initializer"></a>

```typescript
import { NrqlAlertConditionWarningOutputReference } from '@cdktf/provider-newrelic'

new NrqlAlertConditionWarningOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods"></a>

##### `resetDuration` <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.resetDuration"></a>

```typescript
public resetDuration()
```

##### `resetOperator` <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.resetOperator"></a>

```typescript
public resetOperator()
```

##### `resetThresholdDuration` <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.resetThresholdDuration"></a>

```typescript
public resetThresholdDuration()
```

##### `resetThresholdOccurrences` <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.resetThresholdOccurrences"></a>

```typescript
public resetThresholdOccurrences()
```

##### `resetTimeFunction` <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.resetTimeFunction"></a>

```typescript
public resetTimeFunction()
```


#### Properties <a name="Properties"></a>

##### `durationInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: number;
```

- *Type:* `number`

---

##### `operatorInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* `string`

---

##### `thresholdDurationInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.property.thresholdDurationInput"></a>

```typescript
public readonly thresholdDurationInput: number;
```

- *Type:* `number`

---

##### `thresholdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* `number`

---

##### `thresholdOccurrencesInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.property.thresholdOccurrencesInput"></a>

```typescript
public readonly thresholdOccurrencesInput: string;
```

- *Type:* `string`

---

##### `timeFunctionInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.property.timeFunctionInput"></a>

```typescript
public readonly timeFunctionInput: string;
```

- *Type:* `string`

---

##### `threshold`<sup>Required</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* `number`

---

##### `duration`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* `number`

---

##### `operator`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* `string`

---

##### `thresholdDuration`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.property.thresholdDuration"></a>

```typescript
public readonly thresholdDuration: number;
```

- *Type:* `number`

---

##### `thresholdOccurrences`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.property.thresholdOccurrences"></a>

```typescript
public readonly thresholdOccurrences: string;
```

- *Type:* `string`

---

##### `timeFunction`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.NrqlAlertConditionWarningOutputReference.property.timeFunction"></a>

```typescript
public readonly timeFunction: string;
```

- *Type:* `string`

---


### ServiceLevelEventsBadEventsOutputReference <a name="@cdktf/provider-newrelic.ServiceLevelEventsBadEventsOutputReference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.ServiceLevelEventsBadEventsOutputReference.Initializer"></a>

```typescript
import { ServiceLevelEventsBadEventsOutputReference } from '@cdktf/provider-newrelic'

new ServiceLevelEventsBadEventsOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsBadEventsOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsBadEventsOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsBadEventsOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods"></a>

##### `resetWhere` <a name="@cdktf/provider-newrelic.ServiceLevelEventsBadEventsOutputReference.resetWhere"></a>

```typescript
public resetWhere()
```


#### Properties <a name="Properties"></a>

##### `fromInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsBadEventsOutputReference.property.fromInput"></a>

```typescript
public readonly fromInput: string;
```

- *Type:* `string`

---

##### `whereInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsBadEventsOutputReference.property.whereInput"></a>

```typescript
public readonly whereInput: string;
```

- *Type:* `string`

---

##### `from`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsBadEventsOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* `string`

---

##### `where`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsBadEventsOutputReference.property.where"></a>

```typescript
public readonly where: string;
```

- *Type:* `string`

---


### ServiceLevelEventsGoodEventsOutputReference <a name="@cdktf/provider-newrelic.ServiceLevelEventsGoodEventsOutputReference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.ServiceLevelEventsGoodEventsOutputReference.Initializer"></a>

```typescript
import { ServiceLevelEventsGoodEventsOutputReference } from '@cdktf/provider-newrelic'

new ServiceLevelEventsGoodEventsOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsGoodEventsOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsGoodEventsOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsGoodEventsOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods"></a>

##### `resetWhere` <a name="@cdktf/provider-newrelic.ServiceLevelEventsGoodEventsOutputReference.resetWhere"></a>

```typescript
public resetWhere()
```


#### Properties <a name="Properties"></a>

##### `fromInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsGoodEventsOutputReference.property.fromInput"></a>

```typescript
public readonly fromInput: string;
```

- *Type:* `string`

---

##### `whereInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsGoodEventsOutputReference.property.whereInput"></a>

```typescript
public readonly whereInput: string;
```

- *Type:* `string`

---

##### `from`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsGoodEventsOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* `string`

---

##### `where`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsGoodEventsOutputReference.property.where"></a>

```typescript
public readonly where: string;
```

- *Type:* `string`

---


### ServiceLevelEventsOutputReference <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.Initializer"></a>

```typescript
import { ServiceLevelEventsOutputReference } from '@cdktf/provider-newrelic'

new ServiceLevelEventsOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods"></a>

##### `putBadEvents` <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.putBadEvents"></a>

```typescript
public putBadEvents(value?: ServiceLevelEventsBadEvents)
```

###### `value`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.parameter.value"></a>

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelEventsBadEvents`](#@cdktf/provider-newrelic.ServiceLevelEventsBadEvents)

---

##### `putGoodEvents` <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.putGoodEvents"></a>

```typescript
public putGoodEvents(value?: ServiceLevelEventsGoodEvents)
```

###### `value`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.parameter.value"></a>

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelEventsGoodEvents`](#@cdktf/provider-newrelic.ServiceLevelEventsGoodEvents)

---

##### `putValidEvents` <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.putValidEvents"></a>

```typescript
public putValidEvents(value: ServiceLevelEventsValidEvents)
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.parameter.value"></a>

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelEventsValidEvents`](#@cdktf/provider-newrelic.ServiceLevelEventsValidEvents)

---

##### `resetBadEvents` <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.resetBadEvents"></a>

```typescript
public resetBadEvents()
```

##### `resetGoodEvents` <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.resetGoodEvents"></a>

```typescript
public resetGoodEvents()
```


#### Properties <a name="Properties"></a>

##### `badEvents`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.property.badEvents"></a>

```typescript
public readonly badEvents: ServiceLevelEventsBadEventsOutputReference;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelEventsBadEventsOutputReference`](#@cdktf/provider-newrelic.ServiceLevelEventsBadEventsOutputReference)

---

##### `goodEvents`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.property.goodEvents"></a>

```typescript
public readonly goodEvents: ServiceLevelEventsGoodEventsOutputReference;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelEventsGoodEventsOutputReference`](#@cdktf/provider-newrelic.ServiceLevelEventsGoodEventsOutputReference)

---

##### `validEvents`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.property.validEvents"></a>

```typescript
public readonly validEvents: ServiceLevelEventsValidEventsOutputReference;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelEventsValidEventsOutputReference`](#@cdktf/provider-newrelic.ServiceLevelEventsValidEventsOutputReference)

---

##### `accountIdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* `number`

---

##### `badEventsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.property.badEventsInput"></a>

```typescript
public readonly badEventsInput: ServiceLevelEventsBadEvents;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelEventsBadEvents`](#@cdktf/provider-newrelic.ServiceLevelEventsBadEvents)

---

##### `goodEventsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.property.goodEventsInput"></a>

```typescript
public readonly goodEventsInput: ServiceLevelEventsGoodEvents;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelEventsGoodEvents`](#@cdktf/provider-newrelic.ServiceLevelEventsGoodEvents)

---

##### `validEventsInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.property.validEventsInput"></a>

```typescript
public readonly validEventsInput: ServiceLevelEventsValidEvents;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelEventsValidEvents`](#@cdktf/provider-newrelic.ServiceLevelEventsValidEvents)

---

##### `accountId`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsOutputReference.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* `number`

---


### ServiceLevelEventsValidEventsOutputReference <a name="@cdktf/provider-newrelic.ServiceLevelEventsValidEventsOutputReference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.ServiceLevelEventsValidEventsOutputReference.Initializer"></a>

```typescript
import { ServiceLevelEventsValidEventsOutputReference } from '@cdktf/provider-newrelic'

new ServiceLevelEventsValidEventsOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsValidEventsOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsValidEventsOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsValidEventsOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods"></a>

##### `resetWhere` <a name="@cdktf/provider-newrelic.ServiceLevelEventsValidEventsOutputReference.resetWhere"></a>

```typescript
public resetWhere()
```


#### Properties <a name="Properties"></a>

##### `fromInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsValidEventsOutputReference.property.fromInput"></a>

```typescript
public readonly fromInput: string;
```

- *Type:* `string`

---

##### `whereInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsValidEventsOutputReference.property.whereInput"></a>

```typescript
public readonly whereInput: string;
```

- *Type:* `string`

---

##### `from`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsValidEventsOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* `string`

---

##### `where`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelEventsValidEventsOutputReference.property.where"></a>

```typescript
public readonly where: string;
```

- *Type:* `string`

---


### ServiceLevelObjectiveTimeWindowOutputReference <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowOutputReference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowOutputReference.Initializer"></a>

```typescript
import { ServiceLevelObjectiveTimeWindowOutputReference } from '@cdktf/provider-newrelic'

new ServiceLevelObjectiveTimeWindowOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods"></a>

##### `putRolling` <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowOutputReference.putRolling"></a>

```typescript
public putRolling(value: ServiceLevelObjectiveTimeWindowRolling)
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowOutputReference.parameter.value"></a>

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRolling`](#@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRolling)

---


#### Properties <a name="Properties"></a>

##### `rolling`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowOutputReference.property.rolling"></a>

```typescript
public readonly rolling: ServiceLevelObjectiveTimeWindowRollingOutputReference;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRollingOutputReference`](#@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRollingOutputReference)

---

##### `rollingInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowOutputReference.property.rollingInput"></a>

```typescript
public readonly rollingInput: ServiceLevelObjectiveTimeWindowRolling;
```

- *Type:* [`@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRolling`](#@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRolling)

---


### ServiceLevelObjectiveTimeWindowRollingOutputReference <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRollingOutputReference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRollingOutputReference.Initializer"></a>

```typescript
import { ServiceLevelObjectiveTimeWindowRollingOutputReference } from '@cdktf/provider-newrelic'

new ServiceLevelObjectiveTimeWindowRollingOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRollingOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRollingOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRollingOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---



#### Properties <a name="Properties"></a>

##### `countInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* `number`

---

##### `unitInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* `string`

---

##### `count`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `unit`<sup>Required</sup> <a name="@cdktf/provider-newrelic.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* `string`

---


### SyntheticsMultilocationAlertConditionCriticalOutputReference <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCriticalOutputReference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCriticalOutputReference.Initializer"></a>

```typescript
import { SyntheticsMultilocationAlertConditionCriticalOutputReference } from '@cdktf/provider-newrelic'

new SyntheticsMultilocationAlertConditionCriticalOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCriticalOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCriticalOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCriticalOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---



#### Properties <a name="Properties"></a>

##### `thresholdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* `number`

---

##### `threshold`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* `number`

---


### SyntheticsMultilocationAlertConditionWarningOutputReference <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarningOutputReference"></a>

#### Initializers <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarningOutputReference.Initializer"></a>

```typescript
import { SyntheticsMultilocationAlertConditionWarningOutputReference } from '@cdktf/provider-newrelic'

new SyntheticsMultilocationAlertConditionWarningOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarningOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarningOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarningOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---



#### Properties <a name="Properties"></a>

##### `thresholdInput`<sup>Optional</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarningOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* `number`

---

##### `threshold`<sup>Required</sup> <a name="@cdktf/provider-newrelic.SyntheticsMultilocationAlertConditionWarningOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* `number`

---



