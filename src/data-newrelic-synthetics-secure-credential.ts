// https://www.terraform.io/docs/providers/newrelic/d/synthetics_secure_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNewrelicSyntheticsSecureCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * The secure credential's key name. Regardless of the case used in the configuration, the provider will provide an upcased key to the underlying API.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/synthetics_secure_credential#key DataNewrelicSyntheticsSecureCredential#key}
  */
  readonly key: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/d/synthetics_secure_credential newrelic_synthetics_secure_credential}
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
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/d/synthetics_secure_credential newrelic_synthetics_secure_credential} Data Source
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
        providerVersion: '2.45.1',
        providerVersionConstraint: '~> 2.32'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._key = config.key;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      key: cdktf.stringToTerraform(this._key),
    };
  }
}
