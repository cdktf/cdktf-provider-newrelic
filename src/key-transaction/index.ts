/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/key_transaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeyTransactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The acceptable amount of the time spent in the backend before customers get frustrated (Apdex target)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/key_transaction#apdex_index KeyTransaction#apdex_index}
  */
  readonly apdexIndex: number;
  /**
  * The GUID of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/key_transaction#application_guid KeyTransaction#application_guid}
  */
  readonly applicationGuid: string;
  /**
  * The acceptable amount of time for rendering a page in a browser before customers get frustrated (browser Apdex target).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/key_transaction#browser_apdex_target KeyTransaction#browser_apdex_target}
  */
  readonly browserApdexTarget: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/key_transaction#id KeyTransaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the metric underlying this key transaction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/key_transaction#metric_name KeyTransaction#metric_name}
  */
  readonly metricName: string;
  /**
  * The name of the key transaction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/key_transaction#name KeyTransaction#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/key_transaction newrelic_key_transaction}
*/
export class KeyTransaction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_key_transaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KeyTransaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KeyTransaction to import
  * @param importFromId The id of the existing KeyTransaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/key_transaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KeyTransaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_key_transaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.50.0/docs/resources/key_transaction newrelic_key_transaction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeyTransactionConfig
  */
  public constructor(scope: Construct, id: string, config: KeyTransactionConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_key_transaction',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.50.0',
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
    this._apdexIndex = config.apdexIndex;
    this._applicationGuid = config.applicationGuid;
    this._browserApdexTarget = config.browserApdexTarget;
    this._id = config.id;
    this._metricName = config.metricName;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apdex_index - computed: false, optional: false, required: true
  private _apdexIndex?: number; 
  public get apdexIndex() {
    return this.getNumberAttribute('apdex_index');
  }
  public set apdexIndex(value: number) {
    this._apdexIndex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apdexIndexInput() {
    return this._apdexIndex;
  }

  // application_guid - computed: false, optional: false, required: true
  private _applicationGuid?: string; 
  public get applicationGuid() {
    return this.getStringAttribute('application_guid');
  }
  public set applicationGuid(value: string) {
    this._applicationGuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationGuidInput() {
    return this._applicationGuid;
  }

  // browser_apdex_target - computed: false, optional: false, required: true
  private _browserApdexTarget?: number; 
  public get browserApdexTarget() {
    return this.getNumberAttribute('browser_apdex_target');
  }
  public set browserApdexTarget(value: number) {
    this._browserApdexTarget = value;
  }
  // Temporarily expose input value. Use with caution.
  public get browserApdexTargetInput() {
    return this._browserApdexTarget;
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
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

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apdex_index: cdktf.numberToTerraform(this._apdexIndex),
      application_guid: cdktf.stringToTerraform(this._applicationGuid),
      browser_apdex_target: cdktf.numberToTerraform(this._browserApdexTarget),
      id: cdktf.stringToTerraform(this._id),
      metric_name: cdktf.stringToTerraform(this._metricName),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apdex_index: {
        value: cdktf.numberToHclTerraform(this._apdexIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      application_guid: {
        value: cdktf.stringToHclTerraform(this._applicationGuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      browser_apdex_target: {
        value: cdktf.numberToHclTerraform(this._browserApdexTarget),
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
      metric_name: {
        value: cdktf.stringToHclTerraform(this._metricName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
