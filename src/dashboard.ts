// https://www.terraform.io/docs/providers/newrelic/r/dashboard.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Determines who can edit the dashboard in an account. Valid values are all, editable_by_all, editable_by_owner, or read_only. Defaults to editable_by_all.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#editable Dashboard#editable}
  */
  readonly editable?: string;
  /**
  * New Relic One supports a 3 column grid or a 12 column grid. New Relic Insights supports a 3 column grid.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#grid_column_count Dashboard#grid_column_count}
  */
  readonly gridColumnCount?: number;
  /**
  * The icon for the dashboard.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#icon Dashboard#icon}
  */
  readonly icon?: string;
  /**
  * The title of the dashboard.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#title Dashboard#title}
  */
  readonly title: string;
  /**
  * Determines who can see the dashboard in an account. Valid values are all or owner. Defaults to all.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#visibility Dashboard#visibility}
  */
  readonly visibility?: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#filter Dashboard#filter}
  */
  readonly filter?: DashboardFilter;
  /**
  * widget block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#widget Dashboard#widget}
  */
  readonly widget?: DashboardWidget[];
}
export interface DashboardFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#attributes Dashboard#attributes}
  */
  readonly attributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#event_types Dashboard#event_types}
  */
  readonly eventTypes: string[];
}

function dashboardFilterToTerraform(struct?: DashboardFilterOutputReference | DashboardFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.attributes),
    event_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.eventTypes),
  }
}

export class DashboardFilterOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: string[] | undefined; 
  public get attributes() {
    return this.getListAttribute('attributes');
  }
  public set attributes(value: string[] | undefined) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes
  }

  // event_types - computed: false, optional: false, required: true
  private _eventTypes?: string[]; 
  public get eventTypes() {
    return this.getListAttribute('event_types');
  }
  public set eventTypes(value: string[]) {
    this._eventTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypesInput() {
    return this._eventTypes
  }
}
export interface DashboardWidgetCompareWithPresentation {
  /**
  * The color for the rendered data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#color Dashboard#color}
  */
  readonly color: string;
  /**
  * The name for the rendered data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#name Dashboard#name}
  */
  readonly name: string;
}

function dashboardWidgetCompareWithPresentationToTerraform(struct?: DashboardWidgetCompareWithPresentationOutputReference | DashboardWidgetCompareWithPresentation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class DashboardWidgetCompareWithPresentationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // color - computed: false, optional: false, required: true
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color
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
    return this._name
  }
}
export interface DashboardWidgetCompareWith {
  /**
  * The offset duration for the COMPARE WITH clause.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#offset_duration Dashboard#offset_duration}
  */
  readonly offsetDuration: string;
  /**
  * presentation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#presentation Dashboard#presentation}
  */
  readonly presentation: DashboardWidgetCompareWithPresentation;
}

function dashboardWidgetCompareWithToTerraform(struct?: DashboardWidgetCompareWith): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offset_duration: cdktf.stringToTerraform(struct!.offsetDuration),
    presentation: dashboardWidgetCompareWithPresentationToTerraform(struct!.presentation),
  }
}

export interface DashboardWidgetMetric {
  /**
  * The metric name to display.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#name Dashboard#name}
  */
  readonly name: string;
  /**
  * The metric scope.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#scope Dashboard#scope}
  */
  readonly scope?: string;
  /**
  * The metric units.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#units Dashboard#units}
  */
  readonly units?: string;
  /**
  * The metric values to display.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#values Dashboard#values}
  */
  readonly values?: string[];
}

function dashboardWidgetMetricToTerraform(struct?: DashboardWidgetMetric): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    scope: cdktf.stringToTerraform(struct!.scope),
    units: cdktf.stringToTerraform(struct!.units),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DashboardWidget {
  /**
  * The target account ID to fetch data from, if not the current account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#account_id Dashboard#account_id}
  */
  readonly accountId?: number;
  /**
  * Column position of widget from top left, starting at 1.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#column Dashboard#column}
  */
  readonly column: number;
  /**
  * The ID of a dashboard to link to from the widget's facets.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#drilldown_dashboard_id Dashboard#drilldown_dashboard_id}
  */
  readonly drilldownDashboardId?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#duration Dashboard#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#end_time Dashboard#end_time}
  */
  readonly endTime?: number;
  /**
  * A collection of entity ids to display data for. These are typically application IDs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#entity_ids Dashboard#entity_ids}
  */
  readonly entityIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Height of the widget. Valid values are 1 to 3 inclusive. Defaults to 1.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#height Dashboard#height}
  */
  readonly height?: number;
  /**
  * The limit of distinct data series to display.  Requires `order_by` to be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * Description of the widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#notes Dashboard#notes}
  */
  readonly notes?: string;
  /**
  * Valid NRQL query string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#nrql Dashboard#nrql}
  */
  readonly nrql?: string;
  /**
  * Set the order of result series.  Required when using `limit`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#order_by Dashboard#order_by}
  */
  readonly orderBy?: string;
  /**
  * Row position of widget from top left, starting at 1.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#row Dashboard#row}
  */
  readonly row: number;
  /**
  * The markdown source to be rendered in the widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#source Dashboard#source}
  */
  readonly source?: string;
  /**
  * Threshold above which the displayed value will be styled with a red color.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#threshold_red Dashboard#threshold_red}
  */
  readonly thresholdRed?: number;
  /**
  * Threshold above which the displayed value will be styled with a yellow color.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#threshold_yellow Dashboard#threshold_yellow}
  */
  readonly thresholdYellow?: number;
  /**
  * A title for the widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#title Dashboard#title}
  */
  readonly title: string;
  /**
  * How the widget visualizes data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#visualization Dashboard#visualization}
  */
  readonly visualization: string;
  /**
  * Width of the widget. Valid values are 1 to 3 inclusive. Defaults to 1.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#width Dashboard#width}
  */
  readonly width?: number;
  /**
  * compare_with block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#compare_with Dashboard#compare_with}
  */
  readonly compareWith?: DashboardWidgetCompareWith[];
  /**
  * metric block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html#metric Dashboard#metric}
  */
  readonly metric?: DashboardWidgetMetric[];
}

