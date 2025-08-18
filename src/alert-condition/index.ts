/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/alert_condition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertConditionConfig extends cdktf.TerraformMetaArguments {
  /**
  * One of (application, instance). Choose application for most scenarios. If you are using the JVM plugin in New Relic, the instance setting allows your condition to trigger for specific app instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/alert_condition#condition_scope AlertCondition#condition_scope}
  */
  readonly conditionScope?: string;
  /**
  * Whether the condition is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/alert_condition#enabled AlertCondition#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The instance IDs associated with this condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/alert_condition#entities AlertCondition#entities}
  */
  readonly entities: number[];
  /**
  * A valid Garbage Collection metric e.g. GC/G1 Young Generation. This is required if you are using apm_jvm_metric with gc_cpu_time condition type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/alert_condition#gc_metric AlertCondition#gc_metric}
  */
  readonly gcMetric?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/alert_condition#id AlertCondition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The metric field accepts parameters based on the type set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/alert_condition#metric AlertCondition#metric}
  */
  readonly metric: string;
  /**
  * The title of the condition. Must be between 1 and 128 characters, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/alert_condition#name AlertCondition#name}
  */
  readonly name: string;
  /**
  * The ID of the policy where this condition should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/alert_condition#policy_id AlertCondition#policy_id}
  */
  readonly policyId: number;
  /**
  * Runbook URL to display in notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/alert_condition#runbook_url AlertCondition#runbook_url}
  */
  readonly runbookUrl?: string;
  /**
  * The type of condition. One of: (apm_jvm_metric, apm_kt_metric, browser_metric, mobile_metric, servers_metric, apm_app_metric).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/alert_condition#type AlertCondition#type}
  */
  readonly type: string;
  /**
  * A custom metric to be evaluated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/alert_condition#user_defined_metric AlertCondition#user_defined_metric}
  */
  readonly userDefinedMetric?: string;
  /**
  * One of: (average, min, max, total, sample_size, percent, rate).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/alert_condition#user_defined_value_function AlertCondition#user_defined_value_function}
  */
  readonly userDefinedValueFunction?: string;
  /**
  * Automatically close instance-based incidents, including JVM health metric incidents, after the number of hours specified. Must be between 1 and 720 hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/alert_condition#violation_close_timer AlertCondition#violation_close_timer}
  */
  readonly violationCloseTimer?: number;
  /**
  * term block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/alert_condition#term AlertCondition#term}
  */
  readonly term: AlertConditionTerm[] | cdktf.IResolvable;
}
export interface AlertConditionTerm {
  /**
  * In minutes, must be in the range of 5 to 120, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/alert_condition#duration AlertCondition#duration}
  */
  readonly duration: number;
  /**
  * One of (above, below, equal). Defaults to equal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/alert_condition#operator AlertCondition#operator}
  */
  readonly operator?: string;
  /**
  * One of (critical, warning). Defaults to critical.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/alert_condition#priority AlertCondition#priority}
  */
  readonly priority?: string;
  /**
  * Must be 0 or greater.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/alert_condition#threshold AlertCondition#threshold}
  */
  readonly threshold: number;
  /**
  * One of (all, any).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/alert_condition#time_function AlertCondition#time_function}
  */
  readonly timeFunction: string;
}

export function alertConditionTermToTerraform(struct?: AlertConditionTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    operator: cdktf.stringToTerraform(struct!.operator),
    priority: cdktf.stringToTerraform(struct!.priority),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    time_function: cdktf.stringToTerraform(struct!.timeFunction),
  }
}


