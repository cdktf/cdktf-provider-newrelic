// https://www.terraform.io/docs/providers/newrelic/d/plugin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNewrelicPluginConfig extends cdktf.TerraformMetaArguments {
  /**
  * The GUID of the plugin in New Relic.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/plugin#guid DataNewrelicPlugin#guid}
  */
  readonly guid: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/d/plugin newrelic_plugin}
*/
export class DataNewrelicPlugin extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "newrelic_plugin";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/d/plugin newrelic_plugin} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNewrelicPluginConfig
  */
  public constructor(scope: Construct, id: string, config: DataNewrelicPluginConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_plugin',
      terraformGeneratorMetadata: {
        providerName: 'newrelic'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._guid = config.guid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // guid - computed: false, optional: false, required: true
  private _guid?: string; 
  public get guid() {
    return this.getStringAttribute('guid');
  }
  public set guid(value: string) {
    this._guid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get guidInput() {
    return this._guid;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      guid: cdktf.stringToTerraform(this._guid),
    };
  }
}
