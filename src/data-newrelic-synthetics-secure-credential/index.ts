/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.25.1/docs/data-sources/synthetics_secure_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNewrelicSyntheticsSecureCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * The New Relic account ID associated with this secure credential.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.25.1/docs/data-sources/synthetics_secure_credential#account_id DataNewrelicSyntheticsSecureCredential#account_id}
  */
  readonly accountId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.25.1/docs/data-sources/synthetics_secure_credential#id DataNewrelicSyntheticsSecureCredential#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The secure credential's key name. Regardless of the case used in the configuration, the provider will provide an upcased key to the underlying API.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.25.1/docs/data-sources/synthetics_secure_credential#key DataNewrelicSyntheticsSecureCredential#key}
  */
  readonly key: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.25.1/docs/data-sources/synthetics_secure_credential newrelic_synthetics_secure_credential}
*/
export class DataNewrelicSyntheticsSecureCredential extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_synthetics_secure_credential";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.25.1/docs/data-sources/synthetics_secure_credential newrelic_synthetics_secure_credential} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNewrelicSyntheticsSecureCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: DataNewrelicSyntheticsSecureCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_synthetics_secure_credential',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.25.1',
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
    this._id = config.id;
    this._key = config.key;
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
    };
  }
}
