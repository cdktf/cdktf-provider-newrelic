// https://www.terraform.io/docs/providers/newrelic/d/synthetics_monitor_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNewrelicSyntheticsMonitorLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The label of the Synthetics monitor location.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/synthetics_monitor_location#label DataNewrelicSyntheticsMonitorLocation#label}
  */
  readonly label: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/d/synthetics_monitor_location newrelic_synthetics_monitor_location}
*/
export class DataNewrelicSyntheticsMonitorLocation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_synthetics_monitor_location";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/d/synthetics_monitor_location newrelic_synthetics_monitor_location} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNewrelicSyntheticsMonitorLocationConfig
  */
  public constructor(scope: Construct, id: string, config: DataNewrelicSyntheticsMonitorLocationConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_synthetics_monitor_location',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '2.41.4',
        providerVersionConstraint: '~> 2.32'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._label = config.label;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // high_security_mode - computed: true, optional: false, required: false
  public get highSecurityMode() {
    return this.getBooleanAttribute('high_security_mode');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // private - computed: true, optional: false, required: false
  public get private() {
    return this.getBooleanAttribute('private');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      label: cdktf.stringToTerraform(this._label),
    };
  }
}
