/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_oci_link_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudOciLinkAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * The New Relic account ID where you want to link the OCI account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_oci_link_account#account_id CloudOciLinkAccount#account_id}
  */
  readonly accountId?: number;
  /**
  * The New Relic compartment OCID in OCI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_oci_link_account#compartment_ocid CloudOciLinkAccount#compartment_ocid}
  */
  readonly compartmentOcid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_oci_link_account#id CloudOciLinkAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The OCI ingest secret OCID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_oci_link_account#ingest_vault_ocid CloudOciLinkAccount#ingest_vault_ocid}
  */
  readonly ingestVaultOcid?: string;
  /**
  * Specifies the type of integration, such as metrics, logs, or a combination of logs and metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_oci_link_account#instrumentation_type CloudOciLinkAccount#instrumentation_type}
  */
  readonly instrumentationType?: string;
  /**
  * The Logging stack identifier for the OCI account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_oci_link_account#logging_stack_ocid CloudOciLinkAccount#logging_stack_ocid}
  */
  readonly loggingStackOcid?: string;
  /**
  * The metric stack identifier for the OCI account. This field is only used for updates, not during initial creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_oci_link_account#metric_stack_ocid CloudOciLinkAccount#metric_stack_ocid}
  */
  readonly metricStackOcid?: string;
  /**
  * The linked account name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_oci_link_account#name CloudOciLinkAccount#name}
  */
  readonly name: string;
  /**
  * The client ID for OCI WIF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_oci_link_account#oci_client_id CloudOciLinkAccount#oci_client_id}
  */
  readonly ociClientId: string;
  /**
  * The client secret for OCI WIF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_oci_link_account#oci_client_secret CloudOciLinkAccount#oci_client_secret}
  */
  readonly ociClientSecret: string;
  /**
  * The OCI domain URL for WIF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_oci_link_account#oci_domain_url CloudOciLinkAccount#oci_domain_url}
  */
  readonly ociDomainUrl: string;
  /**
  * The home region of the tenancy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_oci_link_account#oci_home_region CloudOciLinkAccount#oci_home_region}
  */
  readonly ociHomeRegion: string;
  /**
  * The OCI region for the account. This field is only used for updates, not during initial creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_oci_link_account#oci_region CloudOciLinkAccount#oci_region}
  */
  readonly ociRegion?: string;
  /**
  * The OCI tenant identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_oci_link_account#tenant_id CloudOciLinkAccount#tenant_id}
  */
  readonly tenantId: string;
  /**
  * The user secret OCID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_oci_link_account#user_vault_ocid CloudOciLinkAccount#user_vault_ocid}
  */
  readonly userVaultOcid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_oci_link_account newrelic_cloud_oci_link_account}
