// https://registry.terraform.io/providers/newrelic/newrelic/3.36.0/docs/resources/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the authentication domain the group will belong to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.36.0/docs/resources/group#authentication_domain_id Group#authentication_domain_id}
  */
  readonly authenticationDomainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.36.0/docs/resources/group#id Group#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.36.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * IDs of users to be added to the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.36.0/docs/resources/group#user_ids Group#user_ids}
  */
  readonly userIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.36.0/docs/resources/group newrelic_group}
*/
export class Group extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Group to import
  * @param importFromId The id of the existing Group that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.36.0/docs/resources/group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Group to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.36.0/docs/resources/group newrelic_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupConfig
  */
  public constructor(scope: Construct, id: string, config: GroupConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_group',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.36.0',
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
    this._id = config.id;
    this._name = config.name;
    this._userIds = config.userIds;
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

  // user_ids - computed: false, optional: true, required: false
  private _userIds?: string[]; 
  public get userIds() {
    return cdktf.Fn.tolist(this.getListAttribute('user_ids'));
  }
  public set userIds(value: string[]) {
    this._userIds = value;
  }
  public resetUserIds() {
    this._userIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdsInput() {
    return this._userIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_domain_id: cdktf.stringToTerraform(this._authenticationDomainId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userIds),
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
      user_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
