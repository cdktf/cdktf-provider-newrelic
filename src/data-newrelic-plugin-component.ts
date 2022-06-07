// https://www.terraform.io/docs/providers/newrelic/d/plugin_component
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNewrelicPluginComponentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the plugin component.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/plugin_component#name DataNewrelicPluginComponent#name}
  */
  readonly name: string;
  /**
  * The ID of the plugin instance this component belongs to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/plugin_component#plugin_id DataNewrelicPluginComponent#plugin_id}
  */
  readonly pluginId: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/d/plugin_component newrelic_plugin_component}
*/
export class DataNewrelicPluginComponent extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_plugin_component";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/d/plugin_component newrelic_plugin_component} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNewrelicPluginComponentConfig
  */
  public constructor(scope: Construct, id: string, config: DataNewrelicPluginComponentConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_plugin_component',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '2.46.2',
        providerVersionConstraint: '~> 2.32'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._pluginId = config.pluginId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // health_status - computed: true, optional: false, required: false
  public get healthStatus() {
    return this.getStringAttribute('health_status');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // plugin_id - computed: false, optional: false, required: true
  private _pluginId?: number; 
  public get pluginId() {
    return this.getNumberAttribute('plugin_id');
  }
  public set pluginId(value: number) {
    this._pluginId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginIdInput() {
    return this._pluginId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      plugin_id: cdktf.numberToTerraform(this._pluginId),
    };
  }
}
