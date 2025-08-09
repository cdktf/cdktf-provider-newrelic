/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/browser_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BrowserApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/browser_application#account_id BrowserApplication#account_id}
  */
  readonly accountId?: number;
  /**
  * Configure cookies. The default is enabled: true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/browser_application#cookies_enabled BrowserApplication#cookies_enabled}
  */
  readonly cookiesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Configure distributed tracing in browser apps. The default is enabled: true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/browser_application#distributed_tracing_enabled BrowserApplication#distributed_tracing_enabled}
  */
  readonly distributedTracingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/browser_application#id BrowserApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Determines which browser loader is configured. The default is "SPA".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/browser_application#loader_type BrowserApplication#loader_type}
  */
  readonly loaderType?: string;
  /**
  * The name of the application to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/browser_application#name BrowserApplication#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/browser_application newrelic_browser_application}
*/
export class BrowserApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_browser_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BrowserApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BrowserApplication to import
  * @param importFromId The id of the existing BrowserApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/browser_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BrowserApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_browser_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/browser_application newrelic_browser_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BrowserApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: BrowserApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_browser_application',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.66.0',
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
    this._accountId = config.accountId;
    this._cookiesEnabled = config.cookiesEnabled;
    this._distributedTracingEnabled = config.distributedTracingEnabled;
    this._id = config.id;
    this._loaderType = config.loaderType;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: number; 
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }
  public set accountId(value: number) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // cookies_enabled - computed: false, optional: true, required: false
  private _cookiesEnabled?: boolean | cdktf.IResolvable; 
  public get cookiesEnabled() {
    return this.getBooleanAttribute('cookies_enabled');
  }
  public set cookiesEnabled(value: boolean | cdktf.IResolvable) {
    this._cookiesEnabled = value;
  }
  public resetCookiesEnabled() {
    this._cookiesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesEnabledInput() {
    return this._cookiesEnabled;
  }

  // distributed_tracing_enabled - computed: false, optional: true, required: false
  private _distributedTracingEnabled?: boolean | cdktf.IResolvable; 
  public get distributedTracingEnabled() {
    return this.getBooleanAttribute('distributed_tracing_enabled');
  }
  public set distributedTracingEnabled(value: boolean | cdktf.IResolvable) {
    this._distributedTracingEnabled = value;
  }
  public resetDistributedTracingEnabled() {
    this._distributedTracingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributedTracingEnabledInput() {
    return this._distributedTracingEnabled;
  }

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
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

  // js_config - computed: true, optional: false, required: false
  public get jsConfig() {
    return this.getStringAttribute('js_config');
  }

  // loader_type - computed: false, optional: true, required: false
  private _loaderType?: string; 
  public get loaderType() {
    return this.getStringAttribute('loader_type');
  }
  public set loaderType(value: string) {
    this._loaderType = value;
  }
  public resetLoaderType() {
    this._loaderType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loaderTypeInput() {
    return this._loaderType;
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
      account_id: cdktf.numberToTerraform(this._accountId),
      cookies_enabled: cdktf.booleanToTerraform(this._cookiesEnabled),
      distributed_tracing_enabled: cdktf.booleanToTerraform(this._distributedTracingEnabled),
      id: cdktf.stringToTerraform(this._id),
      loader_type: cdktf.stringToTerraform(this._loaderType),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.numberToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cookies_enabled: {
        value: cdktf.booleanToHclTerraform(this._cookiesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      distributed_tracing_enabled: {
        value: cdktf.booleanToHclTerraform(this._distributedTracingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loader_type: {
        value: cdktf.stringToHclTerraform(this._loaderType),
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
