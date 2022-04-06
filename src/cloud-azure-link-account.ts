// https://www.terraform.io/docs/providers/newrelic/r/cloud_azure_link_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudAzureLinkAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * The New Relic account ID where you want to link the Azure account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_azure_link_account#account_id CloudAzureLinkAccount#account_id}
  */
  readonly accountId?: number;
  /**
  * Application ID for Azure account
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_azure_link_account#application_id CloudAzureLinkAccount#application_id}
  */
  readonly applicationId: string;
  /**
  * Value of the client secret from Azure
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_azure_link_account#client_secret CloudAzureLinkAccount#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Name of the linked account
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_azure_link_account#name CloudAzureLinkAccount#name}
  */
  readonly name: string;
  /**
  * Subscription ID for the Azure account
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_azure_link_account#subscription_id CloudAzureLinkAccount#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * Tenant ID for the Azure account
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_azure_link_account#tenant_id CloudAzureLinkAccount#tenant_id}
  */
  readonly tenantId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_azure_link_account newrelic_cloud_azure_link_account}
*/
export class CloudAzureLinkAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_cloud_azure_link_account";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_azure_link_account newrelic_cloud_azure_link_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudAzureLinkAccountConfig
  */
  public constructor(scope: Construct, id: string, config: CloudAzureLinkAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_cloud_azure_link_account',
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
    this._accountId = config.accountId;
    this._applicationId = config.applicationId;
    this._clientSecret = config.clientSecret;
    this._name = config.name;
    this._subscriptionId = config.subscriptionId;
    this._tenantId = config.tenantId;
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

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // id - computed: true, optional: true, required: false
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

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      application_id: cdktf.stringToTerraform(this._applicationId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      name: cdktf.stringToTerraform(this._name),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
    };
  }
}
