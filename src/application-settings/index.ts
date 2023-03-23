// https://www.terraform.io/docs/providers/newrelic/r/application_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/application_settings#app_apdex_threshold ApplicationSettings#app_apdex_threshold}
  */
  readonly appApdexThreshold: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/application_settings#enable_real_user_monitoring ApplicationSettings#enable_real_user_monitoring}
  */
  readonly enableRealUserMonitoring: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/application_settings#end_user_apdex_threshold ApplicationSettings#end_user_apdex_threshold}
  */
  readonly endUserApdexThreshold: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/application_settings#id ApplicationSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/application_settings#name ApplicationSettings#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/application_settings newrelic_application_settings}
*/
export class ApplicationSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_application_settings";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/r/application_settings newrelic_application_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_application_settings',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.18.0',
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
    this._appApdexThreshold = config.appApdexThreshold;
    this._enableRealUserMonitoring = config.enableRealUserMonitoring;
    this._endUserApdexThreshold = config.endUserApdexThreshold;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_apdex_threshold - computed: false, optional: false, required: true
  private _appApdexThreshold?: number; 
  public get appApdexThreshold() {
    return this.getNumberAttribute('app_apdex_threshold');
  }
  public set appApdexThreshold(value: number) {
    this._appApdexThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appApdexThresholdInput() {
    return this._appApdexThreshold;
  }

  // enable_real_user_monitoring - computed: false, optional: false, required: true
  private _enableRealUserMonitoring?: boolean | cdktf.IResolvable; 
  public get enableRealUserMonitoring() {
    return this.getBooleanAttribute('enable_real_user_monitoring');
  }
  public set enableRealUserMonitoring(value: boolean | cdktf.IResolvable) {
    this._enableRealUserMonitoring = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRealUserMonitoringInput() {
    return this._enableRealUserMonitoring;
  }

  // end_user_apdex_threshold - computed: false, optional: false, required: true
  private _endUserApdexThreshold?: number; 
  public get endUserApdexThreshold() {
    return this.getNumberAttribute('end_user_apdex_threshold');
  }
  public set endUserApdexThreshold(value: number) {
    this._endUserApdexThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endUserApdexThresholdInput() {
    return this._endUserApdexThreshold;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_apdex_threshold: cdktf.numberToTerraform(this._appApdexThreshold),
      enable_real_user_monitoring: cdktf.booleanToTerraform(this._enableRealUserMonitoring),
      end_user_apdex_threshold: cdktf.numberToTerraform(this._endUserApdexThreshold),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
