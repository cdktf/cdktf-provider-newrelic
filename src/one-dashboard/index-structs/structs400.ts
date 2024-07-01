import * as cdktf from 'cdktf';
import { OneDashboardPageWidgetStackedBarColors,
oneDashboardPageWidgetStackedBarColorsToTerraform,
oneDashboardPageWidgetStackedBarColorsToHclTerraform,
OneDashboardPageWidgetStackedBarColorsList,
OneDashboardPageWidgetStackedBarNrqlQuery,
oneDashboardPageWidgetStackedBarNrqlQueryToTerraform,
oneDashboardPageWidgetStackedBarNrqlQueryToHclTerraform,
OneDashboardPageWidgetStackedBarNrqlQueryList,
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
OneDashboardPageWidgetLineList,
OneDashboardPageWidgetLogTable,
oneDashboardPageWidgetLogTableToTerraform,
oneDashboardPageWidgetLogTableToHclTerraform,
OneDashboardPageWidgetLogTableList,
OneDashboardPageWidgetMarkdown,
oneDashboardPageWidgetMarkdownToTerraform,
oneDashboardPageWidgetMarkdownToHclTerraform,
OneDashboardPageWidgetMarkdownList,
OneDashboardPageWidgetPie,
oneDashboardPageWidgetPieToTerraform,
oneDashboardPageWidgetPieToHclTerraform,
OneDashboardPageWidgetPieList } from './structs0'
export interface OneDashboardPageWidgetStackedBarNullValuesSeriesOverrides {
  /**
  * Null value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
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
export interface OneDashboardPageWidgetStackedBarUnitsSeriesOverrides {
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
  /**
  * Unit name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#unit OneDashboard#unit}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#facet_show_other_series OneDashboard#facet_show_other_series}
  */
  readonly facetShowOtherSeries?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}
  */
  readonly ignoreTimeRange?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#legend_enabled OneDashboard#legend_enabled}
  */
  readonly legendEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * A title for the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#width OneDashboard#width}
  */
  readonly width?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#y_axis_left_max OneDashboard#y_axis_left_max}
  */
  readonly yAxisLeftMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#y_axis_left_min OneDashboard#y_axis_left_min}
  */
  readonly yAxisLeftMin?: number;
  /**
  * colors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#colors OneDashboard#colors}
  */
  readonly colors?: OneDashboardPageWidgetStackedBarColors[] | cdktf.IResolvable;
  /**
  * nrql_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery: OneDashboardPageWidgetStackedBarNrqlQuery[] | cdktf.IResolvable;
  /**
  * null_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#null_values OneDashboard#null_values}
  */
  readonly nullValues?: OneDashboardPageWidgetStackedBarNullValues[] | cdktf.IResolvable;
  /**
  * units block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#units OneDashboard#units}
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
    row: cdktf.numberToTerraform(struct!.row),
    title: cdktf.stringToTerraform(struct!.title),
    width: cdktf.numberToTerraform(struct!.width),
    y_axis_left_max: cdktf.numberToTerraform(struct!.yAxisLeftMax),
    y_axis_left_min: cdktf.numberToTerraform(struct!.yAxisLeftMin),
    colors: cdktf.listMapper(oneDashboardPageWidgetStackedBarColorsToTerraform, true)(struct!.colors),
    nrql_query: cdktf.listMapper(oneDashboardPageWidgetStackedBarNrqlQueryToTerraform, true)(struct!.nrqlQuery),
    null_values: cdktf.listMapper(oneDashboardPageWidgetStackedBarNullValuesToTerraform, true)(struct!.nullValues),
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

  public set internalValue(value: OneDashboardPageWidgetStackedBar | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._facetShowOtherSeries = undefined;
      this._height = undefined;
      this._ignoreTimeRange = undefined;
      this._legendEnabled = undefined;
      this._row = undefined;
      this._title = undefined;
      this._width = undefined;
      this._yAxisLeftMax = undefined;
      this._yAxisLeftMin = undefined;
      this._colors.internalValue = undefined;
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
      this._row = value.row;
      this._title = value.title;
      this._width = value.width;
      this._yAxisLeftMax = value.yAxisLeftMax;
      this._yAxisLeftMin = value.yAxisLeftMin;
      this._colors.internalValue = value.colors;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
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
export interface OneDashboardPageWidgetTableNrqlQuery {
  /**
  * The account id used for the NRQL query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#account_id OneDashboard#account_id}
  */
  readonly accountId?: number;
  /**
  * The NRQL query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#query OneDashboard#query}
  */
  readonly query: string;
}

