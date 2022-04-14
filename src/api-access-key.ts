// https://www.terraform.io/docs/providers/newrelic/r/api_access_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiAccessKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/api_access_key#account_id ApiAccessKey#account_id}
  */
  readonly accountId: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/api_access_key#ingest_type ApiAccessKey#ingest_type}
  */
  readonly ingestType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/api_access_key#key_type ApiAccessKey#key_type}
  */
  readonly keyType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/api_access_key#name ApiAccessKey#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/api_access_key#notes ApiAccessKey#notes}
  */
  readonly notes?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/api_access_key#user_id ApiAccessKey#user_id}
  */
  readonly userId?: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/api_access_key newrelic_api_access_key}
*/
export class ApiAccessKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_api_access_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/r/api_access_key newrelic_api_access_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiAccessKeyConfig
  */
  public constructor(scope: Construct, id: string, config: ApiAccessKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_api_access_key',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '2.42.1',
        providerVersionConstraint: '~> 2.32'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._ingestType = config.ingestType;
    this._keyType = config.keyType;
    this._name = config.name;
    this._notes = config.notes;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: number; 
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }
  public set accountId(value: number) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingest_type - computed: true, optional: true, required: false
  private _ingestType?: string; 
  public get ingestType() {
    return this.getStringAttribute('ingest_type');
  }
  public set ingestType(value: string) {
    this._ingestType = value;
  }
  public resetIngestType() {
    this._ingestType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestTypeInput() {
    return this._ingestType;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // key_type - computed: false, optional: false, required: true
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // notes - computed: true, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // user_id - computed: true, optional: true, required: false
  private _userId?: number; 
  public get userId() {
    return this.getNumberAttribute('user_id');
  }
  public set userId(value: number) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      ingest_type: cdktf.stringToTerraform(this._ingestType),
      key_type: cdktf.stringToTerraform(this._keyType),
      name: cdktf.stringToTerraform(this._name),
      notes: cdktf.stringToTerraform(this._notes),
      user_id: cdktf.numberToTerraform(this._userId),
    };
  }
}
