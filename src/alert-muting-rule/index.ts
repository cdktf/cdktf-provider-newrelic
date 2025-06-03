/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/resources/alert_muting_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertMutingRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account id of the MutingRule..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/resources/alert_muting_rule#account_id AlertMutingRule#account_id}
  */
  readonly accountId?: number;
  /**
  * The action when the muting rule window is ended or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/resources/alert_muting_rule#action_on_muting_rule_window_ended AlertMutingRule#action_on_muting_rule_window_ended}
  */
  readonly actionOnMutingRuleWindowEnded?: string;
  /**
  * The description of the MutingRule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/resources/alert_muting_rule#description AlertMutingRule#description}
  */
  readonly description?: string;
  /**
  * Whether the MutingRule is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/resources/alert_muting_rule#enabled AlertMutingRule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/resources/alert_muting_rule#id AlertMutingRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the MutingRule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/resources/alert_muting_rule#name AlertMutingRule#name}
  */
  readonly name: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/resources/alert_muting_rule#condition AlertMutingRule#condition}
  */
  readonly condition: AlertMutingRuleCondition;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/resources/alert_muting_rule#schedule AlertMutingRule#schedule}
  */
  readonly schedule?: AlertMutingRuleSchedule;
}
export interface AlertMutingRuleConditionConditions {
  /**
  * The attribute on an incident.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/resources/alert_muting_rule#attribute AlertMutingRule#attribute}
  */
  readonly attribute: string;
  /**
  * The operator used to compare the attribute's value with the supplied value(s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/resources/alert_muting_rule#operator AlertMutingRule#operator}
  */
  readonly operator: string;
  /**
  * The value(s) to compare against the attribute's value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/resources/alert_muting_rule#values AlertMutingRule#values}
  */
  readonly values: string[];
}