export function alertConditionTermToHclTerraform(struct?: AlertConditionTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_function: {
      value: cdktf.stringToHclTerraform(struct!.timeFunction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertConditionTermOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertConditionTerm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._timeFunction !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFunction = this._timeFunction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertConditionTerm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._operator = undefined;
      this._priority = undefined;
      this._threshold = undefined;
      this._timeFunction = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._operator = value.operator;
      this._priority = value.priority;
      this._threshold = value.threshold;
      this._timeFunction = value.timeFunction;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // time_function - computed: false, optional: false, required: true
  private _timeFunction?: string; 
  public get timeFunction() {
    return this.getStringAttribute('time_function');
  }
  public set timeFunction(value: string) {
    this._timeFunction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFunctionInput() {
    return this._timeFunction;
  }
}

export class AlertConditionTermList extends cdktf.ComplexList {
  public internalValue? : AlertConditionTerm[] | cdktf.IResolvable

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
  public get(index: number): AlertConditionTermOutputReference {
    return new AlertConditionTermOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/alert_condition newrelic_alert_condition}
*/
export class AlertCondition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_alert_condition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertCondition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertCondition to import
  * @param importFromId The id of the existing AlertCondition that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/alert_condition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertCondition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_alert_condition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/alert_condition newrelic_alert_condition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertConditionConfig
  */
  public constructor(scope: Construct, id: string, config: AlertConditionConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_alert_condition',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.66.0',
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
    this._conditionScope = config.conditionScope;
    this._enabled = config.enabled;
    this._entities = config.entities;
    this._gcMetric = config.gcMetric;
    this._id = config.id;
    this._metric = config.metric;
    this._name = config.name;
    this._policyId = config.policyId;
    this._runbookUrl = config.runbookUrl;
    this._type = config.type;
    this._userDefinedMetric = config.userDefinedMetric;
    this._userDefinedValueFunction = config.userDefinedValueFunction;
    this._violationCloseTimer = config.violationCloseTimer;
    this._term.internalValue = config.term;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // condition_scope - computed: false, optional: true, required: false
  private _conditionScope?: string; 
  public get conditionScope() {
    return this.getStringAttribute('condition_scope');
  }
  public set conditionScope(value: string) {
    this._conditionScope = value;
  }
  public resetConditionScope() {
    this._conditionScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionScopeInput() {
    return this._conditionScope;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // entities - computed: false, optional: false, required: true
  private _entities?: number[]; 
  public get entities() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('entities')));
  }
  public set entities(value: number[]) {
    this._entities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entitiesInput() {
    return this._entities;
  }

  // entity_guid - computed: true, optional: false, required: false
  public get entityGuid() {
    return this.getStringAttribute('entity_guid');
  }

  // gc_metric - computed: false, optional: true, required: false
  private _gcMetric?: string; 
  public get gcMetric() {
    return this.getStringAttribute('gc_metric');
  }
  public set gcMetric(value: string) {
    this._gcMetric = value;
  }
  public resetGcMetric() {
    this._gcMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcMetricInput() {
    return this._gcMetric;
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

  // metric - computed: false, optional: false, required: true
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
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

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: number; 
  public get policyId() {
    return this.getNumberAttribute('policy_id');
  }
  public set policyId(value: number) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // runbook_url - computed: false, optional: true, required: false
  private _runbookUrl?: string; 
  public get runbookUrl() {
    return this.getStringAttribute('runbook_url');
  }
  public set runbookUrl(value: string) {
    this._runbookUrl = value;
  }
  public resetRunbookUrl() {
    this._runbookUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookUrlInput() {
    return this._runbookUrl;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_defined_metric - computed: false, optional: true, required: false
  private _userDefinedMetric?: string; 
  public get userDefinedMetric() {
    return this.getStringAttribute('user_defined_metric');
  }
  public set userDefinedMetric(value: string) {
    this._userDefinedMetric = value;
  }
  public resetUserDefinedMetric() {
    this._userDefinedMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedMetricInput() {
    return this._userDefinedMetric;
  }

  // user_defined_value_function - computed: false, optional: true, required: false
  private _userDefinedValueFunction?: string; 
  public get userDefinedValueFunction() {
    return this.getStringAttribute('user_defined_value_function');
  }
  public set userDefinedValueFunction(value: string) {
    this._userDefinedValueFunction = value;
  }
  public resetUserDefinedValueFunction() {
    this._userDefinedValueFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedValueFunctionInput() {
    return this._userDefinedValueFunction;
  }

  // violation_close_timer - computed: false, optional: true, required: false
  private _violationCloseTimer?: number; 
  public get violationCloseTimer() {
    return this.getNumberAttribute('violation_close_timer');
  }
  public set violationCloseTimer(value: number) {
    this._violationCloseTimer = value;
  }
  public resetViolationCloseTimer() {
    this._violationCloseTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violationCloseTimerInput() {
    return this._violationCloseTimer;
  }

  // term - computed: false, optional: false, required: true
  private _term = new AlertConditionTermList(this, "term", true);
  public get term() {
    return this._term;
  }
  public putTerm(value: AlertConditionTerm[] | cdktf.IResolvable) {
    this._term.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get termInput() {
    return this._term.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      condition_scope: cdktf.stringToTerraform(this._conditionScope),
      enabled: cdktf.booleanToTerraform(this._enabled),
      entities: cdktf.listMapper(cdktf.numberToTerraform, false)(this._entities),
      gc_metric: cdktf.stringToTerraform(this._gcMetric),
      id: cdktf.stringToTerraform(this._id),
      metric: cdktf.stringToTerraform(this._metric),
      name: cdktf.stringToTerraform(this._name),
      policy_id: cdktf.numberToTerraform(this._policyId),
      runbook_url: cdktf.stringToTerraform(this._runbookUrl),
      type: cdktf.stringToTerraform(this._type),
      user_defined_metric: cdktf.stringToTerraform(this._userDefinedMetric),
      user_defined_value_function: cdktf.stringToTerraform(this._userDefinedValueFunction),
      violation_close_timer: cdktf.numberToTerraform(this._violationCloseTimer),
      term: cdktf.listMapper(alertConditionTermToTerraform, true)(this._term.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      condition_scope: {
        value: cdktf.stringToHclTerraform(this._conditionScope),
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
      entities: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._entities),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      gc_metric: {
        value: cdktf.stringToHclTerraform(this._gcMetric),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric: {
        value: cdktf.stringToHclTerraform(this._metric),
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
      policy_id: {
        value: cdktf.numberToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      runbook_url: {
        value: cdktf.stringToHclTerraform(this._runbookUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_defined_metric: {
        value: cdktf.stringToHclTerraform(this._userDefinedMetric),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_defined_value_function: {
        value: cdktf.stringToHclTerraform(this._userDefinedValueFunction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      violation_close_timer: {
        value: cdktf.numberToHclTerraform(this._violationCloseTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      term: {
        value: cdktf.listMapperHcl(alertConditionTermToHclTerraform, true)(this._term.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlertConditionTermList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
