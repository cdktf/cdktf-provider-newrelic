/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the authentication domain the user will belong to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/user#authentication_domain_id User#authentication_domain_id}
  */
  readonly authenticationDomainId: string;
  /**
  * The email ID of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/user#email_id User#email_id}
  */
  readonly emailId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/user#name User#name}
  */
  readonly name: string;
  /**
  * The type of the user to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/user#user_type User#user_type}
  */
  readonly userType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/user newrelic_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/user newrelic_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_user',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.73.0',
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
    this._id = config.id;
    this._name = config.name;
    this._userType = config.userType;
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

  // email_id - computed: false, optional: false, required: true
  private _emailId?: string; 
  public get emailId() {
    return this.getStringAttribute('email_id');
  }
  public set emailId(value: string) {
    this._emailId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailIdInput() {
    return this._emailId;
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

  // user_type - computed: false, optional: true, required: false
  private _userType?: string; 
  public get userType() {
    return this.getStringAttribute('user_type');
  }
  public set userType(value: string) {
    this._userType = value;
  }
  public resetUserType() {
    this._userType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTypeInput() {
    return this._userType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_domain_id: cdktf.stringToTerraform(this._authenticationDomainId),
      email_id: cdktf.stringToTerraform(this._emailId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_type: cdktf.stringToTerraform(this._userType),
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
      user_type: {
        value: cdktf.stringToHclTerraform(this._userType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
