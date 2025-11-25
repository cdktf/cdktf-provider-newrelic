/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktf from 'cdktf';
import { OneDashboardPageWidgetLogTableNullValuesSeriesOverrides,
oneDashboardPageWidgetLogTableNullValuesSeriesOverridesToTerraform,
oneDashboardPageWidgetLogTableNullValuesSeriesOverridesToHclTerraform,
OneDashboardPageWidgetLogTableNullValuesSeriesOverridesList,
OneDashboardPageWidgetLogTableColors,
oneDashboardPageWidgetLogTableColorsToTerraform,
oneDashboardPageWidgetLogTableColorsToHclTerraform,
OneDashboardPageWidgetLogTableColorsList,
OneDashboardPageWidgetLogTableDataFormat,
oneDashboardPageWidgetLogTableDataFormatToTerraform,
oneDashboardPageWidgetLogTableDataFormatToHclTerraform,
OneDashboardPageWidgetLogTableDataFormatList,
OneDashboardPageWidgetLogTableInitialSorting,
oneDashboardPageWidgetLogTableInitialSortingToTerraform,
oneDashboardPageWidgetLogTableInitialSortingToHclTerraform,
OneDashboardPageWidgetLogTableInitialSortingOutputReference,
OneDashboardPageWidgetLogTableNrqlQuery,
oneDashboardPageWidgetLogTableNrqlQueryToTerraform,
oneDashboardPageWidgetLogTableNrqlQueryToHclTerraform,
OneDashboardPageWidgetLogTableNrqlQueryList,
OneDashboardPageWidgetArea,
oneDashboardPageWidgetAreaToTerraform,
oneDashboardPageWidgetAreaToHclTerraform,
OneDashboardPageWidgetAreaList,
OneDashboardPageWidgetBar,
oneDashboardPageWidgetBarToTerraform,
oneDashboardPageWidgetBarToHclTerraform,
OneDashboardPageWidgetBarList,
OneDashboardPageWidgetBillboard,
oneDashboardPageWidgetBillboardToTerraform,
oneDashboardPageWidgetBillboardToHclTerraform,
OneDashboardPageWidgetBillboardList,
OneDashboardPageWidgetBullet,
oneDashboardPageWidgetBulletToTerraform,
oneDashboardPageWidgetBulletToHclTerraform,
OneDashboardPageWidgetBulletList,
OneDashboardPageWidgetFunnel,
oneDashboardPageWidgetFunnelToTerraform,
oneDashboardPageWidgetFunnelToHclTerraform,
OneDashboardPageWidgetFunnelList,
OneDashboardPageWidgetHeatmap,
oneDashboardPageWidgetHeatmapToTerraform,
oneDashboardPageWidgetHeatmapToHclTerraform,
OneDashboardPageWidgetHeatmapList,
OneDashboardPageWidgetHistogram,
oneDashboardPageWidgetHistogramToTerraform,
oneDashboardPageWidgetHistogramToHclTerraform,
OneDashboardPageWidgetHistogramList,
OneDashboardPageWidgetJson,
oneDashboardPageWidgetJsonToTerraform,
oneDashboardPageWidgetJsonToHclTerraform,
OneDashboardPageWidgetJsonList,
OneDashboardPageWidgetLine,
oneDashboardPageWidgetLineToTerraform,
oneDashboardPageWidgetLineToHclTerraform,
OneDashboardPageWidgetLineList } from './structs0'
export interface OneDashboardPageWidgetLogTableNullValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetLogTableNullValuesSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetLogTableNullValuesToTerraform(struct?: OneDashboardPageWidgetLogTableNullValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktf.stringToTerraform(struct!.nullValue),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetLogTableNullValuesSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetLogTableNullValuesToHclTerraform(struct?: OneDashboardPageWidgetLogTableNullValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    null_value: {
      value: cdktf.stringToHclTerraform(struct!.nullValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetLogTableNullValuesSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetLogTableNullValuesSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetLogTableNullValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetLogTableNullValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValue = this._nullValue;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetLogTableNullValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nullValue = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nullValue = value.nullValue;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // null_value - computed: false, optional: true, required: false
  private _nullValue?: string; 
  public get nullValue() {
    return this.getStringAttribute('null_value');
  }
  public set nullValue(value: string) {
    this._nullValue = value;
  }
  public resetNullValue() {
    this._nullValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueInput() {
    return this._nullValue;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetLogTableNullValuesSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetLogTableNullValuesSeriesOverrides[] | cdktf.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetLogTableNullValuesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetLogTableNullValues[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetLogTableNullValuesOutputReference {
    return new OneDashboardPageWidgetLogTableNullValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetLogTableUnitsSeriesOverrides {
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
  /**
  * Unit name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
}

export function oneDashboardPageWidgetLogTableUnitsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetLogTableUnitsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    series_name: cdktf.stringToTerraform(struct!.seriesName),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function oneDashboardPageWidgetLogTableUnitsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetLogTableUnitsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    series_name: {
      value: cdktf.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetLogTableUnitsSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetLogTableUnitsSeriesOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetLogTableUnitsSeriesOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._seriesName = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._seriesName = value.seriesName;
      this._unit = value.unit;
    }
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class OneDashboardPageWidgetLogTableUnitsSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetLogTableUnitsSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetLogTableUnitsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetLogTableUnitsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetLogTableUnits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetLogTableUnitsSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetLogTableUnitsToTerraform(struct?: OneDashboardPageWidgetLogTableUnits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetLogTableUnitsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetLogTableUnitsToHclTerraform(struct?: OneDashboardPageWidgetLogTableUnits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetLogTableUnitsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetLogTableUnitsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetLogTableUnitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetLogTableUnits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetLogTableUnits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetLogTableUnitsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetLogTableUnitsSeriesOverrides[] | cdktf.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetLogTableUnitsList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetLogTableUnits[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetLogTableUnitsOutputReference {
    return new OneDashboardPageWidgetLogTableUnitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetLogTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#facet_show_other_series OneDashboard#facet_show_other_series}
  */
  readonly facetShowOtherSeries?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}
  */
  readonly ignoreTimeRange?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#legend_enabled OneDashboard#legend_enabled}
  */
  readonly legendEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#refresh_rate OneDashboard#refresh_rate}
  */
  readonly refreshRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * A title for the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#width OneDashboard#width}
  */
  readonly width?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#y_axis_left_max OneDashboard#y_axis_left_max}
  */
  readonly yAxisLeftMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#y_axis_left_min OneDashboard#y_axis_left_min}
  */
  readonly yAxisLeftMin?: number;
  /**
  * colors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#colors OneDashboard#colors}
  */
  readonly colors?: OneDashboardPageWidgetLogTableColors[] | cdktf.IResolvable;
  /**
  * data_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#data_format OneDashboard#data_format}
  */
  readonly dataFormat?: OneDashboardPageWidgetLogTableDataFormat[] | cdktf.IResolvable;
  /**
  * initial_sorting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#initial_sorting OneDashboard#initial_sorting}
  */
  readonly initialSorting?: OneDashboardPageWidgetLogTableInitialSorting;
  /**
  * nrql_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery: OneDashboardPageWidgetLogTableNrqlQuery[] | cdktf.IResolvable;
  /**
  * null_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#null_values OneDashboard#null_values}
  */
  readonly nullValues?: OneDashboardPageWidgetLogTableNullValues[] | cdktf.IResolvable;
  /**
  * units block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#units OneDashboard#units}
  */
  readonly units?: OneDashboardPageWidgetLogTableUnits[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetLogTableToTerraform(struct?: OneDashboardPageWidgetLogTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.numberToTerraform(struct!.column),
    facet_show_other_series: cdktf.booleanToTerraform(struct!.facetShowOtherSeries),
    height: cdktf.numberToTerraform(struct!.height),
    ignore_time_range: cdktf.booleanToTerraform(struct!.ignoreTimeRange),
    legend_enabled: cdktf.booleanToTerraform(struct!.legendEnabled),
    refresh_rate: cdktf.stringToTerraform(struct!.refreshRate),
    row: cdktf.numberToTerraform(struct!.row),
    title: cdktf.stringToTerraform(struct!.title),
    width: cdktf.numberToTerraform(struct!.width),
    y_axis_left_max: cdktf.numberToTerraform(struct!.yAxisLeftMax),
    y_axis_left_min: cdktf.numberToTerraform(struct!.yAxisLeftMin),
    colors: cdktf.listMapper(oneDashboardPageWidgetLogTableColorsToTerraform, true)(struct!.colors),
    data_format: cdktf.listMapper(oneDashboardPageWidgetLogTableDataFormatToTerraform, true)(struct!.dataFormat),
    initial_sorting: oneDashboardPageWidgetLogTableInitialSortingToTerraform(struct!.initialSorting),
    nrql_query: cdktf.listMapper(oneDashboardPageWidgetLogTableNrqlQueryToTerraform, true)(struct!.nrqlQuery),
    null_values: cdktf.listMapper(oneDashboardPageWidgetLogTableNullValuesToTerraform, true)(struct!.nullValues),
    units: cdktf.listMapper(oneDashboardPageWidgetLogTableUnitsToTerraform, true)(struct!.units),
  }
}


export function oneDashboardPageWidgetLogTableToHclTerraform(struct?: OneDashboardPageWidgetLogTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktf.numberToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    facet_show_other_series: {
      value: cdktf.booleanToHclTerraform(struct!.facetShowOtherSeries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    height: {
      value: cdktf.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_time_range: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreTimeRange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    legend_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.legendEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    refresh_rate: {
      value: cdktf.stringToHclTerraform(struct!.refreshRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    row: {
      value: cdktf.numberToHclTerraform(struct!.row),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_left_max: {
      value: cdktf.numberToHclTerraform(struct!.yAxisLeftMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_left_min: {
      value: cdktf.numberToHclTerraform(struct!.yAxisLeftMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    colors: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetLogTableColorsToHclTerraform, true)(struct!.colors),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetLogTableColorsList",
    },
    data_format: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetLogTableDataFormatToHclTerraform, true)(struct!.dataFormat),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetLogTableDataFormatList",
    },
    initial_sorting: {
      value: oneDashboardPageWidgetLogTableInitialSortingToHclTerraform(struct!.initialSorting),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetLogTableInitialSortingList",
    },
    nrql_query: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetLogTableNrqlQueryToHclTerraform, true)(struct!.nrqlQuery),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetLogTableNrqlQueryList",
    },
    null_values: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetLogTableNullValuesToHclTerraform, true)(struct!.nullValues),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetLogTableNullValuesList",
    },
    units: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetLogTableUnitsToHclTerraform, true)(struct!.units),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetLogTableUnitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetLogTableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetLogTable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._facetShowOtherSeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.facetShowOtherSeries = this._facetShowOtherSeries;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._ignoreTimeRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreTimeRange = this._ignoreTimeRange;
    }
    if (this._legendEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.legendEnabled = this._legendEnabled;
    }
    if (this._refreshRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshRate = this._refreshRate;
    }
    if (this._row !== undefined) {
      hasAnyValues = true;
      internalValueResult.row = this._row;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._yAxisLeftMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisLeftMax = this._yAxisLeftMax;
    }
    if (this._yAxisLeftMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisLeftMin = this._yAxisLeftMin;
    }
    if (this._colors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.colors = this._colors?.internalValue;
    }
    if (this._dataFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFormat = this._dataFormat?.internalValue;
    }
    if (this._initialSorting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialSorting = this._initialSorting?.internalValue;
    }
    if (this._nrqlQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrqlQuery = this._nrqlQuery?.internalValue;
    }
    if (this._nullValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValues = this._nullValues?.internalValue;
    }
    if (this._units?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.units = this._units?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetLogTable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._facetShowOtherSeries = undefined;
      this._height = undefined;
      this._ignoreTimeRange = undefined;
      this._legendEnabled = undefined;
      this._refreshRate = undefined;
      this._row = undefined;
      this._title = undefined;
      this._width = undefined;
      this._yAxisLeftMax = undefined;
      this._yAxisLeftMin = undefined;
      this._colors.internalValue = undefined;
      this._dataFormat.internalValue = undefined;
      this._initialSorting.internalValue = undefined;
      this._nrqlQuery.internalValue = undefined;
      this._nullValues.internalValue = undefined;
      this._units.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._facetShowOtherSeries = value.facetShowOtherSeries;
      this._height = value.height;
      this._ignoreTimeRange = value.ignoreTimeRange;
      this._legendEnabled = value.legendEnabled;
      this._refreshRate = value.refreshRate;
      this._row = value.row;
      this._title = value.title;
      this._width = value.width;
      this._yAxisLeftMax = value.yAxisLeftMax;
      this._yAxisLeftMin = value.yAxisLeftMin;
      this._colors.internalValue = value.colors;
      this._dataFormat.internalValue = value.dataFormat;
      this._initialSorting.internalValue = value.initialSorting;
      this._nrqlQuery.internalValue = value.nrqlQuery;
      this._nullValues.internalValue = value.nullValues;
      this._units.internalValue = value.units;
    }
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

  // facet_show_other_series - computed: false, optional: true, required: false
  private _facetShowOtherSeries?: boolean | cdktf.IResolvable; 
  public get facetShowOtherSeries() {
    return this.getBooleanAttribute('facet_show_other_series');
  }
  public set facetShowOtherSeries(value: boolean | cdktf.IResolvable) {
    this._facetShowOtherSeries = value;
  }
  public resetFacetShowOtherSeries() {
    this._facetShowOtherSeries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetShowOtherSeriesInput() {
    return this._facetShowOtherSeries;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_time_range - computed: false, optional: true, required: false
  private _ignoreTimeRange?: boolean | cdktf.IResolvable; 
  public get ignoreTimeRange() {
    return this.getBooleanAttribute('ignore_time_range');
  }
  public set ignoreTimeRange(value: boolean | cdktf.IResolvable) {
    this._ignoreTimeRange = value;
  }
  public resetIgnoreTimeRange() {
    this._ignoreTimeRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTimeRangeInput() {
    return this._ignoreTimeRange;
  }

  // legend_enabled - computed: false, optional: true, required: false
  private _legendEnabled?: boolean | cdktf.IResolvable; 
  public get legendEnabled() {
    return this.getBooleanAttribute('legend_enabled');
  }
  public set legendEnabled(value: boolean | cdktf.IResolvable) {
    this._legendEnabled = value;
  }
  public resetLegendEnabled() {
    this._legendEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendEnabledInput() {
    return this._legendEnabled;
  }

  // refresh_rate - computed: false, optional: true, required: false
  private _refreshRate?: string; 
  public get refreshRate() {
    return this.getStringAttribute('refresh_rate');
  }
  public set refreshRate(value: string) {
    this._refreshRate = value;
  }
  public resetRefreshRate() {
    this._refreshRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshRateInput() {
    return this._refreshRate;
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

  // y_axis_left_max - computed: false, optional: true, required: false
  private _yAxisLeftMax?: number; 
  public get yAxisLeftMax() {
    return this.getNumberAttribute('y_axis_left_max');
  }
  public set yAxisLeftMax(value: number) {
    this._yAxisLeftMax = value;
  }
  public resetYAxisLeftMax() {
    this._yAxisLeftMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisLeftMaxInput() {
    return this._yAxisLeftMax;
  }

  // y_axis_left_min - computed: false, optional: true, required: false
  private _yAxisLeftMin?: number; 
  public get yAxisLeftMin() {
    return this.getNumberAttribute('y_axis_left_min');
  }
  public set yAxisLeftMin(value: number) {
    this._yAxisLeftMin = value;
  }
  public resetYAxisLeftMin() {
    this._yAxisLeftMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisLeftMinInput() {
    return this._yAxisLeftMin;
  }

  // colors - computed: false, optional: true, required: false
  private _colors = new OneDashboardPageWidgetLogTableColorsList(this, "colors", false);
  public get colors() {
    return this._colors;
  }
  public putColors(value: OneDashboardPageWidgetLogTableColors[] | cdktf.IResolvable) {
    this._colors.internalValue = value;
  }
  public resetColors() {
    this._colors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorsInput() {
    return this._colors.internalValue;
  }

  // data_format - computed: false, optional: true, required: false
  private _dataFormat = new OneDashboardPageWidgetLogTableDataFormatList(this, "data_format", false);
  public get dataFormat() {
    return this._dataFormat;
  }
  public putDataFormat(value: OneDashboardPageWidgetLogTableDataFormat[] | cdktf.IResolvable) {
    this._dataFormat.internalValue = value;
  }
  public resetDataFormat() {
    this._dataFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFormatInput() {
    return this._dataFormat.internalValue;
  }

  // initial_sorting - computed: false, optional: true, required: false
  private _initialSorting = new OneDashboardPageWidgetLogTableInitialSortingOutputReference(this, "initial_sorting");
  public get initialSorting() {
    return this._initialSorting;
  }
  public putInitialSorting(value: OneDashboardPageWidgetLogTableInitialSorting) {
    this._initialSorting.internalValue = value;
  }
  public resetInitialSorting() {
    this._initialSorting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialSortingInput() {
    return this._initialSorting.internalValue;
  }

  // nrql_query - computed: false, optional: false, required: true
  private _nrqlQuery = new OneDashboardPageWidgetLogTableNrqlQueryList(this, "nrql_query", false);
  public get nrqlQuery() {
    return this._nrqlQuery;
  }
  public putNrqlQuery(value: OneDashboardPageWidgetLogTableNrqlQuery[] | cdktf.IResolvable) {
    this._nrqlQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nrqlQueryInput() {
    return this._nrqlQuery.internalValue;
  }

  // null_values - computed: false, optional: true, required: false
  private _nullValues = new OneDashboardPageWidgetLogTableNullValuesList(this, "null_values", false);
  public get nullValues() {
    return this._nullValues;
  }
  public putNullValues(value: OneDashboardPageWidgetLogTableNullValues[] | cdktf.IResolvable) {
    this._nullValues.internalValue = value;
  }
  public resetNullValues() {
    this._nullValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValuesInput() {
    return this._nullValues.internalValue;
  }

  // units - computed: false, optional: true, required: false
  private _units = new OneDashboardPageWidgetLogTableUnitsList(this, "units", false);
  public get units() {
    return this._units;
  }
  public putUnits(value: OneDashboardPageWidgetLogTableUnits[] | cdktf.IResolvable) {
    this._units.internalValue = value;
  }
  public resetUnits() {
    this._units.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units.internalValue;
  }
}

export class OneDashboardPageWidgetLogTableList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetLogTable[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetLogTableOutputReference {
    return new OneDashboardPageWidgetLogTableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetMarkdownColorsSeriesOverrides {
  /**
  * Color code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetMarkdownColorsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetMarkdownColorsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    series_name: cdktf.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetMarkdownColorsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetMarkdownColorsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_name: {
      value: cdktf.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetMarkdownColorsSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetMarkdownColorsSeriesOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetMarkdownColorsSeriesOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._seriesName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._seriesName = value.seriesName;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }
}

export class OneDashboardPageWidgetMarkdownColorsSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetMarkdownColorsSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetMarkdownColorsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetMarkdownColorsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetMarkdownColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetMarkdownColorsSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetMarkdownColorsToTerraform(struct?: OneDashboardPageWidgetMarkdownColors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetMarkdownColorsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetMarkdownColorsToHclTerraform(struct?: OneDashboardPageWidgetMarkdownColors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetMarkdownColorsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetMarkdownColorsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetMarkdownColorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetMarkdownColors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetMarkdownColors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetMarkdownColorsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetMarkdownColorsSeriesOverrides[] | cdktf.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetMarkdownColorsList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetMarkdownColors[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetMarkdownColorsOutputReference {
    return new OneDashboardPageWidgetMarkdownColorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetMarkdownDataFormat {
  /**
  * Defines the format of the mentioned type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#format OneDashboard#format}
  */
  readonly format?: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
  /**
  * The precision of the type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#precision OneDashboard#precision}
  */
  readonly precision?: number;
  /**
  * Defines the type of the mentioned column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#type OneDashboard#type}
  */
  readonly type: string;
}

export function oneDashboardPageWidgetMarkdownDataFormatToTerraform(struct?: OneDashboardPageWidgetMarkdownDataFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    name: cdktf.stringToTerraform(struct!.name),
    precision: cdktf.numberToTerraform(struct!.precision),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function oneDashboardPageWidgetMarkdownDataFormatToHclTerraform(struct?: OneDashboardPageWidgetMarkdownDataFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    precision: {
      value: cdktf.numberToHclTerraform(struct!.precision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetMarkdownDataFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetMarkdownDataFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._precision !== undefined) {
      hasAnyValues = true;
      internalValueResult.precision = this._precision;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetMarkdownDataFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._name = undefined;
      this._precision = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._name = value.name;
      this._precision = value.precision;
      this._type = value.type;
    }
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // precision - computed: false, optional: true, required: false
  private _precision?: number; 
  public get precision() {
    return this.getNumberAttribute('precision');
  }
  public set precision(value: number) {
    this._precision = value;
  }
  public resetPrecision() {
    this._precision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precisionInput() {
    return this._precision;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class OneDashboardPageWidgetMarkdownDataFormatList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetMarkdownDataFormat[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetMarkdownDataFormatOutputReference {
    return new OneDashboardPageWidgetMarkdownDataFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetMarkdownInitialSorting {
  /**
  * Defines the sort order. Either ascending or descending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#direction OneDashboard#direction}
  */
  readonly direction: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
}

export function oneDashboardPageWidgetMarkdownInitialSortingToTerraform(struct?: OneDashboardPageWidgetMarkdownInitialSortingOutputReference | OneDashboardPageWidgetMarkdownInitialSorting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function oneDashboardPageWidgetMarkdownInitialSortingToHclTerraform(struct?: OneDashboardPageWidgetMarkdownInitialSortingOutputReference | OneDashboardPageWidgetMarkdownInitialSorting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetMarkdownInitialSortingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetMarkdownInitialSorting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetMarkdownInitialSorting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._direction = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._direction = value.direction;
      this._name = value.name;
    }
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
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
export interface OneDashboardPageWidgetMarkdownNullValuesSeriesOverrides {
  /**
  * Null value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetMarkdownNullValuesSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetMarkdownNullValuesSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktf.stringToTerraform(struct!.nullValue),
    series_name: cdktf.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetMarkdownNullValuesSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetMarkdownNullValuesSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    null_value: {
      value: cdktf.stringToHclTerraform(struct!.nullValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_name: {
      value: cdktf.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetMarkdownNullValuesSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetMarkdownNullValuesSeriesOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValue = this._nullValue;
    }
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetMarkdownNullValuesSeriesOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nullValue = undefined;
      this._seriesName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nullValue = value.nullValue;
      this._seriesName = value.seriesName;
    }
  }

  // null_value - computed: false, optional: true, required: false
  private _nullValue?: string; 
  public get nullValue() {
    return this.getStringAttribute('null_value');
  }
  public set nullValue(value: string) {
    this._nullValue = value;
  }
  public resetNullValue() {
    this._nullValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueInput() {
    return this._nullValue;
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }
}

export class OneDashboardPageWidgetMarkdownNullValuesSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetMarkdownNullValuesSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetMarkdownNullValuesSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetMarkdownNullValuesSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetMarkdownNullValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetMarkdownNullValuesSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetMarkdownNullValuesToTerraform(struct?: OneDashboardPageWidgetMarkdownNullValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktf.stringToTerraform(struct!.nullValue),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetMarkdownNullValuesSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetMarkdownNullValuesToHclTerraform(struct?: OneDashboardPageWidgetMarkdownNullValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    null_value: {
      value: cdktf.stringToHclTerraform(struct!.nullValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetMarkdownNullValuesSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetMarkdownNullValuesSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetMarkdownNullValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetMarkdownNullValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValue = this._nullValue;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetMarkdownNullValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nullValue = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nullValue = value.nullValue;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // null_value - computed: false, optional: true, required: false
  private _nullValue?: string; 
  public get nullValue() {
    return this.getStringAttribute('null_value');
  }
  public set nullValue(value: string) {
    this._nullValue = value;
  }
  public resetNullValue() {
    this._nullValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueInput() {
    return this._nullValue;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetMarkdownNullValuesSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetMarkdownNullValuesSeriesOverrides[] | cdktf.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetMarkdownNullValuesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetMarkdownNullValues[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetMarkdownNullValuesOutputReference {
    return new OneDashboardPageWidgetMarkdownNullValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetMarkdownUnitsSeriesOverrides {
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
  /**
  * Unit name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
}

export function oneDashboardPageWidgetMarkdownUnitsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetMarkdownUnitsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    series_name: cdktf.stringToTerraform(struct!.seriesName),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function oneDashboardPageWidgetMarkdownUnitsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetMarkdownUnitsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    series_name: {
      value: cdktf.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetMarkdownUnitsSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetMarkdownUnitsSeriesOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetMarkdownUnitsSeriesOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._seriesName = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._seriesName = value.seriesName;
      this._unit = value.unit;
    }
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class OneDashboardPageWidgetMarkdownUnitsSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetMarkdownUnitsSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetMarkdownUnitsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetMarkdownUnitsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetMarkdownUnits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetMarkdownUnitsSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetMarkdownUnitsToTerraform(struct?: OneDashboardPageWidgetMarkdownUnits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetMarkdownUnitsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetMarkdownUnitsToHclTerraform(struct?: OneDashboardPageWidgetMarkdownUnits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetMarkdownUnitsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetMarkdownUnitsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetMarkdownUnitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetMarkdownUnits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetMarkdownUnits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetMarkdownUnitsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetMarkdownUnitsSeriesOverrides[] | cdktf.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetMarkdownUnitsList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetMarkdownUnits[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetMarkdownUnitsOutputReference {
    return new OneDashboardPageWidgetMarkdownUnitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetMarkdown {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#facet_show_other_series OneDashboard#facet_show_other_series}
  */
  readonly facetShowOtherSeries?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}
  */
  readonly ignoreTimeRange?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#legend_enabled OneDashboard#legend_enabled}
  */
  readonly legendEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#refresh_rate OneDashboard#refresh_rate}
  */
  readonly refreshRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#text OneDashboard#text}
  */
  readonly text: string;
  /**
  * A title for the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#width OneDashboard#width}
  */
  readonly width?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#y_axis_left_max OneDashboard#y_axis_left_max}
  */
  readonly yAxisLeftMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#y_axis_left_min OneDashboard#y_axis_left_min}
  */
  readonly yAxisLeftMin?: number;
  /**
  * colors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#colors OneDashboard#colors}
  */
  readonly colors?: OneDashboardPageWidgetMarkdownColors[] | cdktf.IResolvable;
  /**
  * data_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#data_format OneDashboard#data_format}
  */
  readonly dataFormat?: OneDashboardPageWidgetMarkdownDataFormat[] | cdktf.IResolvable;
  /**
  * initial_sorting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#initial_sorting OneDashboard#initial_sorting}
  */
  readonly initialSorting?: OneDashboardPageWidgetMarkdownInitialSorting;
  /**
  * null_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#null_values OneDashboard#null_values}
  */
  readonly nullValues?: OneDashboardPageWidgetMarkdownNullValues[] | cdktf.IResolvable;
  /**
  * units block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#units OneDashboard#units}
  */
  readonly units?: OneDashboardPageWidgetMarkdownUnits[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetMarkdownToTerraform(struct?: OneDashboardPageWidgetMarkdown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.numberToTerraform(struct!.column),
    facet_show_other_series: cdktf.booleanToTerraform(struct!.facetShowOtherSeries),
    height: cdktf.numberToTerraform(struct!.height),
    ignore_time_range: cdktf.booleanToTerraform(struct!.ignoreTimeRange),
    legend_enabled: cdktf.booleanToTerraform(struct!.legendEnabled),
    refresh_rate: cdktf.stringToTerraform(struct!.refreshRate),
    row: cdktf.numberToTerraform(struct!.row),
    text: cdktf.stringToTerraform(struct!.text),
    title: cdktf.stringToTerraform(struct!.title),
    width: cdktf.numberToTerraform(struct!.width),
    y_axis_left_max: cdktf.numberToTerraform(struct!.yAxisLeftMax),
    y_axis_left_min: cdktf.numberToTerraform(struct!.yAxisLeftMin),
    colors: cdktf.listMapper(oneDashboardPageWidgetMarkdownColorsToTerraform, true)(struct!.colors),
    data_format: cdktf.listMapper(oneDashboardPageWidgetMarkdownDataFormatToTerraform, true)(struct!.dataFormat),
    initial_sorting: oneDashboardPageWidgetMarkdownInitialSortingToTerraform(struct!.initialSorting),
    null_values: cdktf.listMapper(oneDashboardPageWidgetMarkdownNullValuesToTerraform, true)(struct!.nullValues),
    units: cdktf.listMapper(oneDashboardPageWidgetMarkdownUnitsToTerraform, true)(struct!.units),
  }
}


export function oneDashboardPageWidgetMarkdownToHclTerraform(struct?: OneDashboardPageWidgetMarkdown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktf.numberToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    facet_show_other_series: {
      value: cdktf.booleanToHclTerraform(struct!.facetShowOtherSeries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    height: {
      value: cdktf.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_time_range: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreTimeRange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    legend_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.legendEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    refresh_rate: {
      value: cdktf.stringToHclTerraform(struct!.refreshRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    row: {
      value: cdktf.numberToHclTerraform(struct!.row),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_left_max: {
      value: cdktf.numberToHclTerraform(struct!.yAxisLeftMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_left_min: {
      value: cdktf.numberToHclTerraform(struct!.yAxisLeftMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    colors: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetMarkdownColorsToHclTerraform, true)(struct!.colors),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetMarkdownColorsList",
    },
    data_format: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetMarkdownDataFormatToHclTerraform, true)(struct!.dataFormat),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetMarkdownDataFormatList",
    },
    initial_sorting: {
      value: oneDashboardPageWidgetMarkdownInitialSortingToHclTerraform(struct!.initialSorting),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetMarkdownInitialSortingList",
    },
    null_values: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetMarkdownNullValuesToHclTerraform, true)(struct!.nullValues),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetMarkdownNullValuesList",
    },
    units: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetMarkdownUnitsToHclTerraform, true)(struct!.units),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetMarkdownUnitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetMarkdownOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetMarkdown | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._facetShowOtherSeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.facetShowOtherSeries = this._facetShowOtherSeries;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._ignoreTimeRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreTimeRange = this._ignoreTimeRange;
    }
    if (this._legendEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.legendEnabled = this._legendEnabled;
    }
    if (this._refreshRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshRate = this._refreshRate;
    }
    if (this._row !== undefined) {
      hasAnyValues = true;
      internalValueResult.row = this._row;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._yAxisLeftMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisLeftMax = this._yAxisLeftMax;
    }
    if (this._yAxisLeftMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisLeftMin = this._yAxisLeftMin;
    }
    if (this._colors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.colors = this._colors?.internalValue;
    }
    if (this._dataFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFormat = this._dataFormat?.internalValue;
    }
    if (this._initialSorting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialSorting = this._initialSorting?.internalValue;
    }
    if (this._nullValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValues = this._nullValues?.internalValue;
    }
    if (this._units?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.units = this._units?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetMarkdown | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._facetShowOtherSeries = undefined;
      this._height = undefined;
      this._ignoreTimeRange = undefined;
      this._legendEnabled = undefined;
      this._refreshRate = undefined;
      this._row = undefined;
      this._text = undefined;
      this._title = undefined;
      this._width = undefined;
      this._yAxisLeftMax = undefined;
      this._yAxisLeftMin = undefined;
      this._colors.internalValue = undefined;
      this._dataFormat.internalValue = undefined;
      this._initialSorting.internalValue = undefined;
      this._nullValues.internalValue = undefined;
      this._units.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._facetShowOtherSeries = value.facetShowOtherSeries;
      this._height = value.height;
      this._ignoreTimeRange = value.ignoreTimeRange;
      this._legendEnabled = value.legendEnabled;
      this._refreshRate = value.refreshRate;
      this._row = value.row;
      this._text = value.text;
      this._title = value.title;
      this._width = value.width;
      this._yAxisLeftMax = value.yAxisLeftMax;
      this._yAxisLeftMin = value.yAxisLeftMin;
      this._colors.internalValue = value.colors;
      this._dataFormat.internalValue = value.dataFormat;
      this._initialSorting.internalValue = value.initialSorting;
      this._nullValues.internalValue = value.nullValues;
      this._units.internalValue = value.units;
    }
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

  // facet_show_other_series - computed: false, optional: true, required: false
  private _facetShowOtherSeries?: boolean | cdktf.IResolvable; 
  public get facetShowOtherSeries() {
    return this.getBooleanAttribute('facet_show_other_series');
  }
  public set facetShowOtherSeries(value: boolean | cdktf.IResolvable) {
    this._facetShowOtherSeries = value;
  }
  public resetFacetShowOtherSeries() {
    this._facetShowOtherSeries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetShowOtherSeriesInput() {
    return this._facetShowOtherSeries;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_time_range - computed: false, optional: true, required: false
  private _ignoreTimeRange?: boolean | cdktf.IResolvable; 
  public get ignoreTimeRange() {
    return this.getBooleanAttribute('ignore_time_range');
  }
  public set ignoreTimeRange(value: boolean | cdktf.IResolvable) {
    this._ignoreTimeRange = value;
  }
  public resetIgnoreTimeRange() {
    this._ignoreTimeRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTimeRangeInput() {
    return this._ignoreTimeRange;
  }

  // legend_enabled - computed: false, optional: true, required: false
  private _legendEnabled?: boolean | cdktf.IResolvable; 
  public get legendEnabled() {
    return this.getBooleanAttribute('legend_enabled');
  }
  public set legendEnabled(value: boolean | cdktf.IResolvable) {
    this._legendEnabled = value;
  }
  public resetLegendEnabled() {
    this._legendEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendEnabledInput() {
    return this._legendEnabled;
  }

  // refresh_rate - computed: false, optional: true, required: false
  private _refreshRate?: string; 
  public get refreshRate() {
    return this.getStringAttribute('refresh_rate');
  }
  public set refreshRate(value: string) {
    this._refreshRate = value;
  }
  public resetRefreshRate() {
    this._refreshRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshRateInput() {
    return this._refreshRate;
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

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
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

  // y_axis_left_max - computed: false, optional: true, required: false
  private _yAxisLeftMax?: number; 
  public get yAxisLeftMax() {
    return this.getNumberAttribute('y_axis_left_max');
  }
  public set yAxisLeftMax(value: number) {
    this._yAxisLeftMax = value;
  }
  public resetYAxisLeftMax() {
    this._yAxisLeftMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisLeftMaxInput() {
    return this._yAxisLeftMax;
  }

  // y_axis_left_min - computed: false, optional: true, required: false
  private _yAxisLeftMin?: number; 
  public get yAxisLeftMin() {
    return this.getNumberAttribute('y_axis_left_min');
  }
  public set yAxisLeftMin(value: number) {
    this._yAxisLeftMin = value;
  }
  public resetYAxisLeftMin() {
    this._yAxisLeftMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisLeftMinInput() {
    return this._yAxisLeftMin;
  }

  // colors - computed: false, optional: true, required: false
  private _colors = new OneDashboardPageWidgetMarkdownColorsList(this, "colors", false);
  public get colors() {
    return this._colors;
  }
  public putColors(value: OneDashboardPageWidgetMarkdownColors[] | cdktf.IResolvable) {
    this._colors.internalValue = value;
  }
  public resetColors() {
    this._colors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorsInput() {
    return this._colors.internalValue;
  }

  // data_format - computed: false, optional: true, required: false
  private _dataFormat = new OneDashboardPageWidgetMarkdownDataFormatList(this, "data_format", false);
  public get dataFormat() {
    return this._dataFormat;
  }
  public putDataFormat(value: OneDashboardPageWidgetMarkdownDataFormat[] | cdktf.IResolvable) {
    this._dataFormat.internalValue = value;
  }
  public resetDataFormat() {
    this._dataFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFormatInput() {
    return this._dataFormat.internalValue;
  }

  // initial_sorting - computed: false, optional: true, required: false
  private _initialSorting = new OneDashboardPageWidgetMarkdownInitialSortingOutputReference(this, "initial_sorting");
  public get initialSorting() {
    return this._initialSorting;
  }
  public putInitialSorting(value: OneDashboardPageWidgetMarkdownInitialSorting) {
    this._initialSorting.internalValue = value;
  }
  public resetInitialSorting() {
    this._initialSorting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialSortingInput() {
    return this._initialSorting.internalValue;
  }

  // null_values - computed: false, optional: true, required: false
  private _nullValues = new OneDashboardPageWidgetMarkdownNullValuesList(this, "null_values", false);
  public get nullValues() {
    return this._nullValues;
  }
  public putNullValues(value: OneDashboardPageWidgetMarkdownNullValues[] | cdktf.IResolvable) {
    this._nullValues.internalValue = value;
  }
  public resetNullValues() {
    this._nullValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValuesInput() {
    return this._nullValues.internalValue;
  }

  // units - computed: false, optional: true, required: false
  private _units = new OneDashboardPageWidgetMarkdownUnitsList(this, "units", false);
  public get units() {
    return this._units;
  }
  public putUnits(value: OneDashboardPageWidgetMarkdownUnits[] | cdktf.IResolvable) {
    this._units.internalValue = value;
  }
  public resetUnits() {
    this._units.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units.internalValue;
  }
}

export class OneDashboardPageWidgetMarkdownList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetMarkdown[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetMarkdownOutputReference {
    return new OneDashboardPageWidgetMarkdownOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetPieColorsSeriesOverrides {
  /**
  * Color code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetPieColorsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetPieColorsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    series_name: cdktf.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetPieColorsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetPieColorsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_name: {
      value: cdktf.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetPieColorsSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetPieColorsSeriesOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetPieColorsSeriesOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._seriesName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._seriesName = value.seriesName;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }
}

export class OneDashboardPageWidgetPieColorsSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetPieColorsSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetPieColorsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetPieColorsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetPieColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetPieColorsSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetPieColorsToTerraform(struct?: OneDashboardPageWidgetPieColors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetPieColorsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetPieColorsToHclTerraform(struct?: OneDashboardPageWidgetPieColors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetPieColorsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetPieColorsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetPieColorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetPieColors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetPieColors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetPieColorsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetPieColorsSeriesOverrides[] | cdktf.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetPieColorsList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetPieColors[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetPieColorsOutputReference {
    return new OneDashboardPageWidgetPieColorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetPieDataFormat {
  /**
  * Defines the format of the mentioned type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#format OneDashboard#format}
  */
  readonly format?: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
  /**
  * The precision of the type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#precision OneDashboard#precision}
  */
  readonly precision?: number;
  /**
  * Defines the type of the mentioned column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#type OneDashboard#type}
  */
  readonly type: string;
}

export function oneDashboardPageWidgetPieDataFormatToTerraform(struct?: OneDashboardPageWidgetPieDataFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    name: cdktf.stringToTerraform(struct!.name),
    precision: cdktf.numberToTerraform(struct!.precision),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function oneDashboardPageWidgetPieDataFormatToHclTerraform(struct?: OneDashboardPageWidgetPieDataFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    precision: {
      value: cdktf.numberToHclTerraform(struct!.precision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetPieDataFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetPieDataFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._precision !== undefined) {
      hasAnyValues = true;
      internalValueResult.precision = this._precision;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetPieDataFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._name = undefined;
      this._precision = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._name = value.name;
      this._precision = value.precision;
      this._type = value.type;
    }
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // precision - computed: false, optional: true, required: false
  private _precision?: number; 
  public get precision() {
    return this.getNumberAttribute('precision');
  }
  public set precision(value: number) {
    this._precision = value;
  }
  public resetPrecision() {
    this._precision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precisionInput() {
    return this._precision;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class OneDashboardPageWidgetPieDataFormatList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetPieDataFormat[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetPieDataFormatOutputReference {
    return new OneDashboardPageWidgetPieDataFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetPieInitialSorting {
  /**
  * Defines the sort order. Either ascending or descending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#direction OneDashboard#direction}
  */
  readonly direction: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
}

export function oneDashboardPageWidgetPieInitialSortingToTerraform(struct?: OneDashboardPageWidgetPieInitialSortingOutputReference | OneDashboardPageWidgetPieInitialSorting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function oneDashboardPageWidgetPieInitialSortingToHclTerraform(struct?: OneDashboardPageWidgetPieInitialSortingOutputReference | OneDashboardPageWidgetPieInitialSorting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetPieInitialSortingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetPieInitialSorting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetPieInitialSorting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._direction = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._direction = value.direction;
      this._name = value.name;
    }
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
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
export interface OneDashboardPageWidgetPieNrqlQuery {
  /**
  * The account ID(s) used for the NRQL query. Can be a single account ID or multiple account IDs in a JSON-encoded array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#account_id OneDashboard#account_id}
  */
  readonly accountId?: string;
  /**
  * The NRQL query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#query OneDashboard#query}
  */
  readonly query: string;
}

export function oneDashboardPageWidgetPieNrqlQueryToTerraform(struct?: OneDashboardPageWidgetPieNrqlQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function oneDashboardPageWidgetPieNrqlQueryToHclTerraform(struct?: OneDashboardPageWidgetPieNrqlQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetPieNrqlQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetPieNrqlQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetPieNrqlQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._query = value.query;
    }
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class OneDashboardPageWidgetPieNrqlQueryList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetPieNrqlQuery[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetPieNrqlQueryOutputReference {
    return new OneDashboardPageWidgetPieNrqlQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetPieNullValuesSeriesOverrides {
  /**
  * Null value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetPieNullValuesSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetPieNullValuesSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktf.stringToTerraform(struct!.nullValue),
    series_name: cdktf.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetPieNullValuesSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetPieNullValuesSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    null_value: {
      value: cdktf.stringToHclTerraform(struct!.nullValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_name: {
      value: cdktf.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetPieNullValuesSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetPieNullValuesSeriesOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValue = this._nullValue;
    }
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetPieNullValuesSeriesOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nullValue = undefined;
      this._seriesName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nullValue = value.nullValue;
      this._seriesName = value.seriesName;
    }
  }

  // null_value - computed: false, optional: true, required: false
  private _nullValue?: string; 
  public get nullValue() {
    return this.getStringAttribute('null_value');
  }
  public set nullValue(value: string) {
    this._nullValue = value;
  }
  public resetNullValue() {
    this._nullValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueInput() {
    return this._nullValue;
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }
}

export class OneDashboardPageWidgetPieNullValuesSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetPieNullValuesSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetPieNullValuesSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetPieNullValuesSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetPieNullValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetPieNullValuesSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetPieNullValuesToTerraform(struct?: OneDashboardPageWidgetPieNullValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktf.stringToTerraform(struct!.nullValue),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetPieNullValuesSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetPieNullValuesToHclTerraform(struct?: OneDashboardPageWidgetPieNullValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    null_value: {
      value: cdktf.stringToHclTerraform(struct!.nullValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetPieNullValuesSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetPieNullValuesSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetPieNullValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetPieNullValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValue = this._nullValue;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetPieNullValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nullValue = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nullValue = value.nullValue;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // null_value - computed: false, optional: true, required: false
  private _nullValue?: string; 
  public get nullValue() {
    return this.getStringAttribute('null_value');
  }
  public set nullValue(value: string) {
    this._nullValue = value;
  }
  public resetNullValue() {
    this._nullValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueInput() {
    return this._nullValue;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetPieNullValuesSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetPieNullValuesSeriesOverrides[] | cdktf.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetPieNullValuesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetPieNullValues[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetPieNullValuesOutputReference {
    return new OneDashboardPageWidgetPieNullValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetPieUnitsSeriesOverrides {
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
  /**
  * Unit name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
}

export function oneDashboardPageWidgetPieUnitsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetPieUnitsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    series_name: cdktf.stringToTerraform(struct!.seriesName),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function oneDashboardPageWidgetPieUnitsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetPieUnitsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    series_name: {
      value: cdktf.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetPieUnitsSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetPieUnitsSeriesOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetPieUnitsSeriesOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._seriesName = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._seriesName = value.seriesName;
      this._unit = value.unit;
    }
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class OneDashboardPageWidgetPieUnitsSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetPieUnitsSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetPieUnitsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetPieUnitsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetPieUnits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetPieUnitsSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetPieUnitsToTerraform(struct?: OneDashboardPageWidgetPieUnits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetPieUnitsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetPieUnitsToHclTerraform(struct?: OneDashboardPageWidgetPieUnits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetPieUnitsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetPieUnitsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetPieUnitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetPieUnits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetPieUnits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetPieUnitsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetPieUnitsSeriesOverrides[] | cdktf.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetPieUnitsList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetPieUnits[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetPieUnitsOutputReference {
    return new OneDashboardPageWidgetPieUnitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetPie {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#facet_show_other_series OneDashboard#facet_show_other_series}
  */
  readonly facetShowOtherSeries?: boolean | cdktf.IResolvable;
  /**
  * Use this item to filter the current dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#filter_current_dashboard OneDashboard#filter_current_dashboard}
  */
  readonly filterCurrentDashboard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}
  */
  readonly ignoreTimeRange?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#legend_enabled OneDashboard#legend_enabled}
  */
  readonly legendEnabled?: boolean | cdktf.IResolvable;
  /**
  * Related entities. Currently only supports Dashboard entities, but may allow other cases in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#linked_entity_guids OneDashboard#linked_entity_guids}
  */
  readonly linkedEntityGuids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#refresh_rate OneDashboard#refresh_rate}
  */
  readonly refreshRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * A title for the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#width OneDashboard#width}
  */
  readonly width?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#y_axis_left_max OneDashboard#y_axis_left_max}
  */
  readonly yAxisLeftMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#y_axis_left_min OneDashboard#y_axis_left_min}
  */
  readonly yAxisLeftMin?: number;
  /**
  * colors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#colors OneDashboard#colors}
  */
  readonly colors?: OneDashboardPageWidgetPieColors[] | cdktf.IResolvable;
  /**
  * data_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#data_format OneDashboard#data_format}
  */
  readonly dataFormat?: OneDashboardPageWidgetPieDataFormat[] | cdktf.IResolvable;
  /**
  * initial_sorting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#initial_sorting OneDashboard#initial_sorting}
  */
  readonly initialSorting?: OneDashboardPageWidgetPieInitialSorting;
  /**
  * nrql_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery: OneDashboardPageWidgetPieNrqlQuery[] | cdktf.IResolvable;
  /**
  * null_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#null_values OneDashboard#null_values}
  */
  readonly nullValues?: OneDashboardPageWidgetPieNullValues[] | cdktf.IResolvable;
  /**
  * units block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#units OneDashboard#units}
  */
  readonly units?: OneDashboardPageWidgetPieUnits[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetPieToTerraform(struct?: OneDashboardPageWidgetPie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.numberToTerraform(struct!.column),
    facet_show_other_series: cdktf.booleanToTerraform(struct!.facetShowOtherSeries),
    filter_current_dashboard: cdktf.booleanToTerraform(struct!.filterCurrentDashboard),
    height: cdktf.numberToTerraform(struct!.height),
    ignore_time_range: cdktf.booleanToTerraform(struct!.ignoreTimeRange),
    legend_enabled: cdktf.booleanToTerraform(struct!.legendEnabled),
    linked_entity_guids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.linkedEntityGuids),
    refresh_rate: cdktf.stringToTerraform(struct!.refreshRate),
    row: cdktf.numberToTerraform(struct!.row),
    title: cdktf.stringToTerraform(struct!.title),
    width: cdktf.numberToTerraform(struct!.width),
    y_axis_left_max: cdktf.numberToTerraform(struct!.yAxisLeftMax),
    y_axis_left_min: cdktf.numberToTerraform(struct!.yAxisLeftMin),
    colors: cdktf.listMapper(oneDashboardPageWidgetPieColorsToTerraform, true)(struct!.colors),
    data_format: cdktf.listMapper(oneDashboardPageWidgetPieDataFormatToTerraform, true)(struct!.dataFormat),
    initial_sorting: oneDashboardPageWidgetPieInitialSortingToTerraform(struct!.initialSorting),
    nrql_query: cdktf.listMapper(oneDashboardPageWidgetPieNrqlQueryToTerraform, true)(struct!.nrqlQuery),
    null_values: cdktf.listMapper(oneDashboardPageWidgetPieNullValuesToTerraform, true)(struct!.nullValues),
    units: cdktf.listMapper(oneDashboardPageWidgetPieUnitsToTerraform, true)(struct!.units),
  }
}


export function oneDashboardPageWidgetPieToHclTerraform(struct?: OneDashboardPageWidgetPie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktf.numberToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    facet_show_other_series: {
      value: cdktf.booleanToHclTerraform(struct!.facetShowOtherSeries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filter_current_dashboard: {
      value: cdktf.booleanToHclTerraform(struct!.filterCurrentDashboard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    height: {
      value: cdktf.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_time_range: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreTimeRange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    legend_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.legendEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    linked_entity_guids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.linkedEntityGuids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    refresh_rate: {
      value: cdktf.stringToHclTerraform(struct!.refreshRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    row: {
      value: cdktf.numberToHclTerraform(struct!.row),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_left_max: {
      value: cdktf.numberToHclTerraform(struct!.yAxisLeftMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_left_min: {
      value: cdktf.numberToHclTerraform(struct!.yAxisLeftMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    colors: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetPieColorsToHclTerraform, true)(struct!.colors),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetPieColorsList",
    },
    data_format: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetPieDataFormatToHclTerraform, true)(struct!.dataFormat),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetPieDataFormatList",
    },
    initial_sorting: {
      value: oneDashboardPageWidgetPieInitialSortingToHclTerraform(struct!.initialSorting),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetPieInitialSortingList",
    },
    nrql_query: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetPieNrqlQueryToHclTerraform, true)(struct!.nrqlQuery),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetPieNrqlQueryList",
    },
    null_values: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetPieNullValuesToHclTerraform, true)(struct!.nullValues),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetPieNullValuesList",
    },
    units: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetPieUnitsToHclTerraform, true)(struct!.units),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetPieUnitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetPieOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetPie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._facetShowOtherSeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.facetShowOtherSeries = this._facetShowOtherSeries;
    }
    if (this._filterCurrentDashboard !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterCurrentDashboard = this._filterCurrentDashboard;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._ignoreTimeRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreTimeRange = this._ignoreTimeRange;
    }
    if (this._legendEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.legendEnabled = this._legendEnabled;
    }
    if (this._linkedEntityGuids !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkedEntityGuids = this._linkedEntityGuids;
    }
    if (this._refreshRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshRate = this._refreshRate;
    }
    if (this._row !== undefined) {
      hasAnyValues = true;
      internalValueResult.row = this._row;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._yAxisLeftMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisLeftMax = this._yAxisLeftMax;
    }
    if (this._yAxisLeftMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisLeftMin = this._yAxisLeftMin;
    }
    if (this._colors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.colors = this._colors?.internalValue;
    }
    if (this._dataFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFormat = this._dataFormat?.internalValue;
    }
    if (this._initialSorting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialSorting = this._initialSorting?.internalValue;
    }
    if (this._nrqlQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrqlQuery = this._nrqlQuery?.internalValue;
    }
    if (this._nullValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValues = this._nullValues?.internalValue;
    }
    if (this._units?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.units = this._units?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetPie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._facetShowOtherSeries = undefined;
      this._filterCurrentDashboard = undefined;
      this._height = undefined;
      this._ignoreTimeRange = undefined;
      this._legendEnabled = undefined;
      this._linkedEntityGuids = undefined;
      this._refreshRate = undefined;
      this._row = undefined;
      this._title = undefined;
      this._width = undefined;
      this._yAxisLeftMax = undefined;
      this._yAxisLeftMin = undefined;
      this._colors.internalValue = undefined;
      this._dataFormat.internalValue = undefined;
      this._initialSorting.internalValue = undefined;
      this._nrqlQuery.internalValue = undefined;
      this._nullValues.internalValue = undefined;
      this._units.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._facetShowOtherSeries = value.facetShowOtherSeries;
      this._filterCurrentDashboard = value.filterCurrentDashboard;
      this._height = value.height;
      this._ignoreTimeRange = value.ignoreTimeRange;
      this._legendEnabled = value.legendEnabled;
      this._linkedEntityGuids = value.linkedEntityGuids;
      this._refreshRate = value.refreshRate;
      this._row = value.row;
      this._title = value.title;
      this._width = value.width;
      this._yAxisLeftMax = value.yAxisLeftMax;
      this._yAxisLeftMin = value.yAxisLeftMin;
      this._colors.internalValue = value.colors;
      this._dataFormat.internalValue = value.dataFormat;
      this._initialSorting.internalValue = value.initialSorting;
      this._nrqlQuery.internalValue = value.nrqlQuery;
      this._nullValues.internalValue = value.nullValues;
      this._units.internalValue = value.units;
    }
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

  // facet_show_other_series - computed: false, optional: true, required: false
  private _facetShowOtherSeries?: boolean | cdktf.IResolvable; 
  public get facetShowOtherSeries() {
    return this.getBooleanAttribute('facet_show_other_series');
  }
  public set facetShowOtherSeries(value: boolean | cdktf.IResolvable) {
    this._facetShowOtherSeries = value;
  }
  public resetFacetShowOtherSeries() {
    this._facetShowOtherSeries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetShowOtherSeriesInput() {
    return this._facetShowOtherSeries;
  }

  // filter_current_dashboard - computed: false, optional: true, required: false
  private _filterCurrentDashboard?: boolean | cdktf.IResolvable; 
  public get filterCurrentDashboard() {
    return this.getBooleanAttribute('filter_current_dashboard');
  }
  public set filterCurrentDashboard(value: boolean | cdktf.IResolvable) {
    this._filterCurrentDashboard = value;
  }
  public resetFilterCurrentDashboard() {
    this._filterCurrentDashboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterCurrentDashboardInput() {
    return this._filterCurrentDashboard;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_time_range - computed: false, optional: true, required: false
  private _ignoreTimeRange?: boolean | cdktf.IResolvable; 
  public get ignoreTimeRange() {
    return this.getBooleanAttribute('ignore_time_range');
  }
  public set ignoreTimeRange(value: boolean | cdktf.IResolvable) {
    this._ignoreTimeRange = value;
  }
  public resetIgnoreTimeRange() {
    this._ignoreTimeRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTimeRangeInput() {
    return this._ignoreTimeRange;
  }

  // legend_enabled - computed: false, optional: true, required: false
  private _legendEnabled?: boolean | cdktf.IResolvable; 
  public get legendEnabled() {
    return this.getBooleanAttribute('legend_enabled');
  }
  public set legendEnabled(value: boolean | cdktf.IResolvable) {
    this._legendEnabled = value;
  }
  public resetLegendEnabled() {
    this._legendEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendEnabledInput() {
    return this._legendEnabled;
  }

  // linked_entity_guids - computed: true, optional: true, required: false
  private _linkedEntityGuids?: string[]; 
  public get linkedEntityGuids() {
    return this.getListAttribute('linked_entity_guids');
  }
  public set linkedEntityGuids(value: string[]) {
    this._linkedEntityGuids = value;
  }
  public resetLinkedEntityGuids() {
    this._linkedEntityGuids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedEntityGuidsInput() {
    return this._linkedEntityGuids;
  }

  // refresh_rate - computed: false, optional: true, required: false
  private _refreshRate?: string; 
  public get refreshRate() {
    return this.getStringAttribute('refresh_rate');
  }
  public set refreshRate(value: string) {
    this._refreshRate = value;
  }
  public resetRefreshRate() {
    this._refreshRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshRateInput() {
    return this._refreshRate;
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

  // y_axis_left_max - computed: false, optional: true, required: false
  private _yAxisLeftMax?: number; 
  public get yAxisLeftMax() {
    return this.getNumberAttribute('y_axis_left_max');
  }
  public set yAxisLeftMax(value: number) {
    this._yAxisLeftMax = value;
  }
  public resetYAxisLeftMax() {
    this._yAxisLeftMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisLeftMaxInput() {
    return this._yAxisLeftMax;
  }

  // y_axis_left_min - computed: false, optional: true, required: false
  private _yAxisLeftMin?: number; 
  public get yAxisLeftMin() {
    return this.getNumberAttribute('y_axis_left_min');
  }
  public set yAxisLeftMin(value: number) {
    this._yAxisLeftMin = value;
  }
  public resetYAxisLeftMin() {
    this._yAxisLeftMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisLeftMinInput() {
    return this._yAxisLeftMin;
  }

  // colors - computed: false, optional: true, required: false
  private _colors = new OneDashboardPageWidgetPieColorsList(this, "colors", false);
  public get colors() {
    return this._colors;
  }
  public putColors(value: OneDashboardPageWidgetPieColors[] | cdktf.IResolvable) {
    this._colors.internalValue = value;
  }
  public resetColors() {
    this._colors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorsInput() {
    return this._colors.internalValue;
  }

  // data_format - computed: false, optional: true, required: false
  private _dataFormat = new OneDashboardPageWidgetPieDataFormatList(this, "data_format", false);
  public get dataFormat() {
    return this._dataFormat;
  }
  public putDataFormat(value: OneDashboardPageWidgetPieDataFormat[] | cdktf.IResolvable) {
    this._dataFormat.internalValue = value;
  }
  public resetDataFormat() {
    this._dataFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFormatInput() {
    return this._dataFormat.internalValue;
  }

  // initial_sorting - computed: false, optional: true, required: false
  private _initialSorting = new OneDashboardPageWidgetPieInitialSortingOutputReference(this, "initial_sorting");
  public get initialSorting() {
    return this._initialSorting;
  }
  public putInitialSorting(value: OneDashboardPageWidgetPieInitialSorting) {
    this._initialSorting.internalValue = value;
  }
  public resetInitialSorting() {
    this._initialSorting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialSortingInput() {
    return this._initialSorting.internalValue;
  }

  // nrql_query - computed: false, optional: false, required: true
  private _nrqlQuery = new OneDashboardPageWidgetPieNrqlQueryList(this, "nrql_query", false);
  public get nrqlQuery() {
    return this._nrqlQuery;
  }
  public putNrqlQuery(value: OneDashboardPageWidgetPieNrqlQuery[] | cdktf.IResolvable) {
    this._nrqlQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nrqlQueryInput() {
    return this._nrqlQuery.internalValue;
  }

  // null_values - computed: false, optional: true, required: false
  private _nullValues = new OneDashboardPageWidgetPieNullValuesList(this, "null_values", false);
  public get nullValues() {
    return this._nullValues;
  }
  public putNullValues(value: OneDashboardPageWidgetPieNullValues[] | cdktf.IResolvable) {
    this._nullValues.internalValue = value;
  }
  public resetNullValues() {
    this._nullValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValuesInput() {
    return this._nullValues.internalValue;
  }

  // units - computed: false, optional: true, required: false
  private _units = new OneDashboardPageWidgetPieUnitsList(this, "units", false);
  public get units() {
    return this._units;
  }
  public putUnits(value: OneDashboardPageWidgetPieUnits[] | cdktf.IResolvable) {
    this._units.internalValue = value;
  }
  public resetUnits() {
    this._units.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units.internalValue;
  }
}

export class OneDashboardPageWidgetPieList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetPie[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetPieOutputReference {
    return new OneDashboardPageWidgetPieOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetStackedBarColorsSeriesOverrides {
  /**
  * Color code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetStackedBarColorsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetStackedBarColorsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    series_name: cdktf.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetStackedBarColorsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetStackedBarColorsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_name: {
      value: cdktf.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetStackedBarColorsSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetStackedBarColorsSeriesOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetStackedBarColorsSeriesOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._seriesName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._seriesName = value.seriesName;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }
}

export class OneDashboardPageWidgetStackedBarColorsSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetStackedBarColorsSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetStackedBarColorsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetStackedBarColorsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetStackedBarColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetStackedBarColorsSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetStackedBarColorsToTerraform(struct?: OneDashboardPageWidgetStackedBarColors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetStackedBarColorsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetStackedBarColorsToHclTerraform(struct?: OneDashboardPageWidgetStackedBarColors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetStackedBarColorsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetStackedBarColorsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetStackedBarColorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetStackedBarColors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetStackedBarColors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetStackedBarColorsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetStackedBarColorsSeriesOverrides[] | cdktf.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetStackedBarColorsList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetStackedBarColors[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetStackedBarColorsOutputReference {
    return new OneDashboardPageWidgetStackedBarColorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetStackedBarDataFormat {
  /**
  * Defines the format of the mentioned type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#format OneDashboard#format}
  */
  readonly format?: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
  /**
  * The precision of the type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#precision OneDashboard#precision}
  */
  readonly precision?: number;
  /**
  * Defines the type of the mentioned column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#type OneDashboard#type}
  */
  readonly type: string;
}

export function oneDashboardPageWidgetStackedBarDataFormatToTerraform(struct?: OneDashboardPageWidgetStackedBarDataFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    name: cdktf.stringToTerraform(struct!.name),
    precision: cdktf.numberToTerraform(struct!.precision),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function oneDashboardPageWidgetStackedBarDataFormatToHclTerraform(struct?: OneDashboardPageWidgetStackedBarDataFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    precision: {
      value: cdktf.numberToHclTerraform(struct!.precision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetStackedBarDataFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetStackedBarDataFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._precision !== undefined) {
      hasAnyValues = true;
      internalValueResult.precision = this._precision;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetStackedBarDataFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._name = undefined;
      this._precision = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._name = value.name;
      this._precision = value.precision;
      this._type = value.type;
    }
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // precision - computed: false, optional: true, required: false
  private _precision?: number; 
  public get precision() {
    return this.getNumberAttribute('precision');
  }
  public set precision(value: number) {
    this._precision = value;
  }
  public resetPrecision() {
    this._precision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precisionInput() {
    return this._precision;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class OneDashboardPageWidgetStackedBarDataFormatList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetStackedBarDataFormat[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetStackedBarDataFormatOutputReference {
    return new OneDashboardPageWidgetStackedBarDataFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetStackedBarInitialSorting {
  /**
  * Defines the sort order. Either ascending or descending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#direction OneDashboard#direction}
  */
  readonly direction: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
}

export function oneDashboardPageWidgetStackedBarInitialSortingToTerraform(struct?: OneDashboardPageWidgetStackedBarInitialSortingOutputReference | OneDashboardPageWidgetStackedBarInitialSorting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function oneDashboardPageWidgetStackedBarInitialSortingToHclTerraform(struct?: OneDashboardPageWidgetStackedBarInitialSortingOutputReference | OneDashboardPageWidgetStackedBarInitialSorting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetStackedBarInitialSortingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetStackedBarInitialSorting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetStackedBarInitialSorting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._direction = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._direction = value.direction;
      this._name = value.name;
    }
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
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
export interface OneDashboardPageWidgetStackedBarNrqlQuery {
  /**
  * The account ID(s) used for the NRQL query. Can be a single account ID or multiple account IDs in a JSON-encoded array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#account_id OneDashboard#account_id}
  */
  readonly accountId?: string;
  /**
  * The NRQL query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#query OneDashboard#query}
  */
  readonly query: string;
}

export function oneDashboardPageWidgetStackedBarNrqlQueryToTerraform(struct?: OneDashboardPageWidgetStackedBarNrqlQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function oneDashboardPageWidgetStackedBarNrqlQueryToHclTerraform(struct?: OneDashboardPageWidgetStackedBarNrqlQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetStackedBarNrqlQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetStackedBarNrqlQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetStackedBarNrqlQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._query = value.query;
    }
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class OneDashboardPageWidgetStackedBarNrqlQueryList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetStackedBarNrqlQuery[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetStackedBarNrqlQueryOutputReference {
    return new OneDashboardPageWidgetStackedBarNrqlQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetStackedBarNullValuesSeriesOverrides {
  /**
  * Null value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetStackedBarNullValuesSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetStackedBarNullValuesSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktf.stringToTerraform(struct!.nullValue),
    series_name: cdktf.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetStackedBarNullValuesSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetStackedBarNullValuesSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    null_value: {
      value: cdktf.stringToHclTerraform(struct!.nullValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_name: {
      value: cdktf.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetStackedBarNullValuesSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetStackedBarNullValuesSeriesOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValue = this._nullValue;
    }
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetStackedBarNullValuesSeriesOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nullValue = undefined;
      this._seriesName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nullValue = value.nullValue;
      this._seriesName = value.seriesName;
    }
  }

  // null_value - computed: false, optional: true, required: false
  private _nullValue?: string; 
  public get nullValue() {
    return this.getStringAttribute('null_value');
  }
  public set nullValue(value: string) {
    this._nullValue = value;
  }
  public resetNullValue() {
    this._nullValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueInput() {
    return this._nullValue;
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }
}

export class OneDashboardPageWidgetStackedBarNullValuesSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetStackedBarNullValuesSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetStackedBarNullValuesSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetStackedBarNullValuesSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetStackedBarNullValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetStackedBarNullValuesSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetStackedBarNullValuesToTerraform(struct?: OneDashboardPageWidgetStackedBarNullValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktf.stringToTerraform(struct!.nullValue),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetStackedBarNullValuesSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetStackedBarNullValuesToHclTerraform(struct?: OneDashboardPageWidgetStackedBarNullValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    null_value: {
      value: cdktf.stringToHclTerraform(struct!.nullValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetStackedBarNullValuesSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetStackedBarNullValuesSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetStackedBarNullValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetStackedBarNullValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValue = this._nullValue;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetStackedBarNullValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nullValue = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nullValue = value.nullValue;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // null_value - computed: false, optional: true, required: false
  private _nullValue?: string; 
  public get nullValue() {
    return this.getStringAttribute('null_value');
  }
  public set nullValue(value: string) {
    this._nullValue = value;
  }
  public resetNullValue() {
    this._nullValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueInput() {
    return this._nullValue;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetStackedBarNullValuesSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetStackedBarNullValuesSeriesOverrides[] | cdktf.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetStackedBarNullValuesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetStackedBarNullValues[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetStackedBarNullValuesOutputReference {
    return new OneDashboardPageWidgetStackedBarNullValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetStackedBarTooltip {
  /**
  * Tooltip display mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#mode OneDashboard#mode}
  */
  readonly mode: string;
}

export function oneDashboardPageWidgetStackedBarTooltipToTerraform(struct?: OneDashboardPageWidgetStackedBarTooltipOutputReference | OneDashboardPageWidgetStackedBarTooltip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function oneDashboardPageWidgetStackedBarTooltipToHclTerraform(struct?: OneDashboardPageWidgetStackedBarTooltipOutputReference | OneDashboardPageWidgetStackedBarTooltip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetStackedBarTooltipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetStackedBarTooltip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetStackedBarTooltip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface OneDashboardPageWidgetStackedBarUnitsSeriesOverrides {
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
  /**
  * Unit name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
}

export function oneDashboardPageWidgetStackedBarUnitsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetStackedBarUnitsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    series_name: cdktf.stringToTerraform(struct!.seriesName),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function oneDashboardPageWidgetStackedBarUnitsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetStackedBarUnitsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    series_name: {
      value: cdktf.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetStackedBarUnitsSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetStackedBarUnitsSeriesOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetStackedBarUnitsSeriesOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._seriesName = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._seriesName = value.seriesName;
      this._unit = value.unit;
    }
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class OneDashboardPageWidgetStackedBarUnitsSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetStackedBarUnitsSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetStackedBarUnitsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetStackedBarUnitsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetStackedBarUnits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetStackedBarUnitsSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetStackedBarUnitsToTerraform(struct?: OneDashboardPageWidgetStackedBarUnits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetStackedBarUnitsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetStackedBarUnitsToHclTerraform(struct?: OneDashboardPageWidgetStackedBarUnits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetStackedBarUnitsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetStackedBarUnitsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetStackedBarUnitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetStackedBarUnits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetStackedBarUnits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetStackedBarUnitsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetStackedBarUnitsSeriesOverrides[] | cdktf.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetStackedBarUnitsList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetStackedBarUnits[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetStackedBarUnitsOutputReference {
    return new OneDashboardPageWidgetStackedBarUnitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetStackedBar {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#facet_show_other_series OneDashboard#facet_show_other_series}
  */
  readonly facetShowOtherSeries?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}
  */
  readonly ignoreTimeRange?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#legend_enabled OneDashboard#legend_enabled}
  */
  readonly legendEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#refresh_rate OneDashboard#refresh_rate}
  */
  readonly refreshRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * A title for the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#width OneDashboard#width}
  */
  readonly width?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#y_axis_left_max OneDashboard#y_axis_left_max}
  */
  readonly yAxisLeftMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#y_axis_left_min OneDashboard#y_axis_left_min}
  */
  readonly yAxisLeftMin?: number;
  /**
  * colors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#colors OneDashboard#colors}
  */
  readonly colors?: OneDashboardPageWidgetStackedBarColors[] | cdktf.IResolvable;
  /**
  * data_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#data_format OneDashboard#data_format}
  */
  readonly dataFormat?: OneDashboardPageWidgetStackedBarDataFormat[] | cdktf.IResolvable;
  /**
  * initial_sorting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#initial_sorting OneDashboard#initial_sorting}
  */
  readonly initialSorting?: OneDashboardPageWidgetStackedBarInitialSorting;
  /**
  * nrql_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery: OneDashboardPageWidgetStackedBarNrqlQuery[] | cdktf.IResolvable;
  /**
  * null_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#null_values OneDashboard#null_values}
  */
  readonly nullValues?: OneDashboardPageWidgetStackedBarNullValues[] | cdktf.IResolvable;
  /**
  * tooltip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#tooltip OneDashboard#tooltip}
  */
  readonly tooltip?: OneDashboardPageWidgetStackedBarTooltip;
  /**
  * units block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#units OneDashboard#units}
  */
  readonly units?: OneDashboardPageWidgetStackedBarUnits[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetStackedBarToTerraform(struct?: OneDashboardPageWidgetStackedBar | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.numberToTerraform(struct!.column),
    facet_show_other_series: cdktf.booleanToTerraform(struct!.facetShowOtherSeries),
    height: cdktf.numberToTerraform(struct!.height),
    ignore_time_range: cdktf.booleanToTerraform(struct!.ignoreTimeRange),
    legend_enabled: cdktf.booleanToTerraform(struct!.legendEnabled),
    refresh_rate: cdktf.stringToTerraform(struct!.refreshRate),
    row: cdktf.numberToTerraform(struct!.row),
    title: cdktf.stringToTerraform(struct!.title),
    width: cdktf.numberToTerraform(struct!.width),
    y_axis_left_max: cdktf.numberToTerraform(struct!.yAxisLeftMax),
    y_axis_left_min: cdktf.numberToTerraform(struct!.yAxisLeftMin),
    colors: cdktf.listMapper(oneDashboardPageWidgetStackedBarColorsToTerraform, true)(struct!.colors),
    data_format: cdktf.listMapper(oneDashboardPageWidgetStackedBarDataFormatToTerraform, true)(struct!.dataFormat),
    initial_sorting: oneDashboardPageWidgetStackedBarInitialSortingToTerraform(struct!.initialSorting),
    nrql_query: cdktf.listMapper(oneDashboardPageWidgetStackedBarNrqlQueryToTerraform, true)(struct!.nrqlQuery),
    null_values: cdktf.listMapper(oneDashboardPageWidgetStackedBarNullValuesToTerraform, true)(struct!.nullValues),
    tooltip: oneDashboardPageWidgetStackedBarTooltipToTerraform(struct!.tooltip),
    units: cdktf.listMapper(oneDashboardPageWidgetStackedBarUnitsToTerraform, true)(struct!.units),
  }
}


export function oneDashboardPageWidgetStackedBarToHclTerraform(struct?: OneDashboardPageWidgetStackedBar | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktf.numberToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    facet_show_other_series: {
      value: cdktf.booleanToHclTerraform(struct!.facetShowOtherSeries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    height: {
      value: cdktf.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_time_range: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreTimeRange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    legend_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.legendEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    refresh_rate: {
      value: cdktf.stringToHclTerraform(struct!.refreshRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    row: {
      value: cdktf.numberToHclTerraform(struct!.row),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_left_max: {
      value: cdktf.numberToHclTerraform(struct!.yAxisLeftMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_left_min: {
      value: cdktf.numberToHclTerraform(struct!.yAxisLeftMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    colors: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetStackedBarColorsToHclTerraform, true)(struct!.colors),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetStackedBarColorsList",
    },
    data_format: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetStackedBarDataFormatToHclTerraform, true)(struct!.dataFormat),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetStackedBarDataFormatList",
    },
    initial_sorting: {
      value: oneDashboardPageWidgetStackedBarInitialSortingToHclTerraform(struct!.initialSorting),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetStackedBarInitialSortingList",
    },
    nrql_query: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetStackedBarNrqlQueryToHclTerraform, true)(struct!.nrqlQuery),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetStackedBarNrqlQueryList",
    },
    null_values: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetStackedBarNullValuesToHclTerraform, true)(struct!.nullValues),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetStackedBarNullValuesList",
    },
    tooltip: {
      value: oneDashboardPageWidgetStackedBarTooltipToHclTerraform(struct!.tooltip),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetStackedBarTooltipList",
    },
    units: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetStackedBarUnitsToHclTerraform, true)(struct!.units),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetStackedBarUnitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetStackedBarOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetStackedBar | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._facetShowOtherSeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.facetShowOtherSeries = this._facetShowOtherSeries;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._ignoreTimeRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreTimeRange = this._ignoreTimeRange;
    }
    if (this._legendEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.legendEnabled = this._legendEnabled;
    }
    if (this._refreshRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshRate = this._refreshRate;
    }
    if (this._row !== undefined) {
      hasAnyValues = true;
      internalValueResult.row = this._row;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._yAxisLeftMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisLeftMax = this._yAxisLeftMax;
    }
    if (this._yAxisLeftMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisLeftMin = this._yAxisLeftMin;
    }
    if (this._colors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.colors = this._colors?.internalValue;
    }
    if (this._dataFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFormat = this._dataFormat?.internalValue;
    }
    if (this._initialSorting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialSorting = this._initialSorting?.internalValue;
    }
    if (this._nrqlQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrqlQuery = this._nrqlQuery?.internalValue;
    }
    if (this._nullValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValues = this._nullValues?.internalValue;
    }
    if (this._tooltip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooltip = this._tooltip?.internalValue;
    }
    if (this._units?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.units = this._units?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetStackedBar | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._facetShowOtherSeries = undefined;
      this._height = undefined;
      this._ignoreTimeRange = undefined;
      this._legendEnabled = undefined;
      this._refreshRate = undefined;
      this._row = undefined;
      this._title = undefined;
      this._width = undefined;
      this._yAxisLeftMax = undefined;
      this._yAxisLeftMin = undefined;
      this._colors.internalValue = undefined;
      this._dataFormat.internalValue = undefined;
      this._initialSorting.internalValue = undefined;
      this._nrqlQuery.internalValue = undefined;
      this._nullValues.internalValue = undefined;
      this._tooltip.internalValue = undefined;
      this._units.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._facetShowOtherSeries = value.facetShowOtherSeries;
      this._height = value.height;
      this._ignoreTimeRange = value.ignoreTimeRange;
      this._legendEnabled = value.legendEnabled;
      this._refreshRate = value.refreshRate;
      this._row = value.row;
      this._title = value.title;
      this._width = value.width;
      this._yAxisLeftMax = value.yAxisLeftMax;
      this._yAxisLeftMin = value.yAxisLeftMin;
      this._colors.internalValue = value.colors;
      this._dataFormat.internalValue = value.dataFormat;
      this._initialSorting.internalValue = value.initialSorting;
      this._nrqlQuery.internalValue = value.nrqlQuery;
      this._nullValues.internalValue = value.nullValues;
      this._tooltip.internalValue = value.tooltip;
      this._units.internalValue = value.units;
    }
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

  // facet_show_other_series - computed: false, optional: true, required: false
  private _facetShowOtherSeries?: boolean | cdktf.IResolvable; 
  public get facetShowOtherSeries() {
    return this.getBooleanAttribute('facet_show_other_series');
  }
  public set facetShowOtherSeries(value: boolean | cdktf.IResolvable) {
    this._facetShowOtherSeries = value;
  }
  public resetFacetShowOtherSeries() {
    this._facetShowOtherSeries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetShowOtherSeriesInput() {
    return this._facetShowOtherSeries;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_time_range - computed: false, optional: true, required: false
  private _ignoreTimeRange?: boolean | cdktf.IResolvable; 
  public get ignoreTimeRange() {
    return this.getBooleanAttribute('ignore_time_range');
  }
  public set ignoreTimeRange(value: boolean | cdktf.IResolvable) {
    this._ignoreTimeRange = value;
  }
  public resetIgnoreTimeRange() {
    this._ignoreTimeRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTimeRangeInput() {
    return this._ignoreTimeRange;
  }

  // legend_enabled - computed: false, optional: true, required: false
  private _legendEnabled?: boolean | cdktf.IResolvable; 
  public get legendEnabled() {
    return this.getBooleanAttribute('legend_enabled');
  }
  public set legendEnabled(value: boolean | cdktf.IResolvable) {
    this._legendEnabled = value;
  }
  public resetLegendEnabled() {
    this._legendEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendEnabledInput() {
    return this._legendEnabled;
  }

  // refresh_rate - computed: false, optional: true, required: false
  private _refreshRate?: string; 
  public get refreshRate() {
    return this.getStringAttribute('refresh_rate');
  }
  public set refreshRate(value: string) {
    this._refreshRate = value;
  }
  public resetRefreshRate() {
    this._refreshRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshRateInput() {
    return this._refreshRate;
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

  // y_axis_left_max - computed: false, optional: true, required: false
  private _yAxisLeftMax?: number; 
  public get yAxisLeftMax() {
    return this.getNumberAttribute('y_axis_left_max');
  }
  public set yAxisLeftMax(value: number) {
    this._yAxisLeftMax = value;
  }
  public resetYAxisLeftMax() {
    this._yAxisLeftMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisLeftMaxInput() {
    return this._yAxisLeftMax;
  }

  // y_axis_left_min - computed: false, optional: true, required: false
  private _yAxisLeftMin?: number; 
  public get yAxisLeftMin() {
    return this.getNumberAttribute('y_axis_left_min');
  }
  public set yAxisLeftMin(value: number) {
    this._yAxisLeftMin = value;
  }
  public resetYAxisLeftMin() {
    this._yAxisLeftMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisLeftMinInput() {
    return this._yAxisLeftMin;
  }

  // colors - computed: false, optional: true, required: false
  private _colors = new OneDashboardPageWidgetStackedBarColorsList(this, "colors", false);
  public get colors() {
    return this._colors;
  }
  public putColors(value: OneDashboardPageWidgetStackedBarColors[] | cdktf.IResolvable) {
    this._colors.internalValue = value;
  }
  public resetColors() {
    this._colors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorsInput() {
    return this._colors.internalValue;
  }

  // data_format - computed: false, optional: true, required: false
  private _dataFormat = new OneDashboardPageWidgetStackedBarDataFormatList(this, "data_format", false);
  public get dataFormat() {
    return this._dataFormat;
  }
  public putDataFormat(value: OneDashboardPageWidgetStackedBarDataFormat[] | cdktf.IResolvable) {
    this._dataFormat.internalValue = value;
  }
  public resetDataFormat() {
    this._dataFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFormatInput() {
    return this._dataFormat.internalValue;
  }

  // initial_sorting - computed: false, optional: true, required: false
  private _initialSorting = new OneDashboardPageWidgetStackedBarInitialSortingOutputReference(this, "initial_sorting");
  public get initialSorting() {
    return this._initialSorting;
  }
  public putInitialSorting(value: OneDashboardPageWidgetStackedBarInitialSorting) {
    this._initialSorting.internalValue = value;
  }
  public resetInitialSorting() {
    this._initialSorting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialSortingInput() {
    return this._initialSorting.internalValue;
  }

  // nrql_query - computed: false, optional: false, required: true
  private _nrqlQuery = new OneDashboardPageWidgetStackedBarNrqlQueryList(this, "nrql_query", false);
  public get nrqlQuery() {
    return this._nrqlQuery;
  }
  public putNrqlQuery(value: OneDashboardPageWidgetStackedBarNrqlQuery[] | cdktf.IResolvable) {
    this._nrqlQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nrqlQueryInput() {
    return this._nrqlQuery.internalValue;
  }

  // null_values - computed: false, optional: true, required: false
  private _nullValues = new OneDashboardPageWidgetStackedBarNullValuesList(this, "null_values", false);
  public get nullValues() {
    return this._nullValues;
  }
  public putNullValues(value: OneDashboardPageWidgetStackedBarNullValues[] | cdktf.IResolvable) {
    this._nullValues.internalValue = value;
  }
  public resetNullValues() {
    this._nullValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValuesInput() {
    return this._nullValues.internalValue;
  }

  // tooltip - computed: false, optional: true, required: false
  private _tooltip = new OneDashboardPageWidgetStackedBarTooltipOutputReference(this, "tooltip");
  public get tooltip() {
    return this._tooltip;
  }
  public putTooltip(value: OneDashboardPageWidgetStackedBarTooltip) {
    this._tooltip.internalValue = value;
  }
  public resetTooltip() {
    this._tooltip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooltipInput() {
    return this._tooltip.internalValue;
  }

  // units - computed: false, optional: true, required: false
  private _units = new OneDashboardPageWidgetStackedBarUnitsList(this, "units", false);
  public get units() {
    return this._units;
  }
  public putUnits(value: OneDashboardPageWidgetStackedBarUnits[] | cdktf.IResolvable) {
    this._units.internalValue = value;
  }
  public resetUnits() {
    this._units.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units.internalValue;
  }
}

export class OneDashboardPageWidgetStackedBarList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetStackedBar[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetStackedBarOutputReference {
    return new OneDashboardPageWidgetStackedBarOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetTableColorsSeriesOverrides {
  /**
  * Color code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetTableColorsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetTableColorsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    series_name: cdktf.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetTableColorsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetTableColorsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_name: {
      value: cdktf.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetTableColorsSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetTableColorsSeriesOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetTableColorsSeriesOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._seriesName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._seriesName = value.seriesName;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }
}

export class OneDashboardPageWidgetTableColorsSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetTableColorsSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetTableColorsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetTableColorsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetTableColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetTableColorsSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetTableColorsToTerraform(struct?: OneDashboardPageWidgetTableColors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetTableColorsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetTableColorsToHclTerraform(struct?: OneDashboardPageWidgetTableColors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetTableColorsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetTableColorsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetTableColorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetTableColors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetTableColors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetTableColorsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetTableColorsSeriesOverrides[] | cdktf.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetTableColorsList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetTableColors[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetTableColorsOutputReference {
    return new OneDashboardPageWidgetTableColorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetTableDataFormat {
  /**
  * Defines the format of the mentioned type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#format OneDashboard#format}
  */
  readonly format?: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
  /**
  * The precision of the type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#precision OneDashboard#precision}
  */
  readonly precision?: number;
  /**
  * Defines the type of the mentioned column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#type OneDashboard#type}
  */
  readonly type: string;
}

export function oneDashboardPageWidgetTableDataFormatToTerraform(struct?: OneDashboardPageWidgetTableDataFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    name: cdktf.stringToTerraform(struct!.name),
    precision: cdktf.numberToTerraform(struct!.precision),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function oneDashboardPageWidgetTableDataFormatToHclTerraform(struct?: OneDashboardPageWidgetTableDataFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    precision: {
      value: cdktf.numberToHclTerraform(struct!.precision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetTableDataFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetTableDataFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._precision !== undefined) {
      hasAnyValues = true;
      internalValueResult.precision = this._precision;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetTableDataFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._name = undefined;
      this._precision = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._name = value.name;
      this._precision = value.precision;
      this._type = value.type;
    }
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // precision - computed: false, optional: true, required: false
  private _precision?: number; 
  public get precision() {
    return this.getNumberAttribute('precision');
  }
  public set precision(value: number) {
    this._precision = value;
  }
  public resetPrecision() {
    this._precision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precisionInput() {
    return this._precision;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class OneDashboardPageWidgetTableDataFormatList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetTableDataFormat[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetTableDataFormatOutputReference {
    return new OneDashboardPageWidgetTableDataFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetTableInitialSorting {
  /**
  * Defines the sort order. Either ascending or descending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#direction OneDashboard#direction}
  */
  readonly direction: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
}

export function oneDashboardPageWidgetTableInitialSortingToTerraform(struct?: OneDashboardPageWidgetTableInitialSortingOutputReference | OneDashboardPageWidgetTableInitialSorting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function oneDashboardPageWidgetTableInitialSortingToHclTerraform(struct?: OneDashboardPageWidgetTableInitialSortingOutputReference | OneDashboardPageWidgetTableInitialSorting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetTableInitialSortingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetTableInitialSorting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetTableInitialSorting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._direction = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._direction = value.direction;
      this._name = value.name;
    }
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
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
export interface OneDashboardPageWidgetTableNrqlQuery {
  /**
  * The account ID(s) used for the NRQL query. Can be a single account ID or multiple account IDs in a JSON-encoded array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#account_id OneDashboard#account_id}
  */
  readonly accountId?: string;
  /**
  * The NRQL query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#query OneDashboard#query}
  */
  readonly query: string;
}

export function oneDashboardPageWidgetTableNrqlQueryToTerraform(struct?: OneDashboardPageWidgetTableNrqlQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function oneDashboardPageWidgetTableNrqlQueryToHclTerraform(struct?: OneDashboardPageWidgetTableNrqlQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetTableNrqlQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetTableNrqlQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetTableNrqlQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._query = value.query;
    }
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class OneDashboardPageWidgetTableNrqlQueryList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetTableNrqlQuery[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetTableNrqlQueryOutputReference {
    return new OneDashboardPageWidgetTableNrqlQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetTableNullValuesSeriesOverrides {
  /**
  * Null value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetTableNullValuesSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetTableNullValuesSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktf.stringToTerraform(struct!.nullValue),
    series_name: cdktf.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetTableNullValuesSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetTableNullValuesSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    null_value: {
      value: cdktf.stringToHclTerraform(struct!.nullValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_name: {
      value: cdktf.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetTableNullValuesSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetTableNullValuesSeriesOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValue = this._nullValue;
    }
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetTableNullValuesSeriesOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nullValue = undefined;
      this._seriesName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nullValue = value.nullValue;
      this._seriesName = value.seriesName;
    }
  }

  // null_value - computed: false, optional: true, required: false
  private _nullValue?: string; 
  public get nullValue() {
    return this.getStringAttribute('null_value');
  }
  public set nullValue(value: string) {
    this._nullValue = value;
  }
  public resetNullValue() {
    this._nullValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueInput() {
    return this._nullValue;
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }
}

export class OneDashboardPageWidgetTableNullValuesSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetTableNullValuesSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetTableNullValuesSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetTableNullValuesSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetTableNullValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetTableNullValuesSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetTableNullValuesToTerraform(struct?: OneDashboardPageWidgetTableNullValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktf.stringToTerraform(struct!.nullValue),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetTableNullValuesSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetTableNullValuesToHclTerraform(struct?: OneDashboardPageWidgetTableNullValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    null_value: {
      value: cdktf.stringToHclTerraform(struct!.nullValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetTableNullValuesSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetTableNullValuesSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetTableNullValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetTableNullValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValue = this._nullValue;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetTableNullValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nullValue = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nullValue = value.nullValue;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // null_value - computed: false, optional: true, required: false
  private _nullValue?: string; 
  public get nullValue() {
    return this.getStringAttribute('null_value');
  }
  public set nullValue(value: string) {
    this._nullValue = value;
  }
  public resetNullValue() {
    this._nullValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueInput() {
    return this._nullValue;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetTableNullValuesSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetTableNullValuesSeriesOverrides[] | cdktf.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetTableNullValuesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetTableNullValues[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetTableNullValuesOutputReference {
    return new OneDashboardPageWidgetTableNullValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetTableThreshold {
  /**
  * Name of the column in the table, to which the threshold would be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#column_name OneDashboard#column_name}
  */
  readonly columnName?: string;
  /**
  * The number from which the range starts in thresholds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#from OneDashboard#from}
  */
  readonly from?: string;
  /**
  * Severity of the threshold, which would reflect in the widget, in the range of the threshold specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#severity OneDashboard#severity}
  */
  readonly severity?: string;
  /**
  * The number at which the range ends in thresholds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#to OneDashboard#to}
  */
  readonly to?: string;
}

export function oneDashboardPageWidgetTableThresholdToTerraform(struct?: OneDashboardPageWidgetTableThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    from: cdktf.stringToTerraform(struct!.from),
    severity: cdktf.stringToTerraform(struct!.severity),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function oneDashboardPageWidgetTableThresholdToHclTerraform(struct?: OneDashboardPageWidgetTableThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column_name: {
      value: cdktf.stringToHclTerraform(struct!.columnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetTableThresholdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetTableThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetTableThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnName = undefined;
      this._from = undefined;
      this._severity = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnName = value.columnName;
      this._from = value.from;
      this._severity = value.severity;
      this._to = value.to;
    }
  }

  // column_name - computed: false, optional: true, required: false
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  public resetColumnName() {
    this._columnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // to - computed: false, optional: true, required: false
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class OneDashboardPageWidgetTableThresholdList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetTableThreshold[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetTableThresholdOutputReference {
    return new OneDashboardPageWidgetTableThresholdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetTableUnitsSeriesOverrides {
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
  /**
  * Unit name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
}

export function oneDashboardPageWidgetTableUnitsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetTableUnitsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    series_name: cdktf.stringToTerraform(struct!.seriesName),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function oneDashboardPageWidgetTableUnitsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetTableUnitsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    series_name: {
      value: cdktf.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetTableUnitsSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetTableUnitsSeriesOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetTableUnitsSeriesOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._seriesName = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._seriesName = value.seriesName;
      this._unit = value.unit;
    }
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class OneDashboardPageWidgetTableUnitsSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetTableUnitsSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetTableUnitsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetTableUnitsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetTableUnits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetTableUnitsSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetTableUnitsToTerraform(struct?: OneDashboardPageWidgetTableUnits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetTableUnitsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetTableUnitsToHclTerraform(struct?: OneDashboardPageWidgetTableUnits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetTableUnitsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetTableUnitsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetTableUnitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetTableUnits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetTableUnits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetTableUnitsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetTableUnitsSeriesOverrides[] | cdktf.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetTableUnitsList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetTableUnits[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetTableUnitsOutputReference {
    return new OneDashboardPageWidgetTableUnitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#facet_show_other_series OneDashboard#facet_show_other_series}
  */
  readonly facetShowOtherSeries?: boolean | cdktf.IResolvable;
  /**
  * Use this item to filter the current dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#filter_current_dashboard OneDashboard#filter_current_dashboard}
  */
  readonly filterCurrentDashboard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}
  */
  readonly ignoreTimeRange?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#legend_enabled OneDashboard#legend_enabled}
  */
  readonly legendEnabled?: boolean | cdktf.IResolvable;
  /**
  * Related entities. Currently only supports Dashboard entities, but may allow other cases in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#linked_entity_guids OneDashboard#linked_entity_guids}
  */
  readonly linkedEntityGuids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#refresh_rate OneDashboard#refresh_rate}
  */
  readonly refreshRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * A title for the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#width OneDashboard#width}
  */
  readonly width?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#y_axis_left_max OneDashboard#y_axis_left_max}
  */
  readonly yAxisLeftMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#y_axis_left_min OneDashboard#y_axis_left_min}
  */
  readonly yAxisLeftMin?: number;
  /**
  * colors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#colors OneDashboard#colors}
  */
  readonly colors?: OneDashboardPageWidgetTableColors[] | cdktf.IResolvable;
  /**
  * data_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#data_format OneDashboard#data_format}
  */
  readonly dataFormat?: OneDashboardPageWidgetTableDataFormat[] | cdktf.IResolvable;
  /**
  * initial_sorting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#initial_sorting OneDashboard#initial_sorting}
  */
  readonly initialSorting?: OneDashboardPageWidgetTableInitialSorting;
  /**
  * nrql_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery: OneDashboardPageWidgetTableNrqlQuery[] | cdktf.IResolvable;
  /**
  * null_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#null_values OneDashboard#null_values}
  */
  readonly nullValues?: OneDashboardPageWidgetTableNullValues[] | cdktf.IResolvable;
  /**
  * threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#threshold OneDashboard#threshold}
  */
  readonly threshold?: OneDashboardPageWidgetTableThreshold[] | cdktf.IResolvable;
  /**
  * units block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#units OneDashboard#units}
  */
  readonly units?: OneDashboardPageWidgetTableUnits[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetTableToTerraform(struct?: OneDashboardPageWidgetTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.numberToTerraform(struct!.column),
    facet_show_other_series: cdktf.booleanToTerraform(struct!.facetShowOtherSeries),
    filter_current_dashboard: cdktf.booleanToTerraform(struct!.filterCurrentDashboard),
    height: cdktf.numberToTerraform(struct!.height),
    ignore_time_range: cdktf.booleanToTerraform(struct!.ignoreTimeRange),
    legend_enabled: cdktf.booleanToTerraform(struct!.legendEnabled),
    linked_entity_guids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.linkedEntityGuids),
    refresh_rate: cdktf.stringToTerraform(struct!.refreshRate),
    row: cdktf.numberToTerraform(struct!.row),
    title: cdktf.stringToTerraform(struct!.title),
    width: cdktf.numberToTerraform(struct!.width),
    y_axis_left_max: cdktf.numberToTerraform(struct!.yAxisLeftMax),
    y_axis_left_min: cdktf.numberToTerraform(struct!.yAxisLeftMin),
    colors: cdktf.listMapper(oneDashboardPageWidgetTableColorsToTerraform, true)(struct!.colors),
    data_format: cdktf.listMapper(oneDashboardPageWidgetTableDataFormatToTerraform, true)(struct!.dataFormat),
    initial_sorting: oneDashboardPageWidgetTableInitialSortingToTerraform(struct!.initialSorting),
    nrql_query: cdktf.listMapper(oneDashboardPageWidgetTableNrqlQueryToTerraform, true)(struct!.nrqlQuery),
    null_values: cdktf.listMapper(oneDashboardPageWidgetTableNullValuesToTerraform, true)(struct!.nullValues),
    threshold: cdktf.listMapper(oneDashboardPageWidgetTableThresholdToTerraform, true)(struct!.threshold),
    units: cdktf.listMapper(oneDashboardPageWidgetTableUnitsToTerraform, true)(struct!.units),
  }
}


export function oneDashboardPageWidgetTableToHclTerraform(struct?: OneDashboardPageWidgetTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktf.numberToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    facet_show_other_series: {
      value: cdktf.booleanToHclTerraform(struct!.facetShowOtherSeries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filter_current_dashboard: {
      value: cdktf.booleanToHclTerraform(struct!.filterCurrentDashboard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    height: {
      value: cdktf.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_time_range: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreTimeRange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    legend_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.legendEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    linked_entity_guids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.linkedEntityGuids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    refresh_rate: {
      value: cdktf.stringToHclTerraform(struct!.refreshRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    row: {
      value: cdktf.numberToHclTerraform(struct!.row),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_left_max: {
      value: cdktf.numberToHclTerraform(struct!.yAxisLeftMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_left_min: {
      value: cdktf.numberToHclTerraform(struct!.yAxisLeftMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    colors: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetTableColorsToHclTerraform, true)(struct!.colors),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetTableColorsList",
    },
    data_format: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetTableDataFormatToHclTerraform, true)(struct!.dataFormat),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetTableDataFormatList",
    },
    initial_sorting: {
      value: oneDashboardPageWidgetTableInitialSortingToHclTerraform(struct!.initialSorting),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetTableInitialSortingList",
    },
    nrql_query: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetTableNrqlQueryToHclTerraform, true)(struct!.nrqlQuery),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetTableNrqlQueryList",
    },
    null_values: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetTableNullValuesToHclTerraform, true)(struct!.nullValues),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetTableNullValuesList",
    },
    threshold: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetTableThresholdToHclTerraform, true)(struct!.threshold),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetTableThresholdList",
    },
    units: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetTableUnitsToHclTerraform, true)(struct!.units),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetTableUnitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetTableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetTable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._facetShowOtherSeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.facetShowOtherSeries = this._facetShowOtherSeries;
    }
    if (this._filterCurrentDashboard !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterCurrentDashboard = this._filterCurrentDashboard;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._ignoreTimeRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreTimeRange = this._ignoreTimeRange;
    }
    if (this._legendEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.legendEnabled = this._legendEnabled;
    }
    if (this._linkedEntityGuids !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkedEntityGuids = this._linkedEntityGuids;
    }
    if (this._refreshRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshRate = this._refreshRate;
    }
    if (this._row !== undefined) {
      hasAnyValues = true;
      internalValueResult.row = this._row;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._yAxisLeftMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisLeftMax = this._yAxisLeftMax;
    }
    if (this._yAxisLeftMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisLeftMin = this._yAxisLeftMin;
    }
    if (this._colors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.colors = this._colors?.internalValue;
    }
    if (this._dataFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFormat = this._dataFormat?.internalValue;
    }
    if (this._initialSorting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialSorting = this._initialSorting?.internalValue;
    }
    if (this._nrqlQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrqlQuery = this._nrqlQuery?.internalValue;
    }
    if (this._nullValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValues = this._nullValues?.internalValue;
    }
    if (this._threshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold?.internalValue;
    }
    if (this._units?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.units = this._units?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetTable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._facetShowOtherSeries = undefined;
      this._filterCurrentDashboard = undefined;
      this._height = undefined;
      this._ignoreTimeRange = undefined;
      this._legendEnabled = undefined;
      this._linkedEntityGuids = undefined;
      this._refreshRate = undefined;
      this._row = undefined;
      this._title = undefined;
      this._width = undefined;
      this._yAxisLeftMax = undefined;
      this._yAxisLeftMin = undefined;
      this._colors.internalValue = undefined;
      this._dataFormat.internalValue = undefined;
      this._initialSorting.internalValue = undefined;
      this._nrqlQuery.internalValue = undefined;
      this._nullValues.internalValue = undefined;
      this._threshold.internalValue = undefined;
      this._units.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._facetShowOtherSeries = value.facetShowOtherSeries;
      this._filterCurrentDashboard = value.filterCurrentDashboard;
      this._height = value.height;
      this._ignoreTimeRange = value.ignoreTimeRange;
      this._legendEnabled = value.legendEnabled;
      this._linkedEntityGuids = value.linkedEntityGuids;
      this._refreshRate = value.refreshRate;
      this._row = value.row;
      this._title = value.title;
      this._width = value.width;
      this._yAxisLeftMax = value.yAxisLeftMax;
      this._yAxisLeftMin = value.yAxisLeftMin;
      this._colors.internalValue = value.colors;
      this._dataFormat.internalValue = value.dataFormat;
      this._initialSorting.internalValue = value.initialSorting;
      this._nrqlQuery.internalValue = value.nrqlQuery;
      this._nullValues.internalValue = value.nullValues;
      this._threshold.internalValue = value.threshold;
      this._units.internalValue = value.units;
    }
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

  // facet_show_other_series - computed: false, optional: true, required: false
  private _facetShowOtherSeries?: boolean | cdktf.IResolvable; 
  public get facetShowOtherSeries() {
    return this.getBooleanAttribute('facet_show_other_series');
  }
  public set facetShowOtherSeries(value: boolean | cdktf.IResolvable) {
    this._facetShowOtherSeries = value;
  }
  public resetFacetShowOtherSeries() {
    this._facetShowOtherSeries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetShowOtherSeriesInput() {
    return this._facetShowOtherSeries;
  }

  // filter_current_dashboard - computed: false, optional: true, required: false
  private _filterCurrentDashboard?: boolean | cdktf.IResolvable; 
  public get filterCurrentDashboard() {
    return this.getBooleanAttribute('filter_current_dashboard');
  }
  public set filterCurrentDashboard(value: boolean | cdktf.IResolvable) {
    this._filterCurrentDashboard = value;
  }
  public resetFilterCurrentDashboard() {
    this._filterCurrentDashboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterCurrentDashboardInput() {
    return this._filterCurrentDashboard;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_time_range - computed: false, optional: true, required: false
  private _ignoreTimeRange?: boolean | cdktf.IResolvable; 
  public get ignoreTimeRange() {
    return this.getBooleanAttribute('ignore_time_range');
  }
  public set ignoreTimeRange(value: boolean | cdktf.IResolvable) {
    this._ignoreTimeRange = value;
  }
  public resetIgnoreTimeRange() {
    this._ignoreTimeRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTimeRangeInput() {
    return this._ignoreTimeRange;
  }

  // legend_enabled - computed: false, optional: true, required: false
  private _legendEnabled?: boolean | cdktf.IResolvable; 
  public get legendEnabled() {
    return this.getBooleanAttribute('legend_enabled');
  }
  public set legendEnabled(value: boolean | cdktf.IResolvable) {
    this._legendEnabled = value;
  }
  public resetLegendEnabled() {
    this._legendEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendEnabledInput() {
    return this._legendEnabled;
  }

  // linked_entity_guids - computed: true, optional: true, required: false
  private _linkedEntityGuids?: string[]; 
  public get linkedEntityGuids() {
    return this.getListAttribute('linked_entity_guids');
  }
  public set linkedEntityGuids(value: string[]) {
    this._linkedEntityGuids = value;
  }
  public resetLinkedEntityGuids() {
    this._linkedEntityGuids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedEntityGuidsInput() {
    return this._linkedEntityGuids;
  }

  // refresh_rate - computed: false, optional: true, required: false
  private _refreshRate?: string; 
  public get refreshRate() {
    return this.getStringAttribute('refresh_rate');
  }
  public set refreshRate(value: string) {
    this._refreshRate = value;
  }
  public resetRefreshRate() {
    this._refreshRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshRateInput() {
    return this._refreshRate;
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

  // y_axis_left_max - computed: false, optional: true, required: false
  private _yAxisLeftMax?: number; 
  public get yAxisLeftMax() {
    return this.getNumberAttribute('y_axis_left_max');
  }
  public set yAxisLeftMax(value: number) {
    this._yAxisLeftMax = value;
  }
  public resetYAxisLeftMax() {
    this._yAxisLeftMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisLeftMaxInput() {
    return this._yAxisLeftMax;
  }

  // y_axis_left_min - computed: false, optional: true, required: false
  private _yAxisLeftMin?: number; 
  public get yAxisLeftMin() {
    return this.getNumberAttribute('y_axis_left_min');
  }
  public set yAxisLeftMin(value: number) {
    this._yAxisLeftMin = value;
  }
  public resetYAxisLeftMin() {
    this._yAxisLeftMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisLeftMinInput() {
    return this._yAxisLeftMin;
  }

  // colors - computed: false, optional: true, required: false
  private _colors = new OneDashboardPageWidgetTableColorsList(this, "colors", false);
  public get colors() {
    return this._colors;
  }
  public putColors(value: OneDashboardPageWidgetTableColors[] | cdktf.IResolvable) {
    this._colors.internalValue = value;
  }
  public resetColors() {
    this._colors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorsInput() {
    return this._colors.internalValue;
  }

  // data_format - computed: false, optional: true, required: false
  private _dataFormat = new OneDashboardPageWidgetTableDataFormatList(this, "data_format", false);
  public get dataFormat() {
    return this._dataFormat;
  }
  public putDataFormat(value: OneDashboardPageWidgetTableDataFormat[] | cdktf.IResolvable) {
    this._dataFormat.internalValue = value;
  }
  public resetDataFormat() {
    this._dataFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFormatInput() {
    return this._dataFormat.internalValue;
  }

  // initial_sorting - computed: false, optional: true, required: false
  private _initialSorting = new OneDashboardPageWidgetTableInitialSortingOutputReference(this, "initial_sorting");
  public get initialSorting() {
    return this._initialSorting;
  }
  public putInitialSorting(value: OneDashboardPageWidgetTableInitialSorting) {
    this._initialSorting.internalValue = value;
  }
  public resetInitialSorting() {
    this._initialSorting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialSortingInput() {
    return this._initialSorting.internalValue;
  }

  // nrql_query - computed: false, optional: false, required: true
  private _nrqlQuery = new OneDashboardPageWidgetTableNrqlQueryList(this, "nrql_query", false);
  public get nrqlQuery() {
    return this._nrqlQuery;
  }
  public putNrqlQuery(value: OneDashboardPageWidgetTableNrqlQuery[] | cdktf.IResolvable) {
    this._nrqlQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nrqlQueryInput() {
    return this._nrqlQuery.internalValue;
  }

  // null_values - computed: false, optional: true, required: false
  private _nullValues = new OneDashboardPageWidgetTableNullValuesList(this, "null_values", false);
  public get nullValues() {
    return this._nullValues;
  }
  public putNullValues(value: OneDashboardPageWidgetTableNullValues[] | cdktf.IResolvable) {
    this._nullValues.internalValue = value;
  }
  public resetNullValues() {
    this._nullValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValuesInput() {
    return this._nullValues.internalValue;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold = new OneDashboardPageWidgetTableThresholdList(this, "threshold", false);
  public get threshold() {
    return this._threshold;
  }
  public putThreshold(value: OneDashboardPageWidgetTableThreshold[] | cdktf.IResolvable) {
    this._threshold.internalValue = value;
  }
  public resetThreshold() {
    this._threshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold.internalValue;
  }

  // units - computed: false, optional: true, required: false
  private _units = new OneDashboardPageWidgetTableUnitsList(this, "units", false);
  public get units() {
    return this._units;
  }
  public putUnits(value: OneDashboardPageWidgetTableUnits[] | cdktf.IResolvable) {
    this._units.internalValue = value;
  }
  public resetUnits() {
    this._units.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units.internalValue;
  }
}

export class OneDashboardPageWidgetTableList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetTable[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetTableOutputReference {
    return new OneDashboardPageWidgetTableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPage {
  /**
  * The dashboard page's description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#description OneDashboard#description}
  */
  readonly description?: string;
  /**
  * The dashboard page's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
  /**
  * widget_area block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#widget_area OneDashboard#widget_area}
  */
  readonly widgetArea?: OneDashboardPageWidgetArea[] | cdktf.IResolvable;
  /**
  * widget_bar block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#widget_bar OneDashboard#widget_bar}
  */
  readonly widgetBar?: OneDashboardPageWidgetBar[] | cdktf.IResolvable;
  /**
  * widget_billboard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#widget_billboard OneDashboard#widget_billboard}
  */
  readonly widgetBillboard?: OneDashboardPageWidgetBillboard[] | cdktf.IResolvable;
  /**
  * widget_bullet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#widget_bullet OneDashboard#widget_bullet}
  */
  readonly widgetBullet?: OneDashboardPageWidgetBullet[] | cdktf.IResolvable;
  /**
  * widget_funnel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#widget_funnel OneDashboard#widget_funnel}
  */
  readonly widgetFunnel?: OneDashboardPageWidgetFunnel[] | cdktf.IResolvable;
  /**
  * widget_heatmap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#widget_heatmap OneDashboard#widget_heatmap}
  */
  readonly widgetHeatmap?: OneDashboardPageWidgetHeatmap[] | cdktf.IResolvable;
  /**
  * widget_histogram block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#widget_histogram OneDashboard#widget_histogram}
  */
  readonly widgetHistogram?: OneDashboardPageWidgetHistogram[] | cdktf.IResolvable;
  /**
  * widget_json block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#widget_json OneDashboard#widget_json}
  */
  readonly widgetJson?: OneDashboardPageWidgetJson[] | cdktf.IResolvable;
  /**
  * widget_line block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#widget_line OneDashboard#widget_line}
  */
  readonly widgetLine?: OneDashboardPageWidgetLine[] | cdktf.IResolvable;
  /**
  * widget_log_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#widget_log_table OneDashboard#widget_log_table}
  */
  readonly widgetLogTable?: OneDashboardPageWidgetLogTable[] | cdktf.IResolvable;
  /**
  * widget_markdown block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#widget_markdown OneDashboard#widget_markdown}
  */
  readonly widgetMarkdown?: OneDashboardPageWidgetMarkdown[] | cdktf.IResolvable;
  /**
  * widget_pie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#widget_pie OneDashboard#widget_pie}
  */
  readonly widgetPie?: OneDashboardPageWidgetPie[] | cdktf.IResolvable;
  /**
  * widget_stacked_bar block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#widget_stacked_bar OneDashboard#widget_stacked_bar}
  */
  readonly widgetStackedBar?: OneDashboardPageWidgetStackedBar[] | cdktf.IResolvable;
  /**
  * widget_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#widget_table OneDashboard#widget_table}
  */
  readonly widgetTable?: OneDashboardPageWidgetTable[] | cdktf.IResolvable;
}

export function oneDashboardPageToTerraform(struct?: OneDashboardPage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    widget_area: cdktf.listMapper(oneDashboardPageWidgetAreaToTerraform, true)(struct!.widgetArea),
    widget_bar: cdktf.listMapper(oneDashboardPageWidgetBarToTerraform, true)(struct!.widgetBar),
    widget_billboard: cdktf.listMapper(oneDashboardPageWidgetBillboardToTerraform, true)(struct!.widgetBillboard),
    widget_bullet: cdktf.listMapper(oneDashboardPageWidgetBulletToTerraform, true)(struct!.widgetBullet),
    widget_funnel: cdktf.listMapper(oneDashboardPageWidgetFunnelToTerraform, true)(struct!.widgetFunnel),
    widget_heatmap: cdktf.listMapper(oneDashboardPageWidgetHeatmapToTerraform, true)(struct!.widgetHeatmap),
    widget_histogram: cdktf.listMapper(oneDashboardPageWidgetHistogramToTerraform, true)(struct!.widgetHistogram),
    widget_json: cdktf.listMapper(oneDashboardPageWidgetJsonToTerraform, true)(struct!.widgetJson),
    widget_line: cdktf.listMapper(oneDashboardPageWidgetLineToTerraform, true)(struct!.widgetLine),
    widget_log_table: cdktf.listMapper(oneDashboardPageWidgetLogTableToTerraform, true)(struct!.widgetLogTable),
    widget_markdown: cdktf.listMapper(oneDashboardPageWidgetMarkdownToTerraform, true)(struct!.widgetMarkdown),
    widget_pie: cdktf.listMapper(oneDashboardPageWidgetPieToTerraform, true)(struct!.widgetPie),
    widget_stacked_bar: cdktf.listMapper(oneDashboardPageWidgetStackedBarToTerraform, true)(struct!.widgetStackedBar),
    widget_table: cdktf.listMapper(oneDashboardPageWidgetTableToTerraform, true)(struct!.widgetTable),
  }
}


export function oneDashboardPageToHclTerraform(struct?: OneDashboardPage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    widget_area: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetAreaToHclTerraform, true)(struct!.widgetArea),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetAreaList",
    },
    widget_bar: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetBarToHclTerraform, true)(struct!.widgetBar),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBarList",
    },
    widget_billboard: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetBillboardToHclTerraform, true)(struct!.widgetBillboard),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBillboardList",
    },
    widget_bullet: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetBulletToHclTerraform, true)(struct!.widgetBullet),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBulletList",
    },
    widget_funnel: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetFunnelToHclTerraform, true)(struct!.widgetFunnel),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetFunnelList",
    },
    widget_heatmap: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetHeatmapToHclTerraform, true)(struct!.widgetHeatmap),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHeatmapList",
    },
    widget_histogram: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetHistogramToHclTerraform, true)(struct!.widgetHistogram),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHistogramList",
    },
    widget_json: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetJsonToHclTerraform, true)(struct!.widgetJson),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetJsonList",
    },
    widget_line: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetLineToHclTerraform, true)(struct!.widgetLine),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetLineList",
    },
    widget_log_table: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetLogTableToHclTerraform, true)(struct!.widgetLogTable),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetLogTableList",
    },
    widget_markdown: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetMarkdownToHclTerraform, true)(struct!.widgetMarkdown),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetMarkdownList",
    },
    widget_pie: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetPieToHclTerraform, true)(struct!.widgetPie),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetPieList",
    },
    widget_stacked_bar: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetStackedBarToHclTerraform, true)(struct!.widgetStackedBar),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetStackedBarList",
    },
    widget_table: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetTableToHclTerraform, true)(struct!.widgetTable),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetTableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._widgetArea?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetArea = this._widgetArea?.internalValue;
    }
    if (this._widgetBar?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetBar = this._widgetBar?.internalValue;
    }
    if (this._widgetBillboard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetBillboard = this._widgetBillboard?.internalValue;
    }
    if (this._widgetBullet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetBullet = this._widgetBullet?.internalValue;
    }
    if (this._widgetFunnel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetFunnel = this._widgetFunnel?.internalValue;
    }
    if (this._widgetHeatmap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetHeatmap = this._widgetHeatmap?.internalValue;
    }
    if (this._widgetHistogram?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetHistogram = this._widgetHistogram?.internalValue;
    }
    if (this._widgetJson?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetJson = this._widgetJson?.internalValue;
    }
    if (this._widgetLine?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetLine = this._widgetLine?.internalValue;
    }
    if (this._widgetLogTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetLogTable = this._widgetLogTable?.internalValue;
    }
    if (this._widgetMarkdown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetMarkdown = this._widgetMarkdown?.internalValue;
    }
    if (this._widgetPie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetPie = this._widgetPie?.internalValue;
    }
    if (this._widgetStackedBar?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetStackedBar = this._widgetStackedBar?.internalValue;
    }
    if (this._widgetTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetTable = this._widgetTable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._widgetArea.internalValue = undefined;
      this._widgetBar.internalValue = undefined;
      this._widgetBillboard.internalValue = undefined;
      this._widgetBullet.internalValue = undefined;
      this._widgetFunnel.internalValue = undefined;
      this._widgetHeatmap.internalValue = undefined;
      this._widgetHistogram.internalValue = undefined;
      this._widgetJson.internalValue = undefined;
      this._widgetLine.internalValue = undefined;
      this._widgetLogTable.internalValue = undefined;
      this._widgetMarkdown.internalValue = undefined;
      this._widgetPie.internalValue = undefined;
      this._widgetStackedBar.internalValue = undefined;
      this._widgetTable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._widgetArea.internalValue = value.widgetArea;
      this._widgetBar.internalValue = value.widgetBar;
      this._widgetBillboard.internalValue = value.widgetBillboard;
      this._widgetBullet.internalValue = value.widgetBullet;
      this._widgetFunnel.internalValue = value.widgetFunnel;
      this._widgetHeatmap.internalValue = value.widgetHeatmap;
      this._widgetHistogram.internalValue = value.widgetHistogram;
      this._widgetJson.internalValue = value.widgetJson;
      this._widgetLine.internalValue = value.widgetLine;
      this._widgetLogTable.internalValue = value.widgetLogTable;
      this._widgetMarkdown.internalValue = value.widgetMarkdown;
      this._widgetPie.internalValue = value.widgetPie;
      this._widgetStackedBar.internalValue = value.widgetStackedBar;
      this._widgetTable.internalValue = value.widgetTable;
    }
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

  // widget_area - computed: false, optional: true, required: false
  private _widgetArea = new OneDashboardPageWidgetAreaList(this, "widget_area", false);
  public get widgetArea() {
    return this._widgetArea;
  }
  public putWidgetArea(value: OneDashboardPageWidgetArea[] | cdktf.IResolvable) {
    this._widgetArea.internalValue = value;
  }
  public resetWidgetArea() {
    this._widgetArea.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetAreaInput() {
    return this._widgetArea.internalValue;
  }

  // widget_bar - computed: false, optional: true, required: false
  private _widgetBar = new OneDashboardPageWidgetBarList(this, "widget_bar", false);
  public get widgetBar() {
    return this._widgetBar;
  }
  public putWidgetBar(value: OneDashboardPageWidgetBar[] | cdktf.IResolvable) {
    this._widgetBar.internalValue = value;
  }
  public resetWidgetBar() {
    this._widgetBar.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetBarInput() {
    return this._widgetBar.internalValue;
  }

  // widget_billboard - computed: false, optional: true, required: false
  private _widgetBillboard = new OneDashboardPageWidgetBillboardList(this, "widget_billboard", false);
  public get widgetBillboard() {
    return this._widgetBillboard;
  }
  public putWidgetBillboard(value: OneDashboardPageWidgetBillboard[] | cdktf.IResolvable) {
    this._widgetBillboard.internalValue = value;
  }
  public resetWidgetBillboard() {
    this._widgetBillboard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetBillboardInput() {
    return this._widgetBillboard.internalValue;
  }

  // widget_bullet - computed: false, optional: true, required: false
  private _widgetBullet = new OneDashboardPageWidgetBulletList(this, "widget_bullet", false);
  public get widgetBullet() {
    return this._widgetBullet;
  }
  public putWidgetBullet(value: OneDashboardPageWidgetBullet[] | cdktf.IResolvable) {
    this._widgetBullet.internalValue = value;
  }
  public resetWidgetBullet() {
    this._widgetBullet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetBulletInput() {
    return this._widgetBullet.internalValue;
  }

  // widget_funnel - computed: false, optional: true, required: false
  private _widgetFunnel = new OneDashboardPageWidgetFunnelList(this, "widget_funnel", false);
  public get widgetFunnel() {
    return this._widgetFunnel;
  }
  public putWidgetFunnel(value: OneDashboardPageWidgetFunnel[] | cdktf.IResolvable) {
    this._widgetFunnel.internalValue = value;
  }
  public resetWidgetFunnel() {
    this._widgetFunnel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetFunnelInput() {
    return this._widgetFunnel.internalValue;
  }

  // widget_heatmap - computed: false, optional: true, required: false
  private _widgetHeatmap = new OneDashboardPageWidgetHeatmapList(this, "widget_heatmap", false);
  public get widgetHeatmap() {
    return this._widgetHeatmap;
  }
  public putWidgetHeatmap(value: OneDashboardPageWidgetHeatmap[] | cdktf.IResolvable) {
    this._widgetHeatmap.internalValue = value;
  }
  public resetWidgetHeatmap() {
    this._widgetHeatmap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetHeatmapInput() {
    return this._widgetHeatmap.internalValue;
  }

  // widget_histogram - computed: false, optional: true, required: false
  private _widgetHistogram = new OneDashboardPageWidgetHistogramList(this, "widget_histogram", false);
  public get widgetHistogram() {
    return this._widgetHistogram;
  }
  public putWidgetHistogram(value: OneDashboardPageWidgetHistogram[] | cdktf.IResolvable) {
    this._widgetHistogram.internalValue = value;
  }
  public resetWidgetHistogram() {
    this._widgetHistogram.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetHistogramInput() {
    return this._widgetHistogram.internalValue;
  }

  // widget_json - computed: false, optional: true, required: false
  private _widgetJson = new OneDashboardPageWidgetJsonList(this, "widget_json", false);
  public get widgetJson() {
    return this._widgetJson;
  }
  public putWidgetJson(value: OneDashboardPageWidgetJson[] | cdktf.IResolvable) {
    this._widgetJson.internalValue = value;
  }
  public resetWidgetJson() {
    this._widgetJson.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetJsonInput() {
    return this._widgetJson.internalValue;
  }

  // widget_line - computed: false, optional: true, required: false
  private _widgetLine = new OneDashboardPageWidgetLineList(this, "widget_line", false);
  public get widgetLine() {
    return this._widgetLine;
  }
  public putWidgetLine(value: OneDashboardPageWidgetLine[] | cdktf.IResolvable) {
    this._widgetLine.internalValue = value;
  }
  public resetWidgetLine() {
    this._widgetLine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetLineInput() {
    return this._widgetLine.internalValue;
  }

  // widget_log_table - computed: false, optional: true, required: false
  private _widgetLogTable = new OneDashboardPageWidgetLogTableList(this, "widget_log_table", false);
  public get widgetLogTable() {
    return this._widgetLogTable;
  }
  public putWidgetLogTable(value: OneDashboardPageWidgetLogTable[] | cdktf.IResolvable) {
    this._widgetLogTable.internalValue = value;
  }
  public resetWidgetLogTable() {
    this._widgetLogTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetLogTableInput() {
    return this._widgetLogTable.internalValue;
  }

  // widget_markdown - computed: false, optional: true, required: false
  private _widgetMarkdown = new OneDashboardPageWidgetMarkdownList(this, "widget_markdown", false);
  public get widgetMarkdown() {
    return this._widgetMarkdown;
  }
  public putWidgetMarkdown(value: OneDashboardPageWidgetMarkdown[] | cdktf.IResolvable) {
    this._widgetMarkdown.internalValue = value;
  }
  public resetWidgetMarkdown() {
    this._widgetMarkdown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetMarkdownInput() {
    return this._widgetMarkdown.internalValue;
  }

  // widget_pie - computed: false, optional: true, required: false
  private _widgetPie = new OneDashboardPageWidgetPieList(this, "widget_pie", false);
  public get widgetPie() {
    return this._widgetPie;
  }
  public putWidgetPie(value: OneDashboardPageWidgetPie[] | cdktf.IResolvable) {
    this._widgetPie.internalValue = value;
  }
  public resetWidgetPie() {
    this._widgetPie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetPieInput() {
    return this._widgetPie.internalValue;
  }

  // widget_stacked_bar - computed: false, optional: true, required: false
  private _widgetStackedBar = new OneDashboardPageWidgetStackedBarList(this, "widget_stacked_bar", false);
  public get widgetStackedBar() {
    return this._widgetStackedBar;
  }
  public putWidgetStackedBar(value: OneDashboardPageWidgetStackedBar[] | cdktf.IResolvable) {
    this._widgetStackedBar.internalValue = value;
  }
  public resetWidgetStackedBar() {
    this._widgetStackedBar.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetStackedBarInput() {
    return this._widgetStackedBar.internalValue;
  }

  // widget_table - computed: false, optional: true, required: false
  private _widgetTable = new OneDashboardPageWidgetTableList(this, "widget_table", false);
  public get widgetTable() {
    return this._widgetTable;
  }
  public putWidgetTable(value: OneDashboardPageWidgetTable[] | cdktf.IResolvable) {
    this._widgetTable.internalValue = value;
  }
  public resetWidgetTable() {
    this._widgetTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetTableInput() {
    return this._widgetTable.internalValue;
  }
}

export class OneDashboardPageList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPage[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageOutputReference {
    return new OneDashboardPageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardVariableItem {
  /**
  * A human-friendly display string for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#title OneDashboard#title}
  */
  readonly title?: string;
  /**
  * A possible variable value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#value OneDashboard#value}
  */
  readonly value: string;
}

export function oneDashboardVariableItemToTerraform(struct?: OneDashboardVariableItem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    title: cdktf.stringToTerraform(struct!.title),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function oneDashboardVariableItemToHclTerraform(struct?: OneDashboardVariableItem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardVariableItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardVariableItem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardVariableItem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._title = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._title = value.title;
      this._value = value.value;
    }
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class OneDashboardVariableItemList extends cdktf.ComplexList {
  public internalValue? : OneDashboardVariableItem[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardVariableItemOutputReference {
    return new OneDashboardVariableItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardVariableNrqlQuery {
  /**
  * New Relic account ID(s) to issue the query against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#account_ids OneDashboard#account_ids}
  */
  readonly accountIds?: number[];
  /**
  * NRQL formatted query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#query OneDashboard#query}
  */
  readonly query: string;
}

export function oneDashboardVariableNrqlQueryToTerraform(struct?: OneDashboardVariableNrqlQueryOutputReference | OneDashboardVariableNrqlQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.accountIds),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function oneDashboardVariableNrqlQueryToHclTerraform(struct?: OneDashboardVariableNrqlQueryOutputReference | OneDashboardVariableNrqlQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.accountIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardVariableNrqlQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardVariableNrqlQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountIds = this._accountIds;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardVariableNrqlQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountIds = undefined;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountIds = value.accountIds;
      this._query = value.query;
    }
  }

  // account_ids - computed: false, optional: true, required: false
  private _accountIds?: number[]; 
  public get accountIds() {
    return this.getNumberListAttribute('account_ids');
  }
  public set accountIds(value: number[]) {
    this._accountIds = value;
  }
  public resetAccountIds() {
    this._accountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdsInput() {
    return this._accountIds;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}
export interface OneDashboardVariableOptions {
  /**
  * Only applies to variables of type NRQL. With this turned on, query condition defined with the variable will not be included in the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#excluded OneDashboard#excluded}
  */
  readonly excluded?: boolean | cdktf.IResolvable;
  /**
  * Only applies to variables of type NRQL. With this turned on, the time range for the NRQL query will override the time picker on dashboards and other pages. Turn this off to use the time picker as normal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}
  */
  readonly ignoreTimeRange?: boolean | cdktf.IResolvable;
  /**
  * Show apply button when multi-selecting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#show_apply_action OneDashboard#show_apply_action}
  */
  readonly showApplyAction?: boolean | cdktf.IResolvable;
}

export function oneDashboardVariableOptionsToTerraform(struct?: OneDashboardVariableOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded: cdktf.booleanToTerraform(struct!.excluded),
    ignore_time_range: cdktf.booleanToTerraform(struct!.ignoreTimeRange),
    show_apply_action: cdktf.booleanToTerraform(struct!.showApplyAction),
  }
}


export function oneDashboardVariableOptionsToHclTerraform(struct?: OneDashboardVariableOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded: {
      value: cdktf.booleanToHclTerraform(struct!.excluded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_time_range: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreTimeRange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_apply_action: {
      value: cdktf.booleanToHclTerraform(struct!.showApplyAction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardVariableOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardVariableOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.excluded = this._excluded;
    }
    if (this._ignoreTimeRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreTimeRange = this._ignoreTimeRange;
    }
    if (this._showApplyAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.showApplyAction = this._showApplyAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardVariableOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excluded = undefined;
      this._ignoreTimeRange = undefined;
      this._showApplyAction = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excluded = value.excluded;
      this._ignoreTimeRange = value.ignoreTimeRange;
      this._showApplyAction = value.showApplyAction;
    }
  }

  // excluded - computed: false, optional: true, required: false
  private _excluded?: boolean | cdktf.IResolvable; 
  public get excluded() {
    return this.getBooleanAttribute('excluded');
  }
  public set excluded(value: boolean | cdktf.IResolvable) {
    this._excluded = value;
  }
  public resetExcluded() {
    this._excluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedInput() {
    return this._excluded;
  }

  // ignore_time_range - computed: false, optional: true, required: false
  private _ignoreTimeRange?: boolean | cdktf.IResolvable; 
  public get ignoreTimeRange() {
    return this.getBooleanAttribute('ignore_time_range');
  }
  public set ignoreTimeRange(value: boolean | cdktf.IResolvable) {
    this._ignoreTimeRange = value;
  }
  public resetIgnoreTimeRange() {
    this._ignoreTimeRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTimeRangeInput() {
    return this._ignoreTimeRange;
  }

  // show_apply_action - computed: false, optional: true, required: false
  private _showApplyAction?: boolean | cdktf.IResolvable; 
  public get showApplyAction() {
    return this.getBooleanAttribute('show_apply_action');
  }
  public set showApplyAction(value: boolean | cdktf.IResolvable) {
    this._showApplyAction = value;
  }
  public resetShowApplyAction() {
    this._showApplyAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showApplyActionInput() {
    return this._showApplyAction;
  }
}

export class OneDashboardVariableOptionsList extends cdktf.ComplexList {
  public internalValue? : OneDashboardVariableOptions[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardVariableOptionsOutputReference {
    return new OneDashboardVariableOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardVariable {
  /**
  * Default values for this variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#default_values OneDashboard#default_values}
  */
  readonly defaultValues?: string[];
  /**
  * Indicates whether this variable supports multiple selection or not. Only applies to variables of type NRQL or ENUM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#is_multi_selection OneDashboard#is_multi_selection}
  */
  readonly isMultiSelection?: boolean | cdktf.IResolvable;
  /**
  * The variable identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
  /**
  * Indicates the strategy to apply when replacing a variable in a NRQL query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#replacement_strategy OneDashboard#replacement_strategy}
  */
  readonly replacementStrategy: string;
  /**
  * Human-friendly display string for this variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * Specifies the data type of the variable and where its possible values may come from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#type OneDashboard#type}
  */
  readonly type: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#item OneDashboard#item}
  */
  readonly item?: OneDashboardVariableItem[] | cdktf.IResolvable;
  /**
  * nrql_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery?: OneDashboardVariableNrqlQuery;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/one_dashboard#options OneDashboard#options}
  */
  readonly options?: OneDashboardVariableOptions[] | cdktf.IResolvable;
}

export function oneDashboardVariableToTerraform(struct?: OneDashboardVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultValues),
    is_multi_selection: cdktf.booleanToTerraform(struct!.isMultiSelection),
    name: cdktf.stringToTerraform(struct!.name),
    replacement_strategy: cdktf.stringToTerraform(struct!.replacementStrategy),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
    item: cdktf.listMapper(oneDashboardVariableItemToTerraform, true)(struct!.item),
    nrql_query: oneDashboardVariableNrqlQueryToTerraform(struct!.nrqlQuery),
    options: cdktf.listMapper(oneDashboardVariableOptionsToTerraform, true)(struct!.options),
  }
}


export function oneDashboardVariableToHclTerraform(struct?: OneDashboardVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_multi_selection: {
      value: cdktf.booleanToHclTerraform(struct!.isMultiSelection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replacement_strategy: {
      value: cdktf.stringToHclTerraform(struct!.replacementStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    item: {
      value: cdktf.listMapperHcl(oneDashboardVariableItemToHclTerraform, true)(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardVariableItemList",
    },
    nrql_query: {
      value: oneDashboardVariableNrqlQueryToHclTerraform(struct!.nrqlQuery),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardVariableNrqlQueryList",
    },
    options: {
      value: cdktf.listMapperHcl(oneDashboardVariableOptionsToHclTerraform, true)(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardVariableOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardVariable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValues = this._defaultValues;
    }
    if (this._isMultiSelection !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMultiSelection = this._isMultiSelection;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._replacementStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacementStrategy = this._replacementStrategy;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    if (this._nrqlQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrqlQuery = this._nrqlQuery?.internalValue;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardVariable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValues = undefined;
      this._isMultiSelection = undefined;
      this._name = undefined;
      this._replacementStrategy = undefined;
      this._title = undefined;
      this._type = undefined;
      this._item.internalValue = undefined;
      this._nrqlQuery.internalValue = undefined;
      this._options.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValues = value.defaultValues;
      this._isMultiSelection = value.isMultiSelection;
      this._name = value.name;
      this._replacementStrategy = value.replacementStrategy;
      this._title = value.title;
      this._type = value.type;
      this._item.internalValue = value.item;
      this._nrqlQuery.internalValue = value.nrqlQuery;
      this._options.internalValue = value.options;
    }
  }

  // default_values - computed: false, optional: true, required: false
  private _defaultValues?: string[]; 
  public get defaultValues() {
    return this.getListAttribute('default_values');
  }
  public set defaultValues(value: string[]) {
    this._defaultValues = value;
  }
  public resetDefaultValues() {
    this._defaultValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValuesInput() {
    return this._defaultValues;
  }

  // is_multi_selection - computed: false, optional: true, required: false
  private _isMultiSelection?: boolean | cdktf.IResolvable; 
  public get isMultiSelection() {
    return this.getBooleanAttribute('is_multi_selection');
  }
  public set isMultiSelection(value: boolean | cdktf.IResolvable) {
    this._isMultiSelection = value;
  }
  public resetIsMultiSelection() {
    this._isMultiSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMultiSelectionInput() {
    return this._isMultiSelection;
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

  // replacement_strategy - computed: false, optional: false, required: true
  private _replacementStrategy?: string; 
  public get replacementStrategy() {
    return this.getStringAttribute('replacement_strategy');
  }
  public set replacementStrategy(value: string) {
    this._replacementStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementStrategyInput() {
    return this._replacementStrategy;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // item - computed: false, optional: true, required: false
  private _item = new OneDashboardVariableItemList(this, "item", false);
  public get item() {
    return this._item;
  }
  public putItem(value: OneDashboardVariableItem[] | cdktf.IResolvable) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }

  // nrql_query - computed: false, optional: true, required: false
  private _nrqlQuery = new OneDashboardVariableNrqlQueryOutputReference(this, "nrql_query");
  public get nrqlQuery() {
    return this._nrqlQuery;
  }
  public putNrqlQuery(value: OneDashboardVariableNrqlQuery) {
    this._nrqlQuery.internalValue = value;
  }
  public resetNrqlQuery() {
    this._nrqlQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nrqlQueryInput() {
    return this._nrqlQuery.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new OneDashboardVariableOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: OneDashboardVariableOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}

export class OneDashboardVariableList extends cdktf.ComplexList {
  public internalValue? : OneDashboardVariable[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardVariableOutputReference {
    return new OneDashboardVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
