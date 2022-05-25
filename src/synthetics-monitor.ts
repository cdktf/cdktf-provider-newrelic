// https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SyntheticsMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Bypass HEAD request.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor#bypass_head_request SyntheticsMonitor#bypass_head_request}
  */
  readonly bypassHeadRequest?: boolean | cdktf.IResolvable;
  /**
  * The interval (in minutes) at which this monitor should run. Valid values are 1, 5, 10, 15, 30, 60, 360, 720, or 1440.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor#frequency SyntheticsMonitor#frequency}
  */
  readonly frequency: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor#id SyntheticsMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The locations in which this monitor should be run.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor#locations SyntheticsMonitor#locations}
  */
  readonly locations: string[];
  /**
  * The title of this monitor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor#name SyntheticsMonitor#name}
  */
  readonly name: string;
  /**
  * The base threshold (in seconds) to calculate the apdex score for use in the SLA report. (Default 7 seconds)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor#sla_threshold SyntheticsMonitor#sla_threshold}
  */
  readonly slaThreshold?: number;
  /**
  * The monitor status (i.e. ENABLED, MUTED, DISABLED).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor#status SyntheticsMonitor#status}
  */
  readonly status: string;
  /**
  * Fail the monitor check if redirected.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor#treat_redirect_as_failure SyntheticsMonitor#treat_redirect_as_failure}
  */
  readonly treatRedirectAsFailure?: boolean | cdktf.IResolvable;
  /**
  * The monitor type. Valid values are SIMPLE, BROWSER, SCRIPT_BROWSER, and SCRIPT_API.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor#type SyntheticsMonitor#type}
  */
  readonly type: string;
  /**
  * The URI for the monitor to hit.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor#uri SyntheticsMonitor#uri}
  */
  readonly uri?: string;
  /**
  * The string to validate against in the response.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor#validation_string SyntheticsMonitor#validation_string}
  */
  readonly validationString?: string;
  /**
  * Verify SSL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor#verify_ssl SyntheticsMonitor#verify_ssl}
  */
  readonly verifySsl?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor newrelic_synthetics_monitor}
*/
export class SyntheticsMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_synthetics_monitor";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor newrelic_synthetics_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyntheticsMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: SyntheticsMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_synthetics_monitor',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '2.46.1',
        providerVersionConstraint: '~> 2.32'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bypassHeadRequest = config.bypassHeadRequest;
    this._frequency = config.frequency;
    this._id = config.id;
    this._locations = config.locations;
    this._name = config.name;
    this._slaThreshold = config.slaThreshold;
    this._status = config.status;
    this._treatRedirectAsFailure = config.treatRedirectAsFailure;
    this._type = config.type;
    this._uri = config.uri;
    this._validationString = config.validationString;
    this._verifySsl = config.verifySsl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bypass_head_request - computed: false, optional: true, required: false
  private _bypassHeadRequest?: boolean | cdktf.IResolvable; 
  public get bypassHeadRequest() {
    return this.getBooleanAttribute('bypass_head_request');
  }
  public set bypassHeadRequest(value: boolean | cdktf.IResolvable) {
    this._bypassHeadRequest = value;
  }
  public resetBypassHeadRequest() {
    this._bypassHeadRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassHeadRequestInput() {
    return this._bypassHeadRequest;
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
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

  // locations - computed: false, optional: false, required: true
  private _locations?: string[]; 
  public get locations() {
    return cdktf.Fn.tolist(this.getListAttribute('locations'));
  }
  public set locations(value: string[]) {
    this._locations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations;
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

  // sla_threshold - computed: false, optional: true, required: false
  private _slaThreshold?: number; 
  public get slaThreshold() {
    return this.getNumberAttribute('sla_threshold');
  }
  public set slaThreshold(value: number) {
    this._slaThreshold = value;
  }
  public resetSlaThreshold() {
    this._slaThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaThresholdInput() {
    return this._slaThreshold;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // treat_redirect_as_failure - computed: false, optional: true, required: false
  private _treatRedirectAsFailure?: boolean | cdktf.IResolvable; 
  public get treatRedirectAsFailure() {
    return this.getBooleanAttribute('treat_redirect_as_failure');
  }
  public set treatRedirectAsFailure(value: boolean | cdktf.IResolvable) {
    this._treatRedirectAsFailure = value;
  }
  public resetTreatRedirectAsFailure() {
    this._treatRedirectAsFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get treatRedirectAsFailureInput() {
    return this._treatRedirectAsFailure;
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

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // validation_string - computed: false, optional: true, required: false
  private _validationString?: string; 
  public get validationString() {
    return this.getStringAttribute('validation_string');
  }
  public set validationString(value: string) {
    this._validationString = value;
  }
  public resetValidationString() {
    this._validationString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationStringInput() {
    return this._validationString;
  }

  // verify_ssl - computed: false, optional: true, required: false
  private _verifySsl?: boolean | cdktf.IResolvable; 
  public get verifySsl() {
    return this.getBooleanAttribute('verify_ssl');
  }
  public set verifySsl(value: boolean | cdktf.IResolvable) {
    this._verifySsl = value;
  }
  public resetVerifySsl() {
    this._verifySsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifySslInput() {
    return this._verifySsl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bypass_head_request: cdktf.booleanToTerraform(this._bypassHeadRequest),
      frequency: cdktf.numberToTerraform(this._frequency),
      id: cdktf.stringToTerraform(this._id),
      locations: cdktf.listMapper(cdktf.stringToTerraform)(this._locations),
      name: cdktf.stringToTerraform(this._name),
      sla_threshold: cdktf.numberToTerraform(this._slaThreshold),
      status: cdktf.stringToTerraform(this._status),
      treat_redirect_as_failure: cdktf.booleanToTerraform(this._treatRedirectAsFailure),
      type: cdktf.stringToTerraform(this._type),
      uri: cdktf.stringToTerraform(this._uri),
      validation_string: cdktf.stringToTerraform(this._validationString),
      verify_ssl: cdktf.booleanToTerraform(this._verifySsl),
    };
  }
}
