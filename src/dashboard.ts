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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/dashboard#id Dashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
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

export class DashboardWidgetCompareWithOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DashboardWidgetCompareWith | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offsetDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.offsetDuration = this._offsetDuration;
    }
    if (this._presentation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presentation = this._presentation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetCompareWith | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._offsetDuration = undefined;
      this._presentation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._offsetDuration = value.offsetDuration;
      this._presentation.internalValue = value.presentation;
    }
  }

  // offset_duration - computed: false, optional: false, required: true
  private _offsetDuration?: string; 
  public get offsetDuration() {
    return this.getStringAttribute('offset_duration');
  }
  public set offsetDuration(value: string) {
    this._offsetDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetDurationInput() {
    return this._offsetDuration;
  }

  // presentation - computed: false, optional: false, required: true
  private _presentation = new DashboardWidgetCompareWithPresentationOutputReference(this, "presentation");
  public get presentation() {
    return this._presentation;
  }
  public putPresentation(value: DashboardWidgetCompareWithPresentation) {
    this._presentation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get presentationInput() {
    return this._presentation.internalValue;
  }
}

export class DashboardWidgetCompareWithList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetCompareWith[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DashboardWidgetCompareWithOutputReference {
    return new DashboardWidgetCompareWithOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
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

export class DashboardWidgetMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DashboardWidgetMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._units !== undefined) {
      hasAnyValues = true;
      internalValueResult.units = this._units;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._scope = undefined;
      this._units = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._scope = value.scope;
      this._units = value.units;
      this._values = value.values;
    }
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

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // units - computed: false, optional: true, required: false
  private _units?: string; 
  public get units() {
    return this.getStringAttribute('units');
  }
  public set units(value: string) {
    this._units = value;
  }
  public resetUnits() {
    this._units = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DashboardWidgetMetricList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetMetric[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DashboardWidgetMetricOutputReference {
    return new DashboardWidgetMetricOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
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

export class DashboardWidgetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DashboardWidget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._drilldownDashboardId !== undefined) {
      hasAnyValues = true;
      internalValueResult.drilldownDashboardId = this._drilldownDashboardId;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._entityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityIds = this._entityIds;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.notes = this._notes;
    }
    if (this._nrql !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrql = this._nrql;
    }
    if (this._orderBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderBy = this._orderBy;
    }
    if (this._row !== undefined) {
      hasAnyValues = true;
      internalValueResult.row = this._row;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._thresholdRed !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdRed = this._thresholdRed;
    }
    if (this._thresholdYellow !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdYellow = this._thresholdYellow;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._visualization !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualization = this._visualization;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._compareWith?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compareWith = this._compareWith?.internalValue;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._column = undefined;
      this._drilldownDashboardId = undefined;
      this._duration = undefined;
      this._endTime = undefined;
      this._entityIds = undefined;
      this._facet = undefined;
      this._height = undefined;
      this._limit = undefined;
      this._notes = undefined;
      this._nrql = undefined;
      this._orderBy = undefined;
      this._row = undefined;
      this._source = undefined;
      this._thresholdRed = undefined;
      this._thresholdYellow = undefined;
      this._title = undefined;
      this._visualization = undefined;
      this._width = undefined;
      this._compareWith.internalValue = undefined;
      this._metric.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._column = value.column;
      this._drilldownDashboardId = value.drilldownDashboardId;
      this._duration = value.duration;
      this._endTime = value.endTime;
      this._entityIds = value.entityIds;
      this._facet = value.facet;
      this._height = value.height;
      this._limit = value.limit;
      this._notes = value.notes;
      this._nrql = value.nrql;
      this._orderBy = value.orderBy;
      this._row = value.row;
      this._source = value.source;
      this._thresholdRed = value.thresholdRed;
      this._thresholdYellow = value.thresholdYellow;
      this._title = value.title;
      this._visualization = value.visualization;
      this._width = value.width;
      this._compareWith.internalValue = value.compareWith;
      this._metric.internalValue = value.metric;
    }
  }

  // account_id - computed: false, optional: true, required: false
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

  // column - computed: false, optional: false, required: true
  private _column?: number; 
  public get column() {
    return this.getNumberAttribute('column');
  }
  public set column(value: number) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // drilldown_dashboard_id - computed: false, optional: true, required: false
  private _drilldownDashboardId?: number; 
  public get drilldownDashboardId() {
    return this.getNumberAttribute('drilldown_dashboard_id');
  }
  public set drilldownDashboardId(value: number) {
    this._drilldownDashboardId = value;
  }
  public resetDrilldownDashboardId() {
    this._drilldownDashboardId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drilldownDashboardIdInput() {
    return this._drilldownDashboardId;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // entity_ids - computed: false, optional: true, required: false
  private _entityIds?: number[]; 
  public get entityIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('entity_ids')));
  }
  public set entityIds(value: number[]) {
    this._entityIds = value;
  }
  public resetEntityIds() {
    this._entityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdsInput() {
    return this._entityIds;
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // height - computed: false, optional: true, required: false
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // notes - computed: false, optional: true, required: false
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

  // nrql - computed: false, optional: true, required: false
  private _nrql?: string; 
  public get nrql() {
    return this.getStringAttribute('nrql');
  }
  public set nrql(value: string) {
    this._nrql = value;
  }
  public resetNrql() {
    this._nrql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nrqlInput() {
    return this._nrql;
  }

  // order_by - computed: false, optional: true, required: false
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }

  // raw_metric_name - computed: true, optional: false, required: false
  public get rawMetricName() {
    return this.getStringAttribute('raw_metric_name');
  }

  // row - computed: false, optional: false, required: true
  private _row?: number; 
  public get row() {
    return this.getNumberAttribute('row');
  }
  public set row(value: number) {
    this._row = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowInput() {
    return this._row;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // threshold_red - computed: false, optional: true, required: false
  private _thresholdRed?: number; 
  public get thresholdRed() {
    return this.getNumberAttribute('threshold_red');
  }
  public set thresholdRed(value: number) {
    this._thresholdRed = value;
  }
  public resetThresholdRed() {
    this._thresholdRed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdRedInput() {
    return this._thresholdRed;
  }

  // threshold_yellow - computed: false, optional: true, required: false
  private _thresholdYellow?: number; 
  public get thresholdYellow() {
    return this.getNumberAttribute('threshold_yellow');
  }
  public set thresholdYellow(value: number) {
    this._thresholdYellow = value;
  }
  public resetThresholdYellow() {
    this._thresholdYellow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdYellowInput() {
    return this._thresholdYellow;
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

  // visualization - computed: false, optional: false, required: true
  private _visualization?: string; 
  public get visualization() {
    return this.getStringAttribute('visualization');
  }
  public set visualization(value: string) {
    this._visualization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationInput() {
    return this._visualization;
  }

  // widget_id - computed: true, optional: false, required: false
  public get widgetId() {
    return this.getNumberAttribute('widget_id');
  }

  // width - computed: false, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // compare_with - computed: false, optional: true, required: false
  private _compareWith = new DashboardWidgetCompareWithList(this, "compare_with", true);
  public get compareWith() {
    return this._compareWith;
  }
  public putCompareWith(value: DashboardWidgetCompareWith[] | cdktf.IResolvable) {
    this._compareWith.internalValue = value;
  }
  public resetCompareWith() {
    this._compareWith.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compareWithInput() {
    return this._compareWith.internalValue;
  }

  // metric - computed: false, optional: true, required: false
  private _metric = new DashboardWidgetMetricList(this, "metric", true);
  public get metric() {
    return this._metric;
  }
  public putMetric(value: DashboardWidgetMetric[] | cdktf.IResolvable) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }
}

export class DashboardWidgetList extends cdktf.ComplexList {
  public internalValue? : DashboardWidget[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DashboardWidgetOutputReference {
    return new DashboardWidgetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
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
        providerVersion: '2.48.1',
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
    this._id = config.id;
    this._title = config.title;
    this._visibility = config.visibility;
    this._filter.internalValue = config.filter;
    this._widget.internalValue = config.widget;
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
  private _widget = new DashboardWidgetList(this, "widget", true);
  public get widget() {
    return this._widget;
  }
  public putWidget(value: DashboardWidget[] | cdktf.IResolvable) {
    this._widget.internalValue = value;
  }
  public resetWidget() {
    this._widget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetInput() {
    return this._widget.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      editable: cdktf.stringToTerraform(this._editable),
      grid_column_count: cdktf.numberToTerraform(this._gridColumnCount),
      icon: cdktf.stringToTerraform(this._icon),
      id: cdktf.stringToTerraform(this._id),
      title: cdktf.stringToTerraform(this._title),
      visibility: cdktf.stringToTerraform(this._visibility),
      filter: dashboardFilterToTerraform(this._filter.internalValue),
      widget: cdktf.listMapper(dashboardWidgetToTerraform)(this._widget.internalValue),
    };
  }
}