export function alertMutingRuleConditionConditionsToTerraform(struct?: AlertMutingRuleConditionConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function alertMutingRuleConditionConditionsToHclTerraform(struct?: AlertMutingRuleConditionConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertMutingRuleConditionConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AlertMutingRuleConditionConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertMutingRuleConditionConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class AlertMutingRuleConditionConditionsList extends cdktf.ComplexList {
  public internalValue? : AlertMutingRuleConditionConditions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AlertMutingRuleConditionConditionsOutputReference {
    return new AlertMutingRuleConditionConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertMutingRuleCondition {
  /**
  * The operator used to combine all the MutingRuleConditions within the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/resources/alert_muting_rule#operator AlertMutingRule#operator}
  */
  readonly operator: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/resources/alert_muting_rule#conditions AlertMutingRule#conditions}
  */
  readonly conditions: AlertMutingRuleConditionConditions[] | cdktf.IResolvable;
}

export function alertMutingRuleConditionToTerraform(struct?: AlertMutingRuleConditionOutputReference | AlertMutingRuleCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    conditions: cdktf.listMapper(alertMutingRuleConditionConditionsToTerraform, true)(struct!.conditions),
  }
}


export function alertMutingRuleConditionToHclTerraform(struct?: AlertMutingRuleConditionOutputReference | AlertMutingRuleCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditions: {
      value: cdktf.listMapperHcl(alertMutingRuleConditionConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "AlertMutingRuleConditionConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertMutingRuleConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertMutingRuleCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertMutingRuleCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._conditions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._conditions.internalValue = value.conditions;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new AlertMutingRuleConditionConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: AlertMutingRuleConditionConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}
export interface AlertMutingRuleSchedule {
  /**
  * The datetime stamp when the MutingRule schedule should stop repeating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/resources/alert_muting_rule#end_repeat AlertMutingRule#end_repeat}
  */
  readonly endRepeat?: string;
  /**
  * The datetime stamp representing when the MutingRule should end.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/resources/alert_muting_rule#end_time AlertMutingRule#end_time}
  */
  readonly endTime?: string;
  /**
  * The frequency the MutingRule schedule repeats. One of [DAILY, WEEKLY, MONTHLY]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/resources/alert_muting_rule#repeat AlertMutingRule#repeat}
  */
  readonly repeat?: string;
  /**
  * The number of times the MutingRule schedule should repeat.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/resources/alert_muting_rule#repeat_count AlertMutingRule#repeat_count}
  */
  readonly repeatCount?: number;
  /**
  * The datetime stamp representing when the MutingRule should start.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/resources/alert_muting_rule#start_time AlertMutingRule#start_time}
  */
  readonly startTime?: string;
  /**
  * The time zone that applies to the MutingRule schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/resources/alert_muting_rule#time_zone AlertMutingRule#time_zone}
  */
  readonly timeZone: string;
  /**
  * The day(s) of the week that a MutingRule should repeat when the repeat field is set to WEEKLY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/resources/alert_muting_rule#weekly_repeat_days AlertMutingRule#weekly_repeat_days}
  */
  readonly weeklyRepeatDays?: string[];
}

export function alertMutingRuleScheduleToTerraform(struct?: AlertMutingRuleScheduleOutputReference | AlertMutingRuleSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_repeat: cdktf.stringToTerraform(struct!.endRepeat),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    repeat: cdktf.stringToTerraform(struct!.repeat),
    repeat_count: cdktf.numberToTerraform(struct!.repeatCount),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    weekly_repeat_days: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weeklyRepeatDays),
  }
}


export function alertMutingRuleScheduleToHclTerraform(struct?: AlertMutingRuleScheduleOutputReference | AlertMutingRuleSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_repeat: {
      value: cdktf.stringToHclTerraform(struct!.endRepeat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repeat: {
      value: cdktf.stringToHclTerraform(struct!.repeat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repeat_count: {
      value: cdktf.numberToHclTerraform(struct!.repeatCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weekly_repeat_days: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.weeklyRepeatDays),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertMutingRuleScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertMutingRuleSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endRepeat !== undefined) {
      hasAnyValues = true;
      internalValueResult.endRepeat = this._endRepeat;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._repeat !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeat = this._repeat;
    }
    if (this._repeatCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatCount = this._repeatCount;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._weeklyRepeatDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklyRepeatDays = this._weeklyRepeatDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertMutingRuleSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endRepeat = undefined;
      this._endTime = undefined;
      this._repeat = undefined;
      this._repeatCount = undefined;
      this._startTime = undefined;
      this._timeZone = undefined;
      this._weeklyRepeatDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endRepeat = value.endRepeat;
      this._endTime = value.endTime;
      this._repeat = value.repeat;
      this._repeatCount = value.repeatCount;
      this._startTime = value.startTime;
      this._timeZone = value.timeZone;
      this._weeklyRepeatDays = value.weeklyRepeatDays;
    }
  }

  // end_repeat - computed: false, optional: true, required: false
  private _endRepeat?: string; 
  public get endRepeat() {
    return this.getStringAttribute('end_repeat');
  }
  public set endRepeat(value: string) {
    this._endRepeat = value;
  }
  public resetEndRepeat() {
    this._endRepeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endRepeatInput() {
    return this._endRepeat;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // repeat - computed: false, optional: true, required: false
  private _repeat?: string; 
  public get repeat() {
    return this.getStringAttribute('repeat');
  }
  public set repeat(value: string) {
    this._repeat = value;
  }
  public resetRepeat() {
    this._repeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatInput() {
    return this._repeat;
  }

  // repeat_count - computed: false, optional: true, required: false
  private _repeatCount?: number; 
  public get repeatCount() {
    return this.getNumberAttribute('repeat_count');
  }
  public set repeatCount(value: number) {
    this._repeatCount = value;
  }
  public resetRepeatCount() {
    this._repeatCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatCountInput() {
    return this._repeatCount;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // weekly_repeat_days - computed: false, optional: true, required: false
  private _weeklyRepeatDays?: string[]; 
  public get weeklyRepeatDays() {
    return cdktf.Fn.tolist(this.getListAttribute('weekly_repeat_days'));
  }
  public set weeklyRepeatDays(value: string[]) {
    this._weeklyRepeatDays = value;
  }
  public resetWeeklyRepeatDays() {
    this._weeklyRepeatDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyRepeatDaysInput() {
    return this._weeklyRepeatDays;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/resources/alert_muting_rule newrelic_alert_muting_rule}
*/
export class AlertMutingRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_alert_muting_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertMutingRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertMutingRule to import
  * @param importFromId The id of the existing AlertMutingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/resources/alert_muting_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertMutingRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_alert_muting_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/resources/alert_muting_rule newrelic_alert_muting_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertMutingRuleConfig
  */
  public constructor(scope: Construct, id: string, config: AlertMutingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_alert_muting_rule',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.62.0',
        providerVersionConstraint: '~> 3.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._actionOnMutingRuleWindowEnded = config.actionOnMutingRuleWindowEnded;
    this._description = config.description;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._condition.internalValue = config.condition;
    this._schedule.internalValue = config.schedule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: number; 
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }
  public set accountId(value: number) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // action_on_muting_rule_window_ended - computed: true, optional: true, required: false
  private _actionOnMutingRuleWindowEnded?: string; 
  public get actionOnMutingRuleWindowEnded() {
    return this.getStringAttribute('action_on_muting_rule_window_ended');
  }
  public set actionOnMutingRuleWindowEnded(value: string) {
    this._actionOnMutingRuleWindowEnded = value;
  }
  public resetActionOnMutingRuleWindowEnded() {
    this._actionOnMutingRuleWindowEnded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionOnMutingRuleWindowEndedInput() {
    return this._actionOnMutingRuleWindowEnded;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new AlertMutingRuleConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: AlertMutingRuleCondition) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new AlertMutingRuleScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: AlertMutingRuleSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      action_on_muting_rule_window_ended: cdktf.stringToTerraform(this._actionOnMutingRuleWindowEnded),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      condition: alertMutingRuleConditionToTerraform(this._condition.internalValue),
      schedule: alertMutingRuleScheduleToTerraform(this._schedule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.numberToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      action_on_muting_rule_window_ended: {
        value: cdktf.stringToHclTerraform(this._actionOnMutingRuleWindowEnded),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      condition: {
        value: alertMutingRuleConditionToHclTerraform(this._condition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertMutingRuleConditionList",
      },
      schedule: {
        value: alertMutingRuleScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertMutingRuleScheduleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
