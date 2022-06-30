// https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PluginsAlertConditionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether or not this condition is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition#enabled PluginsAlertCondition#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The plugin component IDs to target.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition#entities PluginsAlertCondition#entities}
  */
  readonly entities: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition#id PluginsAlertCondition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The plugin metric to evaluate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition#metric PluginsAlertCondition#metric}
  */
  readonly metric: string;
  /**
  * The metric description.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition#metric_description PluginsAlertCondition#metric_description}
  */
  readonly metricDescription: string;
  /**
  * The title of the condition. Must be between 1 and 64 characters, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition#name PluginsAlertCondition#name}
  */
  readonly name: string;
  /**
  * The GUID of the plugin which produces the metric.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition#plugin_guid PluginsAlertCondition#plugin_guid}
  */
  readonly pluginGuid: string;
  /**
  * The ID of the installed plugin instance which produces the metric.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition#plugin_id PluginsAlertCondition#plugin_id}
  */
  readonly pluginId: string;
  /**
  * The ID of the policy where this condition should be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition#policy_id PluginsAlertCondition#policy_id}
  */
  readonly policyId: number;
  /**
  * Runbook URL to display in notifications.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition#runbook_url PluginsAlertCondition#runbook_url}
  */
  readonly runbookUrl?: string;
  /**
  * The value function to apply to the metric data.  One of `min`, `max`, `average`, `sample_size`, `total`, or `percent`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition#value_function PluginsAlertCondition#value_function}
  */
  readonly valueFunction: string;
  /**
  * term block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition#term PluginsAlertCondition#term}
  */
  readonly term: PluginsAlertConditionTerm[] | cdktf.IResolvable;
}
export interface PluginsAlertConditionTerm {
  /**
  * In minutes, must be in the range of 5 to 120, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition#duration PluginsAlertCondition#duration}
  */
  readonly duration: number;
  /**
  * One of `above`, `below`, or `equal`. Defaults to equal.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition#operator PluginsAlertCondition#operator}
  */
  readonly operator?: string;
  /**
  * One of `critical` or `warning`. Defaults to critical.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition#priority PluginsAlertCondition#priority}
  */
  readonly priority?: string;
  /**
  * Must be 0 or greater.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition#threshold PluginsAlertCondition#threshold}
  */
  readonly threshold: number;
  /**
  * One of `all` or `any`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition#time_function PluginsAlertCondition#time_function}
  */
  readonly timeFunction: string;
}

export function pluginsAlertConditionTermToTerraform(struct?: PluginsAlertConditionTerm | cdktf.IResolvable): any {
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

export class PluginsAlertConditionTermOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PluginsAlertConditionTerm | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PluginsAlertConditionTerm | cdktf.IResolvable | undefined) {
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

export class PluginsAlertConditionTermList extends cdktf.ComplexList {
  public internalValue? : PluginsAlertConditionTerm[] | cdktf.IResolvable

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
  public get(index: number): PluginsAlertConditionTermOutputReference {
    return new PluginsAlertConditionTermOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition newrelic_plugins_alert_condition}
*/
export class PluginsAlertCondition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_plugins_alert_condition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/r/plugins_alert_condition newrelic_plugins_alert_condition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PluginsAlertConditionConfig
  */
  public constructor(scope: Construct, id: string, config: PluginsAlertConditionConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_plugins_alert_condition',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '2.48.1',
        providerVersionConstraint: '~> 2.32'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enabled = config.enabled;
    this._entities = config.entities;
    this._id = config.id;
    this._metric = config.metric;
    this._metricDescription = config.metricDescription;
    this._name = config.name;
    this._pluginGuid = config.pluginGuid;
    this._pluginId = config.pluginId;
    this._policyId = config.policyId;
    this._runbookUrl = config.runbookUrl;
    this._valueFunction = config.valueFunction;
    this._term.internalValue = config.term;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // metric_description - computed: false, optional: false, required: true
  private _metricDescription?: string; 
  public get metricDescription() {
    return this.getStringAttribute('metric_description');
  }
  public set metricDescription(value: string) {
    this._metricDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDescriptionInput() {
    return this._metricDescription;
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

  // plugin_guid - computed: false, optional: false, required: true
  private _pluginGuid?: string; 
  public get pluginGuid() {
    return this.getStringAttribute('plugin_guid');
  }
  public set pluginGuid(value: string) {
    this._pluginGuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginGuidInput() {
    return this._pluginGuid;
  }

  // plugin_id - computed: false, optional: false, required: true
  private _pluginId?: string; 
  public get pluginId() {
    return this.getStringAttribute('plugin_id');
  }
  public set pluginId(value: string) {
    this._pluginId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginIdInput() {
    return this._pluginId;
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

  // value_function - computed: false, optional: false, required: true
  private _valueFunction?: string; 
  public get valueFunction() {
    return this.getStringAttribute('value_function');
  }
  public set valueFunction(value: string) {
    this._valueFunction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFunctionInput() {
    return this._valueFunction;
  }

  // term - computed: false, optional: false, required: true
  private _term = new PluginsAlertConditionTermList(this, "term", true);
  public get term() {
    return this._term;
  }
  public putTerm(value: PluginsAlertConditionTerm[] | cdktf.IResolvable) {
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      entities: cdktf.listMapper(cdktf.numberToTerraform)(this._entities),
      id: cdktf.stringToTerraform(this._id),
      metric: cdktf.stringToTerraform(this._metric),
      metric_description: cdktf.stringToTerraform(this._metricDescription),
      name: cdktf.stringToTerraform(this._name),
      plugin_guid: cdktf.stringToTerraform(this._pluginGuid),
      plugin_id: cdktf.stringToTerraform(this._pluginId),
      policy_id: cdktf.numberToTerraform(this._policyId),
      runbook_url: cdktf.stringToTerraform(this._runbookUrl),
      value_function: cdktf.stringToTerraform(this._valueFunction),
      term: cdktf.listMapper(pluginsAlertConditionTermToTerraform)(this._term.internalValue),
    };
  }
}
