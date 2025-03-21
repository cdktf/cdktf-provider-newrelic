// https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/data-sources/key_transaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNewrelicKeyTransactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the New Relic account the key transaction would need to belong to. Uses the account_id in the provider{} block by default, if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/data-sources/key_transaction#account_id DataNewrelicKeyTransaction#account_id}
  */
  readonly accountId?: number;
  /**
  * GUID of the key transaction in New Relic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/data-sources/key_transaction#guid DataNewrelicKeyTransaction#guid}
  */
  readonly guid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/data-sources/key_transaction#id DataNewrelicKeyTransaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the key transaction in New Relic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/data-sources/key_transaction#name DataNewrelicKeyTransaction#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/data-sources/key_transaction newrelic_key_transaction}
*/
export class DataNewrelicKeyTransaction extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_key_transaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNewrelicKeyTransaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNewrelicKeyTransaction to import
  * @param importFromId The id of the existing DataNewrelicKeyTransaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/data-sources/key_transaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNewrelicKeyTransaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_key_transaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/data-sources/key_transaction newrelic_key_transaction} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNewrelicKeyTransactionConfig
  */
  public constructor(scope: Construct, id: string, config: DataNewrelicKeyTransactionConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_key_transaction',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.59.0',
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
    this._guid = config.guid;
    this._id = config.id;
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

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // guid - computed: true, optional: true, required: false
  private _guid?: string; 
  public get guid() {
    return this.getStringAttribute('guid');
  }
  public set guid(value: string) {
    this._guid = value;
  }
  public resetGuid() {
    this._guid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guidInput() {
    return this._guid;
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
      account_id: cdktf.numberToTerraform(this._accountId),
      guid: cdktf.stringToTerraform(this._guid),
      id: cdktf.stringToTerraform(this._id),
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
      guid: {
        value: cdktf.stringToHclTerraform(this._guid),
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
