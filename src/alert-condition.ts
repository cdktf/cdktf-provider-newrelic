// https://www.terraform.io/docs/providers/newrelic/r/alert_condition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertConditionConfig extends cdktf.TerraformMetaArguments {
  /**
  * One of (application, instance). Choose application for most scenarios. If you are using the JVM plugin in New Relic, the instance setting allows your condition to trigger for specific app instances.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition#condition_scope AlertCondition#condition_scope}
  */
  readonly conditionScope?: string;
  /**
  * Whether the condition is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition#enabled AlertCondition#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The instance IDs associated with this condition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition#entities AlertCondition#entities}
  */
  readonly entities: number[];
  /**
  * A valid Garbage Collection metric e.g. GC/G1 Young Generation. This is required if you are using apm_jvm_metric with gc_cpu_time condition type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition#gc_metric AlertCondition#gc_metric}
  */
  readonly gcMetric?: string;
  /**
  * The metric field accepts parameters based on the type set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition#metric AlertCondition#metric}
  */
  readonly metric: string;
  /**
  * The title of the condition. Must be between 1 and 128 characters, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition#name AlertCondition#name}
  */
  readonly name: string;
  /**
  * The ID of the policy where this condition should be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition#policy_id AlertCondition#policy_id}
  */
  readonly policyId: number;
  /**
  * Runbook URL to display in notifications.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition#runbook_url AlertCondition#runbook_url}
  */
  readonly runbookUrl?: string;
  /**
  * The type of condition. One of: (browser_metric, mobile_metric, servers_metric, apm_app_metric, apm_jvm_metric, apm_kt_metric).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition#type AlertCondition#type}
  */
  readonly type: string;
  /**
  * A custom metric to be evaluated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition#user_defined_metric AlertCondition#user_defined_metric}
  */
  readonly userDefinedMetric?: string;
  /**
  * One of: (average, min, max, total, sample_size).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition#user_defined_value_function AlertCondition#user_defined_value_function}
  */
  readonly userDefinedValueFunction?: string;
  /**
  * Automatically close instance-based violations, including JVM health metric violations, after the number of hours specified. Must be: 1, 2, 4, 8, 12 or 24.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition#violation_close_timer AlertCondition#violation_close_timer}
  */
  readonly violationCloseTimer?: number;
  /**
  * term block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition#term AlertCondition#term}
  */
  readonly term: AlertConditionTerm[] | cdktf.IResolvable;
}
export interface AlertConditionTerm {
  /**
  * In minutes, must be in the range of 5 to 120, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition#duration AlertCondition#duration}
  */
  readonly duration: number;
  /**
  * One of (above, below, equal). Defaults to equal.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition#operator AlertCondition#operator}
  */
  readonly operator?: string;
  /**
  * One of (critical, warning). Defaults to critical.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition#priority AlertCondition#priority}
  */
  readonly priority?: string;
  /**
  * Must be 0 or greater.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition#threshold AlertCondition#threshold}
  */
  readonly threshold: number;
  /**
  * One of (all, any).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition#time_function AlertCondition#time_function}
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition newrelic_alert_condition}
*/
export class AlertCondition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_alert_condition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/r/alert_condition newrelic_alert_condition} Resource
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
        providerVersion: '2.45.0',
        providerVersionConstraint: '~> 2.32'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._conditionScope = config.conditionScope;
    this._enabled = config.enabled;
    this._entities = config.entities;
    this._gcMetric = config.gcMetric;
    this._metric = config.metric;
    this._name = config.name;
    this._policyId = config.policyId;
    this._runbookUrl = config.runbookUrl;
    this._type = config.type;
    this._userDefinedMetric = config.userDefinedMetric;
    this._userDefinedValueFunction = config.userDefinedValueFunction;
    this._violationCloseTimer = config.violationCloseTimer;
    this._term = config.term;
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
  public get id() {
    return this.getStringAttribute('id');
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
  private _term?: AlertConditionTerm[] | cdktf.IResolvable; 
  public get term() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('term')));
  }
  public set term(value: AlertConditionTerm[] | cdktf.IResolvable) {
    this._term = value;
  }
  // Temporarily expose input value. Use with caution.
  public get termInput() {
    return this._term;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      condition_scope: cdktf.stringToTerraform(this._conditionScope),
      enabled: cdktf.booleanToTerraform(this._enabled),
      entities: cdktf.listMapper(cdktf.numberToTerraform)(this._entities),
      gc_metric: cdktf.stringToTerraform(this._gcMetric),
      metric: cdktf.stringToTerraform(this._metric),
      name: cdktf.stringToTerraform(this._name),
      policy_id: cdktf.numberToTerraform(this._policyId),
      runbook_url: cdktf.stringToTerraform(this._runbookUrl),
      type: cdktf.stringToTerraform(this._type),
      user_defined_metric: cdktf.stringToTerraform(this._userDefinedMetric),
      user_defined_value_function: cdktf.stringToTerraform(this._userDefinedValueFunction),
      violation_close_timer: cdktf.numberToTerraform(this._violationCloseTimer),
      term: cdktf.listMapper(alertConditionTermToTerraform)(this._term),
    };
  }
}