*/
export class CloudOciLinkAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_cloud_oci_link_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudOciLinkAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudOciLinkAccount to import
  * @param importFromId The id of the existing CloudOciLinkAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_oci_link_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudOciLinkAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_cloud_oci_link_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_oci_link_account newrelic_cloud_oci_link_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudOciLinkAccountConfig
  */
  public constructor(scope: Construct, id: string, config: CloudOciLinkAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_cloud_oci_link_account',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.75.2',
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
    this._compartmentOcid = config.compartmentOcid;
    this._id = config.id;
    this._ingestVaultOcid = config.ingestVaultOcid;
    this._instrumentationType = config.instrumentationType;
    this._loggingStackOcid = config.loggingStackOcid;
    this._metricStackOcid = config.metricStackOcid;
    this._name = config.name;
    this._ociClientId = config.ociClientId;
    this._ociClientSecret = config.ociClientSecret;
    this._ociDomainUrl = config.ociDomainUrl;
    this._ociHomeRegion = config.ociHomeRegion;
    this._ociRegion = config.ociRegion;
    this._tenantId = config.tenantId;
    this._userVaultOcid = config.userVaultOcid;
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

  // compartment_ocid - computed: false, optional: false, required: true
  private _compartmentOcid?: string; 
  public get compartmentOcid() {
    return this.getStringAttribute('compartment_ocid');
  }
  public set compartmentOcid(value: string) {
    this._compartmentOcid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentOcidInput() {
    return this._compartmentOcid;
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

  // ingest_vault_ocid - computed: false, optional: true, required: false
  private _ingestVaultOcid?: string; 
  public get ingestVaultOcid() {
    return this.getStringAttribute('ingest_vault_ocid');
  }
  public set ingestVaultOcid(value: string) {
    this._ingestVaultOcid = value;
  }
  public resetIngestVaultOcid() {
    this._ingestVaultOcid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestVaultOcidInput() {
    return this._ingestVaultOcid;
  }

  // instrumentation_type - computed: false, optional: true, required: false
  private _instrumentationType?: string; 
  public get instrumentationType() {
    return this.getStringAttribute('instrumentation_type');
  }
  public set instrumentationType(value: string) {
    this._instrumentationType = value;
  }
  public resetInstrumentationType() {
    this._instrumentationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instrumentationTypeInput() {
    return this._instrumentationType;
  }

  // logging_stack_ocid - computed: false, optional: true, required: false
  private _loggingStackOcid?: string; 
  public get loggingStackOcid() {
    return this.getStringAttribute('logging_stack_ocid');
  }
  public set loggingStackOcid(value: string) {
    this._loggingStackOcid = value;
  }
  public resetLoggingStackOcid() {
    this._loggingStackOcid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingStackOcidInput() {
    return this._loggingStackOcid;
  }

  // metric_stack_ocid - computed: false, optional: true, required: false
  private _metricStackOcid?: string; 
  public get metricStackOcid() {
    return this.getStringAttribute('metric_stack_ocid');
  }
  public set metricStackOcid(value: string) {
    this._metricStackOcid = value;
  }
  public resetMetricStackOcid() {
    this._metricStackOcid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricStackOcidInput() {
    return this._metricStackOcid;
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

  // oci_client_id - computed: false, optional: false, required: true
  private _ociClientId?: string; 
  public get ociClientId() {
    return this.getStringAttribute('oci_client_id');
  }
  public set ociClientId(value: string) {
    this._ociClientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ociClientIdInput() {
    return this._ociClientId;
  }

  // oci_client_secret - computed: false, optional: false, required: true
  private _ociClientSecret?: string; 
  public get ociClientSecret() {
    return this.getStringAttribute('oci_client_secret');
  }
  public set ociClientSecret(value: string) {
    this._ociClientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ociClientSecretInput() {
    return this._ociClientSecret;
  }

  // oci_domain_url - computed: false, optional: false, required: true
  private _ociDomainUrl?: string; 
  public get ociDomainUrl() {
    return this.getStringAttribute('oci_domain_url');
  }
  public set ociDomainUrl(value: string) {
    this._ociDomainUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ociDomainUrlInput() {
    return this._ociDomainUrl;
  }

  // oci_home_region - computed: false, optional: false, required: true
  private _ociHomeRegion?: string; 
  public get ociHomeRegion() {
    return this.getStringAttribute('oci_home_region');
  }
  public set ociHomeRegion(value: string) {
    this._ociHomeRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ociHomeRegionInput() {
    return this._ociHomeRegion;
  }

  // oci_region - computed: false, optional: true, required: false
  private _ociRegion?: string; 
  public get ociRegion() {
    return this.getStringAttribute('oci_region');
  }
  public set ociRegion(value: string) {
    this._ociRegion = value;
  }
  public resetOciRegion() {
    this._ociRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociRegionInput() {
    return this._ociRegion;
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

  // user_vault_ocid - computed: false, optional: true, required: false
  private _userVaultOcid?: string; 
  public get userVaultOcid() {
    return this.getStringAttribute('user_vault_ocid');
  }
  public set userVaultOcid(value: string) {
    this._userVaultOcid = value;
  }
  public resetUserVaultOcid() {
    this._userVaultOcid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userVaultOcidInput() {
    return this._userVaultOcid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      compartment_ocid: cdktf.stringToTerraform(this._compartmentOcid),
      id: cdktf.stringToTerraform(this._id),
      ingest_vault_ocid: cdktf.stringToTerraform(this._ingestVaultOcid),
      instrumentation_type: cdktf.stringToTerraform(this._instrumentationType),
      logging_stack_ocid: cdktf.stringToTerraform(this._loggingStackOcid),
      metric_stack_ocid: cdktf.stringToTerraform(this._metricStackOcid),
      name: cdktf.stringToTerraform(this._name),
      oci_client_id: cdktf.stringToTerraform(this._ociClientId),
      oci_client_secret: cdktf.stringToTerraform(this._ociClientSecret),
      oci_domain_url: cdktf.stringToTerraform(this._ociDomainUrl),
      oci_home_region: cdktf.stringToTerraform(this._ociHomeRegion),
      oci_region: cdktf.stringToTerraform(this._ociRegion),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      user_vault_ocid: cdktf.stringToTerraform(this._userVaultOcid),
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
      compartment_ocid: {
        value: cdktf.stringToHclTerraform(this._compartmentOcid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ingest_vault_ocid: {
        value: cdktf.stringToHclTerraform(this._ingestVaultOcid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instrumentation_type: {
        value: cdktf.stringToHclTerraform(this._instrumentationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging_stack_ocid: {
        value: cdktf.stringToHclTerraform(this._loggingStackOcid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_stack_ocid: {
        value: cdktf.stringToHclTerraform(this._metricStackOcid),
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
      oci_client_id: {
        value: cdktf.stringToHclTerraform(this._ociClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oci_client_secret: {
        value: cdktf.stringToHclTerraform(this._ociClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oci_domain_url: {
        value: cdktf.stringToHclTerraform(this._ociDomainUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oci_home_region: {
        value: cdktf.stringToHclTerraform(this._ociHomeRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oci_region: {
        value: cdktf.stringToHclTerraform(this._ociRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_vault_ocid: {
        value: cdktf.stringToHclTerraform(this._userVaultOcid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
