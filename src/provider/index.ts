/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NewrelicProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs#account_id NewrelicProvider#account_id}
  */
  readonly accountId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs#admin_api_key NewrelicProvider#admin_api_key}
  */
  readonly adminApiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs#api_key NewrelicProvider#api_key}
  */
  readonly apiKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs#api_url NewrelicProvider#api_url}
  */
  readonly apiUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs#cacert_file NewrelicProvider#cacert_file}
  */
  readonly cacertFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs#infrastructure_api_url NewrelicProvider#infrastructure_api_url}
  */
  readonly infrastructureApiUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs#insecure_skip_verify NewrelicProvider#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs#insights_insert_key NewrelicProvider#insights_insert_key}
  */
  readonly insightsInsertKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs#insights_insert_url NewrelicProvider#insights_insert_url}
  */
  readonly insightsInsertUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs#insights_query_url NewrelicProvider#insights_query_url}
  */
  readonly insightsQueryUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs#nerdgraph_api_url NewrelicProvider#nerdgraph_api_url}
  */
  readonly nerdgraphApiUrl?: string;
  /**
  * The data center for which your New Relic account is configured. Only one region per provider block is permitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs#region NewrelicProvider#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs#synthetics_api_url NewrelicProvider#synthetics_api_url}
  */
  readonly syntheticsApiUrl?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs#alias NewrelicProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs newrelic}
