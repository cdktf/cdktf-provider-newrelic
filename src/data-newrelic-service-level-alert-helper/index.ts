// https://www.terraform.io/docs/providers/newrelic/d/service_level_alert_helper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNewrelicServiceLevelAlertHelperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/service_level_alert_helper#alert_type DataNewrelicServiceLevelAlertHelper#alert_type}
  */
  readonly alertType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/service_level_alert_helper#custom_evaluation_period DataNewrelicServiceLevelAlertHelper#custom_evaluation_period}
  */
  readonly customEvaluationPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/service_level_alert_helper#custom_tolerated_budget_consumption DataNewrelicServiceLevelAlertHelper#custom_tolerated_budget_consumption}
  */
  readonly customToleratedBudgetConsumption?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/service_level_alert_helper#id DataNewrelicServiceLevelAlertHelper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/service_level_alert_helper#sli_guid DataNewrelicServiceLevelAlertHelper#sli_guid}
  */
  readonly sliGuid: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/service_level_alert_helper#slo_period DataNewrelicServiceLevelAlertHelper#slo_period}
  */
  readonly sloPeriod: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/service_level_alert_helper#slo_target DataNewrelicServiceLevelAlertHelper#slo_target}
  */
  readonly sloTarget: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/d/service_level_alert_helper newrelic_service_level_alert_helper}
*/
export class DataNewrelicServiceLevelAlertHelper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_service_level_alert_helper";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/d/service_level_alert_helper newrelic_service_level_alert_helper} Data Source
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
        providerVersion: '3.20.0',
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
      sli_guid: cdktf.stringToTerraform(this._sliGuid),
      slo_period: cdktf.numberToTerraform(this._sloPeriod),
      slo_target: cdktf.numberToTerraform(this._sloTarget),
    };
  }
}
