/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/infra_alert_condition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InfraAlertConditionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The operator used to evaluate the threshold value. Valid values are above, below, and equal. Supported by the infra_metric and infra_process_running condition types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/infra_alert_condition#comparison InfraAlertCondition#comparison}
  */
  readonly comparison?: string;
  /**
  * The description of the Infrastructure alert condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/infra_alert_condition#description InfraAlertCondition#description}
  */
  readonly description?: string;
  /**
  * Whether the condition is turned on or off. Valid values are true and false. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/infra_alert_condition#enabled InfraAlertCondition#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The metric event; for example, SystemSample or StorageSample. Supported by the infra_metric condition type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/infra_alert_condition#event InfraAlertCondition#event}
  */
  readonly event?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/infra_alert_condition#id InfraAlertCondition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * For alerts on integrations, use this instead of event. Supported by the infra_metric condition type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/infra_alert_condition#integration_provider InfraAlertCondition#integration_provider}
  */
  readonly integrationProvider?: string;
  /**
  * The Infrastructure alert condition's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/infra_alert_condition#name InfraAlertCondition#name}
  */
  readonly name: string;
  /**
  * The ID of the alert policy where this condition should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/infra_alert_condition#policy_id InfraAlertCondition#policy_id}
  */
  readonly policyId: number;
  /**
  * Any filters applied to processes; for example: commandName = 'java'. Supported by the infra_process_running condition type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/infra_alert_condition#process_where InfraAlertCondition#process_where}
  */
  readonly processWhere?: string;
  /**
  * Runbook URL to display in notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/infra_alert_condition#runbook_url InfraAlertCondition#runbook_url}
  */
  readonly runbookUrl?: string;
  /**
  * The attribute name to identify the metric being targeted; for example, cpuPercent, diskFreePercent, or memoryResidentSizeBytes. The underlying API will automatically populate this value for Infrastructure integrations (for example diskFreePercent), so make sure to explicitly include this value to avoid diff issues. Supported by the infra_metric condition type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/infra_alert_condition#select InfraAlertCondition#select}
  */
  readonly select?: string;
  /**
  * The type of Infrastructure alert condition. Valid values are infra_process_running, infra_metric, and infra_host_not_reporting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/infra_alert_condition#type InfraAlertCondition#type}
  */
  readonly type: string;
  /**
  * Determines how much time, in hours, will pass before an incident is automatically closed. Valid values are 1, 2, 4, 8, 12, 24, 48, or 72
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/infra_alert_condition#violation_close_timer InfraAlertCondition#violation_close_timer}
  */
  readonly violationCloseTimer?: number;
  /**
  * If applicable, this identifies any Infrastructure host filters used; for example: hostname LIKE '%cassandra%'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/infra_alert_condition#where InfraAlertCondition#where}
  */
  readonly where?: string;
  /**
  * critical block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/infra_alert_condition#critical InfraAlertCondition#critical}
  */
  readonly critical?: InfraAlertConditionCritical;
  /**
  * warning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/infra_alert_condition#warning InfraAlertCondition#warning}
  */
  readonly warning?: InfraAlertConditionWarning;
}
export interface InfraAlertConditionCritical {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/infra_alert_condition#duration InfraAlertCondition#duration}
  */
  readonly duration: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/infra_alert_condition#time_function InfraAlertCondition#time_function}
  */
  readonly timeFunction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/infra_alert_condition#value InfraAlertCondition#value}
  */
  readonly value?: number;
}