export function oneDashboardPageWidgetTableNrqlQueryToTerraform(struct?: OneDashboardPageWidgetTableNrqlQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.numberToTerraform(struct!.accountId),
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
      value: cdktf.numberToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#column_name OneDashboard#column_name}
  */
  readonly columnName?: string;
  /**
  * The number from which the range starts in thresholds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#from OneDashboard#from}
  */
  readonly from?: number;
  /**
  * Severity of the threshold, which would reflect in the widget, in the range of the threshold specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#severity OneDashboard#severity}
  */
  readonly severity?: string;
  /**
  * The number at which the range ends in thresholds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#to OneDashboard#to}
  */
  readonly to?: number;
}

export function oneDashboardPageWidgetTableThresholdToTerraform(struct?: OneDashboardPageWidgetTableThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    from: cdktf.numberToTerraform(struct!.from),
    severity: cdktf.stringToTerraform(struct!.severity),
    to: cdktf.numberToTerraform(struct!.to),
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
      value: cdktf.numberToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.numberToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
  private _from?: number; 
  public get from() {
    return this.getNumberAttribute('from');
  }
  public set from(value: number) {
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
  private _to?: number; 
  public get to() {
    return this.getNumberAttribute('to');
  }
  public set to(value: number) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
  /**
  * Unit name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#unit OneDashboard#unit}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#facet_show_other_series OneDashboard#facet_show_other_series}
  */
  readonly facetShowOtherSeries?: boolean | cdktf.IResolvable;
  /**
  * Use this item to filter the current dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#filter_current_dashboard OneDashboard#filter_current_dashboard}
  */
  readonly filterCurrentDashboard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}
  */
  readonly ignoreTimeRange?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#legend_enabled OneDashboard#legend_enabled}
  */
  readonly legendEnabled?: boolean | cdktf.IResolvable;
  /**
  * Related entities. Currently only supports Dashboard entities, but may allow other cases in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#linked_entity_guids OneDashboard#linked_entity_guids}
  */
  readonly linkedEntityGuids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * A title for the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#width OneDashboard#width}
  */
  readonly width?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#y_axis_left_max OneDashboard#y_axis_left_max}
  */
  readonly yAxisLeftMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#y_axis_left_min OneDashboard#y_axis_left_min}
  */
  readonly yAxisLeftMin?: number;
  /**
  * colors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#colors OneDashboard#colors}
  */
  readonly colors?: OneDashboardPageWidgetTableColors[] | cdktf.IResolvable;
  /**
  * nrql_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery: OneDashboardPageWidgetTableNrqlQuery[] | cdktf.IResolvable;
  /**
  * null_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#null_values OneDashboard#null_values}
  */
  readonly nullValues?: OneDashboardPageWidgetTableNullValues[] | cdktf.IResolvable;
  /**
  * threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#threshold OneDashboard#threshold}
  */
  readonly threshold?: OneDashboardPageWidgetTableThreshold[] | cdktf.IResolvable;
  /**
  * units block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#units OneDashboard#units}
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
    row: cdktf.numberToTerraform(struct!.row),
    title: cdktf.stringToTerraform(struct!.title),
    width: cdktf.numberToTerraform(struct!.width),
    y_axis_left_max: cdktf.numberToTerraform(struct!.yAxisLeftMax),
    y_axis_left_min: cdktf.numberToTerraform(struct!.yAxisLeftMin),
    colors: cdktf.listMapper(oneDashboardPageWidgetTableColorsToTerraform, true)(struct!.colors),
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
      this._row = undefined;
      this._title = undefined;
      this._width = undefined;
      this._yAxisLeftMax = undefined;
      this._yAxisLeftMin = undefined;
      this._colors.internalValue = undefined;
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
      this._row = value.row;
      this._title = value.title;
      this._width = value.width;
      this._yAxisLeftMax = value.yAxisLeftMax;
      this._yAxisLeftMin = value.yAxisLeftMin;
      this._colors.internalValue = value.colors;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#description OneDashboard#description}
  */
  readonly description?: string;
  /**
  * The dashboard page's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
  /**
  * widget_area block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#widget_area OneDashboard#widget_area}
  */
  readonly widgetArea?: OneDashboardPageWidgetArea[] | cdktf.IResolvable;
  /**
  * widget_bar block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#widget_bar OneDashboard#widget_bar}
  */
  readonly widgetBar?: OneDashboardPageWidgetBar[] | cdktf.IResolvable;
  /**
  * widget_billboard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#widget_billboard OneDashboard#widget_billboard}
  */
  readonly widgetBillboard?: OneDashboardPageWidgetBillboard[] | cdktf.IResolvable;
  /**
  * widget_bullet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#widget_bullet OneDashboard#widget_bullet}
  */
  readonly widgetBullet?: OneDashboardPageWidgetBullet[] | cdktf.IResolvable;
  /**
  * widget_funnel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#widget_funnel OneDashboard#widget_funnel}
  */
  readonly widgetFunnel?: OneDashboardPageWidgetFunnel[] | cdktf.IResolvable;
  /**
  * widget_heatmap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#widget_heatmap OneDashboard#widget_heatmap}
  */
  readonly widgetHeatmap?: OneDashboardPageWidgetHeatmap[] | cdktf.IResolvable;
  /**
  * widget_histogram block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#widget_histogram OneDashboard#widget_histogram}
  */
  readonly widgetHistogram?: OneDashboardPageWidgetHistogram[] | cdktf.IResolvable;
  /**
  * widget_json block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#widget_json OneDashboard#widget_json}
  */
  readonly widgetJson?: OneDashboardPageWidgetJson[] | cdktf.IResolvable;
  /**
  * widget_line block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#widget_line OneDashboard#widget_line}
  */
  readonly widgetLine?: OneDashboardPageWidgetLine[] | cdktf.IResolvable;
  /**
  * widget_log_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#widget_log_table OneDashboard#widget_log_table}
  */
  readonly widgetLogTable?: OneDashboardPageWidgetLogTable[] | cdktf.IResolvable;
  /**
  * widget_markdown block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#widget_markdown OneDashboard#widget_markdown}
  */
  readonly widgetMarkdown?: OneDashboardPageWidgetMarkdown[] | cdktf.IResolvable;
  /**
  * widget_pie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#widget_pie OneDashboard#widget_pie}
  */
  readonly widgetPie?: OneDashboardPageWidgetPie[] | cdktf.IResolvable;
  /**
  * widget_stacked_bar block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#widget_stacked_bar OneDashboard#widget_stacked_bar}
  */
  readonly widgetStackedBar?: OneDashboardPageWidgetStackedBar[] | cdktf.IResolvable;
  /**
  * widget_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#widget_table OneDashboard#widget_table}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#title OneDashboard#title}
  */
  readonly title?: string;
  /**
  * A possible variable value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#value OneDashboard#value}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#account_ids OneDashboard#account_ids}
  */
  readonly accountIds?: number[];
  /**
  * NRQL formatted query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#query OneDashboard#query}
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
  * Only applies to variables of type NRQL. With this turned on, the time range for the NRQL query will override the time picker on dashboards and other pages. Turn this off to use the time picker as normal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}
  */
  readonly ignoreTimeRange?: boolean | cdktf.IResolvable;
}

