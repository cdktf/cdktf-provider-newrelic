// https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/data-sources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNewrelicUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Authentication Domain the user being queried would belong to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/data-sources/user#authentication_domain_id DataNewrelicUser#authentication_domain_id}
  */
  readonly authenticationDomainId: string;
  /**
  * The email ID of the user to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/data-sources/user#email_id DataNewrelicUser#email_id}
  */
  readonly emailId?: string;
  /**
  * The name of the user to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/data-sources/user#name DataNewrelicUser#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/data-sources/user newrelic_user}
*/
export class DataNewrelicUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNewrelicUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNewrelicUser to import
  * @param importFromId The id of the existing DataNewrelicUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/data-sources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNewrelicUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/data-sources/user newrelic_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNewrelicUserConfig
  */
  public constructor(scope: Construct, id: string, config: DataNewrelicUserConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_user',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.62.0',
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
    this._authenticationDomainId = config.authenticationDomainId;
    this._emailId = config.emailId;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_domain_id - computed: false, optional: false, required: true
  private _authenticationDomainId?: string; 
  public get authenticationDomainId() {
    return this.getStringAttribute('authentication_domain_id');
  }
  public set authenticationDomainId(value: string) {
    this._authenticationDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationDomainIdInput() {
    return this._authenticationDomainId;
  }

  // email_id - computed: true, optional: true, required: false
  private _emailId?: string; 
  public get emailId() {
    return this.getStringAttribute('email_id');
  }
  public set emailId(value: string) {
    this._emailId = value;
  }
  public resetEmailId() {
    this._emailId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailIdInput() {
    return this._emailId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_domain_id: cdktf.stringToTerraform(this._authenticationDomainId),
      email_id: cdktf.stringToTerraform(this._emailId),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_domain_id: {
        value: cdktf.stringToHclTerraform(this._authenticationDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_id: {
        value: cdktf.stringToHclTerraform(this._emailId),
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
