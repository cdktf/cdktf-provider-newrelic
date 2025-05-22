// https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/data-sources/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNewrelicGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Authentication Domain the group being queried would belong to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/data-sources/group#authentication_domain_id DataNewrelicGroup#authentication_domain_id}
  */
  readonly authenticationDomainId: string;
  /**
  * The name of the group to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/data-sources/group#name DataNewrelicGroup#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/data-sources/group newrelic_group}
*/
export class DataNewrelicGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNewrelicGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNewrelicGroup to import
  * @param importFromId The id of the existing DataNewrelicGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/data-sources/group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNewrelicGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/data-sources/group newrelic_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNewrelicGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataNewrelicGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_group',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.61.3',
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

  // id - computed: true, optional: false, required: false
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

  // user_ids - computed: true, optional: false, required: false
  public get userIds() {
    return this.getListAttribute('user_ids');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_domain_id: cdktf.stringToTerraform(this._authenticationDomainId),
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
