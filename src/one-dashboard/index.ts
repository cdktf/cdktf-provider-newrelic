// generated from terraform resource schema

import { OneDashboardPage, 
oneDashboardPageToTerraform, 
OneDashboardPageList, 
OneDashboardVariable, 
oneDashboardVariableToTerraform, 
OneDashboardVariableList} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OneDashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * The New Relic account ID where you want to create the dashboard.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}
  */
  readonly accountId?: number;
  /**
  * The dashboard's description.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#description OneDashboard#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#id OneDashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The dashboard's name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
  /**
  * Determines who can see or edit the dashboard. Valid values are private, public_read_only, public_read_write. Defaults to public_read_only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#permissions OneDashboard#permissions}
  */
  readonly permissions?: string;
  /**
  * page block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#page OneDashboard#page}
  */
  readonly page: OneDashboardPage[] | cdktf.IResolvable;
  /**
  * variable block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#variable OneDashboard#variable}
  */
  readonly variable?: OneDashboardVariable[] | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard newrelic_one_dashboard}
*/
export class OneDashboard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_one_dashboard";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard newrelic_one_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OneDashboardConfig
  */
  public constructor(scope: Construct, id: string, config: OneDashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_one_dashboard',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.20.1',
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
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._permissions = config.permissions;
    this._page.internalValue = config.page;
    this._variable.internalValue = config.variable;
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

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
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

  // permalink - computed: true, optional: false, required: false
  public get permalink() {
    return this.getStringAttribute('permalink');
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // page - computed: false, optional: false, required: true
  private _page = new OneDashboardPageList(this, "page", false);
  public get page() {
    return this._page;
  }
  public putPage(value: OneDashboardPage[] | cdktf.IResolvable) {
    this._page.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pageInput() {
    return this._page.internalValue;
  }

  // variable - computed: false, optional: true, required: false
  private _variable = new OneDashboardVariableList(this, "variable", false);
  public get variable() {
    return this._variable;
  }
  public putVariable(value: OneDashboardVariable[] | cdktf.IResolvable) {
    this._variable.internalValue = value;
  }
  public resetVariable() {
    this._variable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      permissions: cdktf.stringToTerraform(this._permissions),
      page: cdktf.listMapper(oneDashboardPageToTerraform, true)(this._page.internalValue),
      variable: cdktf.listMapper(oneDashboardVariableToTerraform, true)(this._variable.internalValue),
    };
  }
}