*/
export class NewrelicProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NewrelicProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NewrelicProvider to import
  * @param importFromId The id of the existing NewrelicProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NewrelicProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "newrelic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs newrelic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NewrelicProviderConfig
  */
  public constructor(scope: Construct, id: string, config: NewrelicProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.72.1',
        providerVersionConstraint: '~> 3.7'
      },
      terraformProviderSource: 'newrelic/newrelic'
    });
    this._accountId = config.accountId;
    this._adminApiKey = config.adminApiKey;
    this._apiKey = config.apiKey;
    this._apiUrl = config.apiUrl;
    this._cacertFile = config.cacertFile;
    this._infrastructureApiUrl = config.infrastructureApiUrl;
    this._insecureSkipVerify = config.insecureSkipVerify;
    this._insightsInsertKey = config.insightsInsertKey;
    this._insightsInsertUrl = config.insightsInsertUrl;
    this._insightsQueryUrl = config.insightsQueryUrl;
    this._nerdgraphApiUrl = config.nerdgraphApiUrl;
    this._region = config.region;
    this._syntheticsApiUrl = config.syntheticsApiUrl;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: number; 
  public get accountId() {
    return this._accountId;
  }
  public set accountId(value: number | undefined) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // admin_api_key - computed: false, optional: true, required: false
  private _adminApiKey?: string; 
  public get adminApiKey() {
    return this._adminApiKey;
  }
  public set adminApiKey(value: string | undefined) {
    this._adminApiKey = value;
  }
  public resetAdminApiKey() {
    this._adminApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminApiKeyInput() {
    return this._adminApiKey;
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string | undefined) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_url - computed: false, optional: true, required: false
  private _apiUrl?: string; 
  public get apiUrl() {
    return this._apiUrl;
  }
  public set apiUrl(value: string | undefined) {
    this._apiUrl = value;
  }
  public resetApiUrl() {
    this._apiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // cacert_file - computed: false, optional: true, required: false
  private _cacertFile?: string; 
  public get cacertFile() {
    return this._cacertFile;
  }
  public set cacertFile(value: string | undefined) {
    this._cacertFile = value;
  }
  public resetCacertFile() {
    this._cacertFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertFileInput() {
    return this._cacertFile;
  }

  // infrastructure_api_url - computed: false, optional: true, required: false
  private _infrastructureApiUrl?: string; 
  public get infrastructureApiUrl() {
    return this._infrastructureApiUrl;
  }
  public set infrastructureApiUrl(value: string | undefined) {
    this._infrastructureApiUrl = value;
  }
  public resetInfrastructureApiUrl() {
    this._infrastructureApiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureApiUrlInput() {
    return this._infrastructureApiUrl;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this._insecureSkipVerify;
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable | undefined) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // insights_insert_key - computed: false, optional: true, required: false
  private _insightsInsertKey?: string; 
  public get insightsInsertKey() {
    return this._insightsInsertKey;
  }
  public set insightsInsertKey(value: string | undefined) {
    this._insightsInsertKey = value;
  }
  public resetInsightsInsertKey() {
    this._insightsInsertKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insightsInsertKeyInput() {
    return this._insightsInsertKey;
  }

  // insights_insert_url - computed: false, optional: true, required: false
  private _insightsInsertUrl?: string; 
  public get insightsInsertUrl() {
    return this._insightsInsertUrl;
  }
  public set insightsInsertUrl(value: string | undefined) {
    this._insightsInsertUrl = value;
  }
  public resetInsightsInsertUrl() {
    this._insightsInsertUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insightsInsertUrlInput() {
    return this._insightsInsertUrl;
  }

  // insights_query_url - computed: false, optional: true, required: false
  private _insightsQueryUrl?: string; 
  public get insightsQueryUrl() {
    return this._insightsQueryUrl;
  }
  public set insightsQueryUrl(value: string | undefined) {
    this._insightsQueryUrl = value;
  }
  public resetInsightsQueryUrl() {
    this._insightsQueryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insightsQueryUrlInput() {
    return this._insightsQueryUrl;
  }

  // nerdgraph_api_url - computed: false, optional: true, required: false
  private _nerdgraphApiUrl?: string; 
  public get nerdgraphApiUrl() {
    return this._nerdgraphApiUrl;
  }
  public set nerdgraphApiUrl(value: string | undefined) {
    this._nerdgraphApiUrl = value;
  }
  public resetNerdgraphApiUrl() {
    this._nerdgraphApiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nerdgraphApiUrlInput() {
    return this._nerdgraphApiUrl;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // synthetics_api_url - computed: false, optional: true, required: false
  private _syntheticsApiUrl?: string; 
  public get syntheticsApiUrl() {
    return this._syntheticsApiUrl;
  }
  public set syntheticsApiUrl(value: string | undefined) {
    this._syntheticsApiUrl = value;
  }
  public resetSyntheticsApiUrl() {
    this._syntheticsApiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syntheticsApiUrlInput() {
    return this._syntheticsApiUrl;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      admin_api_key: cdktf.stringToTerraform(this._adminApiKey),
      api_key: cdktf.stringToTerraform(this._apiKey),
      api_url: cdktf.stringToTerraform(this._apiUrl),
      cacert_file: cdktf.stringToTerraform(this._cacertFile),
      infrastructure_api_url: cdktf.stringToTerraform(this._infrastructureApiUrl),
      insecure_skip_verify: cdktf.booleanToTerraform(this._insecureSkipVerify),
      insights_insert_key: cdktf.stringToTerraform(this._insightsInsertKey),
      insights_insert_url: cdktf.stringToTerraform(this._insightsInsertUrl),
      insights_query_url: cdktf.stringToTerraform(this._insightsQueryUrl),
      nerdgraph_api_url: cdktf.stringToTerraform(this._nerdgraphApiUrl),
      region: cdktf.stringToTerraform(this._region),
      synthetics_api_url: cdktf.stringToTerraform(this._syntheticsApiUrl),
      alias: cdktf.stringToTerraform(this._alias),
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
      admin_api_key: {
        value: cdktf.stringToHclTerraform(this._adminApiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_url: {
        value: cdktf.stringToHclTerraform(this._apiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cacert_file: {
        value: cdktf.stringToHclTerraform(this._cacertFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      infrastructure_api_url: {
        value: cdktf.stringToHclTerraform(this._infrastructureApiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure_skip_verify: {
        value: cdktf.booleanToHclTerraform(this._insecureSkipVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      insights_insert_key: {
        value: cdktf.stringToHclTerraform(this._insightsInsertKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insights_insert_url: {
        value: cdktf.stringToHclTerraform(this._insightsInsertUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insights_query_url: {
        value: cdktf.stringToHclTerraform(this._insightsQueryUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nerdgraph_api_url: {
        value: cdktf.stringToHclTerraform(this._nerdgraphApiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      synthetics_api_url: {
        value: cdktf.stringToHclTerraform(this._syntheticsApiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