function dashboardWidgetToTerraform(struct?: DashboardWidget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.numberToTerraform(struct!.accountId),
    column: cdktf.numberToTerraform(struct!.column),
    drilldown_dashboard_id: cdktf.numberToTerraform(struct!.drilldownDashboardId),
    duration: cdktf.numberToTerraform(struct!.duration),
    end_time: cdktf.numberToTerraform(struct!.endTime),
    entity_ids: cdktf.listMapper(cdktf.numberToTerraform)(struct!.entityIds),
    facet: cdktf.stringToTerraform(struct!.facet),
    height: cdktf.numberToTerraform(struct!.height),
    limit: cdktf.numberToTerraform(struct!.limit),
    notes: cdktf.stringToTerraform(struct!.notes),
    nrql: cdktf.stringToTerraform(struct!.nrql),
    order_by: cdktf.stringToTerraform(struct!.orderBy),
    row: cdktf.numberToTerraform(struct!.row),
    source: cdktf.stringToTerraform(struct!.source),
    threshold_red: cdktf.numberToTerraform(struct!.thresholdRed),
    threshold_yellow: cdktf.numberToTerraform(struct!.thresholdYellow),
    title: cdktf.stringToTerraform(struct!.title),
    visualization: cdktf.stringToTerraform(struct!.visualization),
    width: cdktf.numberToTerraform(struct!.width),
    compare_with: cdktf.listMapper(dashboardWidgetCompareWithToTerraform)(struct!.compareWith),
    metric: cdktf.listMapper(dashboardWidgetMetricToTerraform)(struct!.metric),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html newrelic_dashboard}
*/
export class Dashboard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "newrelic_dashboard";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard.html newrelic_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardConfig
  */
  public constructor(scope: Construct, id: string, config: DashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_dashboard',
      terraformGeneratorMetadata: {
        providerName: 'newrelic'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._editable = config.editable;
    this._gridColumnCount = config.gridColumnCount;
    this._icon = config.icon;
    this._title = config.title;
    this._visibility = config.visibility;
    this._filter = config.filter;
    this._widget = config.widget;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dashboard_url - computed: true, optional: false, required: false
  public get dashboardUrl() {
    return this.getStringAttribute('dashboard_url');
  }

  // editable - computed: false, optional: true, required: false
  private _editable?: string | undefined; 
  public get editable() {
    return this.getStringAttribute('editable');
  }
  public set editable(value: string | undefined) {
    this._editable = value;
  }
  public resetEditable() {
    this._editable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editableInput() {
    return this._editable
  }

  // grid_column_count - computed: false, optional: true, required: false
  private _gridColumnCount?: number | undefined; 
  public get gridColumnCount() {
    return this.getNumberAttribute('grid_column_count');
  }
  public set gridColumnCount(value: number | undefined) {
    this._gridColumnCount = value;
  }
  public resetGridColumnCount() {
    this._gridColumnCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gridColumnCountInput() {
    return this._gridColumnCount
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string | undefined; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string | undefined) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string | undefined; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string | undefined) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DashboardFilter | undefined; 
  private __filterOutput = new DashboardFilterOutputReference(this as any, "filter", true);
  public get filter() {
    return this.__filterOutput;
  }
  public putFilter(value: DashboardFilter | undefined) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // widget - computed: false, optional: true, required: false
  private _widget?: DashboardWidget[] | undefined; 
  public get widget() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('widget') as any;
  }
  public set widget(value: DashboardWidget[] | undefined) {
    this._widget = value;
  }
  public resetWidget() {
    this._widget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetInput() {
    return this._widget
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      editable: cdktf.stringToTerraform(this._editable),
      grid_column_count: cdktf.numberToTerraform(this._gridColumnCount),
      icon: cdktf.stringToTerraform(this._icon),
      title: cdktf.stringToTerraform(this._title),
      visibility: cdktf.stringToTerraform(this._visibility),
      filter: dashboardFilterToTerraform(this._filter),
      widget: cdktf.listMapper(dashboardWidgetToTerraform)(this._widget),
    };
  }
}
