// https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OneDashboardRawConfig extends cdktf.TerraformMetaArguments {
  /**
  * The New Relic account ID where you want to create the dashboard.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw#account_id OneDashboardRaw#account_id}
  */
  readonly accountId?: number;
  /**
  * The dashboard's description.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw#description OneDashboardRaw#description}
  */
  readonly description?: string;
  /**
  * The dashboard's name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw#name OneDashboardRaw#name}
  */
  readonly name: string;
  /**
  * Determines who can see or edit the dashboard. Valid values are private, public_read_only, public_read_write. Defaults to public_read_only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw#permissions OneDashboardRaw#permissions}
  */
  readonly permissions?: string;
  /**
  * page block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw#page OneDashboardRaw#page}
  */
  readonly page: OneDashboardRawPage[];
}
export interface OneDashboardRawPageWidget {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw#column OneDashboardRaw#column}
  */
  readonly column: number;
  /**
  * The configuration of the widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw#configuration OneDashboardRaw#configuration}
  */
  readonly configuration: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw#height OneDashboardRaw#height}
  */
  readonly height?: number;
  /**
  * (Optional) Related entity GUIDs. Currently only supports Dashboard entity GUIDs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw#linked_entity_guids OneDashboardRaw#linked_entity_guids}
  */
  readonly linkedEntityGuids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw#row OneDashboardRaw#row}
  */
  readonly row: number;
  /**
  * A title for the widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw#title OneDashboardRaw#title}
  */
  readonly title: string;
  /**
  * The visualization ID of the widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw#visualization_id OneDashboardRaw#visualization_id}
  */
  readonly visualizationId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw#width OneDashboardRaw#width}
  */
  readonly width?: number;
}

export function oneDashboardRawPageWidgetToTerraform(struct?: OneDashboardRawPageWidget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.numberToTerraform(struct!.column),
    configuration: cdktf.stringToTerraform(struct!.configuration),
    height: cdktf.numberToTerraform(struct!.height),
    linked_entity_guids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.linkedEntityGuids),
    row: cdktf.numberToTerraform(struct!.row),
    title: cdktf.stringToTerraform(struct!.title),
    visualization_id: cdktf.stringToTerraform(struct!.visualizationId),
    width: cdktf.numberToTerraform(struct!.width),
  }
}

export interface OneDashboardRawPage {
  /**
  * The dashboard page's description.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw#description OneDashboardRaw#description}
  */
  readonly description?: string;
  /**
  * The dashboard page's name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw#name OneDashboardRaw#name}
  */
  readonly name: string;
  /**
  * widget block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw#widget OneDashboardRaw#widget}
  */
  readonly widget?: OneDashboardRawPageWidget[];
}

export function oneDashboardRawPageToTerraform(struct?: OneDashboardRawPage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    widget: cdktf.listMapper(oneDashboardRawPageWidgetToTerraform)(struct!.widget),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw newrelic_one_dashboard_raw}
*/
export class OneDashboardRaw extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "newrelic_one_dashboard_raw";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard_raw newrelic_one_dashboard_raw} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OneDashboardRawConfig
  */
  public constructor(scope: Construct, id: string, config: OneDashboardRawConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_one_dashboard_raw',
      terraformGeneratorMetadata: {
        providerName: 'newrelic'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._description = config.description;
    this._name = config.name;
    this._permissions = config.permissions;
    this._page = config.page;
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
  private _page?: OneDashboardRawPage[]; 
  public get page() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('page') as any;
  }
  public set page(value: OneDashboardRawPage[]) {
    this._page = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pageInput() {
    return this._page;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      permissions: cdktf.stringToTerraform(this._permissions),
      page: cdktf.listMapper(oneDashboardRawPageToTerraform)(this._page),
    };
  }
}
