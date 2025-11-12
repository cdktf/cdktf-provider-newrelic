/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/data-sources/service_level_alert_helper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNewrelicServiceLevelAlertHelperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/data-sources/service_level_alert_helper#alert_type DataNewrelicServiceLevelAlertHelper#alert_type}
  */
  readonly alertType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/data-sources/service_level_alert_helper#custom_evaluation_period DataNewrelicServiceLevelAlertHelper#custom_evaluation_period}
  */
  readonly customEvaluationPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/data-sources/service_level_alert_helper#custom_tolerated_budget_consumption DataNewrelicServiceLevelAlertHelper#custom_tolerated_budget_consumption}
  */
  readonly customToleratedBudgetConsumption?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/data-sources/service_level_alert_helper#id DataNewrelicServiceLevelAlertHelper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/data-sources/service_level_alert_helper#is_bad_events DataNewrelicServiceLevelAlertHelper#is_bad_events}
  */
  readonly isBadEvents?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/data-sources/service_level_alert_helper#sli_guid DataNewrelicServiceLevelAlertHelper#sli_guid}
  */
  readonly sliGuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/data-sources/service_level_alert_helper#slo_period DataNewrelicServiceLevelAlertHelper#slo_period}
  */
  readonly sloPeriod: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/data-sources/service_level_alert_helper#slo_target DataNewrelicServiceLevelAlertHelper#slo_target}
  */
  readonly sloTarget: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/data-sources/service_level_alert_helper newrelic_service_level_alert_helper}
*/
export class DataNewrelicServiceLevelAlertHelper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_service_level_alert_helper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNewrelicServiceLevelAlertHelper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNewrelicServiceLevelAlertHelper to import
  * @param importFromId The id of the existing DataNewrelicServiceLevelAlertHelper that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/data-sources/service_level_alert_helper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNewrelicServiceLevelAlertHelper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_service_level_alert_helper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/data-sources/service_level_alert_helper newrelic_service_level_alert_helper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNewrelicServiceLevelAlertHelperConfig
  */
  public constructor(scope: Construct, id: string, config: DataNewrelicServiceLevelAlertHelperConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_service_level_alert_helper',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.75.4',
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
    this._alertType = config.alertType;
    this._customEvaluationPeriod = config.customEvaluationPeriod;
    this._customToleratedBudgetConsumption = config.customToleratedBudgetConsumption;
    this._id = config.id;
    this._isBadEvents = config.isBadEvents;
    this._sliGuid = config.sliGuid;
    this._sloPeriod = config.sloPeriod;
    this._sloTarget = config.sloTarget;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_type - computed: false, optional: false, required: true
  private _alertType?: string; 
  public get alertType() {
    return this.getStringAttribute('alert_type');
  }
  public set alertType(value: string) {
    this._alertType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTypeInput() {
    return this._alertType;
  }

  // custom_evaluation_period - computed: false, optional: true, required: false
  private _customEvaluationPeriod?: number; 
  public get customEvaluationPeriod() {
    return this.getNumberAttribute('custom_evaluation_period');
  }
  public set customEvaluationPeriod(value: number) {
    this._customEvaluationPeriod = value;
  }
  public resetCustomEvaluationPeriod() {
    this._customEvaluationPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEvaluationPeriodInput() {
    return this._customEvaluationPeriod;
  }

  // custom_tolerated_budget_consumption - computed: false, optional: true, required: false
  private _customToleratedBudgetConsumption?: number; 
  public get customToleratedBudgetConsumption() {
    return this.getNumberAttribute('custom_tolerated_budget_consumption');
  }
  public set customToleratedBudgetConsumption(value: number) {
    this._customToleratedBudgetConsumption = value;
  }
  public resetCustomToleratedBudgetConsumption() {
    this._customToleratedBudgetConsumption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customToleratedBudgetConsumptionInput() {
    return this._customToleratedBudgetConsumption;
  }

  // evaluation_period - computed: true, optional: false, required: false
  public get evaluationPeriod() {
    return this.getNumberAttribute('evaluation_period');
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

  // is_bad_events - computed: false, optional: true, required: false
  private _isBadEvents?: boolean | cdktf.IResolvable; 
  public get isBadEvents() {
    return this.getBooleanAttribute('is_bad_events');
  }
  public set isBadEvents(value: boolean | cdktf.IResolvable) {
    this._isBadEvents = value;
  }
  public resetIsBadEvents() {
    this._isBadEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBadEventsInput() {
    return this._isBadEvents;
  }

  // nrql - computed: true, optional: false, required: false
  public get nrql() {
    return this.getStringAttribute('nrql');
  }

  // sli_guid - computed: false, optional: false, required: true
  private _sliGuid?: string; 
  public get sliGuid() {
    return this.getStringAttribute('sli_guid');
  }
  public set sliGuid(value: string) {
    this._sliGuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sliGuidInput() {
    return this._sliGuid;
  }

  // slo_period - computed: false, optional: false, required: true
  private _sloPeriod?: number; 
  public get sloPeriod() {
    return this.getNumberAttribute('slo_period');
  }
  public set sloPeriod(value: number) {
    this._sloPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sloPeriodInput() {
    return this._sloPeriod;
  }

  // slo_target - computed: false, optional: false, required: true
  private _sloTarget?: number; 
  public get sloTarget() {
    return this.getNumberAttribute('slo_target');
  }
  public set sloTarget(value: number) {
    this._sloTarget = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sloTargetInput() {
    return this._sloTarget;
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // tolerated_budget_consumption - computed: true, optional: false, required: false
  public get toleratedBudgetConsumption() {
    return this.getNumberAttribute('tolerated_budget_consumption');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_type: cdktf.stringToTerraform(this._alertType),
      custom_evaluation_period: cdktf.numberToTerraform(this._customEvaluationPeriod),
      custom_tolerated_budget_consumption: cdktf.numberToTerraform(this._customToleratedBudgetConsumption),
      id: cdktf.stringToTerraform(this._id),
      is_bad_events: cdktf.booleanToTerraform(this._isBadEvents),
      sli_guid: cdktf.stringToTerraform(this._sliGuid),
      slo_period: cdktf.numberToTerraform(this._sloPeriod),
      slo_target: cdktf.numberToTerraform(this._sloTarget),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_type: {
        value: cdktf.stringToHclTerraform(this._alertType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_evaluation_period: {
        value: cdktf.numberToHclTerraform(this._customEvaluationPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_tolerated_budget_consumption: {
        value: cdktf.numberToHclTerraform(this._customToleratedBudgetConsumption),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_bad_events: {
        value: cdktf.booleanToHclTerraform(this._isBadEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sli_guid: {
        value: cdktf.stringToHclTerraform(this._sliGuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slo_period: {
        value: cdktf.numberToHclTerraform(this._sloPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slo_target: {
        value: cdktf.numberToHclTerraform(this._sloTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