export function infraAlertConditionCriticalToTerraform(struct?: InfraAlertConditionCriticalOutputReference | InfraAlertConditionCritical): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    time_function: cdktf.stringToTerraform(struct!.timeFunction),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function infraAlertConditionCriticalToHclTerraform(struct?: InfraAlertConditionCriticalOutputReference | InfraAlertConditionCritical): any {
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
    time_function: {
      value: cdktf.stringToHclTerraform(struct!.timeFunction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InfraAlertConditionCriticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InfraAlertConditionCritical | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._timeFunction !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFunction = this._timeFunction;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfraAlertConditionCritical | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._timeFunction = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._timeFunction = value.timeFunction;
      this._value = value.value;
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

  // time_function - computed: false, optional: true, required: false
  private _timeFunction?: string; 
  public get timeFunction() {
    return this.getStringAttribute('time_function');
  }
  public set timeFunction(value: string) {
    this._timeFunction = value;
  }
  public resetTimeFunction() {
    this._timeFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFunctionInput() {
    return this._timeFunction;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface InfraAlertConditionWarning {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/infra_alert_condition#duration InfraAlertCondition#duration}
  */
  readonly duration: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/infra_alert_condition#time_function InfraAlertCondition#time_function}
  */
  readonly timeFunction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/infra_alert_condition#value InfraAlertCondition#value}
  */
  readonly value?: number;
}

export function infraAlertConditionWarningToTerraform(struct?: InfraAlertConditionWarningOutputReference | InfraAlertConditionWarning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    time_function: cdktf.stringToTerraform(struct!.timeFunction),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function infraAlertConditionWarningToHclTerraform(struct?: InfraAlertConditionWarningOutputReference | InfraAlertConditionWarning): any {
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
    time_function: {
      value: cdktf.stringToHclTerraform(struct!.timeFunction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InfraAlertConditionWarningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InfraAlertConditionWarning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._timeFunction !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFunction = this._timeFunction;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfraAlertConditionWarning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._timeFunction = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._timeFunction = value.timeFunction;
      this._value = value.value;
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

  // time_function - computed: false, optional: true, required: false
  private _timeFunction?: string; 
  public get timeFunction() {
    return this.getStringAttribute('time_function');
  }
  public set timeFunction(value: string) {
    this._timeFunction = value;
  }
  public resetTimeFunction() {
    this._timeFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFunctionInput() {
    return this._timeFunction;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/infra_alert_condition newrelic_infra_alert_condition}
*/
export class InfraAlertCondition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_infra_alert_condition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InfraAlertCondition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InfraAlertCondition to import
  * @param importFromId The id of the existing InfraAlertCondition that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/infra_alert_condition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InfraAlertCondition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_infra_alert_condition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/infra_alert_condition newrelic_infra_alert_condition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InfraAlertConditionConfig
  */
  public constructor(scope: Construct, id: string, config: InfraAlertConditionConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_infra_alert_condition',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.54.1',
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
    this._comparison = config.comparison;
    this._description = config.description;
    this._enabled = config.enabled;
    this._event = config.event;
    this._id = config.id;
    this._integrationProvider = config.integrationProvider;
    this._name = config.name;
    this._policyId = config.policyId;
    this._processWhere = config.processWhere;
    this._runbookUrl = config.runbookUrl;
    this._select = config.select;
    this._type = config.type;
    this._violationCloseTimer = config.violationCloseTimer;
    this._where = config.where;
    this._critical.internalValue = config.critical;
    this._warning.internalValue = config.warning;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comparison - computed: false, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
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

  // entity_guid - computed: true, optional: false, required: false
  public get entityGuid() {
    return this.getStringAttribute('entity_guid');
  }

  // event - computed: true, optional: true, required: false
  private _event?: string; 
  public get event() {
    return this.getStringAttribute('event');
  }
  public set event(value: string) {
    this._event = value;
  }
  public resetEvent() {
    this._event = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event;
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

  // integration_provider - computed: false, optional: true, required: false
  private _integrationProvider?: string; 
  public get integrationProvider() {
    return this.getStringAttribute('integration_provider');
  }
  public set integrationProvider(value: string) {
    this._integrationProvider = value;
  }
  public resetIntegrationProvider() {
    this._integrationProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationProviderInput() {
    return this._integrationProvider;
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

  // process_where - computed: false, optional: true, required: false
  private _processWhere?: string; 
  public get processWhere() {
    return this.getStringAttribute('process_where');
  }
  public set processWhere(value: string) {
    this._processWhere = value;
  }
  public resetProcessWhere() {
    this._processWhere = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processWhereInput() {
    return this._processWhere;
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

  // select - computed: false, optional: true, required: false
  private _select?: string; 
  public get select() {
    return this.getStringAttribute('select');
  }
  public set select(value: string) {
    this._select = value;
  }
  public resetSelect() {
    this._select = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectInput() {
    return this._select;
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
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

  // where - computed: false, optional: true, required: false
  private _where?: string; 
  public get where() {
    return this.getStringAttribute('where');
  }
  public set where(value: string) {
    this._where = value;
  }
  public resetWhere() {
    this._where = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whereInput() {
    return this._where;
  }

  // critical - computed: false, optional: true, required: false
  private _critical = new InfraAlertConditionCriticalOutputReference(this, "critical");
  public get critical() {
    return this._critical;
  }
  public putCritical(value: InfraAlertConditionCritical) {
    this._critical.internalValue = value;
  }
  public resetCritical() {
    this._critical.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical.internalValue;
  }

  // warning - computed: false, optional: true, required: false
  private _warning = new InfraAlertConditionWarningOutputReference(this, "warning");
  public get warning() {
    return this._warning;
  }
  public putWarning(value: InfraAlertConditionWarning) {
    this._warning.internalValue = value;
  }
  public resetWarning() {
    this._warning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comparison: cdktf.stringToTerraform(this._comparison),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      event: cdktf.stringToTerraform(this._event),
      id: cdktf.stringToTerraform(this._id),
      integration_provider: cdktf.stringToTerraform(this._integrationProvider),
      name: cdktf.stringToTerraform(this._name),
      policy_id: cdktf.numberToTerraform(this._policyId),
      process_where: cdktf.stringToTerraform(this._processWhere),
      runbook_url: cdktf.stringToTerraform(this._runbookUrl),
      select: cdktf.stringToTerraform(this._select),
      type: cdktf.stringToTerraform(this._type),
      violation_close_timer: cdktf.numberToTerraform(this._violationCloseTimer),
      where: cdktf.stringToTerraform(this._where),
      critical: infraAlertConditionCriticalToTerraform(this._critical.internalValue),
      warning: infraAlertConditionWarningToTerraform(this._warning.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comparison: {
        value: cdktf.stringToHclTerraform(this._comparison),
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
      event: {
        value: cdktf.stringToHclTerraform(this._event),
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
      integration_provider: {
        value: cdktf.stringToHclTerraform(this._integrationProvider),
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
      process_where: {
        value: cdktf.stringToHclTerraform(this._processWhere),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runbook_url: {
        value: cdktf.stringToHclTerraform(this._runbookUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      select: {
        value: cdktf.stringToHclTerraform(this._select),
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
      violation_close_timer: {
        value: cdktf.numberToHclTerraform(this._violationCloseTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      where: {
        value: cdktf.stringToHclTerraform(this._where),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      critical: {
        value: infraAlertConditionCriticalToHclTerraform(this._critical.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InfraAlertConditionCriticalList",
      },
      warning: {
        value: infraAlertConditionWarningToHclTerraform(this._warning.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InfraAlertConditionWarningList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
