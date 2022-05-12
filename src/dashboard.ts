// https://www.terraform.io/docs/providers/newrelic/r/dashboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Determines who can edit the dashboard in an account. Valid values are all, editable_by_all, editable_by_owner, or read_only. Defaults to editable_by_all.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#editable Dashboard#editable}
  */
  readonly editable?: string;
  /**
  * New Relic One supports a 3 column grid or a 12 column grid. New Relic Insights supports a 3 column grid.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#grid_column_count Dashboard#grid_column_count}
  */
  readonly gridColumnCount?: number;
  /**
  * The icon for the dashboard.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#icon Dashboard#icon}
  */
  readonly icon?: string;
  /**
  * The title of the dashboard.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#title Dashboard#title}
  */
  readonly title: string;
  /**
  * Determines who can see the dashboard in an account. Valid values are all or owner. Defaults to all.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#visibility Dashboard#visibility}
  */
  readonly visibility?: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#filter Dashboard#filter}
  */
  readonly filter?: DashboardFilter;
  /**
  * widget block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#widget Dashboard#widget}
  */
  readonly widget?: DashboardWidget[] | cdktf.IResolvable;
}
export interface DashboardFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#attributes Dashboard#attributes}
  */
  readonly attributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#event_types Dashboard#event_types}
  */
  readonly eventTypes: string[];
}

export function dashboardFilterToTerraform(struct?: DashboardFilterOutputReference | DashboardFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.attributes),
    event_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.eventTypes),
  }
}

export class DashboardFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._eventTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventTypes = this._eventTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attributes = undefined;
      this._eventTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attributes = value.attributes;
      this._eventTypes = value.eventTypes;
    }
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: string[]; 
  public get attributes() {
    return cdktf.Fn.tolist(this.getListAttribute('attributes'));
  }
  public set attributes(value: string[]) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // event_types - computed: false, optional: false, required: true
  private _eventTypes?: string[]; 
  public get eventTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('event_types'));
  }
  public set eventTypes(value: string[]) {
    this._eventTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypesInput() {
    return this._eventTypes;
  }
}
export interface DashboardWidgetCompareWithPresentation {
  /**
  * The color for the rendered data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#color Dashboard#color}
  */
  readonly color: string;
  /**
  * The name for the rendered data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#name Dashboard#name}
  */
  readonly name: string;
}

export function dashboardWidgetCompareWithPresentationToTerraform(struct?: DashboardWidgetCompareWithPresentationOutputReference | DashboardWidgetCompareWithPresentation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class DashboardWidgetCompareWithPresentationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetCompareWithPresentation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetCompareWithPresentation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._name = value.name;
    }
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
    return this._color;
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
}
export interface DashboardWidgetCompareWith {
  /**
  * The offset duration for the COMPARE WITH clause.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#offset_duration Dashboard#offset_duration}
  */
  readonly offsetDuration: string;
  /**
  * presentation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#presentation Dashboard#presentation}
  */
  readonly presentation: DashboardWidgetCompareWithPresentation;
}

export function dashboardWidgetCompareWithToTerraform(struct?: DashboardWidgetCompareWith | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * The metric scope.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#scope Dashboard#scope}
  */
  readonly scope?: string;
  /**
  * The metric units.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#units Dashboard#units}
  */
  readonly units?: string;
  /**
  * The metric values to display.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#values Dashboard#values}
  */
  readonly values?: string[];
}

export function dashboardWidgetMetricToTerraform(struct?: DashboardWidgetMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#account_id Dashboard#account_id}
  */
  readonly accountId?: number;
  /**
  * Column position of widget from top left, starting at 1.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#column Dashboard#column}
  */
  readonly column: number;
  /**
  * The ID of a dashboard to link to from the widget's facets.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#drilldown_dashboard_id Dashboard#drilldown_dashboard_id}
  */
  readonly drilldownDashboardId?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#duration Dashboard#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#end_time Dashboard#end_time}
  */
  readonly endTime?: number;
  /**
  * A collection of entity ids to display data for. These are typically application IDs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#entity_ids Dashboard#entity_ids}
  */
  readonly entityIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Height of the widget. Valid values are 1 to 3 inclusive. Defaults to 1.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#height Dashboard#height}
  */
  readonly height?: number;
  /**
  * The limit of distinct data series to display.  Requires `order_by` to be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * Description of the widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#notes Dashboard#notes}
  */
  readonly notes?: string;
  /**
  * Valid NRQL query string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#nrql Dashboard#nrql}
  */
  readonly nrql?: string;
  /**
  * Set the order of result series.  Required when using `limit`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#order_by Dashboard#order_by}
  */
  readonly orderBy?: string;
  /**
  * Row position of widget from top left, starting at 1.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#row Dashboard#row}
  */
  readonly row: number;
  /**
  * The markdown source to be rendered in the widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#source Dashboard#source}
  */
  readonly source?: string;
  /**
  * Threshold above which the displayed value will be styled with a red color.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#threshold_red Dashboard#threshold_red}
  */
  readonly thresholdRed?: number;
  /**
  * Threshold above which the displayed value will be styled with a yellow color.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#threshold_yellow Dashboard#threshold_yellow}
  */
  readonly thresholdYellow?: number;
  /**
  * A title for the widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#title Dashboard#title}
  */
  readonly title: string;
  /**
  * How the widget visualizes data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#visualization Dashboard#visualization}
  */
  readonly visualization: string;
  /**
  * Width of the widget. Valid values are 1 to 3 inclusive. Defaults to 1.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#width Dashboard#width}
  */
  readonly width?: number;
  /**
  * compare_with block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#compare_with Dashboard#compare_with}
  */
  readonly compareWith?: DashboardWidgetCompareWith[] | cdktf.IResolvable;
  /**
  * metric block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#metric Dashboard#metric}
  */
  readonly metric?: DashboardWidgetMetric[] | cdktf.IResolvable;
}

export function dashboardWidgetToTerraform(struct?: DashboardWidget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard newrelic_dashboard}
*/
export class Dashboard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_dashboard";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard newrelic_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardConfig
  */
  public constructor(scope: Construct, id: string, config: DashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_dashboard',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '2.45.0',
        providerVersionConstraint: '~> 2.32'
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
    this._filter.internalValue = config.filter;
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
  private _editable?: string; 
  public get editable() {
    return this.getStringAttribute('editable');
  }
  public set editable(value: string) {
    this._editable = value;
  }
  public resetEditable() {
    this._editable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editableInput() {
    return this._editable;
  }

  // grid_column_count - computed: false, optional: true, required: false
  private _gridColumnCount?: number; 
  public get gridColumnCount() {
    return this.getNumberAttribute('grid_column_count');
  }
  public set gridColumnCount(value: number) {
    this._gridColumnCount = value;
  }
  public resetGridColumnCount() {
    this._gridColumnCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gridColumnCountInput() {
    return this._gridColumnCount;
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
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
    return this._title;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DashboardFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DashboardFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // widget - computed: false, optional: true, required: false
  private _widget?: DashboardWidget[] | cdktf.IResolvable; 
  public get widget() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('widget')));
  }
  public set widget(value: DashboardWidget[] | cdktf.IResolvable) {
    this._widget = value;
  }
  public resetWidget() {
    this._widget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetInput() {
    return this._widget;
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
      filter: dashboardFilterToTerraform(this._filter.internalValue),
      widget: cdktf.listMapper(dashboardWidgetToTerraform)(this._widget),
    };
  }
}