export function oneDashboardVariableOptionsToTerraform(struct?: OneDashboardVariableOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_time_range: cdktf.booleanToTerraform(struct!.ignoreTimeRange),
  }
}


export function oneDashboardVariableOptionsToHclTerraform(struct?: OneDashboardVariableOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_time_range: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreTimeRange),
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
    if (this._ignoreTimeRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreTimeRange = this._ignoreTimeRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardVariableOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreTimeRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreTimeRange = value.ignoreTimeRange;
    }
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#default_values OneDashboard#default_values}
  */
  readonly defaultValues?: string[];
  /**
  * Indicates whether this variable supports multiple selection or not. Only applies to variables of type NRQL or ENUM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#is_multi_selection OneDashboard#is_multi_selection}
  */
  readonly isMultiSelection?: boolean | cdktf.IResolvable;
  /**
  * The variable identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
  /**
  * Indicates the strategy to apply when replacing a variable in a NRQL query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#replacement_strategy OneDashboard#replacement_strategy}
  */
  readonly replacementStrategy: string;
  /**
  * Human-friendly display string for this variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * Specifies the data type of the variable and where its possible values may come from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#type OneDashboard#type}
  */
  readonly type: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#item OneDashboard#item}
  */
  readonly item?: OneDashboardVariableItem[] | cdktf.IResolvable;
  /**
  * nrql_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery?: OneDashboardVariableNrqlQuery;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.38.1/docs/resources/one_dashboard#options OneDashboard#options}
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
